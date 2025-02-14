import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFSmlouva } from './AFSmlouva.js'
import { AFCenik } from './AFCenik.js'
import { AFSklad } from './AFSklad.js'
import { AFMistoUrceni } from './AFMistoUrceni.js'
import { AFPredpisZauctovani } from './AFPredpisZauctovani.js'
import { AFTypFakturyVydane } from './AFTypFakturyVydane.js'
import { AFStredisko } from './AFStredisko.js'
import { AFCinnost } from './AFCinnost.js'
import { AFZakazka } from './AFZakazka.js'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet.js'
import { AFAdresar } from './AFAdresar.js'
import { AFPriloha } from './AFPriloha.js'
import { AFUdalost } from './AFUdalost.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { ZpusobFakt, TypCeny, TypSzbDph } from '../AFEntityEnums.js'

export class AFSmlouvaPolozka extends AFEntity {
  static EntityPath: string = 'smlouva-polozka'
  static EntityName: string = 'Položky smluv'
  static EntityType: string = 'SMLOUVA_POLOZKA'

  // ID (db: IdPolSml) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Označení (db: Kod) - Označení)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Pořadí (db: CisRad) - Pořadí)
  cisRad?: number
  // Platnost od (db: PlatiOdData) - Platnost od)
  platiOdData?: Date
  // Platnost do (db: PlatiDoData) - Platnost do)
  platiDoData?: Date
  // Frekvence fakturace (db: FrekFakt) - Frekvence fakturace)
  frekFakt?: number
  // Obrátkový den (db: Den) - Obrátkový den)
  den?: number
  // Obrátkový měsíc (db: Mesic) - Obrátkový měsíc)
  mesic?: number
  // Způsob fakturace (db: ZpusFaktK) - Způsob fakturace)
  zpusFaktK?: ZpusobFakt
  // Fakturovat dní předem/po (db: DnyFakt) - Fakturovat dní předem/po)
  dnyFakt?: number
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string
  // Cena ručně (db: CenaRucne) - Cena ručně)
  cenaRucne?: boolean
  // Cena za MJ (db: CenaMj) - Cena za MJ)
  cenaMj?: Big
  // Množství (db: MnozMj) - Množství)
  mnozMj?: Big
  // Cena celkem (db: CenaCelkem) - Cena celkem)
  cenaCelkem?: Big
  // DPH ručně (db: DphRucne) - DPH ručně)
  dphRucne?: boolean
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny
  // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
  typSzbDphK?: TypSzbDph
  // Sleva (db: Sleva) - Sleva)
  sleva?: Big
  // Ext. gener. (db: ExtGener) - Ext. gener.)
  extGener?: boolean
  // Konec posl. fakt. období (db: DatPoslFaktObd) - Konec posl. fakt. období)
  datPoslFaktObd?: Date
  // Generovat položku faktury (db: AutoGen) - Generovat položku faktury)
  autoGen?: boolean
  // Valorizovat (db: Valorizovat) - Valorizovat)
  valorizovat?: boolean
  // Valorizovat k měsíci (db: ValorizovatMesic) - Valorizovat k měsíci)
  valorizovatMesic?: number
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Číslo došlé (db: CisDosle) - Číslo došlé)
  cisDosle?: string
  // Smlouva (db: IdSmlouvy) - Smlouva)
  smlouva?: AFSmlouva
  // Kód z ceníku (db: IdCenik) - Kód z ceníku)
  cenik?: AFCenik
  // Sklad (db: IdBspSkl) - Sklad)
  sklad?: AFSklad
  // Místo (db: IdMisto) - Místo)
  misto?: AFMistoUrceni
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani
  // Typ faktury (db: IdTypDokl) - Typ faktury)
  typDoklFak?: AFTypFakturyVydane
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Číslo účtu (db: IdBanSpoj) - Číslo účtu)
  banSpoj?: AFAdresarBankovniUcet
  // Fakturovat firmě (db: IdFirmyFakt) - Fakturovat firmě)
  firmaFakt?: AFAdresar
  // Valorizační položka (db: IdValorPolSml) - Valorizační položka)
  valorPolSml?: AFSmlouvaPolozka

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