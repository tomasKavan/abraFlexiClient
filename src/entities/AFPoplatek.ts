import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPoplatku } from './AFEntityEnums'

export class AFPoplatek extends AFEntity {
  static EntityPath: string = 'poplatek'
  static EntityName: string = 'Poplatky'
  static EntityType: string = 'POPLATKY'

  // ID (db: IdPoplatek) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Typ poplatku (db: TypPoplatkuK) - Typ poplatku)
  typPoplatkuK?: TypPoplatku
  // Sazba DPH z nadřazené položky (db: ParentTypSzbDph) - Sazba DPH z nadřazené položky)
  parentTypSzbDph?: boolean
  // Ceníková položka (db: IdCenikOtec) - Ceníková položka)
  cenikOtec?: AFCenik
  // Poplatek (db: IdCenik) - Poplatek)
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
      
    },    mnozMj : {
      key: 'mnozMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    typPoplatkuK : {
      key: 'typPoplatkuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPoplatku',
      enum: TypPoplatku,
      
    },    parentTypSzbDph : {
      key: 'parentTypSzbDph',
      type: PropertyType.Logic,
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