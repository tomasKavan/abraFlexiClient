import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypAktivityDruhUdalK {
  ukol = 'druhUdal.ukol', //Úkol
  pozn = 'druhUdal.pozn', //Poznámka
  udal = 'druhUdal.udal', //Událost
}


export class AFTypAktivity extends AFEntity {

    // ID (db: IdTypAkt) - ID)
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

    // Druh události (db: DruhUdalK) - Druh události)
    druhUdalK?: any

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
    zodpPrac?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}