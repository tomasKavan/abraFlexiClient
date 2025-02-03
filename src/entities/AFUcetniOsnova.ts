import { AFEntity } from '../AFEntity'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFUcetniOsnovaDruhUctuK {
  aktivni = 'druhUctu.aktivni', //aktivní
  aktpasvo = 'druhUctu.aktpasvo', //aktivní+pasivní (volba)
  aktpasvy = 'druhUctu.aktpasvy', //aktivní/pasivní (dle výsledku)
  pasivni = 'druhUctu.pasivni', //pasivní
  pasivhvy = 'druhUctu.pasivhvy', //pasivní - h. výsledek
  naklady = 'druhUctu.naklady', //náklady
  vynosy = 'druhUctu.vynosy', //výnosy
  otevknih = 'druhUctu.otevknih', //otevření knihy
  uzavknih = 'druhUctu.uzavknih', //uzavření knihy
  prhosvys = 'druhUctu.prhosvys', //převod hospodářského výsledku
}

export enum AFUcetniOsnovaTypUctuK {
  rozvahovy = 'typUctu.rozvahovy', //rozvahový
  vysledkovy = 'typUctu.vysledkovy', //výsledkový
  podrozvahovy = 'typUctu.podrozvahovy', //podrozvahový
  zaverkovy = 'typUctu.zaverkovy', //závěrkový
  vnitropodnikovy = 'typUctu.vnitropodnikovy', //vnitropodnikový
}


export class AFUcetniOsnova extends AFEntity {

    // ID (db: IdStdUcet) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Účet (db: Kod) - Syntetický účet)
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

    // Druh účtu (db: DruhUctuK) - Druh účtu)
    druhUctuK?: any

    // Typ účtu (db: TypUctuK) - Typ účtu)
    typUctuK?: any

    // Sledovat saldo (db: Saldo) - Sledovat saldo)
    saldo?: boolean

    // Typ organizace (db: IdTypOrg) - Typ organizace)
    typOrganizace?: AFTypOrganizace


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}