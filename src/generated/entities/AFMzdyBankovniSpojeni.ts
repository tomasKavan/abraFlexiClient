import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStat } from './AFStat.js'
import { AFRegion } from './AFRegion.js'
import { AFAdresar } from './AFAdresar.js'
import { AFPenezniUstav } from './AFPenezniUstav.js'
import { AFKonstSymbol } from './AFKonstSymbol.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFMzdyBankovniSpojeni extends AFEntity {
  static EntityPath: string = 'mzdy-bankovni-spojeni'
  static EntityName: string = 'Bankovní spojení'
  static EntityType: string = 'MZDY_BANKOVNI_SPOJENI'

  // ID (db: IdBanSpoj) - ID)
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
  // Popis (db: Popis) - Popis)
  popis?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Název banky (db: NazBanky) - Název)
  nazBanky?: string
  // Číslo bank. účtu (db: Buc) - Číslo účtu)
  buc?: string
  // IBAN (db: Iban) - IBAN)
  iban?: string
  // BIC (db: Bic) - BIC)
  bic?: string
  // Specifický symbol (db: SpecSym) - Specifický symbol)
  specSym?: string
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string
  // Primární (db: Primarni) - Primární)
  primarni?: boolean
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar
  // Kód banky (db: IdSmerKod) - Kód banky)
  smerKod?: AFPenezniUstav
  // Konstantní symbol (db: IdKonSym) - Konstantní symbol)
  konSym?: AFKonstSymbol
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka

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
    nazBanky : {
      key: 'nazBanky',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    buc : {
      key: 'buc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    iban : {
      key: 'iban',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    bic : {
      key: 'bic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    specSym : {
      key: 'specSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    primarni : {
      key: 'primarni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    smerKod : {
      key: 'smerKod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPenezniUstav',
      maxLength: 20,
      
    },
    konSym : {
      key: 'konSym',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKonstSymbol',
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}