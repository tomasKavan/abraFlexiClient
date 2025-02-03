import { AFEntity } from '../AFEntity'
import { AFTypObjednavkyPrijate } from './AFTypObjednavkyPrijate'
import { AFMena } from './AFMena'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFStatDph } from './AFStatDph'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFZakazka } from './AFZakazka'
import { AFKontakt } from './AFKontakt'
import { AFRadaObjednavkyPrijate } from './AFRadaObjednavkyPrijate'
import { AFSmlouva } from './AFSmlouva'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFStavObchodnihoDokladu } from './AFStavObchodnihoDokladu'
import { AFSklad } from './AFSklad'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFObjednavkaPrijataPolozka } from './AFObjednavkaPrijataPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'

export enum AFObjednavkaPrijataZamekK {
  otevreno = 'zamek.otevreno', //Otevřeno
  prohlednuto = 'zamek.prohlednuto', //Prohlédnuto
  polozamceno = 'zamek.polozamceno', //Zamknuto mimo účetní
  zamceno = 'zamek.zamceno', //Zamknuto
}

export enum AFObjednavkaPrijataStavUzivK {
  nespec = 'stavDoklObch.nespec', //Nespecifikováno
  pripraveno = 'stavDoklObch.pripraveno', //Připraveno
  schvaleno = 'stavDoklObch.schvaleno', //Schváleno
  castecneNaCeste = 'stavDoklObch.castecneNaCeste', //Částečně na cestě
  naCeste = 'stavDoklObch.naCeste', //Na cestě
  castVydano = 'stavDoklObch.castVydano', //Částečně vydáno/přijato
  vydano = 'stavDoklObch.vydano', //Vydáno/přijato
  castHotovo = 'stavDoklObch.castHotovo', //Částečně hotovo
  hotovo = 'stavDoklObch.hotovo', //Hotovo
  storno = 'stavDoklObch.storno', //Storno
}

export enum AFObjednavkaPrijataZaokrJakSumK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFObjednavkaPrijataZaokrNaSumK {
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

export enum AFObjednavkaPrijataZaokrJakDphK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFObjednavkaPrijataZaokrNaDphK {
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

export enum AFObjednavkaPrijataMetodaZaokrDoklK {
  zklDph = 'metodaZaokr.zklDph', //do základu a DPH
  0sazba = 'metodaZaokr.0sazba', //do 0 sazby
  individ = 'metodaZaokr.individ', //individuálně
}


export class AFObjednavkaPrijata extends AFEntity {

    // ID (db: IdDoklObch) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Interní číslo (db: Kod) - Interní číslo)
    kod?: string

    // Zámek (db: ZamekK) - Zámek)
    zamekK?: any

    // Číslo došlé (db: CisDosle) - Číslo došlé)
    cisDosle?: string

    // Variabilní symbol (db: VarSym) - Variabilní symbol)
    varSym?: string

    // Číslo poptávky (db: CisSml) - Číslo poptávky)
    cisSml?: string

    // Objednáno (db: DatObj) - Objednáno)
    datObj?: Date

    // Číslo nabídky (db: CisDodak) - Číslo nabídky)
    cisDodak?: string

    // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
    doprava?: string

    // Datum vyst. (db: DatVyst) - Vystaveno)
    datVyst?: Date

    // Termín (db: DatTermin) - Termín)
    datTermin?: Date

    // Realizováno (db: DatReal) - Realizováno)
    datReal?: Date

    // Datum sazeb DPH (db: DatSazbyDph) - Datum sazeb DPH)
    datSazbyDph?: Date

    // Popis (db: Popis) - Popis)
    popis?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Úvodní text (tiskne se před položkami) (db: UvodTxt) - Úvodní text (tiskne se před položkami))
    uvodTxt?: string

    // Závěrečný text (tiskne se za položkami) (db: ZavTxt) - Závěrečný text (tiskne se za položkami))
    zavTxt?: string

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

    // Náklady (db: SumNaklady) - Sumace nákladů)
    sumNaklady?: Big

    // Sleva [%] (db: SlevaDokl) - Sleva [%])
    slevaDokl?: Big

    // Kurz (db: Kurz) - Kurz)
    kurz?: Big

    // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
    kurzMnozstvi?: Big

    // Stav (db: StavUzivK) - Stav)
    stavUzivK?: any

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

