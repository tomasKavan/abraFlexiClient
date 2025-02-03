import { AFEntity } from '../AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFCleneniDph } from './AFCleneniDph'
import { AFSazbaDph } from './AFSazbaDph'
import { AFBanka } from './AFBanka'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFPreneseniDph } from './AFPreneseniDph'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFBankaPolozkaTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}


export class AFBankaPolozka extends AFEntity {

    // ID (db: IdPolInt) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Úč. pol. (db: Ucetni) - Položka je účetní)
    ucetni?: boolean

    // Modul (db: Modul) - Modul)
    modul?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Pořadí (db: CisRad) - Pořadí)
    cisRad?: number

    // Typ položky (db: TypPolozkyK) - Typ položky)
    typPolozkyK?: any

    // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
    typSzbDphK?: any

    // DPH [%] (db: SzbDph) - DPH [%])
    szbDph?: Big

    // Základ [Kč] (db: SumZkl) - Základ [Kč])
    sumZkl?: Big

    // DPH [Kč] (db: SumDph) - DPH [Kč])
    sumDph?: Big

    // Celkem [Kč] (db: sumZkl + sumDph) - Celkem [Kč])
    sumCelkem?: Big

    // Základ [měna] (db: SumZklMen) - Základ [měna])
    sumZklMen?: Big

    // DPH [měna] (db: SumDphMen) - DPH [měna])
    sumDphMen?: Big

    // Celkem [měna] (db: sumZklMen + sumDphMen) - Celkem [měna])
    sumCelkemMen?: Big

    // Auto. pol. (db: Autogen) - Autogen)
    autogen?: boolean

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Datum vyst. (db: DatVyst) - Vystaveno)
    datVyst?: Date

    // Kopírovat MD účet základu (db: KopZklMdUcet) - Kopírovat MD účet základu)
    kopZklMdUcet?: boolean

    // Kopírovat D účet základu (db: KopZklDalUcet) - Kopírovat D účet základu)
    kopZklDalUcet?: boolean

    // Kopírovat MD účet DPH (db: KopDphMdUcet) - Kopírovat MD účet DPH)
    kopDphMdUcet?: boolean

    // Kopírovat D účet DPH (db: KopDphDalUcet) - Kopírovat D účet DPH)
    kopDphDalUcet?: boolean

    // Kopírovat předpis (db: KopTypUcOp) - Kopírovat předpis)
    kopTypUcOp?: boolean

    // Kopírovat zakázku (db: KopZakazku) - Kopírovat zakázku)
    kopZakazku?: boolean

    // Kopírovat středisko (db: KopStred) - Kopírovat středisko)
    kopStred?: boolean

    // Kopírovat činnost (db: KopCinnost) - Kopírovat činnost)
    kopCinnost?: boolean

    // Kopírovat štítky (db: KopKlice) - Kopírovat štítky)
    kopKlice?: boolean

    // Kopírovat řádek DPH (db: KopClenDph) - Kopírovat řádek DPH z dokladu)
    kopClenDph?: boolean

    // Kopírovat dat. zaúčt. (db: KopDatUcto) - Kopírovat dat. zaúčt.)
    kopDatUcto?: boolean

    // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
    datUcto?: Date

    // Storno (db: Storno) - Storno)
    storno?: boolean

    // Storno položky (db: StornoPol) - Storno položky)
    stornoPol?: boolean

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Účet MD zákl. (db: IdZklMdUcet) - Má Dáti základu)
    zklMdUcet?: AFUcet

    // Účet Dal zákl. (db: IdZklDalUcet) - Dal základu)
    zklDalUcet?: AFUcet

    // Účet MD DPH (db: IdDphMdUcet) - Má dáti DPH)
    dphMdUcet?: AFUcet

    // Účet Dal DPH (db: IdDphDalUcet) - Dal DPH)
    dphDalUcet?: AFUcet

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Řádky DPH (db: IdClenDph) - Řádky DPH)
    clenDph?: AFCleneniDph

    // Sazba DPH (db: IdSazbyDph) - Sazba DPH)
    sazbaDph?: AFSazbaDph

    // Doklad (db: IdDoklInt) - Bankovní doklad)
    doklInt?: AFBanka

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
    clenKonVykDph?: AFCleneniKontrolniHlaseni

    // Kopírovat řádek kon. hl. DPH (db: KopClenKonVykDph) - Kopírovat řádek kontrolního hlášení DPH z dokladu)
    kopClenKonVykDph?: boolean

    // Kód přenesení DPH (db: IdDphPren) - Kód přenesení DPH)
    dphPren?: AFPreneseniDph

    // Štítky (db: undefined) - Štítky)
    stitky?: string


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}