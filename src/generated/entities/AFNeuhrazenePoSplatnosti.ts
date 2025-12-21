import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFTypDokladu } from './AFTypDokladu.js'
import { AFMena } from './AFMena.js'
import { AFKonstSymbol } from './AFKonstSymbol.js'
import { AFAdresar } from './AFAdresar.js'
import { AFStat } from './AFStat.js'
import { AFRegion } from './AFRegion.js'
import { AFMistoUrceni } from './AFMistoUrceni.js'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet.js'
import { AFBankovniUcetSkladPokladna } from './AFBankovniUcetSkladPokladna.js'
import { AFBankovniUcet } from './AFBankovniUcet.js'
import { AFPredpisZauctovani } from './AFPredpisZauctovani.js'
import { AFUcet } from './AFUcet.js'
import { AFPenezniUstav } from './AFPenezniUstav.js'
import { AFStatDph } from './AFStatDph.js'
import { AFCleneniDph } from './AFCleneniDph.js'
import { AFStredisko } from './AFStredisko.js'
import { AFZakazka } from './AFZakazka.js'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky.js'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce.js'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy.js'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb.js'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFRada } from './AFRada.js'
import { AFSazbaDph } from './AFSazbaDph.js'
import { AFCinnost } from './AFCinnost.js'


import { TypPohybu, StavUziv, Zamek, ZaokrJak, ZaokrNa } from '../AFEntityEnums.js'

export class AFNeuhrazenePoSplatnosti extends AFEntity {
  static EntityPath: string = 'neuhrazene-po-splatnosti'
  static EntityName: string = 'Neuhrazené po splatnosti'
  static EntityType: string = 'NEUHRAZENE_PO_SPLATNOSTI'

