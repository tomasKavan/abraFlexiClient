import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { DefinitionType } from '../AFEntityEnums.js'

export class AFDefStore extends AFEntity {
  static EntityPath: string = 'def-store'
  static EntityName: string = 'Úložiště definic'
  static EntityType: string = 'DEF_STORE'

  // ID (db: Iddefstore) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Privátní (db: Privatni) - Privátní)
  privatni?: boolean | null
  // Data (db: Data) - Data)
  data?: string | null
  // Klíč (db: Klic) - Klíč)
  klic?: string | null
  // Místa použití (db: ShowBeanKeys) - Místa použití)
  showBeanKeys?: string | null
  // Typ definice (db: DefinitionTypeK) - Typ definice)
  definitionTypeK?: DefinitionType | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Vlastník definice (db: Uzivatel) - Vlastník definice)
  uzivatel?: AFUzivatel | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: AFUzivatel | null
  // Vytvořil (db: IdCreatedBy) - Vytvořil)
  createdBy?: AFUzivatel | null

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
    privatni : {
      key: 'privatni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    data : {
      key: 'data',
      type: PropertyType.String,
      isArray: false,
      
    },
    klic : {
      key: 'klic',
      type: PropertyType.String,
      isArray: false,
      
    },
    showBeanKeys : {
      key: 'showBeanKeys',
      type: PropertyType.String,
      isArray: false,
      
    },
    definitionTypeK : {
      key: 'definitionTypeK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'DefinitionType',
      enum: DefinitionType,
      
    },
    createdDate : {
      key: 'createdDate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}