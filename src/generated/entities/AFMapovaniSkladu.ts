import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStredisko } from './AFStredisko.js'
import { AFSkupinaZbozi } from './AFSkupinaZbozi.js'
import { AFCenik } from './AFCenik.js'
import { AFSklad } from './AFSklad.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFMapovaniSkladu extends AFEntity {
  static EntityPath: string = 'mapovani-skladu'
  static EntityName: string = 'Mapování skladů'
  static EntityType: string = 'MAPOVANI_SKLADU'

  // ID (db: IdMapSklad) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Skupina zboží (db: IdSkupZboz) - Skupina zboží)
  skupZboz?: AFSkupinaZbozi
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik
  // Sklad (db: IdSklad) - Sklad)
  sklad?: AFSklad

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
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    skupZboz : {
      key: 'skupZboz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaZbozi',
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}