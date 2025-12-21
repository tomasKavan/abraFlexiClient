import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypSablony } from '../AFEntityEnums.js'

export class AFSablonaUpominky extends AFEntity {
  static EntityPath: string = 'sablona-upominky'
  static EntityName: string = 'Upomínky'
  static EntityType: string = 'UPOMINKA_SABLONA'

  // ID (db: IdSablony) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Datum (db: Datum) - Datum)
  datum?: string | null
  // Datum EN (db: Datuma) - Datum EN)
  datuma?: string | null
  // Datum DE (db: Datumb) - Datum DE)
  datumb?: string | null
  // Datum FR (db: Datumc) - Datum FR)
  datumc?: string | null
  // Hlavička dopisu (db: Hlavicka) - Hlavička dopisu)
  hlavicka?: string | null
  // Hlavička dopisu EN (db: Hlavickaa) - Hlavička dopisu EN)
  hlavickaa?: string | null
  // Hlavička dopisu DE (db: Hlavickab) - Hlavička dopisu DE)
  hlavickab?: string | null
  // Hlavička dopisu FR (db: Hlavickac) - Hlavička dopisu FR)
  hlavickac?: string | null
  // Odběratel (db: Odberatel) - Odběratel)
  odberatel?: string | null
  // Odběratel EN (db: Odberatela) - Odběratel EN)
  odberatela?: string | null
  // Odběratel DE (db: Odberatelb) - Odběratel DE)
  odberatelb?: string | null
  // Odběratel FR (db: Odberatelc) - Odběratel FR)
  odberatelc?: string | null
  // Úvodní text (db: Uvod) - Úvodní text)
  uvod?: string | null
  // Úvodní text EN (db: Uvoda) - Úvodní text EN)
  uvoda?: string | null
  // Úvodní text DE (db: Uvodb) - Úvodní text DE)
  uvodb?: string | null
  // Úvodní text FR (db: Uvodc) - Úvodní text FR)
  uvodc?: string | null
  // Text nad fakturami (db: TextNad) - Text nad fakturami)
  textNad?: string | null
  // Text nad fakturami EN (db: TextNada) - Text nad fakturami EN)
  textNada?: string | null
  // Text nad fakturami DE (db: TextNadb) - Text nad fakturami DE)
  textNadb?: string | null
  // Text nad fakturami FR (db: TextNadc) - Text nad fakturami FR)
  textNadc?: string | null
  // Text pod fakturami (db: TextPod) - Text pod fakturami)
  textPod?: string | null
  // Text pod fakturami EN (db: TextPoda) - Text pod fakturami EN)
  textPoda?: string | null
  // Text pod fakturami DE (db: TextPodb) - Text pod fakturami DE)
  textPodb?: string | null
  // Text pod fakturami FR (db: TextPodc) - Text pod fakturami FR)
  textPodc?: string | null
  // Konec dopisu (db: Zapati) - Konec dopisu)
  zapati?: string | null
  // Konec dopisu EN (db: Zapatia) - Konec dopisu EN)
  zapatia?: string | null
  // Konec dopisu DE (db: Zapatib) - Konec dopisu DE)
  zapatib?: string | null
  // Konec dopisu FR (db: Zapatic) - Konec dopisu FR)
  zapatic?: string | null
  // Typ šablony (db: TypSablonyK) - Typ šablony)
  typSablonyK?: TypSablony | null

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
    datum : {
      key: 'datum',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datuma : {
      key: 'datuma',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datumb : {
      key: 'datumb',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datumc : {
      key: 'datumc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    hlavicka : {
      key: 'hlavicka',
      type: PropertyType.String,
      isArray: false,
      
    },
    hlavickaa : {
      key: 'hlavickaa',
      type: PropertyType.String,
      isArray: false,
      
    },
    hlavickab : {
      key: 'hlavickab',
      type: PropertyType.String,
      isArray: false,
      
    },
    hlavickac : {
      key: 'hlavickac',
      type: PropertyType.String,
      isArray: false,
      
    },
    odberatel : {
      key: 'odberatel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    odberatela : {
      key: 'odberatela',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    odberatelb : {
      key: 'odberatelb',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    odberatelc : {
      key: 'odberatelc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    uvod : {
      key: 'uvod',
      type: PropertyType.String,
      isArray: false,
      
    },
    uvoda : {
      key: 'uvoda',
      type: PropertyType.String,
      isArray: false,
      
    },
    uvodb : {
      key: 'uvodb',
      type: PropertyType.String,
      isArray: false,
      
    },
    uvodc : {
      key: 'uvodc',
      type: PropertyType.String,
      isArray: false,
      
    },
    textNad : {
      key: 'textNad',
      type: PropertyType.String,
      isArray: false,
      
    },
    textNada : {
      key: 'textNada',
      type: PropertyType.String,
      isArray: false,
      
    },
    textNadb : {
      key: 'textNadb',
      type: PropertyType.String,
      isArray: false,
      
    },
    textNadc : {
      key: 'textNadc',
      type: PropertyType.String,
      isArray: false,
      
    },
    textPod : {
      key: 'textPod',
      type: PropertyType.String,
      isArray: false,
      
    },
    textPoda : {
      key: 'textPoda',
      type: PropertyType.String,
      isArray: false,
      
    },
    textPodb : {
      key: 'textPodb',
      type: PropertyType.String,
      isArray: false,
      
    },
    textPodc : {
      key: 'textPodc',
      type: PropertyType.String,
      isArray: false,
      
    },
    zapati : {
      key: 'zapati',
      type: PropertyType.String,
      isArray: false,
      
    },
    zapatia : {
      key: 'zapatia',
      type: PropertyType.String,
      isArray: false,
      
    },
    zapatib : {
      key: 'zapatib',
      type: PropertyType.String,
      isArray: false,
      
    },
    zapatic : {
      key: 'zapatic',
      type: PropertyType.String,
      isArray: false,
      
    },
    typSablonyK : {
      key: 'typSablonyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSablony',
      enum: TypSablony,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}