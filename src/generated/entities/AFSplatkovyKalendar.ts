import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFLeasing } from './AFLeasing'
import { AFUcet } from './AFUcet'
import { AFCleneniDph } from './AFCleneniDph'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFStatDph } from './AFStatDph'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { ClenSpl, TypSpl, TypSzbDph } from '../AFEntityEnums.js'

export class AFSplatkovyKalendar extends AFEntity {
  static EntityPath: string = 'splatkovy-kalendar'
  static EntityName: string = 'Splátkový kalendář'
  static EntityType: string = 'SPLATKOVY_KALENDAR'

  // ID (db: IdSplatKal) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean
  // Členění splátky (db: ClenSplK) - Členění splátky)
  clenSplK?: ClenSpl
  // Typ splátky (db: TypSplK) - Typ splátky)
  typSplK?: TypSpl
  // Datum splátky (db: DatVyst) - Datum splátky)
  datVyst?: Date
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // DPH [Kč] (db: SumDph) - DPH [Kč])
  sumDph?: Big
  // DPH [měna] (db: SumDphMen) - DPH [měna])
  sumDphMen?: Big
  // DPH [%] (db: SzbDph) - DPH [%])
  szbDph?: Big
  // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
  typSzbDphK?: TypSzbDph
  // Základ [Kč] (db: SumZkl) - Základ [Kč])
  sumZkl?: Big
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big
  // Modul (db: Modul) - Modul)
  modul?: string
  // Čís.dokl. (db: Kod) - Číslo dokladu)
  kod?: string
  // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number
  // Leasingový majetek (db: IdLeasing) - Leasingový majetek)
  leasing?: AFLeasing
  // Úč.MD zakl. (db: IdZklMdUcet) - Účet MD základu)
  zklMdUcet?: AFUcet
  // Úč.DAL zakl. (db: IdZklDalUcet) - Účet DAL základu)
  zklDalUcet?: AFUcet
  // Úč.MD DPH (db: IdDphMdUcet) - Účet MD DPH)
  dphMdUcet?: AFUcet
  // Úč.DAL DPH (db: IdDphDalUcet) - Účet DAL DPH)
  dphDalUcet?: AFUcet
  // Členění DPH (db: IdClenDph) - Členění DPH)
  clenDph?: AFCleneniDph
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Závazek (db: IdDoklFak) - Závazek)
  zavazek?: any
  // Stát DPH (db: IdStatDph) - Stát DPH)
  statDph?: AFStatDph

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
    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    clenSplK : {
      key: 'clenSplK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ClenSpl',
      enum: ClenSpl,
      
    },
    typSplK : {
      key: 'typSplK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSpl',
      enum: TypSpl,
      
    },
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    sumDph : {
      key: 'sumDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphMen : {
      key: 'sumDphMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    szbDph : {
      key: 'szbDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },
    sumZkl : {
      key: 'sumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklMen : {
      key: 'sumZklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    cisRad : {
      key: 'cisRad',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    leasing : {
      key: 'leasing',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFLeasing',
      maxLength: 20,
      
    },
    zklMdUcet : {
      key: 'zklMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zklDalUcet : {
      key: 'zklDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphMdUcet : {
      key: 'dphMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphDalUcet : {
      key: 'dphDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      maxLength: 20,
      
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
    zavazek : {
      key: 'zavazek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 6,
      
    },
    statDph : {
      key: 'statDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStatDph',
      maxLength: 3,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}