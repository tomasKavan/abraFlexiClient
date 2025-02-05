import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFRadaPokladniPohyb } from './AFRadaPokladniPohyb'
import { AFStredisko } from './AFStredisko'
import { AFUcet } from './AFUcet'
import { AFMena } from './AFMena'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFPokladna extends AFEntity {
  static EntityPath: string = 'pokladna'
  static EntityName: string = 'Seznam pokladen'
  static EntityType: string = 'POKLADNA'

  // ID (db: IdBsp) - ID)
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
  // Platí od (db: IdUcetObdobiOd) - Platí od)
  ucetObdobiOd?: AFUcetniObdobi
  // Platí do (db: IdUcetObdobiDo) - Platí do)
  ucetObdobiDo?: AFUcetniObdobi
  // Platí od roku (db: PlatiOd) - Platí od roku)
  platiOd?: number
  // Platí do roku (db: PlatiDo) - Platí do roku)
  platiDo?: number
  // Modul (db: Modul) - Modul)
  modul?: string
  // Vytvářet přecenění (db: VytvaretPreceneni) - Vytvářet přecenění při inicializaci účetního období)
  vytvaretPreceneni?: boolean
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Řada pro příjem (db: IdRadyPrijem) - Řada pro příjem)
  radaPrijem?: AFRadaPokladniPohyb
  // Řada pro výdej (db: IdRadyVydej) - Řada pro výdej)
  radaVydej?: AFRadaPokladniPohyb
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Účet pokladny (db: IdPrimUcet) - Účet pokladny)
  primUcet?: AFUcet
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena

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
      maxLength: 20,
      
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
      afClass: AFUcetniObdobi,
      
    },
    ucetObdobiDo : {
      key: 'ucetObdobiDo',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcetniObdobi,
      
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
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    vytvaretPreceneni : {
      key: 'vytvaretPreceneni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    radaPrijem : {
      key: 'radaPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRadaPokladniPohyb,
      
    },
    radaVydej : {
      key: 'radaVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRadaPokladniPohyb,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },
    primUcet : {
      key: 'primUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}