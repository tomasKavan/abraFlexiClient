import { AFEntity } from '../AFEntity'
import { AFMena } from './AFMena'
import { AFAdresar } from './AFAdresar'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFStatDph extends AFEntity {

    // ID (db: IdStatu) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Kód (ISO 3166-1) (db: Kod) - alpha-2)
    kod?: string

    // Název státu (db: Nazev) - Název státu)
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

    // Kód (DPH) (db: KodDph) - Kód (DPH))
    kodDph?: string

    // Kód (ISO 3166-1 - číselný) (db: KodNum) - numeric)
    kodNum?: string

    // Kód (ISO 3166-1 - alpha-3) (db: KodAlpha3) - alpha-3)
    kodAlpha3?: string

    // Název státu zkrácený (db: NazZemeC25) - Název státu zkrácený)
    nazZemeC25?: string

    // Člen EU (db: ClenEu) - Člen EU)
    clenEu?: boolean

    // Mezinárodní tel. předvolba (db: TelPredvolba) - Mezinárodní tel. předvolba)
    telPredvolba?: string

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Krajský finanční úřad (db: Idfukraj) - Krajský finanční úřad)
    fuKraj?: AFAdresar

    // Územní pracoviště (db: Idfuuzprac) - Územní pracoviště)
    fuUzPrac?: AFAdresar


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}