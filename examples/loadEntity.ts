import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addBasicAtuh } from './helpers/basciAuth'

import { AFApiClient, AFApiConfig, AFQueryOptions, AFInterniDoklad, AFQueryDetail } from '../src/index'
import { Filter } from '../src/abra/AFFilter'

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

const run = async () => {
  try {
    const data = await api.query(AFInterniDoklad, queryOpts)
    if (data) {
      const filtered = data.filter(d => d['uzivatelske-vazby'] && d['uzivatelske-vazby'].length)
      console.log('### With relations: ###')
      console.log(filtered)
      console.log(' ')
      console.log(' ')

      const vazby = await api.queryURels(AFInterniDoklad, filtered, {
        detail: ['id', 'kod', 'typDokl']
      })
      console.log('### Fetched relations: ###')
      console.log(vazby)
      console.log(' ')
      console.log(' ')

      if (vazby && vazby instanceof Array && vazby.length) {
        const vz = vazby[0]
        const populated = await api.populate([vz.referencedFrom], {
          detail: AFQueryDetail.FULL
        })
        console.log('### Populated: ###')
        console.log(populated)
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


