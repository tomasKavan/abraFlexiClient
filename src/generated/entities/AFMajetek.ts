import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOdpisovaSkupina } from './AFOdpisovaSkupina.js'
import { AFUmisteni } from './AFUmisteni.js'
import { AFTypMajetku } from './AFTypMajetku.js'
import { AFZakazka } from './AFZakazka.js'
import { AFStredisko } from './AFStredisko.js'
import { AFFakturaPrijata } from './AFFakturaPrijata.js'
import { AFAdresar } from './AFAdresar.js'
import { AFUcet } from './AFUcet.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFDanovyOdpis } from './AFDanovyOdpis.js'
import { AFPriloha } from './AFPriloha.js'
import { AFUcetniOdpis } from './AFUcetniOdpis.js'
import { AFMajetekUdalost } from './AFMajetekUdalost.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'
import { AFZapujcka } from './AFZapujcka.js'


import { DruhMaj, MjZaruky, ZpusobOdp, ZvysZrych, NahrUcet, Zamek } from '../AFEntityEnums.js'

export class AFMajetek extends AFEntity {
  static EntityPath: string = 'majetek'
  static EntityName: string = 'Majetek'
  static EntityType: string = 'MAJETEK'

  // ID (db: IdMajetku) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Inv.čís. (db: Kod) - Inventární číslo)
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
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: number | null
  // Cena (db: Cena) - Cena při zařazení [Kč])
  cena?: Big | null
  // Kusů (db: KusySoubor) - Kusů v souboru)
  kusySoubor?: number | null
  // Druh (db: DruhK) - Druh)
  druhK?: DruhMaj | null
  // Doklad (db: CidPoriz) - Doklad pořízení)
  cidPoriz?: string | null
  // Způs.poř. (db: ZpusPor) - Způsob pořízení)
  zpusPor?: string | null
  // Koupeno (db: DatKoupe) - Datum koupě)
  datKoupe?: Date | null
  // Vyrobeno (db: DatVyroby) - Datum výroby)
  datVyroby?: Date | null
  // Výrobní číslo (db: VyrCis) - Výrobní číslo)
  vyrCis?: string | null
  // MJ záruky (db: MjZarukyK) - MJ záruky)
  mjZarukyK?: MjZaruky | null
  // Záruka (db: Zaruka) - Záruka)
  zaruka?: number | null
  // Zařazeno (db: DatZar) - Datum zařazení)
  datZar?: Date | null
  // Odepsáno měs. (db: StariPor) - Odepsáno při zař. [měsíce])
  stariPor?: number | null
  // Zůst.účet. (db: ZustUcet) - Zůstatek účetní [Kč])
  zustUcet?: Big | null
  // Zůst.daň. (db: ZustDan) - Zůstatek daňový [Kč])
  zustDan?: Big | null
  // Tech.zh. (db: TechZhod) - Před zařazením bylo tech. zhod.)
  techZhod?: boolean | null
  // Zač.daň.odp (db: DatZacDan) - Začátek daňových odpisů)
  datZacDan?: Date | null
  // Zač.uč.odp. (db: DatZacUcet) - Začátek účetních odpisů)
  datZacUcet?: Date | null
  // Způs.odp. (db: ZpusOdpK) - Způsob odpisování)
  zpusOdpK?: ZpusobOdp | null
  // Zvýš.1.rok (db: ZvysZrychK) - Zvýšení odpisu v 1. roce)
  zvysZrychK?: ZvysZrych | null
  // Účetní odp.? (db: NahrUcetOdpK) - Vytvářet úč. odpisy)
  nahrUcetOdpK?: NahrUcet | null
  // Doba úč.odp. (db: PredpisUcetOdp) - Počet měsíců odpisování)
  predpisUcetOdp?: Big | null
  // EAN (db: EanKod) - EAN)
  eanKod?: string | null
  // Účtovat zařazení (db: ) - Účtovat zařazení)
  uctovatZar?: boolean | null
  // Stáří tech.zh. (db: StariTechZhod) - Stáří tech. zhod. [měsíce])
  stariTechZhod?: number | null
  // Zařazeno (db: DatUdalZar) - Datum události zařazení)
  datUdalZar?: Date | null
  // Vyřazeno (db: DatUdalVyr) - Datum události vyřazení)
  datUdalVyr?: Date | null
  // Zámek (db: ZamekK) - Zámek)
  zamekK?: Zamek | null
  // SKP (db: Skp) - Standardní klasifikace produkce)
  skp?: string | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Katastrální území (db: KatastrUzemi) - Katastrální území)
  katastrUzemi?: string | null
  // Parcela (db: Parcela) - Parcela)
  parcela?: string | null
  // Číslo (db: VozCislo) - Číslo)
  vozCislo?: string | null
  // SPZ (db: VozSpz) - SPZ)
  vozSpz?: string | null
  // Značka (db: VozZnacka) - Značka)
  vozZnacka?: string | null
  // Model (db: VozModel) - Model)
  vozModel?: string | null
  // Typ vozidla (db: VozTyp) - Typ vozidla)
  vozTyp?: string | null
  // Objem (db: VozObjem) - Objem)
  vozObjem?: Big | null
  // Havarijní pojištění (db: VozHavar) - Havarijní pojištění)
  vozHavar?: string | null
  // Výše havarijního pojištění (db: VozHavarVyse) - Výše havarijního pojištění)
  vozHavarVyse?: Big | null
  // Výbava (db: VozVybava) - Výbava)
  vozVybava?: string | null
  // Odp.skup. (db: IdSazby) - Odpisová skupina)
  sazba?: AFOdpisovaSkupina | null
  // Místnost (db: IdUmisMist) - Místnost)
  mistnost?: AFUmisteni | null
  // Sekce (db: IdUmisSekce) - Sekce)
  sekce?: AFUmisteni | null
  // Objekt (db: IdUmisObj) - Objekt)
  objekt?: AFUmisteni | null
  // Typ (db: IdTypMaj) - Typ)
  typMajetku?: AFTypMajetku | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: AFFakturaPrijata | null
  // Dodavatel (db: IdFirmyDod) - Dodavatel)
  dodavatel?: AFAdresar | null
  // Výrobce (db: IdFirmyVyr) - Výrobce)
  vyrobce?: AFAdresar | null
  // Prim.účet (db: IdPrimUcet) - Primární účet)
  primarniUcet?: AFUcet | null
  // Protiúč.zař. (db: IdProtiUcetZar) - Protiúčet zařazení)
  protiUcetZarazeni?: AFUcet | null
  // Účet opr. (db: IdOpravUcet) - Účet oprávek)
  opravnyUcet?: AFUcet | null
  // Účet odp. (db: IdOdpUcet) - Účet odpisu)
  odpisovyUcet?: AFUcet | null
  // Účet zůstatku vyřazení (db: IdZustVyrazUcet) - Účet zůstatku vyřazení)
  zustVyrazUcet?: AFUcet | null
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: AFUzivatel | null

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
      afClass: 'AFUzivatel',
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