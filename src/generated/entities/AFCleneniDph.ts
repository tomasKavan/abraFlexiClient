import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStat } from './AFStat.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypPlneni, TypObchodu, KodPlneni } from '../AFEntityEnums.js'

export class AFCleneniDph extends AFEntity {
  static EntityPath: string = 'cleneni-dph'
  static EntityName: string = 'Řádky přiznání DPH'
  static EntityType: string = 'CLENENI_DPH'

  // ID (db: IdClenDPH) - ID)
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
  // Typ plnění (db: TypPlneniK) - Typ plnění)
  typPlneniK?: TypPlneni | null
  // Typ obchodu (db: TypObchoduK) - Typ obchodu)
  typObchoduK?: TypObchodu | null
  // Kód plnění (db: KodPlneniK) - Kód plnění)
  kodPlneniK?: KodPlneni | null
  // Je DPH (db: JeDph) - Je DPH)
  jeDph?: boolean | null
  // Pořadí (db: Poradi) - Pořadí)
  poradi?: number | null
  // Kód plnění pro souhrnné hlášení (db: KodPlneniSH) - Kód plnění pro souhrnné hlášení)
  kodPlneniSH?: string | null
  // Typ plnění EET (db: TypPlneniEetK) - Typ plnění EET)
  typPlneniEetK?: any | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null

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
      afClass: 'AFStat',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}