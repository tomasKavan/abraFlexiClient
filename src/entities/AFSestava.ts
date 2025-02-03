import { AFEntity } from '../AFEntity'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFRadekSestavy } from './AFRadekSestavy'
import { AFSestava } from './AFSestava'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFPricteniRozdilu } from './AFPricteniRozdilu'
import { AFUmisteniUctu } from './AFUmisteniUctu'

export enum AFSestavaTypSesK {
  rozvaha = 'typSestavy.rozvaha', //rozvaha
  vysledov = 'typSestavy.vysledov', //výsledovka
  cashflow = 'typSestavy.cashflow', //cash flow
  obecna = 'typSestavy.obecna', //obecná
  rozvahaIfrs = 'typSestavy.rozvahaIfrs', //IFRS rozvaha
  vysledovIfrs = 'typSestavy.vysledovIfrs', //IFRS výsledovka
}

export enum AFSestavaTypVypSestavyK {
  vTisicich = 'typVypSestavy.vTisicich', //v celých tisících Kč
  vJednotkach = 'typVypSestavy.vJednotkach', //v celých Kč
  vKcPresne = 'typVypSestavy.vKcPresne', //v Kč přesně
}


export class AFSestava extends AFEntity {

    // ID (db: IdSestavy) - ID)
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

    // Typ sestavy (db: TypSesK) - Typ sestavy)
    typSesK?: any

    // Standardní sestava (db: Standard) - Standardní sestava)
    standard?: boolean

    // Počítat minulé období (db: VypMinObd) - Počítat minulé období)
    vypMinObd?: boolean

    // Název sloupce 1 (db: NazevSloup1) - Název sloupce 1)
    nazevSloup1?: string

    // Název sloupce 1 EN (db: NazevSloupA1) - Název sloupce 1 EN)
    nazevSloupA1?: string

    // Název sloupce 1 DE (db: NazevSloupB1) - Název sloupce 1 DE)
    nazevSloupB1?: string

    // Název sloupce 1 FR (db: NazevSloupC1) - Název sloupce 1 FR)
    nazevSloupC1?: string

    // Zobrazit sloupec 1 (db: Zobrazit1) - Zobrazit)
    zobrazit1?: boolean

    // Název sloupce 2 (db: NazevSloup2) - Název sloupce 2)
    nazevSloup2?: string

    // Název sloupce 2 EN (db: NazevSloupA2) - Název sloupce 2 EN)
    nazevSloupA2?: string

    // Název sloupce 2 DE (db: NazevSloupB2) - Název sloupce 2 DE)
    nazevSloupB2?: string

    // Název sloupce 2 FR (db: NazevSloupC2) - Název sloupce 2 FR)
    nazevSloupC2?: string

    // Zobrazit sloupec 2 (db: Zobrazit2) - Zobrazit)
    zobrazit2?: boolean

    // Název sloupce 3 (db: NazevSloup3) - Název sloupce 3)
    nazevSloup3?: string

    // Název sloupce 3 EN (db: NazevSloupA3) - Název sloupce 3 EN)
    nazevSloupA3?: string

    // Název sloupce 3 DE (db: NazevSloupB3) - Název sloupce 3 DE)
    nazevSloupB3?: string

    // Název sloupce 3 FR (db: NazevSloupC3) - Název sloupce 3 FR)
    nazevSloupC3?: string

    // Zobrazit sloupec 3 (db: Zobrazit3) - Zobrazit)
    zobrazit3?: boolean

    // Název sloupce 4 (db: NazevSloup4) - Název sloupce 4)
    nazevSloup4?: string

    // Název sloupce 4 EN (db: NazevSloupA4) - Název sloupce 4 EN)
    nazevSloupA4?: string

    // Název sloupce 4 DE (db: NazevSloupB4) - Název sloupce 4 DE)
    nazevSloupB4?: string

    // Název sloupce 4 FR (db: NazevSloupC4) - Název sloupce 4 FR)
    nazevSloupC4?: string

    // Zobrazit sloupec 4 (db: Zobrazit4) - Zobrazit)
    zobrazit4?: boolean

    // Název sloupce 5 (db: NazevSloup5) - Název sloupce 5)
    nazevSloup5?: string

    // Název sloupce 5 EN (db: NazevSloupA5) - Název sloupce 5 EN)
    nazevSloupA5?: string

