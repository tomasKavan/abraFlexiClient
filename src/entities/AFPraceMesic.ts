import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
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
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Rok (db: Rok) - Rok)
  rok?: number
  // Měsíc (db: Mesic) - Měsíc)
  mesic?: number
  // Hodin (db: Hodin) - Hodin)
  hodin?: Big
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
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
  uzivatelskeVazby?: AFUzivatelskaVazba[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    rok : {
      key: 'rok',
      type: PropertyType.Integer,
      isArray: false,
      
    },    mesic : {
      key: 'mesic',
      type: PropertyType.Integer,
      isArray: false,
      
    },    hodin : {
      key: 'hodin',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFOsobaHlavicka,
      
    },    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPracovniPomerHlavicka,
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      maxLength: 30,
      
    },    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCinnost,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}