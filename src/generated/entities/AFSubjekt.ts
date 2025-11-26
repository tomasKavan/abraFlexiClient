import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { GdprTypVztahu } from '../AFEntityEnums'

export class AFSubjekt extends AFEntity {
  static EntityPath: string = 'subjekt'
  static EntityName: string = 'Subjekt'
  static EntityType: string = 'SUBJEKT'

  // ID (db: Idsubjekt) - ID)
  declare id?: number | null
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: Date | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: Date | null
  // Typ vztahu (db: TypVztahuK) - Typ vztahu)
  typVztahuK?: GdprTypVztahu | null
  // Definice (db: Definice) - Definice)
  definice?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Údaje jsou předávány do třetí země (db: TretiZeme) - Údaje jsou předávány do třetí země)
  tretiZeme?: boolean | null
  // Adresář (db: Idadresar) - Adresář)
  adresar?: AFAdresar | null
  // Definice účelu (db: Iddefiniceucelu) - Definice účelu)
  definiceUcel?: any | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    typVztahuK : {
      key: 'typVztahuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'GdprTypVztahu',
      enum: GdprTypVztahu,
      
    },
    definice : {
      key: 'definice',
      type: PropertyType.String,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    tretiZeme : {
      key: 'tretiZeme',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    adresar : {
      key: 'adresar',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    definiceUcel : {
      key: 'definiceUcel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}