import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFSkupinaOsob } from './AFSkupinaOsob'
import { AFStat } from './AFStat'
import { AFStredisko } from './AFStredisko'
import { AFAdresar } from './AFAdresar'
import { AFTypZavazku } from './AFTypZavazku'
import { AFDite } from './AFDite'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFOsobaPohlaviK {
  muz = 'pohlavi.muz', //Muž
  zena = 'pohlavi.zena', //Žena
}

export enum AFOsobaTypVztahuK {
  zamestnanec = 'typVztahuOsoba.zamestnanec', //Zaměstnanec
  uchazec = 'typVztahuOsoba.uchazec', //Uchazeč
  externi = 'typVztahuOsoba.externi', //Externí osoba
}

export enum AFOsobaRodStavK {
  svobodny = 'rodStav.svobodny', //Svobodná(-ý)
  vdana_zenaty = 'rodStav.vdana_zenaty', //Vdaná/ženatý
  rozvedeny = 'rodStav.rozvedeny', //Rozvedená(-ý)
  vdovec = 'rodStav.vdovec', //Vdova(-ec)
  druh = 'rodStav.druh', //Družka/druh
  registrPartner = 'rodStav.registrPartner', //Registrovaný partner
}

export enum AFOsobaNezPohlaviK {
  muz = 'pohlavi.muz', //Muž
  zena = 'pohlavi.zena', //Žena
}

export enum AFOsobaZpusPlatbyK {
  ucet = 'zpusobPlatby.ucet', //Na účet
  adresa = 'zpusobPlatby.adresa', //Na adresu
  pokladna = 'zpusobPlatby.pokladna', //Pokladnou
}


export class AFOsoba extends AFEntity {

    // ID (db: IdOsoba) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: Date

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: Date

    // Osobní číslo (db: OsbCis) - Osobní číslo)
    osbCis?: string

    // Alternativní osobní číslo (db: OsbCisAlter) - Alternativní osobní číslo)
    osbCisAlter?: string

    // Příjmení (db: Prijmeni) - Příjmení)
    prijmeni?: string

    // Jméno (db: Jmeno) - Jméno)
    jmeno?: string

    // Titul (db: Titul) - Titul)
    titul?: string

    // Datum narození (db: DatNaroz) - Datum narození)
    datNaroz?: Date

    // Rodné číslo (db: RodCis) - Rodné číslo)
    rodCis?: string

    // Pohlaví (db: PohlaviK) - Pohlaví)
    pohlaviK?: any

    // Kvalifikace (db: Kvalifikace) - Kvalifikace)
    kvalifikace?: string

    // Funkce (db: Funkce) - Funkce)
    funkce?: string

    // Typ vztahu k firmě (db: TypVztahuK) - Typ vztahu k firmě)
    typVztahuK?: any

    // Rodné příjmení (db: PrijmeniRod) - Rodné příjmení)
    prijmeniRod?: string

    // Předchozí příjmení (db: PrijmeniPred) - Předchozí příjmení)
    prijmeniPred?: string

    // Místo narození (db: MistoNaroz) - Místo narození)
    mistoNaroz?: string

    // Rodinný stav (db: RodStavK) - Rodinný stav)
    rodStavK?: any

    // Starobní důchod (db: StarobniDuch) - Starobní důchod)
    starobniDuch?: boolean

    // Předčasný starobní důchod (db: StarobniPredDuch) - Předčasný starobní důchod)
    starobniPredDuch?: boolean

    // Vdovský/vdovecký důchod (db: VdovskyDuch) - Vdovský/vdovecký důchod)
    vdovskyDuch?: boolean

    // Sirotčí důchod (db: SirotciDuch) - Sirotčí důchod)
    sirotciDuch?: boolean

    // Důchod pobírán v zahraničí (db: ZahranicniDuch) - Důchod pobírán v zahraničí)
    zahranicniDuch?: boolean

    // Důchod od (db: DuchodOd) - Důchod od)
    duchodOd?: Date

    // Nezaopatřený partner (db: NezPartner) - Nezaopatřený partner)
    nezPartner?: boolean

    // Nez.p. ZTP/P (db: NezZTP) - ZTP/P)
    nezZTP?: boolean

    // Nez.p. ZTP/P od (db: NezZTPOd) - ZTP/P platí od)
    nezZTPOd?: Date

    // Nez.p. ZTP/P do (db: NezZTPDo) - ZTP/P platí do)
    nezZTPDo?: Date

    // Nez.p. příjmení (db: NezPrijmeni) - Příjmení)
    nezPrijmeni?: string

    // Nez.p. jméno (db: NezJmeno) - Jméno)
    nezJmeno?: string

