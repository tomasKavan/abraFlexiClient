import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCenik } from './AFCenik.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFSadyAKomplety extends AFEntity {
  static EntityPath: string = 'sady-a-komplety'
  static EntityName: string = 'Sady'
  static EntityType: string = 'SADY_A_KOMPLETY'

  // ID (db: IdSady) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Sada (db: IdCenikSada) - Sada)
  cenikSada?: AFCenik
  // Ceníková položka (db: IdCenik) - Ceníková položka)
  cenik?: AFCenik

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
    mnozMj : {
      key: 'mnozMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    cenikSada : {
      key: 'cenikSada',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}