import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFStredisko } from './AFStredisko'
import { AFMena } from './AFMena'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFBankovniUcetSkladPokladna extends AFEntity {
  static EntityPath: string = 'bankovni-ucet-sklad-pokladna'
  static EntityName: string = 'Banky/pokladny/sklady'
  static EntityType: string = 'BANKOVNI_UCET_SKLAD_POKLADNA'

  // ID (db: IdBsp) - ID)
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string
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
  // Štítky (db: ) - Štítky)
  declare stitky?: string
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
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
      afClass: 'AFUcetniObdobi',
      
    },
    ucetObdobiDo : {
      key: 'ucetObdobiDo',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
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
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}