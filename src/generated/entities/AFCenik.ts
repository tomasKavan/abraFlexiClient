import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFSkupinaZbozi } from './AFSkupinaZbozi.js'
import { AFMernaJednotka } from './AFMernaJednotka.js'
import { AFStat } from './AFStat.js'
import { AFIntrastatKodNomenklatury } from './AFIntrastatKodNomenklatury.js'
import { AFAdresar } from './AFAdresar.js'
import { AFPreneseniDph } from './AFPreneseniDph.js'
import { AFOdberatel } from './AFOdberatel.js'
import { AFCenikObal } from './AFCenikObal.js'
import { AFAtribut } from './AFAtribut.js'
import { AFSkladovaKarta } from './AFSkladovaKarta.js'
import { AFSadyAKomplety } from './AFSadyAKomplety.js'
import { AFPrislustenstvi } from './AFPrislustenstvi.js'
import { AFPriloha } from './AFPriloha.js'
import { AFPoplatek } from './AFPoplatek.js'
import { AFDodavatel } from './AFDodavatel.js'
import { AFVyrobniCislo } from './AFVyrobniCislo.js'
import { AFStavCeniku } from './AFStavCeniku.js'
import { AFUdalost } from './AFUdalost.js'
import { AFPodobneZbozi } from './AFPodobneZbozi.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'
import { AFCenovaUroven } from './AFCenovaUroven.js'
import { AFCenikTypSazbyDph } from './AFCenikTypSazbyDph.js'
import { AFRezervace } from './AFRezervace.js'


import { TypCeny, ZaokrJak, ZaokrNa, TypSzbDph, TypCenyVychozi, TypVypCeny, MjZaruky, TypZasoby } from '../AFEntityEnums.js'

export class AFCenik extends AFEntity {
  static EntityPath: string = 'cenik'
  static EntityName: string = 'Ceník'
  static EntityType: string = 'CENIK'

