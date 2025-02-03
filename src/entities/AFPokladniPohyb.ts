import { AFEntity } from '../AFEntity'
import { AFTypPokladniPohyb } from './AFTypPokladniPohyb'
import { AFPokladna } from './AFPokladna'
import { AFMena } from './AFMena'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFStatDph } from './AFStatDph'
import { AFCleneniDph } from './AFCleneniDph'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFZakazka } from './AFZakazka'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni'
import { AFKontakt } from './AFKontakt'
import { AFRadaPokladniPohyb } from './AFRadaPokladniPohyb'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFPokladniPohybPolozka } from './AFPokladniPohybPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'
import { AFDokladKUhrade } from './AFDokladKUhrade'

export enum AFPokladniPohybZamekK {
  otevreno = 'zamek.otevreno', //Otevřeno
  prohlednuto = 'zamek.prohlednuto', //Prohlédnuto
  polozamceno = 'zamek.polozamceno', //Zamknuto mimo účetní
  zamceno = 'zamek.zamceno', //Zamknuto
}

export enum AFPokladniPohybTypPohybuK {
  prijem = 'typPohybu.prijem', //Příjem
  vydej = 'typPohybu.vydej', //Výdej
}

export enum AFPokladniPohybStavUzivK {
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

export enum AFPokladniPohybZaokrJakSumK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFPokladniPohybZaokrNaSumK {
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

export enum AFPokladniPohybZaokrJakDphK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFPokladniPohybZaokrNaDphK {
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

export enum AFPokladniPohybMetodaZaokrDoklK {
  zklDph = 'metodaZaokr.zklDph', //do základu a DPH
  0sazba = 'metodaZaokr.0sazba', //do 0 sazby
  individ = 'metodaZaokr.individ', //individuálně
}

export enum AFPokladniPohybEkokomK {
  zpoplatneneObaly = 'ekokom.zpoplatneneObaly', //Zpoplatněné obaly
  predplaceneObaly = 'ekokom.predplaceneObaly', //Předplacené obaly
  nezaplaceneObaly = 'ekokom.nezaplaceneObaly', //Nezaplacené obaly
  exportovaneObaly = 'ekokom.exportovaneObaly', //Exportované obaly
  vyrazeneObaly = 'ekokom.vyrazeneObaly', //Vyřazené obaly
}

export enum AFPokladniPohybJakUhrK {
  rucne1 = 'jakUhrazeno.rucne1', //Ručně - 1 doklad
  rucneN = 'jakUhrazeno.rucneN', //Ručně - více dokladů
  rucneCast = 'jakUhrazeno.rucneCast', //Ručně - částečná úhrada
  autoVs = 'jakUhrazeno.autoVs', //Automaticky dle var. sym.
  autoVsRuzneMeny = 'jakUhrazeno.autoVsRuzneMeny', //Automaticky dle var. sym. (různé měny)
  autoBezVs = 'jakUhrazeno.autoBezVs', //Automaticky dle částky
  autoBuc = 'jakUhrazeno.autoBuc', //Automaticky dle bank. účtu
  autoZak = 'jakUhrazeno.autoZak', //Automaticky dle zákaznického čísla
  autoKod = 'jakUhrazeno.autoKod', //Automaticky dle int. čís. dokladu
}


export class AFPokladniPohyb extends AFEntity {

    // ID (db: IdDoklInt) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Interní číslo (db: Kod) - Interní číslo)
    kod?: string

    // Zámek (db: ZamekK) - Zámek)
    zamekK?: any

    // Typ pohybu (db: TypPohybuK) - Typ pohybu)
    typPohybuK?: any

    // Číslo došlé (db: CisDosle) - Číslo došlé)
    cisDosle?: string

    // Variabilní symbol (db: VarSym) - Variabilní symbol)
    varSym?: string

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

    // Náklady (db: SumNaklady) - Sumace nákladů)
    sumNaklady?: Big

