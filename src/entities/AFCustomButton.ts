import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFCustomButton extends AFEntity {

    // ID (db: Idwcustbutton) - ID)
    id?: number

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Url (db: Url) - Url)
    url?: string

    // Název (db: Title) - Název)
    title?: string

    // Popis (db: Description) - Popis)
    description?: string

    // Evidence (db: Evidence) - Evidence)
    evidence?: string

    // Umístění (db: Location) - Umístění)
    location?: string

    // Volba prohlížeče (db: Browser) - Volba prohlížeče)
    browser?: string


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}