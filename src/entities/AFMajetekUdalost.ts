import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFMajetek } from './AFMajetek'
import { AFStredisko } from './AFStredisko'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypUdal } from './AFEntityEnums'

export class AFMajetekUdalost extends AFEntity {
  static EntityPath: string = 'majetek-udalost'
  static EntityName: string = 'Události'
  static EntityType: string = 'MAJETEK_UDALOST'

  // ID (db: IdUdalosti) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean
  // Typ události (db: TypUdalostiK) - Typ události)
  typUdalostiK?: TypUdal
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Částka [Kč] (db: SumZkl) - Částka [Kč])
  sumZkl?: Big
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big
  // Částka účetní [Kč] (db: SumDph) - Částka účetní [Kč])
  sumDph?: Big
  // DPH [měna] (db: SumDphMen) - DPH [měna])
  sumDphMen?: Big
  // Zámek (db: Zamek) - Zámek)
  zamek?: boolean
  // Číslo dokladu (db: Kod) - Číslo dokladu)
  kod?: string
  // Modul (db: Modul) - Modul)
  modul?: string
  // Prodl. úč. odp. (db: ZmenaDobyOdpis) - Prodlouž. účet. odpisů o)
  zmenaDobyOdpis?: number
  // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date
  // Uživ. změna zůst. (db: Zmena) - Uživatelská změna zůstatku)
  zmena?: boolean
  // Částka daňová [Kč] (db: SumDphDanove) - Částka daňová [Kč])
  sumDphDanove?: Big
  // Majetek (db: IdMajetku) - Majetek)
  majetek?: AFMajetek
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Úč.MD zůst. (db: IdDphMdUcet) - Účet MD zůstatku)
  dphMdUcet?: AFUcet
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Účet MD události (db: IdZklMdUcet) - Účet MD události)
  zklMdUcet?: AFUcet
  // Účet DAL události (db: IdZklDalUcet) - Účet DAL události)
  zklDalUcet?: AFUcet
  // Úč.DAL zůst. (db: IdDphDalUcet) - Účet DAL zůstatku)
  dphDalUcet?: AFUcet

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
      
    },    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },    typUdalostiK : {
      key: 'typUdalostiK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypUdal',
      enum: TypUdal,
      
    },    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    sumZkl : {
      key: 'sumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklMen : {
      key: 'sumZklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDph : {
      key: 'sumDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphMen : {
      key: 'sumDphMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    zamek : {
      key: 'zamek',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },    zmenaDobyOdpis : {
      key: 'zmenaDobyOdpis',
      type: PropertyType.Integer,
      isArray: false,
      
    },    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },    zmena : {
      key: 'zmena',
      type: PropertyType.Logic,
      isArray: false,
      
    },    sumDphDanove : {
      key: 'sumDphDanove',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    majetek : {
      key: 'majetek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMajetek,
      maxLength: 20,
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },    dphMdUcet : {
      key: 'dphMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      maxLength: 30,
      
    },    zklMdUcet : {
      key: 'zklMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    zklDalUcet : {
      key: 'zklDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    dphDalUcet : {
      key: 'dphDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}