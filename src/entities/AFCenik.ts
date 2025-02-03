import { AFEntity } from '../AFEntity'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFStat } from './AFStat'
import { AFIntrastatKodNomenklatury } from './AFIntrastatKodNomenklatury'
import { AFAdresar } from './AFAdresar'
import { AFPreneseniDph } from './AFPreneseniDph'
import { AFOdberatel } from './AFOdberatel'
import { AFCenikObal } from './AFCenikObal'
import { AFAtribut } from './AFAtribut'
import { AFSkladovaKarta } from './AFSkladovaKarta'
import { AFSadyAKomplety } from './AFSadyAKomplety'
import { AFPrislustenstvi } from './AFPrislustenstvi'
import { AFPriloha } from './AFPriloha'
import { AFPoplatek } from './AFPoplatek'
import { AFDodavatel } from './AFDodavatel'
import { AFVyrobniCislo } from './AFVyrobniCislo'
import { AFStavCeniku } from './AFStavCeniku'
import { AFUdalost } from './AFUdalost'
import { AFPodobneZbozi } from './AFPodobneZbozi'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFCenikTypSazbyDph } from './AFCenikTypSazbyDph'
import { AFRezervace } from './AFRezervace'

export enum AFCenikTypCenyDphK {
  bezDph = 'typCeny.bezDph', //bez DPH
  sDph = 'typCeny.sDph', //včetně DPH
}

export enum AFCenikZaokrJakK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFCenikZaokrNaK {
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

export enum AFCenikTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}

export enum AFCenikTypCenyVychoziK {
  nakCena = 'typCenyVychozi.nakCena', //nákupní cena
  zadna = 'typCenyVychozi.zadna', //žádná cena
}

export enum AFCenikTypVypCenyK {
  marze = 'typVypCeny.marze', //marže
  rabat = 'typVypCeny.rabat', //rabat
}

export enum AFCenikTypCenyVychozi25K {
  nakCena = 'typCenyVychozi.nakCena', //nákupní cena
  zaklCena = 'typCenyVychozi.zaklCena', //prodejní cena
}

export enum AFCenikTypVypCeny25K {
  marze = 'typVypCeny.marze', //marže
  rabat = 'typVypCeny.rabat', //rabat
  sleva = 'typVypCeny.sleva', //sleva
  neuveden = 'typVypCeny.neuveden', //neuveden
}

export enum AFCenikMjZarukyK {
  rok = 'mjZaruky.rok', //rok
  mesic = 'mjZaruky.mesic', //měsíc
  den = 'mjZaruky.den', //den
}

export enum AFCenikTypZasobyK {
  zbozi = 'typZasoby.zbozi', //Zboží
  material = 'typZasoby.material', //Materiál
  nedvyroba = 'typZasoby.nedvyroba', //Nedokončená výroba
  polotovar = 'typZasoby.polotovar', //Polotovar
  vyrobek = 'typZasoby.vyrobek', //Výrobek
  zvire = 'typZasoby.zvire', //Zvíře
  sluzba = 'typZasoby.sluzba', //Služba
  poplatek = 'typZasoby.poplatek', //Poplatek
}


export class AFCenik extends AFEntity {

    // ID (db: IdCenik) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Kód/zkratka (db: Kod) - Kód/zkratka)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // EAN (db: EanKod) - EAN)
    eanKod?: string

    // Kód PLU (db: KodPlu) - Kód PLU)
    kodPlu?: string

    // Typ ceny (db: TypCenyDphK) - Typ ceny)
    typCenyDphK?: any

    // %Zakl (db: ProcZakl) - %Zakl)
    procZakl?: Big

    // Individuální cenotvorba (db: IndividCena) - Individuální cenotvorba)
    individCena?: boolean

    // Limit MJ 2 (db: LimMnoz2) - Množ. limit 2)
    limMnoz2?: Big

    // Limit MJ 3 (db: LimMnoz3) - Množ. limit 3)
    limMnoz3?: Big

    // Limit MJ 4 (db: LimMnoz4) - Množ. limit 4)
    limMnoz4?: Big

    // Limit MJ 5 (db: LimMnoz5) - Množ. limit 5)
    limMnoz5?: Big

    // %2 (db: Procento2) - % 2)
    procento2?: Big

    // %3 (db: Procento3) - %3)
    procento3?: Big

    // %4 (db: Procento4) - %4)
    procento4?: Big

    // %5 (db: Procento5) - %5)
    procento5?: Big

    // Cena 2 (db: Cena2) - Množstevní)
    cena2?: Big

    // Cena 3 (db: Cena3) - Cena 3)
    cena3?: Big

    // Cena 4 (db: Cena4) - Cena 4)
    cena4?: Big

    // Cena 5 (db: Cena5) - Cena 5)
    cena5?: Big

    // Způsob zaokr. (db: ZaokrJakK) - Způsob zaokr.)
    zaokrJakK?: any

    // Řád zaokrouhlení (db: ZaokrNaK) - Řád zaokrouhlení)
    zaokrNaK?: any

    // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
    typSzbDphK?: any

    // Počet desetin MJ (db: DesetinMj) - Počet desetin MJ)
    desetinMj?: number

