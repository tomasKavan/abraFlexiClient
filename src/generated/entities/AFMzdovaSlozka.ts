import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek'
import { AFZakazka } from './AFZakazka'
import { AFStalaMzdovaSlozka } from './AFStalaMzdovaSlozka'
import { AFSrazka } from './AFSrazka'
import { AFNepritomnost } from './AFNepritomnost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypSlozky, SkupinaSlozky } from '../AFEntityEnums'

export class AFMzdovaSlozka extends AFEntity {
  static EntityPath: string = 'mzdova-slozka'
  static EntityName: string = 'Mzdové složky - vstup a výběry'
  static EntityType: string = 'MZDOVA_SLOZKA'

  // ID (db: IdMzdSloz) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number
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
  // Rok (db: Rok) - Rok)
  rok?: number
  // Měsíc (db: Mesic) - Měsíc)
  mesic?: number
  // Počáteční datum (db: DatumOd) - Počáteční datum)
  datumOd?: Date
  // Koncové datum (db: DatumDo) - Koncové datum)
  datumDo?: Date
  // Dny pracovní (db: DnyPrac) - Dny pracovní)
  dnyPrac?: Big
  // Dny kalendářní (db: DnyKal) - Dny kalendářní)
  dnyKal?: Big
  // Dny kalendářní skutečné (db: DnyKalReal) - Dny kalendářní skutečné)
  dnyKalReal?: Big
  // Dny ve svátek (db: DnySvatek) - Dny ve svátek)
  dnySvatek?: Big
  // Hodiny (db: Hodiny) - Hodiny)
  hodiny?: Big
  // Hodiny svátek (db: HodinySvatek) - Hodiny svátek)
  hodinySvatek?: Big
  // Částka za hodinu (db: CastkaHod) - Částka za hodinu)
  castkaHod?: Big
  // Částka za den (db: CastkaDen) - Částka za den)
  castkaDen?: Big
  // Procento / konstanta (db: ProcMzd) - Procento / konstanta)
  procMzd?: Big
  // Základ (db: ZaklMzd) - Základ)
  zaklMzd?: Big
  // Základ je krácen úvazkem (db: ZaklJeKracen) - Základ je krácen úvazkem)
  zaklJeKracen?: boolean
  // Částka (db: CastMzd) - Částka)
  castMzd?: Big
  // Uživatelská změna částky (db: ZmenaCastMzd) - Uživatelská změna částky)
  zmenaCastMzd?: boolean
  // Uživatelská změna času (db: ZmenaCasu) - Uživatelská změna času)
  zmenaCasu?: boolean
  // Odměna / prémie je za [měsíce] (db: PocetMes) - Odměna / prémie je za [měsíce])
  pocetMes?: number
  // Číslo dokladu (pro nemoc) (db: CisDoklNem) - Číslo dokladu (pro nemoc))
  cisDoklNem?: number
  // Denní průměr (db: PrumNaDenNem) - Denní průměr)
  prumNaDenNem?: Big
  // Hodinový průměr (db: PrumNaHodNem) - Hodinový průměr)
  prumNaHodNem?: Big
  // Doplatek do zdravotního pojištění (db: DoplatZdravK) - Doplatek do zdravotního pojištění)
  doplatZdravK?: any
  // Pracovní (db: Pracovni) - Pracovní)
  pracovni?: boolean
  // Datum dodání dokladu (db: DatumDoklad) - Datum dodání dokladu)
  datumDoklad?: Date
  // Rok platby (db: RokPlatba) - Rok platby)
  rokPlatba?: number
  // Měsíc platby (db: MesicPlatba) - Měsíc platby)
  mesicPlatba?: number
  // Částka přesně (db: DoubleX) - Částka přesně)
  doubleX?: Big
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka
  // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
  pracPom?: AFPracovniPomerHlavicka
  // Mzdová složka (db: IdCisMzdSloz) - Mzdová složka)
  cisMzdSloz?: AFCiselnikMzdovychSlozek
  // Zakázka (db: IdZakazka) - Zakázka)
  zakazka?: AFZakazka
  // Stálá mzdová složka (db: IdStalaMzdSloz) - Stálá mzdová složka)
  stalaMzdSloz?: AFStalaMzdovaSlozka
  // Srážka (db: IdSrazka) - Srážka)
  srazka?: AFSrazka
  // Nepřítomnost (db: IdNepritomnost) - Nepřítomnost)
  nepritomnost?: AFNepritomnost
  // Odměna (db: IdOdmena) - Odměna)
  odmena?: AFMzdovaSlozka

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
    cisRad : {
      key: 'cisRad',
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
    rok : {
      key: 'rok',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesic : {
      key: 'mesic',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    datumOd : {
      key: 'datumOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datumDo : {
      key: 'datumDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    dnyPrac : {
      key: 'dnyPrac',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    dnyKal : {
      key: 'dnyKal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    dnyKalReal : {
      key: 'dnyKalReal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    dnySvatek : {
      key: 'dnySvatek',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hodiny : {
      key: 'hodiny',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hodinySvatek : {
      key: 'hodinySvatek',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    castkaHod : {
      key: 'castkaHod',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    castkaDen : {
      key: 'castkaDen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    procMzd : {
      key: 'procMzd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zaklMzd : {
      key: 'zaklMzd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zaklJeKracen : {
      key: 'zaklJeKracen',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    castMzd : {
      key: 'castMzd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zmenaCastMzd : {
      key: 'zmenaCastMzd',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zmenaCasu : {
      key: 'zmenaCasu',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    pocetMes : {
      key: 'pocetMes',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cisDoklNem : {
      key: 'cisDoklNem',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    prumNaDenNem : {
      key: 'prumNaDenNem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    prumNaHodNem : {
      key: 'prumNaHodNem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    doplatZdravK : {
      key: 'doplatZdravK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    pracovni : {
      key: 'pracovni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datumDoklad : {
      key: 'datumDoklad',
      type: PropertyType.Date,
      isArray: false,
      
    },
    rokPlatba : {
      key: 'rokPlatba',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesicPlatba : {
      key: 'mesicPlatba',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    doubleX : {
      key: 'doubleX',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },
    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPracovniPomerHlavicka',
      
    },
    cisMzdSloz : {
      key: 'cisMzdSloz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCiselnikMzdovychSlozek',
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    stalaMzdSloz : {
      key: 'stalaMzdSloz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStalaMzdovaSlozka',
      
    },
    srazka : {
      key: 'srazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSrazka',
      
    },
    nepritomnost : {
      key: 'nepritomnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFNepritomnost',
      
    },
    odmena : {
      key: 'odmena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMzdovaSlozka',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}