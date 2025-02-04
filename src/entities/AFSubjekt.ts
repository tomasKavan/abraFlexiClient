import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { GdprTypVztahu } from './AFEntityEnums'

export class AFSubjekt extends AFEntity {
  static EntityPath: string = 'subjekt'
  static EntityName: string = 'Subjekt'
  static EntityType: string = 'SUBJEKT'

  // ID (db: Idsubjekt) - ID)
  id?: number
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: Date
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: Date
  // Typ vztahu (db: TypVztahuK) - Typ vztahu)
  typVztahuK?: GdprTypVztahu
  // Definice (db: Definice) - Definice)
  definice?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Údaje jsou předávány do třetí země (db: TretiZeme) - Údaje jsou předávány do třetí země)
  tretiZeme?: boolean
  // Adresář (db: Idadresar) - Adresář)
  adresar?: AFAdresar
  // Definice účelu (db: Iddefiniceucelu) - Definice účelu)
  definiceUcel?: any

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    platiOd : {
      key: 'platiOd',
      type: PropertyType.Date,
      isArray: false,
      
    },    platiDo : {
      key: 'platiDo',
      type: PropertyType.Date,
      isArray: false,
      
    },    typVztahuK : {
      key: 'typVztahuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'GdprTypVztahu',
      enum: GdprTypVztahu,
      
    },    definice : {
      key: 'definice',
      type: PropertyType.String,
      isArray: false,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    tretiZeme : {
      key: 'tretiZeme',
      type: PropertyType.Logic,
      isArray: false,
      
    },    adresar : {
      key: 'adresar',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      
    },    definiceUcel : {
      key: 'definiceUcel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}