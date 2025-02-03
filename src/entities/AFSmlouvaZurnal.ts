import { AFEntity } from '../AFEntity'

export enum AFSmlouvaZurnalTransakceK {
  manualGenerace = 'operaceZurnalSmlouvy.manualGenerace', //Ruční generace
  autoGenerace = 'operaceZurnalSmlouvy.autoGenerace', //Automatická generace
}


export class AFSmlouvaZurnal extends AFEntity {

    // ID (db: IdZurnalSml) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Datum a čas (db: DatCas) - Datum a čas)
    datCas?: Date

    // Operace (db: TransakceK) - Operace)
    transakceK?: any

    // Počet vygenerovaných faktur (db: PocetOk) - Počet vygenerovaných faktur)
    pocetOk?: number

    // Počet nevygenerovaných faktur (db: PocetErr) - Počet nevygenerovaných faktur)
    pocetErr?: number

    // Seznam chyb (db: Chyby) - Seznam chyb)
    chyby?: string

    // Uživatel (db: IdUziv) - Uživatel)
    uzivatel?: any


}