import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFLeasing } from './AFLeasing.js'
import { AFUcet } from './AFUcet.js'
import { AFCleneniDph } from './AFCleneniDph.js'
import { AFStredisko } from './AFStredisko.js'
import { AFZakazka } from './AFZakazka.js'
import { AFStatDph } from './AFStatDph.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { ClenSpl, TypSpl, TypSzbDph } from '../AFEntityEnums.js'

export class AFSplatkovyKalendar extends AFEntity {
  static EntityPath: string = 'splatkovy-kalendar'
  static EntityName: string = 'Splátkový kalendář'
  static EntityType: string = 'SPLATKOVY_KALENDAR'

  // ID (db: IdSplatKal) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean | null
  // Členění splátky (db: ClenSplK) - Členění splátky)
  clenSplK?: ClenSpl | null
  // Typ splátky (db: TypSplK) - Typ splátky)
  typSplK?: TypSpl | null
  // Datum splátky (db: DatVyst) - Datum splátky)
  datVyst?: Date | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // DPH [Kč] (db: SumDph) - DPH [Kč])
  sumDph?: Big | null
  // DPH [měna] (db: SumDphMen) - DPH [měna])
  sumDphMen?: Big | null
  // DPH [%] (db: SzbDph) - DPH [%])
  szbDph?: Big | null
  // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
  typSzbDphK?: TypSzbDph | null
  // Základ [Kč] (db: SumZkl) - Základ [Kč])
  sumZkl?: Big | null
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big | null
  // Modul (db: Modul) - Modul)
  modul?: string | null
  // Čís.dokl. (db: Kod) - Číslo dokladu)
  declare kod?: string | null
  // Datum zaúčtování (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date | null
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number | null
  // Leasingový majetek (db: IdLeasing) - Leasingový majetek)
  leasing?: AFLeasing | null
  // Úč.MD zakl. (db: IdZklMdUcet) - Účet MD základu)
  zklMdUcet?: AFUcet | null
  // Úč.DAL zakl. (db: IdZklDalUcet) - Účet DAL základu)
  zklDalUcet?: AFUcet | null
  // Úč.MD DPH (db: IdDphMdUcet) - Účet MD DPH)
  dphMdUcet?: AFUcet | null
  // Úč.DAL DPH (db: IdDphDalUcet) - Účet DAL DPH)
  dphDalUcet?: AFUcet | null
  // Členění DPH (db: IdClenDph) - Členění DPH)
  clenDph?: AFCleneniDph | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Závazek (db: IdDoklFak) - Závazek)
  zavazek?: any | null
  // Stát DPH (db: IdStatDph) - Stát DPH)
  statDph?: AFStatDph | null

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