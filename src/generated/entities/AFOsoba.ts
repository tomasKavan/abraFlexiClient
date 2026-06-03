import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFSkupinaOsob } from './AFSkupinaOsob.js'
import { AFStat } from './AFStat.js'
import { AFStredisko } from './AFStredisko.js'
import { AFAdresar } from './AFAdresar.js'
import { AFTypZavazku } from './AFTypZavazku.js'
import { AFOsobaBlizkaHlav } from './AFOsobaBlizkaHlav.js'
import { AFPriloha } from './AFPriloha.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { Pohlavi, TypVztahuOsoba, RodStav, ZpusobPlatby, MzdTypDanIdentifOsoba, MzdTypDokladuCiz, MzdTypZdravOmezeni, MzdKatDosazVzdelani, MzdCizNositelPojisteni, MzdCizVolnyTrhPrace, MzdCizDruhPracOpravneni, MzdPobockaUP } from '../AFEntityEnums.js'

export class AFOsoba extends AFEntity {
  static EntityPath: string = 'osoba'
  static EntityName: string = 'Personalistika'
  static EntityType: string = 'OSOBA'

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
  // EČP (db: Ecp) - EČP)
  ecp?: string | null
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
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
  // Pošta (db: Posta) - Pošta)
  posta?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // Ulice kontaktní (db: UliceKon) - Ulice kontaktní)
  uliceKon?: string | null
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
  // Doplatek příjmy bez účasti na zdrav. poj. (db: ZdrPojDoplatVzdy) - Doplatek příjmy bez účasti na zdrav. poj.)
  zdrPojDoplatVzdy?: boolean | null
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
  // Student (db: Student) - Student)
  student?: boolean | null
  // Sleva na poplatníka (db: SlevaPoplat) - Sleva na poplatníka)
  slevaPoplat?: boolean | null
  // Dětí pro odpočet (db: ) - Dětí pro odpočet)
  odpocetDeti?: number | null
  // Počet třetích a dalších dětí pro odpočet (db: ) - Počet třetích a dalších dětí pro odpočet)
  odpocetDeti3?: number | null
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
  // Ulice ciz.poj. (db: CizPojUlice) - Ulice ciz.poj.)
  cizPojUlice?: string | null
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
  // OIČ (db: Oic) - OIČ)
  oic?: string | null
  // VČP (db: CizVcp) - VČP)
  cizVcp?: string | null
  // Typ daňové identifikace (db: CizTypDanIdentifK) - Typ daňové identifikace)
  cizTypDanIdentifK?: MzdTypDanIdentifOsoba | null
  // Daňový identifikátor ve státě rezidence (db: CizTaxIdRez) - Daňový identifikátor ve státě rezidence)
  cizTaxIdRez?: string | null
  // Typ dokladu (db: CizTypDokladuK) - Typ dokladu)
  cizTypDokladuK?: MzdTypDokladuCiz | null
  // Číslo dokladu (db: CizCisDoklTotoznosti) - Číslo dokladu)
  cizCisDoklTotoznosti?: string | null
  // Orgán, který vydal doklad v zahraničí (db: CizDoklTotoznostiVydal) - Orgán, který vydal doklad v zahraničí)
  cizDoklTotoznostiVydal?: string | null
  // Č. popisné (db: CisPopisne) - Č. popisné)
  cisPopisne?: string | null
  // Č. orientační (db: CisOrientacni) - Č. orientační)
  cisOrientacni?: string | null
  // Č. p. kontaktní (db: CisPopisneKon) - Č. p. kontaktní)
  cisPopisneKon?: string | null
  // Č. o. kontaktní (db: CisOrientacniKon) - Č. o. kontaktní)
  cisOrientacniKon?: string | null
  // Č. p. kon. tuz. (db: CisPopisneKonTuz) - Č. p. kon. tuz.)
  cisPopisneKonTuz?: string | null
  // Č. o. kon. tuz. (db: CisOrientacniKonTuz) - Č. o. kon. tuz.)
  cisOrientacniKonTuz?: string | null
  // Číslo popisné ciz. poj. (db: CizPojPopisneCis) - Číslo popisné ciz. poj.)
  cizPojPopisneCis?: string | null
  // Číslo orientační ciz. poj. (db: CizPojOrientacniCis) - Číslo orientační ciz. poj.)
  cizPojOrientacniCis?: string | null
  // Kód adresy v RUIAN (db: KodRuian) - Kód adresy v RUIAN)
  kodRuian?: string | null
  // Kód adresy v RUIAN kontaktní (db: KodRuianKon) - Kód adresy v RUIAN kontaktní)
  kodRuianKon?: string | null
  // Kód adresy v RUIAN kon. tuz. (db: KodRuianKonTuz) - Kód adresy v RUIAN kon. tuz.)
  kodRuianKonTuz?: string | null
  // Zdravotní omezení přiznané do (db: ) - Zdravotní omezení přiznané do)
  zdravOmezeniDo?: Date | null
  // Typ zdravotního omezení (db: TypZdravOmezeniK) - Typ zdravotního omezení)
  typZdravOmezeniK?: MzdTypZdravOmezeni | null
  // Nejvyšší dosažené vzdělání podle KKOV (db: NejvyssiVzdelaniK) - Nejvyšší dosažené vzdělání podle KKOV)
  nejvyssiVzdelaniK?: MzdKatDosazVzdelani | null
  // Specifikace (db: CizPojSpecK) - Specifikace)
  cizPojSpecK?: MzdCizNositelPojisteni | null
  // Volný přístup na trh práce (db: VolnyPristupTrhPrace) - Volný přístup na trh práce)
  volnyPristupTrhPrace?: boolean | null
  // Důvod pro volný přístup na trh práce (db: CizVolnyPristupTrhPraceDuvodK) - Důvod pro volný přístup na trh práce)
  cizVolnyPristupTrhPraceDuvodK?: MzdCizVolnyTrhPrace | null
  // Druh pracovního oprávnění (db: CizDruhPracOpravneniK) - Druh pracovního oprávnění)
  cizDruhPracOpravneniK?: MzdCizDruhPracOpravneni | null
  // Pracovní oprávnění vydal (db: PracOpravneniVydalK) - Pracovní oprávnění vydal)
  pracOpravneniVydalK?: MzdPobockaUP | null
  // ID pracovního oprávnění (db: IdPracOpravneni) - ID pracovního oprávnění)
  idPracOpravneni?: string | null
  // Oprávnění od (db: PracOpravneniOd) - Oprávnění od)
  pracOpravneniOd?: Date | null
  // Oprávnění do (db: PracOpravneniDo) - Oprávnění do)
  pracOpravneniDo?: Date | null
  // Podléhá cizím právním předpisům (db: CiziPravniPredpisy) - Podléhá cizím právním předpisům)
  ciziPravniPredpisy?: boolean | null
  // Snížený důchodový věk (db: SnizDuchVek) - Snížený důchodový věk)
  snizDuchVek?: boolean | null
  // Důchodový věk od (db: DuchVekOd) - Důchodový věk od)
  duchVekOd?: Date | null
  // Důchod mimo ČSSZ (db: DuchodMimoCssz) - Důchod mimo ČSSZ)
  duchodMimoCssz?: boolean | null
  // Důchod přiznán od jiného nositele pojištění (db: ) - Důchod přiznán od jiného nositele pojištění)
  duchodJinyNositelPojisteniOd?: Date | null
  // Děti vyživuje i jiná osoba (db: DetiVyzivujeJinaOsoba) - Děti vyživuje i jiná osoba)
  detiVyzivujeJinaOsoba?: boolean | null
  // Vyplněné heslo (db: ) - Vyplněné heslo)
  hesloVyplneno?: boolean | null
  // Nepobírá důchod v plné výši (db: NepobiraDuchodVPlneVysi) - Nepobírá důchod v plné výši)
  nepobiraDuchodVPlneVysi?: boolean | null
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
  diteOdpoc1?: AFOsobaBlizkaHlav | null
  // 2. dítě pro odpočet (db: IdDiteOdpoc2) - 2. dítě pro odpočet)
  diteOdpoc2?: AFOsobaBlizkaHlav | null
  // Osoba vyživující tytéž děti (db: IdOsobaVyzivDeti) - Osoba vyživující tytéž děti)
  osobaVyzivDeti?: AFOsobaBlizkaHlav | null
  // Stát rezidentství (db: IdStatRezidentstvi) - Stát rezidentství)
  statRezidentstvi?: AFStat | null
  // Stát, který vydal doklad (db: IdStatVydalDoklTotoznosti) - Stát, který vydal doklad)
  statVydalDoklTotoznosti?: AFStat | null
  // Stát cizích právních předpisů (db: IdStatCiziPravniPredpisy) - Stát cizích právních předpisů)
  statCiziPravniPredpisy?: AFStat | null

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
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
    ecp : {
      key: 'ecp',
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
    zdrPojDoplatVzdy : {
      key: 'zdrPojDoplatVzdy',
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
    cizPojUlice : {
      key: 'cizPojUlice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
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
    oic : {
      key: 'oic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 10,
      
    },
    cizVcp : {
      key: 'cizVcp',
      type: PropertyType.String,
      isArray: false,
      maxLength: 9,
      
    },
    cizTypDanIdentifK : {
      key: 'cizTypDanIdentifK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'MzdTypDanIdentifOsoba',
      enum: MzdTypDanIdentifOsoba,
      
    },
    cizTaxIdRez : {
      key: 'cizTaxIdRez',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cizTypDokladuK : {
      key: 'cizTypDokladuK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'MzdTypDokladuCiz',
      enum: MzdTypDokladuCiz,
      
    },
    cizCisDoklTotoznosti : {
      key: 'cizCisDoklTotoznosti',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cizDoklTotoznostiVydal : {
      key: 'cizDoklTotoznostiVydal',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    cisPopisne : {
      key: 'cisPopisne',
      type: PropertyType.String,
      isArray: false,
      maxLength: 12,
      
    },
    cisOrientacni : {
      key: 'cisOrientacni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 12,
      
    },
    cisPopisneKon : {
      key: 'cisPopisneKon',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cisOrientacniKon : {
      key: 'cisOrientacniKon',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cisPopisneKonTuz : {
      key: 'cisPopisneKonTuz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cisOrientacniKonTuz : {
      key: 'cisOrientacniKonTuz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cizPojPopisneCis : {
      key: 'cizPojPopisneCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cizPojOrientacniCis : {
      key: 'cizPojOrientacniCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    kodRuian : {
      key: 'kodRuian',
      type: PropertyType.String,
      isArray: false,
      maxLength: 9,
      
    },
    kodRuianKon : {
      key: 'kodRuianKon',
      type: PropertyType.String,
      isArray: false,
      maxLength: 9,
      
    },
    kodRuianKonTuz : {
      key: 'kodRuianKonTuz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 9,
      
    },
    zdravOmezeniDo : {
      key: 'zdravOmezeniDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    typZdravOmezeniK : {
      key: 'typZdravOmezeniK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MzdTypZdravOmezeni',
      enum: MzdTypZdravOmezeni,
      
    },
    nejvyssiVzdelaniK : {
      key: 'nejvyssiVzdelaniK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MzdKatDosazVzdelani',
      enum: MzdKatDosazVzdelani,
      
    },
    cizPojSpecK : {
      key: 'cizPojSpecK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MzdCizNositelPojisteni',
      enum: MzdCizNositelPojisteni,
      
    },
    volnyPristupTrhPrace : {
      key: 'volnyPristupTrhPrace',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cizVolnyPristupTrhPraceDuvodK : {
      key: 'cizVolnyPristupTrhPraceDuvodK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MzdCizVolnyTrhPrace',
      enum: MzdCizVolnyTrhPrace,
      
    },
    cizDruhPracOpravneniK : {
      key: 'cizDruhPracOpravneniK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MzdCizDruhPracOpravneni',
      enum: MzdCizDruhPracOpravneni,
      
    },
    pracOpravneniVydalK : {
      key: 'pracOpravneniVydalK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MzdPobockaUP',
      enum: MzdPobockaUP,
      
    },
    idPracOpravneni : {
      key: 'idPracOpravneni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    pracOpravneniOd : {
      key: 'pracOpravneniOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    pracOpravneniDo : {
      key: 'pracOpravneniDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    ciziPravniPredpisy : {
      key: 'ciziPravniPredpisy',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    snizDuchVek : {
      key: 'snizDuchVek',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    duchVekOd : {
      key: 'duchVekOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    duchodMimoCssz : {
      key: 'duchodMimoCssz',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    duchodJinyNositelPojisteniOd : {
      key: 'duchodJinyNositelPojisteniOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    detiVyzivujeJinaOsoba : {
      key: 'detiVyzivujeJinaOsoba',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    hesloVyplneno : {
      key: 'hesloVyplneno',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nepobiraDuchodVPlneVysi : {
      key: 'nepobiraDuchodVPlneVysi',
      type: PropertyType.Logic,
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
      afClass: 'AFOsobaBlizkaHlav',
      
    },
    diteOdpoc2 : {
      key: 'diteOdpoc2',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaBlizkaHlav',
      
    },
    osobaVyzivDeti : {
      key: 'osobaVyzivDeti',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaBlizkaHlav',
      
    },
    statRezidentstvi : {
      key: 'statRezidentstvi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      
    },
    statVydalDoklTotoznosti : {
      key: 'statVydalDoklTotoznosti',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      
    },
    statCiziPravniPredpisy : {
      key: 'statCiziPravniPredpisy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      
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