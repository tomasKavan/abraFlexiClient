import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFRadaPokladniPohyb } from './AFRadaPokladniPohyb'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFPokladna } from './AFPokladna'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFStatDph } from './AFStatDph'
import { AFStat } from './AFStat'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypPokladniPohybTypPohybuK {
  prijem = 'typPohybu.prijem', //Příjem
  vydej = 'typPohybu.vydej', //Výdej
}

export enum AFTypPokladniPohybZaokrJakSumK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFTypPokladniPohybZaokrNaSumK {
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

export enum AFTypPokladniPohybZaokrJakDphK {
  nahoru = 'zaokrJak.nahoru', //nahoru
  dolu = 'zaokrJak.dolu', //dolů
  matem = 'zaokrJak.matem', //matematicky
}

export enum AFTypPokladniPohybZaokrNaDphK {
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

export enum AFTypPokladniPohybMetodaZaokrDoklK {
  zklDph = 'metodaZaokr.zklDph', //do základu a DPH
  0sazba = 'metodaZaokr.0sazba', //do 0 sazby
  individ = 'metodaZaokr.individ', //individuálně
}

export enum AFTypPokladniPohybRazeniProTiskK {
  poradi = 'razeniProTisk.poradi', //Podle pořadí
  nazev = 'razeniProTisk.nazev', //Podle názvu
  kod = 'razeniProTisk.kod', //Podle kódu
}

export enum AFTypPokladniPohybEkokomK {
  zpoplatneneObaly = 'ekokom.zpoplatneneObaly', //Zpoplatněné obaly
  predplaceneObaly = 'ekokom.predplaceneObaly', //Předplacené obaly
  nezaplaceneObaly = 'ekokom.nezaplaceneObaly', //Nezaplacené obaly
  exportovaneObaly = 'ekokom.exportovaneObaly', //Exportované obaly
  vyrazeneObaly = 'ekokom.vyrazeneObaly', //Vyřazené obaly
}


export class AFTypPokladniPohyb extends AFEntity {

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

    // Sleva [%] (db: SlevaDokl) - Sleva [%])
    slevaDokl?: Big

    // Způsob zaokr. Celkem (db: ZaokrJakSumK) - Celkem (způsob))
    zaokrJakSumK?: any

    // Řád zaokr. Celkem (db: ZaokrNaSumK) - Celkem (řády))
    zaokrNaSumK?: any

    // Způsob zaokr. DPH (db: ZaokrJakDphK) - DPH (způsob))
    zaokrJakDphK?: any

    // Řád zaokr. DPH (db: ZaokrNaDphK) - DPH (řády))
    zaokrNaDphK?: any

    // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
    metodaZaokrDoklK?: any

    // Korekce DPH (db: VytvaretKorPol) - Korekce DPH)
    vytvaretKorPol?: boolean

    // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
    splatDny?: number

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady

    // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
    popisDoklad?: string

    // Řada pro příjem (db: IdRadyPrijem) - Řada pro příjem)
    radaPrijem?: AFRadaPokladniPohyb

    // Řada pro výdej (db: IdRadyVydej) - Řada pro výdej)
    radaVydej?: AFRadaPokladniPohyb

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Pokladna (db: IdBsp) - Pokladna)
    bsp?: AFPokladna

    // Typ příjemky (db: IdTypProtiDokladuPrijem) - Typ příjemky)
    typProtiDokladuPrijem?: AFTypSkladovyPohyb

    // Typ výdejky (db: IdTypProtiDokladuVydej) - Typ výdejky)
    typProtiDokladuVydej?: AFTypSkladovyPohyb

    // Předpis zaúčtování - příjem [DAL] (db: IdTypUcOpP) - pro příjem [DAL])
    typUcOpPrijem?: AFPredpisZauctovani

    // Předpis zaúčtování - výdej [MD] (db: IdTypUcOpV) - pro výdej [MD])
    typUcOpVydej?: AFPredpisZauctovani

    // Stát DPH (db: IdStatDph) - Stát DPH)
    statDph?: AFStatDph

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

    // Generovat sklad (db: GenerovatSkl) - Automaticky generovat skladové doklady a vyžadovat zadání výrobních čísel.)
    generovatSkl?: boolean

    // Řazení položek pro tisk (db: RazeniProTiskK) - Řazení položek pro tisk)
    razeniProTiskK?: any

    // Primární typ dokladu (db: Primarni) - Primární typ dokladu)
    primarni?: boolean

    // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
    emailTxt?: string

    // Výkaz EkoKom (db: EkokomK) - Výkaz EkoKom)
    ekokomK?: any

    // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
    clenKonVykDph?: AFCleneniKontrolniHlaseni

    // Zahrnovat nekatalogové položky do analýzy nákupu / prodeje (db: NekatalPolDoAnalyzy) - Zahrnovat nekatalogové položky do analýzy nákupu / prodeje)
    nekatalPolDoAnalyzy?: boolean

    // Šablona e-mail (db: IdSablonaMail) - Šablona e-mail)
    sablonaMail?: AFSablonaMail

    // Vytvářet recyklační poplatky (db: GenerovatRecyklacniPoplatky) - Vytvářet recyklační poplatky)
    generovatRecyklacniPoplatky?: boolean


    // Automatický tisk (type: AUTOTISK) - autoTisky)
    autoTisky?: Promise<AFAutotisk[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}