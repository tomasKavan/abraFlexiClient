import { AFEntity } from '../AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFAdresar } from './AFAdresar'
import { AFCenikovaSkupina } from './AFCenikovaSkupina'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFCenik } from './AFCenik'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'

export enum AFCenovaUrovenTypCenyVychoziK {
  nakCena = 'typCenyVychozi.nakCena', //nákupní cena
  zaklCena = 'typCenyVychozi.zaklCena', //prodejní cena
}

export enum AFCenovaUrovenTypVypCenyK {
  marze = 'typVypCeny.marze', //marže
  rabat = 'typVypCeny.rabat', //rabat
  sleva = 'typVypCeny.sleva', //sleva
  neuveden = 'typVypCeny.neuveden', //neuveden
}

export enum AFCenovaUrovenTypCenyVychozi25K {
  nakCena = 'typCenyVychozi.nakCena', //nákupní cena
  zaklCena = 'typCenyVychozi.zaklCena', //prodejní cena
}

export enum AFCenovaUrovenTypVypCeny25K {
  marze = 'typVypCeny.marze', //marže
  rabat = 'typVypCeny.rabat', //rabat
  sleva = 'typVypCeny.sleva', //sleva
  neuveden = 'typVypCeny.neuveden', //neuveden
}

export enum AFCenovaUrovenZaokrJakK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFCenovaUrovenZaokrNaK {
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


export class AFCenovaUroven extends AFEntity {

    // ID (db: IdCenHlad) - ID)
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

    // Dočasnost (db: Docasnost) - cenová úroveň je dočasná)
    docasnost?: boolean

    // Platnost od data (db: PlatiOdData) - Platnost od data)
    platiOdData?: Date

    // Platnost do data (db: PlatiDoData) - Platnost do data)
    platiDoData?: Date

    // Výchozí cena (db: TypCenyVychoziK) - Výchozí cena)
    typCenyVychoziK?: any

    // Způsob výpočtu (db: TypVypCenyK) - Způsob výpočtu)
    typVypCenyK?: any

    // Marže / Rabat / Sleva [%] (db: ProcZakl) - Marže / Rabat / Sleva [%])
    procZakl?: Big

    // Výchozí cena pro množ. slevy (db: TypCenyVychozi25K) - Výchozí cena)
    typCenyVychozi25K?: any

    // Způsob výpočtu pro množ. slevy (db: TypVypCeny25K) - Způsob výpočtu)
    typVypCeny25K?: any

    // Limit MJ 2 (db: LimMnoz2) - Množ. limit 2)
    limMnoz2?: Big

    // Limit MJ 3 (db: LimMnoz3) - Množ. limit 3)
    limMnoz3?: Big

    // Limit MJ 4 (db: LimMnoz4) - Množ. limit 4)
    limMnoz4?: Big

    // Limit MJ 5 (db: LimMnoz5) - Množ. limit 5)
    limMnoz5?: Big

    // %2 (db: Procento2) - % 2)
    procento2?: Big

    // %3 (db: Procento3) - %3)
    procento3?: Big

    // %4 (db: Procento4) - %4)
    procento4?: Big

    // %5 (db: Procento5) - %5)
    procento5?: Big

    // Ručně vybrat (db: RucneVybrat) - Ručně vybrat)
    rucneVybrat?: boolean

    // Způsob zaokr. ceny (db: ZaokrJakK) - Způsob)
    zaokrJakK?: any

    // Řád zaokr. ceny (db: ZaokrNaK) - Řád)
    zaokrNaK?: any

    // Pro všechny skupiny zboží (db: VsechnySkupZboz) - Pro všechny skupiny zboží)
    vsechnySkupZboz?: boolean

    // Platí pro všechny firmy (db: VsechnyFirmy) - Platí pro všechny firmy)
    vsechnyFirmy?: boolean

    // Neaplikovat slevu z dokladu (db: ZakazSlevaDokl) - Neaplikovat slevu z dokladu)
    zakazSlevaDokl?: boolean

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko


    // Adresář (type: ADRESAR) - firmy)
    firmy?: Promise<AFAdresar[]>

    // Ceníkové skupiny (type: CENIKOVA_SKUPINA) - skupinyCen)
    skupinyCen?: Promise<AFCenikovaSkupina[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Ceníky (type: CENIK) - ceniky)
    ceniky?: Promise<AFCenik[]>

    // Skupiny zboží (type: SKUPINA_ZBOZI) - skupinyZbozi)
    skupinyZbozi?: Promise<AFSkupinaZbozi[]>

}