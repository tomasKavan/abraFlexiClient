import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOsoba } from './AFOsoba.js'
import { AFPracovniPomer } from './AFPracovniPomer.js'
import { AFTypPracovnihoPomeru } from './AFTypPracovnihoPomeru.js'




export class AFPrehledZamestnancu extends AFEntity {
  static EntityPath: string = 'prehled-zamestnancu'
  static EntityName: string = 'Přehled zaměstnanců'
  static EntityType: string = 'PREHLED_ZAMESTNANCU'

  // ID (db: ) - ID)
  idPrehledZamestnancu?: number | null
  // Rok (db: ) - Rok)
  rok?: number | null
  // Osobní číslo (db: ) - Osobní číslo)
  osbCis?: string | null
  // Příjmení a jméno (db: ) - Příjmení a jméno)
  jmeno?: string | null
  // Funkce (db: ) - Funkce)
  funkce?: string | null
  // Datum narození (db: ) - Datum narození)
  datNaroz?: Date | null
  // Odpočet dětí (db: ) - Odpočet dětí)
  odpocetDeti?: number | null
  // Počátek prac.poměru (db: ) - Počátek prac.poměru)
  zacatek?: Date | null
  // Konec prac.poměru (db: ) - Konec prac.poměru)
  konecPomeru?: Date | null
  // Konec zkušební doby (db: ) - Konec zkušební doby)
  konecZkusDoby?: Date | null
  // Konec určité doby (db: ) - Konec určité doby)
  konecUrciteDoby?: Date | null
  // Úvazek hodin/týden (db: ) - Úvazek hodin/týden)
  uvazHodTydne?: Big | null
  // Úvazek koeficient (db: ) - Úvazek koeficient)
  uvazKoef?: Big | null
  // Dovolená počátek (hod) (db: ) - Dovolená počátek (hod))
  dovolPocatek?: Big | null
  // Čerpaná dovolená od počátku roku (hod) (db: ) - Čerpaná dovolená od počátku roku (hod))
  dovolVybrano?: Big | null
  // Dovolená zbývá nárok aktuální (hod) (db: ) - Dovolená zbývá nárok aktuální (hod))
  dovolZbyva?: Big | null
  // Prac.právní průměr (db: ) - Prac.právní průměr)
  pracPravPrum?: Big | null
  // Odpracovaná doba (db: ) - Odpracovaná doba)
  dobaOdpr?: Big | null
  // Osoba (db: ) - Osoba)
  osoba?: AFOsoba | null
  // Pracovní poměr (db: ) - Pracovní poměr)
  pracPom?: AFPracovniPomer | null
  // Typ pracovního poměru (db: ) - Typ pracovního poměru)
  typPracPom?: AFTypPracovnihoPomeru | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    idPrehledZamestnancu : {
      key: 'idPrehledZamestnancu',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    rok : {
      key: 'rok',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    osbCis : {
      key: 'osbCis',
      type: PropertyType.String,
      isArray: false,
      
    },
    jmeno : {
      key: 'jmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    funkce : {
      key: 'funkce',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datNaroz : {
      key: 'datNaroz',
      type: PropertyType.Date,
      isArray: false,
      
    },
    odpocetDeti : {
      key: 'odpocetDeti',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    zacatek : {
      key: 'zacatek',
      type: PropertyType.Date,
      isArray: false,
      
    },
    konecPomeru : {
      key: 'konecPomeru',
      type: PropertyType.Date,
      isArray: false,
      
    },
    konecZkusDoby : {
      key: 'konecZkusDoby',
      type: PropertyType.Date,
      isArray: false,
      
    },
    konecUrciteDoby : {
      key: 'konecUrciteDoby',
      type: PropertyType.Date,
      isArray: false,
      
    },
    uvazHodTydne : {
      key: 'uvazHodTydne',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    uvazKoef : {
      key: 'uvazKoef',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dovolPocatek : {
      key: 'dovolPocatek',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dovolVybrano : {
      key: 'dovolVybrano',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dovolZbyva : {
      key: 'dovolZbyva',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    pracPravPrum : {
      key: 'pracPravPrum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dobaOdpr : {
      key: 'dobaOdpr',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsoba',
      
    },
    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPracovniPomer',
      
    },
    typPracPom : {
      key: 'typPracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypPracovnihoPomeru',
      
    },


  }
}