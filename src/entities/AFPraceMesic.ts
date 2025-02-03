import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFCinnost } from './AFCinnost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFPraceMesic extends AFEntity {

    // ID (db: IdPraceStred) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Rok (db: Rok) - Rok)
    rok?: number

    // Měsíc (db: Mesic) - Měsíc)
    mesic?: number

    // Hodin (db: Hodin) - Hodin)
    hodin?: Big

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Osoba (db: IdOsoba) - Osoba)
    osoba?: AFOsobaHlavicka

    // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
    pracPom?: AFPracovniPomerHlavicka

    // Středisko (db: IdStredisko) - Středisko)
    stredisko?: AFStredisko

    // Zakázka (db: IdZakazka) - Zakázka)
    zakazka?: AFZakazka

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}