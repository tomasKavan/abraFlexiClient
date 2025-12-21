import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'




export class AFSouhrnneHlaseniDph extends AFEntity {
  static EntityPath: string = 'souhrnne-hlaseni-dph'
  static EntityName: string = 'Souhrnné hlášení k DPH'
  static EntityType: string = 'SOUHRNNE_HLASENI_DPH'

  // Kód země (db: ) - Kód země)
  kodStatu?: string | null
  // Kód země (DPH) (db: ) - Kód země (DPH))
  kodDphStatu?: string | null
  // DIČ (db: ) - DIČ)
  dic?: string | null
  // Kód plnění (db: ) - Kód plnění)
  kodPlneni?: string | null
  // Počet plnění (db: ) - Počet plnění)
  pocetPlneni?: number | null
  // Základ [Kč] (db: ) - Základ [Kč])
  sumZkl?: Big | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    kodStatu : {
      key: 'kodStatu',
      type: PropertyType.String,
      isArray: false,
      
    },
    kodDphStatu : {
      key: 'kodDphStatu',
      type: PropertyType.String,
      isArray: false,
      
    },
    dic : {
      key: 'dic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    kodPlneni : {
      key: 'kodPlneni',
      type: PropertyType.String,
      isArray: false,
      
    },
    pocetPlneni : {
      key: 'pocetPlneni',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    sumZkl : {
      key: 'sumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },


  }
}