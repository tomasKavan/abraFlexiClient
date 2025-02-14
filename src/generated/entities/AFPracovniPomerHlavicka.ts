import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFPracovniPomerHlavicka extends AFEntity {
  static EntityPath: string = 'pracovni-pomer-hlavicka'
  static EntityName: string = 'Pracovní poměr'
  static EntityType: string = 'PRACOVNI_POMER_HLAVICKA'

  // ID (db: IdPracPomHlav) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  //  (db: AktivniOd) - )
  aktivniOd?: Date
  //  (db: AktivniDo) - )
  aktivniDo?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  //  (db: Hlavni) - )
  hlavni?: boolean
  //  (db: Zacatek) - )
  zacatek?: Date
  //  (db: SkutecnyNastup) - )
  skutecnyNastup?: Date
  //  (db: KonecPomeru) - )
  konecPomeru?: Date
  //  (db: KonecZkusDoby) - )
  konecZkusDoby?: Date
  //  (db: KonecUrciteDoby) - )
  konecUrciteDoby?: Date
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka

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
    aktivniOd : {
      key: 'aktivniOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    aktivniDo : {
      key: 'aktivniDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    hlavni : {
      key: 'hlavni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zacatek : {
      key: 'zacatek',
      type: PropertyType.Date,
      isArray: false,
      
    },
    skutecnyNastup : {
      key: 'skutecnyNastup',
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
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}