import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFTypUzivatelskeVazby } from './AFTypUzivatelskeVazby.js'




export class AFUzivatelskaVazba extends AFEntity {
  static EntityPath: string = 'uzivatelska-vazba'
  static EntityName: string = 'Uživatelské vazby'
  static EntityType: string = 'VAZBA'

  // ID (db: IdVazba) - ID)
  declare id?: number | null
  // Typ vazby (db: IdVazbaTyp) - Typ vazby)
  vazbaTyp?: AFTypUzivatelskeVazby | null
  // Modul (db: ) - Modul)
  modul?: string | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Částka (db: ) - Částka)
  castka?: Big | null
  // Datum (db: ) - Datum)
  datum?: Date | null
  // Popis vazby (db: Popis) - Popis vazby)
  popis?: string | null
  // Poznámka k vazbě (db: Poznam) - Poznámka k vazbě)
  poznam?: string | null
  // Evidence (db: ) - Evidence)
  evidenceType?: string | null
  // ID navázaného objektu (db: ) - ID navázaného objektu)
  objectId?: number | null
  // Navázaný objekt (db: ) - Navázaný objekt)
  object?: any | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    vazbaTyp : {
      key: 'vazbaTyp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypUzivatelskeVazby',
      maxLength: 20,
      
    },
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    castka : {
      key: 'castka',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    datum : {
      key: 'datum',
      type: PropertyType.Date,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    evidenceType : {
      key: 'evidenceType',
      type: PropertyType.String,
      isArray: false,
      
    },
    objectId : {
      key: 'objectId',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    object : {
      key: 'object',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },


  }
}