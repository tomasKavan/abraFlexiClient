import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { DruhUctu, TypUctu } from './AFEntityEnums'

export class AFUcetniOsnova extends AFEntity {
  static EntityPath: string = 'ucetni-osnova'
  static EntityName: string = 'Standardní účetní osnova'
  static EntityType: string = 'UCETNI_OSNOVA'

  // ID (db: IdStdUcet) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Účet (db: Kod) - Syntetický účet)
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
  // Druh účtu (db: DruhUctuK) - Druh účtu)
  druhUctuK?: DruhUctu
  // Typ účtu (db: TypUctuK) - Typ účtu)
  typUctuK?: TypUctu
  // Sledovat saldo (db: Saldo) - Sledovat saldo)
  saldo?: boolean
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
      maxLength: 3,
      
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
      
    },    druhUctuK : {
      key: 'druhUctuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhUctu',
      enum: DruhUctu,
      
    },    typUctuK : {
      key: 'typUctuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypUctu',
      enum: TypUctu,
      
    },    saldo : {
      key: 'saldo',
      type: PropertyType.Logic,
      isArray: false,
      
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