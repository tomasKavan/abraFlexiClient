import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFSkupinaOsob } from './AFSkupinaOsob.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFSmena extends AFEntity {
  static EntityPath: string = 'smena'
  static EntityName: string = 'Směny'
  static EntityType: string = 'SMENA'

  // ID (db: IdSmeny) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Rok (db: Rok) - Rok)
  rok?: number | null
  // Měsíc (db: Mesic) - Měsíc)
  mesic?: number | null
  // Plánované směny (db: Planovane) - Plánované směny)
  planovane?: string | null
  // Skutečně odpracováno (db: Skutecne) - Skutečně odpracováno)
  skutecne?: string | null
  // Skupina osob (db: IdSkupOsob) - Skupina osob)
  skupOsob?: AFSkupinaOsob | null
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka | null
  // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
  pracPom?: AFPracovniPomerHlavicka | null

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
    planovane : {
      key: 'planovane',
      type: PropertyType.String,
      isArray: false,
      
    },
    skutecne : {
      key: 'skutecne',
      type: PropertyType.String,
      isArray: false,
      
    },
    skupOsob : {
      key: 'skupOsob',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaOsob',
      
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

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}