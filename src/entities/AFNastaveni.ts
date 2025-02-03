import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFMena } from './AFMena'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFTypFakturyPrijate } from './AFTypFakturyPrijate'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFTypNabidkyVydane } from './AFTypNabidkyVydane'
import { AFTypObjednavkyPrijate } from './AFTypObjednavkyPrijate'
import { AFTypPoptavkyVydane } from './AFTypPoptavkyVydane'
import { AFTypNabidkyPrijate } from './AFTypNabidkyPrijate'
import { AFTypObjednavkyVydane } from './AFTypObjednavkyVydane'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFTypPohledavky } from './AFTypPohledavky'
import { AFTypZavazku } from './AFTypZavazku'
import { AFTypPokladniPohyb } from './AFTypPokladniPohyb'
import { AFRegion } from './AFRegion'
import { AFUcet } from './AFUcet'
import { AFAdresar } from './AFAdresar'
import { AFTypBanka } from './AFTypBanka'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFTypDokladu } from './AFTypDokladu'

export enum AFNastaveniTypUcJednotkyK {
  mikro = 'typUcJednotky.mikro', //Mikro účetní jednotka
  mala = 'typUcJednotky.mala', //Malá účetní jednotka
  velka = 'typUcJednotky.velka', //Velká účetní jednotka
}

export enum AFNastaveniZobrLogoK {
  zachovVelikost = 'zobrLogo.zachovVelikost', //Zachovat velikost
  prizFormatPomeryStran = 'zobrLogo.prizFormatPomeryStran', //Přizpůsobit se formátu a zachovat poměry stran
  prizFormat = 'zobrLogo.prizFormat', //Přizpůsobit se formátu
}

export enum AFNastaveniJazyk1K {
  cs = 'jazyk.cs', //čeština
  sk = 'jazyk.sk', //slovenština
  de = 'jazyk.de', //němčina
  en = 'jazyk.en', //angličtina
  fr = 'jazyk.fr', //francouzština
  hu = 'jazyk.hu', //maďarština
  it = 'jazyk.it', //italština
  es = 'jazyk.es', //španělština
  pl = 'jazyk.pl', //polština
  ro = 'jazyk.ro', //rumunština
  ru = 'jazyk.ru', //ruština
}

export enum AFNastaveniJazyk2K {
  none = 'jazyk.none', //neaktivní
  cs = 'jazyk.cs', //čeština
  sk = 'jazyk.sk', //slovenština
  de = 'jazyk.de', //němčina
  en = 'jazyk.en', //angličtina
  fr = 'jazyk.fr', //francouzština
  hu = 'jazyk.hu', //maďarština
  it = 'jazyk.it', //italština
  es = 'jazyk.es', //španělština
  pl = 'jazyk.pl', //polština
  ro = 'jazyk.ro', //rumunština
  ru = 'jazyk.ru', //ruština
}

export enum AFNastaveniJazyk3K {
  none = 'jazyk.none', //neaktivní
  cs = 'jazyk.cs', //čeština
  sk = 'jazyk.sk', //slovenština
  de = 'jazyk.de', //němčina
  en = 'jazyk.en', //angličtina
  fr = 'jazyk.fr', //francouzština
  hu = 'jazyk.hu', //maďarština
  it = 'jazyk.it', //italština
  es = 'jazyk.es', //španělština
  pl = 'jazyk.pl', //polština
  ro = 'jazyk.ro', //rumunština
  ru = 'jazyk.ru', //ruština
}

export enum AFNastaveniJazyk4K {
  none = 'jazyk.none', //neaktivní
  cs = 'jazyk.cs', //čeština
  sk = 'jazyk.sk', //slovenština
  de = 'jazyk.de', //němčina
  en = 'jazyk.en', //angličtina
  fr = 'jazyk.fr', //francouzština
  hu = 'jazyk.hu', //maďarština
  it = 'jazyk.it', //italština
  es = 'jazyk.es', //španělština
  pl = 'jazyk.pl', //polština
  ro = 'jazyk.ro', //rumunština
  ru = 'jazyk.ru', //ruština
}

export enum AFNastaveniLogoPoziceK {
  nahore = 'logoPozice.nahore', //Logo nahoře
  vlevo = 'logoPozice.vlevo', //Logo vlevo
}

export enum AFNastaveniRezimRezervaciK {
  rucni = 'rezimRezervaci.rucni', //Pouze ruční
  zObj = 'rezimRezervaci.zObj', //Automatická při vytvoření objednávky
  zObjPriNaskladneni = 'rezimRezervaci.zObjPriNaskladneni', //Automatická při vytvoření objednávky i naskladnění zboží
}

