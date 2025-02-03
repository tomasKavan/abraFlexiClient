import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFPsc extends AFEntity {

    // ID (db: IdPsc) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Pošta (db: Nazev) - Pošta)
    nazev?: string

    // Pošta EN (db: NazevA) - Pošta EN)
    nazevA?: string

    // Pošta DE (db: NazevB) - Pošta DE)
    nazevB?: string

    // Pošta FR (db: NazevC) - Pošta FR)
    nazevC?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Zobrazovat (db: Show) - Zobrazovat)
    visible?: boolean

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // Část obce (db: CastObce) - Část obce)
    castObce?: string

    // Kód okresu (db: KodOkresu) - Kód okresu)
    kodOkresu?: string

    // Okres (db: Okres) - Okres)
    okres?: string

    // Obec (db: Obec) - Obec)
    obec?: string

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}