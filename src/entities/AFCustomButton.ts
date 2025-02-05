import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFCustomButton extends AFEntity {
  static EntityPath: string = 'custom-button'
  static EntityName: string = 'Uživatelské tlačítko'
  static EntityType: string = 'CUSTOM_BUTTON'

  // ID (db: Idwcustbutton) - ID)
  id?: number
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Url (db: Url) - Url)
  url?: string
  // Název (db: Title) - Název)
  title?: string
  // Popis (db: Description) - Popis)
  description?: string
  // Evidence (db: Evidence) - Evidence)
  evidence?: string
  // Umístění (db: Location) - Umístění)
  location?: string
  // Volba prohlížeče (db: Browser) - Volba prohlížeče)
  browser?: string

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
      afClass: AFUzivatelskaVazba
    },

  }
}