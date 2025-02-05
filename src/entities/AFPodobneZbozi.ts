import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFPodobneZbozi extends AFEntity {
  static EntityPath: string = 'podobne-zbozi'
  static EntityName: string = 'Podobné'
  static EntityType: string = 'PODOBNE_ZBOZI'

  // ID (db: IdPodobne) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Ceníková položka (db: IdCenikOtec) - Ceníková položka)
  cenikOtec?: AFCenik
  // Podobné (db: IdCenik) - Podobné)
  cenik?: AFCenik

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    cenikOtec : {
      key: 'cenikOtec',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenik,
      maxLength: 64,
      
    },    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenik,
      maxLength: 64,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}