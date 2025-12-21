import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFAdresar } from './AFAdresar.js'




export class AFPoSplatnosti extends AFEntity {
  static EntityPath: string = 'po-splatnosti'
  static EntityName: string = 'Neuhrazené pohledávky/závazky po splatnosti'
  static EntityType: string = 'PO_SPLATNOSTI'

  // Fakturováno (db: ) - Fakturováno)
  fakturovano?: Big | null
  // Suma celkem aktuální (db: ) - Suma celkem aktuální)
  sumCelkemAkt?: Big | null
  // Uhrazeno (db: ) - Uhrazeno)
  uhrazeno?: Big | null
  // Symbol splatnosti (db: ) - Symbol splatnosti)
  symbolSplatnostiK?: any | null
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar | null



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