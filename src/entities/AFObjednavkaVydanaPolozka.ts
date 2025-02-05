import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFSklad } from './AFSklad'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFZakazka } from './AFZakazka'
import { AFAdresar } from './AFAdresar'
import { AFCenik } from './AFCenik'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSazbaDph } from './AFSazbaDph'
import { AFObjednavkaVydana } from './AFObjednavkaVydana'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPolozky, TypCeny, TypSzbDph, Objednat } from './AFEntityEnums'

export class AFObjednavkaVydanaPolozka extends AFEntity {
  static EntityPath: string = 'objednavka-vydana-polozka'
  static EntityName: string = 'Položky vydané objednávky'
  static EntityType: string = 'OBJEDNAVKA_OUT_POLOZKA'

  // ID (db: IdPolObch) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
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
  typPolozkyK?: TypPolozky
  // Balení (db: BaleniId) - Balení)
  baleniId?: number
  // Počet balení (db: MnozBaleni) - Počet balení)
  mnozBaleni?: Big
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny
  // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
  typSzbDphK?: TypSzbDph
  // DPH [%] (db: SzbDph) - DPH [%])
  szbDph?: Big
  // Cena za MJ (db: CenaMj) - Cena za MJ)
  cenaMj?: Big
  // Sleva položky[%] (db: SlevaPol) - Sleva položky)
  slevaPol?: Big
  // ? sleva hlav. (db: UplSlevaDokl) - uplatnit slevu z dokladu)
  uplSlevaDokl?: boolean
  // Základ [Kč] (db: SumZkl) - Základ [Kč])
  sumZkl?: Big
  // DPH [Kč] (db: SumDph) - DPH [Kč])
  sumDph?: Big
  // Celkem [Kč] (db: sumZkl + sumDph) - Celkem [Kč])
  sumCelkem?: Big
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big
  // DPH [měna] (db: SumDphMen) - DPH [měna])
  sumDphMen?: Big
  // Celkem [měna] (db: sumZklMen + sumDphMen) - Celkem [měna])
  sumCelkemMen?: Big
  // Objem (db: Objem) - Objem)
  objem?: Big
  // Cen. jednotka (db: CenJednotka) - Cen. jednotka)
  cenJednotka?: Big
  // Objednat u dod. (db: ObjednatK) - Objednat u dodavatele)
  objednatK?: Objednat
  // Plán MJ (db: MnozMjPlan) - Plánované množství)
  mnozMjPlan?: Big
  // Real. MJ (db: MnozMjReal) - Realizované množství)
  mnozMjReal?: Big
  // Auto. pol. (db: Autogen) - Autogen)
  autogen?: boolean
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Sleva [%] (db: SlevaDokl) - Sleva [%])
  slevaDokl?: Big
  // Datum vyst. (db: DatVyst) - Vystaveno)
  datVyst?: Date
  // Kopírovat zakázku (db: KopZakazku) - Kopírovat zakázku)
  kopZakazku?: boolean
  // Kopírovat středisko (db: KopStred) - Kopírovat středisko)
  kopStred?: boolean
  // Kopírovat činnost (db: KopCinnost) - Kopírovat činnost)
  kopCinnost?: boolean
  // Kopírovat štítky (db: KopKlice) - Kopírovat štítky)
  kopKlice?: boolean
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
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Dodavatel (db: IdFirmy) - Dodavatel)
  dodavatel?: AFAdresar
  // Kód z ceníku (db: IdCenik) - Kód z ceníku)
  cenik?: AFCenik
  // MJ (db: IdMj) - MJ)
  mj?: AFMernaJednotka
  // MJ objemu (db: IdMjObjem) - MJ objemu)
  mjObjem?: AFMernaJednotka
  // Sazba DPH (db: IdSazbyDph) - Sazba DPH)
  sazbaDph?: AFSazbaDph
  // Zdrojová položka objednávky (db: IdPolObchZdroj) - Zdrojová položka objednávky)
  idPolObchZdroj?: number
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Zdroj (db: Source) - Zdroj)
  source?: string
  // Stav skladu (db: ) - Stav skladu)
  stavSkladu?: Big
  // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
  doklObch?: AFObjednavkaVydana
  // Poplatek k položce (db: IdPolObchPoplatek) - Poplatek k položce)
  poplatekParentPolObch?: AFObjednavkaVydanaPolozka
  // Termín (db: DatTermin) - Termín)
  datTermin?: Date
  // Kopírovat termín (db: KopDatTermin) - Kopírovat termín)
  kopDatTermin?: boolean

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
      enumName: 'TypPolozky',
      enum: TypPolozky,
      
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
    szbDph : {
      key: 'szbDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    cenaMj : {
      key: 'cenaMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    slevaPol : {
      key: 'slevaPol',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    uplSlevaDokl : {
      key: 'uplSlevaDokl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sumZkl : {
      key: 'sumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDph : {
      key: 'sumDph',
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
    sumDphMen : {
      key: 'sumDphMen',
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
    objednatK : {
      key: 'objednatK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Objednat',
      enum: Objednat,
      
    },
    mnozMjPlan : {
      key: 'mnozMjPlan',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal : {
      key: 'mnozMjReal',
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
    slevaDokl : {
      key: 'slevaDokl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
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
      afClass: AFSklad,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCinnost,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      maxLength: 30,
      
    },
    dodavatel : {
      key: 'dodavatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenik,
      maxLength: 64,
      
    },
    mj : {
      key: 'mj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMernaJednotka,
      
    },
    mjObjem : {
      key: 'mjObjem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMernaJednotka,
      
    },
    sazbaDph : {
      key: 'sazbaDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSazbaDph,
      
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
    stavSkladu : {
      key: 'stavSkladu',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    doklObch : {
      key: 'doklObch',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFObjednavkaVydana,
      
    },
    poplatekParentPolObch : {
      key: 'poplatekParentPolObch',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFObjednavkaVydanaPolozka,
      
    },
    datTermin : {
      key: 'datTermin',
      type: PropertyType.Date,
      isArray: false,
      
    },
    kopDatTermin : {
      key: 'kopDatTermin',
      type: PropertyType.Logic,
      isArray: false,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}