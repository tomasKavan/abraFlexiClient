import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { Zamek } from '../AFEntityEnums.js'

export class AFZamek extends AFEntity {
  static EntityPath: string = 'zamek'
  static EntityName: string = 'Zamykání období'
  static EntityType: string = 'ZAMEK'

  // ID (db: IdZamku) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zámek (db: ZamekK) - Zámek)
  zamekK?: Zamek | null
  // Od (db: PlatiOdData) - Od)
  platiOdData?: Date | null
  // Do (db: PlatiDoData) - Do)
  platiDoData?: Date | null
  // Faktury vydané (db: ModulFav) - Faktury vydané)
  modulFav?: boolean | null
  // Faktury přijaté (db: ModulFap) - Faktury přijaté)
  modulFap?: boolean | null
  // Ost. pohledávky (db: ModulPhl) - Ost. pohledávky)
  modulPhl?: boolean | null
  // Ost. závazky (db: ModulZav) - Ost. závazky)
  modulZav?: boolean | null
  // Upl. daně - pohledávky (db: ModulTxp) - Upl. daně - pohledávky)
  modulTxp?: boolean | null
  // Upl. daně - závazky (db: ModulTxz) - Upl. daně - závazky)
  modulTxz?: boolean | null
  // Banka (db: ModulBan) - Banka)
  modulBan?: boolean | null
  // Pokladna (db: ModulPok) - Pokladna)
  modulPok?: boolean | null
  // Interní doklady (db: ModulInt) - Interní doklady)
  modulInt?: boolean | null
  // Sklad (db: ModulSkl) - Sklad)
  modulSkl?: boolean | null
  // Poptávky přijaté (db: ModulPpp) - Poptávky přijaté)
  modulPpp?: boolean | null
  // Poptávky vydané (db: ModulPpv) - Poptávky vydané)
  modulPpv?: boolean | null
  // Nabídky přijaté (db: ModulNap) - Nabídky přijaté)
  modulNap?: boolean | null
  // Nabídky vydané (db: ModulNav) - Nabídky vydané)
  modulNav?: boolean | null
  // Objednávky přijaté (db: ModulObp) - Objednávky přijaté)
  modulObp?: boolean | null
  // Objednávky vydané (db: ModulObv) - Objednávky vydané)
  modulObv?: boolean | null
  // Majetek (db: ModulMaj) - Majetek)
  modulMaj?: boolean | null
  // Leasing (db: ModulLea) - Leasing)
  modulLea?: boolean | null
  // Mzdy (db: ModulMzd) - Mzdy)
  modulMzd?: boolean | null
  // Zamykat i neúčetní doklady (db: Neucetni) - Zamykat i neúčetní doklady)
  neucetni?: boolean | null

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
    zamekK : {
      key: 'zamekK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Zamek',
      enum: Zamek,
      
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
    modulFav : {
      key: 'modulFav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulFap : {
      key: 'modulFap',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulPhl : {
      key: 'modulPhl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulZav : {
      key: 'modulZav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulTxp : {
      key: 'modulTxp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulTxz : {
      key: 'modulTxz',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulBan : {
      key: 'modulBan',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulPok : {
      key: 'modulPok',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulInt : {
      key: 'modulInt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulSkl : {
      key: 'modulSkl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulPpp : {
      key: 'modulPpp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulPpv : {
      key: 'modulPpv',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulNap : {
      key: 'modulNap',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulNav : {
      key: 'modulNav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulObp : {
      key: 'modulObp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulObv : {
      key: 'modulObv',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulMaj : {
      key: 'modulMaj',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulLea : {
      key: 'modulLea',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    modulMzd : {
      key: 'modulMzd',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    neucetni : {
      key: 'neucetni',
      type: PropertyType.Logic,
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