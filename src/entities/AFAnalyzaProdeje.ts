import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFSkupinaFirem } from './AFSkupinaFirem'
import { AFCenikovaSkupina } from './AFCenikovaSkupina'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFMernaJednotka } from './AFMernaJednotka'




export class AFAnalyzaProdeje extends AFEntity {
  static EntityPath: string = 'analyza-prodeje'
  static EntityName: string = 'Analýza prodeje'
  static EntityType: string = 'ANALYZA_PRODEJE'

  // ID (db: ) - ID)
  idPrehledu?: number
  // Zkratka (db: ) - Zkratka)
  kod?: string
  // Název (db: ) - Název)
  nazev?: string
  // Název EN (db: ) - Název EN)
  nazevA?: string
  // Název DE (db: ) - Název DE)
  nazevB?: string
  // Název FR (db: ) - Název FR)
  nazevC?: string
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string
  // Celkem MJ (db: ) - Celkem MJ)
  sumMnozMj?: Big
  // Celkem bez DPH[Kč] (db: ) - Celkem bez DPH[Kč])
  sumSumZkl?: Big
  // Celkem bez DPH před slevou [Kč] (db: ) - Celkem bez DPH před slevou [Kč])
  sumSumZklPredSlevou?: Big
  // Náklady [Kč] (db: ) - Náklady [Kč])
  sumSumZklNakup?: Big
  // Prodejní cena [Kč] (db: ) - Prodejní cena [Kč])
  sumSumZklProdej?: Big
  // Sleva [Kč] (db: ) - Sleva [Kč])
  sumSlevaKc?: Big
  // Sleva [%] (db: ) - Sleva [%])
  sumSlevaProc?: Big
  // Obchodní rozpětí [Kč] (db: ) - Obchodní rozpětí [Kč])
  sumObchodniRozpeti?: Big
  // Zisk [%] (db: ) - Zisk [%])
  procentoZisku?: Big
  // Prodejní cena z ceníku (db: ) - Prodejní cena z ceníku)
  cenaZakl?: Big
  // MJ poslední měsíc (db: ) - MJ poslední měsíc)
  sumMnozMj1?: Big
  // MJ měsíc -1 (db: ) - MJ měsíc -1)
  sumMnozMj2?: Big
  // MJ měsíc -2 (db: ) - MJ měsíc -2)
  sumMnozMj3?: Big
  // MJ měsíc -3 (db: ) - MJ měsíc -3)
  sumMnozMj4?: Big
  // MJ měsíc -4 (db: ) - MJ měsíc -4)
  sumMnozMj5?: Big
  // MJ měsíc -5 (db: ) - MJ měsíc -5)
  sumMnozMj6?: Big
  // MJ měsíc -6 (db: ) - MJ měsíc -6)
  sumMnozMj7?: Big
  // MJ měsíc -7 (db: ) - MJ měsíc -7)
  sumMnozMj8?: Big
  // MJ měsíc -8 (db: ) - MJ měsíc -8)
  sumMnozMj9?: Big
  // MJ měsíc -9 (db: ) - MJ měsíc -9)
  sumMnozMj10?: Big
  // MJ měsíc -10 (db: ) - MJ měsíc -10)
  sumMnozMj11?: Big
  // MJ měsíc -11 (db: ) - MJ měsíc -11)
  sumMnozMj12?: Big
  // [Kč] poslední měsíc (db: ) - [Kč] poslední měsíc)
  sumSumZkl1?: Big
  // [Kč] měsíc -1 (db: ) - [Kč] měsíc -1)
  sumSumZkl2?: Big
  // [Kč] měsíc -2 (db: ) - [Kč] měsíc -2)
  sumSumZkl3?: Big
  // [Kč] měsíc -3 (db: ) - [Kč] měsíc -3)
  sumSumZkl4?: Big
  // [Kč] měsíc -4 (db: ) - [Kč] měsíc -4)
  sumSumZkl5?: Big
  // [Kč] měsíc -5 (db: ) - [Kč] měsíc -5)
  sumSumZkl6?: Big
  // [Kč] měsíc -6 (db: ) - [Kč] měsíc -6)
  sumSumZkl7?: Big
  // [Kč] měsíc -7 (db: ) - [Kč] měsíc -7)
  sumSumZkl8?: Big
  // [Kč] měsíc -8 (db: ) - [Kč] měsíc -8)
  sumSumZkl9?: Big
  // [Kč] měsíc -9 (db: ) - [Kč] měsíc -9)
  sumSumZkl10?: Big
  // [Kč] měsíc -10 (db: ) - [Kč] měsíc -10)
  sumSumZkl11?: Big
  // [Kč] měsíc -11 (db: ) - [Kč] měsíc -11)
  sumSumZkl12?: Big
  // Firma (db: ) - Firma)
  adresar?: AFAdresar
  // Ceník (db: ) - Ceník)
  cenik?: AFCenik
  // Sklad (db: ) - Sklad)
  sklad?: AFSklad
  // Místo určení (db: ) - Místo určení)
  mistUrc?: AFMistoUrceni
  // Skupina firem (db: ) - Skupina firem)
  skupFir?: AFSkupinaFirem
  // Ceníková skupina (db: ) - Ceníková skupina)
  skupCen?: AFCenikovaSkupina
  // Skupina zboží (db: ) - Skupina zboží)
  skupZboz?: AFSkupinaZbozi
  // Výrobce (db: ) - Výrobce)
  vyrobce?: AFAdresar
  // Středisko (db: ) - Středisko)
  stredisko?: AFStredisko
  // Zakázka (db: ) - Zakázka)
  zakazka?: AFZakazka
  // MJ (db: ) - MJ)
  mj?: AFMernaJednotka
  // Zodpovědná osoba z dokladu (db: ) - Zodpovědná osoba z dokladu)
  zodpOsoba?: any
  // Zodpovědná osoba z adresáře (db: ) - Zodpovědná osoba z adresáře)
  zodpOsobaAdresar?: any



  static propAnnotations: Record<string, TypeAnnotation> = {
    idPrehledu : {
      key: 'idPrehledu',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
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
    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    sumMnozMj : {
      key: 'sumMnozMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl : {
      key: 'sumSumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZklPredSlevou : {
      key: 'sumSumZklPredSlevou',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZklNakup : {
      key: 'sumSumZklNakup',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZklProdej : {
      key: 'sumSumZklProdej',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSlevaKc : {
      key: 'sumSlevaKc',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSlevaProc : {
      key: 'sumSlevaProc',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumObchodniRozpeti : {
      key: 'sumObchodniRozpeti',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    procentoZisku : {
      key: 'procentoZisku',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    cenaZakl : {
      key: 'cenaZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj1 : {
      key: 'sumMnozMj1',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj2 : {
      key: 'sumMnozMj2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj3 : {
      key: 'sumMnozMj3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj4 : {
      key: 'sumMnozMj4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj5 : {
      key: 'sumMnozMj5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj6 : {
      key: 'sumMnozMj6',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj7 : {
      key: 'sumMnozMj7',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj8 : {
      key: 'sumMnozMj8',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj9 : {
      key: 'sumMnozMj9',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj10 : {
      key: 'sumMnozMj10',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj11 : {
      key: 'sumMnozMj11',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumMnozMj12 : {
      key: 'sumMnozMj12',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl1 : {
      key: 'sumSumZkl1',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl2 : {
      key: 'sumSumZkl2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl3 : {
      key: 'sumSumZkl3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl4 : {
      key: 'sumSumZkl4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl5 : {
      key: 'sumSumZkl5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl6 : {
      key: 'sumSumZkl6',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl7 : {
      key: 'sumSumZkl7',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl8 : {
      key: 'sumSumZkl8',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl9 : {
      key: 'sumSumZkl9',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl10 : {
      key: 'sumSumZkl10',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl11 : {
      key: 'sumSumZkl11',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumSumZkl12 : {
      key: 'sumSumZkl12',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    adresar : {
      key: 'adresar',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      maxLength: 20,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenik,
      maxLength: 64,
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSklad,
      
    },
    mistUrc : {
      key: 'mistUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMistoUrceni,
      
    },
    skupFir : {
      key: 'skupFir',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSkupinaFirem,
      
    },
    skupCen : {
      key: 'skupCen',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenikovaSkupina,
      
    },
    skupZboz : {
      key: 'skupZboz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSkupinaZbozi,
      
    },
    vyrobce : {
      key: 'vyrobce',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      maxLength: 20,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      maxLength: 30,
      
    },
    mj : {
      key: 'mj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMernaJednotka,
      maxLength: 20,
      
    },
    zodpOsoba : {
      key: 'zodpOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },
    zodpOsobaAdresar : {
      key: 'zodpOsobaAdresar',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },


  }
}