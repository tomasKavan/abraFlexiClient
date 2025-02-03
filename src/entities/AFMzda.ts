import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFOsoba } from './AFOsoba'
import { AFSkupinaOsob } from './AFSkupinaOsob'
import { AFStredisko } from './AFStredisko'
import { AFAdresar } from './AFAdresar'
import { AFPracovniPomer } from './AFPracovniPomer'


export class AFMzda extends AFEntity {

    // ID (db: undefined) - ID)
    idAktualMzdy?: number

    // Rok (db: undefined) - Rok)
    rok?: number

    // Měsíc (db: undefined) - Měsíc)
    mesic?: number

    // Vypočteno (db: undefined) - Datum výpočtu)
    datumVypocet?: Date

    // Datum (db: undefined) - Datum)
    datum?: Date

    // Osob.č. (db: undefined) - Osobní číslo)
    osbCis?: string

    // Příjmení a jméno (db: undefined) - Příjmení a jméno)
    jmeno?: string

    // Hlavička osoby (db: undefined) - Hlavička osoby)
    osobaHlav?: AFOsobaHlavicka

    // Osoba (db: undefined) - Osoba)
    osoba?: AFOsoba

    // Skupina (db: undefined) - Skupina osob)
    skupOsob?: AFSkupinaOsob

    // Středisko (db: undefined) - Středisko)
    stredisko?: AFStredisko

    // Zdr.pojiš. (db: undefined) - Zdravotní pojišťovna)
    zdravPoj?: AFAdresar

    // Pracovní poměr (db: undefined) - Pracovní poměr)
    pracPom?: AFPracovniPomer

    // Fond (db: undefined) - Fond pracovní doby)
    dobaFond?: Big

    // Neodp.doba (db: undefined) - Neodpracovaná doba celkem)
    dobaNeodpr?: Big

    // Odprac.doba (db: undefined) - Odpracovaná doba celkem)
    dobaOdpr?: Big

    // Odprac.dny (db: undefined) - Odpracované dny celkem)
    dobaOdprDny?: Big

    // Nemoc (db: undefined) - Nemoc)
    nemoc?: Big

    // Dovolená (db: undefined) - Dovolená)
    dobaDovol?: Big

    // Dovolená částka (db: undefined) - Dovolená částka)
    dobaDovolCastka?: Big

    // Čerp. dov. od poč. roku (db: undefined) - Čerpaná dovolená od počátku roku - celkem)
    dovolVybrano?: Big

    // Zbývá dov. (db: undefined) - Zbývá dovolené v roce)
    dovolZbyva?: Big

    // Zbývá dov. po krácení (db: undefined) - Zbývá dovolené v roce po krácení)
    dovolZbyvaPoKraceni?: Big

    // Volno placené (db: undefined) - Volno placené)
    dobaVolnoPlac?: Big

    // Volno placené částka (db: undefined) - Volno placené částka)
    dobaVolnoPlacCastka?: Big

    // Nepřít. (db: undefined) - Neodpracovaná doba - nepřítomnost)
    nepritCelk?: Big

    // Přesčas hod. (db: undefined) - Přesčas hod.)
    prescasHodiny?: Big

    // Svátek hod. (db: undefined) - Odpracováno - svátek - hodiny)
    svatekHodiny?: Big

    // Weekend hod. (db: undefined) - Odpracováno - weekend - hodiny)
    weekendHodiny?: Big

    // Měs.mzda (db: undefined) - Měsíční mzda (plat))
    mzdaMesicni?: Big

    // Svátek Kč (db: undefined) - Odpracováno - svátek - částka)
    svatekCastka?: Big

    // Weekend Kč (db: undefined) - Odpracováno - weekend - částka)
    weekendCastka?: Big

    // Přesčas Kč (db: undefined) - Přesčas - částka)
    prescasCastka?: Big

    // Přípl.přesčas (db: undefined) - Příplatek za práci přesčas)
    prescasPripl?: Big

    // Přípl.noc (db: undefined) - Příplatek za noční práci)
    nocniPripl?: Big

    // Náhr.svátek (db: undefined) - Náhráda za svátek)
    svatekNahrada?: Big

    // Hod.náhr.svátek (db: undefined) - Náhráda za svátek - hodiny)
    svatekNahradaHodiny?: Big

    // Prémie % (db: undefined) - Prémie % ze základní mzdy)
    premieProc?: Big

    // Prémi pev. (db: undefined) - Prémie pevnou částkou)
    premiePevna?: Big

    // Prémie % ukaz. (db: undefined) - Prémie % z ukazatele / základu)
    premieProcUkaz?: Big

    // Podíl (db: undefined) - Podíl na zisku)
    podilNaZisku?: Big

    // PPP (db: undefined) - Pracovněprávní hodinový průměr)
    pracPracPrum?: Big

    // Nepeněžní (db: undefined) - Nepeněžní příjmy)
    nepenezPrijmy?: Big