  // ID po splatnosti (db: ) - ID po splatnosti)
  idPoSplatnosti?: Big | null
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: Big | null
  // Poslední změna (db: ) - Poslední změna)
  lastUpdate?: Date | null
  // Interní číslo (db: ) - Interní číslo)
  declare kod?: string | null
  // Modul (db: ) - Modul)
  modul?: string | null
  // Typ pohybu (db: ) - Typ pohybu)
  typPohybuK?: TypPohybu | null
  // Číslo došlé (db: ) - Číslo došlé)
  cisDosle?: string | null
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string | null
  // Číslo smlouvy (db: ) - Číslo smlouvy)
  cisSml?: string | null
  // Číslo objednávky (db: ) - Číslo objednávky)
  cisObj?: string | null
  // Objednáno (db: ) - Objednáno)
  datObj?: Date | null
  // Dodací list (db: ) - Dodací list)
  cisDodak?: string | null
  // Doprava a vyskladnění (db: ) - Doprava a vyskladnění)
  doprava?: string | null
  // Datum vyst. (db: ) - Vystaveno)
  datVyst?: Date | null
  // Datum zdaň. plnění (db: ) - Datum zdaň. plnění)
  duzpPuv?: Date | null
  // Uplatnit zdaň. plnění (db: ) - Uplatnit zdaň. plnění)
  duzpUcto?: Date | null
  // Splatnost (db: ) - Splatnost)
  datSplat?: Date | null
  // Datum úhrady (db: ) - Datum úhrady)
  datUhr?: Date | null
  // Termín (db: ) - Termín)
  datTermin?: Date | null
  // Realizace (db: ) - Realizace)
  datReal?: Date | null
  // Popis (db: ) - Popis)
  popis?: string | null
  // Poznámka (db: ) - Poznámka)
  poznam?: string | null
  // Úvodní text (tiskne se před položkami) (db: ) - Úvodní text (tiskne se před položkami))
  uvodTxt?: string | null
  // Závěrečný text (tiskne se za položkami) (db: ) - Závěrečný text (tiskne se za položkami))
  zavTxt?: string | null
  // Osvob., bez DPH [Kč] (db: ) - 0 %)
  sumOsv?: Big | null
  // Základ DPH sníž. [Kč] (db: ) - Základ DPH sníž. [Kč])
  sumZklSniz?: Big | null
  // Základ DPH 2. sníž. [Kč] (db: ) - Základ DPH 2. sníž. [Kč])
  sumZklSniz2?: Big | null
  // Základ DPH zákl. [Kč] (db: ) - Základ DPH zákl. [Kč])
  sumZklZakl?: Big | null
  // Základ celkem [Kč] (db: ) - Základ)
  sumZklCelkem?: Big | null
  // DPH snížená [Kč] (db: ) - DPH snížená)
  sumDphSniz?: Big | null
  // DPH 2. snížená [Kč] (db: ) - DPH 2. snížená)
  sumDphSniz2?: Big | null
  // DPH základní [Kč] (db: ) - DPH základní)
  sumDphZakl?: Big | null
  // DPH celkem [Kč] (db: ) - DPH)
  sumDphCelkem?: Big | null
  // Celkem vč. DPH - sníž. [Kč] (db: ) - Celkem vč. DPH - sníž. [Kč])
  sumCelkSniz?: Big | null
  // Celkem vč. DPH - 2. sníž. [Kč] (db: ) - Celkem vč. DPH - 2. sníž. [Kč])
  sumCelkSniz2?: Big | null
  // Celkem vč. DPH - zákl. [Kč] (db: ) - Celkem vč. DPH - zákl. [Kč])
  sumCelkZakl?: Big | null
  // Celkem [Kč] (db: ) - Celkem [Kč])
  sumCelkem?: Big | null
  // Osvob., bez DPH [měna] (db: ) - 0 %)
  sumOsvMen?: Big | null
  // Základ DPH sníž. [měna] (db: ) - Základ DPH sníž. [měna])
  sumZklSnizMen?: Big | null
  // Základ DPH 2. sníž. [měna] (db: ) - Základ DPH 2. sníž. [měna])
  sumZklSniz2Men?: Big | null
  // Základ DPH zákl. [měna] (db: ) - Základ DPH zákl. [měna])
  sumZklZaklMen?: Big | null
  // Základ celkem [měna] (db: ) - Základ)
  sumZklCelkemMen?: Big | null
  // DPH základní [měna] (db: ) - DPH základní)
  sumDphZaklMen?: Big | null
  // DPH 2. snížená [měna] (db: ) - DPH 2. snížená)
  sumDphSniz2Men?: Big | null
  // DPH snížená [měna] (db: ) - DPH snížená)
  sumDphSnizMen?: Big | null
  // DPH celkem [měna] (db: ) - DPH)
  sumDphCelkemMen?: Big | null
  // Celkem vč. DPH - sníž. [měna] (db: ) - Celkem vč. DPH - sníž. [měna])
  sumCelkSnizMen?: Big | null
  // Celkem vč. DPH - 2. sníž. [měna] (db: ) - Celkem vč. DPH - 2. sníž. [měna])
  sumCelkSniz2Men?: Big | null
  // Celkem vč. DPH - zákl. [měna] (db: ) - Celkem vč. DPH - zákl. [měna])
  sumCelkZaklMen?: Big | null
  // Celkem [měna] (db: ) - Celkem [měna])
  sumCelkemMen?: Big | null
  // Snížená DPH koeficientem (db: ) - Snížená DPH koeficientem)
  dphSnizKoef?: boolean | null
  // Základní DPH koeficientem (db: ) - Základní DPH koeficientem)
  dphZaklKoef?: boolean | null
  // Sleva [%] (db: ) - Sleva [%])
  slevaDokl?: Big | null
  // Kurz (db: ) - Kurz)
  kurz?: Big | null
  // Kurz. množství (db: ) - Kurz. množství)
  kurzMnozstvi?: Big | null
  // Uživatelský stav (db: ) - Uživatelský stav)
  stavUzivK?: StavUziv | null
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string | null
  // Ulice (db: ) - Ulice)
  ulice?: string | null
  // Město (db: ) - Město)
  mesto?: string | null
  // PSČ (db: ) - PSČ)
  psc?: string | null
  // EAN (db: ) - EAN)
  eanKod?: string | null
  // IČO (db: ) - IČO)
  ic?: string | null
  // DIČ (db: ) - DIČ)
  dic?: string | null
  // Poštovní adresa je shodná se sídlem (db: ) - Poštovní adresa je shodná se sídlem)
  postovniShodna?: boolean | null
  // Pošt. jméno firmy (db: ) - Firma)
  faNazev?: string | null
  // Pošt. ulice (db: ) - Ulice)
  faUlice?: string | null
  // Pošt. město (db: ) - Město)
  faMesto?: string | null
  // Pošt. PSČ (db: ) - PSČ)
  faPsc?: string | null
  // Pošt. EAN (db: ) - EAN)
  faEanKod?: string | null
  // Číslo bank. účtu (db: ) - Číslo účtu)
  buc?: string | null
  // IBAN (db: ) - IBAN)
  iban?: string | null
  // BIC (db: ) - BIC)
  bic?: string | null
  // Specifický symbol (db: ) - Specifický symbol)
  specSym?: string | null
  // Bezpoložkový doklad (db: ) - bezpoložkový doklad)
  bezPolozek?: boolean | null
  // Je účetní (db: ) - Doklad je účetní)
  ucetni?: boolean | null
  // Snížená sazba DPH (db: ) - Snížená)
  szbDphSniz?: Big | null
  // 2. snížená sazba DPH (db: ) - 2. snížená)
  szbDphSniz2?: Big | null
  // Základní sazba DPH (db: ) - Základní)
  szbDphZakl?: Big | null
  // Zaúčtováno (db: ) - Stav zaúčtování)
  zuctovano?: boolean | null
  // Datum zaúčtování (db: ) - Datum zaúčtování)
  datUcto?: Date | null
  // Storno (db: ) - Storno)
  storno?: boolean | null
  // Zámek (db: ) - Zámek)
  zamekK?: Zamek | null
  // Způsob zaokrouhlení - Celkem (db: ) - Celkem (způsob))
  zaokrJakSumK?: ZaokrJak | null
  // Řád zaokrouhlení - Celkem (db: ) - Celkem (řády))
  zaokrNaSumK?: ZaokrNa | null
  // Způsob zaokrouhlení - DPH (db: ) - DPH (způsob))
  zaokrJakDphK?: ZaokrJak | null
  // Řád zaokrouhlení - DPH (db: ) - DPH (řády))
  zaokrNaDphK?: ZaokrNa | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Přílohy (db: ) - Přílohy)
  pocetPriloh?: number | null
  // Typ dokladu (db: ) - Typ dokladu)
  typDokl?: AFTypDokladu | null
  // Měna (db: ) - Měna)
  mena?: AFMena | null
  // Konstantní symbol (db: ) - Konstantní symbol)
  konSym?: AFKonstSymbol | null
  // Zkratka firmy (db: ) - Zkratka firmy)
  firma?: AFAdresar | null
  // Stát (db: ) - Stát)
  stat?: AFStat | null
  // Pošt. stát (db: ) - Stát)
  faStat?: AFStat | null
  // Kraj (db: ) - Kraj)
  region?: AFRegion | null
  // Pošt. kraj (db: ) - Kraj)
  faRegion?: AFRegion | null
  // Místo určení (db: ) - Místo určení)
  mistUrc?: AFMistoUrceni | null
  // Účet dodavatele (db: ) - Účet dodavatele)
  banSpojDod?: AFAdresarBankovniUcet | null
  // Banka/pokladna/sklad (db: ) - Banka/pokladna/sklad)
  bsp?: AFBankovniUcetSkladPokladna | null
  // Bankovní účet (db: ) - Bankovní účet)
  bankovniUcet?: AFBankovniUcet | null
  // Předpis zaúčtování (db: ) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani | null
  // Prim.účet (db: ) - Primární)
  primUcet?: AFUcet | null
  // Protiúčet (db: ) - Protiúčet)
  protiUcet?: AFUcet | null
  // Účet DPH základní sazba (db: ) - DPH základní)
  dphZaklUcet?: AFUcet | null
  // Účet DPH snížená sazba (db: ) - DPH snížená)
  dphSnizUcet?: AFUcet | null
  // Účet DPH 2. snížená sazba (db: ) - DPH 2. snížená)
  dphSniz2Ucet?: AFUcet | null
  // Kód banky (db: ) - Kód banky)
  smerKod?: AFPenezniUstav | null
  // Stát DPH (db: ) - Stát DPH)
  statDph?: AFStatDph | null
  // Řádky DPH (db: ) - Řádky DPH)
  clenDph?: AFCleneniDph | null
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko | null
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka | null
  // Stát odesl. (db: ) - Stát odesl.)
  statOdesl?: AFStat | null
  // Stát určení (db: ) - Stát určení)
  statUrc?: AFStat | null
  // Stát původu (db: ) - Stát původu)
  statPuvod?: AFStat | null
  // Podmínky dodání (db: ) - Podmínky dodání)
  dodPodm?: AFIntrastatDodaciPodminky | null
  // Transakce (db: ) - Transakce)
  obchTrans?: AFIntrastatObchodniTransakce | null
  // Druh dopravy (db: ) - Druh dopravy)
  druhDopr?: AFIntrastatDruhDopravy | null
  // Zvláštní pohyby (db: ) - Zvláštní pohyby)
  zvlPoh?: AFIntrastatZvlastniPohyb | null
  // Kraj odesílatele (db: ) - Kraj odesílatele)
  krajUrc?: AFIntrastatKrajUrceni | null
  // Uživatel (db: ) - Uživatel)
  uzivatel?: AFUzivatel | null
  // Zodpovědná osoba (db: ) - Zodpovědná osoba)
  zodpOsoba?: AFUzivatel | null
  // Čís. řada (db: ) - Čís. řada)
  rada?: AFRada | null
  // Osvobozená sazba DPH (db: ) - Osvobozená sazba DPH)
  sazbaDphOsv?: AFSazbaDph | null
  // Snížená sazba DPH (db: ) - Snížená sazba DPH)
  sazbaDphSniz?: AFSazbaDph | null
  // 2. snížená sazba DPH (db: ) - 2. snížená sazba DPH)
  sazbaDphSniz2?: AFSazbaDph | null
  // Základní sazba DPH (db: ) - Základní sazba DPH)
  sazbaDphZakl?: AFSazbaDph | null
  // Činnost (db: ) - Činnost)
  cinnost?: AFCinnost | null
  // Submodul (db: ) - Submodul)
  subModul?: boolean | null
  // Fakturováno (db: ) - Fakturováno)
  fakturovano?: Big | null
  // Suma celkem aktuální (db: ) - Suma celkem aktuální)
  sumCelkemAkt?: Big | null
  // Uhrazeno (db: ) - Uhrazeno)
  uhrazeno?: Big | null
  // Vrácení DPH (db: ) - Vrácení DPH)
  vraceniDph?: boolean | null
  // Obnova DPH (db: ) - Obnova DPH)
  obnovaDph?: boolean | null
  // Doklady opravující DPH (db: ) - Doklady opravující DPH)
  dokladOpravaDph?: any | null
  // Doklad faktury (db: ) - Doklad faktury)
  doklFak?: any | null
  // Řádek krácení DPH (db: ) - Řádek krácení DPH)
  radekKraceniDph?: boolean | null
  // Použít řádek krácení DPH (db: ) - Použít řádek krácení DPH)
  pouzitRadekKraceniDph?: boolean | null
  // Vyžaduje koeficient (db: ) - Vyžaduje koeficient)
  vyzadujeKoeficient?: boolean | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    idPoSplatnosti : {
      key: 'idPoSplatnosti',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    idDokl : {
      key: 'idDokl',
      type: PropertyType.Numeric,
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
    typPohybuK : {
      key: 'typPohybuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPohybu',
      enum: TypPohybu,
      
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
    dphSnizKoef : {
      key: 'dphSnizKoef',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    dphZaklKoef : {
      key: 'dphZaklKoef',
      type: PropertyType.Logic,
      isArray: false,
      
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
    bsp : {
      key: 'bsp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFBankovniUcetSkladPokladna',
      
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
    rada : {
      key: 'rada',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRada',
      
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
    subModul : {
      key: 'subModul',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    fakturovano : {
      key: 'fakturovano',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    sumCelkemAkt : {
      key: 'sumCelkemAkt',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    uhrazeno : {
      key: 'uhrazeno',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    vraceniDph : {
      key: 'vraceniDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    obnovaDph : {
      key: 'obnovaDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    dokladOpravaDph : {
      key: 'dokladOpravaDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    radekKraceniDph : {
      key: 'radekKraceniDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    pouzitRadekKraceniDph : {
      key: 'pouzitRadekKraceniDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vyzadujeKoeficient : {
      key: 'vyzadujeKoeficient',
      type: PropertyType.Logic,
      isArray: false,
      
    },


  }
}