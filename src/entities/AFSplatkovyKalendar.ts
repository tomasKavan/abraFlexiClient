import { AFEntity } from '../AFEntity'
import { AFLeasing } from './AFLeasing'
import { AFUcet } from './AFUcet'
import { AFCleneniDph } from './AFCleneniDph'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFStatDph } from './AFStatDph'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSplatkovyKalendarClenSplK {
  vstupni = 'clenSpl.vstupni', //vstupní cena
  financni = 'clenSpl.financni', //finanční činnost
}

export enum AFSplatkovyKalendarTypSplK {
  akontace = 'typSpl.akontace', //mimoř. splátka
  bezna = 'typSpl.bezna', //běžná splátka
  prvni = 'typSpl.prvni', //nultá splátka
  posledni = 'typSpl.posledni', //poslední splátka
  mimFinCin = 'typSpl.mimFinCin', //mim. fin. činnost
  prevod = 'typSpl.prevod', //Převod za zůstatkovou cenu
}

export enum AFSplatkovyKalendarTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}


export class AFSplatkovyKalendar extends AFEntity {

    // ID (db: IdSplatKal) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Je účetní (db: Ucetni) - Doklad je účetní)
    ucetni?: boolean

    // Členění splátky (db: ClenSplK) - Členění splátky)
    clenSplK?: any

    // Typ splátky (db: TypSplK) - Typ splátky)
    typSplK?: any

    // Datum splátky (db: DatVyst) - Datum splátky)
    datVyst?: Date

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // DPH [Kč] (db: SumDph) - DPH [Kč])
    sumDph?: Big

    // DPH [měna] (db: SumDphMen) - DPH [měna])
    sumDphMen?: Big

    // DPH [%] (db: SzbDph) - DPH [%])
    szbDph?: Big

    // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
    typSzbDphK?: any

    // Základ [Kč] (db: SumZkl) - Základ [Kč])
    sumZkl?: Big

    // Základ [měna] (db: SumZklMen) - Základ [měna])
    sumZklMen?: Big

    // Modul (db: Modul) - Modul)
    modul?: string

    // Čís.dokl. (db: Kod) - Číslo dokladu)
    kod?: string

    // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
    datUcto?: Date

    // Pořadí (db: CisRad) - Pořadí)
    cisRad?: number

    // Leasingový majetek (db: IdLeasing) - Leasingový majetek)
    leasing?: AFLeasing

    // Úč.MD zakl. (db: IdZklMdUcet) - Účet MD základu)
    zklMdUcet?: AFUcet

    // Úč.DAL zakl. (db: IdZklDalUcet) - Účet DAL základu)
    zklDalUcet?: AFUcet

    // Úč.MD DPH (db: IdDphMdUcet) - Účet MD DPH)
    dphMdUcet?: AFUcet

    // Úč.DAL DPH (db: IdDphDalUcet) - Účet DAL DPH)
    dphDalUcet?: AFUcet

    // Členění DPH (db: IdClenDph) - Členění DPH)
    clenDph?: AFCleneniDph

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Závazek (db: IdDoklFak) - Závazek)
    zavazek?: any

    // Stát DPH (db: IdStatDph) - Stát DPH)
    statDph?: AFStatDph


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}