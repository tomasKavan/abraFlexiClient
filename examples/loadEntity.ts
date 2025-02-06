import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addBasicAtuh } from './helpers/basciAuth'

import { AFApiClient, AFApiConfig, AFQueryOptions, AFInterniDoklad, AFURelResult, AFQueryDetail } from '../src'
import { AFFilter, CODE, ID, Filter } from '../src/abra/AFFilter'

const argv = yargs(hideBin(process.argv))
.option('s', { alias: 'server', type: 'string', description: 'URL to ABRA Flexi server. Without! company path component.', demandOption: true})
.option('c', { alias: 'company', type: 'string', description: 'A company path component.', demandOption: true})
.option('u', { alias: 'user', type: 'string', description: 'Username. Enables BASIC auth', demandOption: false})
.option('p', { alias: 'password', type: 'string', description: 'Password. Enables BASIC auth', demandOption: false})
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

// ##### Play with query options here: #####
const queryOpts: AFQueryOptions = {
  detail: ['id', 'kod', 'typDokl', ['uzivatelske-vazby', ['id', 'evidenceType', 'objectId', 'vazbaTyp']]],
  filter: Filter(`typDokl = '::td'`, { td: 'INT.ICO.REVAL.IN'})
} 

const api = new AFApiClient(apiOpts)
const { data } = api.query(AFInterniDoklad, queryOpts)

const run = async () => {
  try {
    const fetchedData = await data
    if (fetchedData) {
      let fdata = (fetchedData instanceof Array) ? fetchedData : [fetchedData]
      const filtered = fdata.filter(d => d['uzivatelske-vazby'] && d['uzivatelske-vazby'].length)
      console.log('### With relations: ###')
      console.log(filtered)
      console.log(' ')
      console.log(' ')

      const { data: vazby } = api.queryURels(AFInterniDoklad, filtered, {
        detail: ['id', 'kod', 'typDokl']
      })
      const dVazby = await vazby
      console.log('### Fetched relations: ###')
      console.log(dVazby)
      console.log(' ')
      console.log(' ')

      if (dVazby && dVazby instanceof Array && dVazby.length) {
        const vz = dVazby[0]
        const { data: populated } = api.populate([vz.referencedFrom], {
          detail: AFQueryDetail.FULL
        })
        const dPopulated = await populated
        console.log('### Populated: ###')
        console.log(dPopulated)
        console.log(' ')
        console.log(' ')
      }

    }
    console.log('Done')
  } catch (e) {
    console.error(e)
  }
}
run()