export enum AFNastaveniZastupceTypK {
  fo = 'zastupceTyp.fo', //Fyzická osoba
  po = 'zastupceTyp.po', //Právnická osoba
}

export enum AFNastaveniMzdTydenPracDobaK {
  standard = 'tydenPracDoba.standard', //Jednosměnný provoz (40 hodin)
  dul = 'tydenPracDoba.dul', //Pracující v podzemí (37,5 hodin)
  trismenny = 'tydenPracDoba.trismenny', //Třísměnný provoz (37,5 hodin)
  dvousmenny = 'tydenPracDoba.dvousmenny', //Dvousměnný provoz (38,75 hodin)
}

export enum AFNastaveniDenniKurzK {
  aktualniDen = 'denniKurz.aktualniDen', //Z aktuálního dne
  predchoziDen = 'denniKurz.predchoziDen', //Z předchozího dne
}

export enum AFNastaveniRocniKurzK {
  kalendarniDen = 'rocniKurz.kalendarniDen', //K 1. kal. dni v období
  pracovniDen = 'rocniKurz.pracovniDen', //K 1. prac. dni v období
}

export enum AFNastaveniJakyTypFavK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypPhlK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypFapK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypZavK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypIntK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypPppK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypNavK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypObpK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypPpvK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypNapK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypObvK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypSklK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypBanK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniJakyTypPokK {
  zeptat = 'jakyTypDokl.zeptat', //Dotázat uživatele
  posledni = 'jakyTypDokl.posledni', //Poslední vybraný
  primarni = 'jakyTypDokl.primarni', //Primární
}

export enum AFNastaveniPrepocetCenK {
  auto = 'prepocetCen.auto', //Přepočítat ceny
  none = 'prepocetCen.none', //Neměnit ceny
  ask = 'prepocetCen.ask', //Zeptat se
}

export enum AFNastaveniFapDatProDuzpUctoK {
  duzpPuv = 'fapDatProDuzpUctoK.duzpPuv', //Datum zdaň. pl.
  datVyst = 'fapDatProDuzpUctoK.datVyst', //Přijato
  datUcto = 'fapDatProDuzpUctoK.datUcto', //Datum zaúčtování
  datSplat = 'fapDatProDuzpUctoK.datSplat', //Splatnost
  aktDatum = 'fapDatProDuzpUctoK.aktDatum', //Aktuální datum
  neplnit = 'fapDatProDuzpUctoK.neplnit', //Nepředvyplňovat
}

export enum AFNastaveniAutoSendMailModK {
  odesilat = 'autoSendMailMod.odesilat', //Odesílat
  odesilatBcc = 'autoSendMailMod.odesilatBcc', //Odesílat jen na email skryté kopie
  neodesilat = 'autoSendMailMod.neodesilat', //Neodesílat
}

export enum AFNastaveniZobrazWebModK {
  auto = 'zobrazWebKompMod.auto', //Automatická volba
  browser = 'zobrazWebKompMod.browser', //Webový prohlížeč
}


export class AFNastaveni extends AFEntity {

    // ID (db: IdNastav) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Změny budou platné od data (db: PlatiOdData) - Změny budou platné od data)
    platiOdData?: Date

    // Jméno (db: NazFirmy) - Jméno)
    nazFirmy?: string

    // IČO, DIČ (db: Ic) - IČO, DIČ)
    ic?: string

    // DIČ (db: Dic) - DIČ)
    dic?: string

    // EAN (db: EanKod) - EAN)
    eanKod?: string

    // Ulice (db: Ulice) - Ulice)
    uliceNazev?: string

    // Č. popisné (db: CisPop) - Č.p.)
    cisPop?: string

    // Č. orientační (db: CisOr) - Č.o.)
    cisOr?: string

    // Město (db: Mesto) - Město)
    mesto?: string

    // PSČ (db: Psc) - PSČ)
    psc?: string

    // WWW (db: Www) - WWW)
    www?: string

    // E-mail (db: Email) - E-mail)
    email?: string

    // Datová schránka (db: DatovaSchranka) - Datová schránka)
    datovaSchranka?: string

    // Fax (db: Fax) - Fax)
    fax?: string

    // Mobil (db: Mobil) - Mobil)
    mobil?: string

    // Telefon (db: Tel) - Telefon)
    tel?: string

    // Poštovní adresa je shodná se sídlem (db: PostovniShodna) - Poštovní adresa je shodná se sídlem)
    postovniShodna?: boolean

    // Pošt. ulice (db: FaUlice) - Ulice)
    faUliceNazev?: string

    // Č. popisné (db: FaCisPop) - Č.p.)
    faCisPop?: string

    // Č. orientační (db: FaCisOr) - Č.o.)
    faCisOr?: string

