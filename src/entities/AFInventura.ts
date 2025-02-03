import { AFEntity } from '../AFEntity'
import { AFSklad } from './AFSklad'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFInventuraPolozka } from './AFInventuraPolozka'

export enum AFInventuraStavK {
  zahajena = 'stavInventury.zahajena', //Zahájena
  1vlna = 'stavInventury.1vlna', //1. vlna
  2vlna = 'stavInventury.2vlna', //2. vlna
  3vlna = 'stavInventury.3vlna', //3. vlna
  4vlna = 'stavInventury.4vlna', //4. vlna
  hotova = 'stavInventury.hotova', //Hotovo
  uzavrena = 'stavInventury.uzavrena', //Uzavřeno
}


export class AFInventura extends AFEntity {

    // ID (db: IdInventura) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Popis inventury (db: PopisInventury) - Popis inventury)
    popisInventury?: string

    // Typ inventury (db: TypInventury) - Typ inventury)
    typInventury?: string

    // Datum zahájení (db: DatZahaj) - Datum zahájení)
    datZahaj?: Date

    // Datum ukončení (db: DatKonec) - Datum ukončení)
    datKonec?: Date

    // Vedoucí (db: Vedouci) - Vedoucí)
    vedouci?: string

    // Osoby (db: Osoby) - Osoby)
    osoby?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Stav inventury (db: StavK) - Stav inventury)
    stavK?: any

    // Sklad (db: IdSklad) - Sklad)
    sklad?: AFSklad


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Položka inventury (type: INVENTURA_POLOZKA) - inventura-polozky)
    inventuraPolozky?: Promise<AFInventuraPolozka[]>

}