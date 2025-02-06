import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'




export class AFFormatElektronickehoPrikazu extends AFEntity {
  static EntityPath: string = 'format-elektronickeho-prikazu'
  static EntityName: string = 'Bankovní formáty'
  static EntityType: string = 'FORMAT_ELEKTRONICKEHO_PRIKAZU'

  // ID (db: IdElbanFormat) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Příp. výpisu (db: PriVypis) - přípona)
  priVypis?: string
  // Příp. přík. (db: PriPrikaz) - přípona)
  priPrikaz?: string
  // Příp. zahr. přík. (db: PriPrikazZahr) - příp.zahr.)
  priPrikazZahr?: string
  // Formát výpisu (db: FormatVypis) - Formát výpisu)
  formatVypis?: string
  // Formát příkazu (db: FormatPrikaz) - Formát příkazu)
  formatPrikaz?: string
  // Formát zahraničního příkazu (db: FormatPrikazZahr) - Formát zahraničního příkazu)
  formatPrikazZahr?: string
  // Kódování výpisu (db: KodovaniVypis) - Kódování výpisu)
  kodovaniVypis?: string
  // BIC je povinný (db: BicPovinny) - BIC je povinný)
  bicPovinny?: boolean



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