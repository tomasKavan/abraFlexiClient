import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStredisko } from './AFStredisko'
import { AFMena } from './AFMena'
import { AFUcet } from './AFUcet'




export class AFObratPolozky extends AFEntity {
  static EntityPath: string = 'obrat-polozky'
  static EntityName: string = 'Položky obratů'
  static EntityType: string = 'OBRAT_POLOZKA_VIEW'

  //  (db: ) - )
  idObratPolozkaView?: number
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko
  // Činnost (db: ) - Činnost)
  cinnost?: Date
  // Měna (db: ) - Měna)
  mena?: AFMena
  // Účet (db: ) - Účet)
  ucet?: AFUcet
  // Obrat MD (db: ) - Obrat MD)
  obrMd?: Big
  // Obrat Dal (db: ) - Obrat Dal)
  obrDal?: Big
  // Datum zaúčt. (db: ) - Datum zaúčtování)
  datUcto?: Date



  static propAnnotations: Record<string, TypeAnnotation> = {
    idObratPolozkaView : {
      key: 'idObratPolozkaView',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Date,
      isArray: false,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      maxLength: 20,
      
    },
    ucet : {
      key: 'ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 20,
      
    },
    obrMd : {
      key: 'obrMd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obrDal : {
      key: 'obrDal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },


  }
}