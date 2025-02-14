import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFMernaJednotka } from './AFMernaJednotka.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypAtribut } from '../AFEntityEnums.js'

export class AFTypAtributu extends AFEntity {
  static EntityPath: string = 'typ-atributu'
  static EntityName: string = 'Typy atributů'
  static EntityType: string = 'TYP_ATRIBUTU'

  // ID (db: IdTypAtribut) - ID)
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
  // Zobrazovat (db: Show) - Zobrazovat)
  visible?: boolean
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Typ atributu (db: TypAtributK) - Typ atributu)
  typAtributK?: TypAtribut
  // Místa použití (db: BeanKeysA) - Místa použití)
  beanKeysA?: string
  // Standartní (db: Standard) - Standartní)
  standard?: boolean
  // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
  uuid?: string
  // MJ (db: IdMj) - MJ)
  mj?: AFMernaJednotka

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
    visible : {
      key: 'visible',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typAtributK : {
      key: 'typAtributK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypAtribut',
      enum: TypAtribut,
      
    },
    beanKeysA : {
      key: 'beanKeysA',
      type: PropertyType.String,
      isArray: false,
      
    },
    standard : {
      key: 'standard',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uuid : {
      key: 'uuid',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    mj : {
      key: 'mj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}