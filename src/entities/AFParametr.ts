import { AFEntity } from '../AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFBankovniUcetSkladPokladna } from './AFBankovniUcetSkladPokladna'
import { AFTypDokladu } from './AFTypDokladu'
import { AFAdresar } from './AFAdresar'
import { AFSkupinaFirem } from './AFSkupinaFirem'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFParametr extends AFEntity {

    // ID (db: IdParam) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Parametr (db: ParamK) - Parametr)
    paramK?: any

    // Hodnota (db: Hodnota) - Hodnota)
    hodnota?: string

    // Kód reportu (db: KodReportu) - Kód reportu)
    kodReportu?: string

    // Uživatel (db: IdUzivatel) - Uživatel)
    uzivatel?: any

    // Role uživatele (db: IdRole) - Role uživatele)
    role?: any

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Banka/pokladna/sklad (db: IdBsp) - Banka/pokladna/sklad)
    bsp?: AFBankovniUcetSkladPokladna

    // Typ dokladu (db: IdTypDokl) - Typ dokladu)
    typDokl?: AFTypDokladu

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Skupina (db: IdSkupFir) - Skupina)
    skupFir?: AFSkupinaFirem

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}