    // Nez.p. rodné příjmení (db: NezPrijmeniRod) - Rodné příjmení)
    nezPrijmeniRod?: string

    // Nez.p. titul (db: NezTitul) - Titul)
    nezTitul?: string

    // Nez.p. datum narození (db: NezDatNaroz) - Datum narození)
    nezDatNaroz?: Date

    // Nez.p. RČ (db: NezRodCis) - Rodné číslo)
    nezRodCis?: string

    // Nez.p. pohlaví (db: NezPohlaviK) - Pohlaví)
    nezPohlaviK?: any

    // Nez.p. od (db: NezOd) - Platí od)
    nezOd?: Date

    // Nez.p. do (db: NezDo) - Platí do)
    nezDo?: Date

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Ulice (db: Ulice) - Ulice)
    ulice?: string

    // Číslo domu (db: CisDomu) - Číslo domu)
    cisDomu?: string

    // PSČ (db: Psc) - PSČ)
    psc?: string

    // Pošta (db: Posta) - Pošta)
    posta?: string

    // Město (db: Mesto) - Město)
    mesto?: string

    // Ulice kontaktní (db: UliceKon) - Ulice kontaktní)
    uliceKon?: string

    // Číslo domu kontaktní (db: CisDomuKon) - Číslo domu kontaktní)
    cisDomuKon?: string

    // PSČ kontaktní (db: PscKon) - PSČ kontaktní)
    pscKon?: string

    // Pošta kontaktní (db: PostaKon) - Pošta kontaktní)
    postaKon?: string

    // Město kontaktní (db: MestoKon) - Město kontaktní)
    mestoKon?: string

    // E-mail (db: Email) - E-mail)
    email?: string

    // Fax (db: Fax) - Fax)
    fax?: string

    // Mobil (db: Mobil) - Mobil)
    mobil?: string

    // Telefon (db: Telefon) - Telefon)
    telefon?: string

    // Ulice kon.tuz. (db: UliceKonTuz) - Ulice kon.tuz.)
    uliceKonTuz?: string

    // Číslo domu kon.tuz. (db: CisDomuKonTuz) - Číslo domu kon.tuz.)
    cisDomuKonTuz?: string

    // PSČ kon.tuz. (db: PscKonTuz) - PSČ kon.tuz.)
    pscKonTuz?: string

    // Pošta kon.tuz. (db: PostaKonTuz) - Pošta kon.tuz.)
    postaKonTuz?: string

    // Město kon.tuz. (db: MestoKonTuz) - Město kon.tuz.)
    mestoKonTuz?: string

    // Způsob platby (db: ZpusPlatbyK) - Způsob platby)
    zpusPlatbyK?: any

    // Podpis prohlášeni k dani (db: PodpisProhl) - Podpis prohlášeni k dani)
    podpisProhl?: boolean

    // Daňový nerezident (db: DanNerezid) - Daňový nerezident)
    danNerezid?: boolean

    // Zdravotní pojištění - doplatek do minimálního vyměřovacího základu (db: ZdrPojDoplat) - Zdravotní pojištění - doplatek do minimálního vyměřovacího základu)
    zdrPojDoplat?: boolean

    // Rozdělit mezi firmu a zaměstnance (db: ZdrPojDoplatRozdel) - Rozdělit mezi firmu a zaměstnance)
    zdrPojDoplatRozdel?: boolean

    // Číslo pojištěnce (db: CisPojist) - Číslo pojištěnce)
    cisPojist?: string

    // Držitel průkazu ZTP/P (db: PrukazZTP) - Držitel průkazu ZTP/P)
    prukazZTP?: boolean

    // Číslo průkazu (db: CisPrukaz) - Číslo průkazu)
    cisPrukaz?: string

    // Odpracovaných roků při nástupu (db: OdpracRokuPred) - Odpracovaných roků při nástupu)
    odpracRokuPred?: number

    // Odpracovaných dnů při nástupu (db: OdpracDnuPred) - Odpracovaných dnů při nástupu)
    odpracDnuPred?: number

    // Pojistné (sociální)z min.zaměst (db: MinuleSoc) - Pojistné (sociální)z min.zaměst)
    minuleSoc?: Big

    // Pojistné (zdravotní)z min.zaměst (db: MinuleZdrav) - Pojistné (zdravotní)z min.zaměst)
    minuleZdrav?: Big

    // Invalidita 1.a 2.stupně (db: InvalCast) - Invalidita 1.a 2.stupně)
    invalCast?: boolean

    // Invalidita 3.stupně (db: InvalPlna) - Invalidita 3.stupně)
    invalPlna?: boolean

    // Invalidita od (db: InvalOd) - Invalidita od)
    invalOd?: Date

    // Student (db: Student) - Student)
    student?: boolean

    // Sleva na poplatníka (db: SlevaPoplat) - Sleva na poplatníka)
    slevaPoplat?: boolean

    // Dětí pro odpočet (db: undefined) - Dětí pro odpočet)
    odpocetDeti?: number

    // Počet třetích a dalších dětí pro odpočet (db: undefined) - Počet třetích a dalších dětí pro odpočet)
    odpocetDeti3?: number

    // Dětí ZTP pro odpočet (db: undefined) - Dětí ZTP pro odpočet)
    odpocetDetiZtp?: number

    // První dítě pro odpočet je ZTP (db: undefined) - První dítě pro odpočet je ZTP)
    odpocetDite1Ztp?: boolean

    // Druhé dítě pro odpočet je ZTP (db: undefined) - Druhé dítě pro odpočet je ZTP)
    odpocetDite2Ztp?: boolean

    // Sníž. vym. zákl. ZP (db: SnizVymZaklZp) - Snížení vyměřovacího základu ZP (Zákon č. 592/1992 Sb., § 3 - Vyměřovací základ, odstavec 7))
    snizVymZaklZp?: boolean

    // Předchozí nem.poj. mimo ČSSZ (db: PredNemPoj) - Předchozí nem.poj. mimo ČSSZ)
    predNemPoj?: string

    // Současný nem.poj. mimo ČSSZ (db: SoucNemPoj) - Současný nem.poj. mimo ČSSZ)
    soucNemPoj?: string

    // Je účasten důchodového spoření (db: UcastnikDuchSpor) - Je účasten důchodového spoření)
    ucastnikDuchSpor?: boolean

    // Číslo účastníka důchodového spoření (db: CisUcastDuchSpor) - Číslo účastníka důchodového spoření)
    cisUcastDuchSpor?: string

    // Sleva SP pro pracující důchodce (db: SlevaSpPracDuchodce) - Sleva SP pro pracující důchodce)
    slevaSpPracDuchodce?: boolean

    // Název ciz.poj. (db: CizPojNazev) - Název ciz.poj.)
    cizPojNazev?: string

    // Specifikace ciz.poj. (db: CizPojSpec) - Specifikace ciz.poj.)
    cizPojSpec?: string

    // Ulice ciz.poj. (db: CizPojUlice) - Ulice ciz.poj.)
    cizPojUlice?: string

    // Číslo domu ciz.poj. (db: CizPojCisDomu) - Číslo domu ciz.poj.)
    cizPojCisDomu?: string

    // Město ciz.poj. (db: CizPojMesto) - Město ciz.poj.)
    cizPojMesto?: string

    // PSČ ciz.poj. (db: CizPojPsc) - PSČ ciz.poj.)
    cizPojPsc?: string

    // Číslo ciz.poj. (db: CizPojCislo) - Číslo ciz.poj.)
    cizPojCislo?: string

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Osoba (db: IdOsobaHlav) - Osoba)
    osobaHlav?: AFOsobaHlavicka

    // Skupina osob (db: IdSkupOsob) - Skupina osob)
    skupOsob?: AFSkupinaOsob

    // Nadřízený (db: IdNadzizeny) - Nadřízený)
    nadzizeny?: AFOsobaHlavicka

    // Stát narození (db: IdStatuNaroz) - Stát narození)
    statNaroz?: AFStat

    // Státní občanství (db: IdStatuObcan) - Státní občanství)
    statObcan?: AFStat

    // Středisko (db: IdStredisko) - Středisko)
    stredisko?: AFStredisko

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat

    // Stát kontaktní (db: IdStatuKon) - Stát kontaktní)
    statKon?: AFStat

    // Stát kon.tuz. (db: IdStatuKonTuz) - Stát kon.tuz.)
    statKonTuz?: AFStat

    // Zdr.poj. (db: IdZdravPoj) - Zdravotní pojišťovna)
    zdravPoj?: AFAdresar

    // Stát ciz.poj. (db: IdCizPojStatu) - Stát ciz.poj.)
    cizPojStat?: AFStat

    // Typ závazku dobírky (db: IdTdDobirka) - Typ závazku dobírky)
    tdDobirka?: AFTypZavazku

    // Typ závazku zálohy (db: IdTdZaloha) - Typ závazku zálohy)
    tdZaloha?: AFTypZavazku

    // 1. dítě pro odpočet (db: IdDiteOdpoc1) - 1. dítě pro odpočet)
    diteOdpoc1?: AFDite

    // 2. dítě pro odpočet (db: IdDiteOdpoc2) - 2. dítě pro odpočet)
    diteOdpoc2?: AFDite


    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}