import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek.js'
import { AFMzdyBankovniSpojeni } from './AFMzdyBankovniSpojeni.js'
import { AFTypZavazku } from './AFTypZavazku.js'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypSlozky, SkupinaSlozky, ZpusobPlatby } from '../AFEntityEnums.js'

export class AFSrazka extends AFEntity {
  static EntityPath: string = 'srazka'
  static EntityName: string = 'Srážka'
  static EntityType: string = 'SRAZKA'

  // ID (db: IdSrazka) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Přednostní srážka (db: Prednostni) - Přednostní srážka)
  prednostni?: boolean | null
  // Pořadí srážky (db: Poradi) - Pořadí srážky)
  poradi?: number | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Typ složky (db: TypSlozkyK) - Typ složky)
  typSlozkyK?: TypSlozky | null
  // Skupina složky (db: SkupSlozkyK) - Skupina složky)
  skupSlozkyK?: SkupinaSlozky | null
  // Srážet od (db: SrazkaOd) - Srážet od)
  srazkaOd?: Date | null
  // Srážet do (db: SrazkaDo) - Srážet do)
  srazkaDo?: Date | null
  // Deponovat do (db: DeponovatDo) - Deponovat do)
  deponovatDo?: Date | null
  // Procento / konstanta (db: ProcMzd) - Procento / konstanta)
  procMzd?: Big | null
  // Způsob platby (db: ZpusobPlatbyK) - Způsob platby)
  zpusobPlatbyK?: ZpusobPlatby | null
  // Částka (db: Castka) - Částka)
  castka?: Big | null
  // Počáteční stav (db: Pocatek) - Počáteční stav)
  pocatek?: Big | null
  // Celkem (db: Celkem) - Celkem)
  celkem?: Big | null
  // Zbývá (db: Zbyva) - Zbývá)
  zbyva?: Big | null
  // K datu (db: Kdatu) - K datu)
  kdatu?: Date | null
  // Den splatnosti (db: Splatnost) - Den splatnosti)
  splatnost?: number | null
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka | null
  // Druh srážky (db: IdCisMzdSloz) - Druh srážky)
  cisMzdSloz?: AFCiselnikMzdovychSlozek | null
  // Bankovní spojení (db: IdBanSpoj) - Bankovní spojení)
  banSpoj?: AFMzdyBankovniSpojeni | null
  // Typ závazku (db: IdTypOstZav) - Typ závazku)
  typOstZav?: AFTypZavazku | null
  // Typ interního dokladu (db: IdTypIntDokl) - Typ interního dokladu)
  typIntDokl?: AFTypInternihoDokladu | null

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