import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'




export class AFStromKoren extends AFEntity {
  static EntityPath: string = 'strom-koren'
  static EntityName: string = 'Obecný strom'
  static EntityType: string = 'STROM_KOREN'

  // ID (db: IdStrom) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: number | null
  // Evidence (db: Tabulka) - Evidence)
  tabulka?: string | null
  // Primární (db: Primarni) - Primární)
  primarni?: boolean | null
  // ID záznamu (db: Idzaznamu) - ID záznamu)
  idzaznamu?: number | null
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: any | null



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
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    tabulka : {
      key: 'tabulka',
      type: PropertyType.String,
      isArray: false,
      maxLength: 63,
      
    },
    primarni : {
      key: 'primarni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    idzaznamu : {
      key: 'idzaznamu',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },


  }
}