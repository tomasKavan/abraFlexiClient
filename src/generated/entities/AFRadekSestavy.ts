import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFSestava } from './AFSestava'
import { AFStandardniPredpis } from './AFStandardniPredpis'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFSumaceSestavy } from './AFSumaceSestavy'




export class AFRadekSestavy extends AFEntity {
  static EntityPath: string = 'radek-sestavy'
  static EntityName: string = 'Řádek sestavy'
  static EntityType: string = 'RADEK_SESTAVY'

  // ID (db: IdSesRadky) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Číslo řádku (db: CisRad) - Číslo řádku)
  cisRad?: number
  // Kód řádku (db: KodRad) - Kód řádku)
  kodRad?: string
  // Číslo řádku pro XML (db: CisRadXml) - Číslo řádku pro XML)
  cisRadXml?: number
  // Označení (db: Oznaceni) - Označení)
  oznaceni?: string
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
  // Hodnota 1 (db: Hod1) - Hodnota 1)
  hod1?: Big
  // Hodnota 2 (db: Hod2) - Hodnota 2)
  hod2?: Big
  // Hodnota 3 (db: Hod3) - Hodnota 3)
  hod3?: Big
  // Hodnota 4 (db: Hod4) - Hodnota 4)
  hod4?: Big
  // Hodnota 5 (db: Hod5) - Hodnota 5)
  hod5?: Big
  // Hodnota 6 (db: Hod6) - Hodnota 6)
  hod6?: Big
  // Účetní sestava (db: IdSestavy) - Účetní sestava)
  ucetniSestava?: AFSestava

  // Standardní předpis sestavy (type: STD_PREDPIS_SESTAVY) - stdPredpisy)
  stdPredpisy?: AFStandardniPredpis[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Sumace v sestavách (type: SUMACE_SESTAVY) - sumace)
  sumace?: AFSumaceSestavy[]


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
    cisRad : {
      key: 'cisRad',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },
    kodRad : {
      key: 'kodRad',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    cisRadXml : {
      key: 'cisRadXml',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },
    oznaceni : {
      key: 'oznaceni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
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
    hod1 : {
      key: 'hod1',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hod2 : {
      key: 'hod2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hod3 : {
      key: 'hod3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hod4 : {
      key: 'hod4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hod5 : {
      key: 'hod5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hod6 : {
      key: 'hod6',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    ucetniSestava : {
      key: 'ucetniSestava',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSestava',
      maxLength: 6,
      
    },

    stdPredpisy : {
      key: 'stdPredpisy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFStandardniPredpis'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    sumace : {
      key: 'sumace',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFSumaceSestavy'
    },

  }
}