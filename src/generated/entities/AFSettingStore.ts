import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'




export class AFSettingStore extends AFEntity {
  static EntityPath: string = 'setting-store'
  static EntityName: string = 'Úložiště nastavení'
  static EntityType: string = 'SETTING'

  // ID (db: IdSetting) - ID)
  declare id?: number
  // Klíč (db: Klic) - Klíč)
  klic?: string
  // Hodnota (db: Hodnota) - Hodnota)
  hodnota?: string
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatelId?: number



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
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
    uzivatelId : {
      key: 'uzivatelId',
      type: PropertyType.Integer,
      isArray: false,
      
    },


  }
}