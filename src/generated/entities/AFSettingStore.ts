import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'




export class AFSettingStore extends AFEntity {
  static EntityPath: string = 'setting-store'
  static EntityName: string = 'Úložiště nastavení'
  static EntityType: string = 'SETTING'

  // Klíč (db: Klic) - Klíč)
  klic?: string | null
  // Hodnota (db: Hodnota) - Hodnota)
  hodnota?: string | null
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatelId?: number | null



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
    uzivatelId : {
      key: 'uzivatelId',
      type: PropertyType.Integer,
      isArray: false,
      
    },


  }
}