import { AFEntity } from '../AFEntity'
import { AFLeasing } from './AFLeasing'
import { AFUcet } from './AFUcet'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFDanovyNaklad extends AFEntity {

    // ID (db: IdDanNakl) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Je účetní (db: Ucetni) - Doklad je účetní)
    ucetni?: boolean

    // Datum účtování (db: DatVyst) - Datum účtování)
    datVyst?: Date

    // Základ [Kč] (db: SumZkl) - Základ [Kč])
    sumZkl?: Big

    // Základ [měna] (db: SumZklMen) - Základ [měna])
    sumZklMen?: Big

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Modul (db: Modul) - Modul)
    modul?: string

    // Číslo dokladu (db: Kod) - Číslo dokladu)
    kod?: string

    // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
    datUcto?: Date

    // Leasingový majetek (db: IdLeasing) - Leasingový majetek)
    leasing?: AFLeasing

    // Účet MD základu (db: IdZklMdUcet) - Účet MD základu)
    zklMdUcet?: AFUcet

    // Účet DAL základu (db: IdZklDalUcet) - Účet DAL základu)
    zklDalUcet?: AFUcet

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}