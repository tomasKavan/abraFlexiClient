import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFUcet } from './AFUcet'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { KodPlneni } from '../AFEntityEnums'

export class AFPredpisZauctovani extends AFEntity {
  static EntityPath: string = 'predpis-zauctovani'
  static EntityName: string = 'Předpisy zaúčtování'
  static EntityType: string = 'PREDPIS_ZAUCTOVANI'

  // ID (db: IdTypUcOp) - ID)
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
  // Platí od (db: IdUcetObdobiOd) - Platí od)
  ucetObdobiOd?: AFUcetniObdobi | null
  // Platí do (db: IdUcetObdobiDo) - Platí do)
  ucetObdobiDo?: AFUcetniObdobi | null
  // Faktury vydané (db: ModulFav) - vydané)
  modulFav?: boolean | null
  // Faktury přijaté (db: ModulFap) - přijaté)
  modulFap?: boolean | null
  // Ostatní pohledávky (db: ModulPhl) - pohledávky)
  modulPhl?: boolean | null
  // Ostatní závazky (db: ModulZav) - závazky)
  modulZav?: boolean | null
  // Uplatnění daně - závazky (db: ModulTxz) - závazky)
  modulTxz?: boolean | null
  // Banka - příjem (db: ModulBanP) - příjem)
  modulBanP?: boolean | null
  // Banka - výdej (db: ModulBanV) - výdej)
  modulBanV?: boolean | null
  // Pokladna - příjem (db: ModulPokP) - příjem)
  modulPokP?: boolean | null
  // Pokladna - výdej (db: ModulPokV) - výdej)
  modulPokV?: boolean | null
  // Sklad - příjem (db: ModulSklP) - příjem)
  modulSklP?: boolean | null
  // Sklad - výdej (db: ModulSklV) - výdej)
  modulSklV?: boolean | null
  // Interní doklady (db: ModulInt) - Interní doklady)
  modulInt?: boolean | null
  // Kód plnění pro DPH (db: KodPlneniK) - Kód plnění pro DPH)
  kodPlneniK?: KodPlneni | null
  // Účet pro příjem [DAL] (db: IdProtiUcetP) - Účet pro příjem [DAL])
  protiUcetPrijem?: AFUcet | null
  // Účet pro výdej [MD] (db: IdProtiUcetV) - Účet pro výdej [MD])
  protiUcetVydej?: AFUcet | null
  // Účet DPH snížená sazba (db: IdDphSnizUcet) - DPH snížená)
  dphSnizUcet?: AFUcet | null
  // Účet DPH 2. snížená sazba (db: IdDphSniz2Ucet) - DPH 2. snížená)
  dphSniz2Ucet?: AFUcet | null
  // Účet DPH základní sazba (db: IdDphZaklUcet) - DPH základní)
  dphZaklUcet?: AFUcet | null

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
    ucetObdobiOd : {
      key: 'ucetObdobiOd',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    ucetObdobiDo : {
      key: 'ucetObdobiDo',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    modulFav : {
      key: 'modulFav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulFap : {
      key: 'modulFap',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulPhl : {
      key: 'modulPhl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulZav : {
      key: 'modulZav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulTxz : {
      key: 'modulTxz',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulBanP : {
      key: 'modulBanP',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulBanV : {
      key: 'modulBanV',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulPokP : {
      key: 'modulPokP',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulPokV : {
      key: 'modulPokV',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulSklP : {
      key: 'modulSklP',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulSklV : {
      key: 'modulSklV',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulInt : {
      key: 'modulInt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kodPlneniK : {
      key: 'kodPlneniK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'KodPlneni',
      enum: KodPlneni,
      
    },
    protiUcetPrijem : {
      key: 'protiUcetPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    protiUcetVydej : {
      key: 'protiUcetVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphSnizUcet : {
      key: 'dphSnizUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphSniz2Ucet : {
      key: 'dphSniz2Ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphZaklUcet : {
      key: 'dphZaklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}