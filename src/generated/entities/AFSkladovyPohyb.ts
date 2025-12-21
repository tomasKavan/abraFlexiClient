import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFRegion } from './AFRegion.js'
import { AFStat } from './AFStat.js'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb.js'
import { AFSklad } from './AFSklad.js'
import { AFMena } from './AFMena.js'
import { AFAdresar } from './AFAdresar.js'
import { AFMistoUrceni } from './AFMistoUrceni.js'
import { AFPredpisZauctovani } from './AFPredpisZauctovani.js'
import { AFUcet } from './AFUcet.js'
import { AFStredisko } from './AFStredisko.js'
import { AFCinnost } from './AFCinnost.js'
import { AFZakazka } from './AFZakazka.js'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky.js'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce.js'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy.js'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb.js'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni.js'
import { AFKontakt } from './AFKontakt.js'
import { AFRadaSkladovyPohyb } from './AFRadaSkladovyPohyb.js'
import { AFFormaDopravy } from './AFFormaDopravy.js'
import { AFInventura } from './AFInventura.js'
import { AFVazebniDoklad } from './AFVazebniDoklad.js'
import { AFSkladovyPohybPolozka } from './AFSkladovyPohybPolozka.js'
import { AFPriloha } from './AFPriloha.js'
import { AFUdalost } from './AFUdalost.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'
import { AFVazba } from './AFVazba.js'


import { Zamek, TypPohybu, StavSklad, TypPohybuSklad } from '../AFEntityEnums.js'

export class AFSkladovyPohyb extends AFEntity {
  static EntityPath: string = 'skladovy-pohyb'
  static EntityName: string = 'Příjemky/výdejky'
  static EntityType: string = 'SKLADOVY_POHYB'

