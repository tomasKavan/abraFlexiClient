import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskyDotaz } from './AFUzivatelskyDotaz.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { DatazTypParam } from '../AFEntityEnums.js'

export class AFUzivatelskyDotazVlastnost extends AFEntity {
  static EntityPath: string = 'uzivatelsky-dotaz-vlastnost'
  static EntityName: string = 'Vlastnosti'
  static EntityType: string = 'UZIVATELSKY_DOTAZ_VLASTNOST'

  // ID (db: IdDotazProp) - ID)
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
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number | null
  // Typ (db: TypPropK) - Typ)
  typPropK?: DatazTypParam | null
  // Skrýt sloupec (db: HideColumn) - Skrýt sloupec)
  hideColumn?: boolean | null
  // Klíč pro tabulku (db: BeanKeyOpen) - Klíč pro tabulku)
  beanKeyOpen?: string | null
  // Šířka (db: Width) - Šířka)
  width?: number | null
  // Zdrojová tabulka (db: ResourceBeanKey) - Zdrojová tabulka)
  resourceBeanKey?: string | null
  // Zdrojové pole (db: ResourcePropName) - Zdrojové pole)
  resourcePropName?: string | null
  // Dotaz (db: IdDotaz) - Dotaz)
  dotaz?: AFUzivatelskyDotaz | null

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
      maxLength: 50,
      
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
    cisRad : {
      key: 'cisRad',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typPropK : {
      key: 'typPropK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DatazTypParam',
      enum: DatazTypParam,
      
    },
    hideColumn : {
      key: 'hideColumn',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    beanKeyOpen : {
      key: 'beanKeyOpen',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    width : {
      key: 'width',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    resourceBeanKey : {
      key: 'resourceBeanKey',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    resourcePropName : {
      key: 'resourcePropName',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    dotaz : {
      key: 'dotaz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatelskyDotaz',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}