import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFSkupinaAtributu extends AFEntity {
  static EntityPath: string = 'skupina-atributu'
  static EntityName: string = 'Skupiny atributů'
  static EntityType: string = 'SKUPINA_ATRIBUTU'

  // ID (db: IdTypZbozi) - ID)
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
  // Zobrazovat (db: Show) - Zobrazovat)
  visible?: boolean | null
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: number | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Místa použití (db: BeanKeysA) - Místa použití)
  beanKeysA?: string | null
  // Standartní (db: Standard) - Standartní)
  standard?: boolean | null
  // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
  uuid?: string | null

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
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
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

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}