import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFUlozenePriznaniDphStavK {
  radne = 'stavPriznaniDph.radne', //Řádné
  dodatecne = 'stavPriznaniDph.dodatecne', //Dodatečné
  opravne = 'stavPriznaniDph.opravne', //Opravné
}


export class AFUlozenePriznaniDph extends AFEntity {

    // ID (db: IdRadekPriznaniDph) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Rok (db: Rok) - Rok)
    rok?: number

    // Měsíc (db: Mesic) - Měsíc)
    mesic?: number

    // Čtvrtletí (db: Ctvrtleti) - Čtvrtletí)
    ctvrtleti?: number

    // Datum výpočtu (db: Datum) - Datum výpočtu)
    datum?: Date

    // Typ přiznání DPH (db: StavK) - Typ přiznání DPH)
    stavK?: any

    // Uživatel (db: IdUzivatel) - Uživatel)
    uzivatel?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}