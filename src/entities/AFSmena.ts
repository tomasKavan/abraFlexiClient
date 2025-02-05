import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFSkupinaOsob } from './AFSkupinaOsob'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFSmena extends AFEntity {
  static EntityPath: string = 'smena'
  static EntityName: string = 'Směny'
  static EntityType: string = 'SMENA'

  // ID (db: IdSmeny) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Rok (db: Rok) - Rok)
  rok?: number
  // Měsíc (db: Mesic) - Měsíc)
  mesic?: number
  // Plánované směny (db: Planovane) - Plánované směny)
  planovane?: string
  // Skutečně odpracováno (db: Skutecne) - Skutečně odpracováno)
  skutecne?: string
  // Skupina osob (db: IdSkupOsob) - Skupina osob)
  skupOsob?: AFSkupinaOsob
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka
  // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
  pracPom?: AFPracovniPomerHlavicka

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
      
    },    planovane : {
      key: 'planovane',
      type: PropertyType.String,
      isArray: false,
      
    },    skutecne : {
      key: 'skutecne',
      type: PropertyType.String,
      isArray: false,
      
    },    skupOsob : {
      key: 'skupOsob',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSkupinaOsob,
      
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
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}