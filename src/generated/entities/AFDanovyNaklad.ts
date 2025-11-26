import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFLeasing } from './AFLeasing'
import { AFUcet } from './AFUcet'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFDanovyNaklad extends AFEntity {
  static EntityPath: string = 'danovy-naklad'
  static EntityName: string = 'Daňové náklady'
  static EntityType: string = 'DANOVY_NAKLAD'

  // ID (db: IdDanNakl) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean | null
  // Datum účtování (db: DatVyst) - Datum účtování)
  datVyst?: Date | null
  // Základ [Kč] (db: SumZkl) - Základ [Kč])
  sumZkl?: Big | null
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Modul (db: Modul) - Modul)
  modul?: string | null
  // Číslo dokladu (db: Kod) - Číslo dokladu)
  declare kod?: string | null
  // Datum zaúčtování (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date | null
  // Leasingový majetek (db: IdLeasing) - Leasingový majetek)
  leasing?: AFLeasing | null
  // Účet MD základu (db: IdZklMdUcet) - Účet MD základu)
  zklMdUcet?: AFUcet | null
  // Účet DAL základu (db: IdZklDalUcet) - Účet DAL základu)
  zklDalUcet?: AFUcet | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null

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
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
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
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
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

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}