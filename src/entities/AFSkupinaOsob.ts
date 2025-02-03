import { AFEntity } from '../AFEntity'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFTypDokladu } from './AFTypDokladu'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSkupinaOsobTydenPracDobaK {
  standard = 'tydenPracDoba.standard', //Jednosměnný provoz (40 hodin)
  dul = 'tydenPracDoba.dul', //Pracující v podzemí (37,5 hodin)
  trismenny = 'tydenPracDoba.trismenny', //Třísměnný provoz (37,5 hodin)
  dvousmenny = 'tydenPracDoba.dvousmenny', //Dvousměnný provoz (38,75 hodin)
}


export class AFSkupinaOsob extends AFEntity {

    // ID (db: IdSkupOsob) - ID)
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
    platiOd?: Date

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: Date

    // Tydenní pracovní doba (db: TydenPracDobaK) - Tydenní pracovní doba)
    tydenPracDobaK?: any

    // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
    workFlow?: boolean

    // Typ hrubé mzdy (db: IdTdIntHruba) - Typ hrubé mzdy)
    tdIntHruba?: AFTypInternihoDokladu

    // Typ náhrady mzdy (db: IdTdIntNahrad) - Typ náhrady mzdy)
    tdIntNahrad?: AFTypInternihoDokladu

    // Typ pro cestovné do limitu (db: IdTdIntCestDoLim) - do limitu)
    tdIntCestDoLim?: AFTypInternihoDokladu

    // Typ pro cestovné nad limit (db: IdTdIntCestNadLim) - nad limit)
    tdIntCestNadLim?: AFTypDokladu

    // Typ pro strav. paušál do limitu (db: IdTdIntStravPausDoLim) - do limitu)
    tdIntStravPausDoLim?: AFTypInternihoDokladu

    // Typ pro strav. paušál nad limit (db: IdTdIntStravPausNadLim) - nad limit)
    tdIntStravPausNadLim?: AFTypDokladu

    // Typ pro homeoffice do limitu (db: IdTdIntHomeofficeDoLim) - do limitu)
    tdIntHomeofficeDoLim?: AFTypDokladu

    // Typ pro homeoffice nad limit (db: IdTdIntHomeofficeNadLim) - nad limit)
    tdIntHomeofficeNadLim?: AFTypDokladu

    // Př. zaúč. soc. zaměst. (db: IdTuoZavSocZam) - Předpis zaúčtování zaměstnanec)
    tuoZavSocZam?: AFPredpisZauctovani

    // Př. zaúč. soc. firma (db: IdTuoZavSocFir) - Předpis zaúčtování zaměstnavatel)
    tuoZavSocFir?: AFPredpisZauctovani

    // Př. zaúč. zdr. zaměst. (db: IdTuoZavZdrZam) - Předpis zaúčtování - zaměstnanec)
    tuoZavZdrZam?: AFPredpisZauctovani

    // Př. zaúč. zdr. firma (db: IdTuoZavZdrFir) - Předpis zaúčtování - zaměstnavatel)
    tuoZavZdrFir?: AFPredpisZauctovani

    // Předpis zaúčtování daň (db: IdTuoZavDan) - Předpis zaúčtování daň)
    tuoZavDan?: AFPredpisZauctovani

    // Typ pro srážku stravenek (db: IdTdSrazkaStrav) - Typ pro srážku stravenek)
    tdSrazkaStrav?: AFTypDokladu

    // Typ int. dokl. příspěvků (db: IdTdIntPrispevky) - Typ int. dokl. příspěvků)
    tdIntPrispevky?: AFTypDokladu

    // Typ závazku příspěvků (db: IdTdZavPrispevky) - Typ závazku příspěvků)
    tdZavPrispevky?: AFTypDokladu


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}