import { AFEntity } from '../AFEntity'
import { AFSkladovaKarta } from './AFSkladovaKarta'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFInventura } from './AFInventura'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFInventuraPolozka extends AFEntity {

    // ID (db: IdPolInventura) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Reálný stav (db: MnozMjReal) - Reálný stav)
    mnozMjReal?: Big

    // Programový stav (db: MnozMjKarta) - Programový stav)
    mnozMjKarta?: Big

    // Reálný stav č. 2 (db: MnozMjReal2) - Reálný stav č. 2)
    mnozMjReal2?: Big

    // Reálný stav č. 3 (db: MnozMjReal3) - Reálný stav č. 3)
    mnozMjReal3?: Big

    // Reálný stav ve 2. vlně (db: MnozMjRealVlna2) - Reálný stav ve 2. vlně)
    mnozMjRealVlna2?: Big

    // Reálný stav č. 2 ve 2. vlně (db: MnozMjReal2Vlna2) - Reálný stav č. 2 ve 2. vlně)
    mnozMjReal2Vlna2?: Big

    // Reálný stav č. 3 ve 2. vlně (db: MnozMjReal3Vlna2) - Reálný stav č. 3 ve 2. vlně)
    mnozMjReal3Vlna2?: Big

    // Reálný stav ve 3. vlně (db: MnozMjRealVlna3) - Reálný stav ve 3. vlně)
    mnozMjRealVlna3?: Big

    // Reálný stav č. 2 ve 3. vlně (db: MnozMjReal2Vlna3) - Reálný stav č. 2 ve 3. vlně)
    mnozMjReal2Vlna3?: Big

    // Reálný stav č. 3 ve 3. vlně (db: MnozMjReal3Vlna3) - Reálný stav č. 3 ve 3. vlně)
    mnozMjReal3Vlna3?: Big

    // Reálný stav ve 4. vlně (db: MnozMjRealVlna4) - Reálný stav ve 4. vlně)
    mnozMjRealVlna4?: Big

    // Reálný stav č. 2 ve 4. vlně (db: MnozMjReal2Vlna4) - Reálný stav č. 2 ve 4. vlně)
    mnozMjReal2Vlna4?: Big

    // Reálný stav č. 3 ve 4. vlně (db: MnozMjReal3Vlna4) - Reálný stav č. 3 ve 4. vlně)
    mnozMjReal3Vlna4?: Big

    // Šarže (db: Sarze) - Šarže)
    sarze?: string

    // Expirace (db: Expirace) - Expirace)
    expirace?: Date

    // Skladová karta (db: IdKarty) - Skladová karta)
    skladKarta?: AFSkladovaKarta

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Sklad (db: IdSklad) - Sklad)
    sklad?: AFSklad

    // Hlavička inventury (db: IdInventury) - Hlavička inventury)
    inventura?: AFInventura

    // MJ (db: IdMj) - MJ)
    mj?: AFMernaJednotka

    // MJ č. 2 (db: IdMj2) - MJ č. 2)
    mj2?: AFMernaJednotka

    // MJ č. 3 (db: IdMj3) - MJ č. 3)
    mj3?: AFMernaJednotka


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}