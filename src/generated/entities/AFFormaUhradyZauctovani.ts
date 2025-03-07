import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFTypDokladu } from './AFTypDokladu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFFormaUhradyZauctovani extends AFEntity {
  static EntityPath: string = 'forma-uhrady-zauctovani'
  static EntityName: string = 'Zaúčtování formy úhrady'
  static EntityType: string = 'FORMA_UHRADY_ZAUCTOVANI'

  // ID (db: IdFormaUhradyZauc) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady
  // Typ dokladu (db: IdTypDokl) - Typ dokladu)
  typDokl?: AFTypDokladu
  // Prodejní kasa (db: IdKasa) - Prodejní kasa)
  kasa?: AFTypDokladu

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
    formaUhradyCis : {
      key: 'formaUhradyCis',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaUhrady',
      
    },
    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    kasa : {
      key: 'kasa',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}