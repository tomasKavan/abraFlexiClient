import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFTypNakladu } from './AFTypNakladu'
import { AFCenik } from './AFCenik'
import { AFUzivatel } from './AFUzivatel'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFNaklad extends AFEntity {
  static EntityPath: string = 'naklad'
  static EntityName: string = 'Náklady na události / aktivity'
  static EntityType: string = 'NAKLAD'

  // ID (db: IdNaklAkt) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Fakturované množství (db: FaktMnoz) - Fakturované množství)
  faktMnoz?: Big | null
  // Fakturovat (db: Fakturovat) - Fakturovat)
  fakturovat?: boolean | null
  // Fakturováno (db: Fakturovano) - Fakturováno)
  fakturovano?: boolean | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Realizované množství (db: RealMnoz) - Realizované množství)
  realMnoz?: Big | null
  // Čas nákladu (db: Termin) - Čas nákladu)
  termin?: Date | null
  // Typ nákladu na aktivitu (db: IdTypNaklAkt) - Typ nákladu na aktivitu)
  typNaklAkt?: AFTypNakladu | null
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik | null
  // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
  zodpPrac?: AFUzivatel | null
  // Událost (db: IdAdrUdalost) - Událost)
  adrUdalost?: AFUdalost | null

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
      afClass: 'AFTypNakladu',
      maxLength: 20,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    zodpPrac : {
      key: 'zodpPrac',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    adrUdalost : {
      key: 'adrUdalost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUdalost',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}