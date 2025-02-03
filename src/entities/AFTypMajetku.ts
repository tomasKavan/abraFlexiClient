import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFStredisko } from './AFStredisko'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypMajetkuDruhK {
  hmDl = 'druhMaj.hmDl', //Hmotný dlouhodobý
  nehmDl = 'druhMaj.nehmDl', //Nehmotný dlouhodobý
  drobny = 'druhMaj.drobny', //Drobný
  neodepis = 'druhMaj.neodepis', //Neodpisovaný (pouhá evidence)
}


export class AFTypMajetku extends AFEntity {

    // ID (db: IdTypMaj) - ID)
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

    // Platí od (db: IdUcetObdobiOd) - Platí od)
    ucetObdobiOd?: AFUcetniObdobi

    // Platí do (db: IdUcetObdobiDo) - Platí do)
    ucetObdobiDo?: AFUcetniObdobi

    // Majetek je odpisován (db: JeOdpis) - Majetek je odpisován)
    jeOdpis?: boolean

    // Druh (db: DruhK) - Druh)
    druhK?: any

    // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
    workFlow?: boolean

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Účet majetku (db: IdPrimUcet) - Účet majetku)
    primarniUcet?: AFUcet

    // Účet zařazení (db: IdProtiUcetZar) - Účet zařazení)
    protiUcetZarazeni?: AFUcet

    // Účet oprávek (db: IdOpravUcet) - Účet oprávek)
    opravnyUcet?: AFUcet

    // Účet odpisu (db: IdOdpUcet) - Účet odpisu)
    odpisovyUcet?: AFUcet

    // Účet zůstatku vyřazení (db: IdZustVyrazUcet) - Účet zůstatku vyřazení)
    zustVyrazUcet?: AFUcet

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Typ organizace (db: IdTypOrg) - Typ organizace)
    typOrganizace?: AFTypOrganizace


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}