    // Pošt. město (db: FaMesto) - Město)
    faMesto?: string

    // Pošt. PSČ (db: FaPsc) - PSČ)
    faPsc?: string

    // Fakturační adresa je shodná se sídlem (db: FakturacniShodna) - Fakturační adresa je shodná se sídlem)
    fakturacniShodna?: boolean

    // Pošt. ulice (db: PostUlice) - Ulice)
    postUliceNazev?: string

    // Č. popisné (db: PostCisPop) - Č.p.)
    postCisPop?: string

    // Č. orientační (db: PostCisOr) - Č.o.)
    postCisOr?: string

    // Pošt. město (db: PostMesto) - Město)
    postMesto?: string

    // Pošt. PSČ (db: PostPsc) - PSČ)
    postPsc?: string

    // Spisová značka (db: SpisZnac) - Spisová značka)
    spisZnac?: string

    // Spisová značka EN (db: SpisZnacA) - Spisová značka EN)
    spisZnacA?: string

    // Spisová značka DE (db: SpisZnacB) - Spisová značka DE)
    spisZnacB?: string

    // Spisová značka FR (db: SpisZnacC) - Spisová značka FR)
    spisZnacC?: string

    // Plátce DPH (db: PlatceDph) - Plátce DPH)
    platceDph?: boolean

    // Typ účetní jednotky (db: TypUcJednotkyK) - Typ účetní jednotky)
    typUcJednotkyK?: any

    // Zvláštní režim jednoho správního místa (MOSS, platné do 30.6.2021) (db: Moss) - Zvláštní režim jednoho správního místa (MOSS, platné do 30.6.2021))
    moss?: boolean

    // OSS - režim EU (db: OssEU) - OSS - režim EU)
    ossEU?: boolean

    // OSS - režim mimo EU (db: OssMimoEU) - OSS - režim mimo EU)
    ossMimoEU?: boolean

    // OSS - dovozní režim (db: OssDovoz) - OSS - dovozní režim)
    ossDovoz?: boolean

    // Omezovat výběr států DPH (db: OmezovatVyberStatu) - Omezovat výběr států DPH)
    omezovatVyberStatu?: boolean

    // Převažující činnost (db: Cinnost) - Převažující činnost)
    cinnost?: string

    // Fyzická osoba (db: FyzOsoba) - Fyzická osoba)
    fyzOsoba?: boolean

    // Jméno (db: FyzOsJmeno) - Jméno)
    fyzOsJmeno?: string

    // Příjmení (db: FyzOsPrijmeni) - Příjmení)
    fyzOsPrijmeni?: string

    // Titul (db: FyzOsTitul) - Titul)
    fyzOsTitul?: string

    // Titul za jménem (db: FyzOsTitulZa) - Titul za jménem)
    fyzOsTitulZa?: string

    // Postavení (db: OprPostav) - Postavení)
    oprPostav?: string

    // Příjmení (db: OprPrijmeni) - Příjmení)
    oprPrijmeni?: string

    // Jméno (db: OprJmeno) - Jméno)
    oprJmeno?: string

    // Vyžadovat podpis před vystavením příkazu k úhradě (db: PodpisPrik) - Vyžadovat podpis před vystavením příkazu k úhradě)
    podpisPrik?: boolean

    // Účetnictví (db: PodvojUcto) - vést účetnictví)
    podvojUcto?: boolean

    // Vést Intrastat (db: Intrastat) - Vést Intrastat)
    intrastat?: boolean

    // Splatnost ve dnech (db: SplatDny) - Splatnost ve dnech)
    splatDny?: number

    // Výchozí splatnost [dny] (db: SplatDnyNakup) - Výchozí splatnost [dny])
    splatDnyNakup?: number

    // Právní forma účet. jednotky (db: PravFormaPodnik) - Právní forma účet. jednotky)
    pravFormaPodnik?: string

    // Způsob zobrazení (db: ZobrLogoK) - Způsob zobrazení)
    zobrLogoK?: any

    // Sklad nahrávat do účetnictví (db: SklUcto) - Sklad nahrávat do účetnictví)
    sklUcto?: boolean

    // Sklad je FIFO (db: SklFifo) - Sklad je FIFO)
    sklFifo?: boolean

    // Umožnit generování požadavků na výdej (db: SklGenerovatPozadavky) - Umožnit generování požadavků na výdej)
    sklGenerovatPozadavky?: boolean

    // Kontrolovat firmy a účty při vytváření dokladu (db: AdrKontrolovatFirmy) - Kontrolovat firmy a účty při vytváření dokladu)
    adrKontrolovatFirmy?: boolean

