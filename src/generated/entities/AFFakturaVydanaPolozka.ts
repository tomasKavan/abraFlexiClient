import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
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
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSazbaDph } from './AFSazbaDph'
import { AFSkupinaPlneni } from './AFSkupinaPlneni'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFFakturaVydana } from './AFFakturaVydana'
import { AFVyrobniCislo } from './AFVyrobniCislo'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPolozky, TypCeny, TypSzbDph, TypVypCeny, ZaokrJak, ZaokrNa, StavUziv, Ekokom } from '../AFEntityEnums'

export class AFFakturaVydanaPolozka extends AFEntity {
  static EntityPath: string = 'faktura-vydana-polozka'
  static EntityName: string = 'Položky vydaných faktur a prodejek'
  static EntityType: string = 'FAKTURA_OUT_POLOZKA'

  // ID (db: IdPolFak) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: any | null
  // Vytvořil (db: IdCreatedBy) - Vytvořil)
  createdBy?: any | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Úč. pol. (db: Ucetni) - Položka je účetní)
  ucetni?: boolean | null
  // Označení (db: Kod) - Označení)
  declare kod?: string | null
  // EAN (db: EanKod) - EAN)
  eanKod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number | null
  // Typ položky (db: TypPolozkyK) - Typ položky)
  typPolozkyK?: TypPolozky | null
  // Balení (db: BaleniId) - Balení)
  baleniId?: number | null
  // Počet balení (db: MnozBaleni) - Počet balení)
  mnozBaleni?: Big | null
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big | null
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny | null
  // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
  typSzbDphK?: TypSzbDph | null
  // DPH [%] (db: SzbDph) - DPH [%])
  szbDph?: Big | null
  // Cena za MJ (db: CenaMj) - Cena za MJ)
  cenaMj?: Big | null
  // Sleva položky[%] (db: SlevaPol) - Sleva položky)
  slevaPol?: Big | null
  // Uplatnit slevu z dokladu (db: UplSlevaDokl) - Uplatnit slevu z dokladu)
  uplSlevaDokl?: boolean | null
  // Základ [Kč] (db: SumZkl) - Základ [Kč])
  sumZkl?: Big | null
  // DPH [Kč] (db: SumDph) - DPH [Kč])
  sumDph?: Big | null
  // Celkem [Kč] (db: sumZkl + sumDph) - Celkem [Kč])
  sumCelkem?: Big | null
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big | null
  // DPH [měna] (db: SumDphMen) - DPH [měna])
  sumDphMen?: Big | null
  // Celkem [měna] (db: sumZklMen + sumDphMen) - Celkem [měna])
  sumCelkemMen?: Big | null
  // Objem (db: Objem) - Objem)
  objem?: Big | null
  // Cen. jednotka (db: CenJednotka) - Cen. jednotka)
  cenJednotka?: Big | null
  // Způsob výpočtu (db: TypVypCenyK) - Způsob výpočtu)
  typVypCenyK?: TypVypCeny | null
  // Nákupní cena za MJ z ceníku (db: CenaMjNakup) - Nákupní)
  cenaMjNakup?: Big | null
  // Prodejní cena za MJ z ceníku (db: CenaMjProdej) - Základní prodejní)
  cenaMjProdej?: Big | null
  // Ceníková cena [Kč] (db: CenaMjCenikTuz) - Ceníková cena [Kč])
  cenaMjCenikTuz?: Big | null
  // Marže / Přirážka / Rabat / Sleva [%] (db: ProcZakl) - Marže / Přirážka / Rabat / Sleva [%])
  procZakl?: Big | null
  // Množstevní sleva [%] (db: SlevaMnoz) - Množstevní sleva [%])
  slevaMnoz?: Big | null
  // Způsob zaokrouhlení - Cena (db: ZaokrJakK) - Způsob)
  zaokrJakK?: ZaokrJak | null
  // Řád zaokrouhlení - Cena (db: ZaokrNaK) - Řád)
  zaokrNaK?: ZaokrNa | null
  // Šarže (db: Sarze) - Šarže)
  sarze?: string | null
  // Expirace (db: Expirace) - Expirace)
  expirace?: Date | null
  // Trvanlivost (db: DatTrvan) - Trvanlivost)
  datTrvan?: Date | null
  // Datum výroby (db: DatVyroby) - Datum výroby)
  datVyroby?: Date | null
  // Uživatelský stav (db: StavUzivK) - Uživatelský stav)
  stavUzivK?: StavUziv | null
  // Plán MJ (db: MnozMjPlan) - Plánované množství)
  mnozMjPlan?: Big | null
  // Real. MJ (db: MnozMjReal) - Realizované množství)
  mnozMjReal?: Big | null
  // Zaokr. pol. (db: AutoZaokr) - AutoZaokr)
  autoZaokr?: boolean | null
  // Auto. pol. (db: Autogen) - Autogen)
  autogen?: boolean | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Sleva dokladu [%] (db: SlevaDokl) - Sleva dokladu [%])
  slevaDokl?: Big | null
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date | null
  // Kopírovat MD účet základu (db: KopZklMdUcet) - Kopírovat MD účet základu)
  kopZklMdUcet?: boolean | null
  // Kopírovat D účet základu (db: KopZklDalUcet) - Kopírovat D účet základu)
  kopZklDalUcet?: boolean | null
  // Kopírovat MD účet DPH (db: KopDphMdUcet) - Kopírovat MD účet DPH)
  kopDphMdUcet?: boolean | null
  // Kopírovat D účet DPH (db: KopDphDalUcet) - Kopírovat D účet DPH)
  kopDphDalUcet?: boolean | null
  // Kopírovat předpis zaúčtování (db: KopTypUcOp) - Kopírovat předpis zaúčtování)
  kopTypUcOp?: boolean | null
  // Kopírovat zakázku (db: KopZakazku) - Kopírovat zakázku)
  kopZakazku?: boolean | null
  // Kopírovat středisko (db: KopStred) - Kopírovat středisko)
  kopStred?: boolean | null
  // Kopírovat činnost (db: KopCinnost) - Kopírovat činnost)
  kopCinnost?: boolean | null
  // Kopírovat štítky (db: KopKlice) - Kopírovat štítky)
  kopKlice?: boolean | null
  // Kopírovat řádek DPH (db: KopClenDph) - Kopírovat řádek DPH z dokladu)
  kopClenDph?: boolean | null
  // Kopírovat dat. zaúčt. (db: KopDatUcto) - Kopírovat dat. zaúčt.)
  kopDatUcto?: boolean | null
  // Datum zaúčtování (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date | null
  // Storno (db: Storno) - Storno)
  storno?: boolean | null
  // Storno položky (db: StornoPol) - Storno položky)
  stornoPol?: boolean | null
  // Sklad (db: IdBspSkl) - Sklad)
  sklad?: AFSklad | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani | null
  // Účet MD základ (db: IdZklMdUcet) - Má Dáti základu)
  zklMdUcet?: AFUcet | null
  // Účet Dal základ (db: IdZklDalUcet) - Dal základu)
  zklDalUcet?: AFUcet | null
  // Účet MD DPH (db: IdDphMdUcet) - Má dáti DPH)
  dphMdUcet?: AFUcet | null
  // Účet Dal DPH (db: IdDphDalUcet) - Dal DPH)
  dphDalUcet?: AFUcet | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Dodavatel (db: IdFirmy) - Dodavatel)
  dodavatel?: AFAdresar | null
  // Řádky DPH (db: IdClenDph) - Řádky DPH)
  clenDph?: AFCleneniDph | null
  // Kód přenesení DPH (db: IdDphPren) - Kód přenesení DPH)
  dphPren?: AFPreneseniDph | null
  // Kód z ceníku (db: IdCenik) - Kód z ceníku)
  cenik?: AFCenik | null
  // Cenová úroveň (db: IdCenHlad) - Cenová úroveň)
  cenHlad?: AFCenovaUroven | null
  // MJ (db: IdMj) - MJ)
  mj?: AFMernaJednotka | null
  // MJ objemu (db: IdMjObjem) - MJ objemu)
  mjObjem?: AFMernaJednotka | null
  // Sazba DPH (db: IdSazbyDph) - Sazba DPH)
  sazbaDph?: AFSazbaDph | null
  // Původní sazba DPH (db: IdSazbyDphPuv) - Původní sazba DPH)
  sazbaDphPuv?: AFSazbaDph | null
  // Výr. čísla OK (db: VyrobniCislaOk) - Výr. čísla OK)
  vyrobniCislaOk?: boolean | null
  // Zdrojová položka objednávky (db: IdPolObchZdroj) - Zdrojová položka objednávky)
  idPolObchZdroj?: number | null
  // Skupina plnění (db: IdSkupPlneni) - Skupina plnění)
  skupPlneni?: AFSkupinaPlneni | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Zdroj (db: Source) - Zdroj)
  source?: string | null
  // Výkaz EkoKom (db: EkokomK) - Výkaz EkoKom)
  ekokomK?: Ekokom | null
  // Kopírovat výkaz Ekokom (db: KopEkokom) - Kopírovat výkaz Ekokom)
  kopEkokom?: boolean | null
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni | null
  // Kopírovat řádek kon. hl. DPH (db: KopClenKonVykDph) - Kopírovat řádek kontrolního hlášení DPH z dokladu)
  kopClenKonVykDph?: boolean | null
  // Číselný kód zboží (db: CiselnyKodZbozi) - Číselný kód zboží)
  ciselnyKodZbozi?: string | null
  // Druh zboží (db: DruhZbozi) - Druh zboží)
  druhZbozi?: string | null
  // Marže (db: ) - Marže)
  marze?: Big | null
  // Přirážka (db: ) - Přirážka)
  prirazka?: Big | null
  // Minimální cenový rozdíl (db: ) - Minimální cenový rozdíl)
  minMarze?: Big | null
  // Typ min. cen. rozdílu (db: ) - Typ hlídaného minimálního cenového rozdílu)
  typVypoctuHlidatMinK?: TypVypCeny | null
  // Stav skladu (db: ) - Stav skladu)
  stavSkladu?: Big | null
  // Rezervováno (db: ) - Rezervováno)
  rezervovano?: Big | null
  // Doklad (db: IdDoklFak) - Doklad)
  doklFak?: AFFakturaVydana | null
  // Poplatek k položce (db: IdPolFakPoplatek) - Poplatek k položce)
  poplatekParentPolFak?: AFFakturaVydanaPolozka | null
  // Zdroj pro sklad. doklady (db: ZdrojProSkl) - Zdroj pro sklad. doklady)
  zdrojProSkl?: boolean | null
  // Zálohová položka (db: Zaloha) - Zálohová položka)
  zaloha?: boolean | null
  // Celkové vedlejší náklady [Kč] (db: SumVedlNaklIntrMen) - Celkové vedlejší náklady [Kč])
  sumVedlNaklIntrMen?: Big | null
  // Prodejka (db: Prodejka) - Prodejka)
  prodejka?: boolean | null

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
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    createdDate : {
      key: 'createdDate',
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
    cenHlad : {
      key: 'cenHlad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenovaUroven',
      
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
    prirazka : {
      key: 'prirazka',
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
    typVypoctuHlidatMinK : {
      key: 'typVypoctuHlidatMinK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
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
      afClass: 'AFFakturaVydana',
      
    },
    poplatekParentPolFak : {
      key: 'poplatekParentPolFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFakturaVydanaPolozka',
      
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
    prodejka : {
      key: 'prodejka',
      type: PropertyType.Logic,
      isArray: false,
      
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