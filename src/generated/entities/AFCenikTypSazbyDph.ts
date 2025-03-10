import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCenik } from './AFCenik'
import { AFStatDph } from './AFStatDph'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypSzbDph, KodPlneni } from '../AFEntityEnums.js'

export class AFCenikTypSazbyDph extends AFEntity {
  static EntityPath: string = 'cenik-typ-sazby-dph'
  static EntityName: string = 'Typ sazby DPH'
  static EntityType: string = 'TYP_SAZBY_DPH'

  // ID (db: IdTypSazbyDph) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
  typSzbDphK?: TypSzbDph
  // Kód plnění pro DPH (db: KodPlneniK) - Kód plnění pro DPH)
  kodPlneniK?: KodPlneni
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: Date
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: Date
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik
  // Stát (db: IdStatu) - Stát)
  stat?: AFStatDph

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
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },
    kodPlneniK : {
      key: 'kodPlneniK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'KodPlneni',
      enum: KodPlneni,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStatDph',
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