import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFTypBanka } from './AFTypBanka'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFMena } from './AFMena'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFStatDph } from './AFStatDph'
import { AFCleneniDph } from './AFCleneniDph'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFZakazka } from './AFZakazka'
import { AFKontakt } from './AFKontakt'
import { AFRadaBanka } from './AFRadaBanka'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFBankaPolozka } from './AFBankaPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'
import { AFDokladKUhrade } from './AFDokladKUhrade'


import { Zamek, TypPohybu, StavUziv, JakUhrazeno } from './AFEntityEnums'

export class AFBanka extends AFEntity {
  static EntityPath: string = 'banka'
  static EntityName: string = 'Banka'
  static EntityType: string = 'BANKA'

  // ID (db: IdDoklInt) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Interní číslo (db: Kod) - Interní číslo)
  kod?: string
  // Zámek (db: ZamekK) - Zámek)
  zamekK?: Zamek
  // Typ pohybu (db: TypPohybuK) - Typ pohybu)
  typPohybuK?: TypPohybu
  // Číslo došlé (db: CisDosle) - Číslo došlé)
  cisDosle?: string
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string
  // Ref. číslo (db: CisObj) - Ref. číslo)
  cisObj?: string
  // Vystaveno (db: DatVyst) - Vystaveno)
  datVyst?: Date
  // Datum zdaň. plnění (db: DuzpPuv) - Datum zdaň. plnění)
  duzpPuv?: Date
  // Uplatnit zdaň. plnění (db: DuzpUcto) - Uplatnit zdaň. plnění)
  duzpUcto?: Date
  // Datum sazeb DPH (db: DatSazbyDph) - Datum sazeb DPH)
  datSazbyDph?: Date
  // Popis (db: Popis) - Popis)
  popis?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Osvob., bez DPH [Kč] (db: SumOsv) - 0 %)
  sumOsv?: Big
  // Základ DPH sníž. [Kč] (db: SumZklSniz) - Základ DPH sníž. [Kč])
  sumZklSniz?: Big
  // Základ DPH 2. sníž. [Kč] (db: SumZklSniz2) - Základ DPH 2. sníž. [Kč])
  sumZklSniz2?: Big
  // Základ DPH zákl. [Kč] (db: SumZklZakl) - Základ DPH zákl. [Kč])
  sumZklZakl?: Big
  // Základ celkem [Kč] (db: sumOsv + sumZklSniz + sumZklSniz2 + sumZklZakl) - Základ)
  sumZklCelkem?: Big
  // DPH snížená [Kč] (db: SumDphSniz) - DPH snížená)
  sumDphSniz?: Big
  // DPH 2. snížená [Kč] (db: SumDphSniz2) - DPH 2. snížená)
  sumDphSniz2?: Big
  // DPH základní [Kč] (db: SumDphZakl) - DPH základní)
  sumDphZakl?: Big
  // DPH celkem [Kč] (db: sumDphSniz + sumDphSniz2 + sumDphZakl) - DPH)
  sumDphCelkem?: Big
  // Celkem vč. DPH - sníž. [Kč] (db: sumZklSniz + sumDphSniz) - Celkem vč. DPH - sníž. [Kč])
  sumCelkSniz?: Big
  // Celkem vč. DPH - 2. sníž. [Kč] (db: sumZklSniz2 + sumDphSniz2) - Celkem vč. DPH - 2. sníž. [Kč])
  sumCelkSniz2?: Big
  // Celkem vč. DPH - zákl. [Kč] (db: sumZklZakl + sumDphZakl) - Celkem vč. DPH - zákl. [Kč])
  sumCelkZakl?: Big
  // Celkem [Kč] (db: SumCelkem) - Celkem [Kč])
  sumCelkem?: Big
  // Osvob., bez DPH [měna] (db: SumOsvMen) - 0 %)
  sumOsvMen?: Big
  // Základ DPH sníž. [měna] (db: SumZklSnizMen) - Základ DPH sníž. [měna])
  sumZklSnizMen?: Big
  // Základ DPH 2. sníž. [měna] (db: SumZklSniz2Men) - Základ DPH 2. sníž. [měna])
  sumZklSniz2Men?: Big
  // Základ DPH zákl. [měna] (db: SumZklZaklMen) - Základ DPH zákl. [měna])
  sumZklZaklMen?: Big
  // Základ celkem [měna] (db: sumOsvMen + sumZklSnizMen + sumZklSniz2Men + sumZklZaklMen) - Základ)
  sumZklCelkemMen?: Big
  // DPH základní [měna] (db: SumDphZaklMen) - DPH základní)
  sumDphZaklMen?: Big
  // DPH snížená [měna] (db: SumDphSnizMen) - DPH snížená)
  sumDphSnizMen?: Big
  // DPH 2. snížená [měna] (db: SumDphSniz2Men) - DPH 2. snížená)
  sumDphSniz2Men?: Big
  // DPH celkem [měna] (db: sumDphSnizMen + sumDphSniz2Men + sumDphZaklMen) - DPH)
  sumDphCelkemMen?: Big
  // Celkem vč. DPH - sníž. [měna] (db: sumZklSnizMen + sumDphSnizMen) - Celkem vč. DPH - sníž. [měna])
  sumCelkSnizMen?: Big
  // Celkem vč. DPH - 2. sníž. [měna] (db: sumZklSniz2Men + sumDphSniz2Men) - Celkem vč. DPH - 2. sníž. [měna])
  sumCelkSniz2Men?: Big
  // Celkem vč. DPH - zákl. [měna] (db: sumZklZaklMen + sumDphZaklMen) - Celkem vč. DPH - zákl. [měna])
  sumCelkZaklMen?: Big
  // Celkem [měna] (db: SumCelkemMen) - Celkem [měna])
  sumCelkemMen?: Big
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big
  // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
  kurzMnozstvi?: Big
  // Uživatelský stav (db: StavUzivK) - Uživatelský stav)
  stavUzivK?: StavUziv
  // Název firmy nebo jméno osoby (db: NazFirmy) - Název firmy - jméno)
  nazFirmy?: string
  // Ulice (db: Ulice) - Ulice)
  ulice?: string
  // Město (db: Mesto) - Město)
  mesto?: string
  // PSČ (db: Psc) - PSČ)
  psc?: string
  // EAN (db: EanKod) - EAN)
  eanKod?: string
  // IČO (db: Ic) - IČO)
  ic?: string
  // DIČ (db: Dic) - DIČ)
  dic?: string
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Číslo bank. účtu (db: Buc) - Číslo účtu)
  buc?: string
  // IBAN (db: Iban) - IBAN)
  iban?: string
  // BIC (db: Bic) - BIC)
  bic?: string
  // Specifický symbol (db: SpecSym) - Specifický symbol)
  specSym?: string
  // Bezpol. dokl. (db: BezPolozek) - bezpoložkový doklad)
  bezPolozek?: boolean
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean
  // Snížená sazba DPH (db: SzbDphSniz) - Snížená)
  szbDphSniz?: Big
  // 2. snížená sazba DPH (db: SzbDphSniz2) - 2. snížená)
  szbDphSniz2?: Big
  // Základní sazba DPH (db: SzbDphZakl) - Základní)
  szbDphZakl?: Big
  // Místo plnění tuzemsko (db: UzpTuzemsko) - Místo plnění tuzemsko)
  uzpTuzemsko?: boolean
  // Zaúčtováno (db: Zuctovano) - Stav zaúčtování)
  zuctovano?: boolean
  // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date
  // Vynechat ze salda (db: VyloucitSaldo) - Vynechat ze salda)
  vyloucitSaldo?: boolean
  // Storno (db: Storno) - Storno)
  storno?: boolean
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Typ dokladu (db: IdTypDokl) - Typ dokladu)
  typDokl?: AFTypBanka
  // Bank.účet (db: IdBsp) - Bank.účet)
  banka?: AFBankovniUcet
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Konstantní symbol (db: IdKonSym) - Konstantní symbol)
  konSym?: AFKonstSymbol
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion
  // Účet firmy (db: IdBanSpojDod) - Účet firmy)
  banSpojDod?: AFAdresarBankovniUcet
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani
  // Účet banky (db: IdPrimUcet) - Účet banky)
  primUcet?: AFUcet
  // Protiúčet (db: IdProtiUcet) - Protiúčet)
  protiUcet?: AFUcet
  // Účet DPH zákl. (db: IdDphZaklUcet) - DPH základní)
  dphZaklUcet?: AFUcet
  // Účet DPH sníž. (db: IdDphSnizUcet) - DPH snížená)
  dphSnizUcet?: AFUcet
  // Účet DPH 2. sníž. (db: IdDphSniz2Ucet) - DPH 2. snížená)
  dphSniz2Ucet?: AFUcet
  // Kód banky (db: IdSmerKod) - Kód banky)
  smerKod?: AFPenezniUstav
  // Stát DPH (db: IdStatDph) - Stát DPH)
  statDph?: AFStatDph
  // Řádky DPH (db: IdClenDph) - Řádky DPH)
  clenDph?: AFCleneniDph
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: any
  // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
  zodpOsoba?: any
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt
  // Kontaktní jméno (db: KontaktJmeno) - Jméno)
  kontaktJmeno?: string
  // Kontaktní email (db: KontaktEmail) - Email)
  kontaktEmail?: string
  // Kontaktní telefon (db: KontaktTel) - Telefon)
  kontaktTel?: string
  // Čís. řada (db: IdRady) - Čís. řada)
  rada?: AFRadaBanka
  // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
  uuid?: string
  // Zdroj (db: Source) - Zdroj)
  source?: string
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni
  // Jak uhrazeno (db: JakUhrK) - Jak uhrazeno)
  jakUhrK?: JakUhrazeno
  // Spárováno (db: Sparovano) - Spárováno)
  sparovano?: boolean
  // Zápočet (db: Zapocet) - Zápočet)
  zapocet?: boolean
  // Číslo dokladu banky (db: VypisCisDokl) - Číslo dokladu banky)
  vypisCisDokl?: string
  // Alt. měna (db: IdMenyAlt) - Alt. měna)
  menaAlt?: AFMena
  // Celkem [alt. měna] (db: SumCelkemAlt) - Celkem [alt. měna])
  sumCelkemAlt?: Big
  // Čís. výpisu (db: CisSouhrnne) - Čís. výpisu)
  cisSouhrnne?: string

  // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
  vazebniDoklady?: AFVazebniDoklad[]
  // Položky bankovního dokladu (type: BANKA_POLOZKA) - polozkyDokladu)
  polozkyDokladu?: AFBankaPolozka[]
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]
  // Vazby mezi doklady (type: VAZBA_MEZI_DOKLADY) - vazby)
  vazby?: AFVazba[]
  // Doklady faktur (type: DOKLAD_K_UHRADE) - doklady-k-uhrade)
  dokladyKUhrade?: AFDokladKUhrade[]
  // Doklady faktur (type: DOKLAD_K_UHRADE) - doklady-k-uhrade-bez-filtrovani-firmy)
  dokladyKUhradeBezFiltrovaniFirmy?: AFDokladKUhrade[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    zamekK : {
      key: 'zamekK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Zamek',
      enum: Zamek,
      
    },    typPohybuK : {
      key: 'typPohybuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPohybu',
      enum: TypPohybu,
      
    },    cisDosle : {
      key: 'cisDosle',
      type: PropertyType.String,
      isArray: false,
      maxLength: 40,
      
    },    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },    cisObj : {
      key: 'cisObj',
      type: PropertyType.String,
      isArray: false,
      maxLength: 2000,
      
    },    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },    duzpPuv : {
      key: 'duzpPuv',
      type: PropertyType.Date,
      isArray: false,
      
    },    duzpUcto : {
      key: 'duzpUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },    datSazbyDph : {
      key: 'datSazbyDph',
      type: PropertyType.Date,
      isArray: false,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    sumOsv : {
      key: 'sumOsv',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklSniz : {
      key: 'sumZklSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklSniz2 : {
      key: 'sumZklSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklZakl : {
      key: 'sumZklZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklCelkem : {
      key: 'sumZklCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphSniz : {
      key: 'sumDphSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphSniz2 : {
      key: 'sumDphSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphZakl : {
      key: 'sumDphZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphCelkem : {
      key: 'sumDphCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkSniz : {
      key: 'sumCelkSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkSniz2 : {
      key: 'sumCelkSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkZakl : {
      key: 'sumCelkZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkem : {
      key: 'sumCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumOsvMen : {
      key: 'sumOsvMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    sumZklSnizMen : {
      key: 'sumZklSnizMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklSniz2Men : {
      key: 'sumZklSniz2Men',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklZaklMen : {
      key: 'sumZklZaklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklCelkemMen : {
      key: 'sumZklCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphZaklMen : {
      key: 'sumDphZaklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphSnizMen : {
      key: 'sumDphSnizMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphSniz2Men : {
      key: 'sumDphSniz2Men',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphCelkemMen : {
      key: 'sumDphCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkSnizMen : {
      key: 'sumCelkSnizMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkSniz2Men : {
      key: 'sumCelkSniz2Men',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkZaklMen : {
      key: 'sumCelkZaklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkemMen : {
      key: 'sumCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    kurz : {
      key: 'kurz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    kurzMnozstvi : {
      key: 'kurzMnozstvi',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavUziv',
      enum: StavUziv,
      
    },    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    ulice : {
      key: 'ulice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    psc : {
      key: 'psc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    ic : {
      key: 'ic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    dic : {
      key: 'dic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },    buc : {
      key: 'buc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    iban : {
      key: 'iban',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    bic : {
      key: 'bic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    specSym : {
      key: 'specSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    bezPolozek : {
      key: 'bezPolozek',
      type: PropertyType.Logic,
      isArray: false,
      
    },    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },    szbDphSniz : {
      key: 'szbDphSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    szbDphSniz2 : {
      key: 'szbDphSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    szbDphZakl : {
      key: 'szbDphZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    uzpTuzemsko : {
      key: 'uzpTuzemsko',
      type: PropertyType.Logic,
      isArray: false,
      
    },    zuctovano : {
      key: 'zuctovano',
      type: PropertyType.Logic,
      isArray: false,
      
    },    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },    vyloucitSaldo : {
      key: 'vyloucitSaldo',
      type: PropertyType.Logic,
      isArray: false,
      
    },    storno : {
      key: 'storno',
      type: PropertyType.Logic,
      isArray: false,
      
    },    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypBanka,
      
    },    banka : {
      key: 'banka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFBankovniUcet,
      
    },    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },    konSym : {
      key: 'konSym',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFKonstSymbol,
      
    },    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      maxLength: 20,
      
    },    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStat,
      maxLength: 3,
      
    },    region : {
      key: 'region',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRegion,
      
    },    banSpojDod : {
      key: 'banSpojDod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresarBankovniUcet,
      
    },    typUcOp : {
      key: 'typUcOp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPredpisZauctovani,
      
    },    primUcet : {
      key: 'primUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    protiUcet : {
      key: 'protiUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    dphZaklUcet : {
      key: 'dphZaklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    dphSnizUcet : {
      key: 'dphSnizUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    dphSniz2Ucet : {
      key: 'dphSniz2Ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    smerKod : {
      key: 'smerKod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPenezniUstav,
      maxLength: 20,
      
    },    statDph : {
      key: 'statDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStatDph,
      maxLength: 3,
      
    },    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCleneniDph,
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCinnost,
      
    },    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      maxLength: 30,
      
    },    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },    zodpOsoba : {
      key: 'zodpOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },    kontaktOsoba : {
      key: 'kontaktOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFKontakt,
      
    },    kontaktJmeno : {
      key: 'kontaktJmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    kontaktEmail : {
      key: 'kontaktEmail',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    kontaktTel : {
      key: 'kontaktTel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    rada : {
      key: 'rada',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRadaBanka,
      
    },    uuid : {
      key: 'uuid',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },    source : {
      key: 'source',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },    clenKonVykDph : {
      key: 'clenKonVykDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCleneniKontrolniHlaseni,
      
    },    jakUhrK : {
      key: 'jakUhrK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakUhrazeno',
      enum: JakUhrazeno,
      
    },    sparovano : {
      key: 'sparovano',
      type: PropertyType.Logic,
      isArray: false,
      
    },    zapocet : {
      key: 'zapocet',
      type: PropertyType.Logic,
      isArray: false,
      
    },    vypisCisDokl : {
      key: 'vypisCisDokl',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },    menaAlt : {
      key: 'menaAlt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },    sumCelkemAlt : {
      key: 'sumCelkemAlt',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    cisSouhrnne : {
      key: 'cisSouhrnne',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    vazebniDoklady : {
      key: 'vazebniDoklady',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFVazebniDoklad
    },
    polozkyDokladu : {
      key: 'polozkyDokladu',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFBankaPolozka
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFPriloha
    },
    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUdalost
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },
    vazby : {
      key: 'vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFVazba
    },
    dokladyKUhrade : {
      key: 'dokladyKUhrade',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFDokladKUhrade
    },
    dokladyKUhradeBezFiltrovaniFirmy : {
      key: 'dokladyKUhradeBezFiltrovaniFirmy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFDokladKUhrade
    },

  }
}