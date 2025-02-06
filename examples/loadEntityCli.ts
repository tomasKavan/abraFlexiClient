import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addBasicAtuh } from './helpers/basciAuth'

import { AFApiClient, AFApiConfig, AFFakturaPrijata, AFQueryOptions, EntityByName } from '../dist'
import { AFEntity, AFInterniDoklad } from '../src'
import { AFFilter, CODE, ID } from '../dist/abra/AFFilter'

const argv = yargs(hideBin(process.argv))
.option('s', { alias: 'server', type: 'string', description: 'URL to ABRA Flexi server. Without! company path component.', demandOption: true})
.option('c', { alias: 'company', type: 'string', description: 'A company path component.', demandOption: true})
.option('u', { alias: 'user', type: 'string', description: 'Username. Enables BASIC auth', demandOption: false})
.option('p', { alias: 'password', type: 'string', description: 'Password. Enables BASIC auth', demandOption: false})
.option('e', { alias: 'evidence', type: 'string', description: 'Evidence to fetch.', demandOption: true})
.option('l', { alias: 'limit', type: 'number', description: 'Limit of fetched items. 0 means all. Not present means ABRA FLexi native, which is 20', demandOption: false})
.option('t', { alias: 'start', type: 'number', description: 'starting index. Not preset means 0.', demandOption: false})
.option('d', { alias: 'code', type: 'string', description: 'Code-like ID of the requested entry. If present only 1 record is selected, limit and start are ignored.', demandOption: false})
.option('i', { alias: 'id', type: 'number', description: 'ABRA ID of the requested entry. If present only 1 record is selected, limit and start are ignored.', demandOption: false})
.help().alias('h', 'help')
.parseSync()

const apiOpts: AFApiConfig = {
  url: argv.s,
  company: argv.c
}

if (argv.u && argv.p) {
  apiOpts.fetch = (input, init) => {
    return fetch(input, addBasicAtuh(argv.u || '', argv.p || ''))
  }
}

const cls = EntityByName(argv.e || 'AFFakturaPriajata')

const queryOpts: AFQueryOptions<AFEntity, false> = {
  limit: argv.l,
  start: argv.t
} 
if (argv.d) {
  queryOpts.filter = CODE(argv.d)
} else if (argv.i) {
  queryOpts.filter = ID(argv.i)
}

const api = new AFApiClient(apiOpts)
const { data } = api.query(cls, queryOpts)

data.then((d) => {
  console.log(d)
  console.log('Done')
}).catch((e) => {
  console.error(e)
})
