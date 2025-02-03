import { AFEntity } from '../AFEntity'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFCisloBaliku extends AFEntity {

    // ID (db: IdCisloBal) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Číslo (db: Cislo) - Číslo)
    cislo?: string

    // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
    formaDopravy?: AFFormaDopravy

    // Doklad faktury (db: IdDoklFak) - Doklad faktury)
    doklFak?: any

    // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
    doklSklad?: AFSkladovyPohyb

    // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
    doklObch?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}