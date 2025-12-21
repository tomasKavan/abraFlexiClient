import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCenik } from './AFCenik.js'
import { AFCenovaUroven } from './AFCenovaUroven.js'
import { AFSkupinaZbozi } from './AFSkupinaZbozi.js'




export class AFIndividualniCenik extends AFEntity {
  static EntityPath: string = 'individualni-cenik'
  static EntityName: string = 'Individuální ceník'
  static EntityType: string = 'INDIVIDUALNI_CENIK'

  // ID (db: ) - ID)
  declare id?: number | null
  // Zkratka (db: ) - Zkratka)
  declare kod?: string | null
  // Název (db: ) - Název)
  nazev?: string | null
  // Název EN (db: ) - Název EN)
  nazevA?: string | null
  // Název DE (db: ) - Název DE)
  nazevB?: string | null
  // Název FR (db: ) - Název FR)
  nazevC?: string | null
  // Prodejní cena (db: ) - Prodejní cena)
  cenaZakl?: Big | null
  // Cena 2 (db: ) - Cena 2)
  cena2?: Big | null
  // Cena 3 (db: ) - Cena 3)
  cena3?: Big | null
  // Cena 4 (db: ) - Cena 4)
  cena4?: Big | null
  // Cena 5 (db: ) - Cena 5)
  cena5?: Big | null
  // Limit MJ 2 (db: ) - Množ. limit 2)
  limMnoz2?: Big | null
  // Limit MJ 3 (db: ) - Množ. limit 3)
  limMnoz3?: Big | null
  // Limit MJ 4 (db: ) - Množ. limit 4)
  limMnoz4?: Big | null
  // Limit MJ 5 (db: ) - Množ. limit 5)
  limMnoz5?: Big | null
  // Typ ceny (db: ) - Typ ceny)
  typCenyDphK?: any | null
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: any | null
  // Ceník (db: ) - Ceník)
  cenik?: AFCenik | null
  // Cenová úroveň (db: ) - Cenová úroveň)
  cenHlad?: AFCenovaUroven | null
  // Skupina zboží (db: ) - Skupina zboží)
  skupZboz?: AFSkupinaZbozi | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cenaZakl : {
      key: 'cenaZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cena2 : {
      key: 'cena2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cena3 : {
      key: 'cena3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cena4 : {
      key: 'cena4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cena5 : {
      key: 'cena5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz2 : {
      key: 'limMnoz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz3 : {
      key: 'limMnoz3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz4 : {
      key: 'limMnoz4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz5 : {
      key: 'limMnoz5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    typCenyDphK : {
      key: 'typCenyDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    cenHlad : {
      key: 'cenHlad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenovaUroven',
      
    },
    skupZboz : {
      key: 'skupZboz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaZbozi',
      
    },


  }
}