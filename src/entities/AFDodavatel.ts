import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFAdresar } from './AFAdresar'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFMena } from './AFMena'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFDodavatel extends AFEntity {

    // ID (db: IdDodavatel) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Kód zboží/materiálu (db: KodIndi) - Kód zboží/materiálu)
    kodIndi?: string

    // Nákupní cena (db: NakupCena) - Nákupní cena)
    nakupCena?: Big

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Primární (db: Primarni) - primární dodavatel)
    primarni?: boolean

    // Stav skladu (db: StavMJ) - Stav skladu)
    stavMJ?: Big

    // Dodací lhůta (db: DodaciLhuta) - Dodací lhůta)
    dodaciLhuta?: Big

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Limit MJ 2 (db: LimMnoz2) - Množ. limit 2)
    limMnoz2?: Big

    // Limit MJ 3 (db: LimMnoz3) - Množ. limit 3)
    limMnoz3?: Big

    // Limit MJ 4 (db: LimMnoz4) - Množ. limit 4)
    limMnoz4?: Big

    // Limit MJ 5 (db: LimMnoz5) - Množ. limit 5)
    limMnoz5?: Big

    // Nákupní cena 2 (db: NakupCena2) - Nákupní cena 2)
    nakupCena2?: Big

    // Nákupní cena 3 (db: NakupCena3) - Nákupní cena 3)
    nakupCena3?: Big

    // Nákupní cena 4 (db: NakupCena4) - Nákupní cena 4)
    nakupCena4?: Big

    // Nákupní cena 5 (db: NakupCena5) - Nákupní cena 5)
    nakupCena5?: Big

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Firma (db: IdFirmy) - Firma)
    firma?: AFAdresar

    // MJ Dodací lhůty (db: IdMjDodaciLhuta) - MJ Dodací lhůty)
    mjDodaciLhuta?: AFMernaJednotka

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}