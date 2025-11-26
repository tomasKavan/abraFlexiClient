import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFMajetek } from './AFMajetek'
import { AFLeasing } from './AFLeasing'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFZapujcka extends AFEntity {
  static EntityPath: string = 'zapujcka'
  static EntityName: string = 'Zápůjčky'
  static EntityType: string = 'ZAPUJCKA'

  // ID (db: IdZapujcky) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string | null
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string | null
  // Ulice (db: Ulice) - Ulice)
  ulice?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
  // WWW (db: Www) - WWW)
  www?: string | null
  // E-mail (db: Email) - E-mail)
  email?: string | null
  // Fax (db: Fax) - Fax)
  fax?: string | null
  // Mobil (db: Mobil) - Mobil)
  mobil?: string | null
  // Telefon (db: Tel) - Telefon)
  tel?: string | null
  // Od data (db: DatZahaj) - Od data)
  datZahaj?: Date | null
  // Do data (db: DatKonec) - Do data)
  datKonec?: Date | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Majetek (db: IdMajetku) - Majetek)
  majetek?: AFMajetek | null
  // Leasing (db: IdLeasing) - Leasing)
  leasing?: AFLeasing | null
  // Osoba (db: IdOsoby) - Osoba)
  osoba?: any | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: any | null
  // Vytvořil (db: IdCreatedBy) - Vytvořil)
  createdBy?: any | null

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
    jmeno : {
      key: 'jmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    prijmeni : {
      key: 'prijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    ulice : {
      key: 'ulice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    psc : {
      key: 'psc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    www : {
      key: 'www',
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
    fax : {
      key: 'fax',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mobil : {
      key: 'mobil',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    tel : {
      key: 'tel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datZahaj : {
      key: 'datZahaj',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datKonec : {
      key: 'datKonec',
      type: PropertyType.Date,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    createdDate : {
      key: 'createdDate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    majetek : {
      key: 'majetek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMajetek',
      maxLength: 20,
      
    },
    leasing : {
      key: 'leasing',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFLeasing',
      maxLength: 20,
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}