import { AFEntity } from '../AFEntity'


export class AFUcetniObdobi extends AFEntity {

    // ID (db: IdUcetObdobi) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Platí od data (db: PlatiOdData) - Platí od data)
    platiOdData?: Date

    // Platí do data (db: PlatiDoData) - Platí do data)
    platiDoData?: Date

    // Popis (db: Popis) - Popis)
    popis?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Změna po uzávěrce (db: ZmenaZaver) - Změna po uzávěrce)
    zmenaZaver?: boolean

    // Chyba při přecenění (db: ChybaPreceneni) - Chyba při přecenění)
    chybaPreceneni?: boolean

    // Kód roku pro řadu (db: RokProRadu) - Kód roku pro řadu)
    rokProRadu?: number


}