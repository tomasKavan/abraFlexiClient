import { AFEntity } from '../AFEntity'
import { AFRadekSestavy } from './AFRadekSestavy'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFSumaceSestavy extends AFEntity {

    // ID (db: IdSesSumace) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Převrátit znaménko (db: PrevratZnam) - Převrátit znaménko)
    prevratZnam?: boolean

    // Řádek (db: IdSesRadky) - Řádek)
    radek?: AFRadekSestavy

    // Přičíst řádek (db: IdSesRadkySum) - Přičíst řádek)
    radekSum?: AFRadekSestavy


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}