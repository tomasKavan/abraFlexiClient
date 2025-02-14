import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFSkupinaStitku } from './AFSkupinaStitku.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFStitek extends AFEntity {
  static EntityPath: string = 'stitek'
  static EntityName: string = 'Štítky'
  static EntityType: string = 'STITEK'

  // ID (db: IdVybKlice) - ID)
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
  // Adresář (db: VsbAdr) - Adresář)
  vsbAdr?: boolean
  // Ceník (db: VsbKatalog) - Ceník)
  vsbKatalog?: boolean
  // Sklad (db: VsbSkl) - Sklad)
  vsbSkl?: boolean
  // Vydané faktury (db: VsbFav) - Vydané faktury)
  vsbFav?: boolean
  // Pohledávky (db: VsbPhl) - Pohledávky)
  vsbPhl?: boolean
  // Přijaté faktury (db: VsbFap) - Přijaté faktury)
  vsbFap?: boolean
  // Závazky (db: VsbZav) - Závazky)
  vsbZav?: boolean
  // Banka (db: VsbBan) - Banka)
  vsbBan?: boolean
  // Pokladna (db: VsbPok) - Pokladna)
  vsbPok?: boolean
  // Interní doklady (db: VsbInt) - Interní doklady)
  vsbInt?: boolean
  // Majetek (db: VsbMaj) - Majetek)
  vsbMaj?: boolean
  // Objednávky přijaté (db: VsbObp) - Objednávky přijaté)
  vsbObp?: boolean
  // Nabídky vydané (db: VsbNav) - Nabídky vydané)
  vsbNav?: boolean
  // Poptávky přijaté (db: VsbPpp) - Poptávky přijaté)
  vsbPpp?: boolean
  // Objednávky vydané (db: VsbObv) - Objednávky vydané)
  vsbObv?: boolean
  // Nabídky přijaté (db: VsbNap) - Nabídky přijaté)
  vsbNap?: boolean
  // Poptávky vydané (db: VsbPpv) - Poptávky vydané)
  vsbPpv?: boolean
  // Mzdy (db: VsbMzd) - Mzdy)
  vsbMzd?: boolean
  // Číselníky (db: VsbCis) - Číselníky)
  vsbCis?: boolean
  // Skupina štítků (db: IdSkupVybKlic) - Skupina štítků)
  skupVybKlic?: AFSkupinaStitku

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
    vsbAdr : {
      key: 'vsbAdr',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbKatalog : {
      key: 'vsbKatalog',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbSkl : {
      key: 'vsbSkl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbFav : {
      key: 'vsbFav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbPhl : {
      key: 'vsbPhl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbFap : {
      key: 'vsbFap',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbZav : {
      key: 'vsbZav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbBan : {
      key: 'vsbBan',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbPok : {
      key: 'vsbPok',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbInt : {
      key: 'vsbInt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbMaj : {
      key: 'vsbMaj',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbObp : {
      key: 'vsbObp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbNav : {
      key: 'vsbNav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbPpp : {
      key: 'vsbPpp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbObv : {
      key: 'vsbObv',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbNap : {
      key: 'vsbNap',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbPpv : {
      key: 'vsbPpv',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbMzd : {
      key: 'vsbMzd',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbCis : {
      key: 'vsbCis',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    skupVybKlic : {
      key: 'skupVybKlic',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaStitku',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}