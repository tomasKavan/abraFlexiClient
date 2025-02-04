import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { StavDoklObch } from './AFEntityEnums'

export class AFStavObchodnihoDokladu extends AFEntity {
  static EntityPath: string = 'stav-obchodniho-dokladu'
  static EntityName: string = 'Stav obchodního dokladu'
  static EntityType: string = 'STAV_OBCHODNIHO_DOKLADU'

  // ID (db: IdStavDoklObchCis) - ID)
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
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Stav dokladu (db: StavUzivK) - Stav dokladu)
  stavUzivK?: StavDoklObch
  // Standard (db: Standard) - Standard)
  standard?: boolean
  // Pořadí (db: Poradi) - Pořadí)
  poradi?: number
  // Poptávky přijaté (db: ModulPpp) - Poptávky přijaté)
  modulPpp?: boolean
  // Poptávky vydané (db: ModulPpv) - Poptávky vydané)
  modulPpv?: boolean
  // Nabídky přijaté (db: ModulNap) - Nabídky přijaté)
  modulNap?: boolean
  // Nabídky vydané (db: ModulNav) - Nabídky vydané)
  modulNav?: boolean
  // Objednávky přijaté (db: ModulObp) - Objednávky přijaté)
  modulObp?: boolean
  // Objednávky vydané (db: ModulObv) - Objednávky vydané)
  modulObv?: boolean

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
      maxLength: 20,
      
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
      
    },    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavDoklObch',
      enum: StavDoklObch,
      
    },    standard : {
      key: 'standard',
      type: PropertyType.Logic,
      isArray: false,
      
    },    poradi : {
      key: 'poradi',
      type: PropertyType.Integer,
      isArray: false,
      
    },    modulPpp : {
      key: 'modulPpp',
      type: PropertyType.Logic,
      isArray: false,
      
    },    modulPpv : {
      key: 'modulPpv',
      type: PropertyType.Logic,
      isArray: false,
      
    },    modulNap : {
      key: 'modulNap',
      type: PropertyType.Logic,
      isArray: false,
      
    },    modulNav : {
      key: 'modulNav',
      type: PropertyType.Logic,
      isArray: false,
      
    },    modulObp : {
      key: 'modulObp',
      type: PropertyType.Logic,
      isArray: false,
      
    },    modulObv : {
      key: 'modulObv',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}