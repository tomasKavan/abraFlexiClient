import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCleneniDph } from './AFCleneniDph.js'
import { AFAdresar } from './AFAdresar.js'
import { AFMena } from './AFMena.js'
import { AFUcet } from './AFUcet.js'
import { AFStatDph } from './AFStatDph.js'
import { AFStredisko } from './AFStredisko.js'
import { AFZakazka } from './AFZakazka.js'
import { AFCinnost } from './AFCinnost.js'


import { StavUhr, StavUziv, ModulUcetni, TypSzbDph } from '../AFEntityEnums.js'

export class AFPohybNaUctech extends AFEntity {
  static EntityPath: string = 'pohyb-na-uctech'
  static EntityName: string = 'Pohyby na účtech'
  static EntityType: string = 'POHYB_NA_UCTECH'

  // Řádky DPH (db: ) - Řádky DPH)
  clenDph?: AFCleneniDph
  // Datum splatnosti (db: ) - Datum splatnosti)
  datSplat?: Date
  // Datum úhrady (db: ) - Datum úhrady)
  datUhr?: Date
  // Datum vyst. (db: ) - Vystaveno)
  datVyst?: Date
  // Int.čís.dokladu (db: ) - Interní číslo dokladu)
  doklad?: string
  // Uplatnit zdaň. plnění (db: ) - Uplatnit zdaň. plnění)
  duzpUcto?: Date
  // Datum zaúčt. (db: ) - Datum zaúčtování)
  datUcto?: Date
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar
  // ID (db: ) - ID)
  idUcetniDenik?: number
  // Kurz (db: ) - Kurz)
  kurz?: Big
  // Kód měny (db: ) - Kód měny)
  mena?: AFMena
  // Modul (db: ) - Modul)
  modul?: string
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string
  // Popis (db: ) - Popis)
  popis?: string
  // Protiúčet (db: ) - Protiúčet)
  protiUcet?: AFUcet
  // Stát DPH (db: ) - Stát DPH)
  statDph?: AFStatDph
  // Stav úhrady (db: ) - Stav úhrady)
  stavUhrK?: StavUhr
  // Uživatelský stav (db: ) - Uživatelský stav)
  stavUzivK?: StavUziv
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko
  // DAL v měně (db: ) - Částka DAL v měně)
  sumMenDal?: Big
  // MD v měně (db: ) - Částka MD v měně)
  sumMenMd?: Big
  // DAL v Kč (db: ) - Částka DAL [Kč])
  sumTuzDal?: Big
  // MD v Kč (db: ) - Částka MD [Kč])
  sumTuzMd?: Big
  // DPH [%] (db: ) - DPH [%])
  szbDph?: Big
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: TypSzbDph
  // Účet (db: ) - Účet)
  ucet?: AFUcet
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number
  // Zaúčtováno (db: ) - Stav zaúčtování)
  zuctovano?: boolean
  // Párovací symbol (db: ) - Párovací symbol)
  parSymbol?: string
  // Činnost (db: ) - Činnost)
  cinnost?: AFCinnost
  // Název účtu (db: ) - Název účtu)
  nazevUctu?: string
  // Vynechat ze salda (db: ) - Vynechat ze salda)
  vyloucitSaldo?: boolean



  static propAnnotations: Record<string, TypeAnnotation> = {
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


  }
}