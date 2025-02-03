import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFRadaInternihoDokladu } from './AFRadaInternihoDokladu'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFUcet } from './AFUcet'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFMena } from './AFMena'
import { AFStatDph } from './AFStatDph'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypInternihoDokladuTypDoklK {
  obecny = 'typDokladu.obecny', //Obecný doklad
  krZisk = 'typDokladu.krZisk', //Kurzový rozdíl zisk
  krZtrata = 'typDokladu.krZtrata', //Kurzový rozdíl ztráta
  zbytekNaklad = 'typDokladu.zbytekNaklad', //Zbytek náklad
  zbytekVynos = 'typDokladu.zbytekVynos', //Zbytek výnos
}

export enum AFTypInternihoDokladuRazeniProTiskK {
  poradi = 'razeniProTisk.poradi', //Podle pořadí
  nazev = 'razeniProTisk.nazev', //Podle názvu
  kod = 'razeniProTisk.kod', //Podle kódu
}


export class AFTypInternihoDokladu extends AFEntity {

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

    // Je účetní (db: Ucetni) - Doklad je účetní)
    ucetni?: boolean

    // Druh (db: TypDoklK) - Druh)
    typDoklK?: any

    // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
    popisDoklad?: string

    // Dokladová řada (db: IdRadyPrijem) - Dokladová řada)
    radaPrijem?: AFRadaInternihoDokladu

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Účet základu MD (db: IdPrimUcet) - základu Má Dáti)
    primUcet?: AFUcet

    // Předpis zaúčtování (db: IdTypUcOpP) - Předpis zaúčtování)
    typUcOpPrijem?: AFPredpisZauctovani

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

    // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
    emailTxt?: string

    // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
    clenKonVykDph?: AFCleneniKontrolniHlaseni

    // Šablona e-mail (db: IdSablonaMail) - Šablona e-mail)
    sablonaMail?: AFSablonaMail


    // Automatický tisk (type: AUTOTISK) - autoTisky)
    autoTisky?: Promise<AFAutotisk[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}