import { AFEntity } from '../AFEntity'
import { AFMajetek } from './AFMajetek'
import { AFLeasing } from './AFLeasing'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFZapujcka extends AFEntity {

    // ID (db: IdZapujcky) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Jméno (db: Jmeno) - Jméno)
    jmeno?: string

    // Příjmení (db: Prijmeni) - Příjmení)
    prijmeni?: string

    // Ulice (db: Ulice) - Ulice)
    ulice?: string

    // Město (db: Mesto) - Město)
    mesto?: string

    // PSČ (db: Psc) - PSČ)
    psc?: string

    // WWW (db: Www) - WWW)
    www?: string

    // E-mail (db: Email) - E-mail)
    email?: string

    // Fax (db: Fax) - Fax)
    fax?: string

    // Mobil (db: Mobil) - Mobil)
    mobil?: string

    // Telefon (db: Tel) - Telefon)
    tel?: string

    // Od data (db: DatZahaj) - Od data)
    datZahaj?: Date

    // Do data (db: DatKonec) - Do data)
    datKonec?: Date

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Majetek (db: IdMajetku) - Majetek)
    majetek?: AFMajetek

    // Leasing (db: IdLeasing) - Leasing)
    leasing?: AFLeasing

    // Osoba (db: IdOsoby) - Osoba)
    osoba?: any

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}