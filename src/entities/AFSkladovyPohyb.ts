import { AFEntity } from '../AFEntity'
import { AFRegion } from './AFRegion'
import { AFStat } from './AFStat'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFSklad } from './AFSklad'
import { AFMena } from './AFMena'
import { AFAdresar } from './AFAdresar'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFZakazka } from './AFZakazka'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni'
import { AFKontakt } from './AFKontakt'
import { AFRadaSkladovyPohyb } from './AFRadaSkladovyPohyb'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFInventura } from './AFInventura'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFSkladovyPohybPolozka } from './AFSkladovyPohybPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'

export enum AFSkladovyPohybZamekK {
  otevreno = 'zamek.otevreno', //Otevřeno
  prohlednuto = 'zamek.prohlednuto', //Prohlédnuto
  polozamceno = 'zamek.polozamceno', //Zamknuto mimo účetní
  zamceno = 'zamek.zamceno', //Zamknuto
}

export enum AFSkladovyPohybTypPohybuK {
  prijem = 'typPohybu.prijem', //Příjem
  vydej = 'typPohybu.vydej', //Výdej
}

export enum AFSkladovyPohybStavSkladK {
  vyfakt = 'stavSklad.vyfakt', //Vyfakturován
  vyfaktCast = 'stavSklad.vyfaktCast', //Částečně vyfakturován
  vyfaktHrom = 'stavSklad.vyfaktHrom', //Vyfakturován hromadně
  vyfaktHromCast = 'stavSklad.vyfaktHromCast', //Částečně vyfakturován hromadně
  vygenFakt = 'stavSklad.vygenFakt', //Vygenerován z faktury
  vygenFaktNeuplny = 'stavSklad.vygenFaktNeuplny', //Vygenerován z faktury - neúplný
  uhrazen = 'stavSklad.uhrazen', //Uhrazen pokladnou
  uhrazenCast = 'stavSklad.uhrazenCast', //Částečně uhrazen pokladnou
  uhrazenHrom = 'stavSklad.uhrazenHrom', //Uhrazen pokladnou hromadně
  uhrazenHromCast = 'stavSklad.uhrazenHromCast', //Částečně uhrazen pokladnou hromadně
  vygenPokl = 'stavSklad.vygenPokl', //Vygenerován z pokladny
  vygenPoklNeuplny = 'stavSklad.vygenPoklNeuplny', //Vygenerován z pokladny - neúplný
  prevodka = 'stavSklad.prevodka', //Převodka
  vyroba = 'stavSklad.vyroba', //Výroba
  nefakturovatelne = 'stavSklad.nefakturovatelne', //Nefakturovatelné
}

export enum AFSkladovyPohybTypPohybuSkladK {
  prijemHoly = 'typPohybuSklad.prijemHoly', //"Holý" příjem
  prijemPolot = 'typPohybuSklad.prijemPolot', //Příjem polotovaru
  prijemPoFak = 'typPohybuSklad.prijemPoFak', //Příjem po faktuře
  prijemPoObch = 'typPohybuSklad.prijemPoObch', //Příjem po objednávce
  prijemPrevod = 'typPohybuSklad.prijemPrevod', //Příjem pro převodku
  prijemProFak = 'typPohybuSklad.prijemProFak', //Příjem pro fakturaci
  prijemVyrob = 'typPohybuSklad.prijemVyrob', //Příjem výrobku
  prijemVratka = 'typPohybuSklad.prijemVratka', //Příjem (dobropis, vratka)
  vydejHoly = 'typPohybuSklad.vydejHoly', //"Holý" výdej
  vydejPolot = 'typPohybuSklad.vydejPolot', //Výdej polotovaru
  vydejPoFak = 'typPohybuSklad.vydejPoFak', //Výdej po faktuře
  vydejPoObch = 'typPohybuSklad.vydejPoObch', //Výdej po objednávce
  vydejPrevod = 'typPohybuSklad.vydejPrevod', //Výdej pro převodku
  vydejProFakCenik = 'typPohybuSklad.vydejProFakCenik', //Výdej pro fakturaci (ceny z ceníku)
  vydejProFakRucne = 'typPohybuSklad.vydejProFakRucne', //Výdej pro fakturaci (ceny ručně)
  vydejVyrob = 'typPohybuSklad.vydejVyrob', //Výdej výrobku
  prijemVydejVratka = 'typPohybuSklad.prijemVydejVratka', //Výdej (dobropis, vratka)
}


export class AFSkladovyPohyb extends AFEntity {

    // ID (db: IdDoklSklad) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Interní číslo (db: Kod) - Interní číslo)
    kod?: string

    // Zámek (db: ZamekK) - Zámek)
    zamekK?: any

    // Typ pohybu (db: TypPohybuK) - Typ pohybu)
    typPohybuK?: any

    // Variabilní symbol (db: VarSym) - Variabilní symbol)
    varSym?: string

    // Číslo objednávky (db: CisObj) - Číslo objednávky)
    cisObj?: string

    // Dodací list (db: CisDodak) - Dodací list)
    cisDodak?: string

    // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
    doprava?: string

    // Datum vystavení (db: DatVyst) - Datum vystavení)
    datVyst?: Date

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

    // Základ celkem [Kč] (db: sumOsv + sumZklSniz + sumZklSniz2 + sumZklZakl) - Základ)
    sumZklCelkem?: Big

    // Celkem [Kč] (db: SumCelkem) - Celkem [Kč])
    sumCelkem?: Big

    // Osvob., bez DPH [měna] (db: SumOsvMen) - 0 %)
    sumOsvMen?: Big

    // Základ celkem [měna] (db: sumOsvMen + sumZklSnizMen + sumZklSniz2Men + sumZklZaklMen) - Základ)
    sumZklCelkemMen?: Big

    // Celkem [měna] (db: SumCelkemMen) - Celkem [měna])
    sumCelkemMen?: Big

    // Kurz (db: Kurz) - Kurz)
    kurz?: Big

    // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
    kurzMnozstvi?: Big

    // Název firmy nebo jméno osoby (db: NazFirmy) - Název firmy - jméno)
    nazFirmy?: string

    // Název firmy - druhá řádka (db: undefined) - Název firmy - druhá řádka)
    faNazev2?: string

    // Ulice (db: Ulice) - Ulice)
    ulice?: string

    // Město (db: Mesto) - Město)
    mesto?: string

    // PSČ (db: Psc) - PSČ)
    psc?: string

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // Pošt. kraj (db: Idfaregion) - Kraj)
    faRegion?: AFRegion

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

    // Pošt. ulice (db: FaUlice) - Ulice)
    faUlice?: string

    // Pošt. město (db: FaMesto) - Město)
    faMesto?: string

    // Pošt. PSČ (db: FaPsc) - PSČ)
    faPsc?: string

    // Pošt. stát (db: IdFaStatu) - Stát)
    faStat?: AFStat

    // Pošt. EAN (db: FaEanKod) - EAN)
    faEanKod?: string

    // Bezpol. dokl. (db: BezPolozek) - bezpoložkový doklad)
    bezPolozek?: boolean

    // Je účetní (db: Ucetni) - Doklad je účetní)
    ucetni?: boolean

    // Zaúčtováno (db: Zuctovano) - Stav zaúčtování)
    zuctovano?: boolean

    // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
    datUcto?: Date

    // Storno (db: Storno) - Storno)
    storno?: boolean

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Hrom. fakturace (db: HromFakt) - Hrom. fakturace)
    hromFakt?: boolean

    // Typ dokladu (db: IdTypDokl) - Typ dokladu)
    typDokl?: AFTypSkladovyPohyb

    // Sklad (db: IdBsp) - Sklad)
    sklad?: AFSklad

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Místo určení (db: IdMur) - Místo určení)
    mistUrc?: AFMistoUrceni

    // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Účet skladu (db: IdPrimUcet) - Účet skladu)
    primUcet?: AFUcet

    // Protiúčet (db: IdProtiUcet) - Protiúčet)
    protiUcet?: AFUcet

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
    rada?: AFRadaSkladovyPohyb

    // Zdroj pro faktury (db: ZdrojProFak) - Zdroj pro faktury)
    zdrojProFak?: boolean

    // Stav dokladu (db: StavSkladK) - Stav dokladu)
    stavSkladK?: any

    // Typ pohybu + upřesnění (db: TypPohybuSkladK) - Typ pohybu + upřesnění)
    typPohybuSkladK?: any

    // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
    formaDopravy?: AFFormaDopravy

    // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
    uuid?: string

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Vynechat ze salda (db: VyloucitSaldo) - Vynechat ze salda)
    vyloucitSaldo?: boolean

    // Sklad cíl (db: IdSkladCil) - Sklad cíl)
    skladCil?: AFSklad

    // Inventura (db: IdInventura) - Inventura)
    inventura?: AFInventura

    // ID výdejního místa (db: BranchId) - ID výdejního místa)
    branchId?: string


    // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
    vazebniDoklady?: Promise<AFVazebniDoklad[]>

    // Položky příjemky/výdejky (type: SKLADOVY_POHYB_POLOZKA) - polozkyDokladu)
    polozkyDokladu?: Promise<AFSkladovyPohybPolozka[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Vazby mezi doklady (type: VAZBA_MEZI_DOKLADY) - vazby)
    vazby?: Promise<AFVazba[]>

}