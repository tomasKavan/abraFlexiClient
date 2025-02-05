import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFMajetek } from './AFMajetek'
import { AFUcet } from './AFUcet'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFDanovyOdpis extends AFEntity {
  static EntityPath: string = 'danovy-odpis'
  static EntityName: string = 'Daňové odpisy'
  static EntityType: string = 'DANOVY_ODPIS'

  // ID (db: IdDanOdpisu) - ID)
  id?: number
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean
  // Uživ. změn. (db: Zmena) - Uživatelsky změněno)
  zmena?: boolean
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date
  // Daň.odpis [Kč] (db: SumZkl) - Daň.odpis [Kč])
  sumZkl?: Big
  // Stáří[Roky] (db: StariMaj) - Stáří majetku [Roky])
  stariMaj?: number
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Zámek (db: Zamek) - Zámek)
  zamek?: boolean
  // Zůstatek [Kč] (db: ZustPoOdp) - Zůstatek [Kč])
  zustPoOdp?: Big
  // Číslo dokladu (db: Kod) - Číslo dokladu)
  kod?: string
  // Modul (db: Modul) - Modul)
  modul?: string
  // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date
  // Majetek (db: IdMajetku) - Majetek)
  majetek?: AFMajetek
  // Účet MD (db: IdZklMdUcet) - Účet MD odpisu)
  zklMdUcet?: AFUcet
  // Účet DAL (db: IdZklDalUcet) - Účet DAL odpisu)
  zklDalUcet?: AFUcet
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },    zmena : {
      key: 'zmena',
      type: PropertyType.Logic,
      isArray: false,
      
    },    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },    sumZkl : {
      key: 'sumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    stariMaj : {
      key: 'stariMaj',
      type: PropertyType.Integer,
      isArray: false,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    zamek : {
      key: 'zamek',
      type: PropertyType.Logic,
      isArray: false,
      
    },    zustPoOdp : {
      key: 'zustPoOdp',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },    majetek : {
      key: 'majetek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMajetek,
      maxLength: 20,
      
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
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      maxLength: 30,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}