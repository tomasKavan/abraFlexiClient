import { AFEntity } from '../AFEntity'
import { AFTypPohledavky } from './AFTypPohledavky'
import { AFMena } from './AFMena'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFPenezniUstav } from './AFPenezniUstav'
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
import { AFRadaPohledavky } from './AFRadaPohledavky'
import { AFSmlouva } from './AFSmlouva'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFPohledavkaPolozka } from './AFPohledavkaPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'

export enum AFPohledavkaZamekK {
  otevreno = 'zamek.otevreno', //Otevřeno
  prohlednuto = 'zamek.prohlednuto', //Prohlédnuto
  polozamceno = 'zamek.polozamceno', //Zamknuto mimo účetní
  zamceno = 'zamek.zamceno', //Zamknuto
}

export enum AFPohledavkaStavUzivK {
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

export enum AFPohledavkaStavUhrK {
  castUhr = 'stavUhr.castUhr', //Částečně uhrazeno
  uhrazeno = 'stavUhr.uhrazeno', //Uhrazeno
  uhrazenoRucne = 'stavUhr.uhrazenoRucne', //Uhrazeno (ručně)
}

export enum AFPohledavkaStavOdpocetK {
  cast = 'stavOdp.cast', //Částečně odpočteno
  komplet = 'stavOdp.komplet', //Odpočteno
  vytvZdd = 'stavOdp.vytvZdd', //Vytvořen ZDD
}


export class AFPohledavka extends AFEntity {

    // ID (db: IdDoklFak) - ID)
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

    // Číslo smlouvy (db: CisSml) - Číslo smlouvy)
    cisSml?: string

    // Číslo objednávky (db: CisObj) - Číslo objednávky)
    cisObj?: string

    // Objednáno (db: DatObj) - Objednáno)
    datObj?: Date

    // Dodací list (db: CisDodak) - Dodací list)
    cisDodak?: string

    // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
    doprava?: string

    // Vystaveno (db: DatVyst) - Vystaveno)
    datVyst?: Date

    // Datum zdaň. plnění (db: DuzpPuv) - Datum zdaň. plnění)
    duzpPuv?: Date

    // Uplatnit zdaň. plnění (db: DuzpUcto) - Uplatnit zdaň. plnění)
    duzpUcto?: Date

    // Splatnost (db: DatSplat) - Splatnost)
    datSplat?: Date

    // Datum úhrady (db: DatUhr) - Datum úhrady)
    datUhr?: Date

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

    // Celkem [Kč] (db: SumCelkem) - Celkem)
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

    // Celkem [měna] (db: SumCelkemMen) - Celkem)
    sumCelkemMen?: Big

    // Kurz (db: Kurz) - Kurz)
    kurz?: Big

    // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
    kurzMnozstvi?: Big

