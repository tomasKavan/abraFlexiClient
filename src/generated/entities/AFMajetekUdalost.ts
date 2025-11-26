import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFMajetek } from './AFMajetek'
import { AFStredisko } from './AFStredisko'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypUdal, NahrUcet } from '../AFEntityEnums'

export class AFMajetekUdalost extends AFEntity {
  static EntityPath: string = 'majetek-udalost'
  static EntityName: string = 'Události'
  static EntityType: string = 'MAJETEK_UDALOST'

  // ID (db: IdUdalosti) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean | null
  // Typ události (db: TypUdalostiK) - Typ události)
  typUdalostiK?: TypUdal | null
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Částka [Kč] (db: SumZkl) - Částka [Kč])
  sumZkl?: Big | null
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big | null
  // Částka účetní [Kč] (db: SumDph) - Částka účetní [Kč])
  sumDph?: Big | null
  // DPH [měna] (db: SumDphMen) - DPH [měna])
  sumDphMen?: Big | null
  // Zámek (db: Zamek) - Zámek)
  zamek?: boolean | null
  // Číslo dokladu (db: Kod) - Číslo dokladu)
  declare kod?: string | null
  // Modul (db: Modul) - Modul)
  modul?: string | null
  // Prodl. úč. odp. (db: ZmenaDobyOdpis) - Prodlouž. účet. odpisů o)
  zmenaDobyOdpis?: number | null
  // Datum zaúčtování (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date | null
  // Uživ. změna zůst. (db: Zmena) - Uživatelská změna zůstatku)
  zmena?: boolean | null
  // Částka daňová [Kč] (db: SumDphDanove) - Částka daňová [Kč])
  sumDphDanove?: Big | null
  // Účetní odp.? (db: NahrUcetOdpK) - Vytvářet úč. odpisy)
  nahrUcetOdpK?: NahrUcet | null
  // Majetek (db: IdMajetku) - Majetek)
  majetek?: AFMajetek | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Úč.MD zůst. (db: IdDphMdUcet) - Účet MD zůstatku)
  dphMdUcet?: AFUcet | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Účet MD události (db: IdZklMdUcet) - Účet MD události)
  zklMdUcet?: AFUcet | null
  // Účet DAL události (db: IdZklDalUcet) - Účet DAL události)
  zklDalUcet?: AFUcet | null
  // Úč.DAL zůst. (db: IdDphDalUcet) - Účet DAL zůstatku)
  dphDalUcet?: AFUcet | null

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
    typUdalostiK : {
      key: 'typUdalostiK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypUdal',
      enum: TypUdal,
      
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
    zamek : {
      key: 'zamek',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    zmenaDobyOdpis : {
      key: 'zmenaDobyOdpis',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    zmena : {
      key: 'zmena',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sumDphDanove : {
      key: 'sumDphDanove',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    nahrUcetOdpK : {
      key: 'nahrUcetOdpK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'NahrUcet',
      enum: NahrUcet,
      
    },
    majetek : {
      key: 'majetek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMajetek',
      maxLength: 20,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    dphMdUcet : {
      key: 'dphMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
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
    dphDalUcet : {
      key: 'dphDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}