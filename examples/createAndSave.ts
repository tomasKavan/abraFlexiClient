import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { withBasicAuth } from './helpers/basciAuth'
import { AFAdresar, AFApiClient, AFApiConfig, AFCenik, AFFakturaVydana, AFFakturaVydanaPolozka, AFTypFakturyVydane, CODE } from '../src'
import Big from 'big.js'

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
    return fetch(input, withBasicAuth(init, argv.u || '', argv.p || ''))
  }
}

const run = async () => {
  const api = new AFApiClient(apiOpts)

  const INVOICE_TYPE_KOD = 'FAKTURA'
  const CENIK_KOD = 'NESK'
  const COMPANY = 'ALZACZ'

  const invoice = await api.create(AFFakturaVydana)
  invoice.typDokl = await api.createIdStub(AFTypFakturyVydane, { kod: INVOICE_TYPE_KOD })
  invoice.firma = await api.createIdStub(AFAdresar, { kod: COMPANY })

  const item = await api.create(AFFakturaVydanaPolozka)
  invoice.polozkyDokladu = [item]

  item.cenik = await api.createIdStub(AFCenik, { kod: CENIK_KOD })
  item.cenaMj = new Big(200)
  item.mnozMj = new Big(2.5)
  item.objem = new Big(-2)

  await api.save(invoice, {})
}
run()
