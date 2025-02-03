import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'


export class AFPoSplatnosti extends AFEntity {

    //  (db: undefined) - )
    fakturovano?: Big

    //  (db: undefined) - )
    sumCelkemAkt?: Big

    //  (db: undefined) - )
    uhrazeno?: Big

    //  (db: undefined) - )
    symbolSplatnostiK?: any

    // Zkratka firmy (db: undefined) - Zkratka firmy)
    firma?: AFAdresar


}