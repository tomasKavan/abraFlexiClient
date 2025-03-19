export enum FormExport {
  edi = 'formExport.edi',
  xml = 'formExport.xml',
}
export enum TypVztahu {
  odberDodav = 'typVztahu.odberDodav',
  odberatel = 'typVztahu.odberatel',
  dodavatel = 'typVztahu.dodavatel',
  vyrobce = 'typVztahu.vyrobce',
  socialka = 'typVztahu.socialka',
  zdravotka = 'typVztahu.zdravotka',
  financniUrad = 'typVztahu.financniUrad',
  vyrobna = 'typVztahu.vyrobna',
  vsechno = 'typVztahu.vsechno',
}
export enum IsdocPrilohaMailu {
  podleTypDokl = 'isdocPrilohaMailu.podleTypDokl',
  ano = 'isdocPrilohaMailu.ano',
  ne = 'isdocPrilohaMailu.ne',
}
export enum Priorita {
  kriticka = 'priorita.kriticka',
  vysoka = 'priorita.vysoka',
  stredni = 'priorita.stredni',
  nizka = 'priorita.nizka',
  velmiNizka = 'priorita.velmiNizka',
}
export enum StavUdal {
  nove = 'stavUdal.nove',
  rozprac = 'stavUdal.rozprac',
  hotovo = 'stavUdal.hotovo',
  zamitnuto = 'stavUdal.zamitnuto',
}
export enum DruhUdal {
  ukol = 'druhUdal.ukol',
  pozn = 'druhUdal.pozn',
  udal = 'druhUdal.udal',
}
export enum ZpusobFakt {
  dopredu = 'zpusobFakt.dopredu',
  zpetne = 'zpusobFakt.zpetne',
}
export enum TypPohybu {
  prijem = 'typPohybu.prijem',
  vydej = 'typPohybu.vydej',
}
export enum TypCeny {
  bezDph = 'typCeny.bezDph',
  sDph = 'typCeny.sDph',
}
export enum TypSzbDph {
  dphOsv = 'typSzbDph.dphOsv',
  dphSniz = 'typSzbDph.dphSniz',
  dphSniz2 = 'typSzbDph.dphSniz2',
  dphZakl = 'typSzbDph.dphZakl',
}
export enum OperaceZurnalSmlouvy {
  manualGenerace = 'operaceZurnalSmlouvy.manualGenerace',
  autoGenerace = 'operaceZurnalSmlouvy.autoGenerace',
}
export enum Zamek {
  otevreno = 'zamek.otevreno',
  prohlednuto = 'zamek.prohlednuto',
  polozamceno = 'zamek.polozamceno',
  zamceno = 'zamek.zamceno',
}
export enum StavDoklObch {
  nespec = 'stavDoklObch.nespec',
  pripraveno = 'stavDoklObch.pripraveno',
  schvaleno = 'stavDoklObch.schvaleno',
  castecneNaCeste = 'stavDoklObch.castecneNaCeste',
  naCeste = 'stavDoklObch.naCeste',
  castVydano = 'stavDoklObch.castVydano',
  vydano = 'stavDoklObch.vydano',
  castHotovo = 'stavDoklObch.castHotovo',
  hotovo = 'stavDoklObch.hotovo',
  storno = 'stavDoklObch.storno',
}
export enum ZaokrJak {
  nahoru = 'zaokrJak.nahoru',
  dolu = 'zaokrJak.dolu',
  matem = 'zaokrJak.matem',
}
export enum ZaokrNa {
  zadne = 'zaokrNa.zadne',
  tisiciny = 'zaokrNa.tisiciny',
  setiny = 'zaokrNa.setiny',
  _5setiny = 'zaokrNa.5setiny',
  desetiny = 'zaokrNa.desetiny',
  _5desetiny = 'zaokrNa.5desetiny',
  jednotky = 'zaokrNa.jednotky',
  _5jednotky = 'zaokrNa.5jednotky',
  desitky = 'zaokrNa.desitky',
  stovky = 'zaokrNa.stovky',
  tisice = 'zaokrNa.tisice',
}
export enum MetodaZaokr {
  zklDph = 'metodaZaokr.zklDph',
  _0sazba = 'metodaZaokr.0sazba',
  individ = 'metodaZaokr.individ',
}
export enum TypPolozky {
  obecny = 'typPolozky.obecny',
  katalog = 'typPolozky.katalog',
  ucetni = 'typPolozky.ucetni',
  text = 'typPolozky.text',
  korekceRekapitulace = 'typPolozky.korekceRekapitulace',
}
export enum Objednat {
  neobjednat = 'objednat.neobjednat',
  objednat = 'objednat.objednat',
  objednano = 'objednat.objednano',
}
export enum RazeniProTisk {
  poradi = 'razeniProTisk.poradi',
  nazev = 'razeniProTisk.nazev',
  kod = 'razeniProTisk.kod',
}
export enum StavUziv {
  bezPrikazu = 'stavUziv.bezPrikazu',
  obsaPrikaz = 'stavUziv.obsaPrikaz',
  castPrikaz = 'stavUziv.castPrikaz',
  celPrikaz = 'stavUziv.celPrikaz',
  nactenoEl = 'stavUziv.nactenoEl',
  nactenoElPosledni = 'stavUziv.nactenoElPosledni',
  genKasa = 'stavUziv.genKasa',
  zauctovano = 'stavUziv.zauctovano',
  zaucZmena = 'stavUziv.zaucZmena',
}
export enum Ekokom {
  zpoplatneneObaly = 'ekokom.zpoplatneneObaly',
  predplaceneObaly = 'ekokom.predplaceneObaly',
  nezaplaceneObaly = 'ekokom.nezaplaceneObaly',
  exportovaneObaly = 'ekokom.exportovaneObaly',
  vyrazeneObaly = 'ekokom.vyrazeneObaly',
}
export enum StavUhr {
  castUhr = 'stavUhr.castUhr',
  uhrazeno = 'stavUhr.uhrazeno',
  uhrazenoRucne = 'stavUhr.uhrazenoRucne',
}
export enum StavOdp {
  cast = 'stavOdp.cast',
  komplet = 'stavOdp.komplet',
  vytvZdd = 'stavOdp.vytvZdd',
}
export enum TypVypCeny {
  marze = 'typVypCeny.marze',
  rabat = 'typVypCeny.rabat',
  sleva = 'typVypCeny.sleva',
  neuveden = 'typVypCeny.neuveden',
}
export enum TypDokladu {
  faktura = 'typDokladu.faktura',
  dobropis = 'typDokladu.dobropis',
  zalohFaktura = 'typDokladu.zalohFaktura',
  zdd = 'typDokladu.zdd',
  dodList = 'typDokladu.dodList',
  proforma = 'typDokladu.proforma',
}
export enum KodPlneni {
  bezVlivu = 'kodPlneni.bezVlivu',
  zbozi = 'kodPlneni.zbozi',
  doprProstr = 'kodPlneni.doprProstr',
  majetek = 'kodPlneni.majetek',
  tristran = 'kodPlneni.tristran',
  sluzby = 'kodPlneni.sluzby',
  osv = 'kodPlneni.osv',
  prenDanPov = 'kodPlneni.prenDanPov',
  prenDanPovOprava = 'kodPlneni.prenDanPovOprava',
  ostatni = 'kodPlneni.ostatni',
  nespec = 'kodPlneni.nespec',
  sluzbyMOSS = 'kodPlneni.sluzbyMOSS',
  sluzbyOSS = 'kodPlneni.sluzbyOSS',
  zboziOSS = 'kodPlneni.zboziOSS',
  mimoEuOSS = 'kodPlneni.mimoEuOSS',
  dovozOSS = 'kodPlneni.dovozOSS',
  oprava = 'kodPlneni.oprava',
  knihy = 'kodPlneni.knihy',
}
export enum JakUhrazeno {
  rucne1 = 'jakUhrazeno.rucne1',
  rucneN = 'jakUhrazeno.rucneN',
  rucneCast = 'jakUhrazeno.rucneCast',
  autoVs = 'jakUhrazeno.autoVs',
  autoVsRuzneMeny = 'jakUhrazeno.autoVsRuzneMeny',
  autoBezVs = 'jakUhrazeno.autoBezVs',
  autoBuc = 'jakUhrazeno.autoBuc',
  autoZak = 'jakUhrazeno.autoZak',
  autoKod = 'jakUhrazeno.autoKod',
}
export enum TypBanUctu {
  kc = 'typBanUctu.kc',
  mena = 'typBanUctu.mena',
}
export enum ElVypisDuplicita {
  vypis = 'elVypisDuplicita.vypis',
  polozka = 'elVypisDuplicita.polozka',
  nekontrolovat = 'elVypisDuplicita.nekontrolovat',
}
export enum ElPrikazStav {
  odeslan = 'elPrikazStav.odeslan',
  vytvoren = 'elPrikazStav.vytvoren',
}
export enum ElPrikazPoplatek {
  odesilatel = 'elPrikazPoplatek.odesilatel',
  prijemce = 'elPrikazPoplatek.prijemce',
  spolecne = 'elPrikazPoplatek.spolecne',
}
export enum StavMail {
  neodesilat = 'stavMail.neodesilat',
  odeslat = 'stavMail.odeslat',
  odeslano = 'stavMail.odeslano',
}
export enum EetTyp {
  ne = 'eetTyp.ne',
  anoBezny = 'eetTyp.anoBezny',
  anoZjednoduseny = 'eetTyp.anoZjednoduseny',
}
export enum EetStav {
  ne = 'eetStav.ne',
  neuspech = 'eetStav.neuspech',
  odeslano = 'eetStav.odeslano',
  neStorno = 'eetStav.neStorno',
  neuspechStorno = 'eetStav.neuspechStorno',
  odeslanoStorno = 'eetStav.odeslanoStorno',
}
export enum TypVazbyDokl {
  uhrada = 'typVazbyDokl.uhrada',
  uhradaKR = 'typVazbyDokl.uhradaKR',
  KR = 'typVazbyDokl.KR',
  ZB = 'typVazbyDokl.ZB',
  PP = 'typVazbyDokl.PP',
  preceneni = 'typVazbyDokl.preceneni',
  hlavaSkl = 'typVazbyDokl.hlavaSkl',
  polozkaSkl = 'typVazbyDokl.polozkaSkl',
  polozkaSklSada = 'typVazbyDokl.polozkaSklSada',
  hlavaSklKus = 'typVazbyDokl.hlavaSklKus',
  polozkaSklKus = 'typVazbyDokl.polozkaSklKus',
  hlavaSklPrevod = 'typVazbyDokl.hlavaSklPrevod',
  polozkaSklPrevod = 'typVazbyDokl.polozkaSklPrevod',
  odpocetZALOHY = 'typVazbyDokl.odpocetZALOHY',
  odpocetZDD = 'typVazbyDokl.odpocetZDD',
  vazbaZDD = 'typVazbyDokl.vazbaZDD',
  uhradaZALOHY = 'typVazbyDokl.uhradaZALOHY',
  odpocetPolZALOHY = 'typVazbyDokl.odpocetPolZALOHY',
  obchod_obchod_hla = 'typVazbyDokl.obchod_obchod_hla',
  obchod_obchod_pol = 'typVazbyDokl.obchod_obchod_pol',
  obchod_faktura_hla = 'typVazbyDokl.obchod_faktura_hla',
  obchod_faktura_pol = 'typVazbyDokl.obchod_faktura_pol',
  obchod_zaloha_hla = 'typVazbyDokl.obchod_zaloha_hla',
  obchod_zaloha_pol = 'typVazbyDokl.obchod_zaloha_pol',
  obchod_sklad_hla = 'typVazbyDokl.obchod_sklad_hla',
  obchod_sklad_pol = 'typVazbyDokl.obchod_sklad_pol',
  zaucProdejky = 'typVazbyDokl.zaucProdejky',
  nakladVynos = 'typVazbyDokl.nakladVynos',
  hlavaDobropis = 'typVazbyDokl.hlavaDobropis',
  polozkaDobropis = 'typVazbyDokl.polozkaDobropis',
  uhrazovanaFaktura = 'typVazbyDokl.uhrazovanaFaktura',
  uhrazujiciDoklad = 'typVazbyDokl.uhrazujiciDoklad',
  odpocitavanaFaktura = 'typVazbyDokl.odpocitavanaFaktura',
}
export enum ModulUcetni {
  FAP = 'modulUcetni.FAP',
  FAV = 'modulUcetni.FAV',
  BAN = 'modulUcetni.BAN',
  POK = 'modulUcetni.POK',
  SKL = 'modulUcetni.SKL',
  INT = 'modulUcetni.INT',
  PHL = 'modulUcetni.PHL',
  ZAV = 'modulUcetni.ZAV',
  MAJ = 'modulUcetni.MAJ',
  LEA = 'modulUcetni.LEA',
}
export enum TypPrilohy {
  logo = 'typPrilohy.logo',
  podRaz = 'typPrilohy.podRaz',
  obrazek = 'typPrilohy.obrazek',
  odkaz = 'typPrilohy.odkaz',
  ostatni = 'typPrilohy.ostatni',
}
export enum DoporuceniCil {
  uhrazeno = 'doporuceniCil.uhrazeno',
  zaokrouhleno = 'doporuceniCil.zaokrouhleno',
}
export enum Jazyk {
  cs = 'jazyk.cs',
  sk = 'jazyk.sk',
  de = 'jazyk.de',
  en = 'jazyk.en',
  fr = 'jazyk.fr',
  hu = 'jazyk.hu',
  it = 'jazyk.it',
  es = 'jazyk.es',
  pl = 'jazyk.pl',
  ro = 'jazyk.ro',
  ru = 'jazyk.ru',
}
export enum TypPrav {
  admin = 'typPrav.admin',
  superUzivatel = 'typPrav.superUzivatel',
  uzivatel = 'typPrav.uzivatel',
  obchodnik = 'typPrav.obchodnik',
  ucetni = 'typPrav.ucetni',
  mzdovyUcetni = 'typPrav.mzdovyUcetni',
  skladnik = 'typPrav.skladnik',
  skladnikSPokladnou = 'typPrav.skladnikSPokladnou',
  jenCist = 'typPrav.jenCist',
  zablokovan = 'typPrav.zablokovan',
}
export enum TypUcJednotky {
  mikro = 'typUcJednotky.mikro',
  mala = 'typUcJednotky.mala',
  velka = 'typUcJednotky.velka',
}
export enum ZobrLogo {
  zachovVelikost = 'zobrLogo.zachovVelikost',
  prizFormatPomeryStran = 'zobrLogo.prizFormatPomeryStran',
  prizFormat = 'zobrLogo.prizFormat',
}
export enum LogoPozice {
  nahore = 'logoPozice.nahore',
  vlevo = 'logoPozice.vlevo',
}
export enum RezimRezervaci {
  rucni = 'rezimRezervaci.rucni',
  zObj = 'rezimRezervaci.zObj',
  zObjPriNaskladneni = 'rezimRezervaci.zObjPriNaskladneni',
}
export enum ZastupceTyp {
  fo = 'zastupceTyp.fo',
  po = 'zastupceTyp.po',
}
export enum TydenPracDoba {
  standard = 'tydenPracDoba.standard',
  dul = 'tydenPracDoba.dul',
  trismenny = 'tydenPracDoba.trismenny',
  dvousmenny = 'tydenPracDoba.dvousmenny',
}
export enum DenniKurz {
  aktualniDen = 'denniKurz.aktualniDen',
  predchoziDen = 'denniKurz.predchoziDen',
}
export enum RocniKurz {
  kalendarniDen = 'rocniKurz.kalendarniDen',
  pracovniDen = 'rocniKurz.pracovniDen',
}
export enum JakyTypDokl {
  zeptat = 'jakyTypDokl.zeptat',
  posledni = 'jakyTypDokl.posledni',
  primarni = 'jakyTypDokl.primarni',
}
export enum PrepocetCen {
  auto = 'prepocetCen.auto',
  none = 'prepocetCen.none',
  ask = 'prepocetCen.ask',
}
export enum FapDatProDuzpUctoK {
  duzpPuv = 'fapDatProDuzpUctoK.duzpPuv',
  datVyst = 'fapDatProDuzpUctoK.datVyst',
  datUcto = 'fapDatProDuzpUctoK.datUcto',
  datSplat = 'fapDatProDuzpUctoK.datSplat',
  aktDatum = 'fapDatProDuzpUctoK.aktDatum',
  neplnit = 'fapDatProDuzpUctoK.neplnit',
}
export enum AutoSendMailMod {
  odesilat = 'autoSendMailMod.odesilat',
  odesilatBcc = 'autoSendMailMod.odesilatBcc',
  neodesilat = 'autoSendMailMod.neodesilat',
}
export enum ZobrazWebKompMod {
  auto = 'zobrazWebKompMod.auto',
  browser = 'zobrazWebKompMod.browser',
}
export enum PredvybranyPocet {
  aktualni = 'predvybranyPocet.aktualni',
  vsechny = 'predvybranyPocet.vsechny',
}
export enum TypUctu {
  rozvahovy = 'typUctu.rozvahovy',
  vysledkovy = 'typUctu.vysledkovy',
  podrozvahovy = 'typUctu.podrozvahovy',
  zaverkovy = 'typUctu.zaverkovy',
  vnitropodnikovy = 'typUctu.vnitropodnikovy',
}
export enum DruhUctu {
  aktivni = 'druhUctu.aktivni',
  aktpasvy = 'druhUctu.aktpasvy',
  pasivni = 'druhUctu.pasivni',
  pasivhvy = 'druhUctu.pasivhvy',
  naklady = 'druhUctu.naklady',
  vynosy = 'druhUctu.vynosy',
  otevknih = 'druhUctu.otevknih',
  uzavknih = 'druhUctu.uzavknih',
  prhosvys = 'druhUctu.prhosvys',
}
export enum ZpusobStahKurz {
  nikdy = 'zpusobStahKurz.nikdy',
  denne = 'zpusobStahKurz.denne',
  mesicne = 'zpusobStahKurz.mesicne',
  rocne = 'zpusobStahKurz.rocne',
}
export enum TypZak {
  nevyrob = 'typZak.nevyrob',
  vyrob = 'typZak.vyrob',
}
export enum DruhStavuZakazky {
  ziskavame = 'druhStavuZakazky.ziskavame',
  mame = 'druhStavuZakazky.mame',
  hotovo = 'druhStavuZakazky.hotovo',
  storno = 'druhStavuZakazky.storno',
}
export enum TypMj {
  delka = 'typMj.delka',
  plocha = 'typMj.plocha',
  objem = 'typMj.objem',
  hmotnost = 'typMj.hmotnost',
  cas = 'typMj.cas',
}
export enum NormalMj {
  gram = 'normalMj.gram',
  kilogram = 'normalMj.kilogram',
  tuna = 'normalMj.tuna',
}
export enum TypPlneni {
  prijata = 'typPlneni.prijata',
  uskutecnena = 'typPlneni.uskutecnena',
  prijataRCH = 'typPlneni.prijataRCH',
  uskutecnenaRCH = 'typPlneni.uskutecnenaRCH',
  obojiRCH = 'typPlneni.obojiRCH',
}
export enum TypObchodu {
  tuzem = 'typObchodu.tuzem',
  EUplatce = 'typObchodu.EUplatce',
  EUneplat = 'typObchodu.EUneplat',
  cizina = 'typObchodu.cizina',
}
export enum OmezPrenDanPov {
  bezOmezeni = 'omezPrenDanPov.bezOmezeni',
  odCastky100k = 'omezPrenDanPov.odCastky100k',
}
export enum TypSablony {
  prvniUpominka = 'typSablony.prvniUpominka',
  druhaUpominka = 'typSablony.druhaUpominka',
  pokusOSmir = 'typSablony.pokusOSmir',
  inventarizace = 'typSablony.inventarizace',
}
export enum FormaUhr {
  prevod = 'formaUhr.prevod',
  hotove = 'formaUhr.hotove',
  slozenka = 'formaUhr.slozenka',
  dobirka = 'formaUhr.dobirka',
  platKart = 'formaUhr.platKart',
  zapocet = 'formaUhr.zapocet',
  jina = 'formaUhr.jina',
  sek = 'formaUhr.sek',
  cenina = 'formaUhr.cenina',
}
export enum UcelCertK {
  osobni = 'ucelCertK.osobni',
  eet = 'ucelCertK.eet',
  finbricks = 'ucelCertK.finbricks',
}
export enum FormaDopravy {
  ppl = 'formaDopravy.ppl',
  ceskaPostaM = 'formaDopravy.ceskaPostaM',
  ceskaPostaPO = 'formaDopravy.ceskaPostaPO',
  geis = 'formaDopravy.geis',
}
export enum CsszRodVztahKod {
  PL = 'csszRodVztahKod.PL',
  MA = 'csszRodVztahKod.MA',
  RP = 'csszRodVztahKod.RP',
  SDO = 'csszRodVztahKod.SDO',
  SO = 'csszRodVztahKod.SO',
  TCH = 'csszRodVztahKod.TCH',
  JIN = 'csszRodVztahKod.JIN',
}
export enum CsszVztahKod {
  _1 = 'csszVztahKod.1',
  _2 = 'csszVztahKod.2',
  _3 = 'csszVztahKod.3',
  _4 = 'csszVztahKod.4',
  _5 = 'csszVztahKod.5',
  _6 = 'csszVztahKod.6',
  _7 = 'csszVztahKod.7',
  _8 = 'csszVztahKod.8',
  _9 = 'csszVztahKod.9',
  _10 = 'csszVztahKod.10',
  _11 = 'csszVztahKod.11',
  _12 = 'csszVztahKod.12',
  _13 = 'csszVztahKod.13',
  _14 = 'csszVztahKod.14',
  _15 = 'csszVztahKod.15',
  _16 = 'csszVztahKod.16',
  _17 = 'csszVztahKod.17',
  _18 = 'csszVztahKod.18',
  _19 = 'csszVztahKod.19',
  _20 = 'csszVztahKod.20',
  _21 = 'csszVztahKod.21',
  _22 = 'csszVztahKod.22',
  _23 = 'csszVztahKod.23',
  _24 = 'csszVztahKod.24',
  _25 = 'csszVztahKod.25',
  _26 = 'csszVztahKod.26',
  _27 = 'csszVztahKod.27',
  _28 = 'csszVztahKod.28',
  _29 = 'csszVztahKod.29',
}
export enum TypCenyVychozi {
  nakCena = 'typCenyVychozi.nakCena',
  zadna = 'typCenyVychozi.zadna',
}
export enum MjZaruky {
  rok = 'mjZaruky.rok',
  mesic = 'mjZaruky.mesic',
  den = 'mjZaruky.den',
}
export enum TypZasoby {
  zbozi = 'typZasoby.zbozi',
  material = 'typZasoby.material',
  nedvyroba = 'typZasoby.nedvyroba',
  polotovar = 'typZasoby.polotovar',
  vyrobek = 'typZasoby.vyrobek',
  zvire = 'typZasoby.zvire',
  sluzba = 'typZasoby.sluzba',
  poplatek = 'typZasoby.poplatek',
}
export enum TypPoplatku {
  obecny = 'typPoplatku.obecny',
  recyklacni = 'typPoplatku.recyklacni',
}
export enum MjHmot {
  gram = 'mjHmot.gram',
  kilogram = 'mjHmot.kilogram',
  tuna = 'mjHmot.tuna',
}
export enum TypObalu {
  obchodProdej = 'typObalu.obchodProdej',
  obchodSkupina = 'typObalu.obchodSkupina',
  obchodPreprava = 'typObalu.obchodPreprava',
  prumysl = 'typObalu.prumysl',
}
export enum TypVzniku {
  vyrobeneVCr = 'typVzniku.vyrobeneVCr',
  nakoupeneVCr = 'typVzniku.nakoupeneVCr',
  importovaneDoCr = 'typVzniku.importovaneDoCr',
}
export enum TypPouziti {
  _1pouziti = 'typPouziti.1pouziti',
  opakovane = 'typPouziti.opakovane',
}
export enum Material {
  mekPlastPet = 'material.mekPlastPet',
  mekPlastPe = 'material.mekPlastPe',
  mekPlastPvc = 'material.mekPlastPvc',
  mekPlastPp = 'material.mekPlastPp',
  mekPlastPs = 'material.mekPlastPs',
  mekPlastXps = 'material.mekPlastXps',
  mekPlastEps = 'material.mekPlastEps',
  mekPlastJine = 'material.mekPlastJine',
  mekPlastBioRozlozit = 'material.mekPlastBioRozlozit',
  mekPlastKompozit = 'material.mekPlastKompozit',
  mekPlastPetVetsi = 'material.mekPlastPetVetsi',
  mekPlastPeVetsi = 'material.mekPlastPeVetsi',
  mekPlastPvcVetsi = 'material.mekPlastPvcVetsi',
  mekPlastPpVetsi = 'material.mekPlastPpVetsi',
  mekPlastPsVetsi = 'material.mekPlastPsVetsi',
  mekPlastXpsVetsi = 'material.mekPlastXpsVetsi',
  mekPlastEpsVetsi = 'material.mekPlastEpsVetsi',
  mekPlastJineVetsi = 'material.mekPlastJineVetsi',
  mekPlastBioRozlozitVetsi = 'material.mekPlastBioRozlozitVetsi',
  mekPlastKompozitVetsi = 'material.mekPlastKompozitVetsi',
  pevDutePlastPet = 'material.pevDutePlastPet',
  pevDutePlastPe = 'material.pevDutePlastPe',
  pevDutePlastPvc = 'material.pevDutePlastPvc',
  pevDutePlastPp = 'material.pevDutePlastPp',
  pevDutePlastPs = 'material.pevDutePlastPs',
  pevDutePlastXps = 'material.pevDutePlastXps',
  pevDutePlastEps = 'material.pevDutePlastEps',
  pevDutePlastJine = 'material.pevDutePlastJine',
  pevDutePlastBioRozlozit = 'material.pevDutePlastBioRozlozit',
  pevDutePlastKompozit = 'material.pevDutePlastKompozit',
  pevDutePlastPetVetsi = 'material.pevDutePlastPetVetsi',
  pevDutePlastPeVetsi = 'material.pevDutePlastPeVetsi',
  pevDutePlastPvcVetsi = 'material.pevDutePlastPvcVetsi',
  pevDutePlastPpVetsi = 'material.pevDutePlastPpVetsi',
  pevDutePlastPsVetsi = 'material.pevDutePlastPsVetsi',
  pevDutePlastXpsVetsi = 'material.pevDutePlastXpsVetsi',
  pevDutePlastEpsVetsi = 'material.pevDutePlastEpsVetsi',
  pevDutePlastJineVetsi = 'material.pevDutePlastJineVetsi',
  pevDutePlastBioRozlozitVetsi = 'material.pevDutePlastBioRozlozitVetsi',
  pevDutePlastKompozitVetsi = 'material.pevDutePlastKompozitVetsi',
  kovyAl = 'material.kovyAl',
  kovyFe = 'material.kovyFe',
  kovyFeKompozit = 'material.kovyFeKompozit',
  kovyAlKompozit = 'material.kovyAlKompozit',
  kovyAlVetsi = 'material.kovyAlVetsi',
  kovyFeVetsi = 'material.kovyFeVetsi',
  kovyFeKompozitVetsi = 'material.kovyFeKompozitVetsi',
  kovyAlKompozitVetsi = 'material.kovyAlKompozitVetsi',
  napojoveKartony = 'material.napojoveKartony',
  napojoveKartonyVetsi = 'material.napojoveKartonyVetsi',
  kompozit = 'material.kompozit',
  kompozitVetsi = 'material.kompozitVetsi',
  skloTransparent = 'material.skloTransparent',
  skloBarevne = 'material.skloBarevne',
  skloKompozit = 'material.skloKompozit',
  papirBezny = 'material.papirBezny',
  papirHladkaLepenka = 'material.papirHladkaLepenka',
  papirVlnitaLepenka = 'material.papirVlnitaLepenka',
  papirNasavanaKart = 'material.papirNasavanaKart',
  papirKompozit = 'material.papirKompozit',
  drevoDrevoDrevotriska = 'material.drevoDrevoDrevotriska',
  drevoKompozit = 'material.drevoKompozit',
  textil = 'material.textil',
  jine = 'material.jine',
}
export enum Surovina {
  primarni = 'surovina.primarni',
  recyklat = 'surovina.recyklat',
}
export enum BarvaMaterialu {
  transparent = 'barvaMaterialu.transparent',
  barevPruhled = 'barvaMaterialu.barevPruhled',
  bareNepruhled = 'barvaMaterialu.bareNepruhled',
}
export enum LitterObal {
  neni = 'litterObal.neni',
  nadobyNaNapoje = 'litterObal.nadobyNaNapoje',
  sackyNaPotraviny = 'litterObal.sackyNaPotraviny',
  napojKelimkyPlast = 'litterObal.napojKelimkyPlast',
  napojKelimkyCastPlast = 'litterObal.napojKelimkyCastPlast',
  nadobyNaPotravinyPlast = 'litterObal.nadobyNaPotravinyPlast',
  nadobyNaPotravinyCastPlast = 'litterObal.nadobyNaPotravinyCastPlast',
  plastTasky15 = 'litterObal.plastTasky15',
  plastTasky50 = 'litterObal.plastTasky50',
}
export enum StavSklad {
  vyfakt = 'stavSklad.vyfakt',
  vyfaktCast = 'stavSklad.vyfaktCast',
  vyfaktHrom = 'stavSklad.vyfaktHrom',
  vyfaktHromCast = 'stavSklad.vyfaktHromCast',
  vygenFakt = 'stavSklad.vygenFakt',
  vygenFaktNeuplny = 'stavSklad.vygenFaktNeuplny',
  uhrazen = 'stavSklad.uhrazen',
  uhrazenCast = 'stavSklad.uhrazenCast',
  uhrazenHrom = 'stavSklad.uhrazenHrom',
  uhrazenHromCast = 'stavSklad.uhrazenHromCast',
  vygenPokl = 'stavSklad.vygenPokl',
  vygenPoklNeuplny = 'stavSklad.vygenPoklNeuplny',
  prevodka = 'stavSklad.prevodka',
  vyroba = 'stavSklad.vyroba',
  nefakturovatelne = 'stavSklad.nefakturovatelne',
}
export enum TypPohybuSklad {
  prijemHoly = 'typPohybuSklad.prijemHoly',
  prijemPolot = 'typPohybuSklad.prijemPolot',
  prijemPoFak = 'typPohybuSklad.prijemPoFak',
  prijemPoObch = 'typPohybuSklad.prijemPoObch',
  prijemPrevod = 'typPohybuSklad.prijemPrevod',
  prijemProFak = 'typPohybuSklad.prijemProFak',
  prijemVyrob = 'typPohybuSklad.prijemVyrob',
  prijemVratka = 'typPohybuSklad.prijemVratka',
  vydejHoly = 'typPohybuSklad.vydejHoly',
  vydejPolot = 'typPohybuSklad.vydejPolot',
  vydejPoFak = 'typPohybuSklad.vydejPoFak',
  vydejPoObch = 'typPohybuSklad.vydejPoObch',
  vydejPrevod = 'typPohybuSklad.vydejPrevod',
  vydejProFakCenik = 'typPohybuSklad.vydejProFakCenik',
  vydejProFakRucne = 'typPohybuSklad.vydejProFakRucne',
  vydejVyrob = 'typPohybuSklad.vydejVyrob',
  prijemVydejVratka = 'typPohybuSklad.prijemVydejVratka',
}
export enum TypUmisteniSklad {
  mistnost = 'typUmisteniSklad.mistnost',
  regal = 'typUmisteniSklad.regal',
  police = 'typUmisteniSklad.police',
}
export enum TypAtribut {
  integer = 'typAtribut.integer',
  numeric = 'typAtribut.numeric',
  retezec = 'typAtribut.retezec',
  datumCas = 'typAtribut.datumCas',
  boolean = 'typAtribut.boolean',
}
export enum StavInventury {
  zahajena = 'stavInventury.zahajena',
  _1vlna = 'stavInventury.1vlna',
  _2vlna = 'stavInventury.2vlna',
  _3vlna = 'stavInventury.3vlna',
  _4vlna = 'stavInventury.4vlna',
  hotova = 'stavInventury.hotova',
  uzavrena = 'stavInventury.uzavrena',
}
export enum DruhMaj {
  hmDl = 'druhMaj.hmDl',
  nehmDl = 'druhMaj.nehmDl',
  drobny = 'druhMaj.drobny',
  neodepis = 'druhMaj.neodepis',
}
export enum ZpusobOdp {
  zar100 = 'zpusobOdp.zar100',
  zar5050 = 'zpusobOdp.zar5050',
  rocne = 'zpusobOdp.rocne',
  rovn = 'typOdp.rovn',
  zrych = 'typOdp.zrych',
  mesic = 'typOdp.mesic',
}
export enum ZvysZrych {
  proc0 = 'zvysZrych.proc0',
  proc10 = 'zvysZrych.proc10',
  proc15 = 'zvysZrych.proc15',
  proc20 = 'zvysZrych.proc20',
}
export enum NahrUcet {
  ne = 'nahrUcet.ne',
  aPocMes = 'nahrUcet.aPocMes',
}
export enum DruhLeas {
  operativ = 'druhLeas.operativ',
  financni = 'druhLeas.financni',
}
export enum FrDanNakl {
  mesicne = 'frDanNakl.mesicne',
  dvoumesi = 'frDanNakl.dvoumesi',
  ctvrtlet = 'frDanNakl.ctvrtlet',
  pololet = 'frDanNakl.pololet',
  rocne = 'frDanNakl.rocne',
}
export enum ClenSpl {
  vstupni = 'clenSpl.vstupni',
  financni = 'clenSpl.financni',
}
export enum TypSpl {
  akontace = 'typSpl.akontace',
  bezna = 'typSpl.bezna',
  prvni = 'typSpl.prvni',
  posledni = 'typSpl.posledni',
  mimFinCin = 'typSpl.mimFinCin',
  prevod = 'typSpl.prevod',
}
export enum TypOdp {
  rovn = 'typOdp.rovn',
  zrych = 'typOdp.zrych',
  mesic = 'typOdp.mesic',
}
export enum TypUdal {
  zarazeni = 'typUdal.zarazeni',
  uplVyr = 'typUdal.uplVyr',
  casVyr = 'typUdal.casVyr',
  techZhod = 'typUdal.techZhod',
  zmenaVstupniCeny = 'typUdal.zmenaVstupniCeny',
  prerOdpDan = 'typUdal.prerOdpDan',
  prerOdpUcet = 'typUdal.prerOdpUcet',
  zahOdpDan = 'typUdal.zahOdpDan',
  zahOdpUcet = 'typUdal.zahOdpUcet',
  rozdilCenyAZustatku = 'typUdal.rozdilCenyAZustatku',
  uzivatelska = 'typUdal.uzivatelska',
}
export enum Pohlavi {
  muz = 'pohlavi.muz',
  zena = 'pohlavi.zena',
}
export enum TypVztahuOsoba {
  zamestnanec = 'typVztahuOsoba.zamestnanec',
  uchazec = 'typVztahuOsoba.uchazec',
  externi = 'typVztahuOsoba.externi',
}
export enum RodStav {
  svobodny = 'rodStav.svobodny',
  vdana_zenaty = 'rodStav.vdana_zenaty',
  rozvedeny = 'rodStav.rozvedeny',
  vdovec = 'rodStav.vdovec',
  druh = 'rodStav.druh',
  registrPartner = 'rodStav.registrPartner',
}
export enum ZpusobPlatby {
  ucet = 'zpusobPlatby.ucet',
  adresa = 'zpusobPlatby.adresa',
  pokladna = 'zpusobPlatby.pokladna',
}
export enum CsszDuvodOsetrovne {
  onemocnela = 'csszDuvodOsetrovne.onemocnela',
  narizenaKaran = 'csszDuvodOsetrovne.narizenaKaran',
  nemuzePecDite = 'csszDuvodOsetrovne.nemuzePecDite',
  uzavrenaSkola = 'csszDuvodOsetrovne.uzavrenaSkola',
}
export enum CsszDuvodOtcovske {
  otc = 'csszDuvodOtcovske.otc',
  zem = 'csszDuvodOtcovske.zem',
  pec = 'csszDuvodOtcovske.pec',
}
export enum CsszDuvodPrevzeti {
  doh = 'csszDuvodPrevzeti.doh',
  one = 'csszDuvodPrevzeti.one',
  roz = 'csszDuvodPrevzeti.roz',
  umr = 'csszDuvodPrevzeti.umr',
}
export enum TypSlozky {
  kopie = 'typSlozky.kopie',
  vstup = 'typSlozky.vstup',
  vypocet = 'typSlozky.vypocet',
  info = 'typSlozky.info',
  dlouhodobNep = 'typSlozky.dlouhodobNep',
  inicializace = 'typSlozky.inicializace',
}
export enum SkupinaSlozky {
  doba = 'skupinaSlozky.doba',
  nepritomnost = 'skupinaSlozky.nepritomnost',
  nepritNemoc = 'skupinaSlozky.nepritNemoc',
  nepritKaran = 'skupinaSlozky.nepritKaran',
  nepritNeplac = 'skupinaSlozky.nepritNeplac',
  nepritVolnoPlac = 'skupinaSlozky.nepritVolnoPlac',
  dovolena = 'skupinaSlozky.dovolena',
  zakladMzda = 'skupinaSlozky.zakladMzda',
  odmeny = 'skupinaSlozky.odmeny',
  priplatky = 'skupinaSlozky.priplatky',
  ostatNahrad = 'skupinaSlozky.ostatNahrad',
  benefity = 'skupinaSlozky.benefity',
  prispevky = 'skupinaSlozky.prispevky',
  hrubaMzda = 'skupinaSlozky.hrubaMzda',
  socPoj = 'skupinaSlozky.socPoj',
  zdravPoj = 'skupinaSlozky.zdravPoj',
  dan = 'skupinaSlozky.dan',
  danSleva = 'skupinaSlozky.danSleva',
  nemocNahrad = 'skupinaSlozky.nemocNahrad',
  srazky = 'skupinaSlozky.srazky',
  zaloha = 'skupinaSlozky.zaloha',
  vyplata = 'skupinaSlozky.vyplata',
  duchod = 'skupinaSlozky.duchod',
  vyneti = 'skupinaSlozky.vyneti',
  ispvFirma = 'skupinaSlozky.ispvFirma',
  ispvZamestnanec = 'skupinaSlozky.ispvZamestnanec',
}
export enum PracRozvrh {
  pravidelny = 'pracRozvrh.pravidelny',
  nepravidelny = 'pracRozvrh.nepravidelny',
}
export enum PlneniOdprDoby {
  rucne = 'plneniOdprDoby.rucne',
  automaticky = 'plneniOdprDoby.automaticky',
}
export enum TypMzdy {
  mesicni = 'typMzdy.mesicni',
  hodinova = 'typMzdy.hodinova',
  podilova = 'typMzdy.podilova',
  ukolova = 'typMzdy.ukolova',
  smisena = 'typMzdy.smisena',
  jina = 'typMzdy.jina',
}
export enum DuvodSlevaSpFirma {
  a = 'duvodSlevaSpFirma.a',
  b = 'duvodSlevaSpFirma.b',
  c = 'duvodSlevaSpFirma.c',
  d = 'duvodSlevaSpFirma.d',
  e = 'duvodSlevaSpFirma.e',
  f = 'duvodSlevaSpFirma.f',
  g = 'duvodSlevaSpFirma.g',
}
export enum CsszDuvodUkonceni {
  _01 = 'csszDuvodUkonceni.01',
  _02 = 'csszDuvodUkonceni.02',
  _03 = 'csszDuvodUkonceni.03',
  _04 = 'csszDuvodUkonceni.04',
  _05 = 'csszDuvodUkonceni.05',
  _05d = 'csszDuvodUkonceni.05d',
  _06 = 'csszDuvodUkonceni.06',
  _07 = 'csszDuvodUkonceni.07',
  _08 = 'csszDuvodUkonceni.08',
  _09 = 'csszDuvodUkonceni.09',
  _10 = 'csszDuvodUkonceni.10',
  _11 = 'csszDuvodUkonceni.11',
  _12 = 'csszDuvodUkonceni.12',
  _13 = 'csszDuvodUkonceni.13',
  _14 = 'csszDuvodUkonceni.14',
  _15 = 'csszDuvodUkonceni.15',
}
export enum CsszDuvodNeposkytnuti {
  _01 = 'csszDuvodNeposkytnuti.01',
  _02 = 'csszDuvodNeposkytnuti.02',
  _03 = 'csszDuvodNeposkytnuti.03',
}
export enum VyznamSlozky {
  dobaFond = 'vyznamSlozky.dobaFond',
  dobaNeodpr = 'vyznamSlozky.dobaNeodpr',
  dobaOdpr = 'vyznamSlozky.dobaOdpr',
  dobaDovol = 'vyznamSlozky.dobaDovol',
  dobaVolnoPlac = 'vyznamSlozky.dobaVolnoPlac',
  mzdaMesicni = 'vyznamSlozky.mzdaMesicni',
  hrubaPrumer = 'vyznamSlozky.hrubaPrumer',
  cistaMzda = 'vyznamSlozky.cistaMzda',
  hrubaMzda = 'vyznamSlozky.hrubaMzda',
  superhrubaMzda = 'vyznamSlozky.superhrubaMzda',
  mzdaNahrada = 'vyznamSlozky.mzdaNahrada',
  dobirka = 'vyznamSlozky.dobirka',
  dan = 'vyznamSlozky.dan',
  danBonus = 'vyznamSlozky.danBonus',
  danSlevPrac = 'vyznamSlozky.danSlevPrac',
  danSlevSum = 'vyznamSlozky.danSlevSum',
  danZaklSraz = 'vyznamSlozky.danZaklSraz',
  danZaklSrazSum = 'vyznamSlozky.danZaklSrazSum',
  danZaklSum = 'vyznamSlozky.danZaklSum',
  danZaloha = 'vyznamSlozky.danZaloha',
  danSrazka = 'vyznamSlozky.danSrazka',
  danRezident = 'vyznamSlozky.danRezident',
  danVypocet = 'vyznamSlozky.danVypocet',
  prispIzolacka = 'vyznamSlozky.prispIzolacka',
  slevaSpFirma = 'vyznamSlozky.slevaSpFirma',
  socPojCelk = 'vyznamSlozky.socPojCelk',
  socPojCelkSniz = 'vyznamSlozky.socPojCelkSniz',
  socPojZakl = 'vyznamSlozky.socPojZakl',
  socPojFirma = 'vyznamSlozky.socPojFirma',
  socPojZaklSniz = 'vyznamSlozky.socPojZaklSniz',
  socPojFirmaSniz = 'vyznamSlozky.socPojFirmaSniz',
  socPojFirmaSnizZap = 'vyznamSlozky.socPojFirmaSnizZap',
  socPojPrac = 'vyznamSlozky.socPojPrac',
  socPojZaklDp = 'vyznamSlozky.socPojZaklDp',
  socPojCelkDp = 'vyznamSlozky.socPojCelkDp',
  socPojSleva = 'vyznamSlozky.socPojSleva',
  nahradaNeschop = 'vyznamSlozky.nahradaNeschop',
  refundNeschop = 'vyznamSlozky.refundNeschop',
  zdravPojCelk = 'vyznamSlozky.zdravPojCelk',
  zdravPojZakl = 'vyznamSlozky.zdravPojZakl',
  zdravPojFirma = 'vyznamSlozky.zdravPojFirma',
  zdravPojPrac = 'vyznamSlozky.zdravPojPrac',
  srazkaSporeni = 'vyznamSlozky.srazkaSporeni',
  zalohaRadna = 'vyznamSlozky.zalohaRadna',
  zalohaMimoradna = 'vyznamSlozky.zalohaMimoradna',
  prescasy = 'vyznamSlozky.prescasy',
  nepritCelk = 'vyznamSlozky.nepritCelk',
  svatek = 'vyznamSlozky.svatek',
  weekend = 'vyznamSlozky.weekend',
  dovolVybrano = 'vyznamSlozky.dovolVybrano',
  dovolZbyva = 'vyznamSlozky.dovolZbyva',
  dovolZbyvaPoKraceni = 'vyznamSlozky.dovolZbyvaPoKraceni',
  dovolPocatek = 'vyznamSlozky.dovolPocatek',
  nemoc = 'vyznamSlozky.nemoc',
  prescas = 'vyznamSlozky.prescas',
  prescasPripl = 'vyznamSlozky.prescasPripl',
  nocniPripl = 'vyznamSlozky.nocniPripl',
  svatekNahrada = 'vyznamSlozky.svatekNahrada',
  premieProc = 'vyznamSlozky.premieProc',
  premiePevna = 'vyznamSlozky.premiePevna',
  premieProcUkaz = 'vyznamSlozky.premieProcUkaz',
  podilNaZisku = 'vyznamSlozky.podilNaZisku',
  pracPracPrum = 'vyznamSlozky.pracPracPrum',
  nepenezPrijmy = 'vyznamSlozky.nepenezPrijmy',
  bezneNahrady = 'vyznamSlozky.bezneNahrady',
  odmeny = 'vyznamSlozky.odmeny',
  slevaDeti = 'vyznamSlozky.slevaDeti',
  prostrediPripl = 'vyznamSlozky.prostrediPripl',
  nepBenefity = 'vyznamSlozky.nepBenefity',
  zdravBenefity = 'vyznamSlozky.zdravBenefity',
  prispevky = 'vyznamSlozky.prispevky',
  prispevkySporStari = 'vyznamSlozky.prispevkySporStari',
  stravenkySrazka = 'vyznamSlozky.stravenkySrazka',
  stravenkyDoLim = 'vyznamSlozky.stravenkyDoLim',
  stravenkyNadLim = 'vyznamSlozky.stravenkyNadLim',
  stravenky = 'vyznamSlozky.stravenky',
}
export enum DatazTypParam {
  string = 'datazTypParam.string',
  logic = 'datazTypParam.logic',
  integer = 'datazTypParam.integer',
  numeric = 'datazTypParam.numeric',
  date = 'datazTypParam.date',
  object = 'datazTypParam.object',
  actId = 'datazTypParam.actId',
  actModul = 'datazTypParam.actModul',
}
export enum DashboardPanelVisibility {
  hidden = 'dashboardPanelVisibility.hidden',
  private = 'dashboardPanelVisibility.private',
  shared = 'dashboardPanelVisibility.shared',
  shared_all = 'dashboardPanelVisibility.shared-all',
}
export enum TypSestavy {
  rozvaha = 'typSestavy.rozvaha',
  vysledov = 'typSestavy.vysledov',
  cashflow = 'typSestavy.cashflow',
  obecna = 'typSestavy.obecna',
  rozvahaIfrs = 'typSestavy.rozvahaIfrs',
  vysledovIfrs = 'typSestavy.vysledovIfrs',
}
export enum TypVypSestavy {
  vTisicich = 'typVypSestavy.vTisicich',
  vJednotkach = 'typVypSestavy.vJednotkach',
  vKcPresne = 'typVypSestavy.vKcPresne',
}
export enum ZpusobVypo {
  stavPoc = 'zpusobVypo.stavPoc',
  stavKon = 'zpusobVypo.stavKon',
  obrat = 'zpusobVypo.obrat',
  obratMd = 'zpusobVypo.obratMd',
  obratDal = 'zpusobVypo.obratDal',
}
export enum GdprTypVztahu {
  spravce = 'gdprTypVztahu.spravce',
  spolSpravce = 'gdprTypVztahu.spolSpravce',
  zpracovatel = 'gdprTypVztahu.zpracovatel',
  subzpracovatel = 'gdprTypVztahu.subzpracovatel',
  prijemce = 'gdprTypVztahu.prijemce',
  jedenZeZprac = 'gdprTypVztahu.jedenZeZprac',
  zastupce = 'gdprTypVztahu.zastupce',
}
export enum StavPriznaniDph {
  radne = 'stavPriznaniDph.radne',
  dodatecne = 'stavPriznaniDph.dodatecne',
  opravne = 'stavPriznaniDph.opravne',
}
export enum StavPriznaniKonVykDph {
  radne = 'stavPriznaniKonVykDph.radne',
  dodatecne = 'stavPriznaniKonVykDph.dodatecne',
  opravne = 'stavPriznaniKonVykDph.opravne',
  nasledne = 'stavPriznaniKonVykDph.nasledne',
  nasledneOpravne = 'stavPriznaniKonVykDph.nasledneOpravne',
}
