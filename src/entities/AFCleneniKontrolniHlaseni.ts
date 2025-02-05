import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPohybu } from './AFEntityEnums'

export class AFCleneniKontrolniHlaseni extends AFEntity {
  static EntityPath: string = 'cleneni-kontrolni-hlaseni'
  static EntityName: string = 'Řádky kontrolního hlášení DPH'
  static EntityType: string = 'CLEN_KON_VYK_DPH'

  // ID (db: IdClenKonVykDPH) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
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
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Vyplňovat číselný kód zboží (db: VyplnCisKod) - Vyplňovat číselný kód zboží)
  vyplnCisKod?: boolean
  // Vyplňovat druh zboží (db: VyplnDruh) - Vyplňovat druh zboží)
  vyplnDruh?: boolean
  // Zkratka XML transakce (db: KodTransakce) - Zkratka XML transakce)
  kodTransakce?: string
  // Typ pohybu (db: TypPohybuK) - Typ pohybu)
  typPohybuK?: TypPohybu
  // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
  uuid?: string
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },    vyplnCisKod : {
      key: 'vyplnCisKod',
      type: PropertyType.Logic,
      isArray: false,
      
    },    vyplnDruh : {
      key: 'vyplnDruh',
      type: PropertyType.Logic,
      isArray: false,
      
    },    kodTransakce : {
      key: 'kodTransakce',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    typPohybuK : {
      key: 'typPohybuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPohybu',
      enum: TypPohybu,
      
    },    uuid : {
      key: 'uuid',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStat,
      maxLength: 3,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}