import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFMena } from './AFMena'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFIntrastatKurz extends AFEntity {
  static EntityPath: string = 'intrastat-kurz'
  static EntityName: string = 'Kurzy pro Intrastat'
  static EntityType: string = 'INTRASTAT_KURZ'

  // ID (db: IdKurzy) - ID)
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Datum (db: PlatiOdData) - Datum)
  platiOdData?: Date
  // Kurz (db: NbStred) - Kurz)
  nbStred?: Big
  // Množství (db: KurzMnozstvi) - Množství)
  kurzMnozstvi?: Big
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena

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
    platiOdData : {
      key: 'platiOdData',
      type: PropertyType.Date,
      isArray: false,
      
    },
    nbStred : {
      key: 'nbStred',
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

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}