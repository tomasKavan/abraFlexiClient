import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFMena } from './AFMena'
import { AFFormaUhradyZauctovani } from './AFFormaUhradyZauctovani'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { FormaUhr, MetodaZaokr, ZaokrNa } from '../AFEntityEnums'

export class AFFormaUhrady extends AFEntity {
  static EntityPath: string = 'forma-uhrady'
  static EntityName: string = 'Formy úhrady'
  static EntityType: string = 'FORMA_UHRADY'

  // ID (db: IdFormaUhradyCis) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: number | null
  // Forma úhrady (db: FormaUhrK) - Forma úhrady)
  formaUhrK?: FormaUhr | null
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big | null
  // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
  kurzMnozstvi?: Big | null
  // Limit vrácení (db: LimitVratky) - Limit vrácení)
  limitVratky?: Big | null
  // Nabízet na fakturách (db: VsbFak) - Nabízet na fakturách)
  vsbFak?: boolean | null
  // Nabízet na pokladně (db: VsbPok) - Nabízet na pokladně)
  vsbPok?: boolean | null
  // Nabízet na kase (db: VsbKasa) - Nabízet na kase)
  vsbKasa?: boolean | null
  // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
  metodaZaokrDoklK?: MetodaZaokr | null
  // Řád zaokrouhlení - Celkem (db: ZaokrNaSumK) - Celkem (řády))
  zaokrNaSumK?: ZaokrNa | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null

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