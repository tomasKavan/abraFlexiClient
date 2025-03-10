import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFMena } from './AFMena'
import { AFFormaUhradyZauctovani } from './AFFormaUhradyZauctovani'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { FormaUhr, MetodaZaokr, ZaokrNa } from '../AFEntityEnums.js'

export class AFFormaUhrady extends AFEntity {
  static EntityPath: string = 'forma-uhrady'
  static EntityName: string = 'Formy úhrady'
  static EntityType: string = 'FORMA_UHRADY'

  // ID (db: IdFormaUhradyCis) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Forma úhrady (db: FormaUhrK) - Forma úhrady)
  formaUhrK?: FormaUhr
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big
  // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
  kurzMnozstvi?: Big
  // Limit vrácení (db: LimitVratky) - Limit vrácení)
  limitVratky?: Big
  // Nabízet na fakturách (db: VsbFak) - Nabízet na fakturách)
  vsbFak?: boolean
  // Nabízet na pokladně (db: VsbPok) - Nabízet na pokladně)
  vsbPok?: boolean
  // Nabízet na kase (db: VsbKasa) - Nabízet na kase)
  vsbKasa?: boolean
  // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
  metodaZaokrDoklK?: MetodaZaokr
  // Řád zaokr. Celkem (db: ZaokrNaSumK) - Celkem (řády))
  zaokrNaSumK?: ZaokrNa
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena

  // Zaúčtování (type: FORMA_UHRADY_ZAUCTOVANI) - zauctovani)
  zauctovani?: AFFormaUhradyZauctovani[]
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
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    formaUhrK : {
      key: 'formaUhrK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'FormaUhr',
      enum: FormaUhr,
      
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
    limitVratky : {
      key: 'limitVratky',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vsbFak : {
      key: 'vsbFak',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbPok : {
      key: 'vsbPok',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbKasa : {
      key: 'vsbKasa',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    metodaZaokrDoklK : {
      key: 'metodaZaokrDoklK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MetodaZaokr',
      enum: MetodaZaokr,
      
    },
    zaokrNaSumK : {
      key: 'zaokrNaSumK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },

    zauctovani : {
      key: 'zauctovani',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFFormaUhradyZauctovani'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}