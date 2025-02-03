import { AFEntity } from '../AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFMapovaniSkladu extends AFEntity {

    // ID (db: IdMapSklad) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Skupina zboží (db: IdSkupZboz) - Skupina zboží)
    skupZboz?: AFSkupinaZbozi

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Sklad (db: IdSklad) - Sklad)
    sklad?: AFSklad


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}