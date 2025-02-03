import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFRegion } from './AFRegion'
import { AFRadaBanka } from './AFRadaBanka'
import { AFStredisko } from './AFStredisko'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFUcet } from './AFUcet'
import { AFMena } from './AFMena'
import { AFFormatElektronickehoBankovnictvi } from './AFFormatElektronickehoBankovnictvi'
import { AFFormatElektronickehoPrikazu } from './AFFormatElektronickehoPrikazu'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFBankovniUcetVypisDuplicitaK {
  vypis = 'elVypisDuplicita.vypis', //Ignorovat již načtené výpisy
  polozka = 'elVypisDuplicita.polozka', //Ignorovat již načtené položky
  nekontrolovat = 'elVypisDuplicita.nekontrolovat', //Nekontrolovat
}


export class AFBankovniUcet extends AFEntity {

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

    // Číslo bank. účtu (db: Buc) - Číslo účtu)
    buc?: string

    // Specifický symbol (db: SpecSym) - Specifický symbol)
    specSym?: string

    // IBAN (db: Iban) - IBAN)
    iban?: string

    // BIC (db: Bic) - BIC)
    bic?: string

    // Název banky (db: NazBanky) - Název)
    nazBanky?: string

    // Název klienta (db: ZkrKlienta) - Název klienta)
    zkrKlienta?: string

    // výpisy (db: SloVypis) - výpisy)
    sloVypis?: string

    // příkazy (db: SloPrikaz) - příkazy)
    sloPrikaz?: string

    // Příp. výpisu (db: PriVypis) - přípona)
    priVypis?: string

    // Příp. přík. (db: PriPrikaz) - přípona)
    priPrikaz?: string

    // Příp. zahr. přík. (db: PriPrikazZahr) - příp.zahr.)
    priPrikazZahr?: string

    // Název protistrany v textu příkazu (db: PrikPopKlient) - Název protistrany v textu příkazu)
    prikPopKlient?: boolean

    // Popis dokladu v textu příkazu (db: PrikPopPopis) - Popis dokladu v textu příkazu)
    prikPopPopis?: boolean

    // Kontrolovat duplicitu výpisů (db: VypisDuplicitaK) - Kontrolovat duplicitu výpisů)
    vypisDuplicitaK?: any

    // Token pro příkazy (db: TokenPrikaz) - Token pro příkazy)
    tokenPrikaz?: string

    // Token pro příkazy - platnost do (db: TokenPrikazPlatiDo) - Token pro příkazy - platnost do)
    tokenPrikazPlatiDo?: Date

    // Token pro výpisy (db: TokenVypis) - Token pro výpisy)
    tokenVypis?: string

    // Token pro výpisy - platnost do (db: TokenVypisPlatiDo) - Token pro výpisy - platnost do)
    tokenVypisPlatiDo?: Date

    // Prim. ban. účet (db: BucPrimarni) - Primární účet)
    bucPrimarni?: boolean

    // Ulice (db: Ulice) - Ulice)
    ulice?: string

    // Město (db: Mesto) - Město)
    mesto?: string

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // PSČ (db: Psc) - PSČ)
    psc?: string

    // Telefon (db: Tel) - Telefon)
    tel?: string

    // Mobil (db: Mobil) - Mobil)
    mobil?: string

    // Fax (db: Fax) - Fax)
    fax?: string

    // E-mail (db: Email) - E-mail)
    email?: string

    // WWW (db: Www) - WWW)
    www?: string

    // Vytvářet přecenění (db: VytvaretPreceneni) - Vytvářet přecenění při inicializaci účetního období)
    vytvaretPreceneni?: boolean

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Řada pro příjem (db: IdRadyPrijem) - Řada pro příjem)
    radaPrijem?: AFRadaBanka

    // Řada pro výdej (db: IdRadyVydej) - Řada pro výdej)
    radaVydej?: AFRadaBanka

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Kód banky (db: IdSmerKod) - Kód banky)
    smerKod?: AFPenezniUstav

    // Účet banky (db: IdPrimUcet) - Účet banky)
    primUcet?: AFUcet

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Formát el. bank. pro výpisy (db: IdElBanFormat) - Formát výpisy)
    elBanFormatVypis?: AFFormatElektronickehoBankovnictvi

    // Formát el. bank. pro příkazy (db: IdElBanFormatPrikaz) - Formát příkazy)
    elBanFormatPrikaz?: AFFormatElektronickehoPrikazu

    // Stahovat výpisy od (db: StahovatVypisOd) - Stahovat výpisy od)
    stahovatVypisOd?: Date

    // Měna banky (db: IdMenaBanky) - Měna banky)
    menaBanky?: AFMena

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}