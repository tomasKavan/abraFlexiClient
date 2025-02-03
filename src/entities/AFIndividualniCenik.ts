import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'


export class AFIndividualniCenik extends AFEntity {

    // ID (db: undefined) - ID)
    id?: number

    // Zkratka (db: undefined) - Zkratka)
    kod?: string

    // Název (db: undefined) - Název)
    nazev?: string

    // Název EN (db: undefined) - Název EN)
    nazevA?: string

    // Název DE (db: undefined) - Název DE)
    nazevB?: string

    // Název FR (db: undefined) - Název FR)
    nazevC?: string

    // Prodejní cena (db: undefined) - Prodejní cena)
    cenaZakl?: Big

    // Cena 2 (db: undefined) - Cena 2)
    cena2?: Big

    // Cena 3 (db: undefined) - Cena 3)
    cena3?: Big

    // Cena 4 (db: undefined) - Cena 4)
    cena4?: Big

    // Cena 5 (db: undefined) - Cena 5)
    cena5?: Big

    // Limit MJ 2 (db: undefined) - Množ. limit 2)
    limMnoz2?: Big

    // Limit MJ 3 (db: undefined) - Množ. limit 3)
    limMnoz3?: Big

    // Limit MJ 4 (db: undefined) - Množ. limit 4)
    limMnoz4?: Big

    // Limit MJ 5 (db: undefined) - Množ. limit 5)
    limMnoz5?: Big

    // Typ ceny (db: undefined) - Typ ceny)
    typCenyDphK?: any

    // Sazba DPH (db: undefined) - Sazba DPH)
    typSzbDphK?: any

    // Ceník (db: undefined) - Ceník)
    cenik?: AFCenik

    // Cenová úroveň (db: undefined) - Cenová úroveň)
    cenHlad?: AFCenovaUroven

    // Skupina zboží (db: undefined) - Skupina zboží)
    skupZboz?: AFSkupinaZbozi


}