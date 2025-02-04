import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFSklad } from './AFSklad'
import { AFCenik } from './AFCenik'


import { TypPohybu } from './AFEntityEnums'

export class AFSarzeExpirace extends AFEntity {
  static EntityPath: string = 'sarze-expirace'
  static EntityName: string = 'Šarže a expirace'
  static EntityType: string = 'SARZE_EXPIRACE'

  // ID (db: IdPolSklad) - ID)
  id?: number
  // Množství (db: Pocet) - Množství)
  pocet?: Big
  // Cena za MJ (db: CenaMj) - Cena za MJ)
  cenaMj?: Big
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date
  // Datum skladového pohybu (db: DatSklad) - Datum skladového pohybu)
  datSklad?: Date
  // Trvanlivost (db: DatTrvan) - Trvanlivost)
  datTrvan?: Date
  // Datum výroby (db: DatVyroby) - Datum výroby)
  datVyroby?: Date
  // Expirace (db: Expirace) - Expirace)
  expirace?: Date
  // Šarže (db: Sarze) - Šarže)
  sarze?: string
  // Typ pohybu (db: TypPohybuK) - Typ pohybu)
  typPohybuK?: TypPohybu
  // Sklad (db: IdSkladu) - Sklad)
  sklad?: AFSklad
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    pocet : {
      key: 'pocet',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    cenaMj : {
      key: 'cenaMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },    datSklad : {
      key: 'datSklad',
      type: PropertyType.Date,
      isArray: false,
      
    },    datTrvan : {
      key: 'datTrvan',
      type: PropertyType.Date,
      isArray: false,
      
    },    datVyroby : {
      key: 'datVyroby',
      type: PropertyType.Date,
      isArray: false,
      
    },    expirace : {
      key: 'expirace',
      type: PropertyType.Date,
      isArray: false,
      
    },    sarze : {
      key: 'sarze',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },    typPohybuK : {
      key: 'typPohybuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPohybu',
      enum: TypPohybu,
      
    },    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSklad,
      
    },    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenik,
      maxLength: 64,
      
    },

  }
}