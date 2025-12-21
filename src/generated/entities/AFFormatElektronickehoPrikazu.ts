import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'




export class AFFormatElektronickehoPrikazu extends AFEntity {
  static EntityPath: string = 'format-elektronickeho-prikazu'
  static EntityName: string = 'Bankovní formáty'
  static EntityType: string = 'FORMAT_ELEKTRONICKEHO_PRIKAZU'

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
  // Formát výpisu (db: FormatVypis) - Formát výpisu)
  formatVypis?: string | null
  // Formát příkazu (db: FormatPrikaz) - Formát příkazu)
  formatPrikaz?: string | null
  // Formát zahraničního příkazu (db: FormatPrikazZahr) - Formát zahraničního příkazu)
  formatPrikazZahr?: string | null
  // Kódování výpisu (db: KodovaniVypis) - Kódování výpisu)
  kodovaniVypis?: string | null
  // BIC je povinný (db: BicPovinny) - BIC je povinný)
  bicPovinny?: boolean | null



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
    formatVypis : {
      key: 'formatVypis',
      type: PropertyType.String,
      isArray: false,
      
    },
    formatPrikaz : {
      key: 'formatPrikaz',
      type: PropertyType.String,
      isArray: false,
      
    },
    formatPrikazZahr : {
      key: 'formatPrikazZahr',
      type: PropertyType.String,
      isArray: false,
      
    },
    kodovaniVypis : {
      key: 'kodovaniVypis',
      type: PropertyType.String,
      isArray: false,
      
    },
    bicPovinny : {
      key: 'bicPovinny',
      type: PropertyType.Logic,
      isArray: false,
      
    },


  }
}