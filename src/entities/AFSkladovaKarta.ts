import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFUmisteniVeSkladu } from './AFUmisteniVeSkladu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFSkladovyPohybPolozka } from './AFSkladovyPohybPolozka'


export class AFSkladovaKarta extends AFEntity {

    // ID (db: IdKarty) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Průměrná cena [Kč] (db: PrumCenaTuz) - Průměrná cena [Kč])
    prumCenaTuz?: Big

    // Průměrná cena [měna] (db: PrumCenaMen) - Průměrná cena [měna])
    prumCenaMen?: Big

    // Stav zásob v MJ (db: StavMJ) - Stav zásob v MJ)
    stavMJ?: Big

    // Stav zásob [Kč] (db: StavTuz) - Stav zásob [Kč])
    stavTuz?: Big

    // Stav zásob [měna] (db: StavMen) - Stav zásob [měna])
    stavMen?: Big

    // Datum posl. pohybu (db: DatPosl) - Datum posl. pohybu)
    datPosl?: Date

    // Počátek MJ (db: PocatMJ) - Počátek MJ)
    pocatMJ?: Big

    // Počátek [Kč] (db: PocatTuz) - Počátek [Kč])
    pocatTuz?: Big

    // Počátek [měna] (db: PocatMen) - Počátek [měna])
    pocatMen?: Big

    // Min. zásoba MJ (db: MinMJ) - Min. zásoba MJ)
    minMJ?: Big

    // Maximum (db: MaxMJ) - Max. zásoba MJ)
    maxMJ?: Big

    // Rezervováno MJ (db: RezervMJ) - Rezervováno MJ)
    rezervMJ?: Big

    // Stav k datu MJ (db: DatStavMJ) - Stav k datu MJ)
    datStavMJ?: Big

    // Stav k datu [Kč] (db: DatStavTuz) - Stav k datu [Kč])
    datStavTuz?: Big

    // Stav k datu [měna] (db: DatStavMen) - Stav k datu [měna])
    datStavMen?: Big

    // Poslední cena [Kč] (db: PoslCenaTuz) - Poslední cena [Kč])
    poslCenaTuz?: Big

    // Poslední cena [měna] (db: PoslCenaMen) - Poslední cena [měna])
    poslCenaMen?: Big

    // Výdej dle expirace (db: VydExpir) - Výdej dle expirace)
    vydExpir?: boolean

    // Popis (db: Popis) - Popis)
    popis?: string

    // Popis EN (db: PopisA) - Popis EN)
    popisA?: string

    // Popis DE (db: PopisB) - Popis DE)
    popisB?: string

    // Popis FR (db: PopisC) - Popis FR)
    popisC?: string

    // Poznámka (db: PoznamVelka) - Poznámka)
    poznamVelka?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Ceník - popis (db: CenPopis) - Ceník - popis)
    cenPopis?: string

    // Ceník - popis EN (db: CenPopisA) - Ceník - popis EN)
    cenPopisA?: string

    // Ceník - popis DE (db: CenPopisB) - Ceník - popis DE)
    cenPopisB?: string

    // Ceník - popis FR (db: CenPopisC) - Ceník - popis FR)
    cenPopisC?: string

    // Ceník - poznámka (db: CenPoznam) - Ceník - poznámka)
    cenPoznam?: string

    // Požadavky MJ (db: PozadavkyMj) - Požadavky MJ)
    pozadavkyMj?: Big

    // Stav zásob v MJ s požadavky (db: StavMjSPozadavky) - Stav zásob v MJ s požadavky)
    stavMjSPozadavky?: Big

    // Dostupné množství (db: stavMjSPozadavky - rezervMJ) - Dostupné množství)
    dostupMj?: Big

    // Účetní období (db: IdUcetObdobi) - Účetní období)
    ucetObdobi?: AFUcetniObdobi

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Sklad (db: IdSkladu) - Sklad)
    sklad?: AFSklad

    // Místnost (db: IdMistnost) - Místnost)
    mistnost?: AFUmisteniVeSkladu

    // Regál (db: IdRegal) - Regál)
    regal?: AFUmisteniVeSkladu

    // Police (db: IdPolice) - Police)
    police?: AFUmisteniVeSkladu


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Položky příjemky/výdejky (type: SKLADOVY_POHYB_POLOZKA) - skladovy-pohyb-polozky)
    skladovyPohybPolozky?: Promise<AFSkladovyPohybPolozka[]>

}