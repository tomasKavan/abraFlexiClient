import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFIntegrace } from './AFIntegrace.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { StatusDoplnku } from '../AFEntityEnums.js'

export class AFDoplnek extends AFEntity {
  static EntityPath: string = 'doplnek'
  static EntityName: string = 'Doplněk'
  static EntityType: string = 'DOPLNEK'

  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // ID doplňku u integrátora (db: Integratoraddonid) - ID doplňku u integrátora)
  integratorAddonId?: string | null
  // Status (db: Statusk) - Status)
  statusK?: StatusDoplnku | null
  // Verze (db: Version) - Verze)
  version?: string | null
  // Cena (db: Price) - Cena)
  price?: Big | null
  // URL s cenou (db: Priceurl) - URL s cenou)
  priceUrl?: string | null
  // Aktivační URL (db: Activateurl) - Aktivační URL)
  activateUrl?: string | null
  // Konfigurační URL (db: Configurl) - Konfigurační URL)
  configUrl?: string | null
  // URL pro pozastavení (db: Pauseurl) - URL pro pozastavení)
  pauseUrl?: string | null
  // URL pro opětovné spuštění (db: Unpauseurl) - URL pro opětovné spuštění)
  unpauseUrl?: string | null
  // Status URL (db: Statusurl) - Status URL)
  statusUrl?: string | null
  // Deaktivační URL (db: Deactivateurl) - Deaktivační URL)
  deactivateUrl?: string | null
  // Kód ceníku fakturace (db: Cenikkodfakturace) - Kód ceníku fakturace)
  cenikKodFakturace?: string | null
  // ID doplňku z obchodu doplňků (db: Addonstoreid) - ID doplňku z obchodu doplňků)
  addonStoreId?: number | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Integrace (db: Idintegration) - Integrace)
  integrace?: AFIntegrace | null
  // API Uživatel (db: Apiuserid) - API Uživatel)
  apiUser?: AFUzivatel | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: AFUzivatel | null
  // Vytvořil (db: IdCreatedBy) - Vytvořil)
  createdBy?: AFUzivatel | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 40,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    integratorAddonId : {
      key: 'integratorAddonId',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    statusK : {
      key: 'statusK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StatusDoplnku',
      enum: StatusDoplnku,
      
    },
    version : {
      key: 'version',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    price : {
      key: 'price',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    priceUrl : {
      key: 'priceUrl',
      type: PropertyType.String,
      isArray: false,
      maxLength: 500,
      
    },
    activateUrl : {
      key: 'activateUrl',
      type: PropertyType.String,
      isArray: false,
      maxLength: 500,
      
    },
    configUrl : {
      key: 'configUrl',
      type: PropertyType.String,
      isArray: false,
      maxLength: 500,
      
    },
    pauseUrl : {
      key: 'pauseUrl',
      type: PropertyType.String,
      isArray: false,
      maxLength: 500,
      
    },
    unpauseUrl : {
      key: 'unpauseUrl',
      type: PropertyType.String,
      isArray: false,
      maxLength: 500,
      
    },
    statusUrl : {
      key: 'statusUrl',
      type: PropertyType.String,
      isArray: false,
      maxLength: 500,
      
    },
    deactivateUrl : {
      key: 'deactivateUrl',
      type: PropertyType.String,
      isArray: false,
      maxLength: 500,
      
    },
    cenikKodFakturace : {
      key: 'cenikKodFakturace',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    addonStoreId : {
      key: 'addonStoreId',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    createdDate : {
      key: 'createdDate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    integrace : {
      key: 'integrace',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntegrace',
      
    },
    apiUser : {
      key: 'apiUser',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      
    },
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
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