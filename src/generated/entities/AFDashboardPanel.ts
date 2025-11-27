import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatel } from './AFUzivatel'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { DashboardPanelVisibility } from '../AFEntityEnums'

export class AFDashboardPanel extends AFEntity {
  static EntityPath: string = 'dashboard-panel'
  static EntityName: string = 'Správa přehledů'
  static EntityType: string = 'DASHBOARD_PANEL'

  // ID (db: Idwdashboardpanel) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Popis EN (db: PopisA) - Popis EN)
  popisA?: string | null
  // Popis DE (db: PopisB) - Popis DE)
  popisB?: string | null
  // Popis FR (db: PopisC) - Popis FR)
  popisC?: string | null
  // Definice (db: Definition) - Definice)
  definition?: string | null
  // Viditelnost (db: VisibilityK) - Viditelnost)
  visibilityK?: DashboardPanelVisibility | null
  // Pořadí (db: Priority) - Pořadí)
  priority?: number | null
  // Standardní přehled (db: Standard) - Standardní přehled)
  standard?: boolean | null
  // Vytvořil (db: Idauthor) - Vytvořil)
  author?: AFUzivatel | null

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
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}