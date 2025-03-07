import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFTypDokladu } from './AFTypDokladu'
import { AFMena } from './AFMena'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFStatDph } from './AFStatDph'
import { AFCleneniDph } from './AFCleneniDph'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni'
import { AFRada } from './AFRada'
import { AFRocniRada } from './AFRocniRada'
import { AFSazbaDph } from './AFSazbaDph'
import { AFCinnost } from './AFCinnost'


import { StavUziv, Zamek, ZaokrJak, ZaokrNa, StavUhr } from '../AFEntityEnums'

export class AFSaldoKDatu extends AFEntity {
  static EntityPath: string = 'saldo-k-datu'
  static EntityName: string = 'Stav úhrad k datu'
  static EntityType: string = 'SALDO_K_DATU'

  // ID (db: ) - ID)
  idSaldoKdatu?: number
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number
  // Poslední změna (db: ) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: ) - Zkratka)
  kod?: string
  // Modul (db: ) - Modul)
  modul?: string
  // Číslo došlé (db: ) - Číslo došlé)
  cisDosle?: string
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string
  // Číslo smlouvy (db: ) - Číslo smlouvy)
  cisSml?: string
  // Číslo objednávky (db: ) - Číslo objednávky)
  cisObj?: string
  // Objednáno (db: ) - Objednáno)
  datObj?: Date
  // Dodací list (db: ) - Dodací list)
  cisDodak?: string
  // Doprava a vyskladnění (db: ) - Doprava a vyskladnění)
  doprava?: string
  // Datum vyst. (db: ) - Vystaveno)
  datVyst?: Date
  // Datum zdaň. plnění (db: ) - Datum zdaň. plnění)
  duzpPuv?: Date
  // Uplatnit zdaň. plnění (db: ) - Uplatnit zdaň. plnění)
  duzpUcto?: Date
  // Splatnost (db: ) - Splatnost)
  datSplat?: Date
  // Datum úhrady (db: ) - Datum úhrady)
  datUhr?: Date
  // Termín (db: ) - Termín)
  datTermin?: Date
  // Realizace (db: ) - Realizace)
  datReal?: Date
  // Popis (db: ) - Popis)
  popis?: string
  // Poznámka (db: ) - Poznámka)
  poznam?: string
  // Úvodní text (tiskne se před položkami) (db: ) - Úvodní text (tiskne se před položkami))
  uvodTxt?: string
  // Závěrečný text (tiskne se za položkami) (db: ) - Závěrečný text (tiskne se za položkami))
  zavTxt?: string
  // Osvob., bez DPH [Kč] (db: ) - 0 %)
  sumOsv?: Big
  // Základ DPH sníž. [Kč] (db: ) - Základ DPH sníž. [Kč])
  sumZklSniz?: Big
  // Základ DPH 2. sníž. [Kč] (db: ) - Základ DPH 2. sníž. [Kč])
  sumZklSniz2?: Big
  // Základ DPH zákl. [Kč] (db: ) - Základ DPH zákl. [Kč])
  sumZklZakl?: Big
  // Základ celkem [Kč] (db: ) - Základ)
  sumZklCelkem?: Big
  // DPH snížená [Kč] (db: ) - DPH snížená)
  sumDphSniz?: Big
  // DPH 2. snížená [Kč] (db: ) - DPH 2. snížená)
  sumDphSniz2?: Big
  // DPH základní [Kč] (db: ) - DPH základní)
  sumDphZakl?: Big
  // DPH celkem [Kč] (db: ) - DPH)
  sumDphCelkem?: Big
  // Celkem vč. DPH - sníž. [Kč] (db: ) - Celkem vč. DPH - sníž. [Kč])
  sumCelkSniz?: Big
  // Celkem vč. DPH - 2. sníž. [Kč] (db: ) - Celkem vč. DPH - 2. sníž. [Kč])
  sumCelkSniz2?: Big
  // Celkem vč. DPH - zákl. [Kč] (db: ) - Celkem vč. DPH - zákl. [Kč])
  sumCelkZakl?: Big
  // Původní hodnota faktury [Kč] (db: ) - Původní hodnota faktury [Kč])
  sumCelkem?: Big
  // Osvob., bez DPH [měna] (db: ) - 0 %)
  sumOsvMen?: Big
  // Základ DPH sníž. [měna] (db: ) - Základ DPH sníž. [měna])
  sumZklSnizMen?: Big
  // Základ DPH 2. sníž. [měna] (db: ) - Základ DPH 2. sníž. [měna])
  sumZklSniz2Men?: Big
  // Základ DPH zákl. [měna] (db: ) - Základ DPH zákl. [měna])
  sumZklZaklMen?: Big
  // Základ celkem [měna] (db: ) - Základ)
  sumZklCelkemMen?: Big
  // DPH základní [měna] (db: ) - DPH základní)
  sumDphZaklMen?: Big
  // DPH 2. snížená [měna] (db: ) - DPH 2. snížená)
  sumDphSniz2Men?: Big
  // DPH snížená [měna] (db: ) - DPH snížená)
  sumDphSnizMen?: Big
  // DPH celkem [měna] (db: ) - DPH)
  sumDphCelkemMen?: Big
  // Celkem vč. DPH - sníž. [měna] (db: ) - Celkem vč. DPH - sníž. [měna])
  sumCelkSnizMen?: Big
  // Celkem vč. DPH - 2. sníž. [měna] (db: ) - Celkem vč. DPH - 2. sníž. [měna])
  sumCelkSniz2Men?: Big
  // Celkem vč. DPH - zákl. [měna] (db: ) - Celkem vč. DPH - zákl. [měna])
  sumCelkZaklMen?: Big
  // Celkem [měna] (db: ) - Celkem [měna])
  sumCelkemMen?: Big
  // Sleva [%] (db: ) - Sleva [%])
  slevaDokl?: Big
  // Kurz (db: ) - Kurz)
  kurz?: Big
  // Kurz. množství (db: ) - Kurz. množství)
  kurzMnozstvi?: Big
  // Uživatelský stav (db: ) - Uživatelský stav)
  stavUzivK?: StavUziv
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string
  // Ulice (db: ) - Ulice)
  ulice?: string
  // Město (db: ) - Město)
  mesto?: string
  // PSČ (db: ) - PSČ)
  psc?: string
  // EAN (db: ) - EAN)
  eanKod?: string
  // IČO (db: ) - IČO)
  ic?: string
  // DIČ (db: ) - DIČ)
  dic?: string
  // Poštovní adresa je shodná se sídlem (db: ) - Poštovní adresa je shodná se sídlem)
  postovniShodna?: boolean
  // Pošt. jméno firmy (db: ) - Firma)
  faNazev?: string
  // Pošt. ulice (db: ) - Ulice)
  faUlice?: string
  // Pošt. město (db: ) - Město)
  faMesto?: string
  // Pošt. PSČ (db: ) - PSČ)
  faPsc?: string
  // Pošt. EAN (db: ) - EAN)
  faEanKod?: string
  // Číslo bank. účtu (db: ) - Číslo účtu)
  buc?: string
  // IBAN (db: ) - IBAN)
  iban?: string
  // BIC (db: ) - BIC)
  bic?: string
  // Specifický symbol (db: ) - Specifický symbol)
  specSym?: string
  // Bezpol. dokl. (db: ) - bezpoložkový doklad)
  bezPolozek?: boolean
  // Je účetní (db: ) - Doklad je účetní)
  ucetni?: boolean
  // Snížená sazba DPH (db: ) - Snížená)
  szbDphSniz?: Big
  // 2. snížená sazba DPH (db: ) - 2. snížená)
  szbDphSniz2?: Big
  // Základní sazba DPH (db: ) - Základní)
  szbDphZakl?: Big
  // Zaúčtováno (db: ) - Stav zaúčtování)
  zuctovano?: boolean
  // Datum zaúčt. (db: ) - Datum zaúčtování)
  datUcto?: Date
  // Storno (db: ) - Storno)
  storno?: boolean
  // Zámek (db: ) - Zámek)
  zamekK?: Zamek
  // Způsob zaokr. Celkem (db: ) - Celkem (způsob))
  zaokrJakSumK?: ZaokrJak
  // Řád zaokr. Celkem (db: ) - Celkem (řády))
  zaokrNaSumK?: ZaokrNa
  // Způsob zaokr. DPH (db: ) - DPH (způsob))
  zaokrJakDphK?: ZaokrJak
  // Řád zaokr. DPH (db: ) - DPH (řády))
  zaokrNaDphK?: ZaokrNa
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Přílohy (db: ) - Přílohy)
  pocetPriloh?: number
  // Typ dokladu (db: ) - Typ dokladu)
  typDokl?: AFTypDokladu
  // Měna (db: ) - Měna)
  mena?: AFMena
  // Konstantní symbol (db: ) - Konstantní symbol)
  konSym?: AFKonstSymbol
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar
  // Stát (db: ) - Stát)
  stat?: AFStat
  // Pošt. stát (db: ) - Stát)
  faStat?: AFStat
  // Kraj (db: ) - Kraj)
  region?: AFRegion
  // Pošt. kraj (db: ) - Kraj)
  faRegion?: AFRegion
  // Místo určení (db: ) - Místo určení)
  mistUrc?: AFMistoUrceni
  // Účet dodavatele (db: ) - Účet dodavatele)
  banSpojDod?: AFAdresarBankovniUcet
  // Bankovní účet (db: ) - Bankovní účet)
  bankovniUcet?: AFBankovniUcet
  // Předpis zaúčtování (db: ) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani
  // Prim.účet (db: ) - Primární)
  primUcet?: AFUcet
  // Protiúčet (db: ) - Protiúčet)
  protiUcet?: AFUcet
  // Účet DPH zákl. (db: ) - DPH základní)
  dphZaklUcet?: AFUcet
  // Účet DPH sníž. (db: ) - DPH snížená)
  dphSnizUcet?: AFUcet
  // Účet DPH 2. sníž. (db: ) - DPH 2. snížená)
  dphSniz2Ucet?: AFUcet
  // Kód banky (db: ) - Kód banky)
  smerKod?: AFPenezniUstav
  // Stát DPH (db: ) - Stát DPH)
  statDph?: AFStatDph
  // Řádky DPH (db: ) - Řádky DPH)
  clenDph?: AFCleneniDph
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka
  // Stát odesl. (db: ) - Stát odesl.)
  statOdesl?: AFStat
  // Stát určení (db: ) - Stát určení)
  statUrc?: AFStat
  // Stát původu (db: ) - Stát původu)
  statPuvod?: AFStat
  // Podmínky dodání (db: ) - Podmínky dodání)
  dodPodm?: AFIntrastatDodaciPodminky
  // Transakce (db: ) - Transakce)
  obchTrans?: AFIntrastatObchodniTransakce
  // Druh dopravy (db: ) - Druh dopravy)
  druhDopr?: AFIntrastatDruhDopravy
  // Zvláštní pohyby (db: ) - Zvláštní pohyby)
  zvlPoh?: AFIntrastatZvlastniPohyb
  // Kraj odesílatele (db: ) - Kraj odesílatele)
  krajUrc?: AFIntrastatKrajUrceni
  // Uživatel (db: ) - Uživatel)
  uzivatel?: any
  // Zodpovědná osoba (db: ) - Zodpovědná osoba)
  zodpOsoba?: any
  // Čís. řada (db: ) - Čís. řada)
  rada?: AFRada
  // Pol. dokl. řady (db: ) - Pol. dokl. řady)
  polozkaRady?: AFRocniRada
  // Osvobozená sazba DPH (db: ) - Osvobozená sazba DPH)
  sazbaDphOsv?: AFSazbaDph
  // Snížená sazba DPH (db: ) - Snížená sazba DPH)
  sazbaDphSniz?: AFSazbaDph
  // 2. snížená sazba DPH (db: ) - 2. snížená sazba DPH)
  sazbaDphSniz2?: AFSazbaDph
  // Základní sazba DPH (db: ) - Základní sazba DPH)
  sazbaDphZakl?: AFSazbaDph
  // Činnost (db: ) - Činnost)
  cinnost?: AFCinnost
  // Již uhrazeno [Kč] (db: ) - Již uhrazeno [Kč])
  juhSum?: Big
  // Již uhrazeno [měna] (db: ) - Již uhrazeno [měna])
  juhSumMen?: Big
  // Stav úhrady dokladu (db: ) - Stav úhrady dokladu)
  stavUhrK?: StavUhr
  // Zbývá uhradit [Kč] (db: ) - Zbývá uhradit [Kč])
  zbyvaUhradit?: Big
  // Zbývá uhradit [měna] (db: ) - Zbývá uhradit [měna])
  zbyvaUhraditMen?: Big
  // Aktuální hodnota faktury [Kč] (db: ) - Aktuální hodnota faktury [Kč])
  sumCelkemAkt?: Big
  // Uhrazeno k datu [Kč] (db: ) - Uhrazeno k datu [Kč])
  juhSumDat?: Big
  // Uhrazeno k datu [měna] (db: ) - Uhrazeno k datu [měna])
  juhSumDatMen?: Big
  // Stav k datu (db: ) - Stav k datu)
  stavUhrDatK?: StavUhr



  static propAnnotations: Record<string, TypeAnnotation> = {
    idSaldoKdatu : {
      key: 'idSaldoKdatu',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    idDokl : {
      key: 'idDokl',
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
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    cisDosle : {
      key: 'cisDosle',
      type: PropertyType.String,
      isArray: false,
      maxLength: 40,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    cisSml : {
      key: 'cisSml',
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
    datObj : {
      key: 'datObj',
      type: PropertyType.Date,
      isArray: false,
      
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
    duzpPuv : {
      key: 'duzpPuv',
      type: PropertyType.Date,
      isArray: false,
      
    },
    duzpUcto : {
      key: 'duzpUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datSplat : {
      key: 'datSplat',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datUhr : {
      key: 'datUhr',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datTermin : {
      key: 'datTermin',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datReal : {
      key: 'datReal',
      type: PropertyType.Date,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
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
    sumDphSniz2Men : {
      key: 'sumDphSniz2Men',
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
    slevaDokl : {
      key: 'slevaDokl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
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
      enumName: 'StavUziv',
      enum: StavUziv,
      
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
    faEanKod : {
      key: 'faEanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    buc : {
      key: 'buc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    iban : {
      key: 'iban',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    bic : {
      key: 'bic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    specSym : {
      key: 'specSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
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
    zamekK : {
      key: 'zamekK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Zamek',
      enum: Zamek,
      
    },
    zaokrJakSumK : {
      key: 'zaokrJakSumK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },
    zaokrNaSumK : {
      key: 'zaokrNaSumK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    zaokrJakDphK : {
      key: 'zaokrJakDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },
    zaokrNaDphK : {
      key: 'zaokrNaDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    konSym : {
      key: 'konSym',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKonstSymbol',
      
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
    mistUrc : {
      key: 'mistUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMistoUrceni',
      
    },
    banSpojDod : {
      key: 'banSpojDod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresarBankovniUcet',
      
    },
    bankovniUcet : {
      key: 'bankovniUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFBankovniUcet',
      
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
    dphZaklUcet : {
      key: 'dphZaklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphSnizUcet : {
      key: 'dphSnizUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphSniz2Ucet : {
      key: 'dphSniz2Ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    smerKod : {
      key: 'smerKod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPenezniUstav',
      maxLength: 20,
      
    },
    statDph : {
      key: 'statDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStatDph',
      maxLength: 3,
      
    },
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
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
    rada : {
      key: 'rada',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRada',
      
    },
    polozkaRady : {
      key: 'polozkaRady',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRocniRada',
      
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
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    juhSum : {
      key: 'juhSum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    juhSumMen : {
      key: 'juhSumMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    stavUhrK : {
      key: 'stavUhrK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'StavUhr',
      enum: StavUhr,
      
    },
    zbyvaUhradit : {
      key: 'zbyvaUhradit',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zbyvaUhraditMen : {
      key: 'zbyvaUhraditMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    sumCelkemAkt : {
      key: 'sumCelkemAkt',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    juhSumDat : {
      key: 'juhSumDat',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    juhSumDatMen : {
      key: 'juhSumDatMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    stavUhrDatK : {
      key: 'stavUhrDatK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'StavUhr',
      enum: StavUhr,
      
    },


  }
}