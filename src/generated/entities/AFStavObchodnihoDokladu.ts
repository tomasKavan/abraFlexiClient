import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { StavDoklObch } from '../AFEntityEnums.js'

export class AFStavObchodnihoDokladu extends AFEntity {
  static EntityPath: string = 'stav-obchodniho-dokladu'
  static EntityName: string = 'Stav obchodního dokladu'
  static EntityType: string = 'STAV_OBCHODNIHO_DOKLADU'

  // ID (db: IdStavDoklObchCis) - ID)
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
  // Stav dokladu (db: StavUzivK) - Stav dokladu)
  stavUzivK?: StavDoklObch | null
  // Standard (db: Standard) - Standard)
  standard?: boolean | null
  // Pořadí (db: Poradi) - Pořadí)
  poradi?: number | null
  // Poptávky přijaté (db: ModulPpp) - Poptávky přijaté)
  modulPpp?: boolean | null
  // Poptávky vydané (db: ModulPpv) - Poptávky vydané)
  modulPpv?: boolean | null
  // Nabídky přijaté (db: ModulNap) - Nabídky přijaté)
  modulNap?: boolean | null
  // Nabídky vydané (db: ModulNav) - Nabídky vydané)
  modulNav?: boolean | null
  // Objednávky přijaté (db: ModulObp) - Objednávky přijaté)
  modulObp?: boolean | null
  // Objednávky vydané (db: ModulObv) - Objednávky vydané)
  modulObv?: boolean | null

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
    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavDoklObch',
      enum: StavDoklObch,
      
    },
    standard : {
      key: 'standard',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    poradi : {
      key: 'poradi',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    modulPpp : {
      key: 'modulPpp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulPpv : {
      key: 'modulPpv',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulNap : {
      key: 'modulNap',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulNav : {
      key: 'modulNav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulObp : {
      key: 'modulObp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulObv : {
      key: 'modulObv',
      type: PropertyType.Logic,
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