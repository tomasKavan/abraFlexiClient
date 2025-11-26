import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFSkupinaOsob } from './AFSkupinaOsob'
import { AFStat } from './AFStat'
import { AFStredisko } from './AFStredisko'
import { AFAdresar } from './AFAdresar'
import { AFTypZavazku } from './AFTypZavazku'
import { AFDite } from './AFDite'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { Pohlavi, TypVztahuOsoba, RodStav, ZpusobPlatby } from '../AFEntityEnums'

export class AFOsoba extends AFEntity {
  static EntityPath: string = 'osoba'
  static EntityName: string = 'Personalistika'
  static EntityType: string = 'OSOBA'

  // ID (db: IdOsoba) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Platí od data (db: PlatiOd) - Platí od)
  platiOd?: Date | null
  // Platí do data (db: PlatiDo) - Platí do)
  platiDo?: Date | null
  // Osobní číslo (db: OsbCis) - Osobní číslo)
  osbCis?: string | null
  // Alternativní osobní číslo (db: OsbCisAlter) - Alternativní osobní číslo)
  osbCisAlter?: string | null
  // Příjmení (db: Prijmeni) - Příjmení)
  prijmeni?: string | null
  // Jméno (db: Jmeno) - Jméno)
  jmeno?: string | null
  // Titul (db: Titul) - Titul)
  titul?: string | null
  // Datum narození (db: DatNaroz) - Datum narození)
  datNaroz?: Date | null
  // Rodné číslo (db: RodCis) - Rodné číslo)
  rodCis?: string | null
  // Pohlaví (db: PohlaviK) - Pohlaví)
  pohlaviK?: Pohlavi | null
  // Kvalifikace (db: Kvalifikace) - Kvalifikace)
  kvalifikace?: string | null
  // Funkce (db: Funkce) - Funkce)
  funkce?: string | null
  // Typ vztahu k firmě (db: TypVztahuK) - Typ vztahu k firmě)
  typVztahuK?: TypVztahuOsoba | null
  // Rodné příjmení (db: PrijmeniRod) - Rodné příjmení)
  prijmeniRod?: string | null
  // Předchozí příjmení (db: PrijmeniPred) - Předchozí příjmení)
  prijmeniPred?: string | null
  // Místo narození (db: MistoNaroz) - Místo narození)
  mistoNaroz?: string | null
  // Rodinný stav (db: RodStavK) - Rodinný stav)
  rodStavK?: RodStav | null
  // Starobní důchod (db: StarobniDuch) - Starobní důchod)
  starobniDuch?: boolean | null
  // Předčasný starobní důchod (db: StarobniPredDuch) - Předčasný starobní důchod)
  starobniPredDuch?: boolean | null
  // Vdovský/vdovecký důchod (db: VdovskyDuch) - Vdovský/vdovecký důchod)
  vdovskyDuch?: boolean | null
  // Sirotčí důchod (db: SirotciDuch) - Sirotčí důchod)
  sirotciDuch?: boolean | null
  // Důchod pobírán v zahraničí (db: ZahranicniDuch) - Důchod pobírán v zahraničí)
  zahranicniDuch?: boolean | null
  // Důchod od (db: DuchodOd) - Důchod od)
  duchodOd?: Date | null
  // Nezaopatřený partner (db: NezPartner) - Nezaopatřený partner)
  nezPartner?: boolean | null
  // Nez.p. ZTP/P (db: NezZTP) - ZTP/P)
  nezZTP?: boolean | null
  // Nez.p. ZTP/P od (db: NezZTPOd) - ZTP/P platí od)
  nezZTPOd?: Date | null
  // Nez.p. ZTP/P do (db: NezZTPDo) - ZTP/P platí do)
  nezZTPDo?: Date | null
  // Nez.p. příjmení (db: NezPrijmeni) - Příjmení)
  nezPrijmeni?: string | null
  // Nez.p. jméno (db: NezJmeno) - Jméno)
  nezJmeno?: string | null
  // Nez.p. rodné příjmení (db: NezPrijmeniRod) - Rodné příjmení)
  nezPrijmeniRod?: string | null
  // Nez.p. titul (db: NezTitul) - Titul)
  nezTitul?: string | null
  // Nez.p. datum narození (db: NezDatNaroz) - Datum narození)
  nezDatNaroz?: Date | null
  // Nez.p. RČ (db: NezRodCis) - Rodné číslo)
  nezRodCis?: string | null
  // Nez.p. pohlaví (db: NezPohlaviK) - Pohlaví)
  nezPohlaviK?: Pohlavi | null
  // Nez.p. od (db: NezOd) - Platí od)
  nezOd?: Date | null
  // Nez.p. do (db: NezDo) - Platí do)
  nezDo?: Date | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Ulice (db: Ulice) - Ulice)
  ulice?: string | null
  // Číslo domu (db: CisDomu) - Číslo domu)
  cisDomu?: string | null
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
  // Pošta (db: Posta) - Pošta)
  posta?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // Ulice kontaktní (db: UliceKon) - Ulice kontaktní)
  uliceKon?: string | null
  // Číslo domu kontaktní (db: CisDomuKon) - Číslo domu kontaktní)
  cisDomuKon?: string | null
  // PSČ kontaktní (db: PscKon) - PSČ kontaktní)
  pscKon?: string | null
  // Pošta kontaktní (db: PostaKon) - Pošta kontaktní)
  postaKon?: string | null
  // Město kontaktní (db: MestoKon) - Město kontaktní)
  mestoKon?: string | null
  // E-mail (db: Email) - E-mail)
  email?: string | null
  // Fax (db: Fax) - Fax)
  fax?: string | null
  // Mobil (db: Mobil) - Mobil)
  mobil?: string | null
  // Telefon (db: Telefon) - Telefon)
  telefon?: string | null
  // Ulice kon.tuz. (db: UliceKonTuz) - Ulice kon.tuz.)
  uliceKonTuz?: string | null
  // Číslo domu kon.tuz. (db: CisDomuKonTuz) - Číslo domu kon.tuz.)
  cisDomuKonTuz?: string | null
  // PSČ kon.tuz. (db: PscKonTuz) - PSČ kon.tuz.)
  pscKonTuz?: string | null
  // Pošta kon.tuz. (db: PostaKonTuz) - Pošta kon.tuz.)
  postaKonTuz?: string | null
  // Město kon.tuz. (db: MestoKonTuz) - Město kon.tuz.)
  mestoKonTuz?: string | null
  // Způsob platby (db: ZpusPlatbyK) - Způsob platby)
  zpusPlatbyK?: ZpusobPlatby | null
  // Podpis prohlášeni k dani (db: PodpisProhl) - Podpis prohlášeni k dani)
  podpisProhl?: boolean | null
  // Daňový nerezident (db: DanNerezid) - Daňový nerezident)
  danNerezid?: boolean | null
  // Zdravotní pojištění - doplatek do minimálního vyměřovacího základu (db: ZdrPojDoplat) - Zdravotní pojištění - doplatek do minimálního vyměřovacího základu)
  zdrPojDoplat?: boolean | null
  // Rozdělit mezi firmu a zaměstnance (db: ZdrPojDoplatRozdel) - Rozdělit mezi firmu a zaměstnance)
  zdrPojDoplatRozdel?: boolean | null
  // Číslo pojištěnce (db: CisPojist) - Číslo pojištěnce)
  cisPojist?: string | null
  // Držitel průkazu ZTP/P (db: PrukazZTP) - Držitel průkazu ZTP/P)
  prukazZTP?: boolean | null
  // Číslo průkazu (db: CisPrukaz) - Číslo průkazu)
  cisPrukaz?: string | null
  // Odpracovaných roků při nástupu (db: OdpracRokuPred) - Odpracovaných roků při nástupu)
  odpracRokuPred?: number | null
  // Odpracovaných dnů při nástupu (db: OdpracDnuPred) - Odpracovaných dnů při nástupu)
  odpracDnuPred?: number | null
  // Pojistné (sociální)z min.zaměst (db: MinuleSoc) - Pojistné (sociální)z min.zaměst)
  minuleSoc?: Big | null
  // Pojistné (zdravotní)z min.zaměst (db: MinuleZdrav) - Pojistné (zdravotní)z min.zaměst)
  minuleZdrav?: Big | null
  // Invalidita 1.a 2.stupně (db: InvalCast) - Invalidita 1.a 2.stupně)
  invalCast?: boolean | null
  // Invalidita 3.stupně (db: InvalPlna) - Invalidita 3.stupně)
  invalPlna?: boolean | null
  // Invalidita od (db: InvalOd) - Invalidita od)
  invalOd?: Date | null
  // Student (db: Student) - Student)
  student?: boolean | null
  // Sleva na poplatníka (db: SlevaPoplat) - Sleva na poplatníka)
  slevaPoplat?: boolean | null
  // Dětí pro odpočet (db: ) - Dětí pro odpočet)
  odpocetDeti?: number | null
  // Počet třetích a dalších dětí pro odpočet (db: ) - Počet třetích a dalších dětí pro odpočet)
  odpocetDeti3?: number | null
  // Dětí ZTP pro odpočet (db: ) - Dětí ZTP pro odpočet)
  odpocetDetiZtp?: number | null
  // První dítě pro odpočet je ZTP (db: ) - První dítě pro odpočet je ZTP)
  odpocetDite1Ztp?: boolean | null
  // Druhé dítě pro odpočet je ZTP (db: ) - Druhé dítě pro odpočet je ZTP)
  odpocetDite2Ztp?: boolean | null
  // Sníž. vym. zákl. ZP (db: SnizVymZaklZp) - Snížení vyměřovacího základu ZP (Zákon č. 592/1992 Sb., § 3 - Vyměřovací základ, odstavec 7))
  snizVymZaklZp?: boolean | null
  // Heslo (db: Password) - Heslo)
  password?: string | null
  // Předchozí nem.poj. mimo ČSSZ (db: PredNemPoj) - Předchozí nem.poj. mimo ČSSZ)
  predNemPoj?: string | null
  // Současný nem.poj. mimo ČSSZ (db: SoucNemPoj) - Současný nem.poj. mimo ČSSZ)
  soucNemPoj?: string | null
  // Je účasten důchodového spoření (db: UcastnikDuchSpor) - Je účasten důchodového spoření)
  ucastnikDuchSpor?: boolean | null
  // Číslo účastníka důchodového spoření (db: CisUcastDuchSpor) - Číslo účastníka důchodového spoření)
  cisUcastDuchSpor?: string | null
  // Sleva SP pro pracující důchodce (db: SlevaSpPracDuchodce) - Sleva SP pro pracující důchodce)
  slevaSpPracDuchodce?: boolean | null
  // Název ciz.poj. (db: CizPojNazev) - Název ciz.poj.)
  cizPojNazev?: string | null
  // Specifikace ciz.poj. (db: CizPojSpec) - Specifikace ciz.poj.)
  cizPojSpec?: string | null
  // Ulice ciz.poj. (db: CizPojUlice) - Ulice ciz.poj.)
  cizPojUlice?: string | null
  // Číslo domu ciz.poj. (db: CizPojCisDomu) - Číslo domu ciz.poj.)
  cizPojCisDomu?: string | null
  // Město ciz.poj. (db: CizPojMesto) - Město ciz.poj.)
  cizPojMesto?: string | null
  // PSČ ciz.poj. (db: CizPojPsc) - PSČ ciz.poj.)
  cizPojPsc?: string | null
  // Číslo ciz.poj. (db: CizPojCislo) - Číslo ciz.poj.)
  cizPojCislo?: string | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Osoba (db: IdOsobaHlav) - Osoba)
  osobaHlav?: AFOsobaHlavicka | null
  // Skupina osob (db: IdSkupOsob) - Skupina osob)
  skupOsob?: AFSkupinaOsob | null
  // Nadřízený (db: IdNadzizeny) - Nadřízený)
  nadzizeny?: AFOsobaHlavicka | null
  // Stát narození (db: IdStatuNaroz) - Stát narození)
  statNaroz?: AFStat | null
  // Státní občanství (db: IdStatuObcan) - Státní občanství)
  statObcan?: AFStat | null
  // Středisko (db: IdStredisko) - Středisko)
  stredisko?: AFStredisko | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null
  // Stát kontaktní (db: IdStatuKon) - Stát kontaktní)
  statKon?: AFStat | null
  // Stát kon.tuz. (db: IdStatuKonTuz) - Stát kon.tuz.)
  statKonTuz?: AFStat | null
  // Zdr.poj. (db: IdZdravPoj) - Zdravotní pojišťovna)
  zdravPoj?: AFAdresar | null
  // Stát ciz.poj. (db: IdCizPojStatu) - Stát ciz.poj.)
  cizPojStat?: AFStat | null
  // Typ závazku dobírky (db: IdTdDobirka) - Typ závazku dobírky)
  tdDobirka?: AFTypZavazku | null
  // Typ závazku zálohy (db: IdTdZaloha) - Typ závazku zálohy)
  tdZaloha?: AFTypZavazku | null
  // 1. dítě pro odpočet (db: IdDiteOdpoc1) - 1. dítě pro odpočet)
  diteOdpoc1?: AFDite | null
  // 2. dítě pro odpočet (db: IdDiteOdpoc2) - 2. dítě pro odpočet)
  diteOdpoc2?: AFDite | null

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    osbCis : {
      key: 'osbCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    osbCisAlter : {
      key: 'osbCisAlter',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    prijmeni : {
      key: 'prijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    jmeno : {
      key: 'jmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    titul : {
      key: 'titul',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datNaroz : {
      key: 'datNaroz',
      type: PropertyType.Date,
      isArray: false,
      
    },
    rodCis : {
      key: 'rodCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    pohlaviK : {
      key: 'pohlaviK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Pohlavi',
      enum: Pohlavi,
      
    },
    kvalifikace : {
      key: 'kvalifikace',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    funkce : {
      key: 'funkce',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    typVztahuK : {
      key: 'typVztahuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVztahuOsoba',
      enum: TypVztahuOsoba,
      
    },
    prijmeniRod : {
      key: 'prijmeniRod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    prijmeniPred : {
      key: 'prijmeniPred',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mistoNaroz : {
      key: 'mistoNaroz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    rodStavK : {
      key: 'rodStavK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'RodStav',
      enum: RodStav,
      
    },
    starobniDuch : {
      key: 'starobniDuch',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    starobniPredDuch : {
      key: 'starobniPredDuch',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vdovskyDuch : {
      key: 'vdovskyDuch',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sirotciDuch : {
      key: 'sirotciDuch',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zahranicniDuch : {
      key: 'zahranicniDuch',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    duchodOd : {
      key: 'duchodOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    nezPartner : {
      key: 'nezPartner',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nezZTP : {
      key: 'nezZTP',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nezZTPOd : {
      key: 'nezZTPOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    nezZTPDo : {
      key: 'nezZTPDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    nezPrijmeni : {
      key: 'nezPrijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nezJmeno : {
      key: 'nezJmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nezPrijmeniRod : {
      key: 'nezPrijmeniRod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nezTitul : {
      key: 'nezTitul',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nezDatNaroz : {
      key: 'nezDatNaroz',
      type: PropertyType.Date,
      isArray: false,
      
    },
    nezRodCis : {
      key: 'nezRodCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    nezPohlaviK : {
      key: 'nezPohlaviK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Pohlavi',
      enum: Pohlavi,
      
    },
    nezOd : {
      key: 'nezOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    nezDo : {
      key: 'nezDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    ulice : {
      key: 'ulice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cisDomu : {
      key: 'cisDomu',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    psc : {
      key: 'psc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    posta : {
      key: 'posta',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    uliceKon : {
      key: 'uliceKon',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cisDomuKon : {
      key: 'cisDomuKon',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    pscKon : {
      key: 'pscKon',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    postaKon : {
      key: 'postaKon',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mestoKon : {
      key: 'mestoKon',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    email : {
      key: 'email',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    fax : {
      key: 'fax',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mobil : {
      key: 'mobil',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    telefon : {
      key: 'telefon',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    uliceKonTuz : {
      key: 'uliceKonTuz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cisDomuKonTuz : {
      key: 'cisDomuKonTuz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    pscKonTuz : {
      key: 'pscKonTuz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    postaKonTuz : {
      key: 'postaKonTuz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mestoKonTuz : {
      key: 'mestoKonTuz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zpusPlatbyK : {
      key: 'zpusPlatbyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZpusobPlatby',
      enum: ZpusobPlatby,
      
    },
    podpisProhl : {
      key: 'podpisProhl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    danNerezid : {
      key: 'danNerezid',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zdrPojDoplat : {
      key: 'zdrPojDoplat',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zdrPojDoplatRozdel : {
      key: 'zdrPojDoplatRozdel',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cisPojist : {
      key: 'cisPojist',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    prukazZTP : {
      key: 'prukazZTP',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cisPrukaz : {
      key: 'cisPrukaz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    odpracRokuPred : {
      key: 'odpracRokuPred',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    odpracDnuPred : {
      key: 'odpracDnuPred',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    minuleSoc : {
      key: 'minuleSoc',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    minuleZdrav : {
      key: 'minuleZdrav',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    invalCast : {
      key: 'invalCast',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    invalPlna : {
      key: 'invalPlna',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    invalOd : {
      key: 'invalOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    student : {
      key: 'student',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    slevaPoplat : {
      key: 'slevaPoplat',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odpocetDeti : {
      key: 'odpocetDeti',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    odpocetDeti3 : {
      key: 'odpocetDeti3',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    odpocetDetiZtp : {
      key: 'odpocetDetiZtp',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    odpocetDite1Ztp : {
      key: 'odpocetDite1Ztp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odpocetDite2Ztp : {
      key: 'odpocetDite2Ztp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    snizVymZaklZp : {
      key: 'snizVymZaklZp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    password : {
      key: 'password',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    predNemPoj : {
      key: 'predNemPoj',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    soucNemPoj : {
      key: 'soucNemPoj',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    ucastnikDuchSpor : {
      key: 'ucastnikDuchSpor',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cisUcastDuchSpor : {
      key: 'cisUcastDuchSpor',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    slevaSpPracDuchodce : {
      key: 'slevaSpPracDuchodce',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cizPojNazev : {
      key: 'cizPojNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cizPojSpec : {
      key: 'cizPojSpec',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cizPojUlice : {
      key: 'cizPojUlice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cizPojCisDomu : {
      key: 'cizPojCisDomu',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cizPojMesto : {
      key: 'cizPojMesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cizPojPsc : {
      key: 'cizPojPsc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cizPojCislo : {
      key: 'cizPojCislo',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    osobaHlav : {
      key: 'osobaHlav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },
    skupOsob : {
      key: 'skupOsob',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaOsob',
      
    },
    nadzizeny : {
      key: 'nadzizeny',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },
    statNaroz : {
      key: 'statNaroz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      
    },
    statObcan : {
      key: 'statObcan',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statKon : {
      key: 'statKon',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      
    },
    statKonTuz : {
      key: 'statKonTuz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      
    },
    zdravPoj : {
      key: 'zdravPoj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    cizPojStat : {
      key: 'cizPojStat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      
    },
    tdDobirka : {
      key: 'tdDobirka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    tdZaloha : {
      key: 'tdZaloha',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    diteOdpoc1 : {
      key: 'diteOdpoc1',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFDite',
      
    },
    diteOdpoc2 : {
      key: 'diteOdpoc2',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFDite',
      
    },

    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}