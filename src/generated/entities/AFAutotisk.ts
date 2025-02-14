import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFTypDokladu } from './AFTypDokladu.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFAutotisk extends AFEntity {
  static EntityPath: string = 'autotisk'
  static EntityName: string = 'Automatický tisk'
  static EntityType: string = 'AUTOTISK'

  // ID (db: IdAutoTisk) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Kopií (db: Pocet) - Kopií)
  pocet?: number
  // Tisknout doklad (db: TypTiskDoklK) - Tisknout doklad)
  typTiskDoklK?: any
  // Report (db: Report) - Report)
  report?: string
  // Sumovaný (db: Sumovany) - Sumovaný)
  sumovany?: boolean
  // Rozšířený (db: Rozsireny) - Rozšířený)
  rozsireny?: boolean
  // Typ dokladu (db: IdTypDokl) - Typ dokladu)
  typDokl?: AFTypDokladu

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
    pocet : {
      key: 'pocet',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typTiskDoklK : {
      key: 'typTiskDoklK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    report : {
      key: 'report',
      type: PropertyType.String,
      isArray: false,
      
    },
    sumovany : {
      key: 'sumovany',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    rozsireny : {
      key: 'rozsireny',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}