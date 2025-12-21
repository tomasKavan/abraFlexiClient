import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka.js'
import { AFStredisko } from './AFStredisko.js'
import { AFZakazka } from './AFZakazka.js'
import { AFCinnost } from './AFCinnost.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFPrace extends AFEntity {
  static EntityPath: string = 'prace'
  static EntityName: string = 'Práce pro střediska'
  static EntityType: string = 'PRACE'

  // ID (db: IdPraceStred) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Datum od (db: DatumOd) - Datum od)
  datumOd?: Date | null
  // Datum do (db: DatumDo) - Datum do)
  datumDo?: Date | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Procento (db: Procento) - Procento)
  procento?: Big | null
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka | null
  // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
  pracPom?: AFPracovniPomerHlavicka | null
  // Středisko (db: IdStredisko) - Středisko)
  stredisko?: AFStredisko | null
  // Zakázka (db: IdZakazka) - Zakázka)
  zakazka?: AFZakazka | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null

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
    datumOd : {
      key: 'datumOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datumDo : {
      key: 'datumDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    procento : {
      key: 'procento',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },
    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPracovniPomerHlavicka',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}