import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFSklad } from './AFSklad'
import { AFCenik } from './AFCenik'


import { TypPohybu } from '../AFEntityEnums'

export class AFSarzeExpirace extends AFEntity {
  static EntityPath: string = 'sarze-expirace'
  static EntityName: string = 'Šarže a expirace'
  static EntityType: string = 'SARZE_EXPIRACE'

  // ID (db: IdPolSklad) - ID)
  declare id?: number | null
  // Množství (db: Pocet) - Množství)
  pocet?: Big | null
  // Cena za MJ (db: CenaMj) - Cena za MJ)
  cenaMj?: Big | null
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date | null
  // Datum skladového pohybu (db: DatSklad) - Datum skladového pohybu)
  datSklad?: Date | null
  // Trvanlivost (db: DatTrvan) - Trvanlivost)
  datTrvan?: Date | null
  // Datum výroby (db: DatVyroby) - Datum výroby)
  datVyroby?: Date | null
  // Expirace (db: Expirace) - Expirace)
  expirace?: Date | null
  // Šarže (db: Sarze) - Šarže)
  sarze?: string | null
  // Typ pohybu (db: TypPohybuK) - Typ pohybu)
  typPohybuK?: TypPohybu | null
  // Sklad (db: IdSkladu) - Sklad)
  sklad?: AFSklad | null
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    pocet : {
      key: 'pocet',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenaMj : {
      key: 'cenaMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datSklad : {
      key: 'datSklad',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datTrvan : {
      key: 'datTrvan',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datVyroby : {
      key: 'datVyroby',
      type: PropertyType.Date,
      isArray: false,
      
    },
    expirace : {
      key: 'expirace',
      type: PropertyType.Date,
      isArray: false,
      
    },
    sarze : {
      key: 'sarze',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    typPohybuK : {
      key: 'typPohybuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPohybu',
      enum: TypPohybu,
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },


  }
}