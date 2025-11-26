import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFCleneniDph } from './AFCleneniDph'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFAdresar } from './AFAdresar'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFStredisko } from './AFStredisko'
import { AFStatDph } from './AFStatDph'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'


import { ModulUcetni, TypSzbDph, StavUziv, TypPlneni } from '../AFEntityEnums'

export class AFPodkladyDph extends AFEntity {
  static EntityPath: string = 'podklady-dph'
  static EntityName: string = 'Podklady DPH'
  static EntityType: string = 'PODKLADY_DPH'

  // Řádky DPH (db: ) - Řádky DPH)
  clenDph?: AFCleneniDph | null
  // Řádek kontrolního hlášení DPH (db: ) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni | null
  // Datum splatnosti (db: ) - Datum splatnosti)
  datSplat?: Date | null
  // Datum úhrady (db: ) - Datum úhrady)
  datUhr?: Date | null
  // Dat. vyst. dokladu (db: ) - Datum vystavení dokladu)
  datVyst?: Date | null
  // Datum zaúčtování (db: ) - Datum zaúčtování)
  datUcto?: Date | null
  // Int. čís. dokladu (db: ) - Interní číslo dokladu)
  doklad?: string | null
  // Datum zdaň. plnění (db: ) - Datum zdaň. plnění)
  duzpPuv?: Date | null
  // Uplatnit zdaň. plnění (db: ) - Uplatnit zdaň. plnění)
  duzpUcto?: Date | null
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar | null
  // Je DPH (db: ) - Je DPH)
  jeDph?: boolean | null
  // Kurz (db: ) - Kurz)
  kurz?: Big | null
  // Modul (db: ) - Modul)
  modul?: string | null
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni | null
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string | null
  // Popis (db: ) - Popis)
  popis?: string | null
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string | null
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: TypSzbDph | null
  // Hodnota DPH (db: ) - Hodnota DPH)
  szbDph?: Big | null
  // Základ [Kč] (db: ) - Základ [Kč])
  sumZklTuz?: Big | null
  // Základ [měna] (db: ) - Základ [měna])
  sumZklMen?: Big | null
  // DPH [Kč] (db: ) - DPH [Kč])
  sumDphTuz?: Big | null
  // DPH [měna] (db: ) - DPH [měna])
  sumDphMen?: Big | null
  // Stav dokladu (db: ) - Stav dokladu)
  stavUzivK?: StavUziv | null
  // Účet MD základ (db: ) - Má Dáti základu)
  zklMdUcet?: AFUcet | null
  // Účet Dal základ (db: ) - Dal základu)
  zklDalUcet?: AFUcet | null
  // Účet MD DPH (db: ) - Má dáti DPH)
  dphMdUcet?: AFUcet | null
  // Účet Dal DPH (db: ) - Dal DPH)
  dphDalUcet?: AFUcet | null
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number | null
  // Zaúčtováno (db: ) - Stav zaúčtování)
  zuctovano?: boolean | null
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka | null
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko | null
  // Typ plnění DPH (db: ) - Typ plnění DPH)
  typPlneniK?: TypPlneni | null
  // Stát DPH (db: ) - Stát DPH)
  statDph?: AFStatDph | null
  // Měsíc zaúčtování (db: ) - Měsíc zaúčtování)
  mesicUcto?: number | null
  // Rok zaúčtování (db: ) - Rok zaúčtování)
  rokUcto?: number | null
  // Měsíc DUZP (db: ) - Měsíc DUZP)
  mesicDuzp?: number | null
  // Rok DUZP (db: ) - Rok DUZP)
  rokDuzp?: number | null
  // Předpis zaúčtování (db: ) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani | null
  // DIČ (db: ) - DIČ)
  dic?: string | null
  // Vyp. rozdíl DPH [měna] (db: ) - Vyp. rozdíl DPH [měna])
  vypRozdilDphMen?: Big | null
  // Vyp. rozdíl DPH [Kč] (db: ) - Vyp. rozdíl DPH [Kč])
  vypRozdilDphTuz?: Big | null
  // Vyp. DPH [měna] (db: ) - Vyp. DPH [měna])
  vypSumDphMen?: Big | null
  // Vyp. DPH [Kč] (db: ) - Vyp. DPH [Kč])
  vypSumDphTuz?: Big | null
  // Vyp. sazba DPH (db: ) - Vyp. sazba DPH)
  vypSzbDph?: Big | null
  // Vyp. rozdíl sazby DPH (db: ) - Vyp. rozdíl sazby DPH)
  vypRozdilSzbDph?: Big | null



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
      maxLength: 50,
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