  // ID (db: IdDoklSklad) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: AFUzivatel | null
  // Vytvořil (db: idUziv) - Vytvořil)
  createdBy?: AFUzivatel | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Interní číslo (db: Kod) - Interní číslo)
  declare kod?: string | null
  // Zámek (db: ZamekK) - Zámek)
  zamekK?: Zamek | null
  // Typ pohybu (db: TypPohybuK) - Typ pohybu)
  typPohybuK?: TypPohybu | null
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string | null
  // Číslo objednávky (db: CisObj) - Číslo objednávky)
  cisObj?: string | null
  // Dodací list (db: CisDodak) - Dodací list)
  cisDodak?: string | null
  // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
  doprava?: string | null
  // Datum vystavení (db: DatVyst) - Datum vystavení)
  datVyst?: Date | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Úvodní text (tiskne se před položkami) (db: UvodTxt) - Úvodní text (tiskne se před položkami))
  uvodTxt?: string | null
  // Závěrečný text (tiskne se za položkami) (db: ZavTxt) - Závěrečný text (tiskne se za položkami))
  zavTxt?: string | null
  // Osvob., bez DPH [Kč] (db: SumOsv) - 0 %)
  sumOsv?: Big | null
  // Základ celkem [Kč] (db: sumOsv + sumZklSniz + sumZklSniz2 + sumZklZakl) - Základ)
  sumZklCelkem?: Big | null
  // Celkem [Kč] (db: SumCelkem) - Celkem [Kč])
  sumCelkem?: Big | null
  // Osvob., bez DPH [měna] (db: SumOsvMen) - 0 %)
  sumOsvMen?: Big | null
  // Základ celkem [měna] (db: sumOsvMen + sumZklSnizMen + sumZklSniz2Men + sumZklZaklMen) - Základ)
  sumZklCelkemMen?: Big | null
  // Celkem [měna] (db: SumCelkemMen) - Celkem [měna])
  sumCelkemMen?: Big | null
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big | null
  // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
  kurzMnozstvi?: Big | null
  // Název firmy nebo jméno osoby (db: NazFirmy) - Název firmy - jméno)
  nazFirmy?: string | null
  // Název firmy - druhá řádka (db: ) - Název firmy - druhá řádka)
  faNazev2?: string | null
  // Ulice (db: Ulice) - Ulice)
  ulice?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion | null
  // Pošt. kraj (db: Idfaregion) - Kraj)
  faRegion?: AFRegion | null
  // EAN (db: EanKod) - EAN)
  eanKod?: string | null
  // IČO (db: Ic) - IČO)
  ic?: string | null
  // DIČ (db: Dic) - DIČ)
  dic?: string | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Poštovní adresa je shodná se sídlem (db: PostovniShodna) - Poštovní adresa je shodná se sídlem)
  postovniShodna?: boolean | null
  // Pošt. jméno firmy (db: FaNazev) - Firma)
  faNazev?: string | null
  // Pošt. ulice (db: FaUlice) - Ulice)
  faUlice?: string | null
  // Pošt. město (db: FaMesto) - Město)
  faMesto?: string | null
  // Pošt. PSČ (db: FaPsc) - PSČ)
  faPsc?: string | null
  // Pošt. stát (db: IdFaStatu) - Stát)
  faStat?: AFStat | null
  // Pošt. EAN (db: FaEanKod) - EAN)
  faEanKod?: string | null
  // Bezpoložkový doklad (db: BezPolozek) - bezpoložkový doklad)
  bezPolozek?: boolean | null
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean | null
  // Zaúčtováno (db: Zuctovano) - Stav zaúčtování)
  zuctovano?: boolean | null
  // Datum zaúčtování (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date | null
  // Storno (db: Storno) - Storno)
  storno?: boolean | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Hrom. fakturace (db: HromFakt) - Hrom. fakturace)
  hromFakt?: boolean | null
  // Typ dokladu (db: IdTypDokl) - Typ dokladu)
  typDokl?: AFTypSkladovyPohyb | null
  // Sklad (db: IdBsp) - Sklad)
  sklad?: AFSklad | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null
  // Místo určení (db: IdMur) - Místo určení)
  mistUrc?: AFMistoUrceni | null
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani | null
  // Účet skladu (db: IdPrimUcet) - Účet skladu)
  primUcet?: AFUcet | null
  // Protiúčet (db: IdProtiUcet) - Protiúčet)
  protiUcet?: AFUcet | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Stát odesl. (db: IdStatOdesl) - Stát odesl.)
  statOdesl?: AFStat | null
  // Stát určení (db: IdStatUrc) - Stát určení)
  statUrc?: AFStat | null
  // Stát původu (db: IdStatPuvod) - Stát původu)
  statPuvod?: AFStat | null
  // Podmínky dodání (db: IdDodPodm) - Podmínky dodání)
  dodPodm?: AFIntrastatDodaciPodminky | null
  // Transakce (db: IdObchTrans) - Transakce)
  obchTrans?: AFIntrastatObchodniTransakce | null
  // Druh dopravy (db: IdDruhDopr) - Druh dopravy)
  druhDopr?: AFIntrastatDruhDopravy | null
  // Zvláštní pohyby (db: IdZvlPoh) - Zvláštní pohyby)
  zvlPoh?: AFIntrastatZvlastniPohyb | null
  // Kraj odesílatele (db: IdKrajUrc) - Kraj odesílatele)
  krajUrc?: AFIntrastatKrajUrceni | null
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: AFUzivatel | null
  // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
  zodpOsoba?: AFUzivatel | null
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt | null
  // Kontaktní jméno (db: KontaktJmeno) - Jméno)
  kontaktJmeno?: string | null
  // Kontaktní e-mail (db: KontaktEmail) - E-mail)
  kontaktEmail?: string | null
  // Kontaktní telefon (db: KontaktTel) - Telefon)
  kontaktTel?: string | null
  // Čís. řada (db: IdRady) - Čís. řada)
  rada?: AFRadaSkladovyPohyb | null
  // Zdroj pro faktury (db: ZdrojProFak) - Zdroj pro faktury)
  zdrojProFak?: boolean | null
  // Stav dokladu (db: StavSkladK) - Stav dokladu)
  stavSkladK?: StavSklad | null
  // Typ pohybu + upřesnění (db: TypPohybuSkladK) - Typ pohybu + upřesnění)
  typPohybuSkladK?: TypPohybuSklad | null
  // Typ skladového dokladu (db: IdTypDoklSkl) - Typ skladového dokladu)
  typDoklSkl?: AFTypSkladovyPohyb | null
  // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
  formaDopravy?: AFFormaDopravy | null
  // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
  uuid?: string | null
  // Zdroj (db: Source) - Zdroj)
  source?: string | null
  // Vynechat ze salda (db: VyloucitSaldo) - Vynechat ze salda)
  vyloucitSaldo?: boolean | null
  // Sklad cíl (db: IdSkladCil) - Sklad cíl)
  skladCil?: AFSklad | null
  // Inventura (db: IdInventura) - Inventura)
  inventura?: AFInventura | null
  // ID výdejního místa (db: BranchId) - ID výdejního místa)
  branchId?: string | null

  // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
  'vazebni-doklady'?: AFVazebniDoklad[]
  get vazebniDoklady(): AFVazebniDoklad[] | undefined { return this['vazebni-doklady']}
  // Položky příjemky/výdejky (type: SKLADOVY_POHYB_POLOZKA) - polozkyDokladu)
  polozkyDokladu?: AFSkladovyPohybPolozka[]
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Vazby mezi doklady (type: VAZBA_MEZI_DOKLADY) - vazby)
  vazby?: AFVazba[]


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
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    createdDate : {
      key: 'createdDate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    zamekK : {
      key: 'zamekK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Zamek',
      enum: Zamek,
      
    },
    typPohybuK : {
      key: 'typPohybuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPohybu',
      enum: TypPohybu,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    cisObj : {
      key: 'cisObj',
      type: PropertyType.String,
      isArray: false,
      maxLength: 2000,
      
    },
    cisDodak : {
      key: 'cisDodak',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    doprava : {
      key: 'doprava',
      type: PropertyType.String,
      isArray: false,
      
    },
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    uvodTxt : {
      key: 'uvodTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    zavTxt : {
      key: 'zavTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    sumOsv : {
      key: 'sumOsv',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklCelkem : {
      key: 'sumZklCelkem',
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
    sumOsvMen : {
      key: 'sumOsvMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    sumZklCelkemMen : {
      key: 'sumZklCelkemMen',
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
    kurz : {
      key: 'kurz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    kurzMnozstvi : {
      key: 'kurzMnozstvi',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faNazev2 : {
      key: 'faNazev2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    ulice : {
      key: 'ulice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    psc : {
      key: 'psc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    region : {
      key: 'region',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
    },
    faRegion : {
      key: 'faRegion',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
    },
    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    ic : {
      key: 'ic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    dic : {
      key: 'dic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    postovniShodna : {
      key: 'postovniShodna',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    faNazev : {
      key: 'faNazev',
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
    faStat : {
      key: 'faStat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    faEanKod : {
      key: 'faEanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    bezPolozek : {
      key: 'bezPolozek',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zuctovano : {
      key: 'zuctovano',
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
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    hromFakt : {
      key: 'hromFakt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    mistUrc : {
      key: 'mistUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMistoUrceni',
      
    },
    typUcOp : {
      key: 'typUcOp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    primUcet : {
      key: 'primUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    protiUcet : {
      key: 'protiUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
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
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    statOdesl : {
      key: 'statOdesl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statUrc : {
      key: 'statUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statPuvod : {
      key: 'statPuvod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    dodPodm : {
      key: 'dodPodm',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatDodaciPodminky',
      
    },
    obchTrans : {
      key: 'obchTrans',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatObchodniTransakce',
      
    },
    druhDopr : {
      key: 'druhDopr',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatDruhDopravy',
      
    },
    zvlPoh : {
      key: 'zvlPoh',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatZvlastniPohyb',
      
    },
    krajUrc : {
      key: 'krajUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatKrajUrceni',
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    zodpOsoba : {
      key: 'zodpOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    kontaktOsoba : {
      key: 'kontaktOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKontakt',
      
    },
    kontaktJmeno : {
      key: 'kontaktJmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    kontaktEmail : {
      key: 'kontaktEmail',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    kontaktTel : {
      key: 'kontaktTel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    rada : {
      key: 'rada',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadaSkladovyPohyb',
      
    },
    zdrojProFak : {
      key: 'zdrojProFak',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stavSkladK : {
      key: 'stavSkladK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavSklad',
      enum: StavSklad,
      
    },
    typPohybuSkladK : {
      key: 'typPohybuSkladK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPohybuSklad',
      enum: TypPohybuSklad,
      
    },
    typDoklSkl : {
      key: 'typDoklSkl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      
    },
    formaDopravy : {
      key: 'formaDopravy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaDopravy',
      
    },
    uuid : {
      key: 'uuid',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    source : {
      key: 'source',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    vyloucitSaldo : {
      key: 'vyloucitSaldo',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    skladCil : {
      key: 'skladCil',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    inventura : {
      key: 'inventura',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFInventura',
      
    },
    branchId : {
      key: 'branchId',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },

    'vazebni-doklady' : {
      key: 'vazebni-doklady',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFVazebniDoklad'
    },
    polozkyDokladu : {
      key: 'polozkyDokladu',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFSkladovyPohybPolozka'
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUdalost'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    vazby : {
      key: 'vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFVazba'
    },

  }
}