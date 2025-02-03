import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFRadaPokladniPohyb } from './AFRadaPokladniPohyb'
import { AFStredisko } from './AFStredisko'
import { AFUcet } from './AFUcet'
import { AFMena } from './AFMena'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFPokladna extends AFEntity {

    // ID (db: IdBsp) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Platí od (db: IdUcetObdobiOd) - Platí od)
    ucetObdobiOd?: AFUcetniObdobi

    // Platí do (db: IdUcetObdobiDo) - Platí do)
    ucetObdobiDo?: AFUcetniObdobi

    // Platí od roku (db: PlatiOd) - Platí od roku)
    platiOd?: number

    // Platí do roku (db: PlatiDo) - Platí do roku)
    platiDo?: number

    // Modul (db: Modul) - Modul)
    modul?: string

    // Vytvářet přecenění (db: VytvaretPreceneni) - Vytvářet přecenění při inicializaci účetního období)
    vytvaretPreceneni?: boolean

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Řada pro příjem (db: IdRadyPrijem) - Řada pro příjem)
    radaPrijem?: AFRadaPokladniPohyb

    // Řada pro výdej (db: IdRadyVydej) - Řada pro výdej)
    radaVydej?: AFRadaPokladniPohyb

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Účet pokladny (db: IdPrimUcet) - Účet pokladny)
    primUcet?: AFUcet

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}