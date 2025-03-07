import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFStrom } from './AFStrom'




export class AFStromCenik extends AFEntity {
  static EntityPath: string = 'strom-cenik'
  static EntityName: string = 'Vazba uzlu na objekt'
  static EntityType: string = 'STROM_CENIK'

  // ID (db: Idvazuzel) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // ID Záznamu (db: Idzaznamu) - ID Záznamu)
  idZaznamu?: number
  // Strom (db: Iduzlu) - Strom)
  uzel?: AFStrom



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