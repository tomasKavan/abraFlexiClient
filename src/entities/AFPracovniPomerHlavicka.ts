import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFPracovniPomerHlavicka extends AFEntity {

    // ID (db: IdPracPomHlav) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    //  (db: AktivniOd) - )
    aktivniOd?: Date

    //  (db: AktivniDo) - )
    aktivniDo?: Date

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    //  (db: Hlavni) - )
    hlavni?: boolean

    //  (db: Zacatek) - )
    zacatek?: Date

    //  (db: SkutecnyNastup) - )
    skutecnyNastup?: Date

    //  (db: KonecPomeru) - )
    konecPomeru?: Date

    //  (db: KonecZkusDoby) - )
    konecZkusDoby?: Date

    //  (db: KonecUrciteDoby) - )
    konecUrciteDoby?: Date

    // Osoba (db: IdOsoba) - Osoba)
    osoba?: AFOsobaHlavicka


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}