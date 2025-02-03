import { AFEntity } from '../AFEntity'
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

export enum AFSaldoKDatuStavUzivK {
  bezPrikazu = 'stavUziv.bezPrikazu', //Bez příkazu
  obsaPrikaz = 'stavUziv.obsaPrikaz', //Obsažen v příkazu
  castPrikaz = 'stavUziv.castPrikaz', //Odeslán částečný příkaz
  celPrikaz = 'stavUziv.celPrikaz', //Odeslán příkaz
  nactenoEl = 'stavUziv.nactenoEl', //Načteno elektronicky
  nactenoElPosledni = 'stavUziv.nactenoElPosledni', //Naposledy načteno elektronicky
  genKasa = 'stavUziv.genKasa', //Vygenerován z kasy
  zauctovano = 'stavUziv.zauctovano', //Zaúčtováno do pokladny
  zaucZmena = 'stavUziv.zaucZmena', //Změněno po zaúčtování
}

export enum AFSaldoKDatuZamekK {
  otevreno = 'zamek.otevreno', //Otevřeno
  prohlednuto = 'zamek.prohlednuto', //Prohlédnuto
  polozamceno = 'zamek.polozamceno', //Zamknuto mimo účetní
  zamceno = 'zamek.zamceno', //Zamknuto
}

export enum AFSaldoKDatuZaokrJakSumK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFSaldoKDatuZaokrNaSumK {
  zadne = 'zaokrNa.zadne', //nezaokrouhlovat
  tisiciny = 'zaokrNa.tisiciny', //0.001
  setiny = 'zaokrNa.setiny', //0.01
  5setiny = 'zaokrNa.5setiny', //0.05
  desetiny = 'zaokrNa.desetiny', //0.1
  5desetiny = 'zaokrNa.5desetiny', //0.5
  jednotky = 'zaokrNa.jednotky', //1
  5jednotky = 'zaokrNa.5jednotky', //5
  desitky = 'zaokrNa.desitky', //10
  stovky = 'zaokrNa.stovky', //100
  tisice = 'zaokrNa.tisice', //1000
}

export enum AFSaldoKDatuZaokrJakDphK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFSaldoKDatuZaokrNaDphK {
  zadne = 'zaokrNa.zadne', //nezaokrouhlovat
  tisiciny = 'zaokrNa.tisiciny', //0.001
  setiny = 'zaokrNa.setiny', //0.01
  5setiny = 'zaokrNa.5setiny', //0.05
  desetiny = 'zaokrNa.desetiny', //0.1
  5desetiny = 'zaokrNa.5desetiny', //0.5
  jednotky = 'zaokrNa.jednotky', //1
  5jednotky = 'zaokrNa.5jednotky', //5
  desitky = 'zaokrNa.desitky', //10
  stovky = 'zaokrNa.stovky', //100
  tisice = 'zaokrNa.tisice', //1000
}

export enum AFSaldoKDatuStavUhrK {
  castUhr = 'stavUhr.castUhr', //Částečně uhrazeno
  uhrazeno = 'stavUhr.uhrazeno', //Uhrazeno
  uhrazenoRucne = 'stavUhr.uhrazenoRucne', //Uhrazeno (ručně)
}

export enum AFSaldoKDatuStavUhrDatK {
  castUhr = 'stavUhr.castUhr', //Částečně uhrazeno
  uhrazeno = 'stavUhr.uhrazeno', //Uhrazeno
  uhrazenoRucne = 'stavUhr.uhrazenoRucne', //Uhrazeno (ručně)
}


export class AFSaldoKDatu extends AFEntity {

    // ID (db: undefined) - ID)
    idSaldoKdatu?: number

    // ID dokladu (db: undefined) - ID dokladu)
    idDokl?: number

    // Poslední změna (db: undefined) - Poslední změna)
    lastUpdate?: Date

    // Zkratka (db: undefined) - Zkratka)
    kod?: string

    // Modul (db: undefined) - Modul)
    modul?: string

    // Číslo došlé (db: undefined) - Číslo došlé)
    cisDosle?: string

    // Variabilní symbol (db: undefined) - Variabilní symbol)
    varSym?: string

    // Číslo smlouvy (db: undefined) - Číslo smlouvy)
    cisSml?: string

    // Číslo objednávky (db: undefined) - Číslo objednávky)
    cisObj?: string

