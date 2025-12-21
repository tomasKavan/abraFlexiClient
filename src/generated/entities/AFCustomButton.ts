import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFCustomButton extends AFEntity {
  static EntityPath: string = 'custom-button'
  static EntityName: string = 'Uživatelské tlačítko'
  static EntityType: string = 'CUSTOM_BUTTON'

  // ID (db: Idwcustbutton) - ID)
  declare id?: number | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Url (db: Url) - Url)
  url?: string | null
  // Název (db: Title) - Název)
  title?: string | null
  // Popis (db: Description) - Popis)
  description?: string | null
  // Evidence (db: Evidence) - Evidence)
  evidence?: string | null
  // Umístění (db: Location) - Umístění)
  location?: string | null
  // Volba prohlížeče (db: Browser) - Volba prohlížeče)
  browser?: string | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    url : {
      key: 'url',
      type: PropertyType.String,
      isArray: false,
      
    },
    title : {
      key: 'title',
      type: PropertyType.String,
      isArray: false,
      
    },
    description : {
      key: 'description',
      type: PropertyType.String,
      isArray: false,
      
    },
    evidence : {
      key: 'evidence',
      type: PropertyType.String,
      isArray: false,
      
    },
    location : {
      key: 'location',
      type: PropertyType.String,
      isArray: false,
      
    },
    browser : {
      key: 'browser',
      type: PropertyType.String,
      isArray: false,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}