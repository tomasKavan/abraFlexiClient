import { AFEntity } from '../AFEntity'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFTypDokladu } from './AFTypDokladu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFFormaUhradyZauctovani extends AFEntity {

    // ID (db: IdFormaUhradyZauc) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady

    // Typ dokladu (db: IdTypDokl) - Typ dokladu)
    typDokl?: AFTypDokladu

    // Prodejní kasa (db: IdKasa) - Prodejní kasa)
    kasa?: AFTypDokladu


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}