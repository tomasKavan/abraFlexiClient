import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFPoplatekTypPoplatkuK {
  obecny = 'typPoplatku.obecny', //Obecný
  recyklacni = 'typPoplatku.recyklacni', //Recyklační
}


export class AFPoplatek extends AFEntity {

    // ID (db: IdPoplatek) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Množství (db: MnozMj) - Množství)
    mnozMj?: Big

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Typ poplatku (db: TypPoplatkuK) - Typ poplatku)
    typPoplatkuK?: any

    // Sazba DPH z nadřazené položky (db: ParentTypSzbDph) - Sazba DPH z nadřazené položky)
    parentTypSzbDph?: boolean

    // Ceníková položka (db: IdCenikOtec) - Ceníková položka)
    cenikOtec?: AFCenik

    // Poplatek (db: IdCenik) - Poplatek)
    cenik?: AFCenik


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}