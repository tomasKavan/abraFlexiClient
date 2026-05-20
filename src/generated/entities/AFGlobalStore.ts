import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'




export class AFGlobalStore extends AFEntity {
  static EntityPath: string = 'global-store'
  static EntityName: string = 'Úložiště globálního nastavení'
  static EntityType: string = 'GLOBAL_SETTING'

  // ID (db: IdSetting) - ID)
  // Klíč (db: Klic) - Klíč)
  klic?: string | null
  // Hodnota (db: Hodnota) - Hodnota)
  hodnota?: string | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    klic : {
      key: 'klic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    hodnota : {
      key: 'hodnota',
      type: PropertyType.String,
      isArray: false,
      
    },


  }
}