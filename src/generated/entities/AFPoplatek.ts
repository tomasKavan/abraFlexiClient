import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPoplatku } from '../AFEntityEnums'

export class AFPoplatek extends AFEntity {
  static EntityPath: string = 'poplatek'
  static EntityName: string = 'Poplatky'
  static EntityType: string = 'POPLATKY'

  // ID (db: IdPoplatek) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Typ poplatku (db: TypPoplatkuK) - Typ poplatku)
  typPoplatkuK?: TypPoplatku | null
  // Sazba DPH z nadřazené položky (db: ParentTypSzbDph) - Sazba DPH z nadřazené položky)
  parentTypSzbDph?: boolean | null
  // Ceníková položka (db: IdCenikOtec) - Ceníková položka)
  cenikOtec?: AFCenik | null
  // Poplatek (db: IdCenik) - Poplatek)
  cenik?: AFCenik | null

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
    mnozMj : {
      key: 'mnozMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    typPoplatkuK : {
      key: 'typPoplatkuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPoplatku',
      enum: TypPoplatku,
      
    },
    parentTypSzbDph : {
      key: 'parentTypSzbDph',
      type: PropertyType.Logic,
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