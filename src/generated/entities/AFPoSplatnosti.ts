import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFAdresar } from './AFAdresar'




export class AFPoSplatnosti extends AFEntity {
  static EntityPath: string = 'po-splatnosti'
  static EntityName: string = 'Neuhrazené pohledávky/závazky po splatnosti'
  static EntityType: string = 'PO_SPLATNOSTI'

  //  (db: ) - )
  fakturovano?: Big
  //  (db: ) - )
  sumCelkemAkt?: Big
  //  (db: ) - )
  uhrazeno?: Big
  //  (db: ) - )
  symbolSplatnostiK?: any
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar



  static propAnnotations: Record<string, TypeAnnotation> = {
    fakturovano : {
      key: 'fakturovano',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    sumCelkemAkt : {
      key: 'sumCelkemAkt',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    uhrazeno : {
      key: 'uhrazeno',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    symbolSplatnostiK : {
      key: 'symbolSplatnostiK',
      type: PropertyType.Select,
      isArray: false,
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },


  }
}