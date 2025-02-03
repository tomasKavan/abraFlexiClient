import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFRadaObjednavkyPrijate } from './AFRadaObjednavkyPrijate'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFMena } from './AFMena'
import { AFStatDph } from './AFStatDph'
import { AFSklad } from './AFSklad'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypObjednavkyPrijateZaokrJakSumK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFTypObjednavkyPrijateZaokrNaSumK {
  zadne = 'zaokrNa.zadne', //nezaokrouhlovat
  tisiciny = 'zaokrNa.tisiciny', //0.001
  setiny = 'zaokrNa.setiny', //0.01
  5setiny = 'zaokrNa.5setiny', //0.05
  desetiny = 'zaokrNa.desetiny', //0.1
  5desetiny = 'zaokrNa.5desetiny', //0.5
  jednotky = 'zaokrNa.jednotky', //1
  5jednotky = 'zaokrNa.5jednotky', //5
  desitky = 'zaokrNa.desitky', //10
  stovky = 'zaokrNa.stovky', //100
  tisice = 'zaokrNa.tisice', //1000
}

export enum AFTypObjednavkyPrijateZaokrJakDphK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFTypObjednavkyPrijateZaokrNaDphK {
  zadne = 'zaokrNa.zadne', //nezaokrouhlovat
  tisiciny = 'zaokrNa.tisiciny', //0.001
  setiny = 'zaokrNa.setiny', //0.01
  5setiny = 'zaokrNa.5setiny', //0.05
  desetiny = 'zaokrNa.desetiny', //0.1
  5desetiny = 'zaokrNa.5desetiny', //0.5
  jednotky = 'zaokrNa.jednotky', //1
  5jednotky = 'zaokrNa.5jednotky', //5
  desitky = 'zaokrNa.desitky', //10
  stovky = 'zaokrNa.stovky', //100
  tisice = 'zaokrNa.tisice', //1000
}

export enum AFTypObjednavkyPrijateMetodaZaokrDoklK {
  zklDph = 'metodaZaokr.zklDph', //do základu a DPH
  0sazba = 'metodaZaokr.0sazba', //do 0 sazby
  individ = 'metodaZaokr.individ', //individuálně
}

export enum AFTypObjednavkyPrijateRazeniProTiskK {
  poradi = 'razeniProTisk.poradi', //Podle pořadí
  nazev = 'razeniProTisk.nazev', //Podle názvu
  kod = 'razeniProTisk.kod', //Podle kódu
}


export class AFTypObjednavkyPrijate extends AFEntity {

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

    // Sleva [%] (db: SlevaDokl) - Sleva [%])
    slevaDokl?: Big

    // Způsob zaokr. Celkem (db: ZaokrJakSumK) - Celkem (způsob))
    zaokrJakSumK?: any

    // Řád zaokr. Celkem (db: ZaokrNaSumK) - Celkem (řády))
    zaokrNaSumK?: any

    // Způsob zaokr. DPH (db: ZaokrJakDphK) - DPH (způsob))
    zaokrJakDphK?: any

    // Řád zaokr. DPH (db: ZaokrNaDphK) - DPH (řády))
    zaokrNaDphK?: any

    // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
    metodaZaokrDoklK?: any

    // Korekce DPH (db: VytvaretKorPol) - Korekce DPH)
    vytvaretKorPol?: boolean

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady

    // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
    doprava?: string

    // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
    popisDoklad?: string

    // Úvodní text (tiskne se před položkami) (db: UvodTxt) - Úvodní text (tiskne se před položkami))
    uvodTxt?: string

    // Závěrečný text (tiskne se za položkami) (db: ZavTxt) - Závěrečný text (tiskne se za položkami))
    zavTxt?: string

    // Dokladová řada (db: IdRadyPrijem) - Dokladová řada)
    radaPrijem?: AFRadaObjednavkyPrijate

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Bankovní účet (db: IdBspBan) - Bankovní účet)
    bspBan?: AFBankovniUcet

    // Typ výdejky (db: IdTypProtiDokladuVydej) - Typ výdejky)
    typProtiDokladuVydej?: AFTypSkladovyPohyb

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

    // Fakturovat souhrnně (db: FaktSouhrn) - Fakturovat souhrnně)
    faktSouhrn?: boolean

    // Fakturovat automaticky (db: FaktAuto) - Fakturovat automaticky)
    faktAuto?: boolean

    // Sklad (db: IdBspSkl) - Sklad)
    bspSkl?: AFSklad

    // Typ vydané faktury (db: IdTypDoklFak) - Typ vydané faktury)
    typDoklFak?: AFTypFakturyVydane

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