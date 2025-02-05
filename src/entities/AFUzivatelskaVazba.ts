import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFTypUzivatelskeVazby } from './AFTypUzivatelskeVazby'




export class AFUzivatelskaVazba extends AFEntity {
  static EntityPath: string = 'uzivatelska-vazba'
  static EntityName: string = 'Uživatelské vazby'
  static EntityType: string = 'VAZBA'

  // ID (db: IdVazba) - ID)
  id?: number
  // Typ vazby (db: IdVazbaTyp) - Typ vazby)
  vazbaTyp?: AFTypUzivatelskeVazby
  // Modul (db: ) - Modul)
  modul?: string
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Částka (db: ) - Částka)
  castka?: Big
  // Datum (db: ) - Datum)
  datum?: Date
  // Popis vazby (db: Popis) - Popis vazby)
  popis?: string
  // Poznámka k vazbě (db: Poznam) - Poznámka k vazbě)
  poznam?: string
  // Evidence (db: ) - Evidence)
  evidenceType?: string
  // ID navázaného objektu (db: ) - ID navázaného objektu)
  objectId?: number
  // Navázaný objekt (db: ) - Navázaný objekt)
  object?: any



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
      afClass: AFTypUzivatelskeVazby,
      
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
      maxLength: 20,
      
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
      afClass: AFEntity,
      
    },


  }
}