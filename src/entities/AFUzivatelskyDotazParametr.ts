import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFUzivatelskyDotaz } from './AFUzivatelskyDotaz'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { DatazTypParam } from './AFEntityEnums'

export class AFUzivatelskyDotazParametr extends AFEntity {
  static EntityPath: string = 'uzivatelsky-dotaz-parametr'
  static EntityName: string = 'Parametry'
  static EntityType: string = 'UZIVATELSKY_DOTAZ_PARAMETR'

  // ID (db: IdDotazParam) - ID)
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
  // Typ (db: TypParamK) - Typ)
  typParamK?: DatazTypParam
  // Výchozí hodnota (db: Vychozi) - Výchozí hodnota)
  vychozi?: string
  // Mohutnost N (db: MohutnostN) - Mohutnost N)
  mohutnostN?: boolean
  // Výběr z (db: BeanKey) - Výběr z)
  beanKey?: string
  // Povinný (db: Povinny) - Povinný)
  povinny?: boolean
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
      
    },    typParamK : {
      key: 'typParamK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DatazTypParam',
      enum: DatazTypParam,
      
    },    vychozi : {
      key: 'vychozi',
      type: PropertyType.String,
      isArray: false,
      
    },    mohutnostN : {
      key: 'mohutnostN',
      type: PropertyType.Logic,
      isArray: false,
      
    },    beanKey : {
      key: 'beanKey',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },    povinny : {
      key: 'povinny',
      type: PropertyType.Logic,
      isArray: false,
      
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