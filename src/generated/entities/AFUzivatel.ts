import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFRole } from './AFRole'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { Jazyk } from '../AFEntityEnums'

export class AFUzivatel extends AFEntity {
  static EntityPath: string = 'uzivatel'
  static EntityName: string = 'Uživatelé ve firmě'
  static EntityType: string = 'UZIVATELE'

  // ID (db: IdUzivatel) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Ulice (db: Ulice) - Ulice)
  ulice?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion | null
  // Přihlašovací jméno (db: Kod) - Přihlašovací jméno)
  declare kod?: string | null
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string | null
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string | null
  // Titul (db: Titul) - Titul)
  titul?: string | null
  // Titul za jménem (db: TitulZa) - Titul za jménem)
  titulZa?: string | null
  // Funkce (db: Funkce) - Funkce)
  funkce?: string | null
  // Telefon (db: Tel) - Telefon)
  tel?: string | null
  // Mobil (db: Mobil) - Mobil)
  mobil?: string | null
  // Fax (db: Fax) - Fax)
  fax?: string | null
  // E-mail (db: Email) - E-mail)
  email?: string | null
  // WWW (db: Www) - WWW)
  www?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: number | null
  // Jazyk (db: JazykK) - Jazyk)
  jazykK?: Jazyk | null
  // Právo zamykat doklady a období (db: Ucetni) - Právo zamykat doklady a období)
  pravoZamykat?: boolean | null
  // Přidávat uživatele z jiné firmy (db: AddUser) - Přidávat uživatele z jiné firmy)
  addUser?: boolean | null
  // Databázové jméno uživatele (db: DbUserName) - Databázové jméno uživatele)
  dbUserName?: string | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Role uživatele (db: IdRole) - Role uživatele)
  role?: AFRole | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: AFUzivatel | null
  // Vytvořil (db: IdCreatedBy) - Vytvořil)
  createdBy?: AFUzivatel | null

  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
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
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    region : {
      key: 'region',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 254,
      
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
    titulZa : {
      key: 'titulZa',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    funkce : {
      key: 'funkce',
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
    mobil : {
      key: 'mobil',
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
    email : {
      key: 'email',
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
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    jazykK : {
      key: 'jazykK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Jazyk',
      enum: Jazyk,
      
    },
    pravoZamykat : {
      key: 'pravoZamykat',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    addUser : {
      key: 'addUser',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    dbUserName : {
      key: 'dbUserName',
      type: PropertyType.String,
      isArray: false,
      maxLength: 63,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    createdDate : {
      key: 'createdDate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    role : {
      key: 'role',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRole',
      maxLength: 20,
      
    },
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },

    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUdalost'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}