import { AFEntity } from '../AFEntity'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFOsobaHlavicka extends AFEntity {

    // ID (db: IdOsobaHlav) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Osobní číslo (db: OsbCis) - Osobní číslo)
    osbCis?: string

    // Příjmení (db: Prijmeni) - Příjmení)
    prijmeni?: string

    // Jméno (db: Jmeno) - Jméno)
    jmeno?: string

    // Titul (db: Titul) - Titul)
    titul?: string


    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}