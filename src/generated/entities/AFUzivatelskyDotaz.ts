import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatel } from './AFUzivatel'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFUzivatelskyDotazParametr } from './AFUzivatelskyDotazParametr'
import { AFUzivatelskyDotazVlastnost } from './AFUzivatelskyDotazVlastnost'




export class AFUzivatelskyDotaz extends AFEntity {
  static EntityPath: string = 'uzivatelsky-dotaz'
  static EntityName: string = 'Uživatelské dotazy'
  static EntityType: string = 'UZIVATELSKY_DOTAZ'

  // ID (db: IdDotaz) - ID)
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string
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
  // Dotaz (db: Dotaz) - Dotaz)
  dotaz?: string
  // Primární formulář (db: MasterBeanKey) - Primární formulář)
  masterBeanKey?: string
  // Privátní (db: Privatni) - Privátní)
  privatni?: boolean
  // Report (db: Report) - Report)
  report?: string
  // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
  uuid?: string
  // ID primární evidence (db: ) - ID primární evidence)
  masterFormId?: number
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: AFUzivatel

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Parametry (type: UZIVATELSKY_DOTAZ_PARAMETR) - params)
  params?: AFUzivatelskyDotazParametr[]
  // Vlastnosti (type: UZIVATELSKY_DOTAZ_VLASTNOST) - props)
  props?: AFUzivatelskyDotazVlastnost[]


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
    dotaz : {
      key: 'dotaz',
      type: PropertyType.String,
      isArray: false,
      
    },
    masterBeanKey : {
      key: 'masterBeanKey',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    privatni : {
      key: 'privatni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    report : {
      key: 'report',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    uuid : {
      key: 'uuid',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    masterFormId : {
      key: 'masterFormId',
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
    params : {
      key: 'params',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskyDotazParametr'
    },
    props : {
      key: 'props',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskyDotazVlastnost'
    },

  }
}