import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFRegion } from './AFRegion'
import { AFRadaBanka } from './AFRadaBanka'
import { AFStredisko } from './AFStredisko'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFUcet } from './AFUcet'
import { AFMena } from './AFMena'
import { AFFormatElektronickehoBankovnictvi } from './AFFormatElektronickehoBankovnictvi'
import { AFFormatElektronickehoPrikazu } from './AFFormatElektronickehoPrikazu'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { ElVypisDuplicita } from '../AFEntityEnums'

export class AFBankovniUcet extends AFEntity {
  static EntityPath: string = 'bankovni-ucet'
  static EntityName: string = 'Seznam bankovních účtů'
  static EntityType: string = 'BANKOVNI_UCET'

  // ID (db: IdBsp) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Platí od (db: IdUcetObdobiOd) - Platí od)
  ucetObdobiOd?: AFUcetniObdobi
  // Platí do (db: IdUcetObdobiDo) - Platí do)
  ucetObdobiDo?: AFUcetniObdobi
  // Platí od roku (db: PlatiOd) - Platí od roku)
  platiOd?: number
  // Platí do roku (db: PlatiDo) - Platí do roku)
  platiDo?: number
  // Modul (db: Modul) - Modul)
  modul?: string
  // Číslo bank. účtu (db: Buc) - Číslo účtu)
  buc?: string
  // Specifický symbol (db: SpecSym) - Specifický symbol)
  specSym?: string
  // IBAN (db: Iban) - IBAN)
  iban?: string
  // BIC (db: Bic) - BIC)
  bic?: string
  // Název banky (db: NazBanky) - Název)
  nazBanky?: string
  // Název klienta (db: ZkrKlienta) - Název klienta)
  zkrKlienta?: string
  // výpisy (db: SloVypis) - výpisy)
  sloVypis?: string
  // příkazy (db: SloPrikaz) - příkazy)
  sloPrikaz?: string
  // Příp. výpisu (db: PriVypis) - přípona)
  priVypis?: string
  // Příp. přík. (db: PriPrikaz) - přípona)
  priPrikaz?: string
  // Příp. zahr. přík. (db: PriPrikazZahr) - příp.zahr.)
  priPrikazZahr?: string
  // Název protistrany v textu příkazu (db: PrikPopKlient) - Název protistrany v textu příkazu)
  prikPopKlient?: boolean
  // Popis dokladu v textu příkazu (db: PrikPopPopis) - Popis dokladu v textu příkazu)
  prikPopPopis?: boolean
  // Kontrolovat duplicitu výpisů (db: VypisDuplicitaK) - Kontrolovat duplicitu výpisů)
  vypisDuplicitaK?: ElVypisDuplicita
  // Token pro příkazy (db: TokenPrikaz) - Token pro příkazy)
  tokenPrikaz?: string
  // Token pro příkazy - platnost do (db: TokenPrikazPlatiDo) - Token pro příkazy - platnost do)
  tokenPrikazPlatiDo?: Date
  // Token pro výpisy (db: TokenVypis) - Token pro výpisy)
  tokenVypis?: string
  // Token pro výpisy - platnost do (db: TokenVypisPlatiDo) - Token pro výpisy - platnost do)
  tokenVypisPlatiDo?: Date
  // Prim. ban. účet (db: BucPrimarni) - Primární účet)
  bucPrimarni?: boolean
  // Ulice (db: Ulice) - Ulice)
  ulice?: string
  // Město (db: Mesto) - Město)
  mesto?: string
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion
  // PSČ (db: Psc) - PSČ)
  psc?: string
  // Telefon (db: Tel) - Telefon)
  tel?: string
  // Mobil (db: Mobil) - Mobil)
  mobil?: string
  // Fax (db: Fax) - Fax)
  fax?: string
  // E-mail (db: Email) - E-mail)
  email?: string
  // WWW (db: Www) - WWW)
  www?: string
  // Vytvářet přecenění (db: VytvaretPreceneni) - Vytvářet přecenění při inicializaci účetního období)
  vytvaretPreceneni?: boolean
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Řada pro příjem (db: IdRadyPrijem) - Řada pro příjem)
  radaPrijem?: AFRadaBanka
  // Řada pro výdej (db: IdRadyVydej) - Řada pro výdej)
  radaVydej?: AFRadaBanka
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Kód banky (db: IdSmerKod) - Kód banky)
  smerKod?: AFPenezniUstav
  // Účet banky (db: IdPrimUcet) - Účet banky)
  primUcet?: AFUcet
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Formát el. bank. pro výpisy (db: IdElBanFormat) - Formát výpisy)
  elBanFormatVypis?: AFFormatElektronickehoBankovnictvi
  // Formát el. bank. pro příkazy (db: IdElBanFormatPrikaz) - Formát příkazy)
  elBanFormatPrikaz?: AFFormatElektronickehoPrikazu
  // Stahovat výpisy od (db: StahovatVypisOd) - Stahovat výpisy od)
  stahovatVypisOd?: Date
  // Měna banky (db: IdMenaBanky) - Měna banky)
  menaBanky?: AFMena
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat

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
      afClass: AFUcetniObdobi,
      
    },
    ucetObdobiDo : {
      key: 'ucetObdobiDo',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcetniObdobi,
      
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
      afClass: AFRegion,
      
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
      afClass: AFRadaBanka,
      
    },
    radaVydej : {
      key: 'radaVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRadaBanka,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },
    smerKod : {
      key: 'smerKod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPenezniUstav,
      maxLength: 20,
      
    },
    primUcet : {
      key: 'primUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },
    elBanFormatVypis : {
      key: 'elBanFormatVypis',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFFormatElektronickehoBankovnictvi,
      maxLength: 3,
      
    },
    elBanFormatPrikaz : {
      key: 'elBanFormatPrikaz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFFormatElektronickehoPrikazu,
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
      afClass: AFMena,
      maxLength: 20,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStat,
      maxLength: 3,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}