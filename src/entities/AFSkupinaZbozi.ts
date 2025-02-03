import { AFEntity } from '../AFEntity'
import { AFUcet } from './AFUcet'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSkupinaZboziTypCenyDphK {
  bezDph = 'typCeny.bezDph', //bez DPH
  sDph = 'typCeny.sDph', //včetně DPH
}

export enum AFSkupinaZboziTypCenyVychoziK {
  nakCena = 'typCenyVychozi.nakCena', //nákupní cena
  zadna = 'typCenyVychozi.zadna', //žádná cena
}

export enum AFSkupinaZboziTypVypCenyK {
  marze = 'typVypCeny.marze', //marže
  rabat = 'typVypCeny.rabat', //rabat
}

export enum AFSkupinaZboziTypCenyVychozi25K {
  nakCena = 'typCenyVychozi.nakCena', //nákupní cena
  zaklCena = 'typCenyVychozi.zaklCena', //prodejní cena
}

export enum AFSkupinaZboziTypVypCeny25K {
  marze = 'typVypCeny.marze', //marže
  rabat = 'typVypCeny.rabat', //rabat
  sleva = 'typVypCeny.sleva', //sleva
  neuveden = 'typVypCeny.neuveden', //neuveden
}

export enum AFSkupinaZboziZaokrJakK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFSkupinaZboziZaokrNaK {
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


export class AFSkupinaZbozi extends AFEntity {

    // ID (db: IdSkupZboz) - ID)
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

    // Typ ceny (db: TypCenyDphK) - Typ ceny)
    typCenyDphK?: any

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

    // Způsob zaokr. ceny (db: ZaokrJakK) - Způsob)
    zaokrJakK?: any

    // Řád zaokr. ceny (db: ZaokrNaK) - Řád)
    zaokrNaK?: any

    // Hlídat minimální marži (db: HlidatMinMarzi) - Min. marže [%])
    hlidatMinMarzi?: boolean

    // Minimální marže (db: MinMarze) - Minimální marže)
    minMarze?: Big

    // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
    workFlow?: boolean

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // účet přijaté f. (db: IdProtiUcetPfa) - pro přijaté faktury / pokladna - výdej)
    ucetProtiPfa?: AFUcet

    // účet vydané f. (db: IdProtiUcetVfa) - pro vydané faktury / pokladna - příjem)
    ucetProtiVfa?: AFUcet

    // účet skl. - P (db: IdProtiUcetSklP) - pro příjem na sklad)
    ucetProtiSklp?: AFUcet

    // účet skl. - V k faktuře (db: IdProtiUcetSklV) - pro výdejku k faktuře)
    ucetProtiSklv?: AFUcet

    // účet skl. - holý V (db: IdProtiUcetSklHolyV) - pro holou výdejku)
    ucetProtiSklHolyv?: AFUcet

    // účet skl. - převodka V (db: IdProtiUcetSklPrevV) - pro převodku výdej)
    ucetProtiSklPrevv?: AFUcet

    // Typ organizace (db: IdTypOrg) - Typ organizace)
    typOrganizace?: AFTypOrganizace


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}