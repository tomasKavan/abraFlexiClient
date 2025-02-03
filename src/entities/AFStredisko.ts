import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFStredisko extends AFEntity {

    // ID (db: IdStred) - ID)
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

    // Ulice (db: Ulice) - Ulice)
    ulice?: string

    // Město (db: Mesto) - Město)
    mesto?: string

    // PSČ (db: Psc) - PSČ)
    psc?: string

    // Telefon (db: Tel) - Telefon)
    tel?: string

    // Mobil (db: Mobil) - Mobil)
    mobil?: string

    // Fax (db: Fax) - Fax)
    fax?: string

    // E-mail (db: Email) - E-mail)
    email?: string

    // WWW (db: Www) - WWW)
    www?: string

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // Tisknout (db: Tisknout) - Tisknout na doklady)
    tisknout?: boolean

    // Název - druhá řádka (db: Nazev2) - Název - druhá řádka)
    nazev2?: string

    // Název - druhá řádka EN (db: Nazev2A) - Název - druhá řádka EN)
    nazev2A?: string

    // Název - druhá řádka DE (db: Nazev2B) - Název - druhá řádka DE)
    nazev2B?: string

    // Název - druhá řádka FR (db: Nazev2C) - Název - druhá řádka FR)
    nazev2C?: string

    // Štítky (db: undefined) - Štítky)
    stitky?: string


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}