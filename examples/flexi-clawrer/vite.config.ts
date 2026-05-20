import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import tailwindcss from '@tailwindcss/vite'
import http from 'node:http'
import https from 'node:https'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
    {
      // Dynamic reverse-proxy for dev — avoids CORS when talking to Flexi servers.
      // Usage: fetch('/flexi-proxy?target=https%3A%2F%2Fserver%2Fc%2Fcompany%2Frest%2F...')
      name: 'flexi-proxy',
      configureServer(server) {
        server.middlewares.use('/flexi-proxy', (req, res) => {
          // ── CORS preflight ──────────────────────────────────────────────
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Headers', '*')
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

          if (req.method === 'OPTIONS') {
            res.writeHead(204)
            res.end()
            return
          }

          // ── Extract & validate target ───────────────────────────────────
          const reqUrl = new URL(req.url ?? '/', 'http://localhost')
          const raw = reqUrl.searchParams.get('target')
          if (!raw) {
            res.writeHead(400)
            res.end('Missing ?target= parameter')
            return
          }

          let target: URL
          try {
            target = new URL(raw)
          } catch {
            res.writeHead(400)
            res.end(`Invalid target URL: ${raw}`)
            return
          }

          console.log(`[flexi-proxy] ${req.method} ${target.href}`)

          // ── Forward headers ─────────────────────────────────────────────
          const fwdHeaders: Record<string, string | string[]> = {}
          for (const [k, v] of Object.entries(req.headers)) {
            const lk = k.toLowerCase()
            // Drop hop-by-hop and origin headers the target shouldn't see
            if (['host', 'origin', 'referer', 'connection', 'te', 'upgrade'].includes(lk)) continue
            if (v !== undefined) fwdHeaders[k] = v as string | string[]
          }
          fwdHeaders['host'] = target.host

          // ── Proxy ───────────────────────────────────────────────────────
          const isHttps = target.protocol === 'https:'
          const client  = isHttps ? https : http
          const port    = target.port ? parseInt(target.port, 10) : isHttps ? 443 : 80

          const proxyReq = client.request(
            {
              hostname: target.hostname,
              port,
              path: target.pathname + target.search,
              method: req.method,
              headers: fwdHeaders,
              rejectUnauthorized: false, // allow self-signed certs in dev
            },
            (proxyRes) => {
              const resHeaders: Record<string, string | string[]> = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
              }
              for (const [k, v] of Object.entries(proxyRes.headers)) {
                // Strip upstream CORS headers — we set our own above
                if (k.toLowerCase().startsWith('access-control-')) continue
                if (v !== undefined) resHeaders[k] = v as string | string[]
              }
              res.writeHead(proxyRes.statusCode ?? 502, resHeaders)
              proxyRes.pipe(res)
            }
          )

          proxyReq.on('error', (err) => {
            if (!res.headersSent) res.writeHead(502)
            res.end(`Proxy error: ${err.message}`)
          })

          req.pipe(proxyReq)
        })
      },
    },
  ],
})
