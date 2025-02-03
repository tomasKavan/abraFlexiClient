import { AFEntity } from '../AFEntity'


export class AFZurnal extends AFEntity {

    // ID (db: IdZurnal) - ID)
    id?: number

    // Tabulka (db: Tabulka) - Tabulka)
    tabulka?: string

    // ID řádky (db: IdZaznamu) - ID řádky)
    idZaznamu?: number

    // Sloupec (db: Sloupec) - Sloupec)
    sloupec?: string

    // Nová hodnota (db: NovaHod) - Nová hodnota)
    novaHod?: string

    // Původní hodnota (db: StaraHod) - Původní hodnota)
    staraHod?: string

    // Operace (db: Op) - Operace)
    op?: string

    // Transakce (db: TransakceK) - Transakce)
    transakceK?: any

    // Uživatel (db: Uziv) - Uživatel)
    uziv?: string

    // Čas změny (db: DatCas) - Čas změny)
    datCas?: Date


}