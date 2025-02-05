import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFSklad } from './AFSklad'
import { AFStredisko } from './AFStredisko'
import { AFMena } from './AFMena'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFZakazka } from './AFZakazka'
import { AFCleneniDph } from './AFCleneniDph'
import { AFCenik } from './AFCenik'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSazbaDph } from './AFSazbaDph'
import { AFCinnost } from './AFCinnost'


import { ModulUcetni, TypPolozky, TypCeny, TypSzbDph, TypVypCeny, ZaokrJak, ZaokrNa, Objednat } from './AFEntityEnums'

export class AFCenikovyPohybProdej extends AFEntity {
  static EntityPath: string = 'cenikovy-pohyb-prodej'
  static EntityName: string = 'Nákupní, prodejní a skladové pohyby'
  static EntityType: string = 'CENIKOVE_POHYBY_PRODEJ'

  // ID (db: ) - ID)
  idCenikovePohyby?: number
  // Poslední změna (db: ) - Poslední změna)
  lastUpdate?: Date
  // ID doklad (db: ) - ID doklad)
  idDokl?: number
  // Kód dokladu (db: ) - Kód dokladu)
  kodDokl?: string
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni
  // Firma (db: ) - Firma)
  firmaDokl?: AFAdresar
  // Je účetní (db: ) - Doklad je účetní)
  ucetni?: boolean
  // Modul (db: ) - Modul)
  modul?: string
  // Zkratka (db: ) - Zkratka)
  kod?: string
  // EAN (db: ) - EAN)
  eanKod?: string
  // Název (db: ) - Název)
  nazev?: string
  // Název EN (db: ) - Název EN)
  nazevA?: string
  // Název DE (db: ) - Název DE)
  nazevB?: string
  // Název FR (db: ) - Název FR)
  nazevC?: string
  // Pořadí (db: ) - Pořadí)
  cisRad?: number
  // Typ položky (db: ) - Typ položky)
  typPolozkyK?: TypPolozky
  // Balení (db: ) - Balení)
  baleniId?: number
  // Počet balení (db: ) - Počet balení)
  mnozBaleni?: Big
  // Množství (db: ) - Množství)
  mnozMj?: Big
  // Typ ceny (db: ) - Typ ceny)
  typCenyDphK?: TypCeny
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: TypSzbDph
  // DPH [%] (db: ) - DPH [%])
  szbDph?: Big
  // Cena za MJ (db: ) - Cena za MJ)
  cenaMj?: Big
  // Sleva položky[%] (db: ) - Sleva položky)
  slevaPol?: Big
  // ? sleva hlav. (db: ) - uplatnit slevu z dokladu)
  uplSlevaDokl?: boolean
  // Základ [Kč] (db: ) - Základ [Kč])
  sumZkl?: Big
  // DPH [Kč] (db: ) - DPH [Kč])
  sumDph?: Big
  // Celkem [Kč] (db: ) - Celkem [Kč])
  sumCelkem?: Big
  // Základ [měna] (db: ) - Základ [měna])
  sumZklMen?: Big
  // DPH [měna] (db: ) - DPH [měna])
  sumDphMen?: Big
  // Celkem [měna] (db: ) - Celkem [měna])
  sumCelkemMen?: Big
  // Objem (db: ) - Objem)
  objem?: Big
  // Cen. jednotka (db: ) - Cen. jednotka)
  cenJednotka?: Big
  // Způsob výpočtu (db: ) - Způsob výpočtu)
  typVypCenyK?: TypVypCeny
  // Nákupní cena za MJ z ceníku (db: ) - Nákupní)
  cenaMjNakup?: Big
  // Prodejní cena za MJ z ceníku (db: ) - Základní prodejní)
  cenaMjProdej?: Big
  // Marže / Rabat / Sleva [%] (db: ) - Marže / Rabat / Sleva [%])
  procZakl?: Big
  // Množstevní sleva [%] (db: ) - Množstevní sleva [%])
  slevaMnoz?: Big
  // Způsob zaokr. ceny (db: ) - Způsob)
  zaokrJakK?: ZaokrJak
  // Řád zaokr. ceny (db: ) - Řád)
  zaokrNaK?: ZaokrNa
  // Šarže (db: ) - Šarže)
  sarze?: string
  // Expirace (db: ) - Expirace)
  expirace?: Date
  // Uživatelský stav (db: ) - Uživatelský stav)
  stavUzivK?: any
  // Objednat u dod. (db: ) - Objednat u dodavatele)
  objednatK?: Objednat
  // Rezervovat na skladě (db: ) - Rezervovat na skladě)
  rezervovat?: boolean
  // Plán MJ (db: ) - Plánované množství)
  mnozMjPlan?: Big
  // Real. MJ (db: ) - Realizované množství)
  mnozMjReal?: Big
  // Zaokr. pol. (db: ) - AutoZaokr)
  autoZaokr?: boolean
  // Auto. pol. (db: ) - Autogen)
  autogen?: boolean
  // Poznámka (db: ) - Poznámka)
  poznam?: string
  // Sleva [%] (db: ) - Sleva [%])
  slevaDokl?: Big
  // Datum vyst. (db: ) - Vystaveno)
  datVyst?: Date
  // Kopírovat MD účet základu (db: ) - Kopírovat MD účet základu)
  kopZklMdUcet?: boolean
  // Kopírovat D účet základu (db: ) - Kopírovat D účet základu)
  kopZklDalUcet?: boolean
  // Kopírovat MD účet DPH (db: ) - Kopírovat MD účet DPH)
  kopDphMdUcet?: boolean
  // Kopírovat D účet DPH (db: ) - Kopírovat D účet DPH)
  kopDphDalUcet?: boolean
  // Kopírovat předpis (db: ) - Kopírovat předpis)
  kopTypUcOp?: boolean
  // Kopírovat zakázku (db: ) - Kopírovat zakázku)
  kopZakazku?: boolean
  // Kopírovat středisko (db: ) - Kopírovat středisko)
  kopStred?: boolean
  // Kopírovat štítky (db: ) - Kopírovat štítky)
  kopKlice?: boolean
  // Kopírovat řádek DPH (db: ) - Kopírovat řádek DPH z dokladu)
  kopClenDph?: boolean
  // Kopírovat činnost (db: ) - Kopírovat činnost)
  kopCinnost?: boolean
  // Datum zaúčt. (db: ) - Datum zaúčtování)
  datUcto?: Date
  // Storno (db: ) - Storno)
  storno?: boolean
  // Storno položky (db: ) - Storno položky)
  stornoPol?: boolean
  // Výr. čísla OK (db: ) - Výr. čísla OK)
  vyrobniCislaOk?: boolean
  // Sklad (db: ) - Sklad)
  sklad?: AFSklad
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko
  // Měna (db: ) - Měna)
  mena?: AFMena
  // Předpis zaúčtování (db: ) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani
  // Účet MD zákl. (db: ) - Má Dáti základu)
  zklMdUcet?: AFUcet
  // Účet Dal zákl. (db: ) - Dal základu)
  zklDalUcet?: AFUcet
  // Účet MD DPH (db: ) - Má dáti DPH)
  dphMdUcet?: AFUcet
  // Účet Dal DPH (db: ) - Dal DPH)
  dphDalUcet?: AFUcet
  // Cenová úroveň (db: ) - Cenová úroveň)
  cenHlad?: AFCenovaUroven
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka
  // Dodavatel (db: ) - Dodavatel)
  dodavatel?: AFAdresar
  // Řádky DPH (db: ) - Řádky DPH)
  clenDph?: AFCleneniDph
  // Ceník (db: ) - Ceník)
  cenik?: AFCenik
  // MJ (db: ) - MJ)
  mj?: AFMernaJednotka
  // MJ objemu (db: ) - MJ objemu)
  mjObjem?: AFMernaJednotka
  // Sazba DPH (db: ) - Sazba DPH)
  sazbaDph?: AFSazbaDph
  // Činnost (db: ) - Činnost)
  cinnost?: AFCinnost



