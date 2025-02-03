import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFRadaNabidkyVydane } from './AFRadaNabidkyVydane'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFStatDph } from './AFStatDph'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypNabidkyVydaneRazeniProTiskK {
  poradi = 'razeniProTisk.poradi', //Podle pořadí
  nazev = 'razeniProTisk.nazev', //Podle názvu
  kod = 'razeniProTisk.kod', //Podle kódu
}


export class AFTypNabidkyVydane extends AFEntity {

    // ID (db: IdTypDokl) - ID)
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

    // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
    doprava?: string

    // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
    popisDoklad?: string

    // Úvodní text (tiskne se před položkami) (db: UvodTxt) - Úvodní text (tiskne se před položkami))
    uvodTxt?: string

    // Závěrečný text (tiskne se za položkami) (db: ZavTxt) - Závěrečný text (tiskne se za položkami))
    zavTxt?: string

    // Dokladová řada (db: IdRadyPrijem) - Dokladová řada)
    radaPrijem?: AFRadaNabidkyVydane

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Stát DPH (db: IdStatDph) - Stát DPH)
    statDph?: AFStatDph

    // Aut. tisk (db: TiskAutomat) - Automaticky tisknout při vytvoření nového dokladu)
    tiskAutomat?: boolean

    // Řazení položek pro tisk (db: RazeniProTiskK) - Řazení položek pro tisk)
    razeniProTiskK?: any

    // Primární typ dokladu (db: Primarni) - Primární typ dokladu)
    primarni?: boolean

    // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
    formaDopravy?: AFFormaDopravy

    // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
    emailTxt?: string

    // Šablona e-mail (db: IdSablonaMail) - Šablona e-mail)
    sablonaMail?: AFSablonaMail

    // Vytvářet recyklační poplatky (db: GenerovatRecyklacniPoplatky) - Vytvářet recyklační poplatky)
    generovatRecyklacniPoplatky?: boolean

    // Preferovat na dokladech (db: StatDphTd) - Preferovat na dokladech)
    statDphTd?: boolean


    // Automatický tisk (type: AUTOTISK) - autoTisky)
    autoTisky?: Promise<AFAutotisk[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}