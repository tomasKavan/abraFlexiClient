import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFPrikazKUhrade } from './AFPrikazKUhrade'
import { AFStat } from './AFStat'
import { AFMena } from './AFMena'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { ElPrikazPoplatek } from '../AFEntityEnums'

export class AFPrikazKInkasuPolozka extends AFEntity {
  static EntityPath: string = 'prikaz-k-inkasu-polozka'
  static EntityName: string = 'Položka inkasa'
  static EntityType: string = 'PRIKAZ_K_INKASU_POLOZKA'

  // ID (db: IdPolPrikazUhr) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Číslo účtu příjemce (db: Buc) - Číslo účtu příjemce)
  buc?: string
  // BIC (db: Bic) - BIC)
  bic?: string
  // IBAN (db: Iban) - IBAN)
  iban?: string
  // Název banky (db: NazBanky) - Název)
  nazBanky?: string
  // Město (db: MestoBanky) - Město)
  mestoBanky?: string
  // PSČ (db: PscBanky) - PSČ)
  pscBanky?: string
  // Ulice (db: UliceBanky) - Ulice)
  uliceBanky?: string
  // Název příjemce (db: NazPrijem) - Název příjemce)
  nazPrijem?: string
  // Město (db: MestoPrijem) - Město)
  mestoPrijem?: string
  // PSČ (db: PscPrijem) - PSČ)
  pscPrijem?: string
  // Ulice (db: UlicePrijem) - Ulice)
  ulicePrijem?: string
  // Částka (db: Castka) - Částka)
  castka?: Big
  // Var. sym. (db: VarSymPrijem) - Variabilní symbol)
  varSymPrijem?: string
  // Spec. sym. (db: SpecSymPrijem) - Specifický symbol)
  specSymPrijem?: string
  // Variab. symbol příkazce (db: VarSymPrikaz) - Variab. symbol příkazce)
  varSymPrikaz?: string
  // Specif. symbol příkazce (db: SpecSymPrikaz) - Specif. symbol příkazce)
  specSymPrikaz?: string
  // Kód / číslo dokladu (db: Kod) - Kód / číslo dokladu)
  kod?: string
  // Splatnost (db: DatSplat) - Splatnost)
  datSplat?: Date
  // Popis (db: Popis) - Popis)
  popis?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Kontakt (db: Kontakt) - Kontakt)
  kontakt?: string
  // Plátce poplatků (db: PoplatekK) - Plátce poplatků)
  poplatekK?: ElPrikazPoplatek
  // Konst. sym. (db: KonSym) - Konstantní symbol)
  konSym?: string
  // ID transakce v bance (db: TransakceVBanceId) - ID transakce v bance)
  transakceVBanceId?: string
  // Dat. splat. příkazu (db: ) - Dat. splat. příkazu)
  datSplatPrik?: Date
  // Příkaz (db: IdPrikazUhr) - Příkaz)
  prikaz?: AFPrikazKUhrade
  // Pošt. stát (db: IdStatuPrijem) - Stát)
  faStat?: AFStat
  // Stát (db: IdStatuBanky) - Stát)
  baStat?: AFStat
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Kód banky (db: IdSmerKod) - Kód banky)
  smerKod?: AFPenezniUstav
  // Doklad faktury (db: IdPrimDokl) - Doklad faktury)
  doklFak?: any

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
    buc : {
      key: 'buc',
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
    iban : {
      key: 'iban',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazBanky : {
      key: 'nazBanky',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mestoBanky : {
      key: 'mestoBanky',
      type: PropertyType.String,
      isArray: false,
      
    },
    pscBanky : {
      key: 'pscBanky',
      type: PropertyType.String,
      isArray: false,
      
    },
    uliceBanky : {
      key: 'uliceBanky',
      type: PropertyType.String,
      isArray: false,
      
    },
    nazPrijem : {
      key: 'nazPrijem',
      type: PropertyType.String,
      isArray: false,
      
    },
    mestoPrijem : {
      key: 'mestoPrijem',
      type: PropertyType.String,
      isArray: false,
      
    },
    pscPrijem : {
      key: 'pscPrijem',
      type: PropertyType.String,
      isArray: false,
      
    },
    ulicePrijem : {
      key: 'ulicePrijem',
      type: PropertyType.String,
      isArray: false,
      
    },
    castka : {
      key: 'castka',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    varSymPrijem : {
      key: 'varSymPrijem',
      type: PropertyType.String,
      isArray: false,
      
    },
    specSymPrijem : {
      key: 'specSymPrijem',
      type: PropertyType.String,
      isArray: false,
      
    },
    varSymPrikaz : {
      key: 'varSymPrikaz',
      type: PropertyType.String,
      isArray: false,
      
    },
    specSymPrikaz : {
      key: 'specSymPrikaz',
      type: PropertyType.String,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      
    },
    datSplat : {
      key: 'datSplat',
      type: PropertyType.Date,
      isArray: false,
      
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
    kontakt : {
      key: 'kontakt',
      type: PropertyType.String,
      isArray: false,
      
    },
    poplatekK : {
      key: 'poplatekK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ElPrikazPoplatek',
      enum: ElPrikazPoplatek,
      
    },
    konSym : {
      key: 'konSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    transakceVBanceId : {
      key: 'transakceVBanceId',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    datSplatPrik : {
      key: 'datSplatPrik',
      type: PropertyType.Date,
      isArray: false,
      
    },
    prikaz : {
      key: 'prikaz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPrikazKUhrade',
      
    },
    faStat : {
      key: 'faStat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    baStat : {
      key: 'baStat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    smerKod : {
      key: 'smerKod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPenezniUstav',
      maxLength: 20,
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}