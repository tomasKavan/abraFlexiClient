import { AFEntity } from '../AFEntity'
import { AFUzivatelskyDotaz } from './AFUzivatelskyDotaz'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFUzivatelskyDotazVlastnostTypPropK {
  string = 'datazTypParam.string', //Řetězec
  logic = 'datazTypParam.logic', //Logická hodnota
  integer = 'datazTypParam.integer', //Celé číslo
  numeric = 'datazTypParam.numeric', //Desetinné číslo
  date = 'datazTypParam.date', //Datum
  object = 'datazTypParam.object', //Objekt
}


export class AFUzivatelskyDotazVlastnost extends AFEntity {

    // ID (db: IdDotazProp) - ID)
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

    // Pořadí (db: CisRad) - Pořadí)
    cisRad?: number

    // Typ (db: TypPropK) - Typ)
    typPropK?: any

    // Skrýt sloupec (db: HideColumn) - Skrýt sloupec)
    hideColumn?: boolean

    // Klíč pro tabulku (db: BeanKeyOpen) - Klíč pro tabulku)
    beanKeyOpen?: string

    // Šířka (db: Width) - Šířka)
    width?: number

    // Zdrojová tabulka (db: ResourceBeanKey) - Zdrojová tabulka)
    resourceBeanKey?: string

    // Zdrojové pole (db: ResourcePropName) - Zdrojové pole)
    resourcePropName?: string

    // Dotaz (db: IdDotaz) - Dotaz)
    dotaz?: AFUzivatelskyDotaz


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}