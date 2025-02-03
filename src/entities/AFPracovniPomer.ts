import { AFEntity } from '../AFEntity'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFTypPracovnihoPomeru } from './AFTypPracovnihoPomeru'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFTypDokladu } from './AFTypDokladu'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFPracovniPomerPracRozvrhK {
  pravidelny = 'pracRozvrh.pravidelny', //Pravidelný
  nepravidelny = 'pracRozvrh.nepravidelny', //Nepravidelný
}

export enum AFPracovniPomerPlneniOdprDobyK {
  rucne = 'plneniOdprDoby.rucne', //Ručně
  automaticky = 'plneniOdprDoby.automaticky', //Automaticky
}

export enum AFPracovniPomerTypMzdyK {
  mesicni = 'typMzdy.mesicni', //Měsícní
  hodinova = 'typMzdy.hodinova', //Hodinová
  podilova = 'typMzdy.podilova', //Podílová
  ukolova = 'typMzdy.ukolova', //Úkolová
  smisena = 'typMzdy.smisena', //Smíšená
  jina = 'typMzdy.jina', //Jiná
}

export enum AFPracovniPomerDuvodSlevaSPFirmaK {
  a = 'duvodSlevaSpFirma.a', //a) osoba starší 55 let
  b = 'duvodSlevaSpFirma.b', //b) péče o dítě mladší 10 let, jehož je rodičem
  c = 'duvodSlevaSpFirma.c', //c) péče o osobu blízkou mladší 10 let
  d = 'duvodSlevaSpFirma.d', //d) příprava na budoucí povolání studiem
  e = 'duvodSlevaSpFirma.e', //e) nejdéle před 12 měsíci absolvoval rekvalifikaci
  f = 'duvodSlevaSpFirma.f', //f) osoba se zdravotním postižením
  g = 'duvodSlevaSpFirma.g', //g) osoba mladší 21 let
}

export enum AFPracovniPomerTydenPracDobaK {
  standard = 'tydenPracDoba.standard', //Jednosměnný provoz (40 hodin)
  dul = 'tydenPracDoba.dul', //Pracující v podzemí (37,5 hodin)
  trismenny = 'tydenPracDoba.trismenny', //Třísměnný provoz (37,5 hodin)
  dvousmenny = 'tydenPracDoba.dvousmenny', //Dvousměnný provoz (38,75 hodin)
}

export enum AFPracovniPomerDuvodUkonceniCsszK {
  01 = 'csszDuvodUkonceni.01', //1 - Ukončení PP cizince či osoby bez státní příslušnosti (§ 48/3)
  02 = 'csszDuvodUkonceni.02', //2 - Dohodou se zaměstnavatelem (§ 49)
  03 = 'csszDuvodUkonceni.03', //3 - Výpověď ze strany zaměstnance (§ 50/3)
  04 = 'csszDuvodUkonceni.04', //4 - Organizační důvod (§ 52/a-c)
  05 = 'csszDuvodUkonceni.05', //5 - Zdravotní důvody (§ 52/e, § 56/1a)
  05d = 'csszDuvodUkonceni.05d', //5 - Zdravotní důvody (§ 52/d)
  06 = 'csszDuvodUkonceni.06', //6 - Zaměstnanec nesplňuje předpoklady nebo požadavky pro výkon sjednané práce (§ 52/f)
  07 = 'csszDuvodUkonceni.07', //7 - Porušení povinností zaměstnancem zvlášť hrubým způsobem (§ 52/g první část věty nebo § 55/1b)
  08 = 'csszDuvodUkonceni.08', //8 - Soustavné méně závažné porušení povinností zaměstnancem (§ 52/g druhá část věty )
  09 = 'csszDuvodUkonceni.09', //9 - Porušení režimu dočasně práce neschopného zvlášť hrubým způsobem (§ 52/h)
  10 = 'csszDuvodUkonceni.10', //10 - Okamžité zrušení pracovního poměru z důvodu pravomocného odsouzení pro úmyslný trestný čin  (§ 55/1a)
  11 = 'csszDuvodUkonceni.11', //11 - Porušení podstatné povinností zaměstnavatelem (§ 56/1b)
  12 = 'csszDuvodUkonceni.12', //12 - Doba určitá (§ 65)
  13 = 'csszDuvodUkonceni.13', //13 - Ve zkušební době zaměstnavatelem (§ 66)
  14 = 'csszDuvodUkonceni.14', //14 - Ve zkušební době zaměstnancem (§ 66)
  15 = 'csszDuvodUkonceni.15', //15 - Ostatní
}

