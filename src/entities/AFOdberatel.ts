import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFAdresar } from './AFAdresar'
import { AFCenikovaSkupina } from './AFCenikovaSkupina'
import { AFStredisko } from './AFStredisko'
import { AFMena } from './AFMena'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFOdberatel extends AFEntity {

    // ID (db: IdOdberatel) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Kód zboží/materiálu (db: KodIndi) - Kód zboží/materiálu)
    kodIndi?: string

    // Prodejní cena (db: ProdejCena) - Prodejní cena)
    prodejCena?: Big

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Platí od data (db: PlatiOdData) - Platí od data)
    platiOdData?: Date

    // Platí do data (db: PlatiDoData) - Platí do data)
    platiDoData?: Date

    // Ručně vybrat (db: RucneVybrat) - Ručně vybrat)
    rucneVybrat?: boolean

    // Limit MJ 2 (db: LimMnoz2) - Množ. limit 2)
    limMnoz2?: Big

    // Limit MJ 3 (db: LimMnoz3) - Množ. limit 3)
    limMnoz3?: Big

    // Limit MJ 4 (db: LimMnoz4) - Množ. limit 4)
    limMnoz4?: Big

    // Limit MJ 5 (db: LimMnoz5) - Množ. limit 5)
    limMnoz5?: Big

    // Prodejní cena 2 (db: ProdejCena2) - Prodejní cena 2)
    prodejCena2?: Big

    // Prodejní cena 3 (db: ProdejCena3) - Prodejní cena 3)
    prodejCena3?: Big

    // Prodejní cena 4 (db: ProdejCena4) - Prodejní cena 4)
    prodejCena4?: Big

    // Prodejní cena 5 (db: ProdejCena5) - Prodejní cena 5)
    prodejCena5?: Big

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Firma (db: IdFirmy) - Firma)
    firma?: AFAdresar

    // Ceníková skupina (db: IdSkupCen) - Ceníková skupina)
    skupCen?: AFCenikovaSkupina

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}