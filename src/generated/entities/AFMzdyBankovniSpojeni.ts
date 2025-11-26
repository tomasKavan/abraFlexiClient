import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFAdresar } from './AFAdresar'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFMzdyBankovniSpojeni extends AFEntity {
  static EntityPath: string = 'mzdy-bankovni-spojeni'
  static EntityName: string = 'Bankovní spojení'
  static EntityType: string = 'MZDY_BANKOVNI_SPOJENI'

  // ID (db: IdBanSpoj) - ID)
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
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Název banky (db: NazBanky) - Název)
  nazBanky?: string | null
  // Číslo bank. účtu (db: Buc) - Číslo účtu)
  buc?: string | null
  // IBAN (db: Iban) - IBAN)
  iban?: string | null
  // BIC (db: Bic) - BIC)
  bic?: string | null
  // Specifický symbol (db: SpecSym) - Specifický symbol)
  specSym?: string | null
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string | null
  // Primární (db: Primarni) - Primární)
  primarni?: boolean | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Kód banky (db: IdSmerKod) - Kód banky)
  smerKod?: AFPenezniUstav | null
  // Konstantní symbol (db: IdKonSym) - Konstantní symbol)
  konSym?: AFKonstSymbol | null
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka | null

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