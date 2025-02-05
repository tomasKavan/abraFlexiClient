import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFCisloBaliku extends AFEntity {
  static EntityPath: string = 'cislo-baliku'
  static EntityName: string = 'Čísla balíků'
  static EntityType: string = 'CISLO_BALIKU'

  // ID (db: IdCisloBal) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Číslo (db: Cislo) - Číslo)
  cislo?: string
  // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
  formaDopravy?: AFFormaDopravy
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: any
  // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
  doklSklad?: AFSkladovyPohyb
  // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
  doklObch?: any

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
    cislo : {
      key: 'cislo',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    formaDopravy : {
      key: 'formaDopravy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFFormaDopravy,
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    doklSklad : {
      key: 'doklSklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSkladovyPohyb,
      
    },
    doklObch : {
      key: 'doklObch',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}