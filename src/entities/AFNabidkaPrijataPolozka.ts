import { AFEntity } from '../AFEntity'
import { AFSklad } from './AFSklad'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFZakazka } from './AFZakazka'
import { AFAdresar } from './AFAdresar'
import { AFCenik } from './AFCenik'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSazbaDph } from './AFSazbaDph'
import { AFNabidkaPrijata } from './AFNabidkaPrijata'
import { AFNabidkaPrijataPolozka } from './AFNabidkaPrijataPolozka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFNabidkaPrijataPolozkaTypPolozkyK {
  obecny = 'typPolozky.obecny', //Položka s cenou a množstvím
  katalog = 'typPolozky.katalog', //Položka z ceníku
  text = 'typPolozky.text', //Textový řádek
}

export enum AFNabidkaPrijataPolozkaTypCenyDphK {
  bezDph = 'typCeny.bezDph', //bez DPH
  sDph = 'typCeny.sDph', //včetně DPH
}

export enum AFNabidkaPrijataPolozkaTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}


export class AFNabidkaPrijataPolozka extends AFEntity {

    // ID (db: IdPolObch) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Označení (db: Kod) - Označení)
    kod?: string

    // EAN (db: EanKod) - EAN)
    eanKod?: string

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

    // Balení (db: BaleniId) - Balení)
    baleniId?: number

    // Počet balení (db: MnozBaleni) - Počet balení)
    mnozBaleni?: Big

    // Množství (db: MnozMj) - Množství)
    mnozMj?: Big

    // Typ ceny (db: TypCenyDphK) - Typ ceny)
    typCenyDphK?: any

    // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
    typSzbDphK?: any

    // DPH [%] (db: SzbDph) - DPH [%])
    szbDph?: Big

    // Cena za MJ (db: CenaMj) - Cena za MJ)
    cenaMj?: Big

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

    // Objem (db: Objem) - Objem)
    objem?: Big

    // Cen. jednotka (db: CenJednotka) - Cen. jednotka)
    cenJednotka?: Big

    // Auto. pol. (db: Autogen) - Autogen)
    autogen?: boolean

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Datum vyst. (db: DatVyst) - Vystaveno)
    datVyst?: Date

    // Kopírovat zakázku (db: KopZakazku) - Kopírovat zakázku)
    kopZakazku?: boolean

    // Kopírovat středisko (db: KopStred) - Kopírovat středisko)
    kopStred?: boolean

    // Kopírovat činnost (db: KopCinnost) - Kopírovat činnost)
    kopCinnost?: boolean

    // Kopírovat štítky (db: KopKlice) - Kopírovat štítky)
    kopKlice?: boolean

    // Storno (db: Storno) - Storno)
    storno?: boolean

    // Storno položky (db: StornoPol) - Storno položky)
    stornoPol?: boolean

    // Sklad (db: IdBspSkl) - Sklad)
    sklad?: AFSklad

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Dodavatel (db: IdFirmy) - Dodavatel)
    dodavatel?: AFAdresar

    // Kód z ceníku (db: IdCenik) - Kód z ceníku)
    cenik?: AFCenik

    // MJ (db: IdMj) - MJ)
    mj?: AFMernaJednotka

    // MJ objemu (db: IdMjObjem) - MJ objemu)
    mjObjem?: AFMernaJednotka

    // Sazba DPH (db: IdSazbyDph) - Sazba DPH)
    sazbaDph?: AFSazbaDph

    // Zdrojová položka objednávky (db: IdPolObchZdroj) - Zdrojová položka objednávky)
    idPolObchZdroj?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Stav skladu (db: undefined) - Stav skladu)
    stavSkladu?: Big

    // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
    doklObch?: AFNabidkaPrijata

    // Poplatek k položce (db: IdPolObchPoplatek) - Poplatek k položce)
    poplatekParentPolObch?: AFNabidkaPrijataPolozka

    // Termín (db: DatTermin) - Termín)
    datTermin?: Date

    // Kopírovat termín (db: KopDatTermin) - Kopírovat termín)
    kopDatTermin?: boolean


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}