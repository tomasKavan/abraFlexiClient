import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFTypUzivatelskeVazby extends AFEntity {

    // ID (db: IdVazbaTyp) - ID)
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

    // Automatická (db: Automaticka) - Automatická)
    automaticka?: boolean

    // Primární místa použití (db: BeanKeysA) - Primární místa použití)
    beanKeysA?: string

    // Sekundární místa použití (db: BeanKeysB) - Sekundární místa použití)
    beanKeysB?: string

    // Viditelná ze sekundárního záznamu (db: VisibleB) - Viditelná ze sekundárního záznamu)
    visibleB?: boolean

    // Vazební sloupec sekundárního záznamu (db: FkNameB) - Vazební sloupec sekundárního záznamu)
    fkNameB?: string

    // Tabulka DB (db: TableNameB) - Tabulka DB)
    tableNameB?: string

    // Sloupec DB (db: FkDbNameB) - Sloupec DB)
    fkDbNameB?: string

    // ID DB (db: PkDbNameB) - ID DB)
    pkDbNameB?: string

    // Modul B (db: ModulB) - Modul B)
    modulB?: string

    // Štítky (db: undefined) - Štítky)
    stitky?: string


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}