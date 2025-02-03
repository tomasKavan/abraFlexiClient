import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFFormaDopravyFormaDopravyK {
  ppl = 'formaDopravy.ppl', //PPL
  ceskaPostaM = 'formaDopravy.ceskaPostaM', //Česká pošta (Soubor M)
  ceskaPostaPO = 'formaDopravy.ceskaPostaPO', //Česká pošta (Podání online)
  geis = 'formaDopravy.geis', //Geis
}


export class AFFormaDopravy extends AFEntity {

    // ID (db: IdFormaDopravy) - ID)
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

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // Exportovat na E-Shop (db: ExportEshop) - Exportovat na E-Shop)
    exportEshop?: boolean

    // Vytvářet čísla balíků (db: CisBal) - Vytvářet čísla balíků)
    cisBal?: boolean

    // Čís.prefix (db: CisBalPrefix) - Tvar čísla - začátek)
    cisBalPrefix?: string

    // Čís.postfix (db: CisBalPostfix) - Ukončení)
    cisBalPostfix?: string

    // Číslic (db: CisBalCislic) - Číslic)
    cisBalCislic?: number

    // Čís. od (db: CisBalOd) - Vytvářet od)
    cisBalOd?: number

    // Čís. do (db: CisBalDo) - do)
    cisBalDo?: number

    // Aktuální číslo (db: CisBalAkt) - Aktuální číslo)
    cisBalAkt?: number

    // Čís.bud. od (db: CisBalOdBud) - Poté vytvářet od)
    cisBalOdBud?: number

    // Čís.bud. do (db: CisBalDoBud) - do)
    cisBalDoBud?: number

    // Kód zákazníka (db: CisBalKodZak) - Kód zákazníka)
    cisBalKodZak?: string

    // Depo zákazníka (db: CisBalDepo) - Depo zákazníka)
    cisBalDepo?: string

    // Formát exportu (db: FormaDopravyK) - Formát exportu)
    formaDopravyK?: any

    // Speciální služby (db: SpecialniSluzby) - Speciální služby)
    specialniSluzby?: string

    // ID/Typ zákazníka (db: CisBalIdZak) - ID/Typ zákazníka)
    cisBalIdZak?: string

    // Pořadové číslo souboru (db: PoradoveCislo) - Pořadové číslo souboru)
    poradoveCislo?: number

    // Kontrolní číslo (db: CisBalKonCis) - Kontrolní číslo)
    cisBalKonCis?: boolean

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Dopravné (db: IdDopravne) - Dopravné)
    dopravne?: AFCenik


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}