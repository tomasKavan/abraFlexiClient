import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFIntrastatMernaJednotka } from './AFIntrastatMernaJednotka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFIntrastatKodNomenklatury extends AFEntity {
  static EntityPath: string = 'intrastat-kod-nomenklatury'
  static EntityName: string = 'Kódy nomenklatury'
  static EntityType: string = 'INTRASTAT_KOD_NOMENKLATURY'

  // ID (db: IdNomen) - ID)
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
  // Měrná jednotka (db: IdIntrMerJed) - Měrná jednotka)
  intrMerJed?: AFIntrastatMernaJednotka

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      
    },    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      
    },    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      
    },    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },    intrMerJed : {
      key: 'intrMerJed',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFIntrastatMernaJednotka,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}