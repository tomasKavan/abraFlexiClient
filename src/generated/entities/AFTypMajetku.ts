import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFStredisko } from './AFStredisko'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { DruhMaj } from '../AFEntityEnums.js'

export class AFTypMajetku extends AFEntity {
  static EntityPath: string = 'typ-majetku'
  static EntityName: string = 'Typy majetků'
  static EntityType: string = 'MAJETEK_TYP'

  // ID (db: IdTypMaj) - ID)
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
  // Majetek je odpisován (db: JeOdpis) - Majetek je odpisován)
  jeOdpis?: boolean
  // Druh (db: DruhK) - Druh)
  druhK?: DruhMaj
  // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
  workFlow?: boolean
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Účet majetku (db: IdPrimUcet) - Účet majetku)
  primarniUcet?: AFUcet
  // Účet zařazení (db: IdProtiUcetZar) - Účet zařazení)
  protiUcetZarazeni?: AFUcet
  // Účet oprávek (db: IdOpravUcet) - Účet oprávek)
  opravnyUcet?: AFUcet
  // Účet odpisu (db: IdOdpUcet) - Účet odpisu)
  odpisovyUcet?: AFUcet
  // Účet zůstatku vyřazení (db: IdZustVyrazUcet) - Účet zůstatku vyřazení)
  zustVyrazUcet?: AFUcet
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Typ organizace (db: IdTypOrg) - Typ organizace)
  typOrganizace?: AFTypOrganizace

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
    jeOdpis : {
      key: 'jeOdpis',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    druhK : {
      key: 'druhK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhMaj',
      enum: DruhMaj,
      
    },
    workFlow : {
      key: 'workFlow',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    primarniUcet : {
      key: 'primarniUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    protiUcetZarazeni : {
      key: 'protiUcetZarazeni',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    opravnyUcet : {
      key: 'opravnyUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    odpisovyUcet : {
      key: 'odpisovyUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zustVyrazUcet : {
      key: 'zustVyrazUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
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