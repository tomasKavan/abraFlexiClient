import { AFEntity } from '../AFEntity'
import { AFTypDokladu } from './AFTypDokladu'
import { AFMena } from './AFMena'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFBankovniUcetSkladPokladna } from './AFBankovniUcetSkladPokladna'
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
import { AFKontakt } from './AFKontakt'
import { AFRada } from './AFRada'
import { AFRocniRada } from './AFRocniRada'
import { AFSazbaDph } from './AFSazbaDph'
import { AFCinnost } from './AFCinnost'
import { AFSmlouva } from './AFSmlouva'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'

export enum AFDokladKUhradeTypPohybuK {
  prijem = 'typPohybu.prijem', //Příjem
  vydej = 'typPohybu.vydej', //Výdej
}

export enum AFDokladKUhradeStavUzivK {
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

export enum AFDokladKUhradeZamekK {
  otevreno = 'zamek.otevreno', //Otevřeno
  prohlednuto = 'zamek.prohlednuto', //Prohlédnuto
  polozamceno = 'zamek.polozamceno', //Zamknuto mimo účetní
  zamceno = 'zamek.zamceno', //Zamknuto
}

export enum AFDokladKUhradeZaokrJakSumK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFDokladKUhradeZaokrNaSumK {
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

export enum AFDokladKUhradeZaokrJakDphK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFDokladKUhradeZaokrNaDphK {
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

export enum AFDokladKUhradeEkokomK {
  zpoplatneneObaly = 'ekokom.zpoplatneneObaly', //Zpoplatněné obaly
  predplaceneObaly = 'ekokom.predplaceneObaly', //Předplacené obaly
  nezaplaceneObaly = 'ekokom.nezaplaceneObaly', //Nezaplacené obaly
  exportovaneObaly = 'ekokom.exportovaneObaly', //Exportované obaly
  vyrazeneObaly = 'ekokom.vyrazeneObaly', //Vyřazené obaly
}

export enum AFDokladKUhradeStavUhrK {
  castUhr = 'stavUhr.castUhr', //Částečně uhrazeno
  uhrazeno = 'stavUhr.uhrazeno', //Uhrazeno
  uhrazenoRucne = 'stavUhr.uhrazenoRucne', //Uhrazeno (ručně)
}

export enum AFDokladKUhradeStavOdpocetK {
  cast = 'stavOdp.cast', //Částečně odpočteno
  komplet = 'stavOdp.komplet', //Odpočteno
  vytvZdd = 'stavOdp.vytvZdd', //Vytvořen ZDD
}

export enum AFDokladKUhradeStavMailK {
  neodesilat = 'stavMail.neodesilat', //Neodesílat
  odeslat = 'stavMail.odeslat', //Odeslat
  odeslano = 'stavMail.odeslano', //Odesláno
}

export enum AFDokladKUhradeEetTypK {
  ne = 'eetTyp.ne', //nepodléhá EET
  anoBezny = 'eetTyp.anoBezny', //běžný režim
  anoZjednoduseny = 'eetTyp.anoZjednoduseny', //zjednodušený režim
}

export enum AFDokladKUhradeEetStavK {
  ne = 'eetStav.ne', //neodesláno
  neuspech = 'eetStav.neuspech', //neúspěch
  odeslano = 'eetStav.odeslano', //odesláno
  neStorno = 'eetStav.neStorno', //neodesláno storno
  neuspechStorno = 'eetStav.neuspechStorno', //neúspěch storno
  odeslanoStorno = 'eetStav.odeslanoStorno', //odesláno storno
}

export enum AFDokladKUhradeMetodaZaokrDoklK {
  zklDph = 'metodaZaokr.zklDph', //do základu a DPH
  0sazba = 'metodaZaokr.0sazba', //do 0 sazby
  individ = 'metodaZaokr.individ', //individuálně
}


export class AFDokladKUhrade extends AFEntity {

    // ID (db: IdDoklFak) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Interní číslo (db: Kod) - Interní číslo)
    kod?: string

    // Modul (db: Modul) - Modul)
    modul?: string

    // Typ pohybu (db: TypPohybuK) - Typ pohybu)
    typPohybuK?: any

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

    // DPH 2. snížená [měna] (db: SumDphSniz2Men) - DPH 2. snížená)
    sumDphSniz2Men?: Big

    // DPH snížená [měna] (db: SumDphSnizMen) - DPH snížená)
    sumDphSnizMen?: Big

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

