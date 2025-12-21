import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFAdresar } from './AFAdresar.js'
import { AFSklad } from './AFSklad.js'
import { AFStredisko } from './AFStredisko.js'
import { AFMena } from './AFMena.js'
import { AFPredpisZauctovani } from './AFPredpisZauctovani.js'
import { AFUcet } from './AFUcet.js'
import { AFCenovaUroven } from './AFCenovaUroven.js'
import { AFZakazka } from './AFZakazka.js'
import { AFCleneniDph } from './AFCleneniDph.js'
import { AFCenik } from './AFCenik.js'
import { AFMernaJednotka } from './AFMernaJednotka.js'
import { AFSazbaDph } from './AFSazbaDph.js'
import { AFCinnost } from './AFCinnost.js'


import { ModulUcetni, TypPolozky, TypCeny, TypSzbDph, TypVypCeny, ZaokrJak, ZaokrNa, Objednat } from '../AFEntityEnums.js'

export class AFCenikovyPohybNakup extends AFEntity {
  static EntityPath: string = 'cenikovy-pohyb-nakup'
  static EntityName: string = 'Nákupní, prodejní a skladové pohyby'
  static EntityType: string = 'CENIKOVE_POHYBY_NAKUP'

  // ID (db: ) - ID)
  idCenikovePohyby?: number | null
  // Poslední změna (db: ) - Poslední změna)
  lastUpdate?: Date | null
  // ID doklad (db: ) - ID doklad)
  idDokl?: number | null
  // Kód dokladu (db: ) - Kód dokladu)
  kodDokl?: string | null
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni | null
  // Firma (db: ) - Firma)
  firmaDokl?: AFAdresar | null
  // Je účetní (db: ) - Doklad je účetní)
  ucetni?: boolean | null
  // Modul (db: ) - Modul)
  modul?: string | null
  // Zkratka (db: ) - Zkratka)
  declare kod?: string | null
  // EAN (db: ) - EAN)
  eanKod?: string | null
  // Název (db: ) - Název)
  nazev?: string | null
  // Název EN (db: ) - Název EN)
  nazevA?: string | null
  // Název DE (db: ) - Název DE)
  nazevB?: string | null
  // Název FR (db: ) - Název FR)
  nazevC?: string | null
  // Pořadí (db: ) - Pořadí)
  cisRad?: number | null
  // Typ položky (db: ) - Typ položky)
  typPolozkyK?: TypPolozky | null
  // Balení (db: ) - Balení)
  baleniId?: number | null
  // Počet balení (db: ) - Počet balení)
  mnozBaleni?: Big | null
  // Množství (db: ) - Množství)
  mnozMj?: Big | null
  // Typ ceny (db: ) - Typ ceny)
  typCenyDphK?: TypCeny | null
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: TypSzbDph | null
  // DPH [%] (db: ) - DPH [%])
  szbDph?: Big | null
  // Cena za MJ (db: ) - Cena za MJ)
  cenaMj?: Big | null
  // Sleva položky[%] (db: ) - Sleva položky)
  slevaPol?: Big | null
  // Uplatnit slevu z dokladu (db: ) - Uplatnit slevu z dokladu)
  uplSlevaDokl?: boolean | null
  // Základ [Kč] (db: ) - Základ [Kč])
  sumZkl?: Big | null
  // DPH [Kč] (db: ) - DPH [Kč])
  sumDph?: Big | null
  // Celkem [Kč] (db: ) - Celkem [Kč])
  sumCelkem?: Big | null
  // Základ [měna] (db: ) - Základ [měna])
  sumZklMen?: Big | null
  // DPH [měna] (db: ) - DPH [měna])
  sumDphMen?: Big | null
  // Celkem [měna] (db: ) - Celkem [měna])
  sumCelkemMen?: Big | null
  // Objem (db: ) - Objem)
  objem?: Big | null
  // Cen. jednotka (db: ) - Cen. jednotka)
  cenJednotka?: Big | null
  // Způsob výpočtu (db: ) - Způsob výpočtu)
  typVypCenyK?: TypVypCeny | null
  // Nákupní cena za MJ z ceníku (db: ) - Nákupní)
  cenaMjNakup?: Big | null
  // Prodejní cena za MJ z ceníku (db: ) - Základní prodejní)
  cenaMjProdej?: Big | null
  // Marže / Přirážka / Rabat / Sleva [%] (db: ) - Marže / Přirážka / Rabat / Sleva [%])
  procZakl?: Big | null
  // Množstevní sleva [%] (db: ) - Množstevní sleva [%])
  slevaMnoz?: Big | null
  // Způsob zaokrouhlení - Cena (db: ) - Způsob)
  zaokrJakK?: ZaokrJak | null
  // Řád zaokrouhlení - Cena (db: ) - Řád)
  zaokrNaK?: ZaokrNa | null
  // Šarže (db: ) - Šarže)
  sarze?: string | null
  // Expirace (db: ) - Expirace)
  expirace?: Date | null
  // Uživatelský stav (db: ) - Uživatelský stav)
  stavUzivK?: any | null
  // Objednat u dodavatele (db: ) - Objednat u dodavatele)
  objednatK?: Objednat | null
  // Rezervovat na skladě (db: ) - Rezervovat na skladě)
  rezervovat?: boolean | null
  // Plán MJ (db: ) - Plánované množství)
  mnozMjPlan?: Big | null
  // Real. MJ (db: ) - Realizované množství)
  mnozMjReal?: Big | null
  // Zaokr. pol. (db: ) - AutoZaokr)
  autoZaokr?: boolean | null
  // Auto. pol. (db: ) - Autogen)
  autogen?: boolean | null
  // Poznámka (db: ) - Poznámka)
  poznam?: string | null
  // Sleva [%] (db: ) - Sleva [%])
  slevaDokl?: Big | null
  // Datum vyst. (db: ) - Vystaveno)
  datVyst?: Date | null
  // Kopírovat MD účet základu (db: ) - Kopírovat MD účet základu)
  kopZklMdUcet?: boolean | null
  // Kopírovat D účet základu (db: ) - Kopírovat D účet základu)
  kopZklDalUcet?: boolean | null
  // Kopírovat MD účet DPH (db: ) - Kopírovat MD účet DPH)
  kopDphMdUcet?: boolean | null
  // Kopírovat D účet DPH (db: ) - Kopírovat D účet DPH)
  kopDphDalUcet?: boolean | null
  // Kopírovat předpis zaúčtování (db: ) - Kopírovat předpis zaúčtování)
  kopTypUcOp?: boolean | null
  // Kopírovat zakázku (db: ) - Kopírovat zakázku)
  kopZakazku?: boolean | null
  // Kopírovat středisko (db: ) - Kopírovat středisko)
  kopStred?: boolean | null
  // Kopírovat štítky (db: ) - Kopírovat štítky)
  kopKlice?: boolean | null
  // Kopírovat řádek DPH (db: ) - Kopírovat řádek DPH z dokladu)
  kopClenDph?: boolean | null
  // Kopírovat činnost (db: ) - Kopírovat činnost)
  kopCinnost?: boolean | null
  // Datum zaúčtování (db: ) - Datum zaúčtování)
  datUcto?: Date | null
  // Storno (db: ) - Storno)
  storno?: boolean | null
  // Storno položky (db: ) - Storno položky)
  stornoPol?: boolean | null
  // Výr. čísla OK (db: ) - Výr. čísla OK)
  vyrobniCislaOk?: boolean | null
  // Sklad (db: ) - Sklad)
  sklad?: AFSklad | null
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko | null
  // Měna (db: ) - Měna)
  mena?: AFMena | null
  // Předpis zaúčtování (db: ) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani | null
  // Účet MD základ (db: ) - Má Dáti základu)
  zklMdUcet?: AFUcet | null
  // Účet Dal základ (db: ) - Dal základu)
  zklDalUcet?: AFUcet | null
  // Účet MD DPH (db: ) - Má dáti DPH)
  dphMdUcet?: AFUcet | null
  // Účet Dal DPH (db: ) - Dal DPH)
  dphDalUcet?: AFUcet | null
  // Cenová úroveň (db: ) - Cenová úroveň)
  cenHlad?: AFCenovaUroven | null
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka | null
  // Dodavatel (db: ) - Dodavatel)
  dodavatel?: AFAdresar | null
  // Řádky DPH (db: ) - Řádky DPH)
  clenDph?: AFCleneniDph | null
  // Ceník (db: ) - Ceník)
  cenik?: AFCenik | null
  // MJ (db: ) - MJ)
  mj?: AFMernaJednotka | null
  // MJ objemu (db: ) - MJ objemu)
  mjObjem?: AFMernaJednotka | null
  // Sazba DPH (db: ) - Sazba DPH)
  sazbaDph?: AFSazbaDph | null
  // Činnost (db: ) - Činnost)
  cinnost?: AFCinnost | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    idCenikovePohyby : {
      key: 'idCenikovePohyby',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    idDokl : {
      key: 'idDokl',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kodDokl : {
      key: 'kodDokl',
      type: PropertyType.String,
      isArray: false,
      
    },
    modulK : {
      key: 'modulK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'ModulUcetni',
      enum: ModulUcetni,
      
    },
    firmaDokl : {
      key: 'firmaDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
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
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
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
    typVypCenyK : {
      key: 'typVypCenyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
    },
    cenaMjNakup : {
      key: 'cenaMjNakup',
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
    procZakl : {
      key: 'procZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    slevaMnoz : {
      key: 'slevaMnoz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
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
    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    objednatK : {
      key: 'objednatK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Objednat',
      enum: Objednat,
      
    },
    rezervovat : {
      key: 'rezervovat',
      type: PropertyType.Logic,
      isArray: false,
      
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
    autoZaokr : {
      key: 'autoZaokr',
      type: PropertyType.Logic,
      isArray: false,
      
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
    kopCinnost : {
      key: 'kopCinnost',
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
    vyrobniCislaOk : {
      key: 'vyrobniCislaOk',
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
    cenHlad : {
      key: 'cenHlad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenovaUroven',
      
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
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
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
    sazbaDph : {
      key: 'sazbaDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },


  }
}