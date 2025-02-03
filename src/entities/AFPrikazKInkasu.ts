import { AFEntity } from '../AFEntity'
import { AFMena } from './AFMena'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFPrikazKInkasuPolozka } from './AFPrikazKInkasuPolozka'

export enum AFPrikazKInkasuStavPrikazK {
  odeslan = 'elPrikazStav.odeslan', //Odesláno
  vytvoren = 'elPrikazStav.vytvoren', //Neodesláno
}


export class AFPrikazKInkasu extends AFEntity {

    // ID (db: IdPrikazUhr) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Datum vytvoření (db: DatVytvor) - Datum vytvoření)
    datVytvor?: Date

    // Splatnost (db: DatSplat) - Splatnost)
    datSplat?: Date

    // Celková částka (db: CelCastka) - Celková částka)
    celCastka?: Big

    // Jméno souboru (db: JmenoSoub) - Jméno souboru)
    jmenoSoub?: string

    // Pořadové číslo ve dni (db: PoradiPrikaz) - Pořadové číslo ve dni)
    poradiPrikaz?: number

    // Stav příkazu (db: StavPrikazK) - Stav příkazu)
    stavPrikazK?: any

    // Název firmy nebo jméno osoby (db: NazFirmy) - Název firmy - jméno)
    nazFirmy?: string

    // Pošt. ulice (db: FaUlice) - Ulice)
    faUlice?: string

    // Pošt. město (db: FaMesto) - Město)
    faMesto?: string

    // Pošt. PSČ (db: FaPsc) - PSČ)
    faPsc?: string

    // Konstantní symbol (db: KonSym) - Konstantní symbol)
    konSym?: string

    // Skrýt popis a příjemce platby při exportu (db: BezPopisu) - Skrýt popis a příjemce platby při exportu)
    bezPopisu?: boolean

    // Datum splatnosti z hlavičky příkazu (db: DatSplatZHlavicky) - Datum splatnosti z hlavičky příkazu)
    datSplatZHlavicky?: boolean

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Účet (db: IdBanka) - Účet)
    banka?: AFBankovniUcet

    // Pošt. stát (db: IdFaStatu) - Stát)
    faStat?: AFStat

    // Pošt. kraj (db: IdFaRegionu) - Kraj)
    faRegion?: AFRegion


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Položky (type: PRIKAZ_K_INKASU_POLOZKA) - polozky)
    polozky?: Promise<AFPrikazKInkasuPolozka[]>

}