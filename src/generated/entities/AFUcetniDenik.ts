import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatel } from './AFUzivatel'
import { AFCleneniDph } from './AFCleneniDph'
import { AFAdresar } from './AFAdresar'
import { AFMena } from './AFMena'
import { AFStredisko } from './AFStredisko'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFCinnost } from './AFCinnost'


import { ModulUcetni, TypSzbDph, StavUziv } from '../AFEntityEnums'

export class AFUcetniDenik extends AFEntity {
  static EntityPath: string = 'ucetni-denik'
  static EntityName: string = 'Účetní deník'
  static EntityType: string = 'UCETNI_DENIK'

  // ID (db: ) - ID)
  idUcetniDenik?: number | null
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
  // Dat. vyst. dokladu (db: ) - Datum vystavení dokladu)
  datVyst?: Date | null
  // Datum zaúčtování (db: ) - Datum zaúčtování)
  datUcto?: Date | null
  // Int.čís.dokladu (db: ) - Interní číslo dokladu)
  doklad?: string | null
  // Datum zdan. plnění (db: ) - Datum zdan. plnění)
  duzpUcto?: Date | null
  // Období zaúčtování (db: ) - Období zaúčtování)
  postingPeriod?: Date | null
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar | null
  // Kurz (db: ) - Kurz)
  kurz?: Big | null
  // Kurz. množství (db: ) - Kurz. množství)
  kurzMnozstvi?: Big | null
  // Měna (db: ) - Měna)
  mena?: AFMena | null
  // Modul (db: ) - Modul)
  modul?: string | null
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni | null
  // Název firmy (db: ) - Název firmy)
  nazFirmy?: string | null
  // DIČ (db: ) - DIČ)
  dic?: string | null
  // Popis (db: ) - Popis)
  popis?: string | null
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string | null
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: TypSzbDph | null
  // Hodnota DPH (db: ) - Hodnota DPH)
  szbDph?: Big | null
  // Částka [Kč] (db: ) - Částka [Kč])
  sumTuz?: Big | null
  // Částka [měna] (db: ) - Částka [měna])
  sumMen?: Big | null
  // Stav dokladu (db: ) - Stav dokladu)
  stavUzivK?: StavUziv | null
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko | null
  // Účet MD (db: ) - Účet MD)
  mdUcet?: AFUcet | null
  // Účet DAL (db: ) - Účet DAL)
  dalUcet?: AFUcet | null
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number | null
  // Zaúčtováno (db: ) - Stav zaúčtování)
  zuctovano?: boolean | null
  // Položka pro DPH částku (db: ) - Položka pro DPH částku)
  vatItem?: boolean | null
  // Převrácení stran účtování (db: ) - Převrácení stran účtování)
  accountsSwapped?: boolean | null
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka | null
  // Párovací symbol (db: ) - Párovací symbol)
  parSymbol?: string | null
  // Činnost (db: ) - Činnost)
  cinnost?: AFCinnost | null
  // Seznam ID položek (db: ) - Seznam ID položek)
  idPolozek?: any[] | null
  // Bezpoložkový doklad (db: ) - bezpoložkový doklad)
  bezPolozek?: boolean | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    idUcetniDenik : {
      key: 'idUcetniDenik',
      type: PropertyType.Integer,
      isArray: false,
      
    },
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