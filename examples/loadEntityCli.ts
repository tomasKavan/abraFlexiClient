import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addBasicAtuh } from './helpers/basciAuth'

import { AFApiClient, AFApiConfig, AFFakturaPrijata, AFQueryOptions, EntityByName } from '../dist'
import { AFEntity, AFInterniDoklad } from '../src'
import { AFFilter } from '../dist/AFFilter'

const argv = yargs(hideBin(process.argv))
.option('s', { alias: 'server', type: 'string', description: 'URL to ABRA Flexi server. Without! company path component.', demandOption: true})
.option('c', { alias: 'company', type: 'string', description: 'A company path component.', demandOption: true})
.option('u', { alias: 'user', type: 'string', description: 'Username. Enables BASIC auth', demandOption: false})
.option('p', { alias: 'password', type: 'string', description: 'Password. Enables BASIC auth', demandOption: false})
.option('e', { alias: 'evidence', type: 'string', description: 'Evidence to fetch.', demandOption: true})
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

//['id', 'varSym', 'popis', ['uzivatelskeVazby', ['id', 'kod', 'vazbaTyp']], ['typDokl', ['id', 'kod', 'nazev', ['radaVydej', ['nazev', 'id', 'kod']]]]],

const cls = EntityByName(argv.e || 'AFFakturaPriajata')
const lQuery: AFQueryOptions<AFEntity, false> = {
  detail: ['id', 'varSym', 'popis', ['uzivatelske-vazby', ['id', 'kod', 'vazbaTyp', 'modul', 'evidenceType', 'objectId', 'object']], ['typDokl', ['id', 'kod', 'nazev']]],
  filter: new AFFilter("typDokl = '::td'", { td: 'INT.ICO.REVAL.IN'})
} 

const api = new AFApiClient(apiOpts)
const { data } = api.query(cls, lQuery)

data.then((d) => {
  console.log('Done')
  console.log((d as AFInterniDoklad[])[0].uzivatelskeVazby)
}).catch((e) => {
  console.error(e)
})