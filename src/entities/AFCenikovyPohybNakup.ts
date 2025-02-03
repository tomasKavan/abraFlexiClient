import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFSklad } from './AFSklad'
import { AFStredisko } from './AFStredisko'
import { AFMena } from './AFMena'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFZakazka } from './AFZakazka'
import { AFCleneniDph } from './AFCleneniDph'
import { AFCenik } from './AFCenik'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSazbaDph } from './AFSazbaDph'
import { AFCinnost } from './AFCinnost'

export enum AFCenikovyPohybNakupModulK {
  FAP = 'modulUcetni.FAP', //Faktury přijaté
  FAV = 'modulUcetni.FAV', //Faktury vydané
  BAN = 'modulUcetni.BAN', //Banka
  POK = 'modulUcetni.POK', //Pokladna
  SKL = 'modulUcetni.SKL', //Sklad
  INT = 'modulUcetni.INT', //Interní doklady
  PHL = 'modulUcetni.PHL', //Pohledávky
  ZAV = 'modulUcetni.ZAV', //Závazky
  MAJ = 'modulUcetni.MAJ', //Majetek
  LEA = 'modulUcetni.LEA', //Leasing
}

export enum AFCenikovyPohybNakupTypPolozkyK {
  obecny = 'typPolozky.obecny', //Položka s cenou a množstvím
  katalog = 'typPolozky.katalog', //Položka z ceníku
  ucetni = 'typPolozky.ucetni', //Položka pro zaúčtování
  text = 'typPolozky.text', //Textový řádek
}

export enum AFCenikovyPohybNakupTypCenyDphK {
  bezDph = 'typCeny.bezDph', //bez DPH
  sDph = 'typCeny.sDph', //včetně DPH
}

export enum AFCenikovyPohybNakupTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}

export enum AFCenikovyPohybNakupTypVypCenyK {
  marze = 'typVypCeny.marze', //marže
  rabat = 'typVypCeny.rabat', //rabat
  sleva = 'typVypCeny.sleva', //sleva
  neuveden = 'typVypCeny.neuveden', //neuveden
}

export enum AFCenikovyPohybNakupZaokrJakK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFCenikovyPohybNakupZaokrNaK {
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

export enum AFCenikovyPohybNakupObjednatK {
  neobjednat = 'objednat.neobjednat', //Neobjednávat
  objednat = 'objednat.objednat', //Objednat
  objednano = 'objednat.objednano', //Již je objednáno
}


export class AFCenikovyPohybNakup extends AFEntity {

    // ID (db: undefined) - ID)
    idCenikovePohyby?: number

    // Poslední změna (db: undefined) - Poslední změna)
    lastUpdate?: Date

    // ID doklad (db: undefined) - ID doklad)
    idDokl?: number

    // Kód dokladu (db: undefined) - Kód dokladu)
    kodDokl?: string

    // Název modulu (db: undefined) - Název modulu)
    modulK?: any

    // Firma (db: undefined) - Firma)
    firmaDokl?: AFAdresar

    // Je účetní (db: undefined) - Doklad je účetní)
    ucetni?: boolean

    // Modul (db: undefined) - Modul)
    modul?: string

    // Zkratka (db: undefined) - Zkratka)
    kod?: string

    // EAN (db: undefined) - EAN)
    eanKod?: string

    // Název (db: undefined) - Název)
    nazev?: string

    // Název EN (db: undefined) - Název EN)
    nazevA?: string

    // Název DE (db: undefined) - Název DE)
    nazevB?: string

    // Název FR (db: undefined) - Název FR)
    nazevC?: string

    // Pořadí (db: undefined) - Pořadí)
    cisRad?: number

    // Typ položky (db: undefined) - Typ položky)
    typPolozkyK?: any

    // Balení (db: undefined) - Balení)
    baleniId?: number

    // Počet balení (db: undefined) - Počet balení)
    mnozBaleni?: Big

    // Množství (db: undefined) - Množství)
    mnozMj?: Big

    // Typ ceny (db: undefined) - Typ ceny)
    typCenyDphK?: any

    // Sazba DPH (db: undefined) - Sazba DPH)
    typSzbDphK?: any

    // DPH [%] (db: undefined) - DPH [%])
    szbDph?: Big

    // Cena za MJ (db: undefined) - Cena za MJ)
    cenaMj?: Big

    // Sleva položky[%] (db: undefined) - Sleva položky)
    slevaPol?: Big

    // ? sleva hlav. (db: undefined) - uplatnit slevu z dokladu)
    uplSlevaDokl?: boolean

    // Základ [Kč] (db: undefined) - Základ [Kč])
    sumZkl?: Big

    // DPH [Kč] (db: undefined) - DPH [Kč])
    sumDph?: Big

    // Celkem [Kč] (db: undefined) - Celkem [Kč])
    sumCelkem?: Big

    // Základ [měna] (db: undefined) - Základ [měna])
    sumZklMen?: Big

    // DPH [měna] (db: undefined) - DPH [měna])
    sumDphMen?: Big

    // Celkem [měna] (db: undefined) - Celkem [měna])
    sumCelkemMen?: Big

    // Objem (db: undefined) - Objem)
    objem?: Big

