import { AFEntity } from '../AFEntity'
import { AFStrom } from './AFStrom'


export class AFStromCenik extends AFEntity {

    // ID (db: Idvazuzel) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // ID Záznamu (db: Idzaznamu) - ID Záznamu)
    idZaznamu?: number

    // Strom (db: Iduzlu) - Strom)
    uzel?: AFStrom


}