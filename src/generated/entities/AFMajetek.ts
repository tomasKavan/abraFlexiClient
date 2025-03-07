import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFOdpisovaSkupina } from './AFOdpisovaSkupina'
import { AFUmisteni } from './AFUmisteni'
import { AFTypMajetku } from './AFTypMajetku'
import { AFZakazka } from './AFZakazka'
import { AFStredisko } from './AFStredisko'
import { AFFakturaPrijata } from './AFFakturaPrijata'
import { AFAdresar } from './AFAdresar'
import { AFUcet } from './AFUcet'
import { AFDanovyOdpis } from './AFDanovyOdpis'
import { AFPriloha } from './AFPriloha'
import { AFUcetniOdpis } from './AFUcetniOdpis'
import { AFMajetekUdalost } from './AFMajetekUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFZapujcka } from './AFZapujcka'


import { DruhMaj, MjZaruky, ZpusobOdp, ZvysZrych, NahrUcet, Zamek } from '../AFEntityEnums'

export class AFMajetek extends AFEntity {
  static EntityPath: string = 'majetek'
  static EntityName: string = 'Majetek'
  static EntityType: string = 'MAJETEK'

  // ID (db: IdMajetku) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Inv.čís. (db: Kod) - Inventární číslo)
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
  // Cena (db: Cena) - Cena při zařazení [Kč])
  cena?: Big
  // Kusů (db: KusySoubor) - Kusů v souboru)
  kusySoubor?: number
  // Druh (db: DruhK) - Druh)
  druhK?: DruhMaj
  // Doklad (db: CidPoriz) - Doklad pořízení)
  cidPoriz?: string
  // Způs.poř. (db: ZpusPor) - Způsob pořízení)
  zpusPor?: string
  // Koupeno (db: DatKoupe) - Datum koupě)
  datKoupe?: Date
  // Vyrobeno (db: DatVyroby) - Datum výroby)
  datVyroby?: Date
  // Výrobní číslo (db: VyrCis) - Výrobní číslo)
  vyrCis?: string
  // MJ záruky (db: MjZarukyK) - MJ záruky)
  mjZarukyK?: MjZaruky
  // Záruka (db: Zaruka) - Záruka)
  zaruka?: number
  // Zařazeno (db: DatZar) - Datum zařazení)
  datZar?: Date
  // Odepsáno měs. (db: StariPor) - Odepsáno při zař. [měsíce])
  stariPor?: number
  // Zůst.účet. (db: ZustUcet) - Zůstatek účetní [Kč])
  zustUcet?: Big
  // Zůst.daň. (db: ZustDan) - Zůstatek daňový [Kč])
  zustDan?: Big
  // Tech.zh. (db: TechZhod) - Před zařazením bylo tech. zhod.)
  techZhod?: boolean
  // Zač.daň.odp (db: DatZacDan) - Začátek daňových odpisů)
  datZacDan?: Date
  // Zač.uč.odp. (db: DatZacUcet) - Začátek účetních odpisů)
  datZacUcet?: Date
  // Způs.odp. (db: ZpusOdpK) - Způsob odpisování)
  zpusOdpK?: ZpusobOdp
  // Zvýš.1.rok (db: ZvysZrychK) - Zvýšení odpisu v 1. roce)
  zvysZrychK?: ZvysZrych
  // Účetní odp.? (db: NahrUcetOdpK) - Vytvářet úč. odpisy)
  nahrUcetOdpK?: NahrUcet
  // Doba úč.odp. (db: PredpisUcetOdp) - Počet měsíců odpisování)
  predpisUcetOdp?: Big
  // EAN (db: EanKod) - EAN)
  eanKod?: string
  // Účtovat zařazení (db: ) - Účtovat zařazení)
  uctovatZar?: boolean
  // Stáří tech.zh. (db: StariTechZhod) - Stáří tech. zhod. [měsíce])
  stariTechZhod?: number
  // Zařazeno (db: DatUdalZar) - Datum události zařazení)
  datUdalZar?: Date
  // Vyřazeno (db: DatUdalVyr) - Datum události vyřazení)
  datUdalVyr?: Date
  // Zámek (db: ZamekK) - Zámek)
  zamekK?: Zamek
  // SKP (db: Skp) - Standardní klasifikace produkce)
  skp?: string
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Katastrální území (db: KatastrUzemi) - Katastrální území)
  katastrUzemi?: string
  // Parcela (db: Parcela) - Parcela)
  parcela?: string
  // Číslo (db: VozCislo) - Číslo)
  vozCislo?: string
  // SPZ (db: VozSpz) - SPZ)
  vozSpz?: string
  // Značka (db: VozZnacka) - Značka)
  vozZnacka?: string
  // Model (db: VozModel) - Model)
  vozModel?: string
  // Typ vozidla (db: VozTyp) - Typ vozidla)
  vozTyp?: string
  // Objem (db: VozObjem) - Objem)
  vozObjem?: Big
  // Havarijní pojištění (db: VozHavar) - Havarijní pojištění)
  vozHavar?: string
  // Výše havarijního pojištění (db: VozHavarVyse) - Výše havarijního pojištění)
  vozHavarVyse?: Big
  // Výbava (db: VozVybava) - Výbava)
  vozVybava?: string
  // Odp.skup. (db: IdSazby) - Odpisová skupina)
  sazba?: AFOdpisovaSkupina
  // Místnost (db: IdUmisMist) - Místnost)
  mistnost?: AFUmisteni
  // Sekce (db: IdUmisSekce) - Sekce)
  sekce?: AFUmisteni
  // Objekt (db: IdUmisObj) - Objekt)
  objekt?: AFUmisteni
  // Typ (db: IdTypMaj) - Typ)
  typMajetku?: AFTypMajetku
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: AFFakturaPrijata
  // Dodavatel (db: IdFirmyDod) - Dodavatel)
  dodavatel?: AFAdresar
  // Výrobce (db: IdFirmyVyr) - Výrobce)
  vyrobce?: AFAdresar
  // Prim.účet (db: IdPrimUcet) - Primární účet)
  primarniUcet?: AFUcet
  // Protiúč.zař. (db: IdProtiUcetZar) - Protiúčet zařazení)
  protiUcetZarazeni?: AFUcet
  // Účet opr. (db: IdOpravUcet) - Účet oprávek)
  opravnyUcet?: AFUcet
  // Účet odp. (db: IdOdpUcet) - Účet odpisu)
  odpisovyUcet?: AFUcet
  // Účet zůstatku vyřazení (db: IdZustVyrazUcet) - Účet zůstatku vyřazení)
  zustVyrazUcet?: AFUcet
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: any

  // Daňové odpisy (type: DANOVY_ODPIS) - danove-odpisy)
  'danove-odpisy'?: AFDanovyOdpis[]
  get danoveOdpisy(): AFDanovyOdpis[] | undefined { return this['danove-odpisy']}
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Účetní odpisy (type: UCETNI_ODPIS) - ucetni-odpisy)
  'ucetni-odpisy'?: AFUcetniOdpis[]
  get ucetniOdpisy(): AFUcetniOdpis[] | undefined { return this['ucetni-odpisy']}
  // Události (type: MAJETEK_UDALOST) - majetek-udalosti)
  'majetek-udalosti'?: AFMajetekUdalost[]
  get majetekUdalosti(): AFMajetekUdalost[] | undefined { return this['majetek-udalosti']}
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Zápůjčky/odpovědná osoba (type: ZAPUJCKA) - zapujcky)
  zapujcky?: AFZapujcka[]


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
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cena : {
      key: 'cena',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    kusySoubor : {
      key: 'kusySoubor',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    druhK : {
      key: 'druhK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhMaj',
      enum: DruhMaj,
      
    },
    cidPoriz : {
      key: 'cidPoriz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    zpusPor : {
      key: 'zpusPor',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datKoupe : {
      key: 'datKoupe',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datVyroby : {
      key: 'datVyroby',
      type: PropertyType.Date,
      isArray: false,
      
    },
    vyrCis : {
      key: 'vyrCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    mjZarukyK : {
      key: 'mjZarukyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MjZaruky',
      enum: MjZaruky,
      
    },
    zaruka : {
      key: 'zaruka',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    datZar : {
      key: 'datZar',
      type: PropertyType.Date,
      isArray: false,
      
    },
    stariPor : {
      key: 'stariPor',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    zustUcet : {
      key: 'zustUcet',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zustDan : {
      key: 'zustDan',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    techZhod : {
      key: 'techZhod',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datZacDan : {
      key: 'datZacDan',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datZacUcet : {
      key: 'datZacUcet',
      type: PropertyType.Date,
      isArray: false,
      
    },
    zpusOdpK : {
      key: 'zpusOdpK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZpusobOdp',
      enum: ZpusobOdp,
      
    },
    zvysZrychK : {
      key: 'zvysZrychK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZvysZrych',
      enum: ZvysZrych,
      
    },
    nahrUcetOdpK : {
      key: 'nahrUcetOdpK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'NahrUcet',
      enum: NahrUcet,
      
    },
    predpisUcetOdp : {
      key: 'predpisUcetOdp',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 12,
      
    },
    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    uctovatZar : {
      key: 'uctovatZar',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stariTechZhod : {
      key: 'stariTechZhod',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    datUdalZar : {
      key: 'datUdalZar',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datUdalVyr : {
      key: 'datUdalVyr',
      type: PropertyType.Date,
      isArray: false,
      
    },
    zamekK : {
      key: 'zamekK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Zamek',
      enum: Zamek,
      
    },
    skp : {
      key: 'skp',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    katastrUzemi : {
      key: 'katastrUzemi',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    parcela : {
      key: 'parcela',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozCislo : {
      key: 'vozCislo',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozSpz : {
      key: 'vozSpz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozZnacka : {
      key: 'vozZnacka',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozModel : {
      key: 'vozModel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozTyp : {
      key: 'vozTyp',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozObjem : {
      key: 'vozObjem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vozHavar : {
      key: 'vozHavar',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozHavarVyse : {
      key: 'vozHavarVyse',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vozVybava : {
      key: 'vozVybava',
      type: PropertyType.String,
      isArray: false,
      
    },
    sazba : {
      key: 'sazba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOdpisovaSkupina',
      maxLength: 20,
      
    },
    mistnost : {
      key: 'mistnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUmisteni',
      maxLength: 20,
      
    },
    sekce : {
      key: 'sekce',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUmisteni',
      maxLength: 20,
      
    },
    objekt : {
      key: 'objekt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUmisteni',
      maxLength: 20,
      
    },
    typMajetku : {
      key: 'typMajetku',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypMajetku',
      maxLength: 20,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFakturaPrijata',
      
    },
    dodavatel : {
      key: 'dodavatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    vyrobce : {
      key: 'vyrobce',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    primarniUcet : {
      key: 'primarniUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    protiUcetZarazeni : {
      key: 'protiUcetZarazeni',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    opravnyUcet : {
      key: 'opravnyUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    odpisovyUcet : {
      key: 'odpisovyUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zustVyrazUcet : {
      key: 'zustVyrazUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },

    'danove-odpisy' : {
      key: 'danove-odpisy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFDanovyOdpis'
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    'ucetni-odpisy' : {
      key: 'ucetni-odpisy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUcetniOdpis'
    },
    'majetek-udalosti' : {
      key: 'majetek-udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFMajetekUdalost'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    zapujcky : {
      key: 'zapujcky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFZapujcka'
    },

  }
}