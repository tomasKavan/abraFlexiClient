import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFSkupinaFirem } from './AFSkupinaFirem'
import { AFStredisko } from './AFStredisko'
import { AFCenikovaSkupina } from './AFCenikovaSkupina'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFOdberatel } from './AFOdberatel'
import { AFAtribut } from './AFAtribut'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFUdalost } from './AFUdalost'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFSmlouva } from './AFSmlouva'
import { AFDodavatel } from './AFDodavatel'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFRezervace } from './AFRezervace'
import { AFKontakt } from './AFKontakt'

export enum AFAdresarFormExportK {
  edi = 'formExport.edi', //EDI
  xml = 'formExport.xml', //XML
}

export enum AFAdresarTypVztahuK {
  odberDodav = 'typVztahu.odberDodav', //Odběr./Dodav.
  odberatel = 'typVztahu.odberatel', //Odběratel
  dodavatel = 'typVztahu.dodavatel', //Dodavatel
  vyrobce = 'typVztahu.vyrobce', //Výrobce
  socialka = 'typVztahu.socialka', //Sociálka
  zdravotka = 'typVztahu.zdravotka', //Zdravotka
  financniUrad = 'typVztahu.financniUrad', //Finanční úřad
  vyrobna = 'typVztahu.vyrobna', //Výrobna
  vsechno = 'typVztahu.vsechno', //Všechno
}

export enum AFAdresarIsdocPrilohaMailuK {
  podleTypDokl = 'isdocPrilohaMailu.podleTypDokl', //Podle typu dokladu
  ano = 'isdocPrilohaMailu.ano', //Ano
  ne = 'isdocPrilohaMailu.ne', //Ne
}


export class AFAdresar extends AFEntity {

    // ID (db: IdFirmy) - ID)
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

    // Upozornění (db: Poznam) - Upozornění)
    poznam?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // Ulice (db: Ulice) - Ulice)
    ulice?: string

    // Město (db: Mesto) - Město)
    mesto?: string

    // PSČ (db: Psc) - PSČ)
    psc?: string

    // Telefon (db: Tel) - Telefon)
    tel?: string

    // Mobil (db: Mobil) - Mobil)
    mobil?: string

    // Fax (db: Fax) - Fax)
    fax?: string

    // E-mail (db: Email) - E-mail)
    email?: string

    // WWW (db: Www) - WWW)
    www?: string

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Kraj (db: Idregion) - Kraj)
    region?: AFRegion

    // EAN (db: EanKod) - EAN)
    eanKod?: string

    // IČO (db: Ic) - IČO)
    ic?: string

    // DIČ (db: Dic) - DIČ)
    dic?: string

    // Poštovní adresa je shodná se sídlem (db: PostovniShodna) - Poštovní adresa je shodná se sídlem)
    postovniShodna?: boolean

    // Pošt. EAN (db: FaEanKod) - EAN)
    faEanKod?: string

    // Pošt. jméno firmy (db: FaJmenoFirmy) - Firma)
    faJmenoFirmy?: string

    // Pošt. ulice (db: FaUlice) - Ulice)
    faUlice?: string

    // Pošt. město (db: FaMesto) - Město)
    faMesto?: string

    // Pošt. PSČ (db: FaPsc) - PSČ)
    faPsc?: string

    // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
    splatDny?: number

    // Limit fakt. (db: LimitFak) - Limit fakturace)
    limitFak?: Big

    // Maximální počet dnů po splatnosti (db: LimitPoSplatDny) - Maximální počet dnů po splatnosti)
    limitPoSplatDny?: number

    // Zákaz prodeje po překročení splatnosti (db: LimitPoSplatZakaz) - Zákaz prodeje po překročení splatnosti)
    limitPoSplatZakaz?: boolean

    // Plátce DPH (db: PlatceDph) - Plátce DPH)
    platceDph?: boolean

    // Formát exportu (db: FormExportK) - Formát exportu)
    formExportK?: any

    // Typ vztahu (db: TypVztahuK) - Typ vztahu)
    typVztahuK?: any

    // Kód pro tisky (db: KodPojistovny) - Kód pro tisky)
    kodPojistovny?: string

    // Název pro tisky (db: NazevPojistovny) - Název pro tisky)
    nazevPojistovny?: string

    // Oslovení (db: Osloveni) - Oslovení)
    osloveni?: string

    // Sleva [%] (db: SlevaDokl) - Sleva [%])
    slevaDokl?: Big

    // Při částečné fakturaci objednávky označit za hotovou (db: ObpAutomHotovo) - Při částečné fakturaci objednávky označit za hotovou)
    obpAutomHotovo?: boolean

    // Název - druhá řádka (db: Nazev2) - Název - druhá řádka)
    nazev2?: string

    // Název - druhá řádka EN (db: Nazev2A) - Název - druhá řádka EN)
    nazev2A?: string

    // Název - druhá řádka DE (db: Nazev2B) - Název - druhá řádka DE)
    nazev2B?: string

    // Název - druhá řádka FR (db: Nazev2C) - Název - druhá řádka FR)
    nazev2C?: string

    // Nespolehlivý plátce (db: NespolehlivyPlatce) - Nespolehlivý plátce)
    nespolehlivyPlatce?: boolean

    // Revize (db: Revize) - Revize)
    revize?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Katastrální území (db: KatastrUzemi) - Katastrální území)
    katastrUzemi?: string

    // Parcela (db: Parcela) - Parcela)
    parcela?: string

    // Datum narození (db: DatNaroz) - Datum narození)
    datNaroz?: Date

    // Rodné číslo (db: RodCis) - Rodné číslo)
    rodCis?: string

    // Datum založení (db: DatZaloz) - Datum založení)
    datZaloz?: Date

    // Zrušení (db: Canceled) - Zrušení)
    canceled?: boolean

    // ISDOC v e-mailu (db: IsdocPrilohaMailuK) - ISDOC v e-mailu)
    isdocPrilohaMailuK?: any

    // Skupina (db: IdSkupFir) - Skupina)
    skupFir?: AFSkupinaFirem

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Pošt. stát (db: IdFaStatu) - Stát)
    faStat?: AFStat

    // Pošt. kraj (db: Idfaregion) - Kraj)
    faRegion?: AFRegion

    // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
    zodpOsoba?: any

    // Ceníková skupina (db: IdSkupCen) - Ceníková skupina)
    skupCen?: AFCenikovaSkupina

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady


    // Prodejní ceny (type: ODBERATEL) - odberatele)
    odberatele?: Promise<AFOdberatel[]>

    // Atributy (type: ATRIBUT) - atributy)
    atributy?: Promise<AFAtribut[]>

    // Bankovní spojení (type: ADR_BANKOVNI_UCET) - bankovniSpojeni)
    bankovniSpojeni?: Promise<AFAdresarBankovniUcet[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Cenové úrovně (type: CENOVA_UROVEN) - cenHladiny)
    cenHladiny?: Promise<AFCenovaUroven[]>

    // Smlouvy (type: SMLOUVA) - smlouvy)
    smlouvy?: Promise<AFSmlouva[]>

    // Nákupní ceny (type: DODAVATEL) - dodavatele)
    dodavatele?: Promise<AFDodavatel[]>

    // Místa určení (type: MISTO_URCENI) - mistaUrceni)
    mistaUrceni?: Promise<AFMistoUrceni[]>

    // Rezervace (type: REZERVACE) - rezervace)
    rezervace?: Promise<AFRezervace[]>

    // Kontakty (type: ADR_KONTAKT) - kontakty)
    kontakty?: Promise<AFKontakt[]>

}