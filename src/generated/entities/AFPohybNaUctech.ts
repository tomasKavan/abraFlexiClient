import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatel } from './AFUzivatel'
import { AFCleneniDph } from './AFCleneniDph'
import { AFAdresar } from './AFAdresar'
import { AFMena } from './AFMena'
import { AFUcet } from './AFUcet'
import { AFStatDph } from './AFStatDph'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFCinnost } from './AFCinnost'


import { StavUhr, StavUziv, ModulUcetni, TypSzbDph } from '../AFEntityEnums'

export class AFPohybNaUctech extends AFEntity {
  static EntityPath: string = 'pohyb-na-uctech'
  static EntityName: string = 'Pohyby na účtech'
  static EntityType: string = 'POHYB_NA_UCTECH'

  // Poslední změna (db: ) - Poslední změna)
  lastUpdate?: Date | null
  // Upravil (db: ) - Upravil)
  updatedBy?: AFUzivatel | null
  // Řádky DPH (db: ) - Řádky DPH)
  clenDph?: AFCleneniDph | null
  // Datum splatnosti (db: ) - Datum splatnosti)
  datSplat?: Date | null
  // Datum úhrady (db: ) - Datum úhrady)
  datUhr?: Date | null
  // Datum vyst. (db: ) - Vystaveno)
  datVyst?: Date | null
  // Int.čís.dokladu (db: ) - Interní číslo dokladu)
  doklad?: string | null
  // Uplatnit zdaň. plnění (db: ) - Uplatnit zdaň. plnění)
  duzpUcto?: Date | null
  // Datum zaúčtování (db: ) - Datum zaúčtování)
  datUcto?: Date | null
  // Období zaúčtování (db: ) - Období zaúčtování)
  postingPeriod?: Date | null
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar | null
  // ID (db: ) - ID)
  idUcetniDenik?: number | null
  // Kurz (db: ) - Kurz)
  kurz?: Big | null
  // Kurz. množství (db: ) - Kurz. množství)
  kurzMnozstvi?: Big | null
  // Kód měny (db: ) - Kód měny)
  mena?: AFMena | null
  // Modul (db: ) - Modul)
  modul?: string | null
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string | null
  // DIČ (db: ) - DIČ)
  dic?: string | null
  // Popis (db: ) - Popis)
  popis?: string | null
  // Protiúčet (db: ) - Protiúčet)
  protiUcet?: AFUcet | null
  // Stát DPH (db: ) - Stát DPH)
  statDph?: AFStatDph | null
  // Stav úhrady (db: ) - Stav úhrady)
  stavUhrK?: StavUhr | null
  // Uživatelský stav (db: ) - Uživatelský stav)
  stavUzivK?: StavUziv | null
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni | null
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko | null
  // DAL [měna] (db: ) - Částka DAL [měna])
  sumMenDal?: Big | null
  // MD [měna] (db: ) - Částka MD [měna])
  sumMenMd?: Big | null
  // DAL [Kč] (db: ) - Částka DAL [Kč])
  sumTuzDal?: Big | null
  // MD [Kč] (db: ) - Částka MD [Kč])
  sumTuzMd?: Big | null
  // DPH [%] (db: ) - DPH [%])
  szbDph?: Big | null
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: TypSzbDph | null
  // Účet (db: ) - Účet)
  ucet?: AFUcet | null
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string | null
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka | null
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number | null
  // Zaúčtováno (db: ) - Stav zaúčtování)
  zuctovano?: boolean | null
  // Párovací symbol (db: ) - Párovací symbol)
  parSymbol?: string | null
  // Činnost (db: ) - Činnost)
  cinnost?: AFCinnost | null
  // Název účtu (db: ) - Název účtu)
  nazevUctu?: string | null
  // Vynechat ze salda (db: ) - Vynechat ze salda)
  vyloucitSaldo?: boolean | null
  // Položka pro DPH částku (db: ) - Položka pro DPH částku)
  vatItem?: boolean | null
  // Převrácení stran účtování (db: ) - Převrácení stran účtování)
  accountsSwapped?: boolean | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      
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
    doklad : {
      key: 'doklad',
      type: PropertyType.String,
      isArray: false,
      
    },
    duzpUcto : {
      key: 'duzpUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    postingPeriod : {
      key: 'postingPeriod',
      type: PropertyType.YearMonth,
      isArray: false,
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    idUcetniDenik : {
      key: 'idUcetniDenik',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kurz : {
      key: 'kurz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    kurzMnozstvi : {
      key: 'kurzMnozstvi',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      maxLength: 20,
      
    },
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    dic : {
      key: 'dic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    protiUcet : {
      key: 'protiUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    statDph : {
      key: 'statDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStatDph',
      maxLength: 20,
      
    },
    stavUhrK : {
      key: 'stavUhrK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'StavUhr',
      enum: StavUhr,
      
    },
    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'StavUziv',
      enum: StavUziv,
      
    },
    modulK : {
      key: 'modulK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'ModulUcetni',
      enum: ModulUcetni,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    sumMenDal : {
      key: 'sumMenDal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMenMd : {
      key: 'sumMenMd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumTuzDal : {
      key: 'sumTuzDal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumTuzMd : {
      key: 'sumTuzMd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    szbDph : {
      key: 'szbDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },
    ucet : {
      key: 'ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
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
    parSymbol : {
      key: 'parSymbol',
      type: PropertyType.String,
      isArray: false,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    nazevUctu : {
      key: 'nazevUctu',
      type: PropertyType.String,
      isArray: false,
      
    },
    vyloucitSaldo : {
      key: 'vyloucitSaldo',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vatItem : {
      key: 'vatItem',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    accountsSwapped : {
      key: 'accountsSwapped',
      type: PropertyType.Logic,
      isArray: false,
      
    },


  }
}