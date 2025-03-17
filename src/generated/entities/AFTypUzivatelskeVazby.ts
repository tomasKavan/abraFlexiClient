import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFTypUzivatelskeVazby extends AFEntity {
  static EntityPath: string = 'typ-uzivatelske-vazby'
  static EntityName: string = 'Typy uživatelských vazeb'
  static EntityType: string = 'VAZBA_TYP'

  // ID (db: IdVazbaTyp) - ID)
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
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Automatická (db: Automaticka) - Automatická)
  automaticka?: boolean
  // Primární místa použití (db: BeanKeysA) - Primární místa použití)
  beanKeysA?: string
  // Sekundární místa použití (db: BeanKeysB) - Sekundární místa použití)
  beanKeysB?: string
  // Viditelná ze sekundárního záznamu (db: VisibleB) - Viditelná ze sekundárního záznamu)
  visibleB?: boolean
  // Vazební sloupec sekundárního záznamu (db: FkNameB) - Vazební sloupec sekundárního záznamu)
  fkNameB?: string
  // Tabulka DB (db: TableNameB) - Tabulka DB)
  tableNameB?: string
  // Sloupec DB (db: FkDbNameB) - Sloupec DB)
  fkDbNameB?: string
  // ID DB (db: PkDbNameB) - ID DB)
  pkDbNameB?: string
  // Modul B (db: ModulB) - Modul B)
  modulB?: string
  // Štítky (db: ) - Štítky)
  declare stitky?: string

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
    automaticka : {
      key: 'automaticka',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    beanKeysA : {
      key: 'beanKeysA',
      type: PropertyType.String,
      isArray: false,
      
    },
    beanKeysB : {
      key: 'beanKeysB',
      type: PropertyType.String,
      isArray: false,
      
    },
    visibleB : {
      key: 'visibleB',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    fkNameB : {
      key: 'fkNameB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    tableNameB : {
      key: 'tableNameB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    fkDbNameB : {
      key: 'fkDbNameB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    pkDbNameB : {
      key: 'pkDbNameB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    modulB : {
      key: 'modulB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 3,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}