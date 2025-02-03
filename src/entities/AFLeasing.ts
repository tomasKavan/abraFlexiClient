import { AFEntity } from '../AFEntity'
import { AFTypLeasingu } from './AFTypLeasingu'
import { AFMena } from './AFMena'
import { AFUcet } from './AFUcet'
import { AFAdresar } from './AFAdresar'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFSplatkovyKalendar } from './AFSplatkovyKalendar'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFDanovyNaklad } from './AFDanovyNaklad'
import { AFZapujcka } from './AFZapujcka'

export enum AFLeasingDruhK {
  operativ = 'druhLeas.operativ', //Operativní
  financni = 'druhLeas.financni', //Finanční
}

export enum AFLeasingMjZarukyK {
  rok = 'mjZaruky.rok', //rok
  mesic = 'mjZaruky.mesic', //měsíc
  den = 'mjZaruky.den', //den
}

export enum AFLeasingFrekDanNaklK {
  mesicne = 'frDanNakl.mesicne', //Měsíčně
  dvoumesi = 'frDanNakl.dvoumesi', //Každé dva měsíce
  ctvrtlet = 'frDanNakl.ctvrtlet', //Čtvrtletně
  pololet = 'frDanNakl.pololet', //Pololetně
  rocne = 'frDanNakl.rocne', //Ročně
}


export class AFLeasing extends AFEntity {

    // ID (db: IdLeasing) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Zkratka (db: Kod) - Zkratka)
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

    // EAN kód (db: EanKod) - EAN kód)
    eanKod?: string

    // Druh (db: DruhK) - Druh)
    druhK?: any

    // Cena [Kč] (db: Cena) - Cena [Kč])
    cena?: Big

    // Číslo smlouvy (db: CidPoriz) - Číslo smlouvy)
    cidPoriz?: string

    // Zahájení (db: DatKoupe) - Datum zahájení leasingu)
    datKoupe?: Date

    // Vyrobeno (db: DatVyroby) - Datum výroby)
    datVyroby?: Date

    // Výrobní číslo (db: VyrCis) - Výrobní číslo)
    vyrCis?: string

    // MJ záruky (db: MjZarukyK) - MJ záruky)
    mjZarukyK?: any

    // Záruka (db: Zaruka) - Záruka)
    zaruka?: number

    // Zámek (db: Zamek) - Zámek)
    zamek?: boolean

    // ? splátek (db: PocetSplatek) - Počet splátek)
    pocetSplatek?: number

    // ? daň.nákl (db: PocetDanNakl) - Počet daňových nákladů [v měsících])
    pocetDanNakl?: number

    // Frekv.daň.nákl. (db: FrekDanNaklK) - Frekvence daňových nákladů)
    frekDanNaklK?: any

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Číslo (db: VozCislo) - Číslo)
    vozCislo?: string

    // SPZ (db: VozSpz) - SPZ)
    vozSpz?: string

    // Značka (db: VozZnacka) - Značka)
    vozZnacka?: string

    // Model (db: VozModel) - Model)
    vozModel?: string

    // Typ vozidla (db: VozTyp) - Typ vozidla)
    vozTyp?: string

    // Objem (db: VozObjem) - Objem)
    vozObjem?: Big

    // Havarijní pojištění (db: VozHavar) - Havarijní pojištění)
    vozHavar?: string

    // Výše havarijního pojištění (db: VozHavarVyse) - Výše havarijního pojištění)
    vozHavarVyse?: Big

    // Výbava (db: VozVybava) - Výbava)
    vozVybava?: string

    // Typ (db: IdTypLeas) - Typ)
    typLeasingu?: AFTypLeasingu

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Úč.čas.rozl. (db: IdCasUcet) - Účet časového rozlišení nákladů)
    casUcet?: AFUcet

    // Úč.závazku (db: IdZavazUcet) - Účet závazku)
    zavazUcet?: AFUcet

    // Úč.daň.nákl. (db: IdNaklUcet) - Účet daňových nákladů)
    naklUcet?: AFUcet

    // Úč.DPH sníž. (db: IdDphZaklUcet) - Účet DPH - základní sazba)
    dphZaklUcet?: AFUcet

    // Úč.DPH zákl. (db: IdDphSnizUcet) - Účet DPH - snížená sazba)
    dphSnizUcet?: AFUcet

    // Dodavatel (db: IdFirmyDod) - Dodavatel)
    dodavatel?: AFAdresar

    // Výrobce (db: IdFirmyVyr) - Výrobce)
    vyrobce?: AFAdresar

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Uživatel (db: IdUziv) - Uživatel)
    uzivatel?: any


    // Splátkový kalendář (type: SPLATKOVY_KALENDAR) - splatkove-kalendare)
    splatkoveKalendare?: Promise<AFSplatkovyKalendar[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Daňové náklady (type: DANOVY_NAKLAD) - danove-naklady)
    danoveNaklady?: Promise<AFDanovyNaklad[]>

    // Zápůjčky/odpovědná osoba (type: ZAPUJCKA) - zapujcky)
    zapujcky?: Promise<AFZapujcka[]>

}