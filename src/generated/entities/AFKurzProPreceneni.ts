import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFMena } from './AFMena.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFKurzProPreceneni extends AFEntity {
  static EntityPath: string = 'kurz-pro-preceneni'
  static EntityName: string = 'Kurzy pro přecenění'
  static EntityType: string = 'KURZ_PRO_PRECENENI'

  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Datum (db: PlatiOdData) - Datum)
  platiOdData?: Date | null
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big | null
  // Množství (db: KurzMnozstvi) - Množství)
  kurzMnozstvi?: Big | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    platiOdData : {
      key: 'platiOdData',
      type: PropertyType.Date,
      isArray: false,
      
    },
    kurz : {
      key: 'kurz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    kurzMnozstvi : {
      key: 'kurzMnozstvi',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}