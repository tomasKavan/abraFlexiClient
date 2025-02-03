import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFNepritomnostCsszDuvodOsetrovneK {
  onemocnela = 'csszDuvodOsetrovne.onemocnela', //Ošetřování nemocné osoby
  narizenaKaran = 'csszDuvodOsetrovne.narizenaKaran', //Karanténa dítěte do 10 let
  nemuzePecDite = 'csszDuvodOsetrovne.nemuzePecDite', //Nemůže pečovat o dítě
  uzavrenaSkola = 'csszDuvodOsetrovne.uzavrenaSkola', //Uzavřená škola
}

export enum AFNepritomnostCsszDuvodOtcovskeK {
  otc = 'csszDuvodOtcovske.otc', //Otec dítěte
  zem = 'csszDuvodOtcovske.zem', //Otec zemřelého dítěte
  pec = 'csszDuvodOtcovske.pec', //Převzetí do péče
}

export enum AFNepritomnostCsszDuvodPrevzetiPpmK {
  doh = 'csszDuvodPrevzeti.doh', //Dohoda (187/2006 Sb. §32 odst. 1 písm. e)
  one = 'csszDuvodPrevzeti.one', //Dlouhodobé onemocnění matky
  roz = 'csszDuvodPrevzeti.roz', //Rozhodnutí orgánu
  umr = 'csszDuvodPrevzeti.umr', //Úmrtí matky
}


export class AFNepritomnost extends AFEntity {

    // ID (db: IdNepritomnost) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Začátek (db: PlatiOd) - Začátek)
    platiOd?: Date

    // Konec (db: PlatiDo) - Konec)
    platiDo?: Date

    // Trvání potvrzeno (db: Trvani) - Trvání potvrzeno)
    trvani?: Date

    // Hodiny nepřítomnosti první den (db: Hodin1Den) - Hodiny nepřítomnosti první den)
    hodin1Den?: Big

    // Hodiny nepřítomnosti poslední den (db: HodinXDen) - Hodiny nepřítomnosti poslední den)
    hodinXDen?: Big

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Číslo rozhodnutí (db: CisloRozhodnuti) - Číslo rozhodnutí)
    cisloRozhodnuti?: string

    // Důvod ošetřovného (db: CsszDuvodOsetrovneK) - Důvod ošetřovného)
    csszDuvodOsetrovneK?: any

    // Název školy (db: CsszNazevSkoly) - Název školy)
    csszNazevSkoly?: string

    // IČO školy (db: CsszIcSkoly) - IČO školy)
    csszIcSkoly?: string

    // Důvod otcovské (db: CsszDuvodOtcovskeK) - Důvod otcovské)
    csszDuvodOtcovskeK?: any

    // Důvod převzetí (db: CsszDuvodPrevzetiPpmK) - Důvod převzetí)
    csszDuvodPrevzetiPpmK?: any

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Osoba (db: IdOsoba) - Osoba)
    osoba?: AFOsobaHlavicka

    // Důvod nepřítomnosti (db: IdCisMzdSloz) - Důvod nepřítomnosti)
    cisMzdSloz?: AFCiselnikMzdovychSlozek

    // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
    pracPom?: AFPracovniPomerHlavicka


    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}