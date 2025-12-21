import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFCleneniDph } from './AFCleneniDph.js'
import { AFStat } from './AFStat.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { StavPriznaniDph, TypSzbDph } from '../AFEntityEnums.js'

export class AFRadekPriznaniDph extends AFEntity {
  static EntityPath: string = 'radek-priznani-dph'
  static EntityName: string = 'Řádky uloženého přiznání DPH'
  static EntityType: string = 'RADEK_PRIZNANI_DPH'

  // ID (db: IdRadekPriznaniDph) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Rok (db: Rok) - Rok)
  rok?: number | null
  // Měsíc (db: Mesic) - Měsíc)
  mesic?: number | null
  // Čtvrtletí (db: Ctvrtleti) - Čtvrtletí)
  ctvrtleti?: number | null
  // Datum výpočtu (db: Datum) - Datum výpočtu)
  datum?: Date | null
  // Typ přiznání DPH (db: StavK) - Typ přiznání DPH)
  stavK?: StavPriznaniDph | null
  // Základ (db: Zaklad) - Základ)
  zaklad?: Big | null
  // DPH (db: Dph) - DPH)
  dph?: Big | null
  // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
  typSzbDphK?: TypSzbDph | null
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: AFUzivatel | null
  // Řádky DPH (db: IdClenDph) - Řádky DPH)
  clenDph?: AFCleneniDph | null
  // Stát (db: IdStat) - Stát)
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
    rok : {
      key: 'rok',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesic : {
      key: 'mesic',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    ctvrtleti : {
      key: 'ctvrtleti',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    datum : {
      key: 'datum',
      type: PropertyType.Date,
      isArray: false,
      
    },
    stavK : {
      key: 'stavK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavPriznaniDph',
      enum: StavPriznaniDph,
      
    },
    zaklad : {
      key: 'zaklad',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    dph : {
      key: 'dph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}