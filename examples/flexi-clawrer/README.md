# flexi-clawrer

A browser-based GUI for exploring any ABRA Flexi server. Connect to a company, browse all available evidence types, filter and paginate records, and drill into full record detail — all powered by the `abra-flexi` TypeScript client.

This is an example application that lives inside the `abra-flexi` repository and demonstrates real-world usage of the library.

---

## Prerequisites

- Node.js 18+
- The `abra-flexi` library built locally (`npm run build` from the repo root)
- Access to a running ABRA Flexi server

---

## Running the app

Install dependencies and start the Vite dev server from the `examples/flexi-clawrer` directory:

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

> **Note:** The `abra-flexi` dependency resolves to `../../` (the repo root) via a `file:` symlink, so any rebuild of the library is immediately picked up without reinstalling.

---

## Using the app

**1. Connect to a server**

Fill in the four fields in the top bar and press **Connect**:

| Field | Example |
|---|---|
| Server | `https://flexi.example.com` |
| Company path | `moje-firma` |
| Username | `admin` |
| Password | *(not stored anywhere)* |

The connection config (server, company, username) is persisted in `localStorage` so it survives page reloads. The password is kept in memory only and is never written to storage.

**2. Pick an entity**

The left sidebar lists all entity types (evidences) known to the library, sorted alphabetically by their Czech display name. Use the search box to filter by name or URL path. Click any entity to load it.

**3. Browse records**

The main panel shows a paginated table of records. Use the **Columns** picker in the toolbar to choose which fields to display. When columns are selected, a filter bar appears beneath the toolbar — type into any field and press **Apply** (or Enter) to filter results server-side using a `LIKE` query. Navigate between pages with the Previous/Next buttons at the bottom.

**4. Inspect a record**

Click any row to open the detail panel on the right. It fetches the full record (`AFQueryDetail.FULL`) and lists every non-empty field. Relation fields that can be resolved to another known entity are shown as links — clicking one pushes a new frame onto the detail panel's navigation stack. A breadcrumb trail lets you step back through previously viewed records or jump directly to an earlier point.

---

## How it works

### CORS proxy

ABRA Flexi servers typically do not allow cross-origin requests from a browser. `vite.config.ts` registers a custom Vite dev-server middleware at `/flexi-proxy` that acts as a reverse proxy: every API call is sent as `fetch('/flexi-proxy?target=<encoded-url>')` and the middleware pipes the request to the real server, attaching permissive CORS headers on the way back. This sidesteps CORS entirely during development with no changes required on the server.

### Authentication

Basic Auth credentials are assembled in `src/utils/basicAuth.ts` and injected into every outgoing request via the `fetch` override passed to `AFApiClient`. The server never sees the raw password through any URL or storage — it travels only in the `Authorization` header.

### State management

The app uses Vue's Composition API with two module-level singletons (no Pinia or Vuex):

- `useConnectionStore` — persists server/company/username to `localStorage` via `useLocalStorage`; holds the password in a plain `ref` that is never written to storage.
- `useBrowsingStore` — persists the active entity, selected columns, filter state, current page, and selected record ID to `localStorage`.
- `useApiClient` — holds the live `AFApiClient` instance in a `ref`. It is `null` when not connected.

All components read from these shared refs directly; no `provide`/`inject` is needed.

### Entity metadata

`src/utils/entityMeta.ts` builds a runtime registry by walking all exports of `abra-flexi` and collecting classes that extend `AFEntity`. From there it derives column metadata from each class's static `propAnnotations`, which the library generator writes at code-generation time. This is how the column picker, filter bar, and relation links know the shape of every entity without any hard-coded configuration.

---

## Project structure

```
flexi-clawrer/
├── src/
│   ├── App.vue                      # Root layout: header + sidebar + main area
│   ├── main.ts                      # Vue app bootstrap, PrimeVue config
│   ├── themePreset.ts               # PrimeVue theme customisation
│   │
│   ├── components/
│   │   ├── ConnectionForm.vue       # Top bar: server fields, connect/disconnect button
│   │   ├── EntityPicker.vue         # Left sidebar: searchable entity list
│   │   ├── EntityBrowser.vue        # Main panel: table, column picker, filter bar, pagination
│   │   └── EntityDetail.vue         # Right panel: full record detail with relation navigation
│   │
│   ├── storage/
│   │   ├── useLocalStorage.ts       # Generic reactive localStorage wrapper
│   │   ├── useConnectionStore.ts    # Connection config singleton (server, company, username + password ref)
│   │   ├── useBrowsingStore.ts      # Browsing state singleton (entity, columns, filter, page, selection)
│   │   └── useApiClient.ts          # AFApiClient singleton ref
│   │
│   ├── utils/
│   │   ├── entityMeta.ts            # Runtime entity registry, column metadata, formatting helpers
│   │   └── basicAuth.ts             # Basic Auth header builder
│   │
│   └── types/
│       └── index.ts                 # ConnectionConfig, BrowsingState interfaces and defaults
│
├── vite.config.ts                   # Vite config + flexi-proxy middleware
├── package.json                     # Dependencies (abra-flexi via file:../../)
└── tsconfig.app.json                # TypeScript config for the app source
```

---

## Tech stack

- [Vue 3](https://vuejs.org) with `<script setup>` and the Composition API
- [Vite](https://vite.dev) as the build tool and dev server
- [PrimeVue 4](https://primevue.org) for UI components
- [Tailwind CSS 4](https://tailwindcss.com) for utility styling
- [`abra-flexi`](../../README.md) for all Flexi API communication
