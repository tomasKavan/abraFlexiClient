import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFRezervace extends AFEntity {

    // ID (db: IdRezervace) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Datum vzniku (db: DatumOd) - Datum vzniku)
    datumOd?: Date

    // Datum zániku (db: DatumDo) - Datum zániku)
    datumDo?: Date

    // Množství (db: Mnozstvi) - Množství)
    mnozstvi?: Big

    // Na skladě (db: SkladMj) - Na skladě)
    skladMj?: Big

    // Poznámka (db: Poznamka) - Poznámka)
    poznamka?: string

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Sklad (db: IdSklad) - Sklad)
    sklad?: AFSklad

    // Obchodní položka (db: IdPolObch) - Obchodní položka)
    polObch?: any

    // Uživatel (db: IdUziv) - Uživatel)
    uzivatel?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}