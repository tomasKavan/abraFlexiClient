import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFMena } from './AFMena'
import { AFUcetniOsnova } from './AFUcetniOsnova'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypUctu, DruhUctu } from './AFEntityEnums'

export class AFUcet extends AFEntity {
  static EntityPath: string = 'ucet'
  static EntityName: string = 'Účtový rozvrh'
  static EntityType: string = 'UCET'

  // ID (db: IdUcet) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Účet (db: Kod) - Číslo účtu)
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
  // Platí od (db: IdUcetObdobiOd) - Platí od)
  ucetObdobiOd?: AFUcetniObdobi
  // Platí do (db: IdUcetObdobiDo) - Platí do)
  ucetObdobiDo?: AFUcetniObdobi
  // Daňový (db: Danovy) - Daňový)
  danovy?: boolean
  // Saldo (db: Saldo) - Saldo)
  saldo?: boolean
  // Typ účtu (db: TypUctuK) - Typ účtu)
  typUctuK?: TypUctu
  // Druh účtu (db: DruhUctuK) - Druh účtu)
  druhUctuK?: DruhUctu
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Syntetický účet (db: IdStdUcet) - Syntetický účet)
  stdUcet?: AFUcetniOsnova
  // Typ organizace (db: IdTypOrg) - Typ organizace)
  typOrganizace?: AFTypOrganizace

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
      maxLength: 6,
      
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
      
    },    ucetObdobiOd : {
      key: 'ucetObdobiOd',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcetniObdobi,
      
    },    ucetObdobiDo : {
      key: 'ucetObdobiDo',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcetniObdobi,
      
    },    danovy : {
      key: 'danovy',
      type: PropertyType.Logic,
      isArray: false,
      
    },    saldo : {
      key: 'saldo',
      type: PropertyType.Logic,
      isArray: false,
      
    },    typUctuK : {
      key: 'typUctuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypUctu',
      enum: TypUctu,
      
    },    druhUctuK : {
      key: 'druhUctuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhUctu',
      enum: DruhUctu,
      
    },    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },    stdUcet : {
      key: 'stdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcetniOsnova,
      maxLength: 3,
      
    },    typOrganizace : {
      key: 'typOrganizace',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypOrganizace,
      maxLength: 20,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}