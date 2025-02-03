import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFCiselnikMzdovychSlozekTypSlozkyK {
  kopie = 'typSlozky.kopie', //Položka vznikla kopií z jiného seznamu
  vstup = 'typSlozky.vstup', //Složku zadá uživatel
  vypocet = 'typSlozky.vypocet', //Složka je automaticky generována
  info = 'typSlozky.info', //Info
  dlouhodobNep = 'typSlozky.dlouhodobNep', //Dlouhodobá nepřítomnost
  inicializace = 'typSlozky.inicializace', //Inicializační složka
}

export enum AFCiselnikMzdovychSlozekSkupSlozkyK {
  doba = 'skupinaSlozky.doba', //Fond pracovní doby
  nepritomnost = 'skupinaSlozky.nepritomnost', //Nepřítomnost
  nepritNemoc = 'skupinaSlozky.nepritNemoc', //Nepřítomnost - nemoc
  nepritKaran = 'skupinaSlozky.nepritKaran', //Nepřítomnost - karanténa
  nepritNeplac = 'skupinaSlozky.nepritNeplac', //Nepřítomnost - neplacená
  nepritVolnoPlac = 'skupinaSlozky.nepritVolnoPlac', //Nepřítomnost - volno placené
  dovolena = 'skupinaSlozky.dovolena', //Dovolená
  zakladMzda = 'skupinaSlozky.zakladMzda', //Základní mzda
  odmeny = 'skupinaSlozky.odmeny', //Odměny
  priplatky = 'skupinaSlozky.priplatky', //Příplatky
  ostatNahrad = 'skupinaSlozky.ostatNahrad', //Ostatní náhrady
  benefity = 'skupinaSlozky.benefity', //Benefity
  prispevky = 'skupinaSlozky.prispevky', //Příspěvky
  hrubaMzda = 'skupinaSlozky.hrubaMzda', //Hrubá mzda
  socPoj = 'skupinaSlozky.socPoj', //Sociální pojištění
  zdravPoj = 'skupinaSlozky.zdravPoj', //Zdravotní pojištění
  dan = 'skupinaSlozky.dan', //Daň
  danSleva = 'skupinaSlozky.danSleva', //Daň - sleva
  nemocNahrad = 'skupinaSlozky.nemocNahrad', //Náhrady nemoc
  srazky = 'skupinaSlozky.srazky', //Srážky
  zaloha = 'skupinaSlozky.zaloha', //Záloha
  vyplata = 'skupinaSlozky.vyplata', //Výplata
  duchod = 'skupinaSlozky.duchod', //Důchod
  vyneti = 'skupinaSlozky.vyneti', //Vynětí
  ispvFirma = 'skupinaSlozky.ispvFirma', //ISPV - firma
  ispvZamestnanec = 'skupinaSlozky.ispvZamestnanec', //ISPV - zaměstnanec
}

