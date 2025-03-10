import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatel } from './AFUzivatel'
import { AFCleneniDph } from './AFCleneniDph'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { StavPriznaniDph, TypSzbDph } from '../AFEntityEnums.js'

export class AFRadekPriznaniDph extends AFEntity {
  static EntityPath: string = 'radek-priznani-dph'
  static EntityName: string = 'Uložené řádky přiznání DPH'
  static EntityType: string = 'RADEK_PRIZNANI_DPH'

  // ID (db: IdRadekPriznaniDph) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Rok (db: Rok) - Rok)
  rok?: number
  // Měsíc (db: Mesic) - Měsíc)
  mesic?: number
  // Čtvrtletí (db: Ctvrtleti) - Čtvrtletí)
  ctvrtleti?: number
  // Datum výpočtu (db: Datum) - Datum výpočtu)
  datum?: Date
  // Typ přiznání DPH (db: StavK) - Typ přiznání DPH)
  stavK?: StavPriznaniDph
  // Základ (db: Zaklad) - Základ)
  zaklad?: Big
  // DPH (db: Dph) - DPH)
  dph?: Big
  // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
  typSzbDphK?: TypSzbDph
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: AFUzivatel
  // Řádky DPH (db: IdClenDph) - Řádky DPH)
  clenDph?: AFCleneniDph

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

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}