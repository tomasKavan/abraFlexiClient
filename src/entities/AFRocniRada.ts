import { AFEntity } from '../AFEntity'
import { AFRada } from './AFRada'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFRocniRada extends AFEntity {

    // ID (db: IdRadyRok) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Délka čísla (db: CisDelka) - Délka čísla)
    cisDelka?: number

    // Zobrazit nuly (db: ZobrazNuly) - Zobrazit nuly)
    zobrazNuly?: boolean

    // Akt.číslo (db: CisAkt) - Akt.číslo)
    cisAkt?: number

    // Počátek (db: CisPoc) - Počátek)
    cisPoc?: number

    // Prefix (db: Prefix) - Prefix)
    prefix?: string

    // Postfix (db: Postfix) - Postfix)
    postfix?: string

    // Čís. řada (db: IdRady) - Čís. řada)
    rada?: AFRada

    // Účetní období (db: IdUcetObdobi) - Účetní období)
    ucetObdobi?: AFUcetniObdobi


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}