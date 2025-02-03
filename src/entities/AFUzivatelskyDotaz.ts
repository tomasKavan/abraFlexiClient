import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFUzivatelskyDotazParametr } from './AFUzivatelskyDotazParametr'
import { AFUzivatelskyDotazVlastnost } from './AFUzivatelskyDotazVlastnost'


export class AFUzivatelskyDotaz extends AFEntity {

    // ID (db: IdDotaz) - ID)
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

    // Dotaz (db: Dotaz) - Dotaz)
    dotaz?: string

    // Primární formulář (db: MasterBeanKey) - Primární formulář)
    masterBeanKey?: string

    // Privátní (db: Privatni) - Privátní)
    privatni?: boolean

    // Report (db: Report) - Report)
    report?: string

    // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
    uuid?: string

    // ID primární evidence (db: undefined) - ID primární evidence)
    masterFormId?: number

    // Uživatel (db: IdUzivatel) - Uživatel)
    uzivatel?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Parametry (type: UZIVATELSKY_DOTAZ_PARAMETR) - params)
    params?: Promise<AFUzivatelskyDotazParametr[]>

    // Vlastnosti (type: UZIVATELSKY_DOTAZ_VLASTNOST) - props)
    props?: Promise<AFUzivatelskyDotazVlastnost[]>

}