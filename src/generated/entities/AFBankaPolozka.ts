import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFCleneniDph } from './AFCleneniDph'
import { AFSazbaDph } from './AFSazbaDph'
import { AFBanka } from './AFBanka'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFPreneseniDph } from './AFPreneseniDph'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypSzbDph } from '../AFEntityEnums'

export class AFBankaPolozka extends AFEntity {
  static EntityPath: string = 'banka-polozka'
  static EntityName: string = 'Položky vzájemných zápočtů'
  static EntityType: string = 'BANKA_POLOZKA'

  // ID (db: IdPolInt) - ID)
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
  // Modul (db: Modul) - Modul)
  modul?: string | null
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
  // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
  typSzbDphK?: TypSzbDph | null
  // DPH [%] (db: SzbDph) - DPH [%])
  szbDph?: Big | null
  // Základ [Kč] (db: SumZkl) - Základ [Kč])
  sumZkl?: Big | null
  // DPH [Kč] (db: SumDph) - DPH [Kč])
  sumDph?: Big | null
  // Celkem [Kč] (db: sumZkl + sumDph) - Celkem [Kč])
  sumCelkem?: Big | null
  // Základ [měna] (db: SumZklMen) - Základ [měna])
  sumZklMen?: Big | null
  // DPH [měna] (db: SumDphMen) - DPH [měna])
  sumDphMen?: Big | null
  // Celkem [měna] (db: sumZklMen + sumDphMen) - Celkem [měna])
  sumCelkemMen?: Big | null
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
  // Kopírovat MD účet DPH (db: KopDphMdUcet) - Kopírovat MD účet DPH)
  kopDphMdUcet?: boolean | null
  // Kopírovat D účet DPH (db: KopDphDalUcet) - Kopírovat D účet DPH)
  kopDphDalUcet?: boolean | null
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
  // Kopírovat řádek DPH (db: KopClenDph) - Kopírovat řádek DPH z dokladu)
  kopClenDph?: boolean | null
  // Kopírovat dat. zaúčt. (db: KopDatUcto) - Kopírovat dat. zaúčt.)
  kopDatUcto?: boolean | null
  // Datum zaúčtování (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date | null
  // Storno (db: Storno) - Storno)
  storno?: boolean | null
  // Storno položky (db: StornoPol) - Storno položky)
  stornoPol?: boolean | null
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
  // Účet MD DPH (db: IdDphMdUcet) - Má dáti DPH)
  dphMdUcet?: AFUcet | null
  // Účet Dal DPH (db: IdDphDalUcet) - Dal DPH)
  dphDalUcet?: AFUcet | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Řádky DPH (db: IdClenDph) - Řádky DPH)
  clenDph?: AFCleneniDph | null
  // Sazba DPH (db: IdSazbyDph) - Sazba DPH)
  sazbaDph?: AFSazbaDph | null
  // Doklad (db: IdDoklInt) - Bankovní doklad)
  doklInt?: AFBanka | null
  // Zdroj (db: Source) - Zdroj)
  source?: string | null
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni | null
  // Kopírovat řádek kon. hl. DPH (db: KopClenKonVykDph) - Kopírovat řádek kontrolního hlášení DPH z dokladu)
  kopClenKonVykDph?: boolean | null
  // Kód přenesení DPH (db: IdDphPren) - Kód přenesení DPH)
  dphPren?: AFPreneseniDph | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null

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