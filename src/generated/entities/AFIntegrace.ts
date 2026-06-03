import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { StatusIntegrace } from '../AFEntityEnums.js'

export class AFIntegrace extends AFEntity {
  static EntityPath: string = 'integrace'
  static EntityName: string = 'Integrace'
  static EntityType: string = 'INTEGRACE'

  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Registrační URL (db: Registerurl) - Registrační URL)
  registerUrl?: string | null
  // Část autentizačního tokenu (db: Authtokenpart) - Část autentizačního tokenu)
  authTokenPart?: string | null
  // Identifikátor firmy (db: Orgid) - Identifikátor firmy)
  orgId?: string | null
  // Identifikátor instance (db: Instanceid) - Identifikátor instance)
  instanceId?: string | null
  // ID integrátora z obchodu doplňků (db: Addonstoreid) - ID integrátora z obchodu doplňků)
  addonStoreId?: number | null
  // Status (db: Statusk) - Status)
  statusK?: StatusIntegrace | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    registerUrl : {
      key: 'registerUrl',
      type: PropertyType.String,
      isArray: false,
      maxLength: 500,
      
    },
    authTokenPart : {
      key: 'authTokenPart',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    orgId : {
      key: 'orgId',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    instanceId : {
      key: 'instanceId',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    addonStoreId : {
      key: 'addonStoreId',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    statusK : {
      key: 'statusK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StatusIntegrace',
      enum: StatusIntegrace,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}