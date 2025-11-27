import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatel } from './AFUzivatel'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { StavPriznaniKonVykDph } from '../AFEntityEnums'

export class AFUlozenePriznaniKonVykDph extends AFEntity {
  static EntityPath: string = 'ulozene-priznani-kon-vyk-dph'
  static EntityName: string = 'Uložené přiznání Kontrolního hlášení DPH'
  static EntityType: string = 'ULOZENE_PRIZNANI_KON_VYK_DPH'

  // ID (db: IdPriznaniKonVykDph) - ID)
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
  // Typ kontrolního hlášení (db: StavK) - Typ kontrolního hlášení)
  stavK?: StavPriznaniKonVykDph | null
  // XML (db: Xml) - XML)
  xml?: string | null
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: AFUzivatel | null
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
      enumName: 'StavPriznaniKonVykDph',
      enum: StavPriznaniKonVykDph,
      
    },
    xml : {
      key: 'xml',
      type: PropertyType.String,
      isArray: false,
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
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