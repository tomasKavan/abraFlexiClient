import { AFEntity } from '../AFEntity'
import { AFSkupinaStitku } from './AFSkupinaStitku'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFStitek extends AFEntity {

    // ID (db: IdVybKlice) - ID)
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

    // Adresář (db: VsbAdr) - Adresář)
    vsbAdr?: boolean

    // Ceník (db: VsbKatalog) - Ceník)
    vsbKatalog?: boolean

    // Sklad (db: VsbSkl) - Sklad)
    vsbSkl?: boolean

    // Vydané faktury (db: VsbFav) - Vydané faktury)
    vsbFav?: boolean

    // Pohledávky (db: VsbPhl) - Pohledávky)
    vsbPhl?: boolean

    // Přijaté faktury (db: VsbFap) - Přijaté faktury)
    vsbFap?: boolean

    // Závazky (db: VsbZav) - Závazky)
    vsbZav?: boolean

    // Banka (db: VsbBan) - Banka)
    vsbBan?: boolean

    // Pokladna (db: VsbPok) - Pokladna)
    vsbPok?: boolean

    // Interní doklady (db: VsbInt) - Interní doklady)
    vsbInt?: boolean

    // Majetek (db: VsbMaj) - Majetek)
    vsbMaj?: boolean

    // Objednávky přijaté (db: VsbObp) - Objednávky přijaté)
    vsbObp?: boolean

    // Nabídky vydané (db: VsbNav) - Nabídky vydané)
    vsbNav?: boolean

    // Poptávky přijaté (db: VsbPpp) - Poptávky přijaté)
    vsbPpp?: boolean

    // Objednávky vydané (db: VsbObv) - Objednávky vydané)
    vsbObv?: boolean

    // Nabídky přijaté (db: VsbNap) - Nabídky přijaté)
    vsbNap?: boolean

    // Poptávky vydané (db: VsbPpv) - Poptávky vydané)
    vsbPpv?: boolean

    // Mzdy (db: VsbMzd) - Mzdy)
    vsbMzd?: boolean

    // Číselníky (db: VsbCis) - Číselníky)
    vsbCis?: boolean

    // Skupina štítků (db: IdSkupVybKlic) - Skupina štítků)
    skupVybKlic?: AFSkupinaStitku


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}