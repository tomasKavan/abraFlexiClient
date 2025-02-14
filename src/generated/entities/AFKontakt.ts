import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStat } from './AFStat.js'
import { AFRegion } from './AFRegion.js'
import { AFAdresar } from './AFAdresar.js'
import { AFPriloha } from './AFPriloha.js'
import { AFUdalost } from './AFUdalost.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFKontakt extends AFEntity {
  static EntityPath: string = 'kontakt'
  static EntityName: string = 'Kontakty'
  static EntityType: string = 'ADR_KONTAKT'

  // ID (db: IdKontakt) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Ulice (db: Ulice) - Ulice)
  ulice?: string
  // Město (db: Mesto) - Město)
  mesto?: string
  // PSČ (db: Psc) - PSČ)
  psc?: string
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion
  // Telefon (db: Tel) - Telefon)
  tel?: string
  // Mobil (db: Mobil) - Mobil)
  mobil?: string
  // Fax (db: Fax) - Fax)
  fax?: string
  // E-mail (db: Email) - E-mail)
  email?: string
  // WWW (db: Www) - WWW)
  www?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string
  // Oslovení (db: Osloveni) - Oslovení)
  osloveni?: string
  // Titul (db: Titul) - Titul)
  titul?: string
  // Titul za jménem (db: TitulZa) - Titul za jménem)
  titulZa?: string
  // Funkce (db: Funkce) - Funkce)
  funkce?: string
  // Oddělení (db: Oddeleni) - Oddělení)
  oddeleni?: string
  // Primární kontakt (db: Primarni) - Primární kontakt)
  primarni?: boolean
  // Odesílat faktury (db: OdesilatFak) - Odesílat faktury)
  odesilatFak?: boolean
  // Odesílat objednávky (db: OdesilatObj) - Odesílat objednávky)
  odesilatObj?: boolean
  // Odesílat nabídky (db: OdesilatNab) - Odesílat nabídky)
  odesilatNab?: boolean
  // Odesílat poptávky (db: OdesilatPpt) - Odesílat poptávky)
  odesilatPpt?: boolean
  // Odesílat skladové doklady (db: OdesilatSkl) - Odesílat skladové doklady)
  odesilatSkl?: boolean
  // Odesílat pokladní doklady (db: OdesilatPok) - Odesílat pokladní doklady)
  odesilatPok?: boolean
  // Datum narození (db: DatNaroz) - Datum narození)
  datNaroz?: Date
  // Rodné číslo (db: RodCis) - Rodné číslo)
  rodCis?: string
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Uživatelské jméno (db: Username) - Uživatelské jméno)
  username?: string
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
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
    prijmeni : {
      key: 'prijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    jmeno : {
      key: 'jmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    osloveni : {
      key: 'osloveni',
      type: PropertyType.String,
      isArray: false,
      
    },
    titul : {
      key: 'titul',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    titulZa : {
      key: 'titulZa',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    funkce : {
      key: 'funkce',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    oddeleni : {
      key: 'oddeleni',
      type: PropertyType.String,
      isArray: false,
      
    },
    primarni : {
      key: 'primarni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odesilatFak : {
      key: 'odesilatFak',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odesilatObj : {
      key: 'odesilatObj',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odesilatNab : {
      key: 'odesilatNab',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odesilatPpt : {
      key: 'odesilatPpt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odesilatSkl : {
      key: 'odesilatSkl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odesilatPok : {
      key: 'odesilatPok',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datNaroz : {
      key: 'datNaroz',
      type: PropertyType.Date,
      isArray: false,
      
    },
    rodCis : {
      key: 'rodCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    username : {
      key: 'username',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },

    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUdalost'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}