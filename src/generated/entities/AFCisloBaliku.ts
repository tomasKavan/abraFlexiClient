import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFCisloBaliku extends AFEntity {
  static EntityPath: string = 'cislo-baliku'
  static EntityName: string = 'Čísla balíků'
  static EntityType: string = 'CISLO_BALIKU'

  // ID (db: IdCisloBal) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Číslo (db: Cislo) - Číslo)
  cislo?: string | null
  // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
  formaDopravy?: AFFormaDopravy | null
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: any | null
  // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
  doklSklad?: AFSkladovyPohyb | null
  // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
  doklObch?: any | null

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
      afClass: 'AFFormaDopravy',
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklSklad : {
      key: 'doklSklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovyPohyb',
      
    },
    doklObch : {
      key: 'doklObch',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}