export enum AFPracovniPomerDuvodNeposkytnutiCsszK {
  01 = 'csszDuvodNeposkytnuti.01', //1 - úmrtí pojištěnce
  02 = 'csszDuvodNeposkytnuti.02', //2 - starobní důchod, zaměstnání bez účasti na pojištění nebo zaměstnání s druhem činnosti dohoda o provedení práce
  03 = 'csszDuvodNeposkytnuti.03', //3 - vybraná zaměstnání
}


export class AFPracovniPomer extends AFEntity {

    // ID (db: IdPracPom) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: Date

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: Date

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Aktivní od (db: AktivniOd) - Aktivní od)
    aktivniOd?: Date

    // Aktivní do (db: AktivniDo) - Aktivní do)
    aktivniDo?: Date

    // Hlavní (db: Hlavni) - Hlavní)
    hlavni?: boolean

    // Pracovní rozvrh (db: PracRozvrhK) - Pracovní rozvrh)
    pracRozvrhK?: any

    // Plnění odpracované doby (db: PlneniOdprDobyK) - Plnění odpracované doby)
    plneniOdprDobyK?: any

    // Typ mzdy (db: TypMzdyK) - Typ mzdy)
    typMzdyK?: any

    // Měsíční mzda (db: MesicniMzda) - Měsíční mzda)
    mesicniMzda?: Big

    // Hodinová mzda (db: HodinovaMzda) - Hodinová mzda)
    hodinovaMzda?: Big

    // Začátek poměru (db: Zacatek) - Začátek poměru)
    zacatek?: Date

    // Skutečný nástup (db: SkutecnyNastup) - Skutečný nástup)
    skutecnyNastup?: Date

    // Nástupu do práce (db: Nastup) - Nástupu do práce)
    nastup?: Date

    // Tarifní třída (db: TarifTrida) - Tarifní třída)
    tarifTrida?: string

    // Úvazek hodin [Týdně] (db: UvazHodTydne) - Úvazek hodin [Týdně])
    uvazHodTydne?: Big

    // Úvazek hodin [Denně] (db: UvazHodDenne) - Úvazek hodin [Denně])
    uvazHodDenne?: Big

    // Úvazek dnů [Týdně] (db: UvazDnuTydne) - Úvazek dnů [Týdně])
    uvazDnuTydne?: number

    // Začátek pracovní doby (db: ZacPracDoby) - Začátek pracovní doby)
    zacPracDoby?: Big

    // Výpočet náhrady za svátky z průměru (db: SvatkyPrumer) - Výpočet náhrady za svátky z průměru)
    svatkyPrumer?: boolean

    // Procento z minimální mzdy (db: ProcMinMzd) - Procento z minimální mzdy)
    procMinMzd?: number

    // Pracovněprávní průměr [Kč/hod] (db: PredHrubPrijem) - Pracovněprávní průměr [Kč/hod])
    predHrubPrijem?: Big

    // Zaměstnání malého rozsahu (db: MalyRozsah) - Zaměstnání malého rozsahu)
    malyRozsah?: boolean

    // Prominutí SP za firmu (db: ProminutiSPFirma) - Prominutí SP za firmu)
    prominutiSPFirma?: boolean

    // Sleva SP za firmu (db: SlevaSPFirma) - Sleva SP za firmu)
    slevaSPFirma?: boolean

    // Důvod slevy SP za firmu (db: DuvodSlevaSPFirmaK) - Důvod slevy SP za firmu)
    duvodSlevaSPFirmaK?: any

    // OZUSPOJ sleva od (db: SlevaSpFirmaOd) - OZUSPOJ sleva od)
    slevaSpFirmaOd?: Date

    // OZUSPOJ sleva do (db: SlevaSpFirmaDo) - OZUSPOJ sleva do)
    slevaSpFirmaDo?: Date

    // Konec poměru (db: KonecPomeru) - Konec poměru)
    konecPomeru?: Date

    // Konec zkušební doby (db: KonecZkusDoby) - Konec zkušební doby)
    konecZkusDoby?: Date

    // Konec určité doby (db: KonecUrciteDoby) - Konec určité doby)
    konecUrciteDoby?: Date

    // Sdělení organizace (db: ZlistSdeleni) - Sdělení organizace)
    zlistSdeleni?: string

    // Způsob ukončení (db: ZlistUkonceni) - Způsob ukončení)
    zlistUkonceni?: string

    // Důvod ukončení (db: ZlistDuvod) - Důvod ukončení)
    zlistDuvod?: string

    // Kód ELDP (db: KodELDP) - Kód ELDP)
    kodELDP?: string

    // Kód PP pro ČSSZ (db: KodCsszPP) - Kód PP pro ČSSZ)
    kodCsszPP?: string

    // Dní dovolené ročně (db: DovoleneRocne) - Dní dovolené ročně)
    dovoleneRocne?: Big

    // Hodin dovolené ročně (db: DovoleneRocneHod) - Hodin dovolené ročně)
    dovoleneRocneHod?: Big

    // Tydenní pracovní doba (db: TydenPracDobaK) - Tydenní pracovní doba)
    tydenPracDobaK?: any

    // Pondělí (db: UvazPo) - Pondělí)
    uvazPo?: boolean

    // Úterý (db: UvazUt) - Úterý)
    uvazUt?: boolean

    // Středa (db: UvazSt) - Středa)
    uvazSt?: boolean

    // Čtvrtek (db: UvazCt) - Čtvrtek)
    uvazCt?: boolean

    // Pátek (db: UvazPa) - Pátek)
    uvazPa?: boolean

    // Sobota (db: UvazSo) - Sobota)
    uvazSo?: boolean

    // Neděle (db: UvazNe) - Neděle)
    uvazNe?: boolean

    // Nárok na odstupné (db: NarokOdstupne) - Nárok na odstupné)
    narokOdstupne?: boolean

    // Odstupné vyplaceno v plné výši (db: OdstupnePlnaVyse) - Odstupné vyplaceno v plné výši)
    odstupnePlnaVyse?: boolean

    // Odstupné - násobek (db: OdstupneNasobek) - Odstupné - násobek)
    odstupneNasobek?: number

    // Důvod ukončení prac. poměru (db: DuvodUkonceniCsszK) - Důvod ukončení prac. poměru)
    duvodUkonceniCsszK?: any

    // Důvod neposkytnutí podkladů (db: DuvodNeposkytnutiCsszK) - Důvod neposkytnutí podkladů)
    duvodNeposkytnutiCsszK?: any

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Hlavička pracovního poměru (db: IdPracPomHlav) - Hlavička pracovního poměru)
    pracPomHlav?: AFPracovniPomerHlavicka

    // Osoba (db: IdOsoba) - Osoba)
    osoba?: AFOsobaHlavicka

    // Typ pracovního poměru (db: IdTypPracPom) - Typ pracovního poměru)
    typPracPom?: AFTypPracovnihoPomeru

    // Typ interního dokladu pro hrubou mzdy (db: IdTdIntHruba) - Typ interního dokladu pro hrubou mzdy)
    tdIntHruba?: AFTypInternihoDokladu

    // Typ interního dokladu náhrady mzdy za prac.neschopnost (db: IdTdIntNahrad) - Typ interního dokladu náhrady mzdy za prac.neschopnost)
    tdIntNahrad?: AFTypInternihoDokladu

    // Typ interního dokladu pro cestovné do limitu (db: IdTdIntCestDoLim) - do limitu)
    tdIntCestDoLim?: AFTypInternihoDokladu

    // Typ interního dokladu pro cestovné nad limit (db: IdTdIntCestNadLim) - nad limit)
    tdIntCestNadLim?: AFTypDokladu

    // Typ interního dokladu pro strav. paušál do limitu (db: IdTdIntStravPausDoLim) - do limitu)
    tdIntStravPausDoLim?: AFTypInternihoDokladu

    // Typ interního dokladu pro strav. paušál nad limit (db: IdTdIntStravPausNadLim) - nad limit)
    tdIntStravPausNadLim?: AFTypDokladu

    // Typ interního dokladu pro homeoffice do limitu (db: IdTdIntHomeofficeDoLim) - do limitu)
    tdIntHomeofficeDoLim?: AFTypDokladu

    // Typ interního dokladu pro homeoffice nad limit (db: IdTdIntHomeofficeNadLim) - nad limit)
    tdIntHomeofficeNadLim?: AFTypDokladu

    // Předpis zaúčtování soc. zaměstnanec (db: IdTuoZavSocZam) - Sociální pojištění zaměstnanec)
    tuoZavSocZam?: AFPredpisZauctovani

    // Předpis zaúčtování soc. firma (db: IdTuoZavSocFir) - Sociální pojištění zaměstnavatel)
    tuoZavSocFir?: AFPredpisZauctovani

    // Předpis zaúčtování zdr. zaměstnanec (db: IdTuoZavZdrZam) - Zdravotní pojištění zaměstnanec)
    tuoZavZdrZam?: AFPredpisZauctovani

    // Předpis zaúčtování zdr. firma (db: IdTuoZavZdrFir) - Zdravotní pojištění zaměstnavatel)
    tuoZavZdrFir?: AFPredpisZauctovani

    // Předpis zaúčtování daň (db: IdTuoZavDan) - Předpis zaúčtování daň)
    tuoZavDan?: AFPredpisZauctovani

    // Typ dokladu pro srážku stravenek (db: IdTdSrazkaStrav) - Typ dokladu pro srážku stravenek)
    tdSrazkaStrav?: AFTypDokladu


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}