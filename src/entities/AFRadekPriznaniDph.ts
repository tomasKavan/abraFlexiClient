import { AFEntity } from '../AFEntity'
import { AFCleneniDph } from './AFCleneniDph'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFRadekPriznaniDphStavK {
  radne = 'stavPriznaniDph.radne', //Řádné
  dodatecne = 'stavPriznaniDph.dodatecne', //Dodatečné
  opravne = 'stavPriznaniDph.opravne', //Opravné
}

export enum AFRadekPriznaniDphTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}


export class AFRadekPriznaniDph extends AFEntity {

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

    // Základ (db: Zaklad) - Základ)
    zaklad?: Big

    // DPH (db: Dph) - DPH)
    dph?: Big

    // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
    typSzbDphK?: any

    // Uživatel (db: IdUzivatel) - Uživatel)
    uzivatel?: any

    // Řádky DPH (db: IdClenDph) - Řádky DPH)
    clenDph?: AFCleneniDph


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}