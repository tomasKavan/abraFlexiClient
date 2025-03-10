import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCleneniDph } from './AFCleneniDph'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFAdresar } from './AFAdresar'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFStredisko } from './AFStredisko'
import { AFStatDph } from './AFStatDph'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'


import { ModulUcetni, TypSzbDph, StavUziv, TypPlneni } from '../AFEntityEnums.js'

export class AFPodkladyDph extends AFEntity {
  static EntityPath: string = 'podklady-dph'
  static EntityName: string = 'Podklady DPH'
  static EntityType: string = 'PODKLADY_DPH'

  // Řádky DPH (db: ) - Řádky DPH)
  clenDph?: AFCleneniDph
  // Řádek kontrolního hlášení DPH (db: ) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni
  // Datum splatnosti (db: ) - Datum splatnosti)
  datSplat?: Date
  // Datum úhrady (db: ) - Datum úhrady)
  datUhr?: Date
  // Dat. vyst. dokladu (db: ) - Datum vystavení dokladu)
  datVyst?: Date
  // Datum zaúčt. (db: ) - Datum zaúčtování)
  datUcto?: Date
  // Int. čís. dokladu (db: ) - Interní číslo dokladu)
  doklad?: string
  // Datum zdaň. plnění (db: ) - Datum zdaň. plnění)
  duzpPuv?: Date
  // Uplatnit zdaň. plnění (db: ) - Uplatnit zdaň. plnění)
  duzpUcto?: Date
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar
  // Je DPH (db: ) - Je DPH)
  jeDph?: boolean
  // Kurz (db: ) - Kurz)
  kurz?: Big
  // Modul (db: ) - Modul)
  modul?: string
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string
  // Popis (db: ) - Popis)
  popis?: string
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: TypSzbDph
  // Hodnota DPH (db: ) - Hodnota DPH)
  szbDph?: Big
  // Základ [Kč] (db: ) - Základ [Kč])
  sumZklTuz?: Big
  // Základ [měna] (db: ) - Základ [měna])
  sumZklMen?: Big
  // DPH [Kč] (db: ) - DPH [Kč])
  sumDphTuz?: Big
  // DPH [měna] (db: ) - DPH [měna])
  sumDphMen?: Big
  // Stav dokladu (db: ) - Stav dokladu)
  stavUzivK?: StavUziv
  // Účet MD zákl. (db: ) - Má Dáti základu)
  zklMdUcet?: AFUcet
  // Účet Dal zákl. (db: ) - Dal základu)
  zklDalUcet?: AFUcet
  // Účet MD DPH (db: ) - Má dáti DPH)
  dphMdUcet?: AFUcet
  // Účet Dal DPH (db: ) - Dal DPH)
  dphDalUcet?: AFUcet
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number
  // Zaúčtováno (db: ) - Stav zaúčtování)
  zuctovano?: boolean
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko
  // Typ plnění DPH (db: ) - Typ plnění DPH)
  typPlneniK?: TypPlneni
  // Stát DPH (db: ) - Stát DPH)
  statDph?: AFStatDph
  // Měsíc zaúčtování (db: ) - Měsíc zaúčtování)
  mesicUcto?: number
  // Rok zaúčtování (db: ) - Rok zaúčtování)
  rokUcto?: number
  // Měsíc DUZP (db: ) - Měsíc DUZP)
  mesicDuzp?: number
  // Rok DUZP (db: ) - Rok DUZP)
  rokDuzp?: number
  // Předpis zaúčtování (db: ) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani
  // DIČ (db: ) - DIČ)
  dic?: string
  // Vyp. rozdíl DPH [měna] (db: ) - Vyp. rozdíl DPH [měna])
  vypRozdilDphMen?: Big
  // Vyp. rozdíl DPH [Kč] (db: ) - Vyp. rozdíl DPH [Kč])
  vypRozdilDphTuz?: Big
  // Vyp. DPH [měna] (db: ) - Vyp. DPH [měna])
  vypSumDphMen?: Big
  // Vyp. DPH [Kč] (db: ) - Vyp. DPH [Kč])
  vypSumDphTuz?: Big
  // Vyp. sazba DPH (db: ) - Vyp. sazba DPH)
  vypSzbDph?: Big
  // Vyp. rozdíl sazby DPH (db: ) - Vyp. rozdíl sazby DPH)
  vypRozdilSzbDph?: Big



  static propAnnotations: Record<string, TypeAnnotation> = {
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      
    },
    clenKonVykDph : {
      key: 'clenKonVykDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniKontrolniHlaseni',
      
    },
    datSplat : {
      key: 'datSplat',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datUhr : {
      key: 'datUhr',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    doklad : {
      key: 'doklad',
      type: PropertyType.String,
      isArray: false,
      
    },
    duzpPuv : {
      key: 'duzpPuv',
      type: PropertyType.Date,
      isArray: false,
      
    },
    duzpUcto : {
      key: 'duzpUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    jeDph : {
      key: 'jeDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kurz : {
      key: 'kurz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    modulK : {
      key: 'modulK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'ModulUcetni',
      enum: ModulUcetni,
      
    },
    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },
    szbDph : {
      key: 'szbDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    sumZklTuz : {
      key: 'sumZklTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklMen : {
      key: 'sumZklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphTuz : {
      key: 'sumDphTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphMen : {
      key: 'sumDphMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavUziv',
      enum: StavUziv,
      
    },
    zklMdUcet : {
      key: 'zklMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zklDalUcet : {
      key: 'zklDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphMdUcet : {
      key: 'dphMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphDalUcet : {
      key: 'dphDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    idDokl : {
      key: 'idDokl',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    zuctovano : {
      key: 'zuctovano',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    typPlneniK : {
      key: 'typPlneniK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'TypPlneni',
      enum: TypPlneni,
      
    },
    statDph : {
      key: 'statDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStatDph',
      maxLength: 3,
      
    },
    mesicUcto : {
      key: 'mesicUcto',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    rokUcto : {
      key: 'rokUcto',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesicDuzp : {
      key: 'mesicDuzp',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    rokDuzp : {
      key: 'rokDuzp',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typUcOp : {
      key: 'typUcOp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    dic : {
      key: 'dic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    vypRozdilDphMen : {
      key: 'vypRozdilDphMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vypRozdilDphTuz : {
      key: 'vypRozdilDphTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vypSumDphMen : {
      key: 'vypSumDphMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vypSumDphTuz : {
      key: 'vypSumDphTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vypSzbDph : {
      key: 'vypSzbDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vypRozdilSzbDph : {
      key: 'vypRozdilSzbDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },


  }
}