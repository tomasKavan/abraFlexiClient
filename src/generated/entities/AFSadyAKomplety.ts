import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFSadyAKomplety extends AFEntity {
  static EntityPath: string = 'sady-a-komplety'
  static EntityName: string = 'Sady'
  static EntityType: string = 'SADY_A_KOMPLETY'

  // ID (db: IdSady) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Sada (db: IdCenikSada) - Sada)
  cenikSada?: AFCenik | null
  // Ceníková položka (db: IdCenik) - Ceníková položka)
  cenik?: AFCenik | null

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