export enum AFCiselnikMzdovychSlozekVyznamK {
  dobaFond = 'vyznamSlozky.dobaFond', //Fond pracovní doby
  dobaNeodpr = 'vyznamSlozky.dobaNeodpr', //Neodpracovaná doba celkem
  dobaOdpr = 'vyznamSlozky.dobaOdpr', //Odpracovaná doba celkem
  dobaDovol = 'vyznamSlozky.dobaDovol', //Dovolená
  dobaVolnoPlac = 'vyznamSlozky.dobaVolnoPlac', //Volno placené
  mzdaMesicni = 'vyznamSlozky.mzdaMesicni', //Měsíční mzda (plat)
  hrubaPrumer = 'vyznamSlozky.hrubaPrumer', //Základ pro průměrný výdělek
  cistaMzda = 'vyznamSlozky.cistaMzda', //Čistá mzda
  hrubaMzda = 'vyznamSlozky.hrubaMzda', //Hrubá mzda
  superhrubaMzda = 'vyznamSlozky.superhrubaMzda', //Superhrubá mzda
  mzdaNahrada = 'vyznamSlozky.mzdaNahrada', //Náhrada mzdy
  dobirka = 'vyznamSlozky.dobirka', //Dobírka
  dan = 'vyznamSlozky.dan', //Daň
  danBonus = 'vyznamSlozky.danBonus', //Daňový bonus
  danSlevPrac = 'vyznamSlozky.danSlevPrac', //Sleva - poplatníka
  danSlevSum = 'vyznamSlozky.danSlevSum', //Sleva na dani celkem
  danZaklSraz = 'vyznamSlozky.danZaklSraz', //Základ pro výpočet srážkové daně pro pracovní poměr
  danZaklSrazSum = 'vyznamSlozky.danZaklSrazSum', //Základ pro výpočet srážkové daně
  danZaklSum = 'vyznamSlozky.danZaklSum', //Základ pro výpočet daně
  danZaloha = 'vyznamSlozky.danZaloha', //Záloha na daň - výsledek po slevách a opravách
  danSrazka = 'vyznamSlozky.danSrazka', //Daň srážková
  danRezident = 'vyznamSlozky.danRezident', //Daň rezident
  danVypocet = 'vyznamSlozky.danVypocet', //Daň výpočet
  prispIzolacka = 'vyznamSlozky.prispIzolacka', //Příspěvek - izolačka
  slevaSpFirma = 'vyznamSlozky.slevaSpFirma', //Sleva SP firma
  socPojCelk = 'vyznamSlozky.socPojCelk', //Sociální pojištění celkem
  socPojCelkSniz = 'vyznamSlozky.socPojCelkSniz', //Sociální pojištění celkem snížené
  socPojZakl = 'vyznamSlozky.socPojZakl', //Základ pro sociální pojištění
  socPojFirma = 'vyznamSlozky.socPojFirma', //Soc. pojištění - firma
  socPojZaklSniz = 'vyznamSlozky.socPojZaklSniz', //Základ pro sociální pojištění - snížený
  socPojFirmaSniz = 'vyznamSlozky.socPojFirmaSniz', //Soc. pojištění - firma snížené
  socPojFirmaSnizZap = 'vyznamSlozky.socPojFirmaSnizZap', //Soc. pojištění - firma snížené zapnuto
  socPojPrac = 'vyznamSlozky.socPojPrac', //Soc. pojištění - pracovník
  socPojZaklDp = 'vyznamSlozky.socPojZaklDp', //Základ pro sociální pojištění - pouze DP
  socPojCelkDp = 'vyznamSlozky.socPojCelkDp', //Sociální pojištění celkem - pouze DP
  socPojSleva = 'vyznamSlozky.socPojSleva', //Sleva na sociálním pojištění
  nahradaNeschop = 'vyznamSlozky.nahradaNeschop', //Náhrada mzdy za prac. neschopnost
  refundNeschop = 'vyznamSlozky.refundNeschop', //Refundace náhrady za prac. neschopnost
  zdravPojCelk = 'vyznamSlozky.zdravPojCelk', //Zdravotní pojištění celkem
  zdravPojZakl = 'vyznamSlozky.zdravPojZakl', //Základ pro zdravotní pojištění
  zdravPojFirma = 'vyznamSlozky.zdravPojFirma', //Zdrav. pojištění - zaměstnavatel
  zdravPojPrac = 'vyznamSlozky.zdravPojPrac', //Zdrav. pojištění - pracovník
  srazkaSporeni = 'vyznamSlozky.srazkaSporeni', //Spoření
  zalohaRadna = 'vyznamSlozky.zalohaRadna', //Záloha řádná
  zalohaMimoradna = 'vyznamSlozky.zalohaMimoradna', //Záloha mimořádná
  prescasy = 'vyznamSlozky.prescasy', //Odpracováno - z toho  přesčas
  nepritCelk = 'vyznamSlozky.nepritCelk', //Neodpracovaná doba - nepřítomnost
  svatek = 'vyznamSlozky.svatek', //Odpracováno - z toho  svátek
  weekend = 'vyznamSlozky.weekend', //Odpracováno - z toho v sobotu a v neděli
  dovolVybrano = 'vyznamSlozky.dovolVybrano', //Čerpaná dovolená od počátku roku - celkem
  dovolZbyva = 'vyznamSlozky.dovolZbyva', //Zbývá dovolené v roce
  dovolZbyvaPoKraceni = 'vyznamSlozky.dovolZbyvaPoKraceni', //Zbývající dovolená po krácení
  dovolPocatek = 'vyznamSlozky.dovolPocatek', //Dovolená počátek
  nemoc = 'vyznamSlozky.nemoc', //Nemoc
  prescas = 'vyznamSlozky.prescas', //Mzda za práci přesčas
  prescasPripl = 'vyznamSlozky.prescasPripl', //Příplatek za práci přesčas
  nocniPripl = 'vyznamSlozky.nocniPripl', //Příplatek za noční práci
  svatekNahrada = 'vyznamSlozky.svatekNahrada', //Náhrada za svátek
  premieProc = 'vyznamSlozky.premieProc', //Prémie % ze základní mzdy
  premiePevna = 'vyznamSlozky.premiePevna', //Prémie pevnou částkou
  premieProcUkaz = 'vyznamSlozky.premieProcUkaz', //Prémie % z ukazatele / základu
  podilNaZisku = 'vyznamSlozky.podilNaZisku', //Podíl na zisku
  pracPracPrum = 'vyznamSlozky.pracPracPrum', //Pracovněprávní hodinový průměr
  nepenezPrijmy = 'vyznamSlozky.nepenezPrijmy', //Nepeněžní příjmy
  bezneNahrady = 'vyznamSlozky.bezneNahrady', //Běžné náhrady
  odmeny = 'vyznamSlozky.odmeny', //Odměny
  slevaDeti = 'vyznamSlozky.slevaDeti', //Sleva děti
  prostrediPripl = 'vyznamSlozky.prostrediPripl', //Příplatek za prostředí
  nepBenefity = 'vyznamSlozky.nepBenefity', //Nepeněžní benefity
  zdravBenefity = 'vyznamSlozky.zdravBenefity', //Zdravotní benefity
  prispevky = 'vyznamSlozky.prispevky', //Příspěvky
  prispevkySporStari = 'vyznamSlozky.prispevkySporStari', //Příspěvky spoř. na stáří
  stravenkySrazka = 'vyznamSlozky.stravenkySrazka', //Stravenky srážka zaměstnanec
  stravenkyDoLim = 'vyznamSlozky.stravenkyDoLim', //Stravenky do limitu
  stravenkyNadLim = 'vyznamSlozky.stravenkyNadLim', //Stravenky nad limit
  stravenky = 'vyznamSlozky.stravenky', //Stravenky
}