    // Objednáno (db: undefined) - Objednáno)
    datObj?: Date

    // Dodací list (db: undefined) - Dodací list)
    cisDodak?: string

    // Doprava a vyskladnění (db: undefined) - Doprava a vyskladnění)
    doprava?: string

    // Datum vyst. (db: undefined) - Vystaveno)
    datVyst?: Date

    // Datum zdaň. plnění (db: undefined) - Datum zdaň. plnění)
    duzpPuv?: Date

    // Uplatnit zdaň. plnění (db: undefined) - Uplatnit zdaň. plnění)
    duzpUcto?: Date

    // Splatnost (db: undefined) - Splatnost)
    datSplat?: Date

    // Datum úhrady (db: undefined) - Datum úhrady)
    datUhr?: Date

    // Termín (db: undefined) - Termín)
    datTermin?: Date

    // Realizace (db: undefined) - Realizace)
    datReal?: Date

    // Popis (db: undefined) - Popis)
    popis?: string

    // Poznámka (db: undefined) - Poznámka)
    poznam?: string

    // Úvodní text (tiskne se před položkami) (db: undefined) - Úvodní text (tiskne se před položkami))
    uvodTxt?: string

    // Závěrečný text (tiskne se za položkami) (db: undefined) - Závěrečný text (tiskne se za položkami))
    zavTxt?: string

    // Osvob., bez DPH [Kč] (db: undefined) - 0 %)
    sumOsv?: Big

    // Základ DPH sníž. [Kč] (db: undefined) - Základ DPH sníž. [Kč])
    sumZklSniz?: Big

    // Základ DPH 2. sníž. [Kč] (db: undefined) - Základ DPH 2. sníž. [Kč])
    sumZklSniz2?: Big

    // Základ DPH zákl. [Kč] (db: undefined) - Základ DPH zákl. [Kč])
    sumZklZakl?: Big

    // Základ celkem [Kč] (db: undefined) - Základ)
    sumZklCelkem?: Big

    // DPH snížená [Kč] (db: undefined) - DPH snížená)
    sumDphSniz?: Big

    // DPH 2. snížená [Kč] (db: undefined) - DPH 2. snížená)
    sumDphSniz2?: Big

    // DPH základní [Kč] (db: undefined) - DPH základní)
    sumDphZakl?: Big

    // DPH celkem [Kč] (db: undefined) - DPH)
    sumDphCelkem?: Big

    // Celkem vč. DPH - sníž. [Kč] (db: undefined) - Celkem vč. DPH - sníž. [Kč])
    sumCelkSniz?: Big

    // Celkem vč. DPH - 2. sníž. [Kč] (db: undefined) - Celkem vč. DPH - 2. sníž. [Kč])
    sumCelkSniz2?: Big

    // Celkem vč. DPH - zákl. [Kč] (db: undefined) - Celkem vč. DPH - zákl. [Kč])
    sumCelkZakl?: Big

    // Původní hodnota faktury [Kč] (db: undefined) - Původní hodnota faktury [Kč])
    sumCelkem?: Big

    // Osvob., bez DPH [měna] (db: undefined) - 0 %)
    sumOsvMen?: Big

    // Základ DPH sníž. [měna] (db: undefined) - Základ DPH sníž. [měna])
    sumZklSnizMen?: Big

    // Základ DPH 2. sníž. [měna] (db: undefined) - Základ DPH 2. sníž. [měna])
    sumZklSniz2Men?: Big

    // Základ DPH zákl. [měna] (db: undefined) - Základ DPH zákl. [měna])
    sumZklZaklMen?: Big

    // Základ celkem [měna] (db: undefined) - Základ)
    sumZklCelkemMen?: Big

    // DPH základní [měna] (db: undefined) - DPH základní)
    sumDphZaklMen?: Big

    // DPH 2. snížená [měna] (db: undefined) - DPH 2. snížená)
    sumDphSniz2Men?: Big

    // DPH snížená [měna] (db: undefined) - DPH snížená)
    sumDphSnizMen?: Big

    // DPH celkem [měna] (db: undefined) - DPH)
    sumDphCelkemMen?: Big

    // Celkem vč. DPH - sníž. [měna] (db: undefined) - Celkem vč. DPH - sníž. [měna])
    sumCelkSnizMen?: Big

