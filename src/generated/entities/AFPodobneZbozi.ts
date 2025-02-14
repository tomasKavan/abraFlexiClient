import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCenik } from './AFCenik.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




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
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    cenikOtec : {
      key: 'cenikOtec',
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