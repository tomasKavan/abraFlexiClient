import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFVztah } from './AFVztah.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { Pohlavi } from '../AFEntityEnums.js'

export class AFOsobaBlizka extends AFEntity {
  static EntityPath: string = 'osoba-blizka'
  static EntityName: string = 'Ošetřovaná osoba'
  static EntityType: string = 'OSOBA_BLIZKA'

  // ID (db: IdDite) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string | null
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string | null
  // Datum narození (db: DatNaroz) - Datum narození)
  datNaroz?: Date | null
  // Pohlaví (db: PohlaviK) - Pohlaví)
  pohlaviK?: Pohlavi | null
  // Rodné číslo (db: RodCis) - Rodné číslo)
  rodCis?: string | null
  // ZTP/P (db: Ztp_P) - ZTP/P)
  ztp_P?: boolean | null
  // Od (db: Ztp_POd) - Od)
  ztp_POd?: Date | null
  // Do (db: Ztp_PDo) - Do)
  ztp_PDo?: Date | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Dítě (db: Dite) - Dítě)
  dite?: boolean | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka | null
  // Vztah (db: IdVztah) - Vztah)
  vztah?: AFVztah | null

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
      afClass: 'AFOsobaHlavicka',
      
    },
    vztah : {
      key: 'vztah',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFVztah',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}