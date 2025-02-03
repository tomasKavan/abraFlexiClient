import { AFEntity } from '../AFEntity'
import { AFUcet } from './AFUcet'
import { AFRadekSestavy } from './AFRadekSestavy'


export class AFUmisteniUctu extends AFEntity {

    // Účet (db: undefined) - Účet)
    ucet?: AFUcet

    // Vybraný řádek (db: undefined) - Vybraný řádek)
    vybranyRadek?: AFRadekSestavy


}