    // Cen. jednotka (db: undefined) - Cen. jednotka)
    cenJednotka?: Big

    // Způsob výpočtu (db: undefined) - Způsob výpočtu)
    typVypCenyK?: any

    // Nákupní cena za MJ z ceníku (db: undefined) - Nákupní)
    cenaMjNakup?: Big

    // Prodejní cena za MJ z ceníku (db: undefined) - Základní prodejní)
    cenaMjProdej?: Big

    // Marže / Rabat / Sleva [%] (db: undefined) - Marže / Rabat / Sleva [%])
    procZakl?: Big

    // Množstevní sleva [%] (db: undefined) - Množstevní sleva [%])
    slevaMnoz?: Big

    // Způsob zaokr. ceny (db: undefined) - Způsob)
    zaokrJakK?: any

    // Řád zaokr. ceny (db: undefined) - Řád)
    zaokrNaK?: any

    // Šarže (db: undefined) - Šarže)
    sarze?: string

    // Expirace (db: undefined) - Expirace)
    expirace?: Date

    // Uživatelský stav (db: undefined) - Uživatelský stav)
    stavUzivK?: any

    // Objednat u dod. (db: undefined) - Objednat u dodavatele)
    objednatK?: any

    // Rezervovat na skladě (db: undefined) - Rezervovat na skladě)
    rezervovat?: boolean

    // Plán MJ (db: undefined) - Plánované množství)
    mnozMjPlan?: Big

    // Real. MJ (db: undefined) - Realizované množství)
    mnozMjReal?: Big

    // Zaokr. pol. (db: undefined) - AutoZaokr)
    autoZaokr?: boolean

    // Auto. pol. (db: undefined) - Autogen)
    autogen?: boolean

    // Poznámka (db: undefined) - Poznámka)
    poznam?: string

    // Sleva [%] (db: undefined) - Sleva [%])
    slevaDokl?: Big

    // Datum vyst. (db: undefined) - Vystaveno)
    datVyst?: Date

    // Kopírovat MD účet základu (db: undefined) - Kopírovat MD účet základu)
    kopZklMdUcet?: boolean

    // Kopírovat D účet základu (db: undefined) - Kopírovat D účet základu)
    kopZklDalUcet?: boolean

    // Kopírovat MD účet DPH (db: undefined) - Kopírovat MD účet DPH)
    kopDphMdUcet?: boolean

    // Kopírovat D účet DPH (db: undefined) - Kopírovat D účet DPH)
    kopDphDalUcet?: boolean

    // Kopírovat předpis (db: undefined) - Kopírovat předpis)
    kopTypUcOp?: boolean

    // Kopírovat zakázku (db: undefined) - Kopírovat zakázku)
    kopZakazku?: boolean

    // Kopírovat středisko (db: undefined) - Kopírovat středisko)
    kopStred?: boolean

    // Kopírovat štítky (db: undefined) - Kopírovat štítky)
    kopKlice?: boolean

    // Kopírovat řádek DPH (db: undefined) - Kopírovat řádek DPH z dokladu)
    kopClenDph?: boolean

    // Kopírovat činnost (db: undefined) - Kopírovat činnost)
    kopCinnost?: boolean

    // Datum zaúčt. (db: undefined) - Datum zaúčtování)
    datUcto?: Date

    // Storno (db: undefined) - Storno)
    storno?: boolean

    // Storno položky (db: undefined) - Storno položky)
    stornoPol?: boolean

    // Výr. čísla OK (db: undefined) - Výr. čísla OK)
    vyrobniCislaOk?: boolean

    // Sklad (db: undefined) - Sklad)
    sklad?: AFSklad

    // Středisko (db: undefined) - Středisko)
    stredisko?: AFStredisko

    // Měna (db: undefined) - Měna)
    mena?: AFMena

    // Předpis zaúčtování (db: undefined) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Účet MD zákl. (db: undefined) - Má Dáti základu)
    zklMdUcet?: AFUcet

    // Účet Dal zákl. (db: undefined) - Dal základu)
    zklDalUcet?: AFUcet

    // Účet MD DPH (db: undefined) - Má dáti DPH)
    dphMdUcet?: AFUcet

    // Účet Dal DPH (db: undefined) - Dal DPH)
    dphDalUcet?: AFUcet

    // Cenová úroveň (db: undefined) - Cenová úroveň)
    cenHlad?: AFCenovaUroven

    // Zakázka (db: undefined) - Zakázka)
    zakazka?: AFZakazka

    // Dodavatel (db: undefined) - Dodavatel)
    dodavatel?: AFAdresar

    // Řádky DPH (db: undefined) - Řádky DPH)
    clenDph?: AFCleneniDph

    // Ceník (db: undefined) - Ceník)
    cenik?: AFCenik

    // MJ (db: undefined) - MJ)
    mj?: AFMernaJednotka

    // MJ objemu (db: undefined) - MJ objemu)
    mjObjem?: AFMernaJednotka

    // Sazba DPH (db: undefined) - Sazba DPH)
    sazbaDph?: AFSazbaDph

    // Činnost (db: undefined) - Činnost)
    cinnost?: AFCinnost


}