export class AFCiselnikMzdovychSlozek extends AFEntity {

    // ID (db: IdCisMzdSloz) - ID)
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
    platiOd?: Date

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: Date

    // Pořadí (db: CisRad) - Pořadí)
    cisRad?: number

    // Typ složky (db: TypSlozkyK) - Typ složky)
    typSlozkyK?: any

    // Skupina složky (db: SkupSlozkyK) - Skupina složky)
    skupSlozkyK?: any

    // Společná pro všechny pracovní poměry osoby (db: NaOsobu) - Společná pro všechny pracovní poměry osoby)
    naOsobu?: boolean

    // x Počáteční datum (db: VsDatOd) - x Počáteční datum)
    vsDatOd?: boolean

    // x Koncové datum (db: VsDatDo) - x Koncové datum)
    vsDatDo?: boolean

    // x Dny kalendářní (db: VsDnyKal) - x Dny kalendářní)
    vsDnyKal?: boolean

    // x Dny pracovní (db: VsDnyPrac) - x Dny pracovní)
    vsDnyPrac?: boolean

    // x Dny ve svátek (db: VsDnySvatek) - x Dny ve svátek)
    vsDnySvatek?: boolean

    // x Hodiny (db: VsHodiny) - x Hodiny)
    vsHodiny?: boolean

    // x Hodiny ve svátek (db: VsHodinySvatek) - x Hodiny ve svátek)
    vsHodinySvatek?: boolean

    // x Částka za hodinu (db: VsCastNaHod) - x Částka za hodinu)
    vsCastNaHod?: boolean

