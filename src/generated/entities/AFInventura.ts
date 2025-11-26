import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFSklad } from './AFSklad'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFInventuraPolozka } from './AFInventuraPolozka'


import { StavInventury } from '../AFEntityEnums'

export class AFInventura extends AFEntity {
  static EntityPath: string = 'inventura'
  static EntityName: string = 'Inventury'
  static EntityType: string = 'INVENTURA'

  // ID (db: IdInventura) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Popis inventury (db: PopisInventury) - Popis inventury)
  popisInventury?: string | null
  // Typ inventury (db: TypInventury) - Typ inventury)
  typInventury?: string | null
  // Datum zahájení (db: DatZahaj) - Datum zahájení)
  datZahaj?: Date | null
  // Datum ukončení (db: DatKonec) - Datum ukončení)
  datKonec?: Date | null
  // Vedoucí (db: Vedouci) - Vedoucí)
  vedouci?: string | null
  // Osoby (db: Osoby) - Osoby)
  osoby?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Stav inventury (db: StavK) - Stav inventury)
  stavK?: StavInventury | null
  // Sklad (db: IdSklad) - Sklad)
  sklad?: AFSklad | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Položka inventury (type: INVENTURA_POLOZKA) - inventura-polozky)
  'inventura-polozky'?: AFInventuraPolozka[]
  get inventuraPolozky(): AFInventuraPolozka[] | undefined { return this['inventura-polozky']}


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
    popisInventury : {
      key: 'popisInventury',
      type: PropertyType.String,
      isArray: false,
      
    },
    typInventury : {
      key: 'typInventury',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datZahaj : {
      key: 'datZahaj',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datKonec : {
      key: 'datKonec',
      type: PropertyType.Date,
      isArray: false,
      
    },
    vedouci : {
      key: 'vedouci',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    osoby : {
      key: 'osoby',
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
    stavK : {
      key: 'stavK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavInventury',
      enum: StavInventury,
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    'inventura-polozky' : {
      key: 'inventura-polozky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFInventuraPolozka'
    },

  }
}