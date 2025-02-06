import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { DashboardPanelVisibility } from '../AFEntityEnums'

export class AFDashboardPanel extends AFEntity {
  static EntityPath: string = 'dashboard-panel'
  static EntityName: string = 'Správa přehledů'
  static EntityType: string = 'DASHBOARD_PANEL'

  // ID (db: Idwdashboardpanel) - ID)
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
  // Popis (db: Popis) - Popis)
  popis?: string
  // Popis EN (db: PopisA) - Popis EN)
  popisA?: string
  // Popis DE (db: PopisB) - Popis DE)
  popisB?: string
  // Popis FR (db: PopisC) - Popis FR)
  popisC?: string
  // Definice (db: Definition) - Definice)
  definition?: string
  // Viditelnost (db: VisibilityK) - Viditelnost)
  visibilityK?: DashboardPanelVisibility
  // Pořadí (db: Priority) - Pořadí)
  priority?: number
  // Standardní přehled (db: Standard) - Standardní přehled)
  standard?: boolean
  // Vytvořil (db: Idauthor) - Vytvořil)
  author?: any

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
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisA : {
      key: 'popisA',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisB : {
      key: 'popisB',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisC : {
      key: 'popisC',
      type: PropertyType.String,
      isArray: false,
      
    },
    definition : {
      key: 'definition',
      type: PropertyType.String,
      isArray: false,
      
    },
    visibilityK : {
      key: 'visibilityK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 255,
      enumName: 'DashboardPanelVisibility',
      enum: DashboardPanelVisibility,
      
    },
    priority : {
      key: 'priority',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    standard : {
      key: 'standard',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    author : {
      key: 'author',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}