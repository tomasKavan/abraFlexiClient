import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFMena } from './AFMena'
import { AFUcetniOsnova } from './AFUcetniOsnova'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFUcetTypUctuK {
  rozvahovy = 'typUctu.rozvahovy', //rozvahový
  vysledkovy = 'typUctu.vysledkovy', //výsledkový
  podrozvahovy = 'typUctu.podrozvahovy', //podrozvahový
  zaverkovy = 'typUctu.zaverkovy', //závěrkový
  vnitropodnikovy = 'typUctu.vnitropodnikovy', //vnitropodnikový
}

export enum AFUcetDruhUctuK {
  aktivni = 'druhUctu.aktivni', //aktivní
  aktpasvy = 'druhUctu.aktpasvy', //aktivní/pasivní (dle výsledku)
  pasivni = 'druhUctu.pasivni', //pasivní
  pasivhvy = 'druhUctu.pasivhvy', //pasivní - h. výsledek
  naklady = 'druhUctu.naklady', //náklady
  vynosy = 'druhUctu.vynosy', //výnosy
  otevknih = 'druhUctu.otevknih', //otevření knihy
  uzavknih = 'druhUctu.uzavknih', //uzavření knihy
  prhosvys = 'druhUctu.prhosvys', //převod hospodářského výsledku
}


export class AFUcet extends AFEntity {

    // ID (db: IdUcet) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Účet (db: Kod) - Číslo účtu)
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

    // Platí od (db: IdUcetObdobiOd) - Platí od)
    ucetObdobiOd?: AFUcetniObdobi

    // Platí do (db: IdUcetObdobiDo) - Platí do)
    ucetObdobiDo?: AFUcetniObdobi

    // Daňový (db: Danovy) - Daňový)
    danovy?: boolean

    // Saldo (db: Saldo) - Saldo)
    saldo?: boolean

    // Typ účtu (db: TypUctuK) - Typ účtu)
    typUctuK?: any

    // Druh účtu (db: DruhUctuK) - Druh účtu)
    druhUctuK?: any

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Syntetický účet (db: IdStdUcet) - Syntetický účet)
    stdUcet?: AFUcetniOsnova

    // Typ organizace (db: IdTypOrg) - Typ organizace)
    typOrganizace?: AFTypOrganizace


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}