import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFOsoba } from './AFOsoba'
import { AFPracovniPomer } from './AFPracovniPomer'
import { AFTypPracovnihoPomeru } from './AFTypPracovnihoPomeru'




export class AFPrehledZamestnancu extends AFEntity {
  static EntityPath: string = 'prehled-zamestnancu'
  static EntityName: string = 'Přehled zaměstnanců'
  static EntityType: string = 'PREHLED_ZAMESTNANCU'

  // ID (db: ) - ID)
  idPrehledZamestnancu?: number
  // Rok (db: ) - Rok)
  rok?: number
  // Osobní číslo (db: ) - Osobní číslo)
  osbCis?: string
  // Příjmení a jméno (db: ) - Příjmení a jméno)
  jmeno?: string
  // Funkce (db: ) - Funkce)
  funkce?: string
  // Datum narození (db: ) - Datum narození)
  datNaroz?: Date
  // Odpočet dětí (db: ) - Odpočet dětí)
  odpocetDeti?: number
  // Počátek prac.poměru (db: ) - Počátek prac.poměru)
  zacatek?: Date
  // Konec prac.poměru (db: ) - Konec prac.poměru)
  konecPomeru?: Date
  // Konec zkušební doby (db: ) - Konec zkušební doby)
  konecZkusDoby?: Date
  // Konec určité doby (db: ) - Konec určité doby)
  konecUrciteDoby?: Date
  // Úvazek hodin/týden (db: ) - Úvazek hodin/týden)
  uvazHodTydne?: Big
  // Úvazek koeficient (db: ) - Úvazek koeficient)
  uvazKoef?: Big
  // Dovolená počátek (hod) (db: ) - Dovolená počátek (hod))
  dovolPocatek?: Big
  // Čerpaná dovolená od počátku roku (hod) (db: ) - Čerpaná dovolená od počátku roku (hod))
  dovolVybrano?: Big
  // Dovolená zbývá (hod) (db: ) - Dovolená zbývá (hod))
  dovolZbyva?: Big
  // Prac.právní průměr (db: ) - Prac.právní průměr)
  pracPravPrum?: Big
  // Odpracovaná doba (db: ) - Odpracovaná doba)
  dobaOdpr?: Big
  // Osoba (db: ) - Osoba)
  osoba?: AFOsoba
  // Pracovní poměr (db: ) - Pracovní poměr)
  pracPom?: AFPracovniPomer
  // Typ pracovního poměru (db: ) - Typ pracovního poměru)
  typPracPom?: AFTypPracovnihoPomeru



  static propAnnotations: Record<string, TypeAnnotation> = {
    idPrehledZamestnancu : {
      key: 'idPrehledZamestnancu',
      type: PropertyType.Integer,
      isArray: false,
      
    },    rok : {
      key: 'rok',
      type: PropertyType.Integer,
      isArray: false,
      
    },    osbCis : {
      key: 'osbCis',
      type: PropertyType.String,
      isArray: false,
      
    },    jmeno : {
      key: 'jmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    funkce : {
      key: 'funkce',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    datNaroz : {
      key: 'datNaroz',
      type: PropertyType.Date,
      isArray: false,
      
    },    odpocetDeti : {
      key: 'odpocetDeti',
      type: PropertyType.Integer,
      isArray: false,
      
    },    zacatek : {
      key: 'zacatek',
      type: PropertyType.Date,
      isArray: false,
      
    },    konecPomeru : {
      key: 'konecPomeru',
      type: PropertyType.Date,
      isArray: false,
      
    },    konecZkusDoby : {
      key: 'konecZkusDoby',
      type: PropertyType.Date,
      isArray: false,
      
    },    konecUrciteDoby : {
      key: 'konecUrciteDoby',
      type: PropertyType.Date,
      isArray: false,
      
    },    uvazHodTydne : {
      key: 'uvazHodTydne',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    uvazKoef : {
      key: 'uvazKoef',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    dovolPocatek : {
      key: 'dovolPocatek',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    dovolVybrano : {
      key: 'dovolVybrano',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    dovolZbyva : {
      key: 'dovolZbyva',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    pracPravPrum : {
      key: 'pracPravPrum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    dobaOdpr : {
      key: 'dobaOdpr',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFOsoba,
      
    },    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPracovniPomer,
      
    },    typPracPom : {
      key: 'typPracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypPracovnihoPomeru,
      
    },

  }
}