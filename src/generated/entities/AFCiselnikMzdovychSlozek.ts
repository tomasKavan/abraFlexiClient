import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypSlozky, SkupinaSlozky, VyznamSlozky } from '../AFEntityEnums.js'

export class AFCiselnikMzdovychSlozek extends AFEntity {
  static EntityPath: string = 'ciselnik-mzdovych-slozek'
  static EntityName: string = 'Číselník mzdových složek'
  static EntityType: string = 'CISELNIK_MZDOVYCH_SLOZEK'

  // ID (db: IdCisMzdSloz) - ID)
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
  platiOd?: Date
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: Date
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number
  // Typ složky (db: TypSlozkyK) - Typ složky)
  typSlozkyK?: TypSlozky
  // Skupina složky (db: SkupSlozkyK) - Skupina složky)
  skupSlozkyK?: SkupinaSlozky
  // Společná pro všechny pracovní poměry osoby (db: NaOsobu) - Společná pro všechny pracovní poměry osoby)
  naOsobu?: boolean
  // x Počáteční datum (db: VsDatOd) - x Počáteční datum)
  vsDatOd?: boolean
  // x Koncové datum (db: VsDatDo) - x Koncové datum)
  vsDatDo?: boolean
  // x Dny kalendářní (db: VsDnyKal) - x Dny kalendářní)
  vsDnyKal?: boolean
  // x Dny pracovní (db: VsDnyPrac) - x Dny pracovní)
  vsDnyPrac?: boolean
  // x Dny ve svátek (db: VsDnySvatek) - x Dny ve svátek)
  vsDnySvatek?: boolean
  // x Hodiny (db: VsHodiny) - x Hodiny)
  vsHodiny?: boolean
  // x Hodiny ve svátek (db: VsHodinySvatek) - x Hodiny ve svátek)
  vsHodinySvatek?: boolean
  // x Částka za hodinu (db: VsCastNaHod) - x Částka za hodinu)
  vsCastNaHod?: boolean
  // x Částka za den (db: VsCastNaDen) - x Částka za den)
  vsCastNaDen?: boolean
  // x Procento / konstanta (db: VsProcMzd) - x Procento / konstanta)
  vsProcMzd?: boolean
  // x Základ (db: VsZaklMzd) - x Základ)
  vsZaklMzd?: boolean
  // x Základ je krácen úvazkem (db: VsZaklJeKracen) - x Základ je krácen úvazkem)
  vsZaklJeKracen?: boolean
  // x Částka (db: VsCastMzd) - x Částka)
  vsCastMzd?: boolean
  // x Uživatelská změna částky (db: VsZmenaCastMzd) - x Uživatelská změna částky)
  vsZmenaCastMzd?: boolean
  // x Počet měsíců za které složka platí (db: VsPocetMes) - x Počet měsíců za které složka platí)
  vsPocetMes?: boolean
  // x Číslo dokladu (pro nemoc) (db: VsCisDoklNem) - x Číslo dokladu (pro nemoc))
  vsCisDoklNem?: boolean
  // x Doplatek do zdravotního pojištění (db: VsDoplatZdrPoj) - x Doplatek do zdravotního pojištění)
  vsDoplatZdrPoj?: boolean
  // x Denní průměr (db: VsPrumNaDenNem) - x Denní průměr)
  vsPrumNaDenNem?: boolean
  // x Hodinový průměr (db: VsPrumNaHodNem) - x Hodinový průměr)
  vsPrumNaHodNem?: boolean
  // Význam (db: VyznamK) - Význam)
  vyznamK?: VyznamSlozky
  // Dny pr. (db: DnyPrac) - Dny pracovní)
  dnyPrac?: Big
  // Dny kal. (db: DnyKal) - Dny kalendářní)
  dnyKal?: Big
  // Dny sv. (db: DnySvatek) - Dny ve svátek)
  dnySvatek?: Big
  // Hodiny (db: Hodiny) - Hodiny)
  hodiny?: Big
  // Kč/hod. (db: CastkaHod) - Částka za hodinu)
  castkaHod?: Big
  // Kč/den (db: CastkaDen) - Částka za den)
  castkaDen?: Big
  // % / konst. (db: ProcMzd) - Procento / konstanta)
  procMzd?: Big
  // Základ (db: ZaklMzd) - Základ mzdy)
  zaklMzd?: Big
  // x Základ je krácen úvazkem (db: ZaklJeKracen) - x Základ je krácen úvazkem)
  zaklJeKracen?: boolean
  // Částka (db: CastMzd) - Částka)
  castMzd?: Big
  // Uživ.zm. (db: ZmenaCastMzd) - Uživatelská změna částky)
  zmenaCastMzd?: boolean
  // Platí (db: PocetMes) - Počet měsíců za které složka platí)
  pocetMes?: number
  // Doklad (db: CisDoklNem) - Číslo dokladu (pro nemoc))
  cisDoklNem?: number
  // Denní průměr (db: PrumNaDenNem) - Denní průměr)
  prumNaDenNem?: Big
  // Hodinový průměr (db: PrumNaHodNem) - Hodinový průměr)
  prumNaHodNem?: Big
  // Dopl.ZP (db: DoplatZdravK) - Doplatek do zdravotního pojištění)
  doplatZdravK?: any
  // Pracovní složka (nezobrazuje se) (db: Pracovni) - Pracovní složka (nezobrazuje se))
  pracovni?: boolean
  // Ukládat nulové (db: UkladatNulove) - Ukládat nulové)
  ukladatNulove?: boolean
  // Malá páska (db: PaskaMala) - Malá páska)
  paskaMala?: boolean
  // Velká páska (db: PaskaVelka) - Velká páska)
  paskaVelka?: boolean
  // Viditelná pole (db: PaskaPole) - Viditelná pole)
  paskaPole?: string
  // Zápočtový list (db: ZapoctovyList) - Zápočtový list)
  zapoctovyList?: boolean
  // UUID (db: Uuid) - UUID)
  uuid?: string

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
      maxLength: 30,
      
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
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    cisRad : {
      key: 'cisRad',
      type: PropertyType.Integer,
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
    naOsobu : {
      key: 'naOsobu',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsDatOd : {
      key: 'vsDatOd',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsDatDo : {
      key: 'vsDatDo',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsDnyKal : {
      key: 'vsDnyKal',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsDnyPrac : {
      key: 'vsDnyPrac',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsDnySvatek : {
      key: 'vsDnySvatek',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsHodiny : {
      key: 'vsHodiny',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsHodinySvatek : {
      key: 'vsHodinySvatek',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsCastNaHod : {
      key: 'vsCastNaHod',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsCastNaDen : {
      key: 'vsCastNaDen',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsProcMzd : {
      key: 'vsProcMzd',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsZaklMzd : {
      key: 'vsZaklMzd',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsZaklJeKracen : {
      key: 'vsZaklJeKracen',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsCastMzd : {
      key: 'vsCastMzd',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsZmenaCastMzd : {
      key: 'vsZmenaCastMzd',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsPocetMes : {
      key: 'vsPocetMes',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsCisDoklNem : {
      key: 'vsCisDoklNem',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsDoplatZdrPoj : {
      key: 'vsDoplatZdrPoj',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsPrumNaDenNem : {
      key: 'vsPrumNaDenNem',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vsPrumNaHodNem : {
      key: 'vsPrumNaHodNem',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vyznamK : {
      key: 'vyznamK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'VyznamSlozky',
      enum: VyznamSlozky,
      
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
    ukladatNulove : {
      key: 'ukladatNulove',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    paskaMala : {
      key: 'paskaMala',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    paskaVelka : {
      key: 'paskaVelka',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    paskaPole : {
      key: 'paskaPole',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zapoctovyList : {
      key: 'zapoctovyList',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uuid : {
      key: 'uuid',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}