import { AFEntity } from '../AFEntity'
import { AFTypUzivatelskeVazby } from './AFTypUzivatelskeVazby'


export class AFUzivatelskaVazba extends AFEntity {

    // ID (db: IdVazba) - ID)
    id?: number

    // Typ vazby (db: IdVazbaTyp) - Typ vazby)
    vazbaTyp?: AFTypUzivatelskeVazby

    // Modul (db: undefined) - Modul)
    modul?: string

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Částka (db: undefined) - Částka)
    castka?: Big

    // Datum (db: undefined) - Datum)
    datum?: Date

    // Popis vazby (db: Popis) - Popis vazby)
    popis?: string

    // Poznámka k vazbě (db: Poznam) - Poznámka k vazbě)
    poznam?: string

    // Evidence (db: undefined) - Evidence)
    evidenceType?: string

    // ID navázaného objektu (db: undefined) - ID navázaného objektu)
    objectId?: number

    // Navázaný objekt (db: undefined) - Navázaný objekt)
    object?: any


}