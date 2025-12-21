import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFFormaUhrady } from './AFFormaUhrady.js'
import { AFTypDokladu } from './AFTypDokladu.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFFormaUhradyZauctovani extends AFEntity {
  static EntityPath: string = 'forma-uhrady-zauctovani'
  static EntityName: string = 'Zaúčtování formy úhrady'
  static EntityType: string = 'FORMA_UHRADY_ZAUCTOVANI'

  // ID (db: IdFormaUhradyZauc) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady | null
  // Typ dokladu (db: IdTypDokl) - Typ dokladu)
  typDokl?: AFTypDokladu | null
  // Prodejní kasa (db: IdKasa) - Prodejní kasa)
  kasa?: AFTypDokladu | null

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