    // Sleva [%] (db: SlevaDokl) - Sleva [%])
    slevaDokl?: Big

    // Kurz (db: Kurz) - Kurz)
    kurz?: Big

    // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
    kurzMnozstvi?: Big

    // Uživatelský stav (db: StavUzivK) - Uživatelský stav)
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
    typDokl?: AFTypPokladniPohyb

    // Pokladna (db: IdBsp) - Pokladna)
    pokladna?: AFPokladna

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Účet pokladny (db: IdPrimUcet) - Účet pokladny)
    primUcet?: AFUcet

    // Protiúčet (db: IdProtiUcet) - Protiúčet)
    protiUcet?: AFUcet

    // Účet DPH zákl. (db: IdDphZaklUcet) - DPH základní)
    dphZaklUcet?: AFUcet

    // Účet DPH sníž. (db: IdDphSnizUcet) - DPH snížená)
    dphSnizUcet?: AFUcet

    // Účet DPH 2. sníž. (db: IdDphSniz2Ucet) - DPH 2. snížená)
    dphSniz2Ucet?: AFUcet

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

    // Stát odesl. (db: IdStatOdesl) - Stát odesl.)
    statOdesl?: AFStat

    // Stát určení (db: IdStatUrc) - Stát určení)
    statUrc?: AFStat

    // Stát původu (db: IdStatPuvod) - Stát původu)
    statPuvod?: AFStat

    // Podmínky dodání (db: IdDodPodm) - Podmínky dodání)
    dodPodm?: AFIntrastatDodaciPodminky

    // Transakce (db: IdObchTrans) - Transakce)
    obchTrans?: AFIntrastatObchodniTransakce

    // Druh dopravy (db: IdDruhDopr) - Druh dopravy)
    druhDopr?: AFIntrastatDruhDopravy

    // Zvláštní pohyby (db: IdZvlPoh) - Zvláštní pohyby)
    zvlPoh?: AFIntrastatZvlastniPohyb

    // Kraj odesílatele (db: IdKrajUrc) - Kraj odesílatele)
    krajUrc?: AFIntrastatKrajUrceni

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
    rada?: AFRadaPokladniPohyb

    // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
    uuid?: string

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Výkaz EkoKom (db: EkokomK) - Výkaz EkoKom)
    ekokomK?: any

    // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
    clenKonVykDph?: AFCleneniKontrolniHlaseni

    // Jak uhrazeno (db: JakUhrK) - Jak uhrazeno)
    jakUhrK?: any

    // Spárováno (db: Sparovano) - Spárováno)
    sparovano?: boolean

    // Generovat sklad. doklady (db: GenerovatSkl) - Generovat sklad. doklady)
    generovatSkl?: boolean

    // Zdroj pro sklad. doklady (db: ZdrojProSkl) - Zdroj pro sklad. doklady)
    zdrojProSkl?: boolean

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady

    // Souhrnné číslo (db: CisSouhrnne) - Souhrnné číslo)
    cisSouhrnne?: string

    // Typ skladového dokladu (db: IdTypDoklSkl) - Typ skladového dokladu)
    typDoklSkl?: AFTypSkladovyPohyb


    // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
    vazebniDoklady?: Promise<AFVazebniDoklad[]>

    // Položky pokladního dokladu (type: POKLADNI_POHYB_POLOZKA) - polozkyDokladu)
    polozkyDokladu?: Promise<AFPokladniPohybPolozka[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Vazby mezi doklady (type: VAZBA_MEZI_DOKLADY) - vazby)
    vazby?: Promise<AFVazba[]>

    // Doklady faktur (type: DOKLAD_K_UHRADE) - doklady-k-uhrade)
    dokladyKUhrade?: Promise<AFDokladKUhrade[]>

    // Doklady faktur (type: DOKLAD_K_UHRADE) - doklady-k-uhrade-bez-filtrovani-firmy)
    dokladyKUhradeBezFiltrovaniFirmy?: Promise<AFDokladKUhrade[]>

}