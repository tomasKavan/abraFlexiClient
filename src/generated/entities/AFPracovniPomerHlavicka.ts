import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFPracovniPomerHlavicka extends AFEntity {
  static EntityPath: string = 'pracovni-pomer-hlavicka'
  static EntityName: string = 'Pracovní poměr'
  static EntityType: string = 'PRACOVNI_POMER_HLAVICKA'

  // ID (db: IdPracPomHlav) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Aktivní od (db: AktivniOd) - Aktivní od)
  aktivniOd?: Date | null
  // Aktivní do (db: AktivniDo) - Aktivní do)
  aktivniDo?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Hlavní (db: Hlavni) - Hlavní)
  hlavni?: boolean | null
  // Začátek poměru (db: Zacatek) - Začátek poměru)
  zacatek?: Date | null
  // Skutečný nástup (db: SkutecnyNastup) - Skutečný nástup)
  skutecnyNastup?: Date | null
  // Konec poměru (db: KonecPomeru) - Konec poměru)
  konecPomeru?: Date | null
  // Konec zkušební doby (db: KonecZkusDoby) - Konec zkušební doby)
  konecZkusDoby?: Date | null
  // Konec určité doby (db: KonecUrciteDoby) - Konec určité doby)
  konecUrciteDoby?: Date | null
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka | null

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