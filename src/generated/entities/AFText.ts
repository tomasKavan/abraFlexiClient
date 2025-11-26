import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFText extends AFEntity {
  static EntityPath: string = 'text'
  static EntityName: string = 'Předdefinované texty'
  static EntityType: string = 'TEXT'

  // ID (db: IdText) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Text (db: Popis) - Text)
  popis?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
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
  // Sklad (db: VsbSkl) - Sklad)
  vsbSkl?: boolean | null
  // Banka (db: VsbBan) - Banka)
  vsbBan?: boolean | null
  // Pokladna (db: VsbPok) - Pokladna)
  vsbPok?: boolean | null
  // Interní doklady (db: VsbInt) - Interní doklady)
  vsbInt?: boolean | null
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
  // Popis (db: VsbPopis) - Popis)
  vsbPopis?: boolean | null
  // Poznámka (db: VsbPoznamka) - Poznámka)
  vsbPoznamka?: boolean | null
  // Doprava a vyskladnění (db: VsbDoprava) - Doprava a vyskladnění)
  vsbDoprava?: boolean | null
  // Úvod (db: VsbUvod) - Úvod)
  vsbUvod?: boolean | null
  // Závěr (db: VsbZaver) - Závěr)
  vsbZaver?: boolean | null
  // Název položky (db: VsbNazevPol) - Název položky)
  vsbNazevPol?: boolean | null
  // Poznámka položky (db: VsbPoznamPol) - Poznámka položky)
  vsbPoznamPol?: boolean | null

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