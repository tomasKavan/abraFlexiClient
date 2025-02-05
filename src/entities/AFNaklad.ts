import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFTypNakladu } from './AFTypNakladu'
import { AFCenik } from './AFCenik'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFNaklad extends AFEntity {
  static EntityPath: string = 'naklad'
  static EntityName: string = 'Náklady na události / aktivity'
  static EntityType: string = 'NAKLAD'

  // ID (db: IdNaklAkt) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Fakturované množství (db: FaktMnoz) - Fakturované množství)
  faktMnoz?: Big
  // Fakturovat (db: Fakturovat) - Fakturovat)
  fakturovat?: boolean
  // Fakturováno (db: Fakturovano) - Fakturováno)
  fakturovano?: boolean
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Realizované množství (db: RealMnoz) - Realizované množství)
  realMnoz?: Big
  // Čas nákladu (db: Termin) - Čas nákladu)
  termin?: Date
  // Typ nákladu na aktivitu (db: IdTypNaklAkt) - Typ nákladu na aktivitu)
  typNaklAkt?: AFTypNakladu
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik
  // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
  zodpPrac?: any
  // Událost (db: IdAdrUdalost) - Událost)
  adrUdalost?: AFUdalost

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
    faktMnoz : {
      key: 'faktMnoz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    fakturovat : {
      key: 'fakturovat',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    fakturovano : {
      key: 'fakturovano',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    realMnoz : {
      key: 'realMnoz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    termin : {
      key: 'termin',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    typNaklAkt : {
      key: 'typNaklAkt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypNakladu,
      maxLength: 20,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenik,
      maxLength: 64,
      
    },
    zodpPrac : {
      key: 'zodpPrac',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },
    adrUdalost : {
      key: 'adrUdalost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUdalost,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}