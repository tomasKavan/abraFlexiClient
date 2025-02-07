import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFKusovnik extends AFEntity {
  static EntityPath: string = 'kusovnik'
  static EntityName: string = 'Kusovník'
  static EntityType: string = 'KUSOVNIK'

  // ID (db: IdKusovnik) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Množství (db: Mnoz) - Množství)
  mnoz?: Big
  // Hladina (db: Hladina) - Hladina)
  hladina?: number
  // Pořadí (db: Poradi) - Pořadí)
  poradi?: number
  // Cesta (db: Cesta) - Cesta)
  cesta?: string
  // Nadřazený ceník (db: IdOtecCenik) - Nadřazený ceník)
  otecCenik?: AFCenik
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik
  // Nadřazený kusovník (db: Idotec) - Nadřazený kusovník)
  otec?: AFKusovnik

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
    mnoz : {
      key: 'mnoz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    hladina : {
      key: 'hladina',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    poradi : {
      key: 'poradi',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cesta : {
      key: 'cesta',
      type: PropertyType.String,
      isArray: false,
      
    },
    otecCenik : {
      key: 'otecCenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    otec : {
      key: 'otec',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKusovnik',
      maxLength: 20,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}