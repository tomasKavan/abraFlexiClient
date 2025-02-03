import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFRegion extends AFEntity {

    // ID (db: IdRegion) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // Zkratka pro tisky (db: KodTisk) - Zkratka pro tisky)
    kodTisk?: string

    // Zkratka pro tisky EN (db: KodTiskA) - Zkratka pro tisky EN)
    kodTiskA?: string

    // Zkratka pro tisky DE (db: KodTiskB) - Zkratka pro tisky DE)
    kodTiskB?: string

    // Zkratka pro tisky FR (db: KodTiskC) - Zkratka pro tisky FR)
    kodTiskC?: string

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}