  // ID (db: IdCenik) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Kód/zkratka (db: Kod) - Kód/zkratka)
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
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // EAN (db: EanKod) - EAN)
  eanKod?: string
  // Kód PLU (db: KodPlu) - Kód PLU)
  kodPlu?: string
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny
  // %Zakl (db: ProcZakl) - %Zakl)
  procZakl?: Big
  // Individuální cenotvorba (db: IndividCena) - Individuální cenotvorba)
  individCena?: boolean
  // Limit MJ 2 (db: LimMnoz2) - Množ. limit 2)
  limMnoz2?: Big
  // Limit MJ 3 (db: LimMnoz3) - Množ. limit 3)
  limMnoz3?: Big
  // Limit MJ 4 (db: LimMnoz4) - Množ. limit 4)
  limMnoz4?: Big
  // Limit MJ 5 (db: LimMnoz5) - Množ. limit 5)
  limMnoz5?: Big
  // %2 (db: Procento2) - % 2)
  procento2?: Big
  // %3 (db: Procento3) - %3)
  procento3?: Big
  // %4 (db: Procento4) - %4)
  procento4?: Big
  // %5 (db: Procento5) - %5)
  procento5?: Big
  // Cena 2 (db: Cena2) - Množstevní)
  cena2?: Big
  // Cena 3 (db: Cena3) - Cena 3)
  cena3?: Big
  // Cena 4 (db: Cena4) - Cena 4)
  cena4?: Big
  // Cena 5 (db: Cena5) - Cena 5)
  cena5?: Big
  // Způsob zaokr. (db: ZaokrJakK) - Způsob zaokr.)
  zaokrJakK?: ZaokrJak
  // Řád zaokrouhlení (db: ZaokrNaK) - Řád zaokrouhlení)
  zaokrNaK?: ZaokrNa
  // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
  typSzbDphK?: TypSzbDph
  // Počet desetin MJ (db: DesetinMj) - Počet desetin MJ)
  desetinMj?: number
  // Nákupní cena (db: NakupCena) - Nákupní cena)
  nakupCena?: Big
  // Počet MJ v ceně (db: CenJednotka) - Počet MJ v ceně)
  cenJednotka?: Big
  // Výchozí cena (db: TypCenyVychoziK) - Výchozí cena)
  typCenyVychoziK?: TypCenyVychozi
  // Způsob výpočtu (db: TypVypCenyK) - Způsob výpočtu)
  typVypCenyK?: TypVypCeny
  // Výchozí cena pro množ. slevy (db: TypCenyVychozi25K) - Výchozí cena)
  typCenyVychozi25K?: TypCenyVychozi
  // Způsob výpočtu pro množ. slevy (db: TypVypCeny25K) - Způsob výpočtu)
  typVypCeny25K?: TypVypCeny
  // Evid. výr. čís. (db: EvidVyrCis) - Evidovat výrobní čísla)
  evidVyrCis?: boolean
  // Unik. výr. čís. (db: UnikVyrCis) - Výr. čís. musí být unikátní)
  unikVyrCis?: boolean
  // Záruka (db: Zaruka) - Záruka)
  zaruka?: number
  // MJ záruky (db: MjZarukyK) - MJ záruky)
  mjZarukyK?: MjZaruky
  // MJ2 / MJ1 (db: MjKoef2) - MJ2 / MJ1)
  mjKoef2?: Big
  // MJ3 / MJ1 (db: MjKoef3) - MJ3 / MJ1)
  mjKoef3?: Big
  // Prodávat násobky MJ (db: ProdejMj) - Prodávat násobky MJ)
  prodejMj?: Big
  // Hmotnost (netto) (db: HmotMj) - Hmotnost (netto))
  hmotMj?: Big
  // Hmotnost obalu (db: HmotObal) - Hmotnost obalu)
  hmotObal?: Big
  // Objem (db: Objem) - Objem)
  objem?: Big
  // Zatřídění (db: Zatrid) - Zatřídění)
  zatrid?: string
  // Skladové (db: Skladove) - Skladové zboží)
  skladove?: boolean
  // Typ zásoby (db: TypZasobyK) - Typ zásoby)
  typZasobyK?: TypZasoby
  // Balení 1 - Kód nebo název (db: BaleniNazev1) - Kód nebo název)
  baleniNazev1?: string
  // Balení 2 - Kód nebo název (db: BaleniNazev2) - Kód nebo název)
  baleniNazev2?: string
  // Balení 3 - Kód nebo název (db: BaleniNazev3) - Kód nebo název)
  baleniNazev3?: string
  // Balení 4 - Kód nebo název (db: BaleniNazev4) - Kód nebo název)
  baleniNazev4?: string
  // Balení 5 - Kód nebo název (db: BaleniNazev5) - Kód nebo název)
  baleniNazev5?: string
  // Balení 1 - Počet MJ (db: BaleniMj1) - Počet MJ)
  baleniMj1?: Big
  // Balení 2 - Počet MJ (db: BaleniMj2) - Počet MJ)
  baleniMj2?: Big
  // Balení 3 - Počet MJ (db: BaleniMj3) - Počet MJ)
  baleniMj3?: Big
  // Balení 4 - Počet MJ (db: BaleniMj4) - Počet MJ)
  baleniMj4?: Big
  // Balení 5 - Počet MJ (db: BaleniMj5) - Počet MJ)
  baleniMj5?: Big
  // Balení 1 - EAN (db: BaleniEan1) - EAN)
  baleniEan1?: string
  // Balení 2 - EAN (db: BaleniEan2) - EAN)
  baleniEan2?: string
  // Balení 3 - EAN (db: BaleniEan3) - EAN)
  baleniEan3?: string
  // Balení 4 - EAN (db: BaleniEan4) - EAN)
  baleniEan4?: string
  // Balení 5 - EAN (db: BaleniEan5) - EAN)
  baleniEan5?: string
  // Evidovat Intrastat (db: InEvid) - Evidovat Intrastat)
  inEvid?: boolean
  // Koeficient pro MJ (db: InKoefMj) - Koeficient pro MJ)
  inKoefMj?: Big
  // Koeficient pro statistickou hodnotu (db: InKoefStat) - Koeficient pro statistickou hodnotu)
  inKoefStat?: Big
  // Kód sledovanosti druhu zboží (db: InKodSled) - Kód sledovanosti druhu zboží)
  inKodSled?: string
  // Popis EN (db: PopisA) - Popis EN)
  popisA?: string
  // Popis DE (db: PopisB) - Popis DE)
  popisB?: string
  // Popis FR (db: PopisC) - Popis FR)
  popisC?: string
  // Běžná cena (db: CenaBezna) - Běžná cena)
  cenaBezna?: Big
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Export na E-shop (db: ExportNaEshop) - Exportovat na internetový obchod)
  exportNaEshop?: boolean
  // Individuální minimální marže (db: MinMarzeCenik) - Individuální minimální marže)
  minMarzeCenik?: boolean
  // Minimální marže (db: MinMarze) - Minimální marže)
  minMarze?: Big
  // Evid. šar. (db: EvidSarze) - Evidovat šarže)
  evidSarze?: boolean
  // Evid. exp. (db: EvidExpir) - Evidovat expirace)
  evidExpir?: boolean
  // Sada (db: Sada) - Sada)
  sada?: boolean
  // Trvanlivost je X dní po expiraci (db: DnyTrvanPoExpir) - Trvanlivost je X dní po expiraci)
  dnyTrvanPoExpir?: number
  // Neseskupovat na OBV (db: NeseskupovatObj) - Neseskupovat položky při vytváření objednávky vydané)
  neseskupovatObj?: boolean
  // Krátký popis (db: KratkyPopis) - Krátký popis)
  kratkyPopis?: string
  // Klíčová slova (db: KlicSlova) - Klíčová slova)
  klicSlova?: string
  // Technické parametry (db: TechParam) - Technické parametry)
  techParam?: string
  // Dodací lhůta (db: DodaciLhuta) - Dodací lhůta)
  dodaciLhuta?: Big
  // Umožnit prodej na kase (db: ProdejKasa) - Umožnit prodej na kase)
  prodejKasa?: boolean
  // Skupina zboží (db: IdSkupZboz) - Skupina zboží)
  skupZboz?: AFSkupinaZbozi
  // MJ (db: IdMj1) - Měrná jednotka)
  mj1?: AFMernaJednotka
  // MJ č. 2 (db: IdMj2) - MJ č. 2)
  mj2?: AFMernaJednotka
  // MJ č. 3 (db: IdMj3) - MJ č. 3)
  mj3?: AFMernaJednotka
  // MJ hmotnosti (db: IdMjHmot) - MJ hmotnosti)
  mjHmot?: AFMernaJednotka
  // MJ objemu (db: IdMjObj) - MJ objemu)
  mjObj?: AFMernaJednotka
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat
  // Nomenklatura (db: IdNomen) - Nomenklatura)
  nomen?: AFIntrastatKodNomenklatury
  // Dodavatel (db: IdDodavatel) - Dodavatel)
  dodavatel?: AFAdresar
  // Výrobce (db: IdVyrobce) - Výrobce)
  vyrobce?: AFAdresar
  // Kód přenesení DPH (db: IdDphPren) - Kód přenesení DPH)
  dphPren?: AFPreneseniDph
  // MJ Dodací lhůty (db: IdMjDodaciLhuta) - MJ Dodací lhůty)
  mjDodaciLhuta?: AFMernaJednotka
  // Stav skladu (db: ) - Stav skladu)
  sumStavMj?: Big
  // Rezervováno (db: ) - Rezervováno)
  sumRezerMj?: Big
  // Požadavky (db: ) - Požadavky)
  sumPozadavkyMj?: Big
  // Dostupné (db: ) - Dostupné)
  sumDostupMj?: Big
  // Prodejní cena bez DPH (db: ) - bez DPH)
  cenaZaklBezDph?: Big
  // Prodejní cena vč. DPH (db: ) - s DPH)
  cenaZaklVcDph?: Big
  // Prodejní cena (db: CenaZakl) - Prodejní cena)
  cenaZakl?: Big

  // Prodejní ceny (type: ODBERATEL) - odberatele)
  odberatele?: AFOdberatel[]
  // Evidence obalů EkoKom (type: CENIK_OBAL) - cenik-obaly)
  'cenik-obaly'?: AFCenikObal[]
  get cenikObaly(): AFCenikObal[] | undefined { return this['cenik-obaly']}
  // Atributy (type: ATRIBUT) - atributy)
  atributy?: AFAtribut[]
  // Skladová karta (type: SKLADOVA_KARTA) - sklad-karty)
  'sklad-karty'?: AFSkladovaKarta[]
  get skladKarty(): AFSkladovaKarta[] | undefined { return this['sklad-karty']}
  // Sady a komplety (type: SADY_A_KOMPLETY) - sady-a-komplety)
  'sady-a-komplety'?: AFSadyAKomplety[]
  get sadyAKomplety(): AFSadyAKomplety[] | undefined { return this['sady-a-komplety']}
  // Příslušenství (type: PRISLUSENSTVI) - prislustenstvi)
  prislustenstvi?: AFPrislustenstvi[]
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Poplatky (type: POPLATKY) - poplatky)
  poplatky?: AFPoplatek[]
  // Nákupní ceny (type: DODAVATEL) - dodavatele)
  dodavatele?: AFDodavatel[]
  // Výrobní čísla (type: VYROBNI_CISLA) - vyrobni-cisla)
  'vyrobni-cisla'?: AFVyrobniCislo[]
  get vyrobniCisla(): AFVyrobniCislo[] | undefined { return this['vyrobni-cisla']}
  // Stavy položky ceníku (type: STAV_CENIKU) - stavy)
  stavy?: AFStavCeniku[]
  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
  // Podobné zboží (type: PODOBNE_ZBOZI) - podobne-zbozi)
  'podobne-zbozi'?: AFPodobneZbozi[]
  get podobneZbozi(): AFPodobneZbozi[] | undefined { return this['podobne-zbozi']}
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Cenové úrovně (type: CENOVA_UROVEN) - cenHladiny)
  cenHladiny?: AFCenovaUroven[]
  // Typy sazeb DPH (type: TYP_SAZBY_DPH) - typy-sazeb-dph)
  'typy-sazeb-dph'?: AFCenikTypSazbyDph[]
  get typySazebDph(): AFCenikTypSazbyDph[] | undefined { return this['typy-sazeb-dph']}
  // Rezervace (type: REZERVACE) - rezervace)
  rezervace?: AFRezervace[]


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
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 64,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    kodPlu : {
      key: 'kodPlu',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    typCenyDphK : {
      key: 'typCenyDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCeny',
      enum: TypCeny,
      
    },
    procZakl : {
      key: 'procZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    individCena : {
      key: 'individCena',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    limMnoz2 : {
      key: 'limMnoz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz3 : {
      key: 'limMnoz3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz4 : {
      key: 'limMnoz4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz5 : {
      key: 'limMnoz5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    procento2 : {
      key: 'procento2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    procento3 : {
      key: 'procento3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    procento4 : {
      key: 'procento4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    procento5 : {
      key: 'procento5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    cena2 : {
      key: 'cena2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cena3 : {
      key: 'cena3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cena4 : {
      key: 'cena4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cena5 : {
      key: 'cena5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    zaokrJakK : {
      key: 'zaokrJakK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },
    zaokrNaK : {
      key: 'zaokrNaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },
    desetinMj : {
      key: 'desetinMj',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    nakupCena : {
      key: 'nakupCena',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenJednotka : {
      key: 'cenJednotka',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    typCenyVychoziK : {
      key: 'typCenyVychoziK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCenyVychozi',
      enum: TypCenyVychozi,
      
    },
    typVypCenyK : {
      key: 'typVypCenyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
    },
    typCenyVychozi25K : {
      key: 'typCenyVychozi25K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCenyVychozi',
      enum: TypCenyVychozi,
      
    },
    typVypCeny25K : {
      key: 'typVypCeny25K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
    },
    evidVyrCis : {
      key: 'evidVyrCis',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    unikVyrCis : {
      key: 'unikVyrCis',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zaruka : {
      key: 'zaruka',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mjZarukyK : {
      key: 'mjZarukyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MjZaruky',
      enum: MjZaruky,
      
    },
    mjKoef2 : {
      key: 'mjKoef2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mjKoef3 : {
      key: 'mjKoef3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    prodejMj : {
      key: 'prodejMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    hmotMj : {
      key: 'hmotMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    hmotObal : {
      key: 'hmotObal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    objem : {
      key: 'objem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    zatrid : {
      key: 'zatrid',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    skladove : {
      key: 'skladove',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    typZasobyK : {
      key: 'typZasobyK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'TypZasoby',
      enum: TypZasoby,
      
    },
    baleniNazev1 : {
      key: 'baleniNazev1',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    baleniNazev2 : {
      key: 'baleniNazev2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    baleniNazev3 : {
      key: 'baleniNazev3',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    baleniNazev4 : {
      key: 'baleniNazev4',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    baleniNazev5 : {
      key: 'baleniNazev5',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    baleniMj1 : {
      key: 'baleniMj1',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    baleniMj2 : {
      key: 'baleniMj2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    baleniMj3 : {
      key: 'baleniMj3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    baleniMj4 : {
      key: 'baleniMj4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    baleniMj5 : {
      key: 'baleniMj5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    baleniEan1 : {
      key: 'baleniEan1',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    baleniEan2 : {
      key: 'baleniEan2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    baleniEan3 : {
      key: 'baleniEan3',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    baleniEan4 : {
      key: 'baleniEan4',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    baleniEan5 : {
      key: 'baleniEan5',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    inEvid : {
      key: 'inEvid',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    inKoefMj : {
      key: 'inKoefMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    inKoefStat : {
      key: 'inKoefStat',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    inKodSled : {
      key: 'inKodSled',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    popisA : {
      key: 'popisA',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisB : {
      key: 'popisB',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisC : {
      key: 'popisC',
      type: PropertyType.String,
      isArray: false,
      
    },
    cenaBezna : {
      key: 'cenaBezna',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    exportNaEshop : {
      key: 'exportNaEshop',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    minMarzeCenik : {
      key: 'minMarzeCenik',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    minMarze : {
      key: 'minMarze',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    evidSarze : {
      key: 'evidSarze',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    evidExpir : {
      key: 'evidExpir',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sada : {
      key: 'sada',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    dnyTrvanPoExpir : {
      key: 'dnyTrvanPoExpir',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    neseskupovatObj : {
      key: 'neseskupovatObj',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kratkyPopis : {
      key: 'kratkyPopis',
      type: PropertyType.String,
      isArray: false,
      
    },
    klicSlova : {
      key: 'klicSlova',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    techParam : {
      key: 'techParam',
      type: PropertyType.String,
      isArray: false,
      
    },
    dodaciLhuta : {
      key: 'dodaciLhuta',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    prodejKasa : {
      key: 'prodejKasa',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    skupZboz : {
      key: 'skupZboz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaZbozi',
      
    },
    mj1 : {
      key: 'mj1',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    mj2 : {
      key: 'mj2',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    mj3 : {
      key: 'mj3',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    mjHmot : {
      key: 'mjHmot',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    mjObj : {
      key: 'mjObj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    nomen : {
      key: 'nomen',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatKodNomenklatury',
      maxLength: 20,
      
    },
    dodavatel : {
      key: 'dodavatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    vyrobce : {
      key: 'vyrobce',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    dphPren : {
      key: 'dphPren',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPreneseniDph',
      
    },
    mjDodaciLhuta : {
      key: 'mjDodaciLhuta',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    sumStavMj : {
      key: 'sumStavMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    sumRezerMj : {
      key: 'sumRezerMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    sumPozadavkyMj : {
      key: 'sumPozadavkyMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    sumDostupMj : {
      key: 'sumDostupMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenaZaklBezDph : {
      key: 'cenaZaklBezDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenaZaklVcDph : {
      key: 'cenaZaklVcDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenaZakl : {
      key: 'cenaZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },

    odberatele : {
      key: 'odberatele',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFOdberatel'
    },
    'cenik-obaly' : {
      key: 'cenik-obaly',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFCenikObal'
    },
    atributy : {
      key: 'atributy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFAtribut'
    },
    'sklad-karty' : {
      key: 'sklad-karty',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFSkladovaKarta'
    },
    'sady-a-komplety' : {
      key: 'sady-a-komplety',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFSadyAKomplety'
    },
    prislustenstvi : {
      key: 'prislustenstvi',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPrislustenstvi'
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    poplatky : {
      key: 'poplatky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPoplatek'
    },
    dodavatele : {
      key: 'dodavatele',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFDodavatel'
    },
    'vyrobni-cisla' : {
      key: 'vyrobni-cisla',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFVyrobniCislo'
    },
    stavy : {
      key: 'stavy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFStavCeniku'
    },
    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUdalost'
    },
    'podobne-zbozi' : {
      key: 'podobne-zbozi',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPodobneZbozi'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    cenHladiny : {
      key: 'cenHladiny',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFCenovaUroven'
    },
    'typy-sazeb-dph' : {
      key: 'typy-sazeb-dph',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFCenikTypSazbyDph'
    },
    rezervace : {
      key: 'rezervace',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFRezervace'
    },

  }
}