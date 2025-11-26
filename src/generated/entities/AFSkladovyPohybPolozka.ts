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


import { TypCeny, TypSzbDph, TypVypCeny } from '../AFEntityEnums'

export class AFSkladovyPohybPolozka extends AFEntity {
  static EntityPath: string = 'skladovy-pohyb-polozka'
  static EntityName: string = 'Položky příjemky/výdejky'
  static EntityType: string = 'SKLADOVY_POHYB_POLOZKA'

  // ID (db: IdPolSklad) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: any | null
  // Vytvořil (db: IdCreatedBy) - Vytvořil)
  createdBy?: any | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Úč. pol. (db: Ucetni) - Položka je účetní)
  ucetni?: boolean | null
  // Označení (db: Kod) - Označení)
  declare kod?: string | null
  // EAN (db: EanKod) - EAN)
  eanKod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number | null
  // Typ položky (db: TypPolozkyK) - Typ položky)
  typPolozkyK?: any | null
  // Balení (db: BaleniId) - Balení)
  baleniId?: number | null
  // Počet balení (db: MnozBaleni) - Počet balení)
  mnozBaleni?: Big | null
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big | null
  // Příjem MJ (db: ) - Příjem MJ)
  mnozMjPrijem?: Big | null
  // Výdej MJ (db: ) - Výdej MJ)
  mnozMjVydej?: Big | null
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny | null
  // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
  typSzbDphK?: TypSzbDph | null
  // Cena za MJ (db: CenaMj) - Cena za MJ)
  cenaMj?: Big | null
  // Základ [Kč] (db: SumZkl) - Základ [Kč])
  sumZkl?: Big | null
  // Celkem [Kč] (db: sumZkl + sumDph) - Celkem [Kč])
  sumCelkem?: Big | null
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big | null
  // Celkem [měna] (db: sumZklMen + sumDphMen) - Celkem [měna])
  sumCelkemMen?: Big | null
  // Objem (db: Objem) - Objem)
  objem?: Big | null
  // Cen. jednotka (db: CenJednotka) - Cen. jednotka)
  cenJednotka?: Big | null
  // Prodejní cena (db: CenaMjProdej) - Prodejní cena)
  cenaMjProdej?: Big | null
  // Ceníková cena [Kč] (db: CenaMjCenikTuz) - Ceníková cena [Kč])
  cenaMjCenikTuz?: Big | null
  // Šarže (db: Sarze) - Šarže)
  sarze?: string | null
  // Expirace (db: Expirace) - Expirace)
  expirace?: Date | null
  // Trvanlivost (db: DatTrvan) - Trvanlivost)
  datTrvan?: Date | null
  // Datum výroby (db: DatVyroby) - Datum výroby)
  datVyroby?: Date | null
  // Požadavek MJ (db: MnozMjPlan) - Požadavek MJ)
  mnozMjPlan?: Big | null
  // Auto. pol. (db: Autogen) - Autogen)
  autogen?: boolean | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date | null
  // Kopírovat MD účet základu (db: KopZklMdUcet) - Kopírovat MD účet základu)
  kopZklMdUcet?: boolean | null
  // Kopírovat D účet základu (db: KopZklDalUcet) - Kopírovat D účet základu)
  kopZklDalUcet?: boolean | null
  // Kopírovat předpis zaúčtování (db: KopTypUcOp) - Kopírovat předpis zaúčtování)
  kopTypUcOp?: boolean | null
  // Kopírovat zakázku (db: KopZakazku) - Kopírovat zakázku)
  kopZakazku?: boolean | null
  // Kopírovat středisko (db: KopStred) - Kopírovat středisko)
  kopStred?: boolean | null
  // Kopírovat činnost (db: KopCinnost) - Kopírovat činnost)
  kopCinnost?: boolean | null
  // Kopírovat štítky (db: KopKlice) - Kopírovat štítky)
  kopKlice?: boolean | null
  // Kopírovat dat. zaúčt. (db: KopDatUcto) - Kopírovat dat. zaúčt.)
  kopDatUcto?: boolean | null
  // Datum zaúčtování (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date | null
  // Storno (db: Storno) - Storno)
  storno?: boolean | null
  // Storno položky (db: StornoPol) - Storno položky)
  stornoPol?: boolean | null
  // Sklad (db: IdBspSkl) - Sklad)
  sklad?: AFSklad | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani | null
  // Účet MD základ (db: IdZklMdUcet) - Má Dáti základu)
  zklMdUcet?: AFUcet | null
  // Účet Dal základ (db: IdZklDalUcet) - Dal základu)
  zklDalUcet?: AFUcet | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Dodavatel (db: IdFirmy) - Dodavatel)
  dodavatel?: AFAdresar | null
  // Kód z ceníku (db: IdCenik) - Kód z ceníku)
  cenik?: AFCenik | null
  // Cenová úroveň (db: IdCenHlad) - Cenová úroveň)
  cenHlad?: AFCenovaUroven | null
  // MJ (db: IdMj) - MJ)
  mj?: AFMernaJednotka | null
  // MJ objemu (db: IdMjObjem) - MJ objemu)
  mjObjem?: AFMernaJednotka | null
  // Výr. čísla OK (db: VyrobniCislaOk) - Výr. čísla OK)
  vyrobniCislaOk?: boolean | null
  // Zdrojová položka objednávky (db: IdPolObchZdroj) - Zdrojová položka objednávky)
  idPolObchZdroj?: number | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Zdroj (db: Source) - Zdroj)
  source?: string | null
  // Marže (db: ) - Marže)
  marze?: Big | null
  // Přirážka (db: ) - Přirážka)
  prirazka?: Big | null
  // Minimální cenový rozdíl (db: ) - Minimální cenový rozdíl)
  minMarze?: Big | null
  // Typ min. cen. rozdílu (db: ) - Typ hlídaného minimálního cenového rozdílu)
  typVypoctuHlidatMinK?: TypVypCeny | null
  // Stav skladu (db: ) - Stav skladu)
  stavSkladu?: Big | null
  // Rezervováno (db: ) - Rezervováno)
  rezervovano?: Big | null
  // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
  doklSklad?: AFSkladovyPohyb | null
  // Skladová karta (db: IdKarty) - Skladová karta)
  skladovaKarta?: AFSkladovaKarta | null
  // Převodka (db: Prevodka) - Převodka)
  prevodka?: boolean | null
  // Zdroj pro faktury (db: ZdrojProFak) - Zdroj pro faktury)
  zdrojProFak?: boolean | null
  // Cena neskladových částí (db: CenaMjNeskl) - Cena neskladových částí)
  cenaMjNeskl?: Big | null
  // Cena skladových částí (db: CenaMjSkl) - Cena skladových částí)
  cenaMjSkl?: Big | null
  // Ceny zadány ručně (db: CenyRucne) - Ceny zadány ručně)
  cenyRucne?: boolean | null
  // Cena pořízení (db: CenaMjPoriz) - Cena pořízení)
  cenaMjPoriz?: Big | null
  // Vedlejší náklady (db: CenaMjNakl) - Vedlejší náklady)
  cenaMjNakl?: Big | null

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
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    createdDate : {
      key: 'createdDate',
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
    prirazka : {
      key: 'prirazka',
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
    typVypoctuHlidatMinK : {
      key: 'typVypoctuHlidatMinK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
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