import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStredisko } from './AFStredisko.js'
import { AFCinnost } from './AFCinnost.js'
import { AFMena } from './AFMena.js'
import { AFPredpisZauctovani } from './AFPredpisZauctovani.js'
import { AFUcet } from './AFUcet.js'
import { AFZakazka } from './AFZakazka.js'
import { AFCleneniDph } from './AFCleneniDph.js'
import { AFSazbaDph } from './AFSazbaDph.js'
import { AFBanka } from './AFBanka.js'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni.js'
import { AFPreneseniDph } from './AFPreneseniDph.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypSzbDph } from '../AFEntityEnums.js'

export class AFBankaPolozka extends AFEntity {
  static EntityPath: string = 'banka-polozka'
  static EntityName: string = 'Položky vzájemných zápočtů'
  static EntityType: string = 'BANKA_POLOZKA'

  // ID (db: IdPolInt) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Úč. pol. (db: Ucetni) - Položka je účetní)
  ucetni?: boolean
  // Modul (db: Modul) - Modul)
  modul?: string
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
  // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
  typSzbDphK?: TypSzbDph
  // DPH [%] (db: SzbDph) - DPH [%])
  szbDph?: Big
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
  // Kopírovat MD účet DPH (db: KopDphMdUcet) - Kopírovat MD účet DPH)
  kopDphMdUcet?: boolean
  // Kopírovat D účet DPH (db: KopDphDalUcet) - Kopírovat D účet DPH)
  kopDphDalUcet?: boolean
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
  // Kopírovat řádek DPH (db: KopClenDph) - Kopírovat řádek DPH z dokladu)
  kopClenDph?: boolean
  // Kopírovat dat. zaúčt. (db: KopDatUcto) - Kopírovat dat. zaúčt.)
  kopDatUcto?: boolean
  // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date
  // Storno (db: Storno) - Storno)
  storno?: boolean
  // Storno položky (db: StornoPol) - Storno položky)
  stornoPol?: boolean
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
  // Účet MD DPH (db: IdDphMdUcet) - Má dáti DPH)
  dphMdUcet?: AFUcet
  // Účet Dal DPH (db: IdDphDalUcet) - Dal DPH)
  dphDalUcet?: AFUcet
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Řádky DPH (db: IdClenDph) - Řádky DPH)
  clenDph?: AFCleneniDph
  // Sazba DPH (db: IdSazbyDph) - Sazba DPH)
  sazbaDph?: AFSazbaDph
  // Doklad (db: IdDoklInt) - Bankovní doklad)
  doklInt?: AFBanka
  // Zdroj (db: Source) - Zdroj)
  source?: string
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni
  // Kopírovat řádek kon. hl. DPH (db: KopClenKonVykDph) - Kopírovat řádek kontrolního hlášení DPH z dokladu)
  kopClenKonVykDph?: boolean
  // Kód přenesení DPH (db: IdDphPren) - Kód přenesení DPH)
  dphPren?: AFPreneseniDph
  // Štítky (db: ) - Štítky)
  stitky?: string

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
    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
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
    kopDphMdUcet : {
      key: 'kopDphMdUcet',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    kopDphDalUcet : {
      key: 'kopDphDalUcet',
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
    kopClenDph : {
      key: 'kopClenDph',
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
    dphMdUcet : {
      key: 'dphMdUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphDalUcet : {
      key: 'dphDalUcet',
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
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      
    },
    sazbaDph : {
      key: 'sazbaDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    doklInt : {
      key: 'doklInt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFBanka',
      
    },
    source : {
      key: 'source',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    clenKonVykDph : {
      key: 'clenKonVykDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniKontrolniHlaseni',
      
    },
    kopClenKonVykDph : {
      key: 'kopClenKonVykDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    dphPren : {
      key: 'dphPren',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPreneseniDph',
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}