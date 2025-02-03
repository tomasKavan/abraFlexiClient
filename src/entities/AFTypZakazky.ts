import { AFEntity } from '../AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypZakazkyDruhZakK {
  nevyrob = 'typZak.nevyrob', //nevýrobní
  vyrob = 'typZak.vyrob', //výrobní
}


export class AFTypZakazky extends AFEntity {

    // ID (db: IdTypZakazky) - ID)
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

    // Druh zakázky (db: DruhZakK) - Druh zakázky)
    druhZakK?: any

    // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
    workFlow?: boolean

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
    zodpPrac?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}