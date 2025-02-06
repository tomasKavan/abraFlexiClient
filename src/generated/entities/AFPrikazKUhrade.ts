import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFMena } from './AFMena'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFPrikazKUhradePolozka } from './AFPrikazKUhradePolozka'


import { ElPrikazStav } from '../AFEntityEnums'

export class AFPrikazKUhrade extends AFEntity {
  static EntityPath: string = 'prikaz-k-uhrade'
  static EntityName: string = 'Příkaz k úhradě'
  static EntityType: string = 'PRIKAZ_K_UHRADE'

  // ID (db: IdPrikazUhr) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Datum vytvoření (db: DatVytvor) - Datum vytvoření)
  datVytvor?: Date
  // Splatnost (db: DatSplat) - Splatnost)
  datSplat?: Date
  // Celková částka (db: CelCastka) - Celková částka)
  celCastka?: Big
  // Jméno souboru (db: JmenoSoub) - Jméno souboru)
  jmenoSoub?: string
  // Pořadové číslo ve dni (db: PoradiPrikaz) - Pořadové číslo ve dni)
  poradiPrikaz?: number
  // Stav příkazu (db: StavPrikazK) - Stav příkazu)
  stavPrikazK?: ElPrikazStav
  // Název firmy nebo jméno osoby (db: NazFirmy) - Název firmy - jméno)
  nazFirmy?: string
  // Pošt. ulice (db: FaUlice) - Ulice)
  faUlice?: string
  // Pošt. město (db: FaMesto) - Město)
  faMesto?: string
  // Pošt. PSČ (db: FaPsc) - PSČ)
  faPsc?: string
  // Konstantní symbol (db: KonSym) - Konstantní symbol)
  konSym?: string
  // Zahraniční (db: Zahranicni) - Zahraniční)
  zahranicni?: boolean
  // Skrýt popis a příjemce platby při exportu (db: BezPopisu) - Skrýt popis a příjemce platby při exportu)
  bezPopisu?: boolean
  // Datum splatnosti z hlavičky příkazu (db: DatSplatZHlavicky) - Datum splatnosti z hlavičky příkazu)
  datSplatZHlavicky?: boolean
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Účet (db: IdBanka) - Účet)
  banka?: AFBankovniUcet
  // Pošt. stát (db: IdFaStatu) - Stát)
  faStat?: AFStat
  // Pošt. kraj (db: IdFaRegionu) - Kraj)
  faRegion?: AFRegion

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Položky (type: PRIKAZ_K_UHRADE_POLOZKA) - polozky)
  polozky?: AFPrikazKUhradePolozka[]


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
    datVytvor : {
      key: 'datVytvor',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datSplat : {
      key: 'datSplat',
      type: PropertyType.Date,
      isArray: false,
      
    },
    celCastka : {
      key: 'celCastka',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    jmenoSoub : {
      key: 'jmenoSoub',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poradiPrikaz : {
      key: 'poradiPrikaz',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },
    stavPrikazK : {
      key: 'stavPrikazK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ElPrikazStav',
      enum: ElPrikazStav,
      
    },
    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faUlice : {
      key: 'faUlice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faMesto : {
      key: 'faMesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faPsc : {
      key: 'faPsc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    konSym : {
      key: 'konSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    zahranicni : {
      key: 'zahranicni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    bezPopisu : {
      key: 'bezPopisu',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datSplatZHlavicky : {
      key: 'datSplatZHlavicky',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },
    banka : {
      key: 'banka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFBankovniUcet,
      
    },
    faStat : {
      key: 'faStat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStat,
      maxLength: 3,
      
    },
    faRegion : {
      key: 'faRegion',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRegion,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },
    polozky : {
      key: 'polozky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFPrikazKUhradePolozka
    },

  }
}