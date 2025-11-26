import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFCinnost } from './AFCinnost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFPraceMesic extends AFEntity {
  static EntityPath: string = 'prace-mesic'
  static EntityName: string = 'Práce pro střediska'
  static EntityType: string = 'PRACE_MESIC'

  // ID (db: IdPraceStred) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Rok (db: Rok) - Rok)
  rok?: number | null
  // Měsíc (db: Mesic) - Měsíc)
  mesic?: number | null
  // Hodin (db: Hodin) - Hodin)
  hodin?: Big | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
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
    rok : {
      key: 'rok',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesic : {
      key: 'mesic',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    hodin : {
      key: 'hodin',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
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