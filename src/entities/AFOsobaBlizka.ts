import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFVztah } from './AFVztah'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { Pohlavi } from './AFEntityEnums'

export class AFOsobaBlizka extends AFEntity {
  static EntityPath: string = 'osoba-blizka'
  static EntityName: string = 'Ošetřovaná osoba'
  static EntityType: string = 'OSOBA_BLIZKA'

  // ID (db: IdDite) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string
  // Datum narození (db: DatNaroz) - Datum narození)
  datNaroz?: Date
  // Pohlaví (db: PohlaviK) - Pohlaví)
  pohlaviK?: Pohlavi
  // Rodné číslo (db: RodCis) - Rodné číslo)
  rodCis?: string
  // ZTP/P (db: Ztp_P) - ZTP/P)
  ztp_P?: boolean
  // Od (db: Ztp_POd) - Od)
  ztp_POd?: Date
  // Do (db: Ztp_PDo) - Do)
  ztp_PDo?: Date
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Dítě (db: Dite) - Dítě)
  dite?: boolean
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka
  // Vztah (db: IdVztah) - Vztah)
  vztah?: AFVztah

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
    prijmeni : {
      key: 'prijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    jmeno : {
      key: 'jmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datNaroz : {
      key: 'datNaroz',
      type: PropertyType.Date,
      isArray: false,
      
    },
    pohlaviK : {
      key: 'pohlaviK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Pohlavi',
      enum: Pohlavi,
      
    },
    rodCis : {
      key: 'rodCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    ztp_P : {
      key: 'ztp_P',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ztp_POd : {
      key: 'ztp_POd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    ztp_PDo : {
      key: 'ztp_PDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    dite : {
      key: 'dite',
      type: PropertyType.Logic,
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
      afClass: AFOsobaHlavicka,
      
    },
    vztah : {
      key: 'vztah',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFVztah,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}