    // V příkazu ? (db: StavUzivK) - V příkazu ?)
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

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Typ pohl. (db: IdTypDokl) - Typ pohl.)
    typDokl?: AFTypPohledavky

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Konst. sym. (db: IdKonSym) - Kon. sym.)
    konSym?: AFKonstSymbol

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // Účet odběratele (db: IdBanSpojDod) - Účet odběratele)
    banSpojDod?: AFAdresarBankovniUcet

    // Bankovní účet (db: IdBspBan) - Bankovní účet)
    bankovniUcet?: AFBankovniUcet

    // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Účet MD (db: IdPrimUcet) - Účet MD)
    primUcet?: AFUcet

    // Účet DAL (db: IdProtiUcet) - Účet DAL)
    protiUcet?: AFUcet

    // Účet DPH zákl. (db: IdDphZaklUcet) - DPH základní)
    dphZaklUcet?: AFUcet

    // Účet DPH sníž. (db: IdDphSnizUcet) - DPH snížená)
    dphSnizUcet?: AFUcet

    // Účet DPH 2. sníž. (db: IdDphSniz2Ucet) - DPH 2. snížená)
    dphSniz2Ucet?: AFUcet

    // Směr.kód (db: IdSmerKod) - Směr.kód)
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
    rada?: AFRadaPohledavky

    // Smlouva (db: IdSmlouvy) - Smlouva)
    smlouva?: AFSmlouva

    // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
    formaDopravy?: AFFormaDopravy

    // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
    uuid?: string

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
    clenKonVykDph?: AFCleneniKontrolniHlaseni

    // Datum upomínky 1 (db: DatUp1) - Datum upomínky 1)
    datUp1?: Date

    // Datum upomínky 2 (db: DatUp2) - Datum upomínky 2)
    datUp2?: Date

    // Datum smíru (db: DatSmir) - Datum smíru)
    datSmir?: Date

    // Datum penalizace (db: DatPenale) - Datum penalizace)
    datPenale?: Date

    // Podpis příkazu (db: PodpisPrik) - Vyžadovat podpis před vystavením příkazu k úhradě)
    podpisPrik?: boolean

    // Příkazy [Kč] (db: PrikazSum) - Odeslané příkazy [Kč])
    prikazSum?: Big

    // Příkazy [měna] (db: PrikazSumMen) - Odeslané příkazy [měna])
    prikazSumMen?: Big

    // Již uhrazeno [Kč] (db: JuhSum) - Již uhrazeno [Kč])
    juhSum?: Big

    // Již uhrazeno [měna] (db: JuhSumMen) - Již uhrazeno [měna])
    juhSumMen?: Big

    // Uhr. k datu [Kč] (db: JuhDat) - Uhr. k datu [Kč])
    juhDat?: Big

    // Uhr. k datu [měna] (db: JuhDatMen) - Uhr. k datu [měna])
    juhDatMen?: Big

    // Zbývá uhradit [Kč] (db: sumCelkem - juhSum) - Zbývá uhradit [Kč])
    zbyvaUhradit?: Big

    // Zbývá uhradit [měna] (db: sumCelkemMen - juhSumMen) - Zbývá uhradit [měna])
    zbyvaUhraditMen?: Big

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady

    // Stav úhrady dokladu (db: StavUhrK) - Stav úhrady dokladu)
    stavUhrK?: any

    // Již uhrazeno přeplatky [Kč] (db: JuhSumPp) - Již uhrazeno přeplatky [Kč])
    juhSumPp?: Big

    // Již uhrazeno přeplatky [měna] (db: JuhSumPpMen) - Již uhrazeno přeplatky [měna])
    juhSumPpMen?: Big

    // Přeplaceno [Kč] (db: SumPrepl) - Přeplaceno [Kč])
    sumPrepl?: Big

    // Přeplaceno [měna] (db: SumPreplMen) - Přeplaceno [měna])
    sumPreplMen?: Big

    // Zálohy (db: SumZalohy) - Zálohy)
    sumZalohy?: Big

    // Zálohy [měna] (db: SumZalohyMen) - Zálohy [měna])
    sumZalohyMen?: Big

    // Odpočet zál. (db: StavOdpocetK) - Odpočet zál.)
    stavOdpocetK?: any

    // Zaúč.kasa-forma úhr. (db: IdFormaUhradyCisKasa) - Zaúč.kasa-forma úhr.)
    formaUhradyCisKasa?: AFFormaUhrady

    // Celkem bez záloh [Kč] (db: sumCelkem + sumZalohy) - Celkem bez záloh)
    sumCelkemBezZaloh?: Big

    // Celkem bez záloh [měna] (db: sumCelkemMen + sumZalohyMen) - Celkem bez záloh)
    sumCelkemBezZalohMen?: Big


    // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
    vazebniDoklady?: Promise<AFVazebniDoklad[]>

    // Položky faktur (type: POHLEDAVKA_POLOZKA) - polozkyDokladu)
    polozkyDokladu?: Promise<AFPohledavkaPolozka[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Vazby mezi doklady (type: VAZBA_MEZI_DOKLADY) - vazby)
    vazby?: Promise<AFVazba[]>

}