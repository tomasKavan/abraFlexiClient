import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFOsobaHlavicka extends AFEntity {
  static EntityPath: string = 'osoba-hlavicka'
  static EntityName: string = 'Hlavičky osob'
  static EntityType: string = 'OSOBA_HLAVICKA'

  // ID (db: IdOsobaHlav) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Osobní číslo (db: OsbCis) - Osobní číslo)
  osbCis?: string
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string
  // Titul (db: Titul) - Titul)
  titul?: string

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
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
      
    },    osbCis : {
      key: 'osbCis',
      type: PropertyType.String,
      isArray: false,
      
    },    prijmeni : {
      key: 'prijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    jmeno : {
      key: 'jmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    titul : {
      key: 'titul',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFPriloha
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}