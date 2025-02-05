import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFTypDokladu } from './AFTypDokladu'
import { AFMena } from './AFMena'


import { TypVazbyDokl, ModulUcetni } from './AFEntityEnums'

export class AFVazebniDoklad extends AFEntity {
  static EntityPath: string = 'vazebni-doklad'
  static EntityName: string = 'Navázané doklady'
  static EntityType: string = 'VAZEBNI_DOKLAD'

  // ID (db: ) - ID)
  idVazebniDoklad?: number
  // ID vazby (db: ) - ID vazby)
  idVazby?: number
  // Typ vazby (db: ) - Typ vazby)
  typVazbyK?: TypVazbyDokl
  // Storno (db: ) - Storno)
  storno?: boolean
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number
  // Modul (db: ) - Modul)
  modul?: string
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni
  // Interní číslo (db: ) - Interní číslo)
  kod?: string
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string
  // Datum vyst. (db: ) - Vystaveno)
  datVyst?: Date
  // Datum zaúčt. (db: ) - Datum zaúčtování)
  datUcto?: Date
  // Celkem [Kč] (db: ) - Celkem [Kč])
  sumCelkem?: Big
  // Celkem [měna] (db: ) - Celkem [měna])
  sumCelkemMen?: Big
  // Popis (db: ) - Popis)
  popis?: string
  // Poznámka (db: ) - Poznámka)
  poznam?: string
  // Vzdálenost (db: ) - Vzdálenost)
  uroven?: number
  // Stav dokladu (db: ) - Stav dokladu)
  stavK?: any
  // Typ dokladu (db: ) - Typ dokladu)
  typDokl?: AFTypDokladu
  // Měna (db: ) - Měna)
  mena?: AFMena
  // Uživatel (db: ) - Uživatel)
  uzivatel?: any
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string
  // Město (db: ) - Město)
  mesto?: string
  // Již uhrazeno [Kč] (db: ) - Již uhrazeno [Kč])
  juhSum?: Big
  // Již uhrazeno [měna] (db: ) - Již uhrazeno [měna])
  juhSumMen?: Big
  // Zbývá uhradit [Kč] (db: ) - Zbývá uhradit [Kč])
  zbyvaUhradit?: Big
  // Zbývá uhradit [měna] (db: ) - Zbývá uhradit [měna])
  zbyvaUhraditMen?: Big



  static propAnnotations: Record<string, TypeAnnotation> = {
    idVazebniDoklad : {
      key: 'idVazebniDoklad',
      type: PropertyType.Integer,
      isArray: false,
      
    },    idVazby : {
      key: 'idVazby',
      type: PropertyType.Integer,
      isArray: false,
      
    },    typVazbyK : {
      key: 'typVazbyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVazbyDokl',
      enum: TypVazbyDokl,
      
    },    storno : {
      key: 'storno',
      type: PropertyType.Logic,
      isArray: false,
      
    },    idDokl : {
      key: 'idDokl',
      type: PropertyType.Integer,
      isArray: false,
      
    },    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },    modulK : {
      key: 'modulK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'ModulUcetni',
      enum: ModulUcetni,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },    sumCelkem : {
      key: 'sumCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkemMen : {
      key: 'sumCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    uroven : {
      key: 'uroven',
      type: PropertyType.Integer,
      isArray: false,
      
    },    stavK : {
      key: 'stavK',
      type: PropertyType.Select,
      isArray: false,
      
    },    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypDokladu,
      
    },    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    juhSum : {
      key: 'juhSum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    juhSumMen : {
      key: 'juhSumMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    zbyvaUhradit : {
      key: 'zbyvaUhradit',
      type: PropertyType.Numeric,
      isArray: false,
      
    },    zbyvaUhraditMen : {
      key: 'zbyvaUhraditMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },

  }
}