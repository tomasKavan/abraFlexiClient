import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFSkupinaStitku } from './AFSkupinaStitku'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFStitek extends AFEntity {
  static EntityPath: string = 'stitek'
  static EntityName: string = 'Štítky'
  static EntityType: string = 'STITEK'

  // ID (db: IdVybKlice) - ID)
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
  // Adresář (db: VsbAdr) - Adresář)
  vsbAdr?: boolean | null
  // Ceník (db: VsbKatalog) - Ceník)
  vsbKatalog?: boolean | null
  // Sklad (db: VsbSkl) - Sklad)
  vsbSkl?: boolean | null
  // Vydané faktury (db: VsbFav) - Vydané faktury)
  vsbFav?: boolean | null
  // Pohledávky (db: VsbPhl) - Pohledávky)
  vsbPhl?: boolean | null
  // Přijaté faktury (db: VsbFap) - Přijaté faktury)
  vsbFap?: boolean | null
  // Závazky (db: VsbZav) - Závazky)
  vsbZav?: boolean | null
  // Uplatnění daně - pohledávky (db: VsbTxp) - Uplatnění daně - pohledávky)
  vsbTxp?: boolean | null
  // Uplatnění daně - závazky (db: VsbTxz) - Uplatnění daně - závazky)
  vsbTxz?: boolean | null
  // Banka (db: VsbBan) - Banka)
  vsbBan?: boolean | null
  // Pokladna (db: VsbPok) - Pokladna)
  vsbPok?: boolean | null
  // Interní doklady (db: VsbInt) - Interní doklady)
  vsbInt?: boolean | null
  // Majetek (db: VsbMaj) - Majetek)
  vsbMaj?: boolean | null
  // Objednávky přijaté (db: VsbObp) - Objednávky přijaté)
  vsbObp?: boolean | null
  // Nabídky vydané (db: VsbNav) - Nabídky vydané)
  vsbNav?: boolean | null
  // Poptávky přijaté (db: VsbPpp) - Poptávky přijaté)
  vsbPpp?: boolean | null
  // Objednávky vydané (db: VsbObv) - Objednávky vydané)
  vsbObv?: boolean | null
  // Nabídky přijaté (db: VsbNap) - Nabídky přijaté)
  vsbNap?: boolean | null
  // Poptávky vydané (db: VsbPpv) - Poptávky vydané)
  vsbPpv?: boolean | null
  // Mzdy (db: VsbMzd) - Mzdy)
  vsbMzd?: boolean | null
  // Číselníky (db: VsbCis) - Číselníky)
  vsbCis?: boolean | null
  // Skupina štítků (db: IdSkupVybKlic) - Skupina štítků)
  skupVybKlic?: AFSkupinaStitku | null

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
    vsbTxp : {
      key: 'vsbTxp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbTxz : {
      key: 'vsbTxz',
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