import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPlneni, TypObchodu, KodPlneni } from './AFEntityEnums'

export class AFCleneniDph extends AFEntity {
  static EntityPath: string = 'cleneni-dph'
  static EntityName: string = 'Řádky přiznání DPH'
  static EntityType: string = 'CLENENI_DPH'

  // ID (db: IdClenDPH) - ID)
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
  // Typ plnění (db: TypPlneniK) - Typ plnění)
  typPlneniK?: TypPlneni
  // Typ obchodu (db: TypObchoduK) - Typ obchodu)
  typObchoduK?: TypObchodu
  // Kód plnění (db: KodPlneniK) - Kód plnění)
  kodPlneniK?: KodPlneni
  // Je DPH (db: JeDph) - Je DPH)
  jeDph?: boolean
  // Pořadí (db: Poradi) - Pořadí)
  poradi?: number
  // Kód plnění pro souhrnné hlášení (db: KodPlneniSH) - Kód plnění pro souhrnné hlášení)
  kodPlneniSH?: string
  // Typ plnění EET (db: TypPlneniEetK) - Typ plnění EET)
  typPlneniEetK?: any
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat

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
    typPlneniK : {
      key: 'typPlneniK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPlneni',
      enum: TypPlneni,
      
    },
    typObchoduK : {
      key: 'typObchoduK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypObchodu',
      enum: TypObchodu,
      
    },
    kodPlneniK : {
      key: 'kodPlneniK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'KodPlneni',
      enum: KodPlneni,
      
    },
    jeDph : {
      key: 'jeDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    poradi : {
      key: 'poradi',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kodPlneniSH : {
      key: 'kodPlneniSH',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    typPlneniEetK : {
      key: 'typPlneniEetK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStat,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}