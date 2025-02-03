import { AFEntity } from '../AFEntity'
import { AFTypDokladu } from './AFTypDokladu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFAutotisk extends AFEntity {

    // ID (db: IdAutoTisk) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Kopií (db: Pocet) - Kopií)
    pocet?: number

    // Tisknout doklad (db: TypTiskDoklK) - Tisknout doklad)
    typTiskDoklK?: any

    // Report (db: Report) - Report)
    report?: string

    // Sumovaný (db: Sumovany) - Sumovaný)
    sumovany?: boolean

    // Rozšířený (db: Rozsireny) - Rozšířený)
    rozsireny?: boolean

    // Typ dokladu (db: IdTypDokl) - Typ dokladu)
    typDokl?: AFTypDokladu


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}