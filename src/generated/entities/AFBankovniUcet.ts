import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUcetniObdobi } from './AFUcetniObdobi.js'
import { AFRegion } from './AFRegion.js'
import { AFRadaBanka } from './AFRadaBanka.js'
import { AFStredisko } from './AFStredisko.js'
import { AFPenezniUstav } from './AFPenezniUstav.js'
import { AFUcet } from './AFUcet.js'
import { AFMena } from './AFMena.js'
import { AFFormatElektronickehoBankovnictvi } from './AFFormatElektronickehoBankovnictvi.js'
import { AFFormatElektronickehoPrikazu } from './AFFormatElektronickehoPrikazu.js'
import { AFStat } from './AFStat.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { ElVypisDuplicita } from '../AFEntityEnums.js'

export class AFBankovniUcet extends AFEntity {
  static EntityPath: string = 'bankovni-ucet'
  static EntityName: string = 'Seznam bankovních účtů'
  static EntityType: string = 'BANKOVNI_UCET'

  // ID (db: IdBsp) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Platí od (db: IdUcetObdobiOd) - Platí od)
  ucetObdobiOd?: AFUcetniObdobi | null
  // Platí do (db: IdUcetObdobiDo) - Platí do)
  ucetObdobiDo?: AFUcetniObdobi | null
  // Platí od roku (db: PlatiOd) - Platí od roku)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do roku)
  platiDo?: number | null
  // Modul (db: Modul) - Modul)
  modul?: string | null
  // Číslo bank. účtu (db: Buc) - Číslo účtu)
  buc?: string | null
  // Specifický symbol (db: SpecSym) - Specifický symbol)
  specSym?: string | null
  // IBAN (db: Iban) - IBAN)
  iban?: string | null
  // BIC (db: Bic) - BIC)
  bic?: string | null
  // Název banky (db: NazBanky) - Název)
  nazBanky?: string | null
  // Název klienta (db: ZkrKlienta) - Název klienta)
  zkrKlienta?: string | null
  // výpisy (db: SloVypis) - výpisy)
  sloVypis?: string | null
  // příkazy (db: SloPrikaz) - příkazy)
  sloPrikaz?: string | null
  // Přípona výpisu (db: PriVypis) - přípona)
  priVypis?: string | null
  // Přípona příkazu (db: PriPrikaz) - přípona)
  priPrikaz?: string | null
  // Příp. zahr. přík. (db: PriPrikazZahr) - příp.zahr.)
  priPrikazZahr?: string | null
  // Název protistrany v textu příkazu (db: PrikPopKlient) - Název protistrany v textu příkazu)
  prikPopKlient?: boolean | null
  // Popis dokladu v textu příkazu (db: PrikPopPopis) - Popis dokladu v textu příkazu)
  prikPopPopis?: boolean | null
  // Kontrolovat duplicitu výpisů (db: VypisDuplicitaK) - Kontrolovat duplicitu výpisů)
  vypisDuplicitaK?: ElVypisDuplicita | null
  // Token pro příkazy (db: TokenPrikaz) - Token pro příkazy)
  tokenPrikaz?: string | null
  // Token pro příkazy - platnost do (db: TokenPrikazPlatiDo) - Token pro příkazy - platnost do)
  tokenPrikazPlatiDo?: Date | null
  // Token pro výpisy (db: TokenVypis) - Token pro výpisy)
  tokenVypis?: string | null
  // Token pro výpisy - platnost do (db: TokenVypisPlatiDo) - Token pro výpisy - platnost do)
  tokenVypisPlatiDo?: Date | null
  // Prim. ban. účet (db: BucPrimarni) - Primární účet)
  bucPrimarni?: boolean | null
  // Ulice (db: Ulice) - Ulice)
  ulice?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion | null
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
  // Telefon (db: Tel) - Telefon)
  tel?: string | null
  // Mobil (db: Mobil) - Mobil)
  mobil?: string | null
  // Fax (db: Fax) - Fax)
  fax?: string | null
  // E-mail (db: Email) - E-mail)
  email?: string | null
  // WWW (db: Www) - WWW)
  www?: string | null
  // Vytvářet přecenění (db: VytvaretPreceneni) - Vytvářet přecenění při inicializaci účetního období)
  vytvaretPreceneni?: boolean | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Řada pro příjem (db: IdRadyPrijem) - Řada pro příjem)
  radaPrijem?: AFRadaBanka | null
  // Řada pro výdej (db: IdRadyVydej) - Řada pro výdej)
  radaVydej?: AFRadaBanka | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Kód banky (db: IdSmerKod) - Kód banky)
  smerKod?: AFPenezniUstav | null
  // Účet banky (db: IdPrimUcet) - Účet banky)
  primUcet?: AFUcet | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Formát el. bank. pro výpisy (db: IdElBanFormat) - Formát - výpisy)
  elBanFormatVypis?: AFFormatElektronickehoBankovnictvi | null
  // Formát el. bank. pro příkazy (db: IdElBanFormatPrikaz) - Formát - příkazy)
  elBanFormatPrikaz?: AFFormatElektronickehoPrikazu | null
  // Stahovat výpisy od (db: StahovatVypisOd) - Stahovat výpisy od)
  stahovatVypisOd?: Date | null
  // Měna banky (db: IdMenaBanky) - Měna banky)
  menaBanky?: AFMena | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    ucetObdobiOd : {
      key: 'ucetObdobiOd',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    ucetObdobiDo : {
      key: 'ucetObdobiDo',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    buc : {
      key: 'buc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    specSym : {
      key: 'specSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    iban : {
      key: 'iban',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    bic : {
      key: 'bic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazBanky : {
      key: 'nazBanky',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zkrKlienta : {
      key: 'zkrKlienta',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    sloVypis : {
      key: 'sloVypis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    sloPrikaz : {
      key: 'sloPrikaz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    priVypis : {
      key: 'priVypis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    priPrikaz : {
      key: 'priPrikaz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 3,
      
    },
    priPrikazZahr : {
      key: 'priPrikazZahr',
      type: PropertyType.String,
      isArray: false,
      maxLength: 3,
      
    },
    prikPopKlient : {
      key: 'prikPopKlient',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    prikPopPopis : {
      key: 'prikPopPopis',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vypisDuplicitaK : {
      key: 'vypisDuplicitaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ElVypisDuplicita',
      enum: ElVypisDuplicita,
      
    },
    tokenPrikaz : {
      key: 'tokenPrikaz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    tokenPrikazPlatiDo : {
      key: 'tokenPrikazPlatiDo',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    tokenVypis : {
      key: 'tokenVypis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    tokenVypisPlatiDo : {
      key: 'tokenVypisPlatiDo',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    bucPrimarni : {
      key: 'bucPrimarni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ulice : {
      key: 'ulice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    region : {
      key: 'region',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
    },
    psc : {
      key: 'psc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    tel : {
      key: 'tel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mobil : {
      key: 'mobil',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    fax : {
      key: 'fax',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    email : {
      key: 'email',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    www : {
      key: 'www',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vytvaretPreceneni : {
      key: 'vytvaretPreceneni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    radaPrijem : {
      key: 'radaPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadaBanka',
      
    },
    radaVydej : {
      key: 'radaVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadaBanka',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    smerKod : {
      key: 'smerKod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPenezniUstav',
      maxLength: 20,
      
    },
    primUcet : {
      key: 'primUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    elBanFormatVypis : {
      key: 'elBanFormatVypis',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormatElektronickehoBankovnictvi',
      maxLength: 3,
      
    },
    elBanFormatPrikaz : {
      key: 'elBanFormatPrikaz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormatElektronickehoPrikazu',
      maxLength: 3,
      
    },
    stahovatVypisOd : {
      key: 'stahovatVypisOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    menaBanky : {
      key: 'menaBanky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      maxLength: 20,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}