    // Poštovní adresa je shodná se sídlem (db: PostovniShodna) - Poštovní adresa je shodná se sídlem)
    postovniShodna?: boolean

    // Pošt. jméno firmy (db: FaNazev) - Firma)
    faNazev?: string

    // Název firmy - druhá řádka (db: undefined) - Název firmy - druhá řádka)
    faNazev2?: string

    // Pošt. ulice (db: FaUlice) - Ulice)
    faUlice?: string

    // Pošt. město (db: FaMesto) - Město)
    faMesto?: string

    // Pošt. PSČ (db: FaPsc) - PSČ)
    faPsc?: string

    // Pošt. EAN (db: FaEanKod) - EAN)
    faEanKod?: string

    // Bezpol. dokl. (db: BezPolozek) - bezpoložkový doklad)
    bezPolozek?: boolean

    // Snížená sazba DPH (db: SzbDphSniz) - Snížená)
    szbDphSniz?: Big

    // 2. snížená sazba DPH (db: SzbDphSniz2) - 2. snížená)
    szbDphSniz2?: Big

    // Základní sazba DPH (db: SzbDphZakl) - Základní)
    szbDphZakl?: Big

    // Storno (db: Storno) - Storno)
    storno?: boolean

    // Způsob zaokr. Celkem (db: ZaokrJakSumK) - Celkem (způsob))
    zaokrJakSumK?: any

    // Řád zaokr. Celkem (db: ZaokrNaSumK) - Celkem (řády))
    zaokrNaSumK?: any

    // Způsob zaokr. DPH (db: ZaokrJakDphK) - DPH (způsob))
    zaokrJakDphK?: any

    // Řád zaokr. DPH (db: ZaokrNaDphK) - DPH (řády))
    zaokrNaDphK?: any

    // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
    metodaZaokrDoklK?: any

    // Korekce DPH (db: VytvaretKorPol) - Korekce DPH)
    vytvaretKorPol?: boolean

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Typ dokladu (db: IdTypDokl) - Typ dokladu)
    typDokl?: AFTypObjednavkyPrijate

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Konstantní symbol (db: IdKonSym) - Konstantní symbol)
    konSym?: AFKonstSymbol

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Pošt. stát (db: IdFaStatu) - Stát)
    faStat?: AFStat

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // Pošt. kraj (db: Idfaregion) - Kraj)
    faRegion?: AFRegion

    // Místo určení (db: IdMur) - Místo určení)
    mistUrc?: AFMistoUrceni

    // Bankovní účet (db: IdBspBan) - Bankovní účet)
    bankovniUcet?: AFBankovniUcet

    // Stát DPH (db: IdStatDph) - Stát DPH)
    statDph?: AFStatDph

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
    rada?: AFRadaObjednavkyPrijate

    // Smlouva (db: IdSmlouvy) - Smlouva)
    smlouva?: AFSmlouva

    // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
    formaDopravy?: AFFormaDopravy

    // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
    uuid?: string

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Počet balíků (db: BalikPocet) - balíků)
    balikPocet?: number

    // ID výdejního místa (db: BranchId) - ID výdejního místa)
    branchId?: string

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady

    // % realizovatelnosti (db: ProcReal) - % realizovatelnosti)
    procReal?: Big

    // Fakturovat souhrnně (db: FaktSouhrn) - Fakturovat souhrnně)
    faktSouhrn?: boolean

    // Text na fakturu (db: FaktTxt) - Text na fakturu)
    faktTxt?: string

    // Vytvořit fakturu typu ... (db: IdTypDoklNabFak) - Vytvořit fakturu typu ...)
    typDoklNabFak?: AFTypFakturyVydane

    // Stav dokladu (db: IdStavDoklObchCis) - Stav dokladu)
    stavDoklObch?: AFStavObchodnihoDokladu

    // Sklad cíl (db: IdSkladCil) - Sklad cíl)
    skladCil?: AFSklad


    // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
    vazebniDoklady?: Promise<AFVazebniDoklad[]>

    // Položky objednávky přijaté (type: OBJEDNAVKA_IN_POLOZKA) - polozkyDokladu)
    polozkyDokladu?: Promise<AFObjednavkaPrijataPolozka[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Vazby mezi doklady (type: VAZBA_MEZI_DOKLADY) - vazby)
    vazby?: Promise<AFVazba[]>

}