    // Při příjmu aktualizovat nákupní cenu v ceníku (db: SklAktualNakupCena) - Při příjmu aktualizovat nákupní cenu v ceníku)
    sklAktualNakupCena?: boolean

    // Automaticky generovat číslo zakázky shodné s objednávkou (db: AutoZakazka) - Automaticky generovat číslo zakázky shodné s objednávkou)
    autoZakazka?: boolean

    // Transakční kód (db: AvTranKod) - Transakční kód)
    avTranKod?: string

    // Směrový kód (db: AvSmerKod) - Směrový kód)
    avSmerKod?: string

    // ... export z ABRA Flexi (db: ElPokExport) - ... export z ABRA Flexi)
    elPokExport?: string

    // ... import do ABRA Flexi (db: ElPokImport) - ... import do ABRA Flexi)
    elPokImport?: string

    // ... INI soubor (db: ElPokIni) - ... INI soubor)
    elPokIni?: string

    // Kurz duální měny (db: KurzDualMena) - Kurz duální měny)
    kurzDualMena?: Big

    // Doplňující text na fakturu (db: DoplnText) - Doplňující text na fakturu)
    doplnText?: string

    // Jazyk 1 (db: Jazyk1K) - Jazyk 1)
    jazyk1K?: any

    // Jazyk 2 (db: Jazyk2K) - Jazyk 2)
    jazyk2K?: any

    // Jazyk 3 (db: Jazyk3K) - Jazyk 3)
    jazyk3K?: any

    // Jazyk 4 (db: Jazyk4K) - Jazyk 4)
    jazyk4K?: any

    // Pozice loga (db: LogoPoziceK) - Pozice loga)
    logoPoziceK?: any

    // Režim rezervací (db: RezimRezervaciK) - Režim rezervací)
    rezimRezervaciK?: any

    // Postmigrace (db: PostMigrace) - Postmigrace)
    postMigrace?: boolean

    // UUID Firmy (db: FirmaUUID) - UUID Firmy)
    firmaUUID?: string

    // Povolit rezervaci do záporu (db: RezervovatZapor) - Povolit rezervaci do záporu)
    rezervovatZapor?: boolean

    // Typ (db: ZastupceTypK) - Typ)
    zastupceTypK?: any

    // Kód (db: ZastupceKod) - Kód)
    zastupceKod?: string

    // Název právnické osoby (db: ZastupceNazev) - Název právnické osoby)
    zastupceNazev?: string

    // IČO právnické osoby (db: ZastupceIc) - IČO právnické osoby)
    zastupceIc?: string

    // Příjmení (db: ZastupcePrijmeni) - Příjmení)
    zastupcePrijmeni?: string

    // Jméno (db: ZastupceJmeno) - Jméno)
    zastupceJmeno?: string

    // Dat. nar. (db: ZastupceDatNar) - Dat. nar.)
    zastupceDatNar?: Date

    // Evid. číslo (db: ZastupceEvCislo) - Evid. číslo)
    zastupceEvCislo?: string

    // Počet dnů dovolené za den absence (do r. 2020) (db: MzdDnuDovolAbs) - Počet dnů dovolené za den absence (do r. 2020))
    mzdDnuDovolAbs?: Big

    // Krátit dovolenou za neomluvenou absenci (db: MzdKratitDovolAbs) - Krátit dovolenou za neomluvenou absenci)
    mzdKratitDovolAbs?: boolean

    // Příspěvek na penzijní připojištění (db: MzdPenzPrip) - Příspěvek na penzijní připojištění)
    mzdPenzPrip?: boolean

    // Procento příspěvku na penzijní připojištění (db: MzdPenzPripProc) - Procento příspěvku na penzijní připojištění)
    mzdPenzPripProc?: Big

    // Dnů v týdnu (db: MzdSmenyDnuTydne) - Dnů v týdnu)
    mzdSmenyDnuTydne?: number

    // Hodin denně (db: MzdSmenyHodinDenne) - Hodin denně)
    mzdSmenyHodinDenne?: Big

    // Začátek pracovní doby (db: MzdSmenyPocPracDoby) - Začátek pracovní doby)
    mzdSmenyPocPracDoby?: Big

    // Výpočet náhrady za svátky z průměru (db: MzdSmenySvatkyPrum) - Výpočet náhrady za svátky z průměru)
    mzdSmenySvatkyPrum?: boolean

    // Automaticky nastavovat období proplacení nemoci (db: MzdNemocProplatAuto) - Automaticky nastavovat období proplacení nemoci)
    mzdNemocProplatAuto?: boolean

    // Při výpočtu mezd upozornit na kontrolu období proplacení u nemocí (db: MzdNemocProplatVarov) - Při výpočtu mezd upozornit na kontrolu období proplacení u nemocí)
    mzdNemocProplatVarov?: boolean