    // Nákupní cena (db: NakupCena) - Nákupní cena)
    nakupCena?: Big

    // Počet MJ v ceně (db: CenJednotka) - Počet MJ v ceně)
    cenJednotka?: Big

    // Výchozí cena (db: TypCenyVychoziK) - Výchozí cena)
    typCenyVychoziK?: any

    // Způsob výpočtu (db: TypVypCenyK) - Způsob výpočtu)
    typVypCenyK?: any

    // Výchozí cena pro množ. slevy (db: TypCenyVychozi25K) - Výchozí cena)
    typCenyVychozi25K?: any

    // Způsob výpočtu pro množ. slevy (db: TypVypCeny25K) - Způsob výpočtu)
    typVypCeny25K?: any

    // Evid. výr. čís. (db: EvidVyrCis) - Evidovat výrobní čísla)
    evidVyrCis?: boolean

    // Unik. výr. čís. (db: UnikVyrCis) - Výr. čís. musí být unikátní)
    unikVyrCis?: boolean

    // Záruka (db: Zaruka) - Záruka)
    zaruka?: number

    // MJ záruky (db: MjZarukyK) - MJ záruky)
    mjZarukyK?: any

    // MJ2 / MJ1 (db: MjKoef2) - MJ2 / MJ1)
    mjKoef2?: Big

    // MJ3 / MJ1 (db: MjKoef3) - MJ3 / MJ1)
    mjKoef3?: Big

    // Prodávat násobky MJ (db: ProdejMj) - Prodávat násobky MJ)
    prodejMj?: Big

    // Hmotnost (netto) (db: HmotMj) - Hmotnost (netto))
    hmotMj?: Big

    // Hmotnost obalu (db: HmotObal) - Hmotnost obalu)
    hmotObal?: Big

    // Objem (db: Objem) - Objem)
    objem?: Big

    // Zatřídění (db: Zatrid) - Zatřídění)
    zatrid?: string

    // Skladové (db: Skladove) - Skladové zboží)
    skladove?: boolean

    // Typ zásoby (db: TypZasobyK) - Typ zásoby)
    typZasobyK?: any

    // Balení 1 - Kód nebo název (db: BaleniNazev1) - Kód nebo název)
    baleniNazev1?: string

    // Balení 2 - Kód nebo název (db: BaleniNazev2) - Kód nebo název)
    baleniNazev2?: string

    // Balení 3 - Kód nebo název (db: BaleniNazev3) - Kód nebo název)
    baleniNazev3?: string

    // Balení 4 - Kód nebo název (db: BaleniNazev4) - Kód nebo název)
    baleniNazev4?: string

    // Balení 5 - Kód nebo název (db: BaleniNazev5) - Kód nebo název)
    baleniNazev5?: string

    // Balení 1 - Počet MJ (db: BaleniMj1) - Počet MJ)
    baleniMj1?: Big

    // Balení 2 - Počet MJ (db: BaleniMj2) - Počet MJ)
    baleniMj2?: Big

    // Balení 3 - Počet MJ (db: BaleniMj3) - Počet MJ)
    baleniMj3?: Big

    // Balení 4 - Počet MJ (db: BaleniMj4) - Počet MJ)
    baleniMj4?: Big

    // Balení 5 - Počet MJ (db: BaleniMj5) - Počet MJ)
    baleniMj5?: Big

    // Balení 1 - EAN (db: BaleniEan1) - EAN)
    baleniEan1?: string

    // Balení 2 - EAN (db: BaleniEan2) - EAN)
    baleniEan2?: string

    // Balení 3 - EAN (db: BaleniEan3) - EAN)
    baleniEan3?: string

    // Balení 4 - EAN (db: BaleniEan4) - EAN)
    baleniEan4?: string

    // Balení 5 - EAN (db: BaleniEan5) - EAN)
    baleniEan5?: string

    // Evidovat Intrastat (db: InEvid) - Evidovat Intrastat)
    inEvid?: boolean

    // Koeficient pro MJ (db: InKoefMj) - Koeficient pro MJ)
    inKoefMj?: Big

    // Koeficient pro statistickou hodnotu (db: InKoefStat) - Koeficient pro statistickou hodnotu)
    inKoefStat?: Big

    // Kód sledovanosti druhu zboží (db: InKodSled) - Kód sledovanosti druhu zboží)
    inKodSled?: string

    // Popis EN (db: PopisA) - Popis EN)
    popisA?: string

    // Popis DE (db: PopisB) - Popis DE)
    popisB?: string

    // Popis FR (db: PopisC) - Popis FR)
    popisC?: string

