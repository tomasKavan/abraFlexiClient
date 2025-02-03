import { AFEntity } from '../AFEntity'


export class AFDoklad extends AFEntity {

    // ID (náhled) (db: undefined) - ID (náhled))
    idDokladView?: number

    // ID dokladu (db: undefined) - ID dokladu)
    idDokl?: number

    // Zkratka (db: undefined) - Zkratka)
    kod?: string

    // Popis (db: undefined) - Popis)
    popis?: string

    // Variabilní symbol (db: undefined) - Variabilní symbol)
    varSym?: string

    // Celkem [Kč] (db: undefined) - Celkem [Kč])
    sumCelkem?: Big

    // Název firmy nebo jméno osoby (db: undefined) - Název firmy - jméno)
    nazFirmy?: string

    // IČO (db: undefined) - IČO)
    ic?: string

    // DIČ (db: undefined) - DIČ)
    dic?: string

    // Pošt. jméno firmy (db: undefined) - Firma)
    faNazev?: string

    // Modul (db: undefined) - Modul)
    modul?: string

    // Název evidence (db: undefined) - Název evidence)
    evdName?: string

    // Podmodul (zápočet, prodejka) (db: undefined) - Podmodul (zápočet, prodejka))
    subModul?: boolean


}