    // Náklady (db: SumNaklady) - Sumace nákladů)
    sumNaklady?: Big

    // Sleva [%] (db: SlevaDokl) - Sleva [%])
    slevaDokl?: Big

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

    // IČ DPH (db: VatId) - IČ DPH)
    vatId?: string

    // Poštovní adresa je shodná se sídlem (db: PostovniShodna) - Poštovní adresa je shodná se sídlem)
    postovniShodna?: boolean

    // Pošt. jméno firmy (db: FaNazev) - Firma)
    faNazev?: string

    // Pošt. ulice (db: FaUlice) - Ulice)
    faUlice?: string

    // Pošt. město (db: FaMesto) - Město)
    faMesto?: string

    // Pošt. PSČ (db: FaPsc) - PSČ)
    faPsc?: string

    // Pošt. EAN (db: FaEanKod) - EAN)
    faEanKod?: string

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

    // Datum sazeb DPH (db: DatSazbyDph) - Datum sazeb DPH)
    datSazbyDph?: Date

    // Vynechat ze salda (db: VyloucitSaldo) - Vynechat ze salda)
    vyloucitSaldo?: boolean

    // Storno (db: Storno) - Storno)
    storno?: boolean

    // Zámek (db: ZamekK) - Zámek)
    zamekK?: any

    // Způsob zaokr. Celkem (db: ZaokrJakSumK) - Celkem (způsob))
    zaokrJakSumK?: any

    // Řád zaokr. Celkem (db: ZaokrNaSumK) - Celkem (řády))
    zaokrNaSumK?: any

    // Způsob zaokr. DPH (db: ZaokrJakDphK) - DPH (způsob))
    zaokrJakDphK?: any

    // Řád zaokr. DPH (db: ZaokrNaDphK) - DPH (řády))
    zaokrNaDphK?: any

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
    uuid?: string

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Kontaktní jméno (db: KontaktJmeno) - Jméno)
    kontaktJmeno?: string

    // Kontaktní telefon (db: KontaktTel) - Telefon)
    kontaktTel?: string

    // Kontaktní email (db: KontaktEmail) - Email)
    kontaktEmail?: string

    // Výkaz EkoKom (db: EkokomK) - Výkaz EkoKom)
    ekokomK?: any

    // Počet balíků (db: BalikPocet) - balíků)
    balikPocet?: number

    // ID výdejního místa (db: BranchId) - ID výdejního místa)
    branchId?: string

    // Přiřazeny balíky (db: BalikZacislovan) - Přiřazeny balíky)
    balikZacislovan?: boolean

    // Balíky vyexportovány (db: BalikVytvXml) - Balíky vyexportovány)
    balikVytvXml?: boolean

    // Název firmy - druhá řádka (db: undefined) - Název firmy - druhá řádka)
    faNazev2?: string

    // Typ dokladu (db: IdTypDokl) - Typ dokladu)
    typDokl?: AFTypDokladu

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Konst. sym. (db: IdKonSym) - Kon. sym.)
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

    // Účet dodavatele (db: IdBanSpojDod) - Účet dodavatele)
    banSpojDod?: AFAdresarBankovniUcet

    // Banka/pokladna/sklad (db: IdBsp) - Banka/pokladna/sklad)
    bsp?: AFBankovniUcetSkladPokladna

    // Bankovní účet (db: IdBspBan) - Bankovní účet)
    bankovniUcet?: AFBankovniUcet

    // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Prim.účet (db: IdPrimUcet) - Primární)
    primUcet?: AFUcet

    // Protiúčet (db: IdProtiUcet) - Protiúčet)
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

    // Čís. řada (db: IdRady) - Čís. řada)
    rada?: AFRada

    // Pol. dokl. řady (db: IdPolRady) - Pol. dokl. řady)
    polozkaRady?: AFRocniRada

    // Osvobozená sazba DPH (db: IdSazbyDphOsv) - Osvobozená sazba DPH)
    sazbaDphOsv?: AFSazbaDph

    // Snížená sazba DPH (db: IdSazbyDphSniz) - Snížená sazba DPH)
    sazbaDphSniz?: AFSazbaDph

    // 2. snížená sazba DPH (db: IdSazbyDphSniz2) - 2. snížená sazba DPH)
    sazbaDphSniz2?: AFSazbaDph

    // Základní sazba DPH (db: IdSazbyDphZakl) - Základní sazba DPH)
    sazbaDphZakl?: AFSazbaDph

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Smlouva (db: IdSmlouvy) - Smlouva)
    smlouva?: AFSmlouva

    // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
    formaDopravy?: AFFormaDopravy

    // Dodat na adresu (db: IdDodatNa) - Dodat na adresu)
    dodatNa?: AFAdresar

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

    // Stav úhrady dokladu (db: StavUhrK) - Stav úhrady dokladu)
    stavUhrK?: any

    // Již uhrazeno přeplatky [Kč] (db: JuhSumPp) - Již uhrazeno přeplatky [Kč])
    juhSumPp?: Big

    // Již uhrazeno přeplatky [měna] (db: JuhSumPpMen) - Již uhrazeno přeplatky [měna])
    juhSumPpMen?: Big

    // Zbývá uhradit [Kč] (db: sumCelkem - juhSum) - Zbývá uhradit [Kč])
    zbyvaUhradit?: Big

    // Zbývá uhradit [měna] (db: sumCelkemMen - juhSumMen) - Zbývá uhradit [měna])
    zbyvaUhraditMen?: Big

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

    // Celkem bez záloh [Kč] (db: sumCelkem + sumZalohy) - Celkem bez záloh)
    sumCelkemBezZaloh?: Big

    // Celkem bez záloh [měna] (db: sumCelkemMen + sumZalohyMen) - Celkem bez záloh)
    sumCelkemBezZalohMen?: Big

    // Generovat sklad. doklady (db: GenerovatSkl) - Generovat sklad. doklady)
    generovatSkl?: boolean

    // Zdroj pro sklad. doklady (db: ZdrojProSkl) - Zdroj pro sklad. doklady)
    zdrojProSkl?: boolean

    // Hrom. fakturace (db: HromFakt) - Hrom. fakturace)
    hromFakt?: boolean

    // Zaokrouhlit po odpočtu (db: ZaokrouhlitPoOdpoctu) - Zaokrouhlit po odpočtu)
    zaokrouhlitPoOdpoctu?: boolean

    // Prodejka (db: Prodejka) - Prodejka)
    prodejka?: boolean

    // Stav mailu (db: StavMailK) - Stav mailu)
    stavMailK?: any

    // Zákaz proplacení (db: ZakazPlatba) - Zákaz proplacení)
    zakazPlatba?: boolean

    // Dobropisováno (db: Dobropisovano) - Dobropisováno)
    dobropisovano?: boolean

    // Zvláštní režim DPH (db: OsobUpravaDph) - Zvláštní režim DPH)
    osobUpravaDph?: boolean

    // Dodavatel ve zvláštním režimu DPH (db: OsobUpravaDphDodavatel) - Dodavatel ve zvláštním režimu DPH)
    osobUpravaDphDodavatel?: boolean

    // Automaticky odpočítávat (db: OdpocAuto) - Automaticky odpočítávat)
    odpocAuto?: boolean

    // EET Pokl.zaříz. (db: EetPokladniZarizeni) - Označení pokladního zařízení)
    eetPokladniZarizeni?: string

    // Označení provozovny (db: EetProvozovna) - Označení provozovny)
    eetProvozovna?: number

    // DIČ pověřujícího poplatníka (db: EetDicPoverujiciho) - DIČ pověřujícího poplatníka)
    eetDicPoverujiciho?: string

    // Režim EET (db: EetTypK) - Režim EET)
    eetTypK?: any

    // Stav odeslání (db: EetStavK) - Stav odeslání)
    eetStavK?: any

    // FIK (db: EetFik) - FIK)
    eetFik?: string

    // PKP (db: EetPkp) - PKP)
    eetPkp?: string

    // Datum a čas tržby (db: EetDatCasTrzby) - Datum a čas tržby)
    eetDatCasTrzby?: Date

    // Tisknout PKP (db: EetTisknoutPkp) - Tisknout PKP)
    eetTisknoutPkp?: boolean

    // BKP (db: EetBkp) - BKP)
    eetBkp?: string

    // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
    metodaZaokrDoklK?: any

    // Korekce DPH (db: VytvaretKorPol) - Korekce DPH)
    vytvaretKorPol?: boolean

    // Zaúč.kasa-forma úhr. (db: IdFormaUhradyCisKasa) - Zaúč.kasa-forma úhr.)
    formaUhradyCisKasa?: AFFormaUhrady

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady


    // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
    vazebniDoklady?: Promise<AFVazebniDoklad[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Vazby mezi doklady (type: VAZBA_MEZI_DOKLADY) - vazby)
    vazby?: Promise<AFVazba[]>

}