import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFRadaSkladovyPohyb } from './AFRadaSkladovyPohyb'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFSklad } from './AFSklad'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFStat } from './AFStat'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypSkladovyPohybTypPohybuK {
  prijem = 'typPohybu.prijem', //Příjem
  vydej = 'typPohybu.vydej', //Výdej
}

export enum AFTypSkladovyPohybTypPohybuSkladK {
  prijemHoly = 'typPohybuSklad.prijemHoly', //"Holý" příjem
  prijemPolot = 'typPohybuSklad.prijemPolot', //Příjem polotovaru
  prijemPoFak = 'typPohybuSklad.prijemPoFak', //Příjem po faktuře
  prijemPoObch = 'typPohybuSklad.prijemPoObch', //Příjem po objednávce
  prijemPrevod = 'typPohybuSklad.prijemPrevod', //Příjem pro převodku
  prijemProFak = 'typPohybuSklad.prijemProFak', //Příjem pro fakturaci
  prijemVyrob = 'typPohybuSklad.prijemVyrob', //Příjem výrobku
  prijemVratka = 'typPohybuSklad.prijemVratka', //Příjem (dobropis, vratka)
  vydejHoly = 'typPohybuSklad.vydejHoly', //"Holý" výdej
  vydejPolot = 'typPohybuSklad.vydejPolot', //Výdej polotovaru
  vydejPoFak = 'typPohybuSklad.vydejPoFak', //Výdej po faktuře
  vydejPoObch = 'typPohybuSklad.vydejPoObch', //Výdej po objednávce
  vydejPrevod = 'typPohybuSklad.vydejPrevod', //Výdej pro převodku
  vydejProFakCenik = 'typPohybuSklad.vydejProFakCenik', //Výdej pro fakturaci (ceny z ceníku)
  vydejProFakRucne = 'typPohybuSklad.vydejProFakRucne', //Výdej pro fakturaci (ceny ručně)
  vydejVyrob = 'typPohybuSklad.vydejVyrob', //Výdej výrobku
  prijemVydejVratka = 'typPohybuSklad.prijemVydejVratka', //Výdej (dobropis, vratka)
}

export enum AFTypSkladovyPohybRazeniProTiskK {
  poradi = 'razeniProTisk.poradi', //Podle pořadí
  nazev = 'razeniProTisk.nazev', //Podle názvu
  kod = 'razeniProTisk.kod', //Podle kódu
}


export class AFTypSkladovyPohyb extends AFEntity {

    // ID (db: IdTypDokl) - ID)
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

    // Platí od roku (db: PlatiOd) - Platí od roku)
    platiOd?: number

    // Platí do roku (db: PlatiDo) - Platí do roku)
    platiDo?: number

    // Modul (db: Modul) - Modul)
    modul?: string

    // Je účetní (db: Ucetni) - Doklad je účetní)
    ucetni?: boolean

    // Typ pohybu (db: TypPohybuK) - Typ pohybu)
    typPohybuK?: any

    // Typ pohybu + upřesnění (db: TypPohybuSkladK) - Typ pohybu + upřesnění)
    typPohybuSkladK?: any

    // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
    doprava?: string

    // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
    popisDoklad?: string

    // Úvodní text (tiskne se před položkami) (db: UvodTxt) - Úvodní text (tiskne se před položkami))
    uvodTxt?: string

    // Závěrečný text (tiskne se za položkami) (db: ZavTxt) - Závěrečný text (tiskne se za položkami))
    zavTxt?: string

    // Řada pro příjem (db: IdRadyPrijem) - Řada pro příjem)
    radaPrijem?: AFRadaSkladovyPohyb

    // Řada pro výdej (db: IdRadyVydej) - Řada pro výdej)
    radaVydej?: AFRadaSkladovyPohyb

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Sklad (db: IdBsp) - Sklad)
    bsp?: AFSklad

    // Typ dokladu převodky (db: IdTypProtiDokladuPrijem) - Typ dokladu převodky)
    typProtiDokladuPrijem?: AFTypSkladovyPohyb

    // Typ dokladu výroby (db: IdTypProtiDokladuVydej) - Typ dokladu výroby)
    typProtiDokladuVydej?: AFTypSkladovyPohyb

    // Předpis zaúčtování - příjem [DAL] (db: IdTypUcOpP) - pro příjem [DAL])
    typUcOpPrijem?: AFPredpisZauctovani

    // Předpis zaúčtování - výdej [MD] (db: IdTypUcOpV) - pro výdej [MD])
    typUcOpVydej?: AFPredpisZauctovani

    // Aut. tisk (db: TiskAutomat) - Automaticky tisknout při vytvoření nového dokladu)
    tiskAutomat?: boolean

    // Stát odesl. (db: IdStatOdesl) - Stát odesl.)
    statOdesl?: AFStat

    // Stát určení (db: IdStatUrc) - Stát určení)
    statUrc?: AFStat

    // Stát původu (db: IdStatPuvod) - Stát původu)
    statPuvod?: AFStat

    // Podmínky dodání (db: IdDodPodm) - Podmínky dodání)
    dodPodm?: AFIntrastatDodaciPodminky

    // Zvláštní pohyby (db: IdZvlPoh) - Zvláštní pohyby)
    zvlPoh?: AFIntrastatZvlastniPohyb

    // Transakce (db: IdObchTrans) - Transakce)
    obchTrans?: AFIntrastatObchodniTransakce

    // Druh dopravy (db: IdDruhDopr) - Druh dopravy)
    druhDopr?: AFIntrastatDruhDopravy

    // Kraj odesílatele (db: IdKrajUrc) - Kraj odesílatele)
    krajUrc?: AFIntrastatKrajUrceni

    // Řazení položek pro tisk (db: RazeniProTiskK) - Řazení položek pro tisk)
    razeniProTiskK?: any

    // Primární typ dokladu (db: Primarni) - Primární typ dokladu)
    primarni?: boolean

    // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
    formaDopravy?: AFFormaDopravy

    // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
    emailTxt?: string

    // Šablona e-mail (db: IdSablonaMail) - Šablona e-mail)
    sablonaMail?: AFSablonaMail


    // Automatický tisk (type: AUTOTISK) - autoTisky)
    autoTisky?: Promise<AFAutotisk[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}