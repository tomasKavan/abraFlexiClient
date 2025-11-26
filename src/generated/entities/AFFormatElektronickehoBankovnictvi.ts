import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'




export class AFFormatElektronickehoBankovnictvi extends AFEntity {
  static EntityPath: string = 'format-elektronickeho-bankovnictvi'
  static EntityName: string = 'Bankovní formáty'
  static EntityType: string = 'FORMAT_ELEKTRONICKEHO_BANKOVNICTVI'

  // ID (db: IdElbanFormat) - ID)
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
  // Přípona výpisu (db: PriVypis) - přípona)
  priVypis?: string | null
  // Přípona příkazu (db: PriPrikaz) - přípona)
  priPrikaz?: string | null
  // Příp. zahr. přík. (db: PriPrikazZahr) - příp.zahr.)
  priPrikazZahr?: string | null



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
    priVypis : {
      key: 'priVypis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    priPrikaz : {
      key: 'priPrikaz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 3,
      
    },
    priPrikazZahr : {
      key: 'priPrikazZahr',
      type: PropertyType.String,
      isArray: false,
      maxLength: 3,
      
    },


  }
}