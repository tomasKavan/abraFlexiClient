import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFRadaFakturyPrijate } from './AFRadaFakturyPrijate'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFUcet } from './AFUcet'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFMena } from './AFMena'
import { AFStatDph } from './AFStatDph'
import { AFStat } from './AFStat'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFTypFakturyPrijateTypDoklK {
  faktura = 'typDokladu.faktura', //Standardní faktura
  dobropis = 'typDokladu.dobropis', //Dobropis/opravný daň. d.
  zalohFaktura = 'typDokladu.zalohFaktura', //Zálohová faktura
  zdd = 'typDokladu.zdd', //Zálohový daňový doklad
  dodList = 'typDokladu.dodList', //Dodací list
  proforma = 'typDokladu.proforma', //Proforma (neúčetní)
}

export enum AFTypFakturyPrijateRazeniProTiskK {
  poradi = 'razeniProTisk.poradi', //Podle pořadí
  nazev = 'razeniProTisk.nazev', //Podle názvu
  kod = 'razeniProTisk.kod', //Podle kódu
}

export enum AFTypFakturyPrijateEkokomK {
  zpoplatneneObaly = 'ekokom.zpoplatneneObaly', //Zpoplatněné obaly
  predplaceneObaly = 'ekokom.predplaceneObaly', //Předplacené obaly
  nezaplaceneObaly = 'ekokom.nezaplaceneObaly', //Nezaplacené obaly
  exportovaneObaly = 'ekokom.exportovaneObaly', //Exportované obaly
  vyrazeneObaly = 'ekokom.vyrazeneObaly', //Vyřazené obaly
}


export class AFTypFakturyPrijate extends AFEntity {

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

    // Druh (db: TypDoklK) - Druh)
    typDoklK?: any

    // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
    splatDny?: number

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady

    // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
    doprava?: string

    // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
    popisDoklad?: string

    // Dokladová řada (db: IdRadyVydej) - Dokladová řada)
    radaVydej?: AFRadaFakturyPrijate

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Bankovní účet (db: IdBspBan) - Bankovní účet)
    bspBan?: AFBankovniUcet

    // Typ příjemky (db: IdTypProtiDokladuPrijem) - Typ příjemky)
    typProtiDokladuPrijem?: AFTypSkladovyPohyb

    // Typ výdejky (db: IdTypProtiDokladuVydej) - Typ výdejky)
    typProtiDokladuVydej?: AFTypSkladovyPohyb

    // Účet DAL (db: IdPrimUcet) - Účet DAL)
    primUcet?: AFUcet

    // Předpis zaúčtování [MD] (db: IdTypUcOpV) - Předpis zaúčtování [MD])
    typUcOpVydej?: AFPredpisZauctovani

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

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

    // Kraj určení (db: IdKrajUrc) - Kraj určení)
    krajUrc?: AFIntrastatKrajUrceni

    // Generovat sklad (db: GenerovatSkl) - Automaticky generovat skladové doklady a vyžadovat zadání výrobních čísel.)
    generovatSkl?: boolean

    // Řazení položek pro tisk (db: RazeniProTiskK) - Řazení položek pro tisk)
    razeniProTiskK?: any

    // Primární typ dokladu (db: Primarni) - Primární typ dokladu)
    primarni?: boolean

    // Automaticky hradit (db: UhrAuto) - Automaticky hradit nezaúčtovanými přeplatky v bance a pokladně)
    uhrAuto?: boolean

    // Automatický zápočet (db: ZapAuto) - Použít na automatizovaný vzájemný zápočet)
    zapAuto?: boolean

    // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
    formaDopravy?: AFFormaDopravy

    // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
    emailTxt?: string

    // Výkaz EkoKom (db: EkokomK) - Výkaz EkoKom)
    ekokomK?: any

    // VS z čís.obj. (db: VsCisObj) - Variabilní symbol primárně z čísla objednávky)
    vsCisObj?: boolean

    // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
    clenKonVykDph?: AFCleneniKontrolniHlaseni

    // Šablona e-mail (db: IdSablonaMail) - Šablona e-mail)
    sablonaMail?: AFSablonaMail

    // Vytvářet recyklační poplatky (db: GenerovatRecyklacniPoplatky) - Vytvářet recyklační poplatky)
    generovatRecyklacniPoplatky?: boolean


    // Automatický tisk (type: AUTOTISK) - autoTisky)
    autoTisky?: Promise<AFAutotisk[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}