import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFFiltr extends AFEntity {
  static EntityPath: string = 'filtr'
  static EntityName: string = 'Uživatelské filtry'
  static EntityType: string = 'FILTR'

  // ID (db: IdFiltru) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Formulář (db: BeanKey) - Formulář)
  beanKey?: string
  // Obsah filtru (db: ObsahFiltru) - Obsah filtru)
  obsahFiltru?: string
  // Privátní (db: Privatni) - Privátní)
  privatni?: boolean
  // Návrhář (db: Navrhar) - Návrhář)
  navrhar?: boolean
  // Uložit nastavení sloupců (db: SaveColumns) - Uložit nastavení sloupců)
  saveColumns?: boolean
  // Poslední použití (db: LastUsage) - Poslední použití)
  lastUsage?: Date
  // Počet použití (db: UsageCnt) - Počet použití)
  usageCnt?: number
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: any

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    beanKey : {
      key: 'beanKey',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },    obsahFiltru : {
      key: 'obsahFiltru',
      type: PropertyType.String,
      isArray: false,
      
    },    privatni : {
      key: 'privatni',
      type: PropertyType.Logic,
      isArray: false,
      
    },    navrhar : {
      key: 'navrhar',
      type: PropertyType.Logic,
      isArray: false,
      
    },    saveColumns : {
      key: 'saveColumns',
      type: PropertyType.Logic,
      isArray: false,
      
    },    lastUsage : {
      key: 'lastUsage',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    usageCnt : {
      key: 'usageCnt',
      type: PropertyType.Integer,
      isArray: false,
      
    },    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}