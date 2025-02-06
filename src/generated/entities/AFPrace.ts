import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFCinnost } from './AFCinnost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFPrace extends AFEntity {
  static EntityPath: string = 'prace'
  static EntityName: string = 'Práce pro střediska'
  static EntityType: string = 'PRACE'

  // ID (db: IdPraceStred) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Datum od (db: DatumOd) - Datum od)
  datumOd?: Date
  // Datum do (db: DatumDo) - Datum do)
  datumDo?: Date
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Procento (db: Procento) - Procento)
  procento?: Big
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka
  // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
  pracPom?: AFPracovniPomerHlavicka
  // Středisko (db: IdStredisko) - Středisko)
  stredisko?: AFStredisko
  // Zakázka (db: IdZakazka) - Zakázka)
  zakazka?: AFZakazka
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost

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
      afClass: AFOsobaHlavicka,
      
    },
    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPracovniPomerHlavicka,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      maxLength: 30,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCinnost,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}