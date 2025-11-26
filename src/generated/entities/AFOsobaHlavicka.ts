import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFOsobaHlavicka extends AFEntity {
  static EntityPath: string = 'osoba-hlavicka'
  static EntityName: string = 'Hlavičky osob'
  static EntityType: string = 'OSOBA_HLAVICKA'

  // ID (db: IdOsobaHlav) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Osobní číslo (db: OsbCis) - Osobní číslo)
  osbCis?: string | null
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string | null
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string | null
  // Titul (db: Titul) - Titul)
  titul?: string | null
  // Heslo (db: Password) - Heslo)
  password?: string | null
  // E-mail (db: Email) - E-mail)
  email?: string | null

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
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
    osbCis : {
      key: 'osbCis',
      type: PropertyType.String,
      isArray: false,
      
    },
    prijmeni : {
      key: 'prijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    jmeno : {
      key: 'jmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    titul : {
      key: 'titul',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    password : {
      key: 'password',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    email : {
      key: 'email',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },

    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}