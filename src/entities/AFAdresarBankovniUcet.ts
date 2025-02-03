import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFAdresar } from './AFAdresar'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFAdresarBankovniUcet extends AFEntity {

    // ID (db: IdBanSpoj) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Ulice (db: Ulice) - Ulice)
    ulice?: string

    // Město (db: Mesto) - Město)
    mesto?: string

    // PSČ (db: Psc) - PSČ)
    psc?: string

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // Popis (db: Popis) - Popis)
    popis?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Název banky (db: NazBanky) - Název)
    nazBanky?: string

    // Číslo bank. účtu (db: Buc) - Číslo účtu)
    buc?: string

    // IBAN (db: Iban) - IBAN)
    iban?: string

    // BIC (db: Bic) - BIC)
    bic?: string

    // Specifický symbol (db: SpecSym) - Specifický symbol)
    specSym?: string

    // Variabilní symbol (db: VarSym) - Variabilní symbol)
    varSym?: string

    // Prim. ban. spoj. (db: Primarni) - Primární ban. spojení)
    primarni?: boolean

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Kód banky (db: IdSmerKod) - Kód banky)
    smerKod?: AFPenezniUstav

    // Konstantní symbol (db: IdKonSym) - Konstantní symbol)
    konSym?: AFKonstSymbol

    // Registrovaný účet (db: Registered) - Registrovaný účet)
    registered?: boolean


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}