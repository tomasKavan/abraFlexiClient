import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFSadyAKomplety extends AFEntity {

    // ID (db: IdSady) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Množství (db: MnozMj) - Množství)
    mnozMj?: Big

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Sada (db: IdCenikSada) - Sada)
    cenikSada?: AFCenik

    // Ceníková položka (db: IdCenik) - Ceníková položka)
    cenik?: AFCenik


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}