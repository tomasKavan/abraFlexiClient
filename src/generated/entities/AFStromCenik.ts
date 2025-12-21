import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStrom } from './AFStrom.js'




export class AFStromCenik extends AFEntity {
  static EntityPath: string = 'strom-cenik'
  static EntityName: string = 'Vazba uzlu na objekt'
  static EntityType: string = 'STROM_CENIK'

  // ID (db: Idvazuzel) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // ID Záznamu (db: Idzaznamu) - ID Záznamu)
  idZaznamu?: number | null
  // Strom (db: Iduzlu) - Strom)
  uzel?: AFStrom | null



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
    idZaznamu : {
      key: 'idZaznamu',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    uzel : {
      key: 'uzel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStrom',
      maxLength: 20,
      
    },


  }
}