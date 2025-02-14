import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCleneniDph } from './AFCleneniDph.js'
import { AFAdresar } from './AFAdresar.js'
import { AFMena } from './AFMena.js'
import { AFStredisko } from './AFStredisko.js'
import { AFUcet } from './AFUcet.js'
import { AFZakazka } from './AFZakazka.js'
import { AFCinnost } from './AFCinnost.js'


import { ModulUcetni, TypSzbDph, StavUziv } from '../AFEntityEnums.js'

export class AFUcetniDenik extends AFEntity {
  static EntityPath: string = 'ucetni-denik'
  static EntityName: string = 'Účetní deník'
  static EntityType: string = 'UCETNI_DENIK'

  // ID (db: ) - ID)
  idUcetniDenik?: number
  // Řádky DPH (db: ) - Řádky DPH)
  clenDph?: AFCleneniDph
  // Datum splatnosti (db: ) - Datum splatnosti)
  datSplat?: Date
  // Datum úhrady (db: ) - Datum úhrady)
  datUhr?: Date
  // Dat. vyst. dokladu (db: ) - Datum vystavení dokladu)
  datVyst?: Date
  // Datum zaúčt. (db: ) - Datum zaúčtování)
  datUcto?: Date
  // Int.čís.dokladu (db: ) - Interní číslo dokladu)
  doklad?: string
  // Datum zdan. plnění (db: ) - Datum zdan. plnění)
  duzpUcto?: Date
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar
  // Kurz (db: ) - Kurz)
  kurz?: Big
  // Měna (db: ) - Měna)
  mena?: AFMena
  // Modul (db: ) - Modul)
  modul?: string
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni
  // Název firmy (db: ) - Název firmy)
  nazFirmy?: string
  // Popis (db: ) - Popis)
  popis?: string
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: TypSzbDph
  // Hodnota DPH (db: ) - Hodnota DPH)
  szbDph?: Big
  // Částka v Kč (db: ) - Částka v Kč)
  sumTuz?: Big
  // Částka v měně (db: ) - Částka v měně)
  sumMen?: Big
  // Stav dokladu (db: ) - Stav dokladu)
  stavUzivK?: StavUziv
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko
  // Účet MD (db: ) - Účet MD)
  mdUcet?: AFUcet
  // Účet DAL (db: ) - Účet DAL)
  dalUcet?: AFUcet
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number
  // Zaúčtováno (db: ) - Stav zaúčtování)
  zuctovano?: boolean
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka
  // Párovací symbol (db: ) - Párovací symbol)
  parSymbol?: string
  // Činnost (db: ) - Činnost)
  cinnost?: AFCinnost
  // Seznam ID položek (db: ) - Seznam ID položek)
  idPolozek?: any
  // Bezpol. dokl. (db: ) - bezpoložkový doklad)
  bezPolozek?: boolean



  static propAnnotations: Record<string, TypeAnnotation> = {
    idUcetniDenik : {
      key: 'idUcetniDenik',
      type: PropertyType.Integer,
      isArray: false,
      
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
      digits: 15,
      
    },
    sumTuz : {
      key: 'sumTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMen : {
      key: 'sumMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'StavUziv',
      enum: StavUziv,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    mdUcet : {
      key: 'mdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      
    },
    dalUcet : {
      key: 'dalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      
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
    idPolozek : {
      key: 'idPolozek',
      type: PropertyType.Array,
      isArray: false,
      
    },
    bezPolozek : {
      key: 'bezPolozek',
      type: PropertyType.Logic,
      isArray: false,
      
    },


  }
}