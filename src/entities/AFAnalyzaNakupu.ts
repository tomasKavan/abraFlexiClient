import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFSkupinaFirem } from './AFSkupinaFirem'
import { AFCenikovaSkupina } from './AFCenikovaSkupina'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFMernaJednotka } from './AFMernaJednotka'


export class AFAnalyzaNakupu extends AFEntity {

    // ID (db: undefined) - ID)
    idPrehledu?: number

    // Zkratka (db: undefined) - Zkratka)
    kod?: string

    // Název (db: undefined) - Název)
    nazev?: string

    // Název EN (db: undefined) - Název EN)
    nazevA?: string

    // Název DE (db: undefined) - Název DE)
    nazevB?: string

    // Název FR (db: undefined) - Název FR)
    nazevC?: string

    // Název firmy nebo jméno osoby (db: undefined) - Název firmy - jméno)
    nazFirmy?: string

    // Celkem MJ (db: undefined) - Celkem MJ)
    sumMnozMj?: Big

    // Celkem bez DPH[Kč] (db: undefined) - Celkem bez DPH[Kč])
    sumSumZkl?: Big

    // Celkem bez DPH před slevou [Kč] (db: undefined) - Celkem bez DPH před slevou [Kč])
    sumSumZklPredSlevou?: Big

    // Prodejní cena [Kč] (db: undefined) - Prodejní cena [Kč])
    sumSumZklProdej?: Big

    // Sleva [Kč] (db: undefined) - Sleva [Kč])
    sumSlevaKc?: Big

    // Sleva [%] (db: undefined) - Sleva [%])
    sumSlevaProc?: Big

    // Prodejní cena z ceníku (db: undefined) - Prodejní cena z ceníku)
    cenaZakl?: Big

    // MJ poslední měsíc (db: undefined) - MJ poslední měsíc)
    sumMnozMj1?: Big

    // MJ měsíc -1 (db: undefined) - MJ měsíc -1)
    sumMnozMj2?: Big

    // MJ měsíc -2 (db: undefined) - MJ měsíc -2)
    sumMnozMj3?: Big

    // MJ měsíc -3 (db: undefined) - MJ měsíc -3)
    sumMnozMj4?: Big

    // MJ měsíc -4 (db: undefined) - MJ měsíc -4)
    sumMnozMj5?: Big

    // MJ měsíc -5 (db: undefined) - MJ měsíc -5)
    sumMnozMj6?: Big

    // MJ měsíc -6 (db: undefined) - MJ měsíc -6)
    sumMnozMj7?: Big

    // MJ měsíc -7 (db: undefined) - MJ měsíc -7)
    sumMnozMj8?: Big

    // MJ měsíc -8 (db: undefined) - MJ měsíc -8)
    sumMnozMj9?: Big

    // MJ měsíc -9 (db: undefined) - MJ měsíc -9)
    sumMnozMj10?: Big

    // MJ měsíc -10 (db: undefined) - MJ měsíc -10)
    sumMnozMj11?: Big

    // MJ měsíc -11 (db: undefined) - MJ měsíc -11)
    sumMnozMj12?: Big

    // [Kč] poslední měsíc (db: undefined) - [Kč] poslední měsíc)
    sumSumZkl1?: Big

    // [Kč] měsíc -1 (db: undefined) - [Kč] měsíc -1)
    sumSumZkl2?: Big

    // [Kč] měsíc -2 (db: undefined) - [Kč] měsíc -2)
    sumSumZkl3?: Big

    // [Kč] měsíc -3 (db: undefined) - [Kč] měsíc -3)
    sumSumZkl4?: Big

    // [Kč] měsíc -4 (db: undefined) - [Kč] měsíc -4)
    sumSumZkl5?: Big

    // [Kč] měsíc -5 (db: undefined) - [Kč] měsíc -5)
    sumSumZkl6?: Big

    // [Kč] měsíc -6 (db: undefined) - [Kč] měsíc -6)
    sumSumZkl7?: Big

    // [Kč] měsíc -7 (db: undefined) - [Kč] měsíc -7)
    sumSumZkl8?: Big

    // [Kč] měsíc -8 (db: undefined) - [Kč] měsíc -8)
    sumSumZkl9?: Big

    // [Kč] měsíc -9 (db: undefined) - [Kč] měsíc -9)
    sumSumZkl10?: Big

    // [Kč] měsíc -10 (db: undefined) - [Kč] měsíc -10)
    sumSumZkl11?: Big

    // [Kč] měsíc -11 (db: undefined) - [Kč] měsíc -11)
    sumSumZkl12?: Big

    // Firma (db: undefined) - Firma)
    adresar?: AFAdresar

    // Ceník (db: undefined) - Ceník)
    cenik?: AFCenik

    // Sklad (db: undefined) - Sklad)
    sklad?: AFSklad

    // Místo určení (db: undefined) - Místo určení)
    mistUrc?: AFMistoUrceni

    // Skupina firem (db: undefined) - Skupina firem)
    skupFir?: AFSkupinaFirem

    // Ceníková skupina (db: undefined) - Ceníková skupina)
    skupCen?: AFCenikovaSkupina

    // Skupina zboží (db: undefined) - Skupina zboží)
    skupZboz?: AFSkupinaZbozi

    // Výrobce (db: undefined) - Výrobce)
    vyrobce?: AFAdresar

    // Středisko (db: undefined) - Středisko)
    stredisko?: AFStredisko

    // Zakázka (db: undefined) - Zakázka)
    zakazka?: AFZakazka

    // MJ (db: undefined) - MJ)
    mj?: AFMernaJednotka

    // Zodpovědná osoba z dokladu (db: undefined) - Zodpovědná osoba z dokladu)
    zodpOsoba?: any

    // Zodpovědná osoba z adresáře (db: undefined) - Zodpovědná osoba z adresáře)
    zodpOsobaAdresar?: any


}