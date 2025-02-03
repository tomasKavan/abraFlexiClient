import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFAdresar } from './AFAdresar'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFKontakt extends AFEntity {

    // ID (db: IdKontakt) - ID)
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

    // Popis (db: Popis) - Popis)
    popis?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Příjmení (db: Prijmeni) - Příjmení)
    prijmeni?: string

    // Jméno (db: Jmeno) - Jméno)
    jmeno?: string

    // Oslovení (db: Osloveni) - Oslovení)
    osloveni?: string

    // Titul (db: Titul) - Titul)
    titul?: string

    // Titul za jménem (db: TitulZa) - Titul za jménem)
    titulZa?: string

    // Funkce (db: Funkce) - Funkce)
    funkce?: string

    // Oddělení (db: Oddeleni) - Oddělení)
    oddeleni?: string

    // Primární kontakt (db: Primarni) - Primární kontakt)
    primarni?: boolean

    // Odesílat faktury (db: OdesilatFak) - Odesílat faktury)
    odesilatFak?: boolean

    // Odesílat objednávky (db: OdesilatObj) - Odesílat objednávky)
    odesilatObj?: boolean

    // Odesílat nabídky (db: OdesilatNab) - Odesílat nabídky)
    odesilatNab?: boolean

    // Odesílat poptávky (db: OdesilatPpt) - Odesílat poptávky)
    odesilatPpt?: boolean

    // Odesílat skladové doklady (db: OdesilatSkl) - Odesílat skladové doklady)
    odesilatSkl?: boolean

    // Odesílat pokladní doklady (db: OdesilatPok) - Odesílat pokladní doklady)
    odesilatPok?: boolean

    // Datum narození (db: DatNaroz) - Datum narození)
    datNaroz?: Date

    // Rodné číslo (db: RodCis) - Rodné číslo)
    rodCis?: string

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Uživatelské jméno (db: Username) - Uživatelské jméno)
    username?: string

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar


    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}