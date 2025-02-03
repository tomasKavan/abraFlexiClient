import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFTypAktivity } from './AFTypAktivity'
import { AFZakazka } from './AFZakazka'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFCenik } from './AFCenik'
import { AFKontakt } from './AFKontakt'
import { AFSmlouva } from './AFSmlouva'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka'
import { AFMajetek } from './AFMajetek'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFNaklad } from './AFNaklad'

export enum AFUdalostPrioritaK {
  kriticka = 'priorita.kriticka', //Kritická
  vysoka = 'priorita.vysoka', //Vysoká
  stredni = 'priorita.stredni', //Střední
  nizka = 'priorita.nizka', //Nízká
  velmiNizka = 'priorita.velmiNizka', //Velmi nízká
}

export enum AFUdalostStavUdalK {
  nove = 'stavUdal.nove', //Nová
  rozprac = 'stavUdal.rozprac', //Rozpracováno
  hotovo = 'stavUdal.hotovo', //Hotovo
  zamitnuto = 'stavUdal.zamitnuto', //Zamítnuto
}


export class AFUdalost extends AFEntity {

    // ID (db: IdUdalost) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Popis (db: Popis) - Popis)
    popis?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Celodenní (db: Celodenni) - Celodenní)
    celodenni?: boolean

    // Čas dokončení (db: Dokonceni) - Čas dokončení)
    dokonceni?: Date

    // Předmět (db: Predmet) - Předmět)
    predmet?: string

    // Priorita (db: PrioritaK) - Priorita)
    prioritaK?: any

    // Stav události (db: StavUdalK) - Stav události)
    stavUdalK?: any

    // Termín realizace (db: Termin) - Termín realizace)
    termin?: Date

    // Umístění (db: Umisteni) - Umístění)
    umisteni?: string

    // Volno (db: Volno) - Volno)
    volno?: boolean

    // Čas zahájení (db: Zahajeni) - Čas zahájení)
    zahajeni?: Date

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Externí firma (db: IdFirmaExterni) - Externí firma)
    firmaExterni?: AFAdresar

    // Typ aktivity (db: IdTypAkt) - Typ aktivity)
    typAkt?: AFTypAktivity

    // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
    zodpPrac?: any

    // Uživatel (db: IdUzivatelVytvoril) - Uživatel)
    uzivatel?: any

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Doklad faktury (db: IdDoklFak) - Doklad faktury)
    doklFak?: any

    // Interní doklad (db: IdDoklInt) - Interní doklad)
    doklInt?: any

    // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
    doklObch?: any

    // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
    doklSklad?: AFSkladovyPohyb

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Kontakt (db: IdKontakt) - Kontakt)
    kontakt?: AFKontakt

    // Konektor (db: IdKonektor) - Konektor)
    konektor?: any

    // Report (db: IdReport) - Report)
    report?: any

    // Smlouva (db: IdSmlouvy) - Smlouva)
    smlouva?: AFSmlouva

    // Pol. smlouvy (db: IdPolSml) - Pol. smlouvy)
    polSmlouvy?: AFSmlouvaPolozka

    // Majetek (db: IdMajetek) - Majetek)
    majetek?: AFMajetek


    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Náklady aktivity (type: NAKLAD) - naklady)
    naklady?: Promise<AFNaklad[]>

    // Kontakty (type: ADR_KONTAKT) - kontakty)
    kontakty?: Promise<AFKontakt[]>

}