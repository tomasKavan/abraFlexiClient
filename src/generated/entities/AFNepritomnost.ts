import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { CsszDuvodOsetrovne, CsszDuvodOtcovske, CsszDuvodPrevzeti } from '../AFEntityEnums'

export class AFNepritomnost extends AFEntity {
  static EntityPath: string = 'nepritomnost'
  static EntityName: string = 'Nepřítomnost'
  static EntityType: string = 'NEPRITOMNOST'

  // ID (db: IdNepritomnost) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Začátek (db: PlatiOd) - Začátek)
  platiOd?: Date | null
  // Konec (db: PlatiDo) - Konec)
  platiDo?: Date | null
  // Trvání potvrzeno (db: Trvani) - Trvání potvrzeno)
  trvani?: Date | null
  // Hodiny nepřítomnosti první den (db: Hodin1Den) - Hodiny nepřítomnosti první den)
  hodin1Den?: Big | null
  // Hodiny nepřítomnosti poslední den (db: HodinXDen) - Hodiny nepřítomnosti poslední den)
  hodinXDen?: Big | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Číslo rozhodnutí (db: CisloRozhodnuti) - Číslo rozhodnutí)
  cisloRozhodnuti?: string | null
  // Důvod ošetřovného (db: CsszDuvodOsetrovneK) - Důvod ošetřovného)
  csszDuvodOsetrovneK?: CsszDuvodOsetrovne | null
  // Název školy (db: CsszNazevSkoly) - Název školy)
  csszNazevSkoly?: string | null
  // IČO školy (db: CsszIcSkoly) - IČO školy)
  csszIcSkoly?: string | null
  // Důvod otcovské (db: CsszDuvodOtcovskeK) - Důvod otcovské)
  csszDuvodOtcovskeK?: CsszDuvodOtcovske | null
  // Důvod převzetí (db: CsszDuvodPrevzetiPpmK) - Důvod převzetí)
  csszDuvodPrevzetiPpmK?: CsszDuvodPrevzeti | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka | null
  // Důvod nepřítomnosti (db: IdCisMzdSloz) - Důvod nepřítomnosti)
  cisMzdSloz?: AFCiselnikMzdovychSlozek | null
  // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
  pracPom?: AFPracovniPomerHlavicka | null

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
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
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    trvani : {
      key: 'trvani',
      type: PropertyType.Date,
      isArray: false,
      
    },
    hodin1Den : {
      key: 'hodin1Den',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    hodinXDen : {
      key: 'hodinXDen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    cisloRozhodnuti : {
      key: 'cisloRozhodnuti',
      type: PropertyType.String,
      isArray: false,
      maxLength: 18,
      
    },
    csszDuvodOsetrovneK : {
      key: 'csszDuvodOsetrovneK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'CsszDuvodOsetrovne',
      enum: CsszDuvodOsetrovne,
      
    },
    csszNazevSkoly : {
      key: 'csszNazevSkoly',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    csszIcSkoly : {
      key: 'csszIcSkoly',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    csszDuvodOtcovskeK : {
      key: 'csszDuvodOtcovskeK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'CsszDuvodOtcovske',
      enum: CsszDuvodOtcovske,
      
    },
    csszDuvodPrevzetiPpmK : {
      key: 'csszDuvodPrevzetiPpmK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'CsszDuvodPrevzeti',
      enum: CsszDuvodPrevzeti,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },
    cisMzdSloz : {
      key: 'cisMzdSloz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCiselnikMzdovychSlozek',
      
    },
    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPracovniPomerHlavicka',
      
    },

    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}