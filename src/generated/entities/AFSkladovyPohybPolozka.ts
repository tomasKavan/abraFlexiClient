import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFSklad } from './AFSklad'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFAdresar } from './AFAdresar'
import { AFCenik } from './AFCenik'
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFSkladovaKarta } from './AFSkladovaKarta'
import { AFVyrobniCislo } from './AFVyrobniCislo'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypCeny, TypSzbDph } from '../AFEntityEnums'

export class AFSkladovyPohybPolozka extends AFEntity {
  static EntityPath: string = 'skladovy-pohyb-polozka'
  static EntityName: string = 'Položky příjemky/výdejky'
  static EntityType: string = 'SKLADOVY_POHYB_POLOZKA'

  // ID (db: IdPolSklad) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Úč. pol. (db: Ucetni) - Položka je účetní)
  ucetni?: boolean
  // Označení (db: Kod) - Označení)
  kod?: string
  // EAN (db: EanKod) - EAN)
  eanKod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number
  // Typ položky (db: TypPolozkyK) - Typ položky)
  typPolozkyK?: any
  // Balení (db: BaleniId) - Balení)
  baleniId?: number
  // Počet balení (db: MnozBaleni) - Počet balení)
  mnozBaleni?: Big
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big
  // Příjem MJ (db: ) - Příjem MJ)
  mnozMjPrijem?: Big
  // Výdej MJ (db: ) - Výdej MJ)
  mnozMjVydej?: Big
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny
  // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
  typSzbDphK?: TypSzbDph
  // Cena za MJ (db: CenaMj) - Cena za MJ)
  cenaMj?: Big
  // Základ [Kč] (db: SumZkl) - Základ [Kč])
  sumZkl?: Big
  // Celkem [Kč] (db: sumZkl + sumDph) - Celkem [Kč])
  sumCelkem?: Big
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big
  // Celkem [měna] (db: sumZklMen + sumDphMen) - Celkem [měna])
  sumCelkemMen?: Big
  // Objem (db: Objem) - Objem)
  objem?: Big
  // Cen. jednotka (db: CenJednotka) - Cen. jednotka)
  cenJednotka?: Big
  // Prodejní cena (db: CenaMjProdej) - Prodejní cena)
  cenaMjProdej?: Big
  // Ceníková cena [Kč] (db: CenaMjCenikTuz) - Ceníková cena [Kč])
  cenaMjCenikTuz?: Big
  // Šarže (db: Sarze) - Šarže)
  sarze?: string
  // Expirace (db: Expirace) - Expirace)
  expirace?: Date
  // Trvanlivost (db: DatTrvan) - Trvanlivost)
  datTrvan?: Date
  // Datum výroby (db: DatVyroby) - Datum výroby)
  datVyroby?: Date
  // Požadavek MJ (db: MnozMjPlan) - Požadavek MJ)
  mnozMjPlan?: Big
  // Auto. pol. (db: Autogen) - Autogen)
  autogen?: boolean
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date
  // Kopírovat MD účet základu (db: KopZklMdUcet) - Kopírovat MD účet základu)
  kopZklMdUcet?: boolean
  // Kopírovat D účet základu (db: KopZklDalUcet) - Kopírovat D účet základu)
  kopZklDalUcet?: boolean
  // Kopírovat předpis (db: KopTypUcOp) - Kopírovat předpis)
  kopTypUcOp?: boolean
  // Kopírovat zakázku (db: KopZakazku) - Kopírovat zakázku)
  kopZakazku?: boolean
  // Kopírovat středisko (db: KopStred) - Kopírovat středisko)
  kopStred?: boolean
  // Kopírovat činnost (db: KopCinnost) - Kopírovat činnost)
  kopCinnost?: boolean
  // Kopírovat štítky (db: KopKlice) - Kopírovat štítky)
  kopKlice?: boolean
  // Kopírovat dat. zaúčt. (db: KopDatUcto) - Kopírovat dat. zaúčt.)
  kopDatUcto?: boolean
  // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date
  // Storno (db: Storno) - Storno)
  storno?: boolean
  // Storno položky (db: StornoPol) - Storno položky)
  stornoPol?: boolean
  // Sklad (db: IdBspSkl) - Sklad)
  sklad?: AFSklad
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani
  // Účet MD zákl. (db: IdZklMdUcet) - Má Dáti základu)
  zklMdUcet?: AFUcet
  // Účet Dal zákl. (db: IdZklDalUcet) - Dal základu)
  zklDalUcet?: AFUcet
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Dodavatel (db: IdFirmy) - Dodavatel)
  dodavatel?: AFAdresar
  // Kód z ceníku (db: IdCenik) - Kód z ceníku)
  cenik?: AFCenik
  // Cenová úroveň (db: IdCenHlad) - Cenová úroveň)
  cenHlad?: AFCenovaUroven
  // MJ (db: IdMj) - MJ)
  mj?: AFMernaJednotka
  // MJ objemu (db: IdMjObjem) - MJ objemu)
  mjObjem?: AFMernaJednotka
  // Výr. čísla OK (db: VyrobniCislaOk) - Výr. čísla OK)
  vyrobniCislaOk?: boolean
  // Zdrojová položka objednávky (db: IdPolObchZdroj) - Zdrojová položka objednávky)
  idPolObchZdroj?: number
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Zdroj (db: Source) - Zdroj)
  source?: string
  // Marže (db: ) - Marže)
  marze?: Big
  // Min. marže (db: ) - Min. marže)
  minMarze?: Big
  // Stav skladu (db: ) - Stav skladu)
  stavSkladu?: Big
  // Rezervováno (db: ) - Rezervováno)
  rezervovano?: Big
  // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
  doklSklad?: AFSkladovyPohyb
  // Skladová karta (db: IdKarty) - Skladová karta)
  skladovaKarta?: AFSkladovaKarta
  // Převodka (db: Prevodka) - Převodka)
  prevodka?: boolean
  // Zdroj pro faktury (db: ZdrojProFak) - Zdroj pro faktury)
  zdrojProFak?: boolean
  // Cena neskladových částí (db: CenaMjNeskl) - Cena neskladových částí)
  cenaMjNeskl?: Big
  // Cena skladových částí (db: CenaMjSkl) - Cena skladových částí)
  cenaMjSkl?: Big
  // Ceny zadány ručně (db: CenyRucne) - Ceny zadány ručně)
  cenyRucne?: boolean
  // Cena pořízení (db: CenaMjPoriz) - Cena pořízení)
  cenaMjPoriz?: Big
  // Vedlejší náklady (db: CenaMjNakl) - Vedlejší náklady)
  cenaMjNakl?: Big

  // Výrobní čísla (type: VYROBNI_CISLA) - vyrobniCislaVydana)
  vyrobniCislaVydana?: AFVyrobniCislo[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Výrobní čísla (type: VYROBNI_CISLA) - vyrobniCislaPrijata)
  vyrobniCislaPrijata?: AFVyrobniCislo[]


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
    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 64,
      
    },
    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
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
    cisRad : {
      key: 'cisRad',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typPolozkyK : {
      key: 'typPolozkyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    baleniId : {
      key: 'baleniId',
      type: PropertyType.Integer,
      isArray: false,
      digits: 1,
      
    },
    mnozBaleni : {
      key: 'mnozBaleni',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMj : {
      key: 'mnozMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjPrijem : {
      key: 'mnozMjPrijem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjVydej : {
      key: 'mnozMjVydej',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    typCenyDphK : {
      key: 'typCenyDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCeny',
      enum: TypCeny,
      
    },
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },
    cenaMj : {
      key: 'cenaMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    sumZkl : {
      key: 'sumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkem : {
      key: 'sumCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklMen : {
      key: 'sumZklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkemMen : {
      key: 'sumCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    objem : {
      key: 'objem',
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
    cenaMjProdej : {
      key: 'cenaMjProdej',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenaMjCenikTuz : {
      key: 'cenaMjCenikTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    sarze : {
      key: 'sarze',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    expirace : {
      key: 'expirace',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datTrvan : {
      key: 'datTrvan',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datVyroby : {
      key: 'datVyroby',
      type: PropertyType.Date,
      isArray: false,
      
    },
    mnozMjPlan : {
      key: 'mnozMjPlan',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    autogen : {
      key: 'autogen',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },
    kopZklMdUcet : {
      key: 'kopZklMdUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopZklDalUcet : {
      key: 'kopZklDalUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopTypUcOp : {
      key: 'kopTypUcOp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopZakazku : {
      key: 'kopZakazku',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopStred : {
      key: 'kopStred',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopCinnost : {
      key: 'kopCinnost',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopKlice : {
      key: 'kopKlice',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopDatUcto : {
      key: 'kopDatUcto',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    storno : {
      key: 'storno',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stornoPol : {
      key: 'stornoPol',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    typUcOp : {
      key: 'typUcOp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    zklMdUcet : {
      key: 'zklMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zklDalUcet : {
      key: 'zklDalUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    dodavatel : {
      key: 'dodavatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    cenHlad : {
      key: 'cenHlad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenovaUroven',
      
    },
    mj : {
      key: 'mj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    mjObjem : {
      key: 'mjObjem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    vyrobniCislaOk : {
      key: 'vyrobniCislaOk',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    idPolObchZdroj : {
      key: 'idPolObchZdroj',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    source : {
      key: 'source',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    marze : {
      key: 'marze',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 12,
      
    },
    minMarze : {
      key: 'minMarze',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 12,
      
    },
    stavSkladu : {
      key: 'stavSkladu',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    rezervovano : {
      key: 'rezervovano',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    doklSklad : {
      key: 'doklSklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovyPohyb',
      
    },
    skladovaKarta : {
      key: 'skladovaKarta',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovaKarta',
      
    },
    prevodka : {
      key: 'prevodka',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zdrojProFak : {
      key: 'zdrojProFak',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cenaMjNeskl : {
      key: 'cenaMjNeskl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenaMjSkl : {
      key: 'cenaMjSkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenyRucne : {
      key: 'cenyRucne',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cenaMjPoriz : {
      key: 'cenaMjPoriz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    cenaMjNakl : {
      key: 'cenaMjNakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },

    vyrobniCislaVydana : {
      key: 'vyrobniCislaVydana',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFVyrobniCislo'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    vyrobniCislaPrijata : {
      key: 'vyrobniCislaPrijata',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFVyrobniCislo'
    },

  }
}