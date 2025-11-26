import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFUcet } from './AFUcet'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { DruhLeas } from '../AFEntityEnums'

export class AFTypLeasingu extends AFEntity {
  static EntityPath: string = 'typ-leasingu'
  static EntityName: string = 'Typy leasingů'
  static EntityType: string = 'LEASING_TYP'

  // ID (db: IdTypLeas) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
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
  // Druh (db: DruhK) - Druh)
  druhK?: DruhLeas | null
  // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
  workFlow?: boolean | null
  // Účet DPH snížená sazba (db: IdDphSnizUcet) - DPH snížená)
  dphSnizUcet?: AFUcet | null
  // Účet DPH základní sazba (db: IdDphZaklUcet) - DPH základní)
  dphZaklUcet?: AFUcet | null
  // Úč.závaz. (db: IdZavazUcet) - Účet závazku)
  zavazUcet?: AFUcet | null
  // Úč.čas.rozl. (db: IdCasUcet) - Účet časového rozlišení nákladů)
  casUcet?: AFUcet | null
  // Úč.daň.nakl. (db: IdNaklUcet) - Účet daňových nákladů)
  naklUcet?: AFUcet | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
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
    druhK : {
      key: 'druhK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhLeas',
      enum: DruhLeas,
      
    },
    workFlow : {
      key: 'workFlow',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    dphSnizUcet : {
      key: 'dphSnizUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphZaklUcet : {
      key: 'dphZaklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zavazUcet : {
      key: 'zavazUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    casUcet : {
      key: 'casUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    naklUcet : {
      key: 'naklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
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