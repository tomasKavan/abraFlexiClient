import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFAdresar } from './AFAdresar'
import { AFCenikovaSkupina } from './AFCenikovaSkupina'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFCenik } from './AFCenik'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'


import { TypCenyVychozi, TypVypCeny, ZaokrJak, ZaokrNa } from './AFEntityEnums'

export class AFCenovaUroven extends AFEntity {
  static EntityPath: string = 'cenova-uroven'
  static EntityName: string = 'Cenové úrovně'
  static EntityType: string = 'CENOVA_UROVEN'

  // ID (db: IdCenHlad) - ID)
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
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Dočasnost (db: Docasnost) - cenová úroveň je dočasná)
  docasnost?: boolean
  // Platnost od data (db: PlatiOdData) - Platnost od data)
  platiOdData?: Date
  // Platnost do data (db: PlatiDoData) - Platnost do data)
  platiDoData?: Date
  // Výchozí cena (db: TypCenyVychoziK) - Výchozí cena)
  typCenyVychoziK?: TypCenyVychozi
  // Způsob výpočtu (db: TypVypCenyK) - Způsob výpočtu)
  typVypCenyK?: TypVypCeny
  // Marže / Rabat / Sleva [%] (db: ProcZakl) - Marže / Rabat / Sleva [%])
  procZakl?: Big
  // Výchozí cena pro množ. slevy (db: TypCenyVychozi25K) - Výchozí cena)
  typCenyVychozi25K?: TypCenyVychozi
  // Způsob výpočtu pro množ. slevy (db: TypVypCeny25K) - Způsob výpočtu)
  typVypCeny25K?: TypVypCeny
  // Limit MJ 2 (db: LimMnoz2) - Množ. limit 2)
  limMnoz2?: Big
  // Limit MJ 3 (db: LimMnoz3) - Množ. limit 3)
  limMnoz3?: Big
  // Limit MJ 4 (db: LimMnoz4) - Množ. limit 4)
  limMnoz4?: Big
  // Limit MJ 5 (db: LimMnoz5) - Množ. limit 5)
  limMnoz5?: Big
  // %2 (db: Procento2) - % 2)
  procento2?: Big
  // %3 (db: Procento3) - %3)
  procento3?: Big
  // %4 (db: Procento4) - %4)
  procento4?: Big
  // %5 (db: Procento5) - %5)
  procento5?: Big
  // Ručně vybrat (db: RucneVybrat) - Ručně vybrat)
  rucneVybrat?: boolean
  // Způsob zaokr. ceny (db: ZaokrJakK) - Způsob)
  zaokrJakK?: ZaokrJak
  // Řád zaokr. ceny (db: ZaokrNaK) - Řád)
  zaokrNaK?: ZaokrNa
  // Pro všechny skupiny zboží (db: VsechnySkupZboz) - Pro všechny skupiny zboží)
  vsechnySkupZboz?: boolean
  // Platí pro všechny firmy (db: VsechnyFirmy) - Platí pro všechny firmy)
  vsechnyFirmy?: boolean
  // Neaplikovat slevu z dokladu (db: ZakazSlevaDokl) - Neaplikovat slevu z dokladu)
  zakazSlevaDokl?: boolean
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko

  // Adresář (type: ADRESAR) - firmy)
  firmy?: AFAdresar[]
  // Ceníkové skupiny (type: CENIKOVA_SKUPINA) - skupinyCen)
  skupinyCen?: AFCenikovaSkupina[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]
  // Ceníky (type: CENIK) - ceniky)
  ceniky?: AFCenik[]
  // Skupiny zboží (type: SKUPINA_ZBOZI) - skupinyZbozi)
  skupinyZbozi?: AFSkupinaZbozi[]


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
      maxLength: 20,
      
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
      
    },    docasnost : {
      key: 'docasnost',
      type: PropertyType.Logic,
      isArray: false,
      
    },    platiOdData : {
      key: 'platiOdData',
      type: PropertyType.Date,
      isArray: false,
      
    },    platiDoData : {
      key: 'platiDoData',
      type: PropertyType.Date,
      isArray: false,
      
    },    typCenyVychoziK : {
      key: 'typCenyVychoziK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCenyVychozi',
      enum: TypCenyVychozi,
      
    },    typVypCenyK : {
      key: 'typVypCenyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
    },    procZakl : {
      key: 'procZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    typCenyVychozi25K : {
      key: 'typCenyVychozi25K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCenyVychozi',
      enum: TypCenyVychozi,
      
    },    typVypCeny25K : {
      key: 'typVypCeny25K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
    },    limMnoz2 : {
      key: 'limMnoz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    limMnoz3 : {
      key: 'limMnoz3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    limMnoz4 : {
      key: 'limMnoz4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    limMnoz5 : {
      key: 'limMnoz5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    procento2 : {
      key: 'procento2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    procento3 : {
      key: 'procento3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    procento4 : {
      key: 'procento4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    procento5 : {
      key: 'procento5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    rucneVybrat : {
      key: 'rucneVybrat',
      type: PropertyType.Logic,
      isArray: false,
      
    },    zaokrJakK : {
      key: 'zaokrJakK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },    zaokrNaK : {
      key: 'zaokrNaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },    vsechnySkupZboz : {
      key: 'vsechnySkupZboz',
      type: PropertyType.Logic,
      isArray: false,
      
    },    vsechnyFirmy : {
      key: 'vsechnyFirmy',
      type: PropertyType.Logic,
      isArray: false,
      
    },    zakazSlevaDokl : {
      key: 'zakazSlevaDokl',
      type: PropertyType.Logic,
      isArray: false,
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },
    firmy : {
      key: 'firmy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFAdresar
    },
    skupinyCen : {
      key: 'skupinyCen',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFCenikovaSkupina
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },
    ceniky : {
      key: 'ceniky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFCenik
    },
    skupinyZbozi : {
      key: 'skupinyZbozi',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFSkupinaZbozi
    },

  }
}