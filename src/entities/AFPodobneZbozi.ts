import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFPodobneZbozi extends AFEntity {

    // ID (db: IdPodobne) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Ceníková položka (db: IdCenikOtec) - Ceníková položka)
    cenikOtec?: AFCenik

    // Podobné (db: IdCenik) - Podobné)
    cenik?: AFCenik


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}