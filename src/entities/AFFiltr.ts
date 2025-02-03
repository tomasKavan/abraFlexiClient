import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFFiltr extends AFEntity {

    // ID (db: IdFiltru) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Formulář (db: BeanKey) - Formulář)
    beanKey?: string

    // Obsah filtru (db: ObsahFiltru) - Obsah filtru)
    obsahFiltru?: string

    // Privátní (db: Privatni) - Privátní)
    privatni?: boolean

    // Návrhář (db: Navrhar) - Návrhář)
    navrhar?: boolean

    // Uložit nastavení sloupců (db: SaveColumns) - Uložit nastavení sloupců)
    saveColumns?: boolean

    // Poslední použití (db: LastUsage) - Poslední použití)
    lastUsage?: Date

    // Počet použití (db: UsageCnt) - Počet použití)
    usageCnt?: number

    // Uživatel (db: IdUzivatel) - Uživatel)
    uzivatel?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}