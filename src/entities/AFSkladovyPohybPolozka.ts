import { AFEntity } from '../AFEntity'
import { AFSklad } from './AFSklad'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFAdresar } from './AFAdresar'
import { AFCenik } from './AFCenik'
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFSkladovaKarta } from './AFSkladovaKarta'
import { AFVyrobniCislo } from './AFVyrobniCislo'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSkladovyPohybPolozkaTypCenyDphK {
  bezDph = 'typCeny.bezDph', //bez DPH
  sDph = 'typCeny.sDph', //včetně DPH
}

export enum AFSkladovyPohybPolozkaTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}


export class AFSkladovyPohybPolozka extends AFEntity {

    // ID (db: IdPolSklad) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Úč. pol. (db: Ucetni) - Položka je účetní)
    ucetni?: boolean

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

    // Příjem MJ (db: undefined) - Příjem MJ)
    mnozMjPrijem?: Big

    // Výdej MJ (db: undefined) - Výdej MJ)
    mnozMjVydej?: Big

    // Typ ceny (db: TypCenyDphK) - Typ ceny)
    typCenyDphK?: any

    // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
    typSzbDphK?: any

    // Cena za MJ (db: CenaMj) - Cena za MJ)
    cenaMj?: Big

    // Základ [Kč] (db: SumZkl) - Základ [Kč])
    sumZkl?: Big

    // Celkem [Kč] (db: sumZkl + sumDph) - Celkem [Kč])
    sumCelkem?: Big

    // Základ [měna] (db: SumZklMen) - Základ [měna])
    sumZklMen?: Big

    // Celkem [měna] (db: sumZklMen + sumDphMen) - Celkem [měna])
    sumCelkemMen?: Big

    // Objem (db: Objem) - Objem)
    objem?: Big

    // Cen. jednotka (db: CenJednotka) - Cen. jednotka)
    cenJednotka?: Big

    // Prodejní cena (db: CenaMjProdej) - Prodejní cena)
    cenaMjProdej?: Big

    // Ceníková cena [Kč] (db: CenaMjCenikTuz) - Ceníková cena [Kč])
    cenaMjCenikTuz?: Big

    // Šarže (db: Sarze) - Šarže)
    sarze?: string

    // Expirace (db: Expirace) - Expirace)
    expirace?: Date

    // Trvanlivost (db: DatTrvan) - Trvanlivost)
    datTrvan?: Date

    // Datum výroby (db: DatVyroby) - Datum výroby)
    datVyroby?: Date

    // Požadavek MJ (db: MnozMjPlan) - Požadavek MJ)
    mnozMjPlan?: Big

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

    // Kopírovat dat. zaúčt. (db: KopDatUcto) - Kopírovat dat. zaúčt.)
    kopDatUcto?: boolean

    // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
    datUcto?: Date

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

    // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Účet MD zákl. (db: IdZklMdUcet) - Má Dáti základu)
    zklMdUcet?: AFUcet

    // Účet Dal zákl. (db: IdZklDalUcet) - Dal základu)
    zklDalUcet?: AFUcet

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Dodavatel (db: IdFirmy) - Dodavatel)
    dodavatel?: AFAdresar

    // Kód z ceníku (db: IdCenik) - Kód z ceníku)
    cenik?: AFCenik

    // Cenová úroveň (db: IdCenHlad) - Cenová úroveň)
    cenHlad?: AFCenovaUroven

    // MJ (db: IdMj) - MJ)
    mj?: AFMernaJednotka

    // MJ objemu (db: IdMjObjem) - MJ objemu)
    mjObjem?: AFMernaJednotka

    // Výr. čísla OK (db: VyrobniCislaOk) - Výr. čísla OK)
    vyrobniCislaOk?: boolean

    // Zdrojová položka objednávky (db: IdPolObchZdroj) - Zdrojová položka objednávky)
    idPolObchZdroj?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Zdroj (db: Source) - Zdroj)
    source?: string

    // Marže (db: undefined) - Marže)
    marze?: Big

    // Min. marže (db: undefined) - Min. marže)
    minMarze?: Big

    // Stav skladu (db: undefined) - Stav skladu)
    stavSkladu?: Big

    // Rezervováno (db: undefined) - Rezervováno)
    rezervovano?: Big

    // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
    doklSklad?: AFSkladovyPohyb

    // Skladová karta (db: IdKarty) - Skladová karta)
    skladovaKarta?: AFSkladovaKarta

    // Převodka (db: Prevodka) - Převodka)
    prevodka?: boolean

    // Zdroj pro faktury (db: ZdrojProFak) - Zdroj pro faktury)
    zdrojProFak?: boolean

    // Cena neskladových částí (db: CenaMjNeskl) - Cena neskladových částí)
    cenaMjNeskl?: Big

    // Cena skladových částí (db: CenaMjSkl) - Cena skladových částí)
    cenaMjSkl?: Big

    // Ceny zadány ručně (db: CenyRucne) - Ceny zadány ručně)
    cenyRucne?: boolean

    // Cena pořízení (db: CenaMjPoriz) - Cena pořízení)
    cenaMjPoriz?: Big

    // Vedlejší náklady (db: CenaMjNakl) - Vedlejší náklady)
    cenaMjNakl?: Big


    // Výrobní čísla (type: VYROBNI_CISLA) - vyrobniCislaVydana)
    vyrobniCislaVydana?: Promise<AFVyrobniCislo[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Výrobní čísla (type: VYROBNI_CISLA) - vyrobniCislaPrijata)
    vyrobniCislaPrijata?: Promise<AFVyrobniCislo[]>

}