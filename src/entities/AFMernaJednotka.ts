import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFMernaJednotkaTypMjK {
  delka = 'typMj.delka', //délka
  plocha = 'typMj.plocha', //plocha
  objem = 'typMj.objem', //objem
  hmotnost = 'typMj.hmotnost', //hmotnost
  cas = 'typMj.cas', //čas
}

export enum AFMernaJednotkaNormalMjK {
  gram = 'normalMj.gram', //Gram
  kilogram = 'normalMj.kilogram', //Kilogram
  tuna = 'normalMj.tuna', //Tuna
}


export class AFMernaJednotka extends AFEntity {

    // ID (db: IdMj) - ID)
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

    // Typ (db: TypMjK) - Typ)
    typMjK?: any

    // Normal. jednotka (db: NormalMjK) - Normal. jednotka)
    normalMjK?: any

    // Zkratka pro tisky (db: KodTisk) - Zkratka pro tisky)
    kodTisk?: string

    // Zkratka pro tisky EN (db: KodTiskA) - Zkratka pro tisky EN)
    kodTiskA?: string

    // Zkratka pro tisky DE (db: KodTiskB) - Zkratka pro tisky DE)
    kodTiskB?: string

    // Zkratka pro tisky FR (db: KodTiskC) - Zkratka pro tisky FR)
    kodTiskC?: string


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}