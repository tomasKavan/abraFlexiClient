import { AFEntity } from '../AFEntity'
import { AFMena } from './AFMena'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFKurz extends AFEntity {

    // ID (db: IdKurzy) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Datum (db: PlatiOdData) - Datum)
    platiOdData?: Date

    // Kurz (db: NbStred) - Kurz)
    nbStred?: Big

    // Množství (db: KurzMnozstvi) - Množství)
    kurzMnozstvi?: Big

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}