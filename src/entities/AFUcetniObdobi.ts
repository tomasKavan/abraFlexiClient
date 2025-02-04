import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'




export class AFUcetniObdobi extends AFEntity {
  static EntityPath: string = 'ucetni-obdobi'
  static EntityName: string = 'Účetní období'
  static EntityType: string = 'UCETNI_OBDOBI'

  // ID (db: IdUcetObdobi) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Platí od data (db: PlatiOdData) - Platí od data)
  platiOdData?: Date
  // Platí do data (db: PlatiDoData) - Platí do data)
  platiDoData?: Date
  // Popis (db: Popis) - Popis)
  popis?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Změna po uzávěrce (db: ZmenaZaver) - Změna po uzávěrce)
  zmenaZaver?: boolean
  // Chyba při přecenění (db: ChybaPreceneni) - Chyba při přecenění)
  chybaPreceneni?: boolean
  // Kód roku pro řadu (db: RokProRadu) - Kód roku pro řadu)
  rokProRadu?: number



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    platiOdData : {
      key: 'platiOdData',
      type: PropertyType.Date,
      isArray: false,
      
    },    platiDoData : {
      key: 'platiDoData',
      type: PropertyType.Date,
      isArray: false,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    zmenaZaver : {
      key: 'zmenaZaver',
      type: PropertyType.Logic,
      isArray: false,
      
    },    chybaPreceneni : {
      key: 'chybaPreceneni',
      type: PropertyType.Logic,
      isArray: false,
      
    },    rokProRadu : {
      key: 'rokProRadu',
      type: PropertyType.Integer,
      isArray: false,
      
    },

  }
}