import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFAdresar } from './AFAdresar'
import { AFKontakt } from './AFKontakt'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFMistoUrceni extends AFEntity {

    // ID (db: IdMur) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Ulice (db: Ulice) - Ulice)
    ulice?: string

    // Město (db: Mesto) - Město)
    mesto?: string

    // PSČ (db: Psc) - PSČ)
    psc?: string

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

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

    // EAN (db: EanKod) - EAN)
    eanKod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Název - druhá řádka (db: Nazev2) - Název - druhá řádka)
    nazev2?: string

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Primární místo určení (db: Primarni) - Primární místo určení)
    primarni?: boolean

    // Místo plnění (db: MistoPlneni) - Místo plnění)
    mistoPlneni?: boolean

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
    kontaktOsoba?: AFKontakt


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}