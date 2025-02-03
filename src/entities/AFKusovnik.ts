import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFKusovnik } from './AFKusovnik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFKusovnik extends AFEntity {

    // ID (db: IdKusovnik) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Množství (db: Mnoz) - Množství)
    mnoz?: Big

    // Hladina (db: Hladina) - Hladina)
    hladina?: number

    // Pořadí (db: Poradi) - Pořadí)
    poradi?: number

    // Cesta (db: Cesta) - Cesta)
    cesta?: string

    // Nadřazený ceník (db: IdOtecCenik) - Nadřazený ceník)
    otecCenik?: AFCenik

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Nadřazený kusovník (db: Idotec) - Nadřazený kusovník)
    otec?: AFKusovnik


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}