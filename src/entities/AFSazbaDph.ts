import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSazbaDphTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}


export class AFSazbaDph extends AFEntity {

    // ID (db: IdSazbyDph) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
    typSzbDphK?: any

    // DPH [%] (db: SzbDph) - DPH [%])
    szbDph?: Big

    // Platí od data (db: PlatiOdData) - Platí od data)
    platiOdData?: Date

    // Platí do data (db: PlatiDoData) - Platí do data)
    platiDoData?: Date

    // Popis (db: Popis) - Popis)
    popis?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}