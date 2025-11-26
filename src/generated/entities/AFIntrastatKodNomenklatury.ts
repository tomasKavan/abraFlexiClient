import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFIntrastatMernaJednotka } from './AFIntrastatMernaJednotka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFIntrastatKodNomenklatury extends AFEntity {
  static EntityPath: string = 'intrastat-kod-nomenklatury'
  static EntityName: string = 'Kódy nomenklatury'
  static EntityType: string = 'INTRASTAT_KOD_NOMENKLATURY'

  // ID (db: IdNomen) - ID)
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
  // Měrná jednotka (db: IdIntrMerJed) - Měrná jednotka)
  intrMerJed?: AFIntrastatMernaJednotka | null

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
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      
    },
    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      
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
    intrMerJed : {
      key: 'intrMerJed',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatMernaJednotka',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}