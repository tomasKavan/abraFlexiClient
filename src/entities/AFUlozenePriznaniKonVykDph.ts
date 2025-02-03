import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFUlozenePriznaniKonVykDphStavK {
  radne = 'stavPriznaniKonVykDph.radne', //Řádné
  dodatecne = 'stavPriznaniKonVykDph.dodatecne', //Dodatečné
  opravne = 'stavPriznaniKonVykDph.opravne', //Opravné
  nasledne = 'stavPriznaniKonVykDph.nasledne', //Následné
  nasledneOpravne = 'stavPriznaniKonVykDph.nasledneOpravne', //Následné/opravné
}


export class AFUlozenePriznaniKonVykDph extends AFEntity {

    // ID (db: IdPriznaniKonVykDph) - ID)
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

    // Typ kontrolního hlášení (db: StavK) - Typ kontrolního hlášení)
    stavK?: any

    // XML (db: Xml) - XML)
    xml?: string

    // Uživatel (db: IdUzivatel) - Uživatel)
    uzivatel?: any

    // Stát (db: IdStat) - Stát)
    stat?: AFStat


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}