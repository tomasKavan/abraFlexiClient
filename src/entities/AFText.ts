import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFText extends AFEntity {

    // ID (db: IdText) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Text (db: Popis) - Text)
    popis?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Vydané faktury (db: VsbFav) - Vydané faktury)
    vsbFav?: boolean

    // Pohledávky (db: VsbPhl) - Pohledávky)
    vsbPhl?: boolean

    // Přijaté faktury (db: VsbFap) - Přijaté faktury)
    vsbFap?: boolean

    // Závazky (db: VsbZav) - Závazky)
    vsbZav?: boolean

    // Sklad (db: VsbSkl) - Sklad)
    vsbSkl?: boolean

    // Banka (db: VsbBan) - Banka)
    vsbBan?: boolean

    // Pokladna (db: VsbPok) - Pokladna)
    vsbPok?: boolean

    // Interní doklady (db: VsbInt) - Interní doklady)
    vsbInt?: boolean

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

    // Popis (db: VsbPopis) - Popis)
    vsbPopis?: boolean

    // Poznámka (db: VsbPoznamka) - Poznámka)
    vsbPoznamka?: boolean

    // Doprava a vyskladnění (db: VsbDoprava) - Doprava a vyskladnění)
    vsbDoprava?: boolean

    // Úvod (db: VsbUvod) - Úvod)
    vsbUvod?: boolean

    // Závěr (db: VsbZaver) - Závěr)
    vsbZaver?: boolean

    // Název položky (db: VsbNazevPol) - Název položky)
    vsbNazevPol?: boolean

    // Poznámka položky (db: VsbPoznamPol) - Poznámka položky)
    vsbPoznamPol?: boolean


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}