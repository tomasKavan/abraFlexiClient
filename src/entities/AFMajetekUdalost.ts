import { AFEntity } from '../AFEntity'
import { AFMajetek } from './AFMajetek'
import { AFStredisko } from './AFStredisko'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFMajetekUdalostTypUdalostiK {
  zarazeni = 'typUdal.zarazeni', //Zařazení
  uplVyr = 'typUdal.uplVyr', //Úplné vyřazení
  casVyr = 'typUdal.casVyr', //Částečné vyřazení
  techZhod = 'typUdal.techZhod', //Technické zhodnocení
  zmenaVstupniCeny = 'typUdal.zmenaVstupniCeny', //Změna vstupní ceny
  prerOdpDan = 'typUdal.prerOdpDan', //Přerušení daňových odpisů
  prerOdpUcet = 'typUdal.prerOdpUcet', //Přerušení účetních odpisů
  zahOdpDan = 'typUdal.zahOdpDan', //Opětovné zahájení daňových odpisů
  zahOdpUcet = 'typUdal.zahOdpUcet', //Opětovné zahájení účetních odpisů
  rozdilCenyAZustatku = 'typUdal.rozdilCenyAZustatku', //Rozdíl prodejní ceny a zůstatku
  uzivatelska = 'typUdal.uzivatelska', //Uživatelská událost
}


export class AFMajetekUdalost extends AFEntity {

    // ID (db: IdUdalosti) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Je účetní (db: Ucetni) - Doklad je účetní)
    ucetni?: boolean

    // Typ události (db: TypUdalostiK) - Typ události)
    typUdalostiK?: any

    // Datum vyst. (db: DatVyst) - Vystaveno)
    datVyst?: Date

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Částka [Kč] (db: SumZkl) - Částka [Kč])
    sumZkl?: Big

    // Základ [měna] (db: SumZklMen) - Základ [měna])
    sumZklMen?: Big

    // Částka účetní [Kč] (db: SumDph) - Částka účetní [Kč])
    sumDph?: Big

    // DPH [měna] (db: SumDphMen) - DPH [měna])
    sumDphMen?: Big

    // Zámek (db: Zamek) - Zámek)
    zamek?: boolean

    // Číslo dokladu (db: Kod) - Číslo dokladu)
    kod?: string

    // Modul (db: Modul) - Modul)
    modul?: string

    // Prodl. úč. odp. (db: ZmenaDobyOdpis) - Prodlouž. účet. odpisů o)
    zmenaDobyOdpis?: number

    // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
    datUcto?: Date

    // Uživ. změna zůst. (db: Zmena) - Uživatelská změna zůstatku)
    zmena?: boolean

    // Částka daňová [Kč] (db: SumDphDanove) - Částka daňová [Kč])
    sumDphDanove?: Big

    // Majetek (db: IdMajetku) - Majetek)
    majetek?: AFMajetek

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Úč.MD zůst. (db: IdDphMdUcet) - Účet MD zůstatku)
    dphMdUcet?: AFUcet

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Účet MD události (db: IdZklMdUcet) - Účet MD události)
    zklMdUcet?: AFUcet

    // Účet DAL události (db: IdZklDalUcet) - Účet DAL události)
    zklDalUcet?: AFUcet

    // Úč.DAL zůst. (db: IdDphDalUcet) - Účet DAL zůstatku)
    dphDalUcet?: AFUcet


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}