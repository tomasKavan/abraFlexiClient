import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFTypUzivatelskeVazby extends AFEntity {
  static EntityPath: string = 'typ-uzivatelske-vazby'
  static EntityName: string = 'Typy uživatelských vazeb'
  static EntityType: string = 'VAZBA_TYP'

  // ID (db: IdVazbaTyp) - ID)
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
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: number | null
  // Automatická (db: Automaticka) - Automatická)
  automaticka?: boolean | null
  // Primární místa použití (db: BeanKeysA) - Primární místa použití)
  beanKeysA?: string | null
  // Sekundární místa použití (db: BeanKeysB) - Sekundární místa použití)
  beanKeysB?: string | null
  // Viditelná ze sekundárního záznamu (db: VisibleB) - Viditelná ze sekundárního záznamu)
  visibleB?: boolean | null
  // Vazební sloupec sekundárního záznamu (db: FkNameB) - Vazební sloupec sekundárního záznamu)
  fkNameB?: string | null
  // Tabulka DB (db: TableNameB) - Tabulka DB)
  tableNameB?: string | null
  // Sloupec DB (db: FkDbNameB) - Sloupec DB)
  fkDbNameB?: string | null
  // ID DB (db: PkDbNameB) - ID DB)
  pkDbNameB?: string | null
  // Modul B (db: ModulB) - Modul B)
  modulB?: string | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null

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