import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypSlozky, SkupinaSlozky, VyznamSlozky } from '../AFEntityEnums'

export class AFCiselnikMzdovychSlozek extends AFEntity {
  static EntityPath: string = 'ciselnik-mzdovych-slozek'
  static EntityName: string = 'Číselník mzdových složek'
  static EntityType: string = 'CISELNIK_MZDOVYCH_SLOZEK'

  // ID (db: IdCisMzdSloz) - ID)
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
  // Platí od data (db: PlatiOd) - Platí od)
  platiOd?: Date | null
  // Platí do data (db: PlatiDo) - Platí do)
  platiDo?: Date | null
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number | null
  // Typ složky (db: TypSlozkyK) - Typ složky)
  typSlozkyK?: TypSlozky | null
  // Skupina složky (db: SkupSlozkyK) - Skupina složky)
  skupSlozkyK?: SkupinaSlozky | null
  // Společná pro všechny pracovní poměry osoby (db: NaOsobu) - Společná pro všechny pracovní poměry osoby)
  naOsobu?: boolean | null
  // x Počáteční datum (db: VsDatOd) - x Počáteční datum)
  vsDatOd?: boolean | null
  // x Koncové datum (db: VsDatDo) - x Koncové datum)
  vsDatDo?: boolean | null
  // x Dny kalendářní (db: VsDnyKal) - x Dny kalendářní)
  vsDnyKal?: boolean | null
  // x Dny pracovní (db: VsDnyPrac) - x Dny pracovní)
  vsDnyPrac?: boolean | null
  // x Dny ve svátek (db: VsDnySvatek) - x Dny ve svátek)
  vsDnySvatek?: boolean | null
  // x Hodiny (db: VsHodiny) - x Hodiny)
  vsHodiny?: boolean | null
  // x Hodiny ve svátek (db: VsHodinySvatek) - x Hodiny ve svátek)
  vsHodinySvatek?: boolean | null
  // x Částka za hodinu (db: VsCastNaHod) - x Částka za hodinu)
  vsCastNaHod?: boolean | null
  // x Částka za den (db: VsCastNaDen) - x Částka za den)
  vsCastNaDen?: boolean | null
  // x Procento / konstanta (db: VsProcMzd) - x Procento / konstanta)
  vsProcMzd?: boolean | null
  // x Základ (db: VsZaklMzd) - x Základ)
  vsZaklMzd?: boolean | null
  // x Základ je krácen úvazkem (db: VsZaklJeKracen) - x Základ je krácen úvazkem)
  vsZaklJeKracen?: boolean | null
  // x Částka (db: VsCastMzd) - x Částka)
  vsCastMzd?: boolean | null
  // x Uživatelská změna částky (db: VsZmenaCastMzd) - x Uživatelská změna částky)
  vsZmenaCastMzd?: boolean | null
  // x Počet měsíců za které složka platí (db: VsPocetMes) - x Počet měsíců za které složka platí)
  vsPocetMes?: boolean | null
  // x Číslo dokladu (pro nemoc) (db: VsCisDoklNem) - x Číslo dokladu (pro nemoc))
  vsCisDoklNem?: boolean | null
  // x Doplatek do zdravotního pojištění (db: VsDoplatZdrPoj) - x Doplatek do zdravotního pojištění)
  vsDoplatZdrPoj?: boolean | null
  // x Denní průměr (db: VsPrumNaDenNem) - x Denní průměr)
  vsPrumNaDenNem?: boolean | null
  // x Hodinový průměr (db: VsPrumNaHodNem) - x Hodinový průměr)
  vsPrumNaHodNem?: boolean | null
  // Význam (db: VyznamK) - Význam)
  vyznamK?: VyznamSlozky | null
  // Dny pr. (db: DnyPrac) - Dny pracovní)
  dnyPrac?: Big | null
  // Dny kal. (db: DnyKal) - Dny kalendářní)
  dnyKal?: Big | null
  // Dny sv. (db: DnySvatek) - Dny ve svátek)
  dnySvatek?: Big | null
  // Hodiny (db: Hodiny) - Hodiny)
  hodiny?: Big | null
  // Kč/hod. (db: CastkaHod) - Částka za hodinu)
  castkaHod?: Big | null
  // Kč/den (db: CastkaDen) - Částka za den)
  castkaDen?: Big | null
  // % / konst. (db: ProcMzd) - Procento / konstanta)
  procMzd?: Big | null
  // Základ (db: ZaklMzd) - Základ mzdy)
  zaklMzd?: Big | null
  // x Základ je krácen úvazkem (db: ZaklJeKracen) - x Základ je krácen úvazkem)
  zaklJeKracen?: boolean | null
  // Částka (db: CastMzd) - Částka)
  castMzd?: Big | null
  // Uživ.zm. (db: ZmenaCastMzd) - Uživatelská změna částky)
  zmenaCastMzd?: boolean | null
  // Platí (db: PocetMes) - Počet měsíců za které složka platí)
  pocetMes?: number | null
  // Doklad (db: CisDoklNem) - Číslo dokladu (pro nemoc))
  cisDoklNem?: number | null
  // Denní průměr (db: PrumNaDenNem) - Denní průměr)
  prumNaDenNem?: Big | null
  // Hodinový průměr (db: PrumNaHodNem) - Hodinový průměr)
  prumNaHodNem?: Big | null
  // Dopl.ZP (db: DoplatZdravK) - Doplatek do zdravotního pojištění)
  doplatZdravK?: any | null
  // Pracovní složka (nezobrazuje se) (db: Pracovni) - Pracovní složka (nezobrazuje se))
  pracovni?: boolean | null
  // Ukládat nulové (db: UkladatNulove) - Ukládat nulové)
  ukladatNulove?: boolean | null
  // Malá páska (db: PaskaMala) - Malá páska)
  paskaMala?: boolean | null
  // Velká páska (db: PaskaVelka) - Velká páska)
  paskaVelka?: boolean | null
  // Viditelná pole (db: PaskaPole) - Viditelná pole)
  paskaPole?: string | null
  // Zápočtový list (db: ZapoctovyList) - Zápočtový list)
  zapoctovyList?: boolean | null
  // UUID (db: Uuid) - UUID)
  uuid?: string | null

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