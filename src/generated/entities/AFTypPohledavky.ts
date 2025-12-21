import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUcetniObdobi } from './AFUcetniObdobi.js'
import { AFFormaUhrady } from './AFFormaUhrady.js'
import { AFRadaPohledavky } from './AFRadaPohledavky.js'
import { AFStredisko } from './AFStredisko.js'
import { AFCinnost } from './AFCinnost.js'
import { AFUcet } from './AFUcet.js'
import { AFPredpisZauctovani } from './AFPredpisZauctovani.js'
import { AFMena } from './AFMena.js'
import { AFStatDph } from './AFStatDph.js'
import { AFStat } from './AFStat.js'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky.js'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb.js'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce.js'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy.js'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni.js'
import { AFFormaDopravy } from './AFFormaDopravy.js'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni.js'
import { AFSablonaMail } from './AFSablonaMail.js'
import { AFAutotisk } from './AFAutotisk.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypDokladu, RazeniProTisk } from '../AFEntityEnums.js'

export class AFTypPohledavky extends AFEntity {
  static EntityPath: string = 'typ-pohledavky'
  static EntityName: string = 'Typy ostatních pohledávek'
  static EntityType: string = 'POHLEDAVKA_TYP'

  // ID (db: IdTypDokl) - ID)
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
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean | null
  // Druh (db: TypDoklK) - Druh)
  typDoklK?: TypDokladu | null
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady | null
  // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
  doprava?: string | null
  // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
  popisDoklad?: string | null
  // Dokladová řada (db: IdRadyPrijem) - Dokladová řada)
  radaPrijem?: AFRadaPohledavky | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Účet MD odběratele (db: IdPrimUcet) - Účet MD)
  primUcet?: AFUcet | null
  // Předpis zaúčtování [DAL] (db: IdTypUcOpP) - Předpis zaúčtování [DAL])
  typUcOpPrijem?: AFPredpisZauctovani | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Stát DPH (db: IdStatDph) - Stát DPH)
  statDph?: AFStatDph | null
  // Aut. tisk (db: TiskAutomat) - Automaticky tisknout při vytvoření nového dokladu)
  tiskAutomat?: boolean | null
  // Stát odesl. (db: IdStatOdesl) - Stát odesl.)
  statOdesl?: AFStat | null
  // Stát určení (db: IdStatUrc) - Stát určení)
  statUrc?: AFStat | null
  // Stát původu (db: IdStatPuvod) - Stát původu)
  statPuvod?: AFStat | null
  // Podmínky dodání (db: IdDodPodm) - Podmínky dodání)
  dodPodm?: AFIntrastatDodaciPodminky | null
  // Zvláštní pohyby (db: IdZvlPoh) - Zvláštní pohyby)
  zvlPoh?: AFIntrastatZvlastniPohyb | null
  // Transakce (db: IdObchTrans) - Transakce)
  obchTrans?: AFIntrastatObchodniTransakce | null
  // Druh dopravy (db: IdDruhDopr) - Druh dopravy)
  druhDopr?: AFIntrastatDruhDopravy | null
  // Kraj odesílatele (db: IdKrajUrc) - Kraj odesílatele)
  krajUrc?: AFIntrastatKrajUrceni | null
  // Řazení položek pro tisk (db: RazeniProTiskK) - Řazení položek pro tisk)
  razeniProTiskK?: RazeniProTisk | null
  // Primární typ dokladu (db: Primarni) - Primární typ dokladu)
  primarni?: boolean | null
  // Automaticky hradit (db: UhrAuto) - Automaticky hradit nezaúčtovanými přeplatky v bance a pokladně)
  uhrAuto?: boolean | null
  // Automatický zápočet (db: ZapAuto) - Použít na automatizovaný vzájemný zápočet)
  zapAuto?: boolean | null
  // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
  formaDopravy?: AFFormaDopravy | null
  // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
  emailTxt?: string | null
  // VS z čís.obj. (db: VsCisObj) - Variabilní symbol primárně z čísla objednávky)
  vsCisObj?: boolean | null
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni | null
  // Šablona e-mail (db: IdSablonaMail) - Šablona e-mail)
  sablonaMail?: AFSablonaMail | null
  // Preferovat na dokladech (db: StatDphTd) - Preferovat na dokladech)
  statDphTd?: boolean | null

  // Automatický tisk (type: AUTOTISK) - autoTisky)
  autoTisky?: AFAutotisk[]
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
    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    typDoklK : {
      key: 'typDoklK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypDokladu',
      enum: TypDokladu,
      
    },
    formaUhradyCis : {
      key: 'formaUhradyCis',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaUhrady',
      
    },
    doprava : {
      key: 'doprava',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisDoklad : {
      key: 'popisDoklad',
      type: PropertyType.String,
      isArray: false,
      
    },
    radaPrijem : {
      key: 'radaPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadaPohledavky',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    primUcet : {
      key: 'primUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    typUcOpPrijem : {
      key: 'typUcOpPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    statDph : {
      key: 'statDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStatDph',
      maxLength: 3,
      
    },
    tiskAutomat : {
      key: 'tiskAutomat',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    statOdesl : {
      key: 'statOdesl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statUrc : {
      key: 'statUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statPuvod : {
      key: 'statPuvod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    dodPodm : {
      key: 'dodPodm',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatDodaciPodminky',
      
    },
    zvlPoh : {
      key: 'zvlPoh',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatZvlastniPohyb',
      
    },
    obchTrans : {
      key: 'obchTrans',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatObchodniTransakce',
      
    },
    druhDopr : {
      key: 'druhDopr',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatDruhDopravy',
      
    },
    krajUrc : {
      key: 'krajUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatKrajUrceni',
      
    },
    razeniProTiskK : {
      key: 'razeniProTiskK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'RazeniProTisk',
      enum: RazeniProTisk,
      
    },
    primarni : {
      key: 'primarni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uhrAuto : {
      key: 'uhrAuto',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zapAuto : {
      key: 'zapAuto',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    formaDopravy : {
      key: 'formaDopravy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaDopravy',
      
    },
    emailTxt : {
      key: 'emailTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    vsCisObj : {
      key: 'vsCisObj',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    clenKonVykDph : {
      key: 'clenKonVykDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniKontrolniHlaseni',
      
    },
    sablonaMail : {
      key: 'sablonaMail',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSablonaMail',
      
    },
    statDphTd : {
      key: 'statDphTd',
      type: PropertyType.Logic,
      isArray: false,
      
    },

    autoTisky : {
      key: 'autoTisky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFAutotisk'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}