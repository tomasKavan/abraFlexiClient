import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'




export class AFGlobalStore extends AFEntity {
  static EntityPath: string = 'global-store'
  static EntityName: string = 'Úložiště globálního nastavení'
  static EntityType: string = 'GLOBAL_SETTING'

  // ID (db: IdSetting) - ID)
  id?: number
  // Klíč (db: Klic) - Klíč)
  klic?: string
  // Hodnota (db: Hodnota) - Hodnota)
  hodnota?: string



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    klic : {
      key: 'klic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    hodnota : {
      key: 'hodnota',
      type: PropertyType.String,
      isArray: false,
      
    },

  }
}