import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFSmlouva } from './AFSmlouva'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFZakazka } from './AFZakazka'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFAdresar } from './AFAdresar'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { ZpusobFakt, TypCeny, TypSzbDph } from '../AFEntityEnums'

export class AFSmlouvaPolozka extends AFEntity {
  static EntityPath: string = 'smlouva-polozka'
  static EntityName: string = 'Položky smluv'
  static EntityType: string = 'SMLOUVA_POLOZKA'

  // ID (db: IdPolSml) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Označení (db: Kod) - Označení)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number | null
  // Platnost od (db: PlatiOdData) - Platnost od)
  platiOdData?: Date | null
  // Platnost do (db: PlatiDoData) - Platnost do)
  platiDoData?: Date | null
  // Frekvence fakturace (db: FrekFakt) - Frekvence fakturace)
  frekFakt?: number | null
  // Obrátkový den (db: Den) - Obrátkový den)
  den?: number | null
  // Obrátkový měsíc (db: Mesic) - Obrátkový měsíc)
  mesic?: number | null
  // Způsob fakturace (db: ZpusFaktK) - Způsob fakturace)
  zpusFaktK?: ZpusobFakt | null
  // Fakturovat dní předem/po (db: DnyFakt) - Fakturovat dní předem/po)
  dnyFakt?: number | null
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string | null
  // Cena ručně (db: CenaRucne) - Cena ručně)
  cenaRucne?: boolean | null
  // Cena za MJ (db: CenaMj) - Cena za MJ)
  cenaMj?: Big | null
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big | null
  // Cena celkem (db: CenaCelkem) - Cena celkem)
  cenaCelkem?: Big | null
  // DPH ručně (db: DphRucne) - DPH ručně)
  dphRucne?: boolean | null
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny | null
  // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
  typSzbDphK?: TypSzbDph | null
  // Sleva (db: Sleva) - Sleva)
  sleva?: Big | null
  // Ext. gener. (db: ExtGener) - Ext. gener.)
  extGener?: boolean | null
  // Konec posl. fakt. období (db: DatPoslFaktObd) - Konec posl. fakt. období)
  datPoslFaktObd?: Date | null
  // Generovat položku faktury (db: AutoGen) - Generovat položku faktury)
  autoGen?: boolean | null
  // Valorizovat (db: Valorizovat) - Valorizovat)
  valorizovat?: boolean | null
  // Valorizovat k měsíci (db: ValorizovatMesic) - Valorizovat k měsíci)
  valorizovatMesic?: number | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Číslo došlé (db: CisDosle) - Číslo došlé)
  cisDosle?: string | null
  // Smlouva (db: IdSmlouvy) - Smlouva)
  smlouva?: AFSmlouva | null
  // Kód z ceníku (db: IdCenik) - Kód z ceníku)
  cenik?: AFCenik | null
  // Sklad (db: IdBspSkl) - Sklad)
  sklad?: AFSklad | null
  // Místo (db: IdMisto) - Místo)
  misto?: AFMistoUrceni | null
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani | null
  // Typ faktury (db: IdTypDokl) - Typ faktury)
  typDoklFak?: AFTypFakturyVydane | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Číslo účtu (db: IdBanSpoj) - Číslo účtu)
  banSpoj?: AFAdresarBankovniUcet | null
  // Fakturovat firmě (db: IdFirmyFakt) - Fakturovat firmě)
  firmaFakt?: AFAdresar | null
  // Valorizační položka (db: IdValorPolSml) - Valorizační položka)
  valorPolSml?: AFSmlouvaPolozka | null

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
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
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    cisRad : {
      key: 'cisRad',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiOdData : {
      key: 'platiOdData',
      type: PropertyType.Date,
      isArray: false,
      
    },
    platiDoData : {
      key: 'platiDoData',
      type: PropertyType.Date,
      isArray: false,
      
    },
    frekFakt : {
      key: 'frekFakt',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    den : {
      key: 'den',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesic : {
      key: 'mesic',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    zpusFaktK : {
      key: 'zpusFaktK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZpusobFakt',
      enum: ZpusobFakt,
      
    },
    dnyFakt : {
      key: 'dnyFakt',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    cenaRucne : {
      key: 'cenaRucne',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cenaMj : {
      key: 'cenaMj',
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
    cenaCelkem : {
      key: 'cenaCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    dphRucne : {
      key: 'dphRucne',
      type: PropertyType.Logic,
      isArray: false,
      
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
    sleva : {
      key: 'sleva',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    extGener : {
      key: 'extGener',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datPoslFaktObd : {
      key: 'datPoslFaktObd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    autoGen : {
      key: 'autoGen',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    valorizovat : {
      key: 'valorizovat',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    valorizovatMesic : {
      key: 'valorizovatMesic',
      type: PropertyType.Integer,
      isArray: false,
      
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
    cisDosle : {
      key: 'cisDosle',
      type: PropertyType.String,
      isArray: false,
      maxLength: 40,
      
    },
    smlouva : {
      key: 'smlouva',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSmlouva',
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    misto : {
      key: 'misto',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMistoUrceni',
      
    },
    typUcOp : {
      key: 'typUcOp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    typDoklFak : {
      key: 'typDoklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyVydane',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    banSpoj : {
      key: 'banSpoj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresarBankovniUcet',
      
    },
    firmaFakt : {
      key: 'firmaFakt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    valorPolSml : {
      key: 'valorPolSml',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSmlouvaPolozka',
      
    },

    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUdalost'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}