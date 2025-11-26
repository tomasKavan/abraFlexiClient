import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFTypPoptavkyVydane } from './AFTypPoptavkyVydane'
import { AFMena } from './AFMena'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFZakazka } from './AFZakazka'
import { AFKontakt } from './AFKontakt'
import { AFRadaPoptavkyVydane } from './AFRadaPoptavkyVydane'
import { AFSazbaDph } from './AFSazbaDph'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFTypNabidkyPrijate } from './AFTypNabidkyPrijate'
import { AFStavObchodnihoDokladu } from './AFStavObchodnihoDokladu'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFPoptavkaVydanaPolozka } from './AFPoptavkaVydanaPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'


import { Zamek, StavDoklObch } from '../AFEntityEnums'

export class AFPoptavkaVydana extends AFEntity {
  static EntityPath: string = 'poptavka-vydana'
  static EntityName: string = 'Vydané poptávky'
  static EntityType: string = 'POPTAVKA_OUT'

  // ID (db: IdDoklObch) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: any | null
  // Vytvořil (db: idUziv) - Vytvořil)
  createdBy?: any | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Interní číslo (db: Kod) - Interní číslo)
  declare kod?: string | null
  // Zámek (db: ZamekK) - Zámek)
  zamekK?: Zamek | null
  // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
  doprava?: string | null
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date | null
  // Termín (db: DatTermin) - Termín)
  datTermin?: Date | null
  // Datum sazeb DPH (db: DatSazbyDph) - Datum sazeb DPH)
  datSazbyDph?: Date | null
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
  // Základ DPH sníž. [Kč] (db: SumZklSniz) - Základ DPH sníž. [Kč])
  sumZklSniz?: Big | null
  // Základ DPH 2. sníž. [Kč] (db: SumZklSniz2) - Základ DPH 2. sníž. [Kč])
  sumZklSniz2?: Big | null
  // Základ DPH zákl. [Kč] (db: SumZklZakl) - Základ DPH zákl. [Kč])
  sumZklZakl?: Big | null
  // Základ celkem [Kč] (db: sumOsv + sumZklSniz + sumZklSniz2 + sumZklZakl) - Základ)
  sumZklCelkem?: Big | null
  // DPH snížená [Kč] (db: SumDphSniz) - DPH snížená)
  sumDphSniz?: Big | null
  // DPH 2. snížená [Kč] (db: SumDphSniz2) - DPH 2. snížená)
  sumDphSniz2?: Big | null
  // DPH základní [Kč] (db: SumDphZakl) - DPH základní)
  sumDphZakl?: Big | null
  // DPH celkem [Kč] (db: sumDphSniz + sumDphSniz2 + sumDphZakl) - DPH)
  sumDphCelkem?: Big | null
  // Celkem vč. DPH - sníž. [Kč] (db: sumZklSniz + sumDphSniz) - Celkem vč. DPH - sníž. [Kč])
  sumCelkSniz?: Big | null
  // Celkem vč. DPH - 2. sníž. [Kč] (db: sumZklSniz2 + sumDphSniz2) - Celkem vč. DPH - 2. sníž. [Kč])
  sumCelkSniz2?: Big | null
  // Celkem vč. DPH - zákl. [Kč] (db: sumZklZakl + sumDphZakl) - Celkem vč. DPH - zákl. [Kč])
  sumCelkZakl?: Big | null
  // Celkem [Kč] (db: SumCelkem) - Celkem [Kč])
  sumCelkem?: Big | null
  // Osvob., bez DPH [měna] (db: SumOsvMen) - 0 %)
  sumOsvMen?: Big | null
  // Základ DPH sníž. [měna] (db: SumZklSnizMen) - Základ DPH sníž. [měna])
  sumZklSnizMen?: Big | null
  // Základ DPH 2. sníž. [měna] (db: SumZklSniz2Men) - Základ DPH 2. sníž. [měna])
  sumZklSniz2Men?: Big | null
  // Základ DPH zákl. [měna] (db: SumZklZaklMen) - Základ DPH zákl. [měna])
  sumZklZaklMen?: Big | null
  // Základ celkem [měna] (db: sumOsvMen + sumZklSnizMen + sumZklSniz2Men + sumZklZaklMen) - Základ)
  sumZklCelkemMen?: Big | null
  // DPH základní [měna] (db: SumDphZaklMen) - DPH základní)
  sumDphZaklMen?: Big | null
  // DPH snížená [měna] (db: SumDphSnizMen) - DPH snížená)
  sumDphSnizMen?: Big | null
  // DPH 2. snížená [měna] (db: SumDphSniz2Men) - DPH 2. snížená)
  sumDphSniz2Men?: Big | null
  // DPH celkem [měna] (db: sumDphSnizMen + sumDphSniz2Men + sumDphZaklMen) - DPH)
  sumDphCelkemMen?: Big | null
  // Celkem vč. DPH - sníž. [měna] (db: sumZklSnizMen + sumDphSnizMen) - Celkem vč. DPH - sníž. [měna])
  sumCelkSnizMen?: Big | null
  // Celkem vč. DPH - 2. sníž. [měna] (db: sumZklSniz2Men + sumDphSniz2Men) - Celkem vč. DPH - 2. sníž. [měna])
  sumCelkSniz2Men?: Big | null
  // Celkem vč. DPH - zákl. [měna] (db: sumZklZaklMen + sumDphZaklMen) - Celkem vč. DPH - zákl. [měna])
  sumCelkZaklMen?: Big | null
  // Celkem [měna] (db: SumCelkemMen) - Celkem [měna])
  sumCelkemMen?: Big | null
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big | null
  // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
  kurzMnozstvi?: Big | null
  // Stav (db: StavUzivK) - Stav)
  stavUzivK?: StavDoklObch | null
  // Název firmy nebo jméno osoby (db: NazFirmy) - Název firmy - jméno)
  nazFirmy?: string | null
  // Ulice (db: Ulice) - Ulice)
  ulice?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
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
  // Název firmy - druhá řádka (db: ) - Název firmy - druhá řádka)
  faNazev2?: string | null
  // Pošt. ulice (db: FaUlice) - Ulice)
  faUlice?: string | null
  // Pošt. město (db: FaMesto) - Město)
  faMesto?: string | null
  // Pošt. PSČ (db: FaPsc) - PSČ)
  faPsc?: string | null
  // Pošt. EAN (db: FaEanKod) - EAN)
  faEanKod?: string | null
  // Bezpoložkový doklad (db: BezPolozek) - bezpoložkový doklad)
  bezPolozek?: boolean | null
  // Snížená sazba DPH (db: SzbDphSniz) - Snížená)
  szbDphSniz?: Big | null
  // 2. snížená sazba DPH (db: SzbDphSniz2) - 2. snížená)
  szbDphSniz2?: Big | null
  // Základní sazba DPH (db: SzbDphZakl) - Základní)
  szbDphZakl?: Big | null
  // Storno (db: Storno) - Storno)
  storno?: boolean | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Typ dokladu (db: IdTypDokl) - Typ dokladu)
  typDokl?: AFTypPoptavkyVydane | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null
  // Pošt. stát (db: IdFaStatu) - Stát)
  faStat?: AFStat | null
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion | null
  // Pošt. kraj (db: Idfaregion) - Kraj)
  faRegion?: AFRegion | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: any | null
  // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
  zodpOsoba?: any | null
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt | null
  // Kontaktní jméno (db: KontaktJmeno) - Jméno)
  kontaktJmeno?: string | null
  // Kontaktní e-mail (db: KontaktEmail) - E-mail)
  kontaktEmail?: string | null
  // Kontaktní telefon (db: KontaktTel) - Telefon)
  kontaktTel?: string | null
  // Čís. řada (db: IdRady) - Čís. řada)
  rada?: AFRadaPoptavkyVydane | null
  // Osvobozená sazba DPH (db: IdSazbyDphOsv) - Osvobozená sazba DPH)
  sazbaDphOsv?: AFSazbaDph | null
  // Snížená sazba DPH (db: IdSazbyDphSniz) - Snížená sazba DPH)
  sazbaDphSniz?: AFSazbaDph | null
  // 2. snížená sazba DPH (db: IdSazbyDphSniz2) - 2. snížená sazba DPH)
  sazbaDphSniz2?: AFSazbaDph | null
  // Základní sazba DPH (db: IdSazbyDphZakl) - Základní sazba DPH)
  sazbaDphZakl?: AFSazbaDph | null
  // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
  formaDopravy?: AFFormaDopravy | null
  // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
  uuid?: string | null
  // Zdroj (db: Source) - Zdroj)
  source?: string | null
  // Dodat na adresu (db: IdDodatNa) - Dodat na adresu)
  dodatNa?: AFAdresar | null
  // Typ nabídky přijaté (db: IdTypDoklNabFak) - Typ nabídky přijaté)
  typDoklNabFak?: AFTypNabidkyPrijate | null
  // Stav dokladu (db: IdStavDoklObchCis) - Stav dokladu)
  stavDoklObch?: AFStavObchodnihoDokladu | null

  // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
  'vazebni-doklady'?: AFVazebniDoklad[]
  get vazebniDoklady(): AFVazebniDoklad[] | undefined { return this['vazebni-doklady']}
  // Položky poptávky vydané (type: POPTAVKA_OUT_POLOZKA) - polozkyDokladu)
  polozkyDokladu?: AFPoptavkaVydanaPolozka[]
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
    datTermin : {
      key: 'datTermin',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datSazbyDph : {
      key: 'datSazbyDph',
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
    sumZklSniz : {
      key: 'sumZklSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklSniz2 : {
      key: 'sumZklSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklZakl : {
      key: 'sumZklZakl',
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
    sumDphSniz : {
      key: 'sumDphSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphSniz2 : {
      key: 'sumDphSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphZakl : {
      key: 'sumDphZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphCelkem : {
      key: 'sumDphCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSniz : {
      key: 'sumCelkSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSniz2 : {
      key: 'sumCelkSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkZakl : {
      key: 'sumCelkZakl',
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
    sumZklSnizMen : {
      key: 'sumZklSnizMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklSniz2Men : {
      key: 'sumZklSniz2Men',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklZaklMen : {
      key: 'sumZklZaklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklCelkemMen : {
      key: 'sumZklCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphZaklMen : {
      key: 'sumDphZaklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphSnizMen : {
      key: 'sumDphSnizMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphSniz2Men : {
      key: 'sumDphSniz2Men',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphCelkemMen : {
      key: 'sumDphCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSnizMen : {
      key: 'sumCelkSnizMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSniz2Men : {
      key: 'sumCelkSniz2Men',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkZaklMen : {
      key: 'sumCelkZaklMen',
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
    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavDoklObch',
      enum: StavDoklObch,
      
    },
    nazFirmy : {
      key: 'nazFirmy',
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
    faNazev2 : {
      key: 'faNazev2',
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
    szbDphSniz : {
      key: 'szbDphSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    szbDphSniz2 : {
      key: 'szbDphSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    szbDphZakl : {
      key: 'szbDphZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
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
    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypPoptavkyVydane',
      
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
      maxLength: 20,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    faStat : {
      key: 'faStat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
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
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    zodpOsoba : {
      key: 'zodpOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
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
      afClass: 'AFRadaPoptavkyVydane',
      
    },
    sazbaDphOsv : {
      key: 'sazbaDphOsv',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    sazbaDphSniz : {
      key: 'sazbaDphSniz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    sazbaDphSniz2 : {
      key: 'sazbaDphSniz2',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    sazbaDphZakl : {
      key: 'sazbaDphZakl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
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
    dodatNa : {
      key: 'dodatNa',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    typDoklNabFak : {
      key: 'typDoklNabFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypNabidkyPrijate',
      
    },
    stavDoklObch : {
      key: 'stavDoklObch',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStavObchodnihoDokladu',
      
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
      afClass: 'AFPoptavkaVydanaPolozka'
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