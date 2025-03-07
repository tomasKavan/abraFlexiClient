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
  idAktualMzdy?: number
  // Rok (db: ) - Rok)
  rok?: number
  // Měsíc (db: ) - Měsíc)
  mesic?: number
  // Vypočteno (db: ) - Datum výpočtu)
  datumVypocet?: Date
  // Datum (db: ) - Datum)
  datum?: Date
  // Osob.č. (db: ) - Osobní číslo)
  osbCis?: string
  // Příjmení a jméno (db: ) - Příjmení a jméno)
  jmeno?: string
  // Hlavička osoby (db: ) - Hlavička osoby)
  osobaHlav?: AFOsobaHlavicka
  // Osoba (db: ) - Osoba)
  osoba?: AFOsoba
  // Skupina (db: ) - Skupina osob)
  skupOsob?: AFSkupinaOsob
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko
  // Zdr.pojiš. (db: ) - Zdravotní pojišťovna)
  zdravPoj?: AFAdresar
  // Pracovní poměr (db: ) - Pracovní poměr)
  pracPom?: AFPracovniPomer
  // Fond (db: ) - Fond pracovní doby)
  dobaFond?: Big
  // Neodp.doba (db: ) - Neodpracovaná doba celkem)
  dobaNeodpr?: Big
  // Odprac.doba (db: ) - Odpracovaná doba celkem)
  dobaOdpr?: Big
  // Odprac.dny (db: ) - Odpracované dny celkem)
  dobaOdprDny?: Big
  // Nemoc (db: ) - Nemoc)
  nemoc?: Big
  // Dovolená (db: ) - Dovolená)
  dobaDovol?: Big
  // Dovolená částka (db: ) - Dovolená částka)
  dobaDovolCastka?: Big
  // Čerp. dov. od poč. roku (db: ) - Čerpaná dovolená od počátku roku - celkem)
  dovolVybrano?: Big
  // Zbývá dov. (db: ) - Zbývá dovolené v roce)
  dovolZbyva?: Big
  // Zbývá dov. po krácení (db: ) - Zbývá dovolené v roce po krácení)
  dovolZbyvaPoKraceni?: Big
  // Volno placené (db: ) - Volno placené)
  dobaVolnoPlac?: Big
  // Volno placené částka (db: ) - Volno placené částka)
  dobaVolnoPlacCastka?: Big
  // Nepřít. (db: ) - Neodpracovaná doba - nepřítomnost)
  nepritCelk?: Big
  // Přesčas hod. (db: ) - Přesčas hod.)
  prescasHodiny?: Big
  // Svátek hod. (db: ) - Odpracováno - svátek - hodiny)
  svatekHodiny?: Big
  // Weekend hod. (db: ) - Odpracováno - weekend - hodiny)
  weekendHodiny?: Big
  // Měs.mzda (db: ) - Měsíční mzda (plat))
  mzdaMesicni?: Big
  // Svátek Kč (db: ) - Odpracováno - svátek - částka)
  svatekCastka?: Big
  // Weekend Kč (db: ) - Odpracováno - weekend - částka)
  weekendCastka?: Big
  // Přesčas Kč (db: ) - Přesčas - částka)
  prescasCastka?: Big
  // Přípl.přesčas (db: ) - Příplatek za práci přesčas)
  prescasPripl?: Big
  // Přípl.noc (db: ) - Příplatek za noční práci)
  nocniPripl?: Big
  // Náhr.svátek (db: ) - Náhráda za svátek)
  svatekNahrada?: Big
  // Hod.náhr.svátek (db: ) - Náhráda za svátek - hodiny)
  svatekNahradaHodiny?: Big
  // Prémie % (db: ) - Prémie % ze základní mzdy)
  premieProc?: Big
  // Prémi pev. (db: ) - Prémie pevnou částkou)
  premiePevna?: Big
  // Prémie % ukaz. (db: ) - Prémie % z ukazatele / základu)
  premieProcUkaz?: Big
  // Podíl (db: ) - Podíl na zisku)
  podilNaZisku?: Big
  // PPP (db: ) - Pracovněprávní hodinový průměr)
  pracPracPrum?: Big
  // Nepeněžní (db: ) - Nepeněžní příjmy)
  nepenezPrijmy?: Big
  // Běžné náhrady (db: ) - Běžné náhrady)
  bezneNahrady?: Big
  // Odměny (db: ) - Odměny)
  odmeny?: Big
  // Základ pro průměrný výdělek (db: ) - Základ pro průměrný výdělek)
  hrubaPrumer?: Big
  // Čistá mzda (db: ) - Čistá mzda)
  cistaMzda?: Big
  // Hrubá m. (db: ) - Hrubá mzda)
  hrubaMzda?: Big
  // SHM (db: ) - Superhrubá mzda)
  superhrubaMzda?: Big
  // Náhrady (db: ) - Náhrada mzdy)
  mzdaNahrada?: Big
  // Přisp. izolačka (db: ) - Příspěvek ke karanténě (izolačka))
  prispIzolacka?: Big
  // Sleva SP firma (db: ) - Sleva SP firma (krácené úvazky))
  slevaSpFirma?: Big
  // Daň (db: ) - Daň)
  dan?: Big
  // Bonus (db: ) - Daňový bonus)
  danBonus?: Big
  // Sleva popl. (db: ) - Sleva - poplatníka)
  danSlevPrac?: Big
  // Sleva celk. (db: ) - Sleva na dani celkem)
  danSlevSum?: Big
  // Základ pro sráž. daň (db: ) - Základ pro sráž. daň)
  danZaklSraz?: Big
  // Zákl.sráž.daně (db: ) - Základ pro sráž. daň celkem)
  danZaklSrazSum?: Big
  // Zákl.daně (db: ) - Základ pro výpočet daně)
  danZaklSum?: Big
  // Záloha (db: ) - Záloha na daň)
  danZaloha?: Big
  // Srá.daň. (db: ) - Srážková daň)
  danSrazka?: Big
  // Daň rezident (db: ) - Daň rezident)
  danRezident?: Big
  // Vypočtená daň (db: ) - Vypočtená daň)
  danVypocet?: Big
  // Sleva děti (db: ) - Sleva děti)
  slevaDeti?: Big
  // Soc.poj. (db: ) - Sociální poj. celkem)
  socPojCelk?: Big
  // Soc.poj.sníž. (db: ) - Sociální poj. celkem snížené)
  socPojCelkSniz?: Big
  // Soc.poj.zákl. (db: ) - Sociální poj. základ)
  socPojZakl?: Big
  // Soc.poj.zákl.sníž. (db: ) - Soc. poj. základ - snížený)
  socPojZaklSniz?: Big
  // Soc.poj.firma (db: ) - Sociální poj. firma)
  socPojFirma?: Big
  // Soc.poj.firma sníž. (db: ) - Sociální poj. firma snížené)
  socPojFirmaSniz?: Big
  // Soc.poj.firma sníž.zap. (db: ) - Sociální poj. firma snížené zapnuto)
  socPojFirmaSnizZap?: Big
  // Soc.poj.prac. (db: ) - Sociální poj. pracovník)
  socPojPrac?: Big
  // Soc.poj.zákl.DP (db: ) - Soc. poj. základ DP)
  socPojZaklDp?: Big
  // Soc.poj.DP (db: ) - Soc. poj. celkem DP)
  socPojCelkDp?: Big
  // Sociální poj. sleva (db: ) - Sociální poj. sleva)
  socPojSleva?: Big
  // Náhr.nesch. (db: ) - Náhrada neschopnost)
  nahradaNeschop?: Big
  // Refund.náhr. (db: ) - Refundace neschopnost)
  refundNeschop?: Big
  // Zdr.poj. (db: ) - Zdravotní poj. celkem)
  zdravPojCelk?: Big
  // Zdr.poj.zákl. (db: ) - Zdravotní poj. základ)
  zdravPojZakl?: Big
  // Zdr.poj.firma (db: ) - Zdravotní poj. firma)
  zdravPojFirma?: Big
  // Zdr.poj.prac. (db: ) - Zdravotní poj. pracovník)
  zdravPojPrac?: Big
  // Srážky (db: ) - Srážky)
  srazkaSporeni?: Big
  // Zál.řádná (db: ) - Zál.řádná)
  zalohaRadna?: Big
  // Dobírka (db: ) - Dobírka)
  dobirka?: Big
  // Zál.mim. (db: ) - Záloha mimořádná)
  zalohaMimoradna?: Big
  // Spadá do soc.pojištění (db: ) - Spadá do soc.pojištění)
  socPojCelkSpada?: Big
  // Druhý pilíř (db: ) - Druhý pilíř)
  duchodSpor?: Big
  // Přípl.prostř. (db: ) - Příplatek za prostředí)
  prostrediPripl?: Big



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
    prostrediPripl : {
      key: 'prostrediPripl',
      type: PropertyType.Numeric,
      isArray: false,
      
    },


  }
}