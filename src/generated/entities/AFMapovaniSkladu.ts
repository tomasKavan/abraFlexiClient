import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFMapovaniSkladu extends AFEntity {
  static EntityPath: string = 'mapovani-skladu'
  static EntityName: string = 'Mapování skladů'
  static EntityType: string = 'MAPOVANI_SKLADU'

  // ID (db: IdMapSklad) - ID)
  declare id?: number
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