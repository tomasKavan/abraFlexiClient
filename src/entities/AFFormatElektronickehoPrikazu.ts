import { AFEntity } from '../AFEntity'


export class AFFormatElektronickehoPrikazu extends AFEntity {

    // ID (db: IdElbanFormat) - ID)
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

    // Příp. výpisu (db: PriVypis) - přípona)
    priVypis?: string

    // Příp. přík. (db: PriPrikaz) - přípona)
    priPrikaz?: string

    // Příp. zahr. přík. (db: PriPrikazZahr) - příp.zahr.)
    priPrikazZahr?: string

    // Formát výpisu (db: FormatVypis) - Formát výpisu)
    formatVypis?: string

    // Formát příkazu (db: FormatPrikaz) - Formát příkazu)
    formatPrikaz?: string

    // Formát zahraničního příkazu (db: FormatPrikazZahr) - Formát zahraničního příkazu)
    formatPrikazZahr?: string

    // Kódování výpisu (db: KodovaniVypis) - Kódování výpisu)
    kodovaniVypis?: string

    // BIC je povinný (db: BicPovinny) - BIC je povinný)
    bicPovinny?: boolean


}