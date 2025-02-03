import { AFEntity } from '../AFEntity'
import { AFPrikazKUhrade } from './AFPrikazKUhrade'
import { AFStat } from './AFStat'
import { AFMena } from './AFMena'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFPrikazKInkasuPolozkaPoplatekK {
  odesilatel = 'elPrikazPoplatek.odesilatel', //Odesílatel
  prijemce = 'elPrikazPoplatek.prijemce', //Příjemce
  spolecne = 'elPrikazPoplatek.spolecne', //Společná úhrada
}


export class AFPrikazKInkasuPolozka extends AFEntity {

    // ID (db: IdPolPrikazUhr) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Číslo účtu příjemce (db: Buc) - Číslo účtu příjemce)
    buc?: string

    // BIC (db: Bic) - BIC)
    bic?: string

    // IBAN (db: Iban) - IBAN)
    iban?: string

    // Název banky (db: NazBanky) - Název)
    nazBanky?: string

    // Město (db: MestoBanky) - Město)
    mestoBanky?: string

    // PSČ (db: PscBanky) - PSČ)
    pscBanky?: string

    // Ulice (db: UliceBanky) - Ulice)
    uliceBanky?: string

    // Název příjemce (db: NazPrijem) - Název příjemce)
    nazPrijem?: string

    // Město (db: MestoPrijem) - Město)
    mestoPrijem?: string

    // PSČ (db: PscPrijem) - PSČ)
    pscPrijem?: string

    // Ulice (db: UlicePrijem) - Ulice)
    ulicePrijem?: string

    // Částka (db: Castka) - Částka)
    castka?: Big

    // Var. sym. (db: VarSymPrijem) - Variabilní symbol)
    varSymPrijem?: string

    // Spec. sym. (db: SpecSymPrijem) - Specifický symbol)
    specSymPrijem?: string

    // Variab. symbol příkazce (db: VarSymPrikaz) - Variab. symbol příkazce)
    varSymPrikaz?: string

    // Specif. symbol příkazce (db: SpecSymPrikaz) - Specif. symbol příkazce)
    specSymPrikaz?: string

    // Kód / číslo dokladu (db: Kod) - Kód / číslo dokladu)
    kod?: string

    // Splatnost (db: DatSplat) - Splatnost)
    datSplat?: Date

    // Popis (db: Popis) - Popis)
    popis?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Kontakt (db: Kontakt) - Kontakt)
    kontakt?: string

    // Plátce poplatků (db: PoplatekK) - Plátce poplatků)
    poplatekK?: any

    // Konst. sym. (db: KonSym) - Konstantní symbol)
    konSym?: string

    // ID transakce v bance (db: TransakceVBanceId) - ID transakce v bance)
    transakceVBanceId?: string

    // Dat. splat. příkazu (db: undefined) - Dat. splat. příkazu)
    datSplatPrik?: Date

    // Příkaz (db: IdPrikazUhr) - Příkaz)
    prikaz?: AFPrikazKUhrade

    // Pošt. stát (db: IdStatuPrijem) - Stát)
    faStat?: AFStat

    // Stát (db: IdStatuBanky) - Stát)
    baStat?: AFStat

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Kód banky (db: IdSmerKod) - Kód banky)
    smerKod?: AFPenezniUstav

    // Doklad faktury (db: IdPrimDokl) - Doklad faktury)
    doklFak?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}