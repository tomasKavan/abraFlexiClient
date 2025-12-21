import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskyDotaz } from './AFUzivatelskyDotaz.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { DatazTypParam } from '../AFEntityEnums.js'

export class AFUzivatelskyDotazParametr extends AFEntity {
  static EntityPath: string = 'uzivatelsky-dotaz-parametr'
  static EntityName: string = 'Parametry'
  static EntityType: string = 'UZIVATELSKY_DOTAZ_PARAMETR'

  // ID (db: IdDotazParam) - ID)
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
  // Typ (db: TypParamK) - Typ)
  typParamK?: DatazTypParam | null
  // Výchozí hodnota (db: Vychozi) - Výchozí hodnota)
  vychozi?: string | null
  // Mohutnost N (db: MohutnostN) - Mohutnost N)
  mohutnostN?: boolean | null
  // Výběr z (db: BeanKey) - Výběr z)
  beanKey?: string | null
  // Povinný (db: Povinny) - Povinný)
  povinny?: boolean | null
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
    typParamK : {
      key: 'typParamK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DatazTypParam',
      enum: DatazTypParam,
      
    },
    vychozi : {
      key: 'vychozi',
      type: PropertyType.String,
      isArray: false,
      
    },
    mohutnostN : {
      key: 'mohutnostN',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    beanKey : {
      key: 'beanKey',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    povinny : {
      key: 'povinny',
      type: PropertyType.Logic,
      isArray: false,
      
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