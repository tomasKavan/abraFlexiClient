import { AFEntity } from '../AFEntity'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFMena } from './AFMena'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFBankovniUcetPokladna } from './AFBankovniUcetPokladna'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFStatDph } from './AFStatDph'
import { AFCleneniDph } from './AFCleneniDph'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFZakazka } from './AFZakazka'
import { AFKontakt } from './AFKontakt'
import { AFRadaInternihoDokladu } from './AFRadaInternihoDokladu'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFInterniDokladPolozka } from './AFInterniDokladPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'

export enum AFInterniDokladZamekK {
  otevreno = 'zamek.otevreno', //Otevřeno
  prohlednuto = 'zamek.prohlednuto', //Prohlédnuto
  polozamceno = 'zamek.polozamceno', //Zamknuto mimo účetní
  zamceno = 'zamek.zamceno', //Zamknuto
}

export enum AFInterniDokladStavUzivK {
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


export class AFInterniDoklad extends AFEntity {

    // ID (db: IdDoklInt) - ID)
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

    // Číslo objednávky (db: CisObj) - Číslo objednávky)
    cisObj?: string

    // Objednáno (db: DatObj) - Objednáno)
    datObj?: Date

    // Dodací list (db: CisDodak) - Dodací list)
    cisDodak?: string

    // Vystaveno (db: DatVyst) - Vystaveno)
    datVyst?: Date

    // Datum zdaň. plnění (db: DuzpPuv) - Datum zdaň. plnění)
    duzpPuv?: Date

    // Termín (db: DatTermin) - Termín)
    datTermin?: Date

    // Realizace (db: DatReal) - Realizace)
    datReal?: Date

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

    // Zaúčtováno (db: Zuctovano) - Stav zaúčtování)
    zuctovano?: boolean

    // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
    datUcto?: Date

    // Vynechat ze salda (db: VyloucitSaldo) - Vynechat ze salda)
    vyloucitSaldo?: boolean

    // Storno (db: Storno) - Storno)
    storno?: boolean

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Typ dokladu (db: IdTypDokl) - Typ dokladu)
    typDokl?: AFTypInternihoDokladu

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // Přeceněný bankovní účet nebo pokladna (db: IdBspBan) - Přeceněný bankovní účet nebo pokladna)
    precenenaBanPok?: AFBankovniUcetPokladna

    // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Účet základu MD (db: IdPrimUcet) - Účet základu MD)
    primUcet?: AFUcet

    // Účet základu Dal (db: IdProtiUcet) - Účet základu Dal)
    protiUcet?: AFUcet

    // Účet DPH Dal (db: IdDphZaklUcet) - Účet DPH Dal)
    dphZaklUcet?: AFUcet

    // Účet DPH MD (db: IdDphSnizUcet) - Účet DPH MD)
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
    rada?: AFRadaInternihoDokladu

    // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
    uuid?: string

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
    clenKonVykDph?: AFCleneniKontrolniHlaseni

    // Spárováno (db: Sparovano) - Spárováno)
    sparovano?: boolean


    // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
    vazebniDoklady?: Promise<AFVazebniDoklad[]>

    // Položky interního dokladu (type: INTERNI_DOKLAD_POLOZKA) - polozkyDokladu)
    polozkyDokladu?: Promise<AFInterniDokladPolozka[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Vazby mezi doklady (type: VAZBA_MEZI_DOKLADY) - vazby)
    vazby?: Promise<AFVazba[]>

}