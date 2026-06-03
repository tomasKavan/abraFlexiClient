import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCenik } from './AFCenik.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFSadyAKomplety extends AFEntity {
  static EntityPath: string = 'sady-a-komplety'
  static EntityName: string = 'Sady'
  static EntityType: string = 'SADY_A_KOMPLETY'

  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Balení (db: BaleniId) - Balení)
  baleniId?: number | null
  // Počet balení (db: ) - Počet balení)
  mnozBaleni?: Big | null
  // Sada (db: IdCenikSada) - Sada)
  cenikSada?: AFCenik | null
  // Ceníková položka (db: IdCenik) - Ceníková položka)
  cenik?: AFCenik | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
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
    baleniId : {
      key: 'baleniId',
      type: PropertyType.Integer,
      isArray: false,
      digits: 1,
      
    },
    mnozBaleni : {
      key: 'mnozBaleni',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
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