    // Refundace 50% náhrady mzdy za nemoc (db: MzdRefundNahrNemoc) - Refundace 50% náhrady mzdy za nemoc)
    mzdRefundNahrNemoc?: boolean

    // Promile pro výpočet povinného pojištění (db: MzdPromilePovPojisteni) - Promile pro výpočet povinného pojištění)
    mzdPromilePovPojisteni?: Big

    // Procento náhrady při kurzarbeitu (db: MzdProcentoKurzarbeit) - Procento náhrady při kurzarbeitu)
    mzdProcentoKurzarbeit?: Big

    // Sociální pojištění (db: MzdSplatSocPoj) - Sociální pojištění)
    mzdSplatSocPoj?: number

    // Zdravotní pojištění (db: MzdSplatZdravPoj) - Zdravotní pojištění)
    mzdSplatZdravPoj?: number

    // Daň zálohová (db: MzdSplatDanZal) - Daň zálohová)
    mzdSplatDanZal?: number

    // Daň srážková (db: MzdSplatDanSra) - Daň srážková)
    mzdSplatDanSra?: number

    // Daň rezident (db: MzdSplatDanRez) - Daň rezident)
    mzdSplatDanRez?: number

    // Dobírka (db: MzdSplatDobirka) - Dobírka)
    mzdSplatDobirka?: number

    // Příspěvky (db: MzdSplatPrispevky) - Příspěvky)
    mzdSplatPrispevky?: number

    // Týdenní pracovní doba (db: MzdTydenPracDobaK) - Týdenní pracovní doba)
    mzdTydenPracDobaK?: any

    // Denní kurz (db: DenniKurzK) - Denní kurz)
    denniKurzK?: any

    // Měsíční/roční kurz (db: RocniKurzK) - Měsíční/roční kurz)
    rocniKurzK?: any

    // Faktur vydaných (db: JakyTypFavK) - Faktur vydaných)
    jakyTypFavK?: any

    // Pohledávek (db: JakyTypPhlK) - Pohledávek)
    jakyTypPhlK?: any

    // Faktur přijatých (db: JakyTypFapK) - Faktur přijatých)
    jakyTypFapK?: any

    // Závazků (db: JakyTypZavK) - Závazků)
    jakyTypZavK?: any

    // Interních dokladů (db: JakyTypIntK) - Interních dokladů)
    jakyTypIntK?: any

    // Poptávek přijatých (db: JakyTypPppK) - Poptávek přijatých)
    jakyTypPppK?: any

    // Nabídek vydaných (db: JakyTypNavK) - Nabídek vydaných)
    jakyTypNavK?: any

    // Objednávek přijatých (db: JakyTypObpK) - Objednávek přijatých)
    jakyTypObpK?: any

    // Poptávek vydaných (db: JakyTypPpvK) - Poptávek vydaných)
    jakyTypPpvK?: any

    // Nabídek přijatých (db: JakyTypNapK) - Nabídek přijatých)
    jakyTypNapK?: any

    // Objednávek vydaných (db: JakyTypObvK) - Objednávek vydaných)
    jakyTypObvK?: any

    // Příjemek/výdejek (db: JakyTypSklK) - Příjemek/výdejek)
    jakyTypSklK?: any

    // Banky (db: JakyTypBanK) - Banky)
    jakyTypBanK?: any

    // Pokladny (db: JakyTypPokK) - Pokladny)
    jakyTypPokK?: any

    // Při změně odběratele přepočítat ceny (db: PrepocetCenK) - Při změně odběratele přepočítat ceny)
    prepocetCenK?: any

    // Manuální přepis čísel dokladů (db: ManualCisDokl) - Umožnit manuální přepsání interních čísel dokladů)
    manualCisDokl?: boolean

    // Otočit typ pohybu a částku v modulu Banka při automatickém párování dobropisu (db: ParovaniOtoceniUhrady) - Otočit typ pohybu a částku v modulu Banka při automatickém párování dobropisu)
    parovaniOtoceniUhrady?: boolean

    // Přenášení střediska z firmy (db: PrenFirStred) - Automatické vyplnění střediska u dokladu podle střediska u firmy v adresáři)
    prenFirStred?: boolean

    // Povolit odpočet neuhrazené vydané zálohy (db: OdpocNeuhrZalFav) - Povolit odpočet neuhrazené vydané zálohy)
    odpocNeuhrZalFav?: boolean

    // Povolit odpočet neuhrazené přijaté zálohy (db: OdpocNeuhrZalFap) - Povolit odpočet neuhrazené přijaté zálohy)
    odpocNeuhrZalFap?: boolean