    // Název sloupce 5 DE (db: NazevSloupB5) - Název sloupce 5 DE)
    nazevSloupB5?: string

    // Název sloupce 5 FR (db: NazevSloupC5) - Název sloupce 5 FR)
    nazevSloupC5?: string

    // Zobrazit sloupec 5 (db: Zobrazit5) - Zobrazit)
    zobrazit5?: boolean

    // Název sloupce 6 (db: NazevSloup6) - Název sloupce 6)
    nazevSloup6?: string

    // Název sloupce 6 EN (db: NazevSloupA6) - Název sloupce 6 EN)
    nazevSloupA6?: string

    // Název sloupce 6 DE (db: NazevSloupB6) - Název sloupce 6 DE)
    nazevSloupB6?: string

    // Název sloupce 6 FR (db: NazevSloupC6) - Název sloupce 6 FR)
    nazevSloupC6?: string

    // Zobrazit sloupec 6 (db: Zobrazit6) - Zobrazit)
    zobrazit6?: boolean

    // Sloupec 3 je součtem sloupce 1 a 2 (db: Sloupec3Sum12) - Sloupec 3 je součtem sloupce 1 a 2)
    sloupec3Sum12?: boolean

    // Sloupec 6 je součtem sloupce 4 a 5 (db: Sloupec6Sum45) - Sloupec 6 je součtem sloupce 4 a 5)
    sloupec6Sum45?: boolean

    // Rok od (db: RokOd) - Rok od)
    rokOd?: number

    // Rok do (db: RokDo) - Rok do)
    rokDo?: number

    // Měsíc od (db: MesicOd) - Měsíc od)
    mesicOd?: number

    // Měsíc do (db: MesicDo) - Měsíc do)
    mesicDo?: number

    // Před. rok od (db: PredRokOd) - Před. rok od)
    predRokOd?: number

    // Před. rok do (db: PredRokDo) - Před. rok do)
    predRokDo?: number

    // Před. měsíc od (db: PredMesicOd) - Před. měsíc od)
    predMesicOd?: number

    // Před. měsíc do (db: PredMesicDo) - Před. měsíc do)
    predMesicDo?: number

    // Datum výpočtu (db: DatVypocet) - Datum výpočtu)
    datVypocet?: Date

    // Typ výpočtu sestavy (db: TypVypSestavyK) - Typ výpočtu sestavy)
    typVypSestavyK?: any

    // Mikro účetní jednotka (db: TypJednotkyMikro) - Mikro účetní jednotka)
    typJednotkyMikro?: boolean

    // Typ organizace (db: IdTypOrg) - Typ organizace)
    typOrganizace?: AFTypOrganizace

    // Cílová řádka (db: IdRadCil) - Cílová řádka)
    radkaCil?: AFRadekSestavy

    // Zdrojová sestava (db: IdSesZdroj) - Zdrojová sestava)
    sestavaZdroj?: AFSestava

    // Zdrojová řádka (db: IdRadZdroj) - Zdrojová řádka)
    radkaZdroj?: AFRadekSestavy

    // Řádka rozdílu 1 (db: IdRadRozdil1) - Řádka rozdílu 1)
    radkaRozdil1?: AFRadekSestavy

    // Řádka rozdílu 2 (db: IdRadRozdil2) - Řádka rozdílu 2)
    radkaRozdil2?: AFRadekSestavy

    // Kontrola zaokrouhlení 1 (db: IdRadZaokr1) - Kontrola zaokrouhlení 1)
    radkaZaokr1?: AFRadekSestavy

    // Kontrola zaokrouhlení 2 (db: IdRadZaokr2) - Kontrola zaokrouhlení 2)
    radkaZaokr2?: AFRadekSestavy


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Řádky pro přičtení rozdílu (type: PRICTENI_ROZDILU) - pricteni-rozdilu)
    pricteniRozdilu?: Promise<AFPricteniRozdilu[]>

    // Upřesnění umístění účtu (type: UMISTENI_UCTU) - umisteni-uctu)
    umisteniUctu?: Promise<AFUmisteniUctu[]>

    // Řádky sestavy (type: RADEK_SESTAVY) - radkySestavy)
    radkySestavy?: Promise<AFRadekSestavy[]>

}