  static propAnnotations: Record<string, TypeAnnotation> = {
    idCenikovePohyby : {
      key: 'idCenikovePohyby',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    idDokl : {
      key: 'idDokl',
      type: PropertyType.Integer,
      isArray: false,
      
    },    kodDokl : {
      key: 'kodDokl',
      type: PropertyType.String,
      isArray: false,
      
    },    modulK : {
      key: 'modulK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'ModulUcetni',
      enum: ModulUcetni,
      
    },    firmaDokl : {
      key: 'firmaDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      
    },    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    cisRad : {
      key: 'cisRad',
      type: PropertyType.Integer,
      isArray: false,
      
    },    typPolozkyK : {
      key: 'typPolozkyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPolozky',
      enum: TypPolozky,
      
    },    baleniId : {
      key: 'baleniId',
      type: PropertyType.Integer,
      isArray: false,
      digits: 1,
      
    },    mnozBaleni : {
      key: 'mnozBaleni',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    mnozMj : {
      key: 'mnozMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    typCenyDphK : {
      key: 'typCenyDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCeny',
      enum: TypCeny,
      
    },    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },    szbDph : {
      key: 'szbDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    cenaMj : {
      key: 'cenaMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    slevaPol : {
      key: 'slevaPol',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    uplSlevaDokl : {
      key: 'uplSlevaDokl',
      type: PropertyType.Logic,
      isArray: false,
      
    },    sumZkl : {
      key: 'sumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDph : {
      key: 'sumDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkem : {
      key: 'sumCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklMen : {
      key: 'sumZklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphMen : {
      key: 'sumDphMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkemMen : {
      key: 'sumCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    objem : {
      key: 'objem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    cenJednotka : {
      key: 'cenJednotka',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    typVypCenyK : {
      key: 'typVypCenyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
    },    cenaMjNakup : {
      key: 'cenaMjNakup',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    cenaMjProdej : {
      key: 'cenaMjProdej',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    procZakl : {
      key: 'procZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    slevaMnoz : {
      key: 'slevaMnoz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    zaokrJakK : {
      key: 'zaokrJakK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },    zaokrNaK : {
      key: 'zaokrNaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },    sarze : {
      key: 'sarze',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },    expirace : {
      key: 'expirace',
      type: PropertyType.Date,
      isArray: false,
      
    },    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },    objednatK : {
      key: 'objednatK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Objednat',
      enum: Objednat,
      
    },    rezervovat : {
      key: 'rezervovat',
      type: PropertyType.Logic,
      isArray: false,
      
    },    mnozMjPlan : {
      key: 'mnozMjPlan',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    mnozMjReal : {
      key: 'mnozMjReal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    autoZaokr : {
      key: 'autoZaokr',
      type: PropertyType.Logic,
      isArray: false,
      
    },    autogen : {
      key: 'autogen',
      type: PropertyType.Logic,
      isArray: false,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    slevaDokl : {
      key: 'slevaDokl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },    kopZklMdUcet : {
      key: 'kopZklMdUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kopZklDalUcet : {
      key: 'kopZklDalUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kopDphMdUcet : {
      key: 'kopDphMdUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kopDphDalUcet : {
      key: 'kopDphDalUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kopTypUcOp : {
      key: 'kopTypUcOp',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kopZakazku : {
      key: 'kopZakazku',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kopStred : {
      key: 'kopStred',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kopKlice : {
      key: 'kopKlice',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kopClenDph : {
      key: 'kopClenDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kopCinnost : {
      key: 'kopCinnost',
      type: PropertyType.Logic,
      isArray: false,
      
    },    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },    storno : {
      key: 'storno',
      type: PropertyType.Logic,
      isArray: false,
      
    },    stornoPol : {
      key: 'stornoPol',
      type: PropertyType.Logic,
      isArray: false,
      
    },    vyrobniCislaOk : {
      key: 'vyrobniCislaOk',
      type: PropertyType.Logic,
      isArray: false,
      
    },    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSklad,
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },    typUcOp : {
      key: 'typUcOp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPredpisZauctovani,
      
    },    zklMdUcet : {
      key: 'zklMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    zklDalUcet : {
      key: 'zklDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    dphMdUcet : {
      key: 'dphMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    dphDalUcet : {
      key: 'dphDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    cenHlad : {
      key: 'cenHlad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenovaUroven,
      
    },    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      maxLength: 30,
      
    },    dodavatel : {
      key: 'dodavatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      
    },    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCleneniDph,
      
    },    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenik,
      maxLength: 64,
      
    },    mj : {
      key: 'mj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMernaJednotka,
      
    },    mjObjem : {
      key: 'mjObjem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMernaJednotka,
      
    },    sazbaDph : {
      key: 'sazbaDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSazbaDph,
      
    },    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCinnost,
      
    },

  }
}