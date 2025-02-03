import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'


export class AFStavSkladuKDatu extends AFEntity {

    // Stav zásob v MJ (db: undefined) - Stav zásob v MJ)
    stavMJ?: Big

    // Stav zásob v MJ s požadavky (db: undefined) - Stav zásob v MJ s požadavky)
    stavMJPozad?: Big

    // Požadavky MJ (db: undefined) - Požadavky MJ)
    pozadavkyMJ?: Big

    // V tuz. měně (db: undefined) - Stav v tuzemské měně)
    tuz?: Big

    // Název (db: undefined) - Název)
    nazev?: string

    // EAN (db: undefined) - EAN)
    eanKod?: string

    // Prům. cena (db: undefined) - Průměrná cena)
    prumCena?: Big

    // Ceník (db: undefined) - Ceník)
    cenik?: AFCenik

    // MJ (db: undefined) - Měrná jednotka)
    mj1?: AFMernaJednotka

    // Skupina zboží (db: undefined) - Skupina zboží)
    skupZboz?: AFSkupinaZbozi

    // Štítky (db: undefined) - Štítky)
    stitky?: string


}