    // x Částka za den (db: VsCastNaDen) - x Částka za den)
    vsCastNaDen?: boolean

    // x Procento / konstanta (db: VsProcMzd) - x Procento / konstanta)
    vsProcMzd?: boolean

    // x Základ (db: VsZaklMzd) - x Základ)
    vsZaklMzd?: boolean

    // x Základ je krácen úvazkem (db: VsZaklJeKracen) - x Základ je krácen úvazkem)
    vsZaklJeKracen?: boolean

    // x Částka (db: VsCastMzd) - x Částka)
    vsCastMzd?: boolean

    // x Uživatelská změna částky (db: VsZmenaCastMzd) - x Uživatelská změna částky)
    vsZmenaCastMzd?: boolean

    // x Počet měsíců za které složka platí (db: VsPocetMes) - x Počet měsíců za které složka platí)
    vsPocetMes?: boolean

    // x Číslo dokladu (pro nemoc) (db: VsCisDoklNem) - x Číslo dokladu (pro nemoc))
    vsCisDoklNem?: boolean

    // x Doplatek do zdravotního pojištění (db: VsDoplatZdrPoj) - x Doplatek do zdravotního pojištění)
    vsDoplatZdrPoj?: boolean

    // x Denní průměr (db: VsPrumNaDenNem) - x Denní průměr)
    vsPrumNaDenNem?: boolean

    // x Hodinový průměr (db: VsPrumNaHodNem) - x Hodinový průměr)
    vsPrumNaHodNem?: boolean

    // Význam (db: VyznamK) - Význam)
    vyznamK?: any

    // Dny pr. (db: DnyPrac) - Dny pracovní)
    dnyPrac?: Big

    // Dny kal. (db: DnyKal) - Dny kalendářní)
    dnyKal?: Big

    // Dny sv. (db: DnySvatek) - Dny ve svátek)
    dnySvatek?: Big

    // Hodiny (db: Hodiny) - Hodiny)
    hodiny?: Big

    // Kč/hod. (db: CastkaHod) - Částka za hodinu)
    castkaHod?: Big

    // Kč/den (db: CastkaDen) - Částka za den)
    castkaDen?: Big

    // % / konst. (db: ProcMzd) - Procento / konstanta)
    procMzd?: Big

    // Základ (db: ZaklMzd) - Základ mzdy)
    zaklMzd?: Big

    // x Základ je krácen úvazkem (db: ZaklJeKracen) - x Základ je krácen úvazkem)
    zaklJeKracen?: boolean

    // Částka (db: CastMzd) - Částka)
    castMzd?: Big

    // Uživ.zm. (db: ZmenaCastMzd) - Uživatelská změna částky)
    zmenaCastMzd?: boolean

    // Platí (db: PocetMes) - Počet měsíců za které složka platí)
    pocetMes?: number

    // Doklad (db: CisDoklNem) - Číslo dokladu (pro nemoc))
    cisDoklNem?: number

    // Denní průměr (db: PrumNaDenNem) - Denní průměr)
    prumNaDenNem?: Big

    // Hodinový průměr (db: PrumNaHodNem) - Hodinový průměr)
    prumNaHodNem?: Big

    // Dopl.ZP (db: DoplatZdravK) - Doplatek do zdravotního pojištění)
    doplatZdravK?: any

    // Pracovní složka (nezobrazuje se) (db: Pracovni) - Pracovní složka (nezobrazuje se))
    pracovni?: boolean

    // Ukládat nulové (db: UkladatNulove) - Ukládat nulové)
    ukladatNulove?: boolean

    // Malá páska (db: PaskaMala) - Malá páska)
    paskaMala?: boolean

    // Velká páska (db: PaskaVelka) - Velká páska)
    paskaVelka?: boolean

    // Viditelná pole (db: PaskaPole) - Viditelná pole)
    paskaPole?: string

    // Zápočtový list (db: ZapoctovyList) - Zápočtový list)
    zapoctovyList?: boolean

    // UUID (db: Uuid) - UUID)
    uuid?: string


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}