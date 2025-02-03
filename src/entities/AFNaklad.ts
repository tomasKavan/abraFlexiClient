import { AFEntity } from '../AFEntity'
import { AFTypNakladu } from './AFTypNakladu'
import { AFCenik } from './AFCenik'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFNaklad extends AFEntity {

    // ID (db: IdNaklAkt) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Fakturované množství (db: FaktMnoz) - Fakturované množství)
    faktMnoz?: Big

    // Fakturovat (db: Fakturovat) - Fakturovat)
    fakturovat?: boolean

    // Fakturováno (db: Fakturovano) - Fakturováno)
    fakturovano?: boolean

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Realizované množství (db: RealMnoz) - Realizované množství)
    realMnoz?: Big

    // Čas nákladu (db: Termin) - Čas nákladu)
    termin?: Date

    // Typ nákladu na aktivitu (db: IdTypNaklAkt) - Typ nákladu na aktivitu)
    typNaklAkt?: AFTypNakladu

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
    zodpPrac?: any

    // Událost (db: IdAdrUdalost) - Událost)
    adrUdalost?: AFUdalost


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}