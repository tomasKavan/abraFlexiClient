import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUcetniObdobi } from './AFUcetniObdobi.js'
import { AFMena } from './AFMena.js'
import { AFUcetniOsnova } from './AFUcetniOsnova.js'
import { AFTypOrganizace } from './AFTypOrganizace.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypUctu, DruhUctu } from '../AFEntityEnums.js'

export class AFUcet extends AFEntity {
  static EntityPath: string = 'ucet'
  static EntityName: string = 'Účtový rozvrh'
  static EntityType: string = 'UCET'

  // ID (db: IdUcet) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Účet (db: Kod) - Číslo účtu)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Platí od (db: IdUcetObdobiOd) - Platí od)
  ucetObdobiOd?: AFUcetniObdobi | null
  // Platí do (db: IdUcetObdobiDo) - Platí do)
  ucetObdobiDo?: AFUcetniObdobi | null
  // Daňový (db: Danovy) - Daňový)
  danovy?: boolean | null
  // Saldo (db: Saldo) - Saldo)
  saldo?: boolean | null
  // Typ účtu (db: TypUctuK) - Typ účtu)
  typUctuK?: TypUctu | null
  // Druh účtu (db: DruhUctuK) - Druh účtu)
  druhUctuK?: DruhUctu | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Syntetický účet (db: IdStdUcet) - Syntetický účet)
  stdUcet?: AFUcetniOsnova | null
  // Typ organizace (db: IdTypOrg) - Typ organizace)
  typOrganizace?: AFTypOrganizace | null

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
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 6,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevC : {
      key: 'nazevC',
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
    ucetObdobiOd : {
      key: 'ucetObdobiOd',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    ucetObdobiDo : {
      key: 'ucetObdobiDo',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    danovy : {
      key: 'danovy',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    saldo : {
      key: 'saldo',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    typUctuK : {
      key: 'typUctuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypUctu',
      enum: TypUctu,
      
    },
    druhUctuK : {
      key: 'druhUctuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhUctu',
      enum: DruhUctu,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    stdUcet : {
      key: 'stdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniOsnova',
      maxLength: 3,
      
    },
    typOrganizace : {
      key: 'typOrganizace',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypOrganizace',
      maxLength: 20,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}