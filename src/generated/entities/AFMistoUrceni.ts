import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFAdresar } from './AFAdresar'
import { AFKontakt } from './AFKontakt'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFMistoUrceni extends AFEntity {
  static EntityPath: string = 'misto-urceni'
  static EntityName: string = 'Místa určení'
  static EntityType: string = 'MISTO_URCENI'

  // ID (db: IdMur) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Ulice (db: Ulice) - Ulice)
  ulice?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion | null
  // Telefon (db: Tel) - Telefon)
  tel?: string | null
  // Mobil (db: Mobil) - Mobil)
  mobil?: string | null
  // Fax (db: Fax) - Fax)
  fax?: string | null
  // E-mail (db: Email) - E-mail)
  email?: string | null
  // WWW (db: Www) - WWW)
  www?: string | null
  // EAN (db: EanKod) - EAN)
  eanKod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Název - druhá řádka (db: Nazev2) - Název - druhá řádka)
  nazev2?: string | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Primární místo určení (db: Primarni) - Primární místo určení)
  primarni?: boolean | null
  // Místo plnění (db: MistoPlneni) - Místo plnění)
  mistoPlneni?: boolean | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: any | null
  // Vytvořil (db: IdCreatedBy) - Vytvořil)
  createdBy?: any | null

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
    ulice : {
      key: 'ulice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    psc : {
      key: 'psc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    region : {
      key: 'region',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
    },
    tel : {
      key: 'tel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mobil : {
      key: 'mobil',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    fax : {
      key: 'fax',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    email : {
      key: 'email',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    www : {
      key: 'www',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    eanKod : {
      key: 'eanKod',
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
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    nazev2 : {
      key: 'nazev2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    primarni : {
      key: 'primarni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    mistoPlneni : {
      key: 'mistoPlneni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    createdDate : {
      key: 'createdDate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    kontaktOsoba : {
      key: 'kontaktOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKontakt',
      
    },
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}