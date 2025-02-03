import { AFEntity } from '../AFEntity'
import { AFUzivatelskyDotaz } from './AFUzivatelskyDotaz'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFUzivatelskyDotazParametrTypParamK {
  string = 'datazTypParam.string', //Řetězec
  logic = 'datazTypParam.logic', //Logická hodnota
  integer = 'datazTypParam.integer', //Celé číslo
  numeric = 'datazTypParam.numeric', //Desetinné číslo
  date = 'datazTypParam.date', //Datum
  object = 'datazTypParam.object', //Objekt
  actId = 'datazTypParam.actId', //Aktuální záznam
  actModul = 'datazTypParam.actModul', //Aktuální modul
}


export class AFUzivatelskyDotazParametr extends AFEntity {

    // ID (db: IdDotazParam) - ID)
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

    // Typ (db: TypParamK) - Typ)
    typParamK?: any

    // Výchozí hodnota (db: Vychozi) - Výchozí hodnota)
    vychozi?: string

    // Mohutnost N (db: MohutnostN) - Mohutnost N)
    mohutnostN?: boolean

    // Výběr z (db: BeanKey) - Výběr z)
    beanKey?: string

    // Povinný (db: Povinny) - Povinný)
    povinny?: boolean

    // Dotaz (db: IdDotaz) - Dotaz)
    dotaz?: AFUzivatelskyDotaz


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}