    // Běžné náhrady (db: undefined) - Běžné náhrady)
    bezneNahrady?: Big

    // Odměny (db: undefined) - Odměny)
    odmeny?: Big

    // Základ pro průměrný výdělek (db: undefined) - Základ pro průměrný výdělek)
    hrubaPrumer?: Big

    // Čistá mzda (db: undefined) - Čistá mzda)
    cistaMzda?: Big

    // Hrubá m. (db: undefined) - Hrubá mzda)
    hrubaMzda?: Big

    // SHM (db: undefined) - Superhrubá mzda)
    superhrubaMzda?: Big

    // Náhrady (db: undefined) - Náhrada mzdy)
    mzdaNahrada?: Big

    // Přisp. izolačka (db: undefined) - Příspěvek ke karanténě (izolačka))
    prispIzolacka?: Big

    // Sleva SP firma (db: undefined) - Sleva SP firma (krácené úvazky))
    slevaSpFirma?: Big

    // Daň (db: undefined) - Daň)
    dan?: Big

    // Bonus (db: undefined) - Daňový bonus)
    danBonus?: Big

    // Sleva popl. (db: undefined) - Sleva - poplatníka)
    danSlevPrac?: Big

    // Sleva celk. (db: undefined) - Sleva na dani celkem)
    danSlevSum?: Big

    // Základ pro sráž. daň (db: undefined) - Základ pro sráž. daň)
    danZaklSraz?: Big

    // Zákl.sráž.daně (db: undefined) - Základ pro sráž. daň celkem)
    danZaklSrazSum?: Big

    // Zákl.daně (db: undefined) - Základ pro výpočet daně)
    danZaklSum?: Big

    // Záloha (db: undefined) - Záloha na daň)
    danZaloha?: Big

    // Srá.daň. (db: undefined) - Srážková daň)
    danSrazka?: Big

    // Daň rezident (db: undefined) - Daň rezident)
    danRezident?: Big

    // Vypočtená daň (db: undefined) - Vypočtená daň)
    danVypocet?: Big

    // Sleva děti (db: undefined) - Sleva děti)
    slevaDeti?: Big

    // Soc.poj. (db: undefined) - Sociální poj. celkem)
    socPojCelk?: Big

    // Soc.poj.sníž. (db: undefined) - Sociální poj. celkem snížené)
    socPojCelkSniz?: Big

    // Soc.poj.zákl. (db: undefined) - Sociální poj. základ)
    socPojZakl?: Big

    // Soc.poj.zákl.sníž. (db: undefined) - Soc. poj. základ - snížený)
    socPojZaklSniz?: Big

    // Soc.poj.firma (db: undefined) - Sociální poj. firma)
    socPojFirma?: Big

    // Soc.poj.firma sníž. (db: undefined) - Sociální poj. firma snížené)
    socPojFirmaSniz?: Big

    // Soc.poj.firma sníž.zap. (db: undefined) - Sociální poj. firma snížené zapnuto)
    socPojFirmaSnizZap?: Big

    // Soc.poj.prac. (db: undefined) - Sociální poj. pracovník)
    socPojPrac?: Big

    // Soc.poj.zákl.DP (db: undefined) - Soc. poj. základ DP)
    socPojZaklDp?: Big

    // Soc.poj.DP (db: undefined) - Soc. poj. celkem DP)
    socPojCelkDp?: Big

    // Sociální poj. sleva (db: undefined) - Sociální poj. sleva)
    socPojSleva?: Big

    // Náhr.nesch. (db: undefined) - Náhrada neschopnost)
    nahradaNeschop?: Big

    // Refund.náhr. (db: undefined) - Refundace neschopnost)
    refundNeschop?: Big

    // Zdr.poj. (db: undefined) - Zdravotní poj. celkem)
    zdravPojCelk?: Big

    // Zdr.poj.zákl. (db: undefined) - Zdravotní poj. základ)
    zdravPojZakl?: Big

    // Zdr.poj.firma (db: undefined) - Zdravotní poj. firma)
    zdravPojFirma?: Big

    // Zdr.poj.prac. (db: undefined) - Zdravotní poj. pracovník)
    zdravPojPrac?: Big

    // Srážky (db: undefined) - Srážky)
    srazkaSporeni?: Big

    // Zál.řádná (db: undefined) - Zál.řádná)
    zalohaRadna?: Big

    // Dobírka (db: undefined) - Dobírka)
    dobirka?: Big

    // Zál.mim. (db: undefined) - Záloha mimořádná)
    zalohaMimoradna?: Big

    // Spadá do soc.pojištění (db: undefined) - Spadá do soc.pojištění)
    socPojCelkSpada?: Big

    // Druhý pilíř (db: undefined) - Druhý pilíř)
    duchodSpor?: Big

    // Přípl.prostř. (db: undefined) - Příplatek za prostředí)
    prostrediPripl?: Big


}