import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { StavPriznaniDph } from '../AFEntityEnums'

export class AFUlozenePriznaniDph extends AFEntity {
  static EntityPath: string = 'ulozene-priznani-dph'
  static EntityName: string = 'Uložené přiznání DPH'
  static EntityType: string = 'ULOZENE_PRIZNANI_DPH'

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
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: any | null
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
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
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