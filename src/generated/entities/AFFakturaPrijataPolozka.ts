import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFSklad } from './AFSklad'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFAdresar } from './AFAdresar'
import { AFCleneniDph } from './AFCleneniDph'
import { AFPreneseniDph } from './AFPreneseniDph'
import { AFCenik } from './AFCenik'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSazbaDph } from './AFSazbaDph'
import { AFSkupinaPlneni } from './AFSkupinaPlneni'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFFakturaPrijata } from './AFFakturaPrijata'
import { AFVyrobniCislo } from './AFVyrobniCislo'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPolozky, TypCeny, TypSzbDph, TypVypCeny, ZaokrJak, ZaokrNa, StavUziv, Ekokom } from '../AFEntityEnums.js'

export class AFFakturaPrijataPolozka extends AFEntity {
  static EntityPath: string = 'faktura-prijata-polozka'
  static EntityName: string = 'Položky přijatých faktur'
  static EntityType: string = 'FAKTURA_IN_POLOZKA'

  // ID (db: IdPolFak) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Úč. pol. (db: Ucetni) - Položka je účetní)
  ucetni?: boolean
  // Označení (db: Kod) - Označení)
  kod?: string
  // EAN (db: EanKod) - EAN)
  eanKod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number
  // Typ položky (db: TypPolozkyK) - Typ položky)
  typPolozkyK?: TypPolozky
  // Balení (db: BaleniId) - Balení)
  baleniId?: number
  // Počet balení (db: MnozBaleni) - Počet balení)
  mnozBaleni?: Big
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny
  // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
  typSzbDphK?: TypSzbDph
  // DPH [%] (db: SzbDph) - DPH [%])
  szbDph?: Big
  // Cena za MJ (db: CenaMj) - Cena za MJ)
  cenaMj?: Big
  // Sleva položky[%] (db: SlevaPol) - Sleva položky)
  slevaPol?: Big
  // ? sleva hlav. (db: UplSlevaDokl) - uplatnit slevu z dokladu)
  uplSlevaDokl?: boolean
  // Základ [Kč] (db: SumZkl) - Základ [Kč])
  sumZkl?: Big
  // DPH [Kč] (db: SumDph) - DPH [Kč])
  sumDph?: Big
  // Celkem [Kč] (db: sumZkl + sumDph) - Celkem [Kč])
  sumCelkem?: Big
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big
  // DPH [měna] (db: SumDphMen) - DPH [měna])
  sumDphMen?: Big
  // Celkem [měna] (db: sumZklMen + sumDphMen) - Celkem [měna])
  sumCelkemMen?: Big
  // Objem (db: Objem) - Objem)
  objem?: Big
  // Cen. jednotka (db: CenJednotka) - Cen. jednotka)
  cenJednotka?: Big
  // Způsob výpočtu (db: TypVypCenyK) - Způsob výpočtu)
  typVypCenyK?: TypVypCeny
  // Nákupní cena za MJ z ceníku (db: CenaMjNakup) - Nákupní)
  cenaMjNakup?: Big
  // Prodejní cena za MJ z ceníku (db: CenaMjProdej) - Základní prodejní)
  cenaMjProdej?: Big
  // Ceníková cena [Kč] (db: CenaMjCenikTuz) - Ceníková cena [Kč])
  cenaMjCenikTuz?: Big
  // Marže / Rabat / Sleva [%] (db: ProcZakl) - Marže / Rabat / Sleva [%])
  procZakl?: Big
  // Množstevní sleva [%] (db: SlevaMnoz) - Množstevní sleva [%])
  slevaMnoz?: Big
  // Způsob zaokr. ceny (db: ZaokrJakK) - Způsob)
  zaokrJakK?: ZaokrJak
  // Řád zaokr. ceny (db: ZaokrNaK) - Řád)
  zaokrNaK?: ZaokrNa
  // Šarže (db: Sarze) - Šarže)
  sarze?: string
  // Expirace (db: Expirace) - Expirace)
  expirace?: Date
  // Trvanlivost (db: DatTrvan) - Trvanlivost)
  datTrvan?: Date
  // Datum výroby (db: DatVyroby) - Datum výroby)
  datVyroby?: Date
  // Uživatelský stav (db: StavUzivK) - Uživatelský stav)
  stavUzivK?: StavUziv
  // Plán MJ (db: MnozMjPlan) - Plánované množství)
  mnozMjPlan?: Big
  // Real. MJ (db: MnozMjReal) - Realizované množství)
  mnozMjReal?: Big
  // Zaokr. pol. (db: AutoZaokr) - AutoZaokr)
  autoZaokr?: boolean
  // Auto. pol. (db: Autogen) - Autogen)
  autogen?: boolean
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Sleva dokladu [%] (db: SlevaDokl) - Sleva dokladu [%])
  slevaDokl?: Big
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date
  // Kopírovat MD účet základu (db: KopZklMdUcet) - Kopírovat MD účet základu)
  kopZklMdUcet?: boolean
  // Kopírovat D účet základu (db: KopZklDalUcet) - Kopírovat D účet základu)
  kopZklDalUcet?: boolean
  // Kopírovat MD účet DPH (db: KopDphMdUcet) - Kopírovat MD účet DPH)
  kopDphMdUcet?: boolean
  // Kopírovat D účet DPH (db: KopDphDalUcet) - Kopírovat D účet DPH)
  kopDphDalUcet?: boolean
  // Kopírovat předpis (db: KopTypUcOp) - Kopírovat předpis)
  kopTypUcOp?: boolean
  // Kopírovat zakázku (db: KopZakazku) - Kopírovat zakázku)
  kopZakazku?: boolean
  // Kopírovat středisko (db: KopStred) - Kopírovat středisko)
  kopStred?: boolean
  // Kopírovat činnost (db: KopCinnost) - Kopírovat činnost)
  kopCinnost?: boolean
  // Kopírovat štítky (db: KopKlice) - Kopírovat štítky)
  kopKlice?: boolean
  // Kopírovat řádek DPH (db: KopClenDph) - Kopírovat řádek DPH z dokladu)
  kopClenDph?: boolean
  // Kopírovat dat. zaúčt. (db: KopDatUcto) - Kopírovat dat. zaúčt.)
  kopDatUcto?: boolean
  // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date
  // Storno (db: Storno) - Storno)
  storno?: boolean
  // Storno položky (db: StornoPol) - Storno položky)
  stornoPol?: boolean
  // Sklad (db: IdBspSkl) - Sklad)
  sklad?: AFSklad
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani
  // Účet MD zákl. (db: IdZklMdUcet) - Má Dáti základu)
  zklMdUcet?: AFUcet
  // Účet Dal zákl. (db: IdZklDalUcet) - Dal základu)
  zklDalUcet?: AFUcet
  // Účet MD DPH (db: IdDphMdUcet) - Má dáti DPH)
  dphMdUcet?: AFUcet
  // Účet Dal DPH (db: IdDphDalUcet) - Dal DPH)
  dphDalUcet?: AFUcet
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Dodavatel (db: IdFirmy) - Dodavatel)
  dodavatel?: AFAdresar
  // Řádky DPH (db: IdClenDph) - Řádky DPH)
  clenDph?: AFCleneniDph
  // Kód přenesení DPH (db: IdDphPren) - Kód přenesení DPH)
  dphPren?: AFPreneseniDph
  // Kód z ceníku (db: IdCenik) - Kód z ceníku)
  cenik?: AFCenik
  // MJ (db: IdMj) - MJ)
  mj?: AFMernaJednotka
  // MJ objemu (db: IdMjObjem) - MJ objemu)
  mjObjem?: AFMernaJednotka
  // Sazba DPH (db: IdSazbyDph) - Sazba DPH)
  sazbaDph?: AFSazbaDph
  // Původní sazba DPH (db: IdSazbyDphPuv) - Původní sazba DPH)
  sazbaDphPuv?: AFSazbaDph
  // Výr. čísla OK (db: VyrobniCislaOk) - Výr. čísla OK)
  vyrobniCislaOk?: boolean
  // Zdrojová položka objednávky (db: IdPolObchZdroj) - Zdrojová položka objednávky)
  idPolObchZdroj?: number
  // Skupina plnění (db: IdSkupPlneni) - Skupina plnění)
  skupPlneni?: AFSkupinaPlneni
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Zdroj (db: Source) - Zdroj)
  source?: string
  // Výkaz EkoKom (db: EkokomK) - Výkaz EkoKom)
  ekokomK?: Ekokom
  // Kopírovat výkaz Ekokom (db: KopEkokom) - Kopírovat výkaz Ekokom)
  kopEkokom?: boolean
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni
  // Kopírovat řádek kon. hl. DPH (db: KopClenKonVykDph) - Kopírovat řádek kontrolního hlášení DPH z dokladu)
  kopClenKonVykDph?: boolean
  // Číselný kód zboží (db: CiselnyKodZbozi) - Číselný kód zboží)
  ciselnyKodZbozi?: string
  // Druh zboží (db: DruhZbozi) - Druh zboží)
  druhZbozi?: string
  // Marže (db: ) - Marže)
  marze?: Big
  // Min. marže (db: ) - Min. marže)
  minMarze?: Big
  // Stav skladu (db: ) - Stav skladu)
  stavSkladu?: Big
  // Rezervováno (db: ) - Rezervováno)
  rezervovano?: Big
  // Doklad (db: IdDoklFak) - Doklad)
  doklFak?: AFFakturaPrijata
  // Poplatek k položce (db: IdPolFakPoplatek) - Poplatek k položce)
  poplatekParentPolFak?: AFFakturaPrijataPolozka
  // Zdroj pro sklad. doklady (db: ZdrojProSkl) - Zdroj pro sklad. doklady)
  zdrojProSkl?: boolean
  // Zálohová položka (db: Zaloha) - Zálohová položka)
  zaloha?: boolean
  // Celkové vedlejší náklady [Kč] (db: SumVedlNaklIntrMen) - Celkové vedlejší náklady [Kč])
  sumVedlNaklIntrMen?: Big

  // Výrobní čísla (type: VYROBNI_CISLA) - vyrobniCislaVydana)
  vyrobniCislaVydana?: AFVyrobniCislo[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Výrobní čísla (type: VYROBNI_CISLA) - vyrobniCislaPrijata)
  vyrobniCislaPrijata?: AFVyrobniCislo[]


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
    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 64,
      
    },
    eanKod : {
      key: 'eanKod',
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
    cisRad : {
      key: 'cisRad',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typPolozkyK : {
      key: 'typPolozkyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPolozky',
      enum: TypPolozky,
      
    },
    baleniId : {
      key: 'baleniId',
      type: PropertyType.Integer,
      isArray: false,
      digits: 1,
      
    },
    mnozBaleni : {
      key: 'mnozBaleni',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMj : {
      key: 'mnozMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    typCenyDphK : {
      key: 'typCenyDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCeny',
      enum: TypCeny,
      
    },
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },
    szbDph : {
      key: 'szbDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    cenaMj : {
      key: 'cenaMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    slevaPol : {
      key: 'slevaPol',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    uplSlevaDokl : {
      key: 'uplSlevaDokl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sumZkl : {
      key: 'sumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDph : {
      key: 'sumDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkem : {
      key: 'sumCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklMen : {
      key: 'sumZklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphMen : {
      key: 'sumDphMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkemMen : {
      key: 'sumCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    objem : {
      key: 'objem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenJednotka : {
      key: 'cenJednotka',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    typVypCenyK : {
      key: 'typVypCenyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
    },
    cenaMjNakup : {
      key: 'cenaMjNakup',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenaMjProdej : {
      key: 'cenaMjProdej',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenaMjCenikTuz : {
      key: 'cenaMjCenikTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    procZakl : {
      key: 'procZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    slevaMnoz : {
      key: 'slevaMnoz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    zaokrJakK : {
      key: 'zaokrJakK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },
    zaokrNaK : {
      key: 'zaokrNaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    sarze : {
      key: 'sarze',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    expirace : {
      key: 'expirace',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datTrvan : {
      key: 'datTrvan',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datVyroby : {
      key: 'datVyroby',
      type: PropertyType.Date,
      isArray: false,
      
    },
    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavUziv',
      enum: StavUziv,
      
    },
    mnozMjPlan : {
      key: 'mnozMjPlan',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal : {
      key: 'mnozMjReal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    autoZaokr : {
      key: 'autoZaokr',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    autogen : {
      key: 'autogen',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    slevaDokl : {
      key: 'slevaDokl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },
    kopZklMdUcet : {
      key: 'kopZklMdUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopZklDalUcet : {
      key: 'kopZklDalUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopDphMdUcet : {
      key: 'kopDphMdUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopDphDalUcet : {
      key: 'kopDphDalUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopTypUcOp : {
      key: 'kopTypUcOp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopZakazku : {
      key: 'kopZakazku',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopStred : {
      key: 'kopStred',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopCinnost : {
      key: 'kopCinnost',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopKlice : {
      key: 'kopKlice',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopClenDph : {
      key: 'kopClenDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopDatUcto : {
      key: 'kopDatUcto',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    storno : {
      key: 'storno',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stornoPol : {
      key: 'stornoPol',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    typUcOp : {
      key: 'typUcOp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    zklMdUcet : {
      key: 'zklMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zklDalUcet : {
      key: 'zklDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphMdUcet : {
      key: 'dphMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphDalUcet : {
      key: 'dphDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    dodavatel : {
      key: 'dodavatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      
    },
    dphPren : {
      key: 'dphPren',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPreneseniDph',
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    mj : {
      key: 'mj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    mjObjem : {
      key: 'mjObjem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    sazbaDph : {
      key: 'sazbaDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    sazbaDphPuv : {
      key: 'sazbaDphPuv',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    vyrobniCislaOk : {
      key: 'vyrobniCislaOk',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    idPolObchZdroj : {
      key: 'idPolObchZdroj',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    skupPlneni : {
      key: 'skupPlneni',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaPlneni',
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    source : {
      key: 'source',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    ekokomK : {
      key: 'ekokomK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'Ekokom',
      enum: Ekokom,
      
    },
    kopEkokom : {
      key: 'kopEkokom',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    clenKonVykDph : {
      key: 'clenKonVykDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniKontrolniHlaseni',
      
    },
    kopClenKonVykDph : {
      key: 'kopClenKonVykDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ciselnyKodZbozi : {
      key: 'ciselnyKodZbozi',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    druhZbozi : {
      key: 'druhZbozi',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    marze : {
      key: 'marze',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 12,
      
    },
    minMarze : {
      key: 'minMarze',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 12,
      
    },
    stavSkladu : {
      key: 'stavSkladu',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    rezervovano : {
      key: 'rezervovano',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFakturaPrijata',
      
    },
    poplatekParentPolFak : {
      key: 'poplatekParentPolFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFakturaPrijataPolozka',
      
    },
    zdrojProSkl : {
      key: 'zdrojProSkl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zaloha : {
      key: 'zaloha',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sumVedlNaklIntrMen : {
      key: 'sumVedlNaklIntrMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },

    vyrobniCislaVydana : {
      key: 'vyrobniCislaVydana',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFVyrobniCislo'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    vyrobniCislaPrijata : {
      key: 'vyrobniCislaPrijata',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFVyrobniCislo'
    },

  }
}