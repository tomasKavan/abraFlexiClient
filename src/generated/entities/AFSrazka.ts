import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek'
import { AFMzdyBankovniSpojeni } from './AFMzdyBankovniSpojeni'
import { AFTypZavazku } from './AFTypZavazku'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypSlozky, SkupinaSlozky, ZpusobPlatby } from '../AFEntityEnums'

export class AFSrazka extends AFEntity {
  static EntityPath: string = 'srazka'
  static EntityName: string = 'Srážka'
  static EntityType: string = 'SRAZKA'

  // ID (db: IdSrazka) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Přednostní srážka (db: Prednostni) - Přednostní srážka)
  prednostni?: boolean
  // Pořadí srážky (db: Poradi) - Pořadí srážky)
  poradi?: number
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Typ složky (db: TypSlozkyK) - Typ složky)
  typSlozkyK?: TypSlozky
  // Skupina složky (db: SkupSlozkyK) - Skupina složky)
  skupSlozkyK?: SkupinaSlozky
  // Srážet od (db: SrazkaOd) - Srážet od)
  srazkaOd?: Date
  // Srážet do (db: SrazkaDo) - Srážet do)
  srazkaDo?: Date
  // Deponovat do (db: DeponovatDo) - Deponovat do)
  deponovatDo?: Date
  // Procento / konstanta (db: ProcMzd) - Procento / konstanta)
  procMzd?: Big
  // Způsob platby (db: ZpusobPlatbyK) - Způsob platby)
  zpusobPlatbyK?: ZpusobPlatby
  // Částka (db: Castka) - Částka)
  castka?: Big
  // Počáteční stav (db: Pocatek) - Počáteční stav)
  pocatek?: Big
  // Celkem (db: Celkem) - Celkem)
  celkem?: Big
  // Zbývá (db: Zbyva) - Zbývá)
  zbyva?: Big
  // K datu (db: Kdatu) - K datu)
  kdatu?: Date
  // Den splatnosti (db: Splatnost) - Den splatnosti)
  splatnost?: number
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka
  // Druh srážky (db: IdCisMzdSloz) - Druh srážky)
  cisMzdSloz?: AFCiselnikMzdovychSlozek
  // Bankovní spojení (db: IdBanSpoj) - Bankovní spojení)
  banSpoj?: AFMzdyBankovniSpojeni
  // Typ závazku (db: IdTypOstZav) - Typ závazku)
  typOstZav?: AFTypZavazku
  // Typ interního dokladu (db: IdTypIntDokl) - Typ interního dokladu)
  typIntDokl?: AFTypInternihoDokladu

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
    prednostni : {
      key: 'prednostni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    poradi : {
      key: 'poradi',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    typSlozkyK : {
      key: 'typSlozkyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSlozky',
      enum: TypSlozky,
      
    },
    skupSlozkyK : {
      key: 'skupSlozkyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'SkupinaSlozky',
      enum: SkupinaSlozky,
      
    },
    srazkaOd : {
      key: 'srazkaOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    srazkaDo : {
      key: 'srazkaDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    deponovatDo : {
      key: 'deponovatDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    procMzd : {
      key: 'procMzd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 10,
      
    },
    zpusobPlatbyK : {
      key: 'zpusobPlatbyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZpusobPlatby',
      enum: ZpusobPlatby,
      
    },
    castka : {
      key: 'castka',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    pocatek : {
      key: 'pocatek',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    celkem : {
      key: 'celkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zbyva : {
      key: 'zbyva',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    kdatu : {
      key: 'kdatu',
      type: PropertyType.Date,
      isArray: false,
      
    },
    splatnost : {
      key: 'splatnost',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },
    cisMzdSloz : {
      key: 'cisMzdSloz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCiselnikMzdovychSlozek',
      
    },
    banSpoj : {
      key: 'banSpoj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMzdyBankovniSpojeni',
      
    },
    typOstZav : {
      key: 'typOstZav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    typIntDokl : {
      key: 'typIntDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}