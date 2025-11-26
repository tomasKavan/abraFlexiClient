import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFOsoba } from './AFOsoba'
import { AFSkupinaOsob } from './AFSkupinaOsob'
import { AFStredisko } from './AFStredisko'
import { AFAdresar } from './AFAdresar'
import { AFPracovniPomer } from './AFPracovniPomer'




export class AFMzda extends AFEntity {
  static EntityPath: string = 'mzda'
  static EntityName: string = 'Aktualizace mezd'
  static EntityType: string = 'MZDA'

  // ID (db: ) - ID)
  idAktualMzdy?: number | null
  // Rok (db: ) - Rok)
  rok?: number | null
  // Měsíc (db: ) - Měsíc)
  mesic?: number | null
  // Vypočteno (db: ) - Datum výpočtu)
  datumVypocet?: Date | null
  // Datum (db: ) - Datum)
  datum?: Date | null
  // Osob.č. (db: ) - Osobní číslo)
  osbCis?: string | null
  // Příjmení a jméno (db: ) - Příjmení a jméno)
  jmeno?: string | null
  // Hlavička osoby (db: ) - Hlavička osoby)
  osobaHlav?: AFOsobaHlavicka | null
  // Osoba (db: ) - Osoba)
  osoba?: AFOsoba | null
  // Skupina (db: ) - Skupina osob)
  skupOsob?: AFSkupinaOsob | null
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko | null
  // Zdr.pojiš. (db: ) - Zdravotní pojišťovna)
  zdravPoj?: AFAdresar | null
  // Pracovní poměr (db: ) - Pracovní poměr)
  pracPom?: AFPracovniPomer | null
  // Fond (db: ) - Fond pracovní doby)
  dobaFond?: Big | null
  // Neodp.doba (db: ) - Neodpracovaná doba celkem)
  dobaNeodpr?: Big | null
  // Odprac.doba (db: ) - Odpracovaná doba celkem)
  dobaOdpr?: Big | null
  // Odprac.dny (db: ) - Odpracované dny celkem)
  dobaOdprDny?: Big | null
  // Nemoc (db: ) - Nemoc)
  nemoc?: Big | null
  // Dovolená (db: ) - Dovolená)
  dobaDovol?: Big | null
  // Dovolená částka (db: ) - Dovolená částka)
  dobaDovolCastka?: Big | null
  // Čerp. dov. od poč. roku (db: ) - Čerpaná dovolená od počátku roku - celkem)
  dovolVybrano?: Big | null
  // Zbývá dov. (db: ) - Zbývá dovolené v roce)
  dovolZbyva?: Big | null
  // Zbývá dov. po krácení (db: ) - Zbývá dovolené v roce po krácení)
  dovolZbyvaPoKraceni?: Big | null
  // Volno placené (db: ) - Volno placené)
  dobaVolnoPlac?: Big | null
  // Volno placené částka (db: ) - Volno placené částka)
  dobaVolnoPlacCastka?: Big | null
  // Nepřít. (db: ) - Neodpracovaná doba - nepřítomnost)
  nepritCelk?: Big | null
  // Přesčas hod. (db: ) - Přesčas hod.)
  prescasHodiny?: Big | null
  // Svátek hod. (db: ) - Odpracováno - svátek - hodiny)
  svatekHodiny?: Big | null
  // Weekend hod. (db: ) - Odpracováno - weekend - hodiny)
  weekendHodiny?: Big | null
  // Měs.mzda (db: ) - Měsíční mzda (plat))
  mzdaMesicni?: Big | null
  // Svátek Kč (db: ) - Odpracováno - svátek - částka)
  svatekCastka?: Big | null
  // Víkend Kč (db: ) - Odpracováno - weekend - částka)
  weekendCastka?: Big | null
  // Přesčas Kč (db: ) - Přesčas - částka)
  prescasCastka?: Big | null
  // Přípl.přesčas (db: ) - Příplatek za práci přesčas)
  prescasPripl?: Big | null
  // Přípl.noc (db: ) - Příplatek za noční práci)
  nocniPripl?: Big | null
  // Náhr.svátek (db: ) - Náhráda za svátek)
  svatekNahrada?: Big | null
  // Hod.náhr.svátek (db: ) - Náhráda za svátek - hodiny)
  svatekNahradaHodiny?: Big | null
  // Prémie % (db: ) - Prémie % ze základní mzdy)
  premieProc?: Big | null
  // Prémi pev. (db: ) - Prémie pevnou částkou)
  premiePevna?: Big | null
  // Prémie % ukaz. (db: ) - Prémie % z ukazatele / základu)
  premieProcUkaz?: Big | null
  // Podíl (db: ) - Podíl na zisku)
  podilNaZisku?: Big | null
  // PPP (db: ) - Pracovněprávní hodinový průměr)
  pracPracPrum?: Big | null
  // Nepeněžní (db: ) - Nepeněžní příjmy)
  nepenezPrijmy?: Big | null
  // Běžné náhrady (db: ) - Běžné náhrady)
  bezneNahrady?: Big | null
  // Odměny (db: ) - Odměny)
  odmeny?: Big | null
  // Základ pro průměrný výdělek (db: ) - Základ pro průměrný výdělek)
  hrubaPrumer?: Big | null
  // Čistá mzda (db: ) - Čistá mzda)
  cistaMzda?: Big | null
  // Hrubá m. (db: ) - Hrubá mzda)
  hrubaMzda?: Big | null
  // SHM (db: ) - Superhrubá mzda)
  superhrubaMzda?: Big | null
  // Náhrady (db: ) - Náhrada mzdy)
  mzdaNahrada?: Big | null
  // Přisp. izolačka (db: ) - Příspěvek ke karanténě (izolačka))
  prispIzolacka?: Big | null
  // Sleva SP firma (db: ) - Sleva SP firma (krácené úvazky))
  slevaSpFirma?: Big | null
  // Daň (db: ) - Daň)
  dan?: Big | null
  // Bonus (db: ) - Daňový bonus)
  danBonus?: Big | null
  // Sleva popl. (db: ) - Sleva - poplatníka)
  danSlevPrac?: Big | null
  // Sleva celk. (db: ) - Sleva na dani celkem)
  danSlevSum?: Big | null
  // Základ pro sráž. daň (db: ) - Základ pro sráž. daň)
  danZaklSraz?: Big | null
  // Zákl.sráž.daně (db: ) - Základ pro sráž. daň celkem)
  danZaklSrazSum?: Big | null
  // Zákl.daně (db: ) - Základ pro výpočet daně)
  danZaklSum?: Big | null
  // Záloha (db: ) - Záloha na daň)
  danZaloha?: Big | null
  // Srá.daň. (db: ) - Srážková daň)
  danSrazka?: Big | null
  // Daň rezident (db: ) - Daň rezident)
  danRezident?: Big | null
  // Vypočtená daň (db: ) - Vypočtená daň)
  danVypocet?: Big | null
  // Sleva děti (db: ) - Sleva děti)
  slevaDeti?: Big | null
  // Soc.poj. (db: ) - Sociální poj. celkem)
  socPojCelk?: Big | null
  // Soc.poj.sníž. (db: ) - Sociální poj. celkem snížené)
  socPojCelkSniz?: Big | null
  // Soc.poj.zákl. (db: ) - Sociální poj. základ)
  socPojZakl?: Big | null
  // Soc.poj.zákl.sníž. (db: ) - Soc. poj. základ - snížený)
  socPojZaklSniz?: Big | null
  // Soc.poj.firma (db: ) - Sociální poj. firma)
  socPojFirma?: Big | null
  // Soc.poj.firma sníž. (db: ) - Sociální poj. firma snížené)
  socPojFirmaSniz?: Big | null
  // Soc.poj.firma sníž.zap. (db: ) - Sociální poj. firma snížené zapnuto)
  socPojFirmaSnizZap?: Big | null
  // Soc.poj.prac. (db: ) - Sociální poj. pracovník)
  socPojPrac?: Big | null
  // Soc.poj.zákl.DP (db: ) - Soc. poj. základ DP)
  socPojZaklDp?: Big | null
  // Soc.poj.DP (db: ) - Soc. poj. celkem DP)
  socPojCelkDp?: Big | null
  // Sociální poj. sleva (db: ) - Sociální poj. sleva)
  socPojSleva?: Big | null
  // Náhr.nesch. (db: ) - Náhrada neschopnost)
  nahradaNeschop?: Big | null
  // Refund.náhr. (db: ) - Refundace neschopnost)
  refundNeschop?: Big | null
  // Zdr.poj. (db: ) - Zdravotní poj. celkem)
  zdravPojCelk?: Big | null
  // Zdr.poj.zákl. (db: ) - Zdravotní poj. základ)
  zdravPojZakl?: Big | null
  // Zdr.poj.firma (db: ) - Zdravotní poj. firma)
  zdravPojFirma?: Big | null
  // Zdr.poj.prac. (db: ) - Zdravotní poj. pracovník)
  zdravPojPrac?: Big | null
  // Srážky (db: ) - Srážky)
  srazkaSporeni?: Big | null
  // Zál.řádná (db: ) - Zál.řádná)
  zalohaRadna?: Big | null
  // Dobírka (db: ) - Dobírka)
  dobirka?: Big | null
  // Zál.mim. (db: ) - Záloha mimořádná)
  zalohaMimoradna?: Big | null
  // Spadá do soc.pojištění (db: ) - Spadá do soc.pojištění)
  socPojCelkSpada?: Big | null
  // Druhý pilíř (db: ) - Druhý pilíř)
  duchodSpor?: Big | null
  // Zákl. daně nezaokr. (db: ) - Základ daně nezaokrouhlený)
  zakladDaneNezaokr?: Big | null
  // Přípl.prostř. (db: ) - Příplatek za prostředí)
  prostrediPripl?: Big | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    idAktualMzdy : {
      key: 'idAktualMzdy',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    rok : {
      key: 'rok',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesic : {
      key: 'mesic',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    datumVypocet : {
      key: 'datumVypocet',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datum : {
      key: 'datum',
      type: PropertyType.Date,
      isArray: false,
      
    },
    osbCis : {
      key: 'osbCis',
      type: PropertyType.String,
      isArray: false,
      
    },
    jmeno : {
      key: 'jmeno',
      type: PropertyType.String,
      isArray: false,
      
    },
    osobaHlav : {
      key: 'osobaHlav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsoba',
      
    },
    skupOsob : {
      key: 'skupOsob',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaOsob',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    zdravPoj : {
      key: 'zdravPoj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPracovniPomer',
      
    },
    dobaFond : {
      key: 'dobaFond',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dobaNeodpr : {
      key: 'dobaNeodpr',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dobaOdpr : {
      key: 'dobaOdpr',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dobaOdprDny : {
      key: 'dobaOdprDny',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    nemoc : {
      key: 'nemoc',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dobaDovol : {
      key: 'dobaDovol',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dobaDovolCastka : {
      key: 'dobaDovolCastka',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dovolVybrano : {
      key: 'dovolVybrano',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dovolZbyva : {
      key: 'dovolZbyva',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dovolZbyvaPoKraceni : {
      key: 'dovolZbyvaPoKraceni',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dobaVolnoPlac : {
      key: 'dobaVolnoPlac',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dobaVolnoPlacCastka : {
      key: 'dobaVolnoPlacCastka',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    nepritCelk : {
      key: 'nepritCelk',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    prescasHodiny : {
      key: 'prescasHodiny',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    svatekHodiny : {
      key: 'svatekHodiny',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    weekendHodiny : {
      key: 'weekendHodiny',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    mzdaMesicni : {
      key: 'mzdaMesicni',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    svatekCastka : {
      key: 'svatekCastka',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    weekendCastka : {
      key: 'weekendCastka',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    prescasCastka : {
      key: 'prescasCastka',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    prescasPripl : {
      key: 'prescasPripl',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    nocniPripl : {
      key: 'nocniPripl',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    svatekNahrada : {
      key: 'svatekNahrada',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    svatekNahradaHodiny : {
      key: 'svatekNahradaHodiny',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    premieProc : {
      key: 'premieProc',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    premiePevna : {
      key: 'premiePevna',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    premieProcUkaz : {
      key: 'premieProcUkaz',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    podilNaZisku : {
      key: 'podilNaZisku',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    pracPracPrum : {
      key: 'pracPracPrum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    nepenezPrijmy : {
      key: 'nepenezPrijmy',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    bezneNahrady : {
      key: 'bezneNahrady',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    odmeny : {
      key: 'odmeny',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    hrubaPrumer : {
      key: 'hrubaPrumer',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    cistaMzda : {
      key: 'cistaMzda',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    hrubaMzda : {
      key: 'hrubaMzda',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    superhrubaMzda : {
      key: 'superhrubaMzda',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    mzdaNahrada : {
      key: 'mzdaNahrada',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    prispIzolacka : {
      key: 'prispIzolacka',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    slevaSpFirma : {
      key: 'slevaSpFirma',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    dan : {
      key: 'dan',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danBonus : {
      key: 'danBonus',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danSlevPrac : {
      key: 'danSlevPrac',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danSlevSum : {
      key: 'danSlevSum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danZaklSraz : {
      key: 'danZaklSraz',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danZaklSrazSum : {
      key: 'danZaklSrazSum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danZaklSum : {
      key: 'danZaklSum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danZaloha : {
      key: 'danZaloha',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danSrazka : {
      key: 'danSrazka',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danRezident : {
      key: 'danRezident',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    danVypocet : {
      key: 'danVypocet',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    slevaDeti : {
      key: 'slevaDeti',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    socPojCelk : {
      key: 'socPojCelk',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    socPojCelkSniz : {
      key: 'socPojCelkSniz',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    socPojZakl : {
      key: 'socPojZakl',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    socPojZaklSniz : {
      key: 'socPojZaklSniz',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    socPojFirma : {
      key: 'socPojFirma',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    socPojFirmaSniz : {
      key: 'socPojFirmaSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    socPojFirmaSnizZap : {
      key: 'socPojFirmaSnizZap',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    socPojPrac : {
      key: 'socPojPrac',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    socPojZaklDp : {
      key: 'socPojZaklDp',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    socPojCelkDp : {
      key: 'socPojCelkDp',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    socPojSleva : {
      key: 'socPojSleva',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    nahradaNeschop : {
      key: 'nahradaNeschop',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    refundNeschop : {
      key: 'refundNeschop',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zdravPojCelk : {
      key: 'zdravPojCelk',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zdravPojZakl : {
      key: 'zdravPojZakl',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zdravPojFirma : {
      key: 'zdravPojFirma',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zdravPojPrac : {
      key: 'zdravPojPrac',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    srazkaSporeni : {
      key: 'srazkaSporeni',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zalohaRadna : {
      key: 'zalohaRadna',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    dobirka : {
      key: 'dobirka',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zalohaMimoradna : {
      key: 'zalohaMimoradna',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    socPojCelkSpada : {
      key: 'socPojCelkSpada',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    duchodSpor : {
      key: 'duchodSpor',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zakladDaneNezaokr : {
      key: 'zakladDaneNezaokr',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    prostrediPripl : {
      key: 'prostrediPripl',
      type: PropertyType.Numeric,
      isArray: false,
      
    },


  }
}