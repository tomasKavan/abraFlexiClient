import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFText extends AFEntity {
  static EntityPath: string = 'text'
  static EntityName: string = 'Předdefinované texty'
  static EntityType: string = 'TEXT'

  // ID (db: IdText) - ID)
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Text (db: Popis) - Text)
  popis?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Vydané faktury (db: VsbFav) - Vydané faktury)
  vsbFav?: boolean
  // Pohledávky (db: VsbPhl) - Pohledávky)
  vsbPhl?: boolean
  // Přijaté faktury (db: VsbFap) - Přijaté faktury)
  vsbFap?: boolean
  // Závazky (db: VsbZav) - Závazky)
  vsbZav?: boolean
  // Sklad (db: VsbSkl) - Sklad)
  vsbSkl?: boolean
  // Banka (db: VsbBan) - Banka)
  vsbBan?: boolean
  // Pokladna (db: VsbPok) - Pokladna)
  vsbPok?: boolean
  // Interní doklady (db: VsbInt) - Interní doklady)
  vsbInt?: boolean
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
  // Popis (db: VsbPopis) - Popis)
  vsbPopis?: boolean
  // Poznámka (db: VsbPoznamka) - Poznámka)
  vsbPoznamka?: boolean
  // Doprava a vyskladnění (db: VsbDoprava) - Doprava a vyskladnění)
  vsbDoprava?: boolean
  // Úvod (db: VsbUvod) - Úvod)
  vsbUvod?: boolean
  // Závěr (db: VsbZaver) - Závěr)
  vsbZaver?: boolean
  // Název položky (db: VsbNazevPol) - Název položky)
  vsbNazevPol?: boolean
  // Poznámka položky (db: VsbPoznamPol) - Poznámka položky)
  vsbPoznamPol?: boolean

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
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
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
    vsbSkl : {
      key: 'vsbSkl',
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
    vsbPopis : {
      key: 'vsbPopis',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbPoznamka : {
      key: 'vsbPoznamka',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbDoprava : {
      key: 'vsbDoprava',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbUvod : {
      key: 'vsbUvod',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbZaver : {
      key: 'vsbZaver',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbNazevPol : {
      key: 'vsbNazevPol',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsbPoznamPol : {
      key: 'vsbPoznamPol',
      type: PropertyType.Logic,
      isArray: false,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}