    // Běžná cena (db: CenaBezna) - Běžná cena)
    cenaBezna?: Big

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Stavy (db: undefined) - Stavy)
    stavy?: string

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Export na E-shop (db: ExportNaEshop) - Exportovat na internetový obchod)
    exportNaEshop?: boolean

    // Individuální minimální marže (db: MinMarzeCenik) - Individuální minimální marže)
    minMarzeCenik?: boolean

    // Minimální marže (db: MinMarze) - Minimální marže)
    minMarze?: Big

    // Evid. šar. (db: EvidSarze) - Evidovat šarže)
    evidSarze?: boolean

    // Evid. exp. (db: EvidExpir) - Evidovat expirace)
    evidExpir?: boolean

    // Sada (db: Sada) - Sada)
    sada?: boolean

    // Trvanlivost je X dní po expiraci (db: DnyTrvanPoExpir) - Trvanlivost je X dní po expiraci)
    dnyTrvanPoExpir?: number

    // Neseskupovat na OBV (db: NeseskupovatObj) - Neseskupovat položky při vytváření objednávky vydané)
    neseskupovatObj?: boolean

    // Krátký popis (db: KratkyPopis) - Krátký popis)
    kratkyPopis?: string

    // Klíčová slova (db: KlicSlova) - Klíčová slova)
    klicSlova?: string

    // Technické parametry (db: TechParam) - Technické parametry)
    techParam?: string

    // Dodací lhůta (db: DodaciLhuta) - Dodací lhůta)
    dodaciLhuta?: Big

    // Umožnit prodej na kase (db: ProdejKasa) - Umožnit prodej na kase)
    prodejKasa?: boolean

    // Skupina zboží (db: IdSkupZboz) - Skupina zboží)
    skupZboz?: AFSkupinaZbozi

    // MJ (db: IdMj1) - Měrná jednotka)
    mj1?: AFMernaJednotka

    // MJ č. 2 (db: IdMj2) - MJ č. 2)
    mj2?: AFMernaJednotka

    // MJ č. 3 (db: IdMj3) - MJ č. 3)
    mj3?: AFMernaJednotka

    // MJ hmotnosti (db: IdMjHmot) - MJ hmotnosti)
    mjHmot?: AFMernaJednotka

    // MJ objemu (db: IdMjObj) - MJ objemu)
    mjObj?: AFMernaJednotka

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Nomenklatura (db: IdNomen) - Nomenklatura)
    nomen?: AFIntrastatKodNomenklatury

    // Dodavatel (db: IdDodavatel) - Dodavatel)
    dodavatel?: AFAdresar

    // Výrobce (db: IdVyrobce) - Výrobce)
    vyrobce?: AFAdresar

    // Kód přenesení DPH (db: IdDphPren) - Kód přenesení DPH)
    dphPren?: AFPreneseniDph

    // MJ Dodací lhůty (db: IdMjDodaciLhuta) - MJ Dodací lhůty)
    mjDodaciLhuta?: AFMernaJednotka

    // Stav skladu (db: undefined) - Stav skladu)
    sumStavMj?: Big

    // Rezervováno (db: undefined) - Rezervováno)
    sumRezerMj?: Big

    // Požadavky (db: undefined) - Požadavky)
    sumPozadavkyMj?: Big

    // Dostupné (db: undefined) - Dostupné)
    sumDostupMj?: Big

    // Prodejní cena bez DPH (db: undefined) - bez DPH)
    cenaZaklBezDph?: Big

    // Prodejní cena vč. DPH (db: undefined) - s DPH)
    cenaZaklVcDph?: Big

    // Prodejní cena (db: CenaZakl) - Prodejní cena)
    cenaZakl?: Big


    // Prodejní ceny (type: ODBERATEL) - odberatele)
    odberatele?: Promise<AFOdberatel[]>

    // Evidence obalů EkoKom (type: CENIK_OBAL) - cenik-obaly)
    cenikObaly?: Promise<AFCenikObal[]>

    // Atributy (type: ATRIBUT) - atributy)
    atributy?: Promise<AFAtribut[]>

    // Skladová karta (type: SKLADOVA_KARTA) - sklad-karty)
    skladKarty?: Promise<AFSkladovaKarta[]>

    // Sady a komplety (type: SADY_A_KOMPLETY) - sady-a-komplety)
    sadyAKomplety?: Promise<AFSadyAKomplety[]>

    // Příslušenství (type: PRISLUSENSTVI) - prislustenstvi)
    prislustenstvi?: Promise<AFPrislustenstvi[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Poplatky (type: POPLATKY) - poplatky)
    poplatky?: Promise<AFPoplatek[]>

    // Nákupní ceny (type: DODAVATEL) - dodavatele)
    dodavatele?: Promise<AFDodavatel[]>

    // Výrobní čísla (type: VYROBNI_CISLA) - vyrobni-cisla)
    vyrobniCisla?: Promise<AFVyrobniCislo[]>

    // Stavy položky ceníku (type: STAV_CENIKU) - stavy)
    stavy?: Promise<AFStavCeniku[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Podobné zboží (type: PODOBNE_ZBOZI) - podobne-zbozi)
    podobneZbozi?: Promise<AFPodobneZbozi[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Cenové úrovně (type: CENOVA_UROVEN) - cenHladiny)
    cenHladiny?: Promise<AFCenovaUroven[]>

    // Typy sazeb DPH (type: TYP_SAZBY_DPH) - typy-sazeb-dph)
    typySazebDph?: Promise<AFCenikTypSazbyDph[]>

    // Rezervace (type: REZERVACE) - rezervace)
    rezervace?: Promise<AFRezervace[]>

}