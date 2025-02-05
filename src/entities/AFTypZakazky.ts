import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypZak } from './AFEntityEnums'

export class AFTypZakazky extends AFEntity {
  static EntityPath: string = 'typ-zakazky'
  static EntityName: string = 'Typy zakázek'
  static EntityType: string = 'TYP_ZAKAZKY'

  // ID (db: IdTypZakazky) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Druh zakázky (db: DruhZakK) - Druh zakázky)
  druhZakK?: TypZak
  // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
  workFlow?: boolean
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
  zodpPrac?: any

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
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },    druhZakK : {
      key: 'druhZakK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypZak',
      enum: TypZak,
      
    },    workFlow : {
      key: 'workFlow',
      type: PropertyType.Logic,
      isArray: false,
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },    zodpPrac : {
      key: 'zodpPrac',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}