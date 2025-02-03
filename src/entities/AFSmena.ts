import { AFEntity } from '../AFEntity'
import { AFSkupinaOsob } from './AFSkupinaOsob'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFSmena extends AFEntity {

    // ID (db: IdSmeny) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Rok (db: Rok) - Rok)
    rok?: number

    // Měsíc (db: Mesic) - Měsíc)
    mesic?: number

    // Plánované směny (db: Planovane) - Plánované směny)
    planovane?: string

    // Skutečně odpracováno (db: Skutecne) - Skutečně odpracováno)
    skutecne?: string

    // Skupina osob (db: IdSkupOsob) - Skupina osob)
    skupOsob?: AFSkupinaOsob

    // Osoba (db: IdOsoba) - Osoba)
    osoba?: AFOsobaHlavicka

    // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
    pracPom?: AFPracovniPomerHlavicka


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}