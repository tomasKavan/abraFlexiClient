import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'


import { DoporuceniCil } from './AFEntityEnums'

export class AFDoporuceni extends AFEntity {
  static EntityPath: string = 'doporuceni'
  static EntityName: string = 'Doporučení'
  static EntityType: string = 'DOPORUCENI'

  // Aktuální hodnota (db: ) - Aktuální hodnota)
  aktualniHodnota?: string
  // Doporučená hodnota (db: ) - Doporučená hodnota)
  doporucenaHodnota?: string
  // Typ hodnoty (db: ) - Typ hodnoty)
  typHodnoty?: string
  // Název vlastnosti (db: ) - Název vlastnosti)
  vlastnost?: string
  // Automaticky (db: ) - Automaticky)
  automaticky?: boolean
  // Popis (db: ) - Popis)
  popis?: string
  // Cíl doporučení (db: ) - Cíl doporučení)
  doporuceniCilK?: DoporuceniCil
  // Doklad (db: ) - Doklad)
  doklad?: any



  static propAnnotations: Record<string, TypeAnnotation> = {
    aktualniHodnota : {
      key: 'aktualniHodnota',
      type: PropertyType.String,
      isArray: false,
      
    },    doporucenaHodnota : {
      key: 'doporucenaHodnota',
      type: PropertyType.String,
      isArray: false,
      
    },    typHodnoty : {
      key: 'typHodnoty',
      type: PropertyType.String,
      isArray: false,
      
    },    vlastnost : {
      key: 'vlastnost',
      type: PropertyType.String,
      isArray: false,
      
    },    automaticky : {
      key: 'automaticky',
      type: PropertyType.Logic,
      isArray: false,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },    doporuceniCilK : {
      key: 'doporuceniCilK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'DoporuceniCil',
      enum: DoporuceniCil,
      
    },    doklad : {
      key: 'doklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },

  }
}