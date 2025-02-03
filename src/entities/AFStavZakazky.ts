import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFStavZakazkyDruhStavuZakK {
  ziskavame = 'druhStavuZakazky.ziskavame', //Získáváme ji
  mame = 'druhStavuZakazky.mame', //Máme ji
  hotovo = 'druhStavuZakazky.hotovo', //Hotovo
  storno = 'druhStavuZakazky.storno', //Stornováno
}


export class AFStavZakazky extends AFEntity {

    // ID (db: IdStavZakazky) - ID)
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

    // Druh stavu (db: DruhStavuZakK) - Druh stavu)
    druhStavuZakK?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}