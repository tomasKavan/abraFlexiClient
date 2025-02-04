import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { CsszDuvodOsetrovne, CsszDuvodOtcovske, CsszDuvodPrevzeti } from './AFEntityEnums'

export class AFNepritomnost extends AFEntity {
  static EntityPath: string = 'nepritomnost'
  static EntityName: string = 'Nepřítomnost'
  static EntityType: string = 'NEPRITOMNOST'

  // ID (db: IdNepritomnost) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Začátek (db: PlatiOd) - Začátek)
  platiOd?: Date
  // Konec (db: PlatiDo) - Konec)
  platiDo?: Date
  // Trvání potvrzeno (db: Trvani) - Trvání potvrzeno)
  trvani?: Date
  // Hodiny nepřítomnosti první den (db: Hodin1Den) - Hodiny nepřítomnosti první den)
  hodin1Den?: Big
  // Hodiny nepřítomnosti poslední den (db: HodinXDen) - Hodiny nepřítomnosti poslední den)
  hodinXDen?: Big
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Číslo rozhodnutí (db: CisloRozhodnuti) - Číslo rozhodnutí)
  cisloRozhodnuti?: string
  // Důvod ošetřovného (db: CsszDuvodOsetrovneK) - Důvod ošetřovného)
  csszDuvodOsetrovneK?: CsszDuvodOsetrovne
  // Název školy (db: CsszNazevSkoly) - Název školy)
  csszNazevSkoly?: string
  // IČO školy (db: CsszIcSkoly) - IČO školy)
  csszIcSkoly?: string
  // Důvod otcovské (db: CsszDuvodOtcovskeK) - Důvod otcovské)
  csszDuvodOtcovskeK?: CsszDuvodOtcovske
  // Důvod převzetí (db: CsszDuvodPrevzetiPpmK) - Důvod převzetí)
  csszDuvodPrevzetiPpmK?: CsszDuvodPrevzeti
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka
  // Důvod nepřítomnosti (db: IdCisMzdSloz) - Důvod nepřítomnosti)
  cisMzdSloz?: AFCiselnikMzdovychSlozek
  // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
  pracPom?: AFPracovniPomerHlavicka

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
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
      
    },    platiOd : {
      key: 'platiOd',
      type: PropertyType.Date,
      isArray: false,
      
    },    platiDo : {
      key: 'platiDo',
      type: PropertyType.Date,
      isArray: false,
      
    },    trvani : {
      key: 'trvani',
      type: PropertyType.Date,
      isArray: false,
      
    },    hodin1Den : {
      key: 'hodin1Den',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    hodinXDen : {
      key: 'hodinXDen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    cisloRozhodnuti : {
      key: 'cisloRozhodnuti',
      type: PropertyType.String,
      isArray: false,
      maxLength: 18,
      
    },    csszDuvodOsetrovneK : {
      key: 'csszDuvodOsetrovneK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'CsszDuvodOsetrovne',
      enum: CsszDuvodOsetrovne,
      
    },    csszNazevSkoly : {
      key: 'csszNazevSkoly',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    csszIcSkoly : {
      key: 'csszIcSkoly',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },    csszDuvodOtcovskeK : {
      key: 'csszDuvodOtcovskeK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'CsszDuvodOtcovske',
      enum: CsszDuvodOtcovske,
      
    },    csszDuvodPrevzetiPpmK : {
      key: 'csszDuvodPrevzetiPpmK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'CsszDuvodPrevzeti',
      enum: CsszDuvodPrevzeti,
      
    },    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFOsobaHlavicka,
      
    },    cisMzdSloz : {
      key: 'cisMzdSloz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCiselnikMzdovychSlozek,
      
    },    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPracovniPomerHlavicka,
      
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFPriloha
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}