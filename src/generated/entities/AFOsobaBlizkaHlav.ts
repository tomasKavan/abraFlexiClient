import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFOsobaBlizkaHlav extends AFEntity {
  static EntityPath: string = 'osoba-blizka-hlav'
  static EntityName: string = 'Hlavička osoby blízké'
  static EntityType: string = 'OSOBA_BLIZKA_HLAV'

  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string | null
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string | null
  // Rodné číslo (db: RodCis) - Rodné číslo)
  rodCis?: string | null
  // Datum narození (db: DatNaroz) - Datum narození)
  datNaroz?: Date | null
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
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
    rodCis : {
      key: 'rodCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    datNaroz : {
      key: 'datNaroz',
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