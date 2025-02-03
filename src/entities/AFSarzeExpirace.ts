import { AFEntity } from '../AFEntity'
import { AFSklad } from './AFSklad'
import { AFCenik } from './AFCenik'

export enum AFSarzeExpiraceTypPohybuK {
  prijem = 'typPohybu.prijem', //Příjem
  vydej = 'typPohybu.vydej', //Výdej
}


export class AFSarzeExpirace extends AFEntity {

    // ID (db: IdPolSklad) - ID)
    id?: number

    // Množství (db: Pocet) - Množství)
    pocet?: Big

    // Cena za MJ (db: CenaMj) - Cena za MJ)
    cenaMj?: Big

    // Datum vyst. (db: DatVyst) - Vystaveno)
    datVyst?: Date

    // Datum skladového pohybu (db: DatSklad) - Datum skladového pohybu)
    datSklad?: Date

    // Trvanlivost (db: DatTrvan) - Trvanlivost)
    datTrvan?: Date

    // Datum výroby (db: DatVyroby) - Datum výroby)
    datVyroby?: Date

    // Expirace (db: Expirace) - Expirace)
    expirace?: Date

    // Šarže (db: Sarze) - Šarže)
    sarze?: string

    // Typ pohybu (db: TypPohybuK) - Typ pohybu)
    typPohybuK?: any

    // Sklad (db: IdSkladu) - Sklad)
    sklad?: AFSklad

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik


}