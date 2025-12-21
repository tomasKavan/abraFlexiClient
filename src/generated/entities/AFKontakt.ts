import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStat } from './AFStat.js'
import { AFRegion } from './AFRegion.js'
import { AFAdresar } from './AFAdresar.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFPriloha } from './AFPriloha.js'
import { AFUdalost } from './AFUdalost.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFKontakt extends AFEntity {
  static EntityPath: string = 'kontakt'
  static EntityName: string = 'Kontakty'
  static EntityType: string = 'ADR_KONTAKT'

  // ID (db: IdKontakt) - ID)
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
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string | null
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string | null
  // Oslovení (db: Osloveni) - Oslovení)
  osloveni?: string | null
  // Titul (db: Titul) - Titul)
  titul?: string | null
  // Titul za jménem (db: TitulZa) - Titul za jménem)
  titulZa?: string | null
  // Funkce (db: Funkce) - Funkce)
  funkce?: string | null
  // Oddělení (db: Oddeleni) - Oddělení)
  oddeleni?: string | null
  // Primární kontakt (db: Primarni) - Primární kontakt)
  primarni?: boolean | null
  // Odesílat faktury (db: OdesilatFak) - Odesílat faktury)
  odesilatFak?: boolean | null
  // Odesílat objednávky (db: OdesilatObj) - Odesílat objednávky)
  odesilatObj?: boolean | null
  // Odesílat nabídky (db: OdesilatNab) - Odesílat nabídky)
  odesilatNab?: boolean | null
  // Odesílat poptávky (db: OdesilatPpt) - Odesílat poptávky)
  odesilatPpt?: boolean | null
  // Odesílat skladové doklady (db: OdesilatSkl) - Odesílat skladové doklady)
  odesilatSkl?: boolean | null
  // Odesílat pokladní doklady (db: OdesilatPok) - Odesílat pokladní doklady)
  odesilatPok?: boolean | null
  // Datum narození (db: DatNaroz) - Datum narození)
  datNaroz?: Date | null
  // Rodné číslo (db: RodCis) - Rodné číslo)
  rodCis?: string | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Uživatelské jméno (db: Username) - Uživatelské jméno)
  username?: string | null
  // Heslo (db: Password) - Heslo)
  password?: string | null
  // Příznak zablokování autentizace (db: Blocked) - Příznak zablokování autentizace)
  blocked?: boolean | null
  // Důvod zablokování autentizace (db: BlockedText) - Důvod zablokování autentizace)
  blockedText?: string | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: AFUzivatel | null
  // Vytvořil (db: IdCreatedBy) - Vytvořil)
  createdBy?: AFUzivatel | null

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
    password : {
      key: 'password',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    blocked : {
      key: 'blocked',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    blockedText : {
      key: 'blockedText',
      type: PropertyType.String,
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
      maxLength: 20,
      
    },
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
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