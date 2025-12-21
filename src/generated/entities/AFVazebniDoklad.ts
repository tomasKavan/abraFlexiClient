import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFTypDokladu } from './AFTypDokladu.js'
import { AFMena } from './AFMena.js'
import { AFUzivatel } from './AFUzivatel.js'


import { TypVazbyDokl, ModulUcetni } from '../AFEntityEnums.js'

export class AFVazebniDoklad extends AFEntity {
  static EntityPath: string = 'vazebni-doklad'
  static EntityName: string = 'Navázané doklady'
  static EntityType: string = 'VAZEBNI_DOKLAD'

  // ID (db: ) - ID)
  idVazebniDoklad?: number | null
  // ID vazby (db: ) - ID vazby)
  idVazby?: number | null
  // Typ vazby (db: ) - Typ vazby)
  typVazbyK?: TypVazbyDokl | null
  // Storno (db: ) - Storno)
  storno?: boolean | null
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number | null
  // Modul (db: ) - Modul)
  modul?: string | null
  // Název modulu (db: ) - Název modulu)
  modulK?: ModulUcetni | null
  // Interní číslo (db: ) - Interní číslo)
  declare kod?: string | null
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string | null
  // Datum vyst. (db: ) - Vystaveno)
  datVyst?: Date | null
  // Datum zaúčtování (db: ) - Datum zaúčtování)
  datUcto?: Date | null
  // Celkem [Kč] (db: ) - Celkem [Kč])
  sumCelkem?: Big | null
  // Celkem [měna] (db: ) - Celkem [měna])
  sumCelkemMen?: Big | null
  // Popis (db: ) - Popis)
  popis?: string | null
  // Poznámka (db: ) - Poznámka)
  poznam?: string | null
  // Vzdálenost (db: ) - Vzdálenost)
  uroven?: number | null
  // Stav dokladu (db: ) - Stav dokladu)
  stavK?: any | null
  // Typ dokladu (db: ) - Typ dokladu)
  typDokl?: AFTypDokladu | null
  // Měna (db: ) - Měna)
  mena?: AFMena | null
  // Uživatel (db: ) - Uživatel)
  uzivatel?: AFUzivatel | null
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string | null
  // Město (db: ) - Město)
  mesto?: string | null
  // Již uhrazeno [Kč] (db: ) - Již uhrazeno [Kč])
  juhSum?: Big | null
  // Již uhrazeno [měna] (db: ) - Již uhrazeno [měna])
  juhSumMen?: Big | null
  // Zbývá uhradit [Kč] (db: ) - Zbývá uhradit [Kč])
  zbyvaUhradit?: Big | null
  // Zbývá uhradit [měna] (db: ) - Zbývá uhradit [měna])
  zbyvaUhraditMen?: Big | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    idVazebniDoklad : {
      key: 'idVazebniDoklad',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    idVazby : {
      key: 'idVazby',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typVazbyK : {
      key: 'typVazbyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVazbyDokl',
      enum: TypVazbyDokl,
      
    },
    storno : {
      key: 'storno',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    idDokl : {
      key: 'idDokl',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    modul : {
      key: 'modul',
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
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    sumCelkem : {
      key: 'sumCelkem',
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
    uroven : {
      key: 'uroven',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    stavK : {
      key: 'stavK',
      type: PropertyType.Select,
      isArray: false,
      
    },
    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    juhSum : {
      key: 'juhSum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    juhSumMen : {
      key: 'juhSumMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zbyvaUhradit : {
      key: 'zbyvaUhradit',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zbyvaUhraditMen : {
      key: 'zbyvaUhraditMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },


  }
}