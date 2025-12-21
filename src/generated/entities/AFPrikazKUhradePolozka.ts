import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFPrikazKUhrade } from './AFPrikazKUhrade.js'
import { AFStat } from './AFStat.js'
import { AFMena } from './AFMena.js'
import { AFPenezniUstav } from './AFPenezniUstav.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { ElPrikazPoplatek } from '../AFEntityEnums.js'

export class AFPrikazKUhradePolozka extends AFEntity {
  static EntityPath: string = 'prikaz-k-uhrade-polozka'
  static EntityName: string = 'Položka příkazu k úhradě'
  static EntityType: string = 'PRIKAZ_K_UHRADE_POLOZKA'

  // ID (db: IdPolPrikazUhr) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Číslo účtu příjemce (db: Buc) - Číslo účtu příjemce)
  buc?: string | null
  // BIC (db: Bic) - BIC)
  bic?: string | null
  // IBAN (db: Iban) - IBAN)
  iban?: string | null
  // Název banky (db: NazBanky) - Název)
  nazBanky?: string | null
  // Město (db: MestoBanky) - Město)
  mestoBanky?: string | null
  // PSČ (db: PscBanky) - PSČ)
  pscBanky?: string | null
  // Ulice (db: UliceBanky) - Ulice)
  uliceBanky?: string | null
  // Název příjemce (db: NazPrijem) - Název příjemce)
  nazPrijem?: string | null
  // Město (db: MestoPrijem) - Město)
  mestoPrijem?: string | null
  // PSČ (db: PscPrijem) - PSČ)
  pscPrijem?: string | null
  // Ulice (db: UlicePrijem) - Ulice)
  ulicePrijem?: string | null
  // Částka (db: Castka) - Částka)
  castka?: Big | null
  // Var. sym. (db: VarSymPrijem) - Variabilní symbol)
  varSymPrijem?: string | null
  // Spec. sym. (db: SpecSymPrijem) - Specifický symbol)
  specSymPrijem?: string | null
  // Variab. symbol příkazce (db: VarSymPrikaz) - Variab. symbol příkazce)
  varSymPrikaz?: string | null
  // Specif. symbol příkazce (db: SpecSymPrikaz) - Specif. symbol příkazce)
  specSymPrikaz?: string | null
  // Kód / číslo dokladu (db: Kod) - Kód / číslo dokladu)
  declare kod?: string | null
  // Splatnost (db: DatSplat) - Splatnost)
  datSplat?: Date | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Kontakt (db: Kontakt) - Kontakt)
  kontakt?: string | null
  // Plátce poplatků (db: PoplatekK) - Plátce poplatků)
  poplatekK?: ElPrikazPoplatek | null
  // Konst. sym. (db: KonSym) - Konstantní symbol)
  konSym?: string | null
  // ID transakce v bance (db: TransakceVBanceId) - ID transakce v bance)
  transakceVBanceId?: string | null
  // Dat. splat. příkazu (db: ) - Dat. splat. příkazu)
  datSplatPrik?: Date | null
  // Příkaz (db: IdPrikazUhr) - Příkaz)
  prikaz?: AFPrikazKUhrade | null
  // Pošt. stát (db: IdStatuPrijem) - Stát)
  faStat?: AFStat | null
  // Stát (db: IdStatuBanky) - Stát)
  baStat?: AFStat | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Kód banky (db: IdSmerKod) - Kód banky)
  smerKod?: AFPenezniUstav | null
  // Doklad faktury (db: IdPrimDokl) - Doklad faktury)
  doklFak?: any | null

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