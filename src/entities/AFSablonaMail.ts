import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFSablonaMail extends AFEntity {
  static EntityPath: string = 'sablona-mail'
  static EntityName: string = 'Uživatelské e-mailové šablony'
  static EntityType: string = 'SABLONA_MAIL'

  // ID (db: Idsablona) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Místa použití (db: BeanKeys) - Místa použití)
  beanKeys?: string
  // Text (db: TextSablona) - Text)
  textSablona?: string
  // Odesílatel (db: DefaultFrom) - Odesílatel)
  defaultFrom?: string
  // Předmět (db: Subject) - Předmět)
  subject?: string

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


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
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    beanKeys : {
      key: 'beanKeys',
      type: PropertyType.String,
      isArray: false,
      
    },
    textSablona : {
      key: 'textSablona',
      type: PropertyType.String,
      isArray: false,
      
    },
    defaultFrom : {
      key: 'defaultFrom',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    subject : {
      key: 'subject',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}