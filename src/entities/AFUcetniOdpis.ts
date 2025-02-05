import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFMajetek } from './AFMajetek'
import { AFUcet } from './AFUcet'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFUcetniOdpis extends AFEntity {
  static EntityPath: string = 'ucetni-odpis'
  static EntityName: string = 'Účetní odpisy'
  static EntityType: string = 'UCETNI_ODPIS'

  // ID (db: IdUcetOdpisu) - ID)
  id?: number
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean
  // Uživ. změn. (db: Zmena) - Uživatelsky změněno)
  zmena?: boolean
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date
  // Účet. odpis [Kč] (db: SumZkl) - Účet. odpis [Kč])
  sumZkl?: Big
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Číslo dokladu (db: Kod) - Číslo dokladu)
  kod?: string
  // Modul (db: Modul) - Modul)
  modul?: string
  // Zámek (db: Zamek) - Zámek)
  zamek?: boolean
  // Zůstatek [Kč] (db: ZustPoOdp) - Zůstatek [Kč])
  zustPoOdp?: Big
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
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
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
      
    },    zamek : {
      key: 'zamek',
      type: PropertyType.Logic,
      isArray: false,
      
    },    zustPoOdp : {
      key: 'zustPoOdp',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
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