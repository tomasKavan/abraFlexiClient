import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFUzivatelskyDotaz } from './AFUzivatelskyDotaz'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { DatazTypParam } from './AFEntityEnums'

export class AFUzivatelskyDotazVlastnost extends AFEntity {
  static EntityPath: string = 'uzivatelsky-dotaz-vlastnost'
  static EntityName: string = 'Vlastnosti'
  static EntityType: string = 'UZIVATELSKY_DOTAZ_VLASTNOST'

  // ID (db: IdDotazProp) - ID)
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
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number
  // Typ (db: TypPropK) - Typ)
  typPropK?: DatazTypParam
  // Skrýt sloupec (db: HideColumn) - Skrýt sloupec)
  hideColumn?: boolean
  // Klíč pro tabulku (db: BeanKeyOpen) - Klíč pro tabulku)
  beanKeyOpen?: string
  // Šířka (db: Width) - Šířka)
  width?: number
  // Zdrojová tabulka (db: ResourceBeanKey) - Zdrojová tabulka)
  resourceBeanKey?: string
  // Zdrojové pole (db: ResourcePropName) - Zdrojové pole)
  resourcePropName?: string
  // Dotaz (db: IdDotaz) - Dotaz)
  dotaz?: AFUzivatelskyDotaz

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
      maxLength: 50,
      
    },    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },    cisRad : {
      key: 'cisRad',
      type: PropertyType.Integer,
      isArray: false,
      
    },    typPropK : {
      key: 'typPropK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DatazTypParam',
      enum: DatazTypParam,
      
    },    hideColumn : {
      key: 'hideColumn',
      type: PropertyType.Logic,
      isArray: false,
      
    },    beanKeyOpen : {
      key: 'beanKeyOpen',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },    width : {
      key: 'width',
      type: PropertyType.Integer,
      isArray: false,
      
    },    resourceBeanKey : {
      key: 'resourceBeanKey',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },    resourcePropName : {
      key: 'resourcePropName',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },    dotaz : {
      key: 'dotaz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUzivatelskyDotaz,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}