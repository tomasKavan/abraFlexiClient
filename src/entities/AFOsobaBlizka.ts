import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFVztah } from './AFVztah'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFOsobaBlizkaPohlaviK {
  muz = 'pohlavi.muz', //Muž
  zena = 'pohlavi.zena', //Žena
}


export class AFOsobaBlizka extends AFEntity {

    // ID (db: IdDite) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Příjmení (db: Prijmeni) - Příjmení)
    prijmeni?: string

    // Jméno (db: Jmeno) - Jméno)
    jmeno?: string

    // Datum narození (db: DatNaroz) - Datum narození)
    datNaroz?: Date

    // Pohlaví (db: PohlaviK) - Pohlaví)
    pohlaviK?: any

    // Rodné číslo (db: RodCis) - Rodné číslo)
    rodCis?: string

    // ZTP/P (db: Ztp_P) - ZTP/P)
    ztp_P?: boolean

    // Od (db: Ztp_POd) - Od)
    ztp_POd?: Date

    // Do (db: Ztp_PDo) - Do)
    ztp_PDo?: Date

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Dítě (db: Dite) - Dítě)
    dite?: boolean

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Osoba (db: IdOsoba) - Osoba)
    osoba?: AFOsobaHlavicka

    // Vztah (db: IdVztah) - Vztah)
    vztah?: AFVztah


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}