    // Celkem vč. DPH - 2. sníž. [měna] (db: undefined) - Celkem vč. DPH - 2. sníž. [měna])
    sumCelkSniz2Men?: Big

    // Celkem vč. DPH - zákl. [měna] (db: undefined) - Celkem vč. DPH - zákl. [měna])
    sumCelkZaklMen?: Big

    // Celkem [měna] (db: undefined) - Celkem [měna])
    sumCelkemMen?: Big

    // Sleva [%] (db: undefined) - Sleva [%])
    slevaDokl?: Big

    // Kurz (db: undefined) - Kurz)
    kurz?: Big

    // Kurz. množství (db: undefined) - Kurz. množství)
    kurzMnozstvi?: Big

    // Uživatelský stav (db: undefined) - Uživatelský stav)
    stavUzivK?: any

    // Název firmy nebo jméno osoby (db: undefined) - Název firmy - jméno)
    nazFirmy?: string

    // Ulice (db: undefined) - Ulice)
    ulice?: string

    // Město (db: undefined) - Město)
    mesto?: string

    // PSČ (db: undefined) - PSČ)
    psc?: string

    // EAN (db: undefined) - EAN)
    eanKod?: string

    // IČO (db: undefined) - IČO)
    ic?: string

    // DIČ (db: undefined) - DIČ)
    dic?: string

    // Poštovní adresa je shodná se sídlem (db: undefined) - Poštovní adresa je shodná se sídlem)
    postovniShodna?: boolean

    // Pošt. jméno firmy (db: undefined) - Firma)
    faNazev?: string

    // Pošt. ulice (db: undefined) - Ulice)
    faUlice?: string

    // Pošt. město (db: undefined) - Město)
    faMesto?: string

    // Pošt. PSČ (db: undefined) - PSČ)
    faPsc?: string

    // Pošt. EAN (db: undefined) - EAN)
    faEanKod?: string

    // Číslo bank. účtu (db: undefined) - Číslo účtu)
    buc?: string

    // IBAN (db: undefined) - IBAN)
    iban?: string

    // BIC (db: undefined) - BIC)
    bic?: string

    // Specifický symbol (db: undefined) - Specifický symbol)
    specSym?: string

    // Bezpol. dokl. (db: undefined) - bezpoložkový doklad)
    bezPolozek?: boolean

    // Je účetní (db: undefined) - Doklad je účetní)
    ucetni?: boolean

    // Snížená sazba DPH (db: undefined) - Snížená)
    szbDphSniz?: Big

    // 2. snížená sazba DPH (db: undefined) - 2. snížená)
    szbDphSniz2?: Big

    // Základní sazba DPH (db: undefined) - Základní)
    szbDphZakl?: Big

    // Zaúčtováno (db: undefined) - Stav zaúčtování)
    zuctovano?: boolean

    // Datum zaúčt. (db: undefined) - Datum zaúčtování)
    datUcto?: Date

    // Storno (db: undefined) - Storno)
    storno?: boolean

    // Zámek (db: undefined) - Zámek)
    zamekK?: any

    // Způsob zaokr. Celkem (db: undefined) - Celkem (způsob))
    zaokrJakSumK?: any

    // Řád zaokr. Celkem (db: undefined) - Celkem (řády))
    zaokrNaSumK?: any

    // Způsob zaokr. DPH (db: undefined) - DPH (způsob))
    zaokrJakDphK?: any

