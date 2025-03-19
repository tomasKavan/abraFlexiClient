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
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Platí od (db: IdUcetObdobiOd) - Platí od)
  ucetObdobiOd?: AFUcetniObdobi
  // Platí do (db: IdUcetObdobiDo) - Platí do)
  ucetObdobiDo?: AFUcetniObdobi
  // Faktury vydané (db: ModulFav) - vydané)
  modulFav?: boolean
  // Faktury přijaté (db: ModulFap) - přijaté)
  modulFap?: boolean
  // Ost. pohledávky (db: ModulPhl) - pohledávky)
  modulPhl?: boolean
  // Ost. závazky (db: ModulZav) - závazky)
  modulZav?: boolean
  // Banka - příjem (db: ModulBanP) - příjem)
  modulBanP?: boolean
  // Banka - výdej (db: ModulBanV) - výdej)
  modulBanV?: boolean
  // Pokladna - příjem (db: ModulPokP) - příjem)
  modulPokP?: boolean
  // Pokladna - výdej (db: ModulPokV) - výdej)
  modulPokV?: boolean
  // Sklad - příjem (db: ModulSklP) - příjem)
  modulSklP?: boolean
  // Sklad - výdej (db: ModulSklV) - výdej)
  modulSklV?: boolean
  // Interní doklady (db: ModulInt) - Interní doklady)
  modulInt?: boolean
  // Kód plnění pro DPH (db: KodPlneniK) - Kód plnění pro DPH)
  kodPlneniK?: KodPlneni
  // Účet pro příjem [DAL] (db: IdProtiUcetP) - Účet pro příjem [DAL])
  protiUcetPrijem?: AFUcet
  // Účet pro výdej [MD] (db: IdProtiUcetV) - Účet pro výdej [MD])
  protiUcetVydej?: AFUcet
  // Účet DPH sníž. (db: IdDphSnizUcet) - DPH snížená)
  dphSnizUcet?: AFUcet
  // Účet DPH 2. sníž. (db: IdDphSniz2Ucet) - DPH 2. snížená)
  dphSniz2Ucet?: AFUcet
  // Účet DPH zákl. (db: IdDphZaklUcet) - DPH základní)
  dphZaklUcet?: AFUcet

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