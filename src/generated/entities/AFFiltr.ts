import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFFiltr extends AFEntity {
  static EntityPath: string = 'filtr'
  static EntityName: string = 'Uživatelské filtry'
  static EntityType: string = 'FILTR'

  // ID (db: IdFiltru) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Formulář (db: BeanKey) - Formulář)
  beanKey?: string | null
  // Obsah filtru (db: ObsahFiltru) - Obsah filtru)
  obsahFiltru?: string | null
  // Privátní (db: Privatni) - Privátní)
  privatni?: boolean | null
  // Návrhář (db: Navrhar) - Návrhář)
  navrhar?: boolean | null
  // Uložit nastavení sloupců (db: SaveColumns) - Uložit nastavení sloupců)
  saveColumns?: boolean | null
  // Poslední použití (db: LastUsage) - Poslední použití)
  lastUsage?: Date | null
  // Počet použití (db: UsageCnt) - Počet použití)
  usageCnt?: number | null
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: AFUzivatel | null

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
    beanKey : {
      key: 'beanKey',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    obsahFiltru : {
      key: 'obsahFiltru',
      type: PropertyType.String,
      isArray: false,
      
    },
    privatni : {
      key: 'privatni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    navrhar : {
      key: 'navrhar',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    saveColumns : {
      key: 'saveColumns',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    lastUsage : {
      key: 'lastUsage',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    usageCnt : {
      key: 'usageCnt',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    uzivatel : {
      key: 'uzivatel',
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