    // Řád zaokr. DPH (db: undefined) - DPH (řády))
    zaokrNaDphK?: any

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Přílohy (db: undefined) - Přílohy)
    pocetPriloh?: number

    // Typ dokladu (db: undefined) - Typ dokladu)
    typDokl?: AFTypDokladu

    // Měna (db: undefined) - Měna)
    mena?: AFMena

    // Konstantní symbol (db: undefined) - Konstantní symbol)
    konSym?: AFKonstSymbol

    // Zkratka firmy (db: undefined) - Zkratka firmy)
    firma?: AFAdresar

    // Stát (db: undefined) - Stát)
    stat?: AFStat

    // Pošt. stát (db: undefined) - Stát)
    faStat?: AFStat

    // Kraj (db: undefined) - Kraj)
    region?: AFRegion

    // Pošt. kraj (db: undefined) - Kraj)
    faRegion?: AFRegion

    // Místo určení (db: undefined) - Místo určení)
    mistUrc?: AFMistoUrceni

    // Účet dodavatele (db: undefined) - Účet dodavatele)
    banSpojDod?: AFAdresarBankovniUcet

    // Bankovní účet (db: undefined) - Bankovní účet)
    bankovniUcet?: AFBankovniUcet

    // Předpis zaúčtování (db: undefined) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Prim.účet (db: undefined) - Primární)
    primUcet?: AFUcet

    // Protiúčet (db: undefined) - Protiúčet)
    protiUcet?: AFUcet

    // Účet DPH zákl. (db: undefined) - DPH základní)
    dphZaklUcet?: AFUcet

    // Účet DPH sníž. (db: undefined) - DPH snížená)
    dphSnizUcet?: AFUcet

    // Účet DPH 2. sníž. (db: undefined) - DPH 2. snížená)
    dphSniz2Ucet?: AFUcet

    // Kód banky (db: undefined) - Kód banky)
    smerKod?: AFPenezniUstav

    // Stát DPH (db: undefined) - Stát DPH)
    statDph?: AFStatDph

    // Řádky DPH (db: undefined) - Řádky DPH)
    clenDph?: AFCleneniDph

    // Středisko (db: undefined) - Středisko)
    stredisko?: AFStredisko

    // Zakázka (db: undefined) - Zakázka)
    zakazka?: AFZakazka

    // Stát odesl. (db: undefined) - Stát odesl.)
    statOdesl?: AFStat

    // Stát určení (db: undefined) - Stát určení)
    statUrc?: AFStat

    // Stát původu (db: undefined) - Stát původu)
    statPuvod?: AFStat

    // Podmínky dodání (db: undefined) - Podmínky dodání)
    dodPodm?: AFIntrastatDodaciPodminky

    // Transakce (db: undefined) - Transakce)
    obchTrans?: AFIntrastatObchodniTransakce

    // Druh dopravy (db: undefined) - Druh dopravy)
    druhDopr?: AFIntrastatDruhDopravy

    // Zvláštní pohyby (db: undefined) - Zvláštní pohyby)
    zvlPoh?: AFIntrastatZvlastniPohyb

    // Kraj odesílatele (db: undefined) - Kraj odesílatele)
    krajUrc?: AFIntrastatKrajUrceni

    // Uživatel (db: undefined) - Uživatel)
    uzivatel?: any

    // Zodpovědná osoba (db: undefined) - Zodpovědná osoba)
    zodpOsoba?: any

    // Čís. řada (db: undefined) - Čís. řada)
    rada?: AFRada

    // Pol. dokl. řady (db: undefined) - Pol. dokl. řady)
    polozkaRady?: AFRocniRada

    // Osvobozená sazba DPH (db: undefined) - Osvobozená sazba DPH)
    sazbaDphOsv?: AFSazbaDph

    // Snížená sazba DPH (db: undefined) - Snížená sazba DPH)
    sazbaDphSniz?: AFSazbaDph

    // 2. snížená sazba DPH (db: undefined) - 2. snížená sazba DPH)
    sazbaDphSniz2?: AFSazbaDph

    // Základní sazba DPH (db: undefined) - Základní sazba DPH)
    sazbaDphZakl?: AFSazbaDph

    // Činnost (db: undefined) - Činnost)
    cinnost?: AFCinnost

    // Již uhrazeno [Kč] (db: undefined) - Již uhrazeno [Kč])
    juhSum?: Big

    // Již uhrazeno [měna] (db: undefined) - Již uhrazeno [měna])
    juhSumMen?: Big

    // Stav úhrady dokladu (db: undefined) - Stav úhrady dokladu)
    stavUhrK?: any

    // Zbývá uhradit [Kč] (db: undefined) - Zbývá uhradit [Kč])
    zbyvaUhradit?: Big

    // Zbývá uhradit [měna] (db: undefined) - Zbývá uhradit [měna])
    zbyvaUhraditMen?: Big

    // Aktuální hodnota faktury [Kč] (db: undefined) - Aktuální hodnota faktury [Kč])
    sumCelkemAkt?: Big

    // Uhrazeno k datu [Kč] (db: undefined) - Uhrazeno k datu [Kč])
    juhSumDat?: Big

    // Uhrazeno k datu [měna] (db: undefined) - Uhrazeno k datu [měna])
    juhSumDatMen?: Big

    // Stav k datu (db: undefined) - Stav k datu)
    stavUhrDatK?: any


}