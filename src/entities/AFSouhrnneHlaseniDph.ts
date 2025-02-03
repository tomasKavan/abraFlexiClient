import { AFEntity } from '../AFEntity'


export class AFSouhrnneHlaseniDph extends AFEntity {

    // Kód země (db: undefined) - Kód země)
    kodStatu?: string

    // Kód země (DPH) (db: undefined) - Kód země (DPH))
    kodDphStatu?: string

    // DIČ (db: undefined) - DIČ)
    dic?: string

    // Kód plnění (db: undefined) - Kód plnění)
    kodPlneni?: string

    // Počet plnění (db: undefined) - Počet plnění)
    pocetPlneni?: number

    // Základ [Kč] (db: undefined) - Základ [Kč])
    sumZkl?: Big


}