    // Položky automatického zaokrouhlení dokladu nezahrnovat do DPH (individuální metoda zaokrouhlení) (db: ZaokrNulovaSazba) - Položky automatického zaokrouhlení dokladu nezahrnovat do DPH (individuální metoda zaokrouhlení))
    zaokrNulovaSazba?: boolean

    // Přev.činn.NACE (db: Nace) - Převažující činnost (kód NACE))
    nace?: string

    // Zvláštní režim DPH (db: OsobUpravaDph) - Zvláštní režim DPH)
    osobUpravaDph?: boolean

    // Datum pro plnění data Uplatnit zdaň. pl. (db: FapDatProDuzpUctoK) - Datum pro plnění data Uplatnit zdaň. pl.)
    fapDatProDuzpUctoK?: any

    // Automaticky odesílat doklady mailem (db: AutoSendMailModK) - Automaticky odesílat doklady mailem)
    autoSendMailModK?: any

    // Adresa skryté kopie (db: AutoSendMailBccEmail) - Adresa skryté kopie)
    autoSendMailBccEmail?: string

    // Způsob zobrazení (db: ZobrazWebModK) - Způsob zobrazení)
    zobrazWebModK?: any

    // Chránit výplatní pásky heslem (db: SifrovaniPdf) - Chránit výplatní pásky heslem)
    sifrovaniPdf?: boolean

    // Verze pro cachování (db: VersionForCaching) - Verze)
    versionForCaching?: number

    // Zpracování GDPR (db: ZpracovaniGdpr) - Zpracování GDPR)
    zpracovaniGdpr?: boolean

    // Zobrazovat obrázkové přílohy ceníku (db: PolozkyCenikObrazky) - Zobrazovat obrázkové přílohy ceníku v editaci položek dokladů a na ceníku)
    polozkyCenikObrazky?: boolean

    // Začátek užití novely ZDPH 2019 (db: DatZacNovelyZdph19) - Začátek užití novely ZDPH 2019)
    datZacNovelyZdph19?: Date

    // Stát legislativy (db: IdStatuLeg) - Stát legislativy)
    statLegislativa?: AFStat

    // Typ organizace (db: IdTypOrg) - Typ organizace)
    typOrganizace?: AFTypOrganizace

    // Domácí měna (db: IdMeny) - Domácí měna)
    mena?: AFMena

    // Typ dokladu vydaných faktur pro obchod (db: IdTdObFav) - Vydané faktury)
    tdObchodFav?: AFTypFakturyVydane

    // Typ dokladu vydaných záloh pro obchod (db: IdTdObFavZal) - Vydané zálohy)
    tdObchodFavZal?: AFTypFakturyVydane

    // Typ dokladu přijatých faktur pro obchod (db: IdTdObFap) - Přijaté faktury)
    tdObchodFap?: AFTypFakturyPrijate

    // Typ dokladu příjemek na sklad pro obchod (db: IdTdObSklPri) - Přijemky na sklad)
    tdObchodSklPri?: AFTypSkladovyPohyb

    // Typ dokladu výdejky ze skladu pro obchod (db: IdTdObSklVyd) - Výdejky ze skladu)
    tdObchodSklVyd?: AFTypSkladovyPohyb

    // Typ dokladu nabídek vydaných pro obchod (db: IdTdObNav) - Nabídky vydané)
    tdObchodNav?: AFTypNabidkyVydane

    // Typ dokladu objednávek přijatých pro obchod (db: IdTdObObp) - Objednávky přijaté)
    tdObchodObp?: AFTypObjednavkyPrijate

    // Typ dokladu objednávek přijatých z EDI pro obchod (db: IdTdObObpEdi) - Objednávka přijatá z EDI)
    tdObchodObpEdi?: AFTypObjednavkyPrijate

    // Typ dokladu poptávek vydaných pro obchod (db: IdTdObPpv) - Poptávky vydané)
    tdObchodPpv?: AFTypPoptavkyVydane

    // Typ dokladu nabídek přijatých pro obchod (db: IdTdObNap) - Nabídky přijaté)
    tdObchodNap?: AFTypNabidkyPrijate

    // Typ dokladu objednávek vydaných pro obchod (db: IdTdObObv) - Objednávky vydané)
    tdObchodObv?: AFTypObjednavkyVydane

    // Typ dokladu faktur vydaných pro ZDD (db: IdTdFavZdd) - Vydaný)
    tdFavZalohovyDanDokl?: AFTypFakturyVydane

    // Typ dokladu faktur přijatých pro ZDD (db: IdTdFapZdd) - Přijatý)
    tdFapZalohovyDanDokl?: AFTypFakturyPrijate

    // Typ dokladu přijaté faktury z EDI (db: IdTdFapEdi) - Přijaté faktury z EDI)
    tdFapEdi?: AFTypFakturyPrijate

