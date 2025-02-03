import { AFEntity } from '../AFEntity'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypAtributuTypAtributK {
  integer = 'typAtribut.integer', //Celé číslo
  numeric = 'typAtribut.numeric', //Desetinné číslo
  retezec = 'typAtribut.retezec', //Řetězec
  datumCas = 'typAtribut.datumCas', //Datum
  boolean = 'typAtribut.boolean', //Logická hodnota
}


export class AFTypAtributu extends AFEntity {

    // ID (db: IdTypAtribut) - ID)
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

    // Zobrazovat (db: Show) - Zobrazovat)
    visible?: boolean

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // Typ atributu (db: TypAtributK) - Typ atributu)
    typAtributK?: any

    // Místa použití (db: BeanKeysA) - Místa použití)
    beanKeysA?: string

    // Standartní (db: Standard) - Standartní)
    standard?: boolean

    // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
    uuid?: string

    // MJ (db: IdMj) - MJ)
    mj?: AFMernaJednotka


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}