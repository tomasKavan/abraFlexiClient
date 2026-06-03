import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFRole } from './AFRole.js'


import { TypPristPrav, PristupovePravoFeatureK } from '../AFEntityEnums.js'

export class AFPristupovePravo extends AFEntity {
  static EntityPath: string = 'pristupove-pravo'
  static EntityName: string = 'Přístupová práva'
  static EntityType: string = 'PRISTUPOVE_PRAVO'

  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Typ přístupu (db: TypeK) - Typ přístupu)
  typeK?: TypPristPrav | null
  // Klíč přístupového práva (db: GroupKey) - Klíč přístupového práva)
  groupKey?: string | null
  // Role uživatele (db: IdRole) - Role uživatele)
  role?: AFRole | null
  // Upřesňující přístupová práva (db: string_to_array(features, &#39;,&#39;)) - Upřesňující přístupová práva)
  featureK?: PristupovePravoFeatureK[] | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    typeK : {
      key: 'typeK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPristPrav',
      enum: TypPristPrav,
      
    },
    groupKey : {
      key: 'groupKey',
      type: PropertyType.String,
      isArray: false,
      
    },
    role : {
      key: 'role',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRole',
      
    },
    featureK : {
      key: 'featureK',
      type: PropertyType.Array,
      isArray: false,
      enumName: 'PristupovePravoFeatureK',
      enum: PristupovePravoFeatureK,
      itemType: PropertyType.Select
    },


  }
}