    // Typ dokladu příjemky z EDI (db: IdTdSklEdi) - Typ příjemky z EDI)
    tdSklEdi?: AFTypSkladovyPohyb

    // Typ dokladu kurzových rozdílů - náklad (db: IdTdKurzRozNaklad) - Náklad)
    tdKurzovyRozdilNaklad?: AFTypInternihoDokladu

    // Typ dokladu kurzových rozdílů - výnos (db: IdTdKurzRozVynos) - Výnos)
    tdKurzovyRozdilVynos?: AFTypInternihoDokladu

    // Typ dokladu zbytek náklad (db: IdTdZbytekNaklad) - Náklad)
    tdZbytekNaklad?: AFTypInternihoDokladu

    // Typ dokladu zbytek výnos (db: IdTdZbytekVynos) - Výnos)
    tdZbytekVynos?: AFTypInternihoDokladu

    // Typ dokladu pro přeplatky pohledávek (db: IdTdPreplPhl) - Výnos)
    tdPreplatekPhl?: AFTypPohledavky

    // Typ dokladu pro přeplatky závazků (db: IdTdPreplZav) - Náklad)
    tdPreplatekZav?: AFTypZavazku

    // Typ dokladu pro pokladní doklady (db: IdTdEpPok) - ... pokladních dokladů)
    tdEpGeneracePokladnichDokl?: AFTypPokladniPohyb

    // Typ dokladu pro výdej ze skladu (db: IdTdEpSkl) - ... výdej ze skladu)
    tdEpGeneraceVydejekZeSkladu?: AFTypPokladniPohyb

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Stát (db: IdFaStatu) - Stát)
    statFakturacniAdresy?: AFStat

    // Stát (db: IdPostStatu) - Stát)
    statPostovniAdresy?: AFStat

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // Kraj (db: IdFaRegion) - Kraj)
    regionFakturacniAdresy?: AFRegion

    // Kraj (db: IdPostRegion) - Kraj)
    regionPostovniAdresy?: AFRegion

    // Duální měna (db: IdMenyDual) - Duální měna)
    menaDual?: AFMena

    // Náklad (db: IdUcetZaokrNaklad) - Náklad)
    ucetZaokrNaklad?: AFUcet

    // Výnos (db: IdUcetZaokrVynos) - Výnos)
    ucetZaokrVynos?: AFUcet

    // Náklad (db: IdUcetKrOdpoctuNaklad) - Náklad)
    ucetKrOdpoctuNaklad?: AFUcet

    // Výnos (db: IdUcetKrOdpoctuVynos) - Výnos)
    ucetKrOdpoctuVynos?: AFUcet

    // Krajský finanční úřad (db: IdFuKraj) - Krajský finanční úřad)
    fuKraj?: AFAdresar

    // Územní pracoviště (db: IdFuUzemPrac) - Územní pracoviště)
    fuUzemPrac?: AFAdresar

    // Typ dokladu pro bankovní příjem (db: IdTdBanPrijem) - Bankovní příjem)
    tdBanPrijem?: AFTypBanka

    // Typ dokladu pro bankovní výdej (db: IdTdBanVydej) - Bankovní výdej)
    tdBanVydej?: AFTypBanka

    // Adresa a bankovní spojení (db: IdMzdAdrSocPoj) - Adresa a bankovní spojení)
    mzdAdrSocPoj?: AFAdresar

    // Adresa (db: IdMzdAdrDan) - Adresa)
    mzdAdrDan?: AFAdresar

    // Bankovní spojení (db: IdMzdBanDanZal) - Bankovní spojení)
    mzdBanDanZal?: AFAdresarBankovniUcet

    // Bankovní spojení (db: IdMzdBanDanSra) - Bankovní spojení)
    mzdBanDanSra?: AFAdresarBankovniUcet

    // Bankovní spojení (db: IdMzdBanDanRez) - Bankovní spojení)
    mzdBanDanRez?: AFAdresarBankovniUcet

    // Typ dokladu závazku sociálního pojištění pro mzdy (db: IdMzdTdZavSoc) - Typ závazku)
    mzdTdZavSoc?: AFTypZavazku

    // Předpis zaúčtování - zaměstnanec (db: IdMzdTuoZavSocZam) - Předpis zaúčtování - zaměstnanec)
    mzdTuoZavSocZam?: AFPredpisZauctovani

    // Předpis zaúčtování - zaměstnavatel (db: IdMzdTuoZavSocFir) - Předpis zaúčtování - zaměstnavatel)
    mzdTuoZavSocFir?: AFPredpisZauctovani

    // Typ dokladu závazku zdravotního pojištění pro mzdy (db: IdMzdTdZavZdrav) - Typ závazku)
    mzdTdZavZdrav?: AFTypZavazku

    // Předpis zaúčtování - zaměstnanec (db: IdMzdTuoZavZdrZam) - Předpis zaúčtování - zaměstnanec)
    mzdTuoZavZdrZam?: AFPredpisZauctovani

    // Předpis zaúčtování - zaměstnavatel (db: IdMzdTuoZavZdrFir) - Předpis zaúčtování - zaměstnavatel)
    mzdTuoZavZdrFir?: AFPredpisZauctovani

    // Typ dokladu závazku daňové zálohy pro mzdy (db: IdMzdTdZavDanZal) - Typ závazku)
    mzdTdZavDanZal?: AFTypZavazku

    // Typ dokladu závazku daňové srážky pro mzdy (db: IdMzdTdZavDanSra) - Typ závazku)
    mzdTdZavDanSra?: AFTypZavazku

    // Typ dokladu závazku daňové rezervy pro mzdy (db: IdMzdTdZavDanRez) - Typ závazku)
    mzdTdZavDanRez?: AFTypZavazku

    // Typ dokladu závazku záloh pro mzdy (db: IdMzdTdZavZaloha) - Typ závazku záloh)
    mzdTdZavZaloha?: AFTypZavazku

    // Typ dokladu závazku srážek pro mzdy (db: IdMzdTdZavSrazka) - Typ závazku srážek)
    mzdTdZavSrazka?: AFTypZavazku

    // Typ dokladu závazku dobírky pro mzdy (db: IdMzdTdZavDobirka) - Typ závazku dobírek)
    mzdTdZavDobirka?: AFTypZavazku

    // Typ interního dokladu hrubé mzdy (db: IdMzdTdIntHruba) - Typ int.dokl. hrubé mzdy)
    mzdTdIntHruba?: AFTypInternihoDokladu

    // Typ interního dokladu náhrady mzdy (db: IdMzdTdIntNahrad) - Typ int.dokl. náhrady mzdy)
    mzdTdIntNahrad?: AFTypInternihoDokladu

    // Typ interního dokladu cestovné do limitu pro mzdy (db: IdMzdTdIntCestDoLim) - do limitu)
    mzdTdIntCestDoLim?: AFTypInternihoDokladu

    // Typ interního dokladu cestovné nad limit pro mzdy (db: IdMzdTdIntCestNadLim) - nad limit)
    mzdTdIntCestNadLim?: AFTypDokladu

    // Typ interního dokladu stravenkového paušálu do limitu pro mzdy (db: IdMzdTdIntStravPausDoLim) - do limitu)
    mzdTdIntStravPausDoLim?: AFTypInternihoDokladu

    // Typ interního dokladu stravenkového paušálu nad limit pro mzdy (db: IdMzdTdIntStravPausNadLim) - nad limit)
    mzdTdIntStravPausNadLim?: AFTypDokladu

    // Typ interního dokladu homeoffice do limitu pro mzdy (db: IdMzdTdIntHomeofficeDoLim) - do limitu)
    mzdTdIntHomeofficeDoLim?: AFTypDokladu

    // Typ interního dokladu homeoffice nad limitu pro mzdy (db: IdMzdTdIntHomeofficeNadLim) - nad limit)
    mzdTdIntHomeofficeNadLim?: AFTypDokladu

    // Typ dokl. srážky stravenek (db: IdMzdTdSrazkaStrav) - Typ dokl. srážky stravenek)
    mzdTdSrazkaStrav?: AFTypDokladu

    // Typ dokl. stravenky (db: IdMzdTdStravenka) - Typ dokl. stravenky)
    mzdTdStravenka?: AFTypDokladu

    // Předpis příspěvek zaměstnance (db: IdMzdTuoStravZam) - Předpis příspěvek zaměstnance)
    mzdTuoStravZam?: AFPredpisZauctovani

    // Předpis příspěvek firmy do limitu (db: IdMzdTuoStravFirDoLim) - Předpis příspěvek firmy do limitu)
    mzdTuoStravFirDoLim?: AFPredpisZauctovani

    // Předpis příspěvek firmy nad limit (db: IdMzdTuoStravFirNadLim) - Předpis příspěvek firmy nad limit)
    mzdTuoStravFirNadLim?: AFPredpisZauctovani

    // Typ int. dokl. příspěvků (db: IdMzdTdIntPrispevky) - Typ int. dokl. příspěvků)
    mzdTdIntPrispevky?: AFTypDokladu

    // Typ závazku příspěvků (db: IdMzdTdZavPrispevky) - Typ závazku příspěvků)
    mzdTdZavPrispevky?: AFTypDokladu


}