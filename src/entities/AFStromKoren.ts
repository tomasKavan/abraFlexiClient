import { AFEntity } from '../AFEntity'


export class AFStromKoren extends AFEntity {

    // ID (db: IdStrom) - ID)
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

    // Evidence (db: Tabulka) - Evidence)
    tabulka?: string

    // Primární (db: Primarni) - Primární)
    primarni?: boolean

    // ID záznamu (db: Idzaznamu) - ID záznamu)
    idzaznamu?: number

    // Uživatel (db: IdUziv) - Uživatel)
    uzivatel?: any


}