import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'




export class AFDoklad extends AFEntity {
  static EntityPath: string = 'doklad'
  static EntityName: string = 'Přehled všech dokladů'
  static EntityType: string = 'DOKLAD_VIEW'

  // ID (náhled) (db: ) - ID (náhled))
  idDokladView?: number
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number
  // Zkratka (db: ) - Zkratka)
  kod?: string
  // Popis (db: ) - Popis)
  popis?: string
  // Variabilní symbol (db: ) - Variabilní symbol)
  varSym?: string
  // Celkem [Kč] (db: ) - Celkem [Kč])
  sumCelkem?: Big
  // Název firmy nebo jméno osoby (db: ) - Název firmy - jméno)
  nazFirmy?: string
  // IČO (db: ) - IČO)
  ic?: string
  // DIČ (db: ) - DIČ)
  dic?: string
  // Pošt. jméno firmy (db: ) - Firma)
  faNazev?: string
  // Modul (db: ) - Modul)
  modul?: string
  // Název evidence (db: ) - Název evidence)
  evdName?: string
  // Podmodul (zápočet, prodejka) (db: ) - Podmodul (zápočet, prodejka))
  subModul?: boolean



  static propAnnotations: Record<string, TypeAnnotation> = {
    idDokladView : {
      key: 'idDokladView',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    idDokl : {
      key: 'idDokl',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    sumCelkem : {
      key: 'sumCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    ic : {
      key: 'ic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    dic : {
      key: 'dic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    faNazev : {
      key: 'faNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    evdName : {
      key: 'evdName',
      type: PropertyType.String,
      isArray: false,
      
    },
    subModul : {
      key: 'subModul',
      type: PropertyType.Logic,
      isArray: false,
      
    },


  }
}