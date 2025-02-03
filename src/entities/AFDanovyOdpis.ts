import { AFEntity } from '../AFEntity'
import { AFMajetek } from './AFMajetek'
import { AFUcet } from './AFUcet'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFDanovyOdpis extends AFEntity {

    // ID (db: IdDanOdpisu) - ID)
    id?: number

    // Je účetní (db: Ucetni) - Doklad je účetní)
    ucetni?: boolean

    // Uživ. změn. (db: Zmena) - Uživatelsky změněno)
    zmena?: boolean

    // Datum vyst. (db: DatVyst) - Vystaveno)
    datVyst?: Date

    // Daň.odpis [Kč] (db: SumZkl) - Daň.odpis [Kč])
    sumZkl?: Big

    // Stáří[Roky] (db: StariMaj) - Stáří majetku [Roky])
    stariMaj?: number

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Zámek (db: Zamek) - Zámek)
    zamek?: boolean

    // Zůstatek [Kč] (db: ZustPoOdp) - Zůstatek [Kč])
    zustPoOdp?: Big

    // Číslo dokladu (db: Kod) - Číslo dokladu)
    kod?: string

    // Modul (db: Modul) - Modul)
    modul?: string

    // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
    datUcto?: Date

    // Majetek (db: IdMajetku) - Majetek)
    majetek?: AFMajetek

    // Účet MD (db: IdZklMdUcet) - Účet MD odpisu)
    zklMdUcet?: AFUcet

    // Účet DAL (db: IdZklDalUcet) - Účet DAL odpisu)
    zklDalUcet?: AFUcet

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}