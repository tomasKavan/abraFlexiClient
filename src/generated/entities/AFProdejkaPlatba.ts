import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFFormaUhrady } from './AFFormaUhrady.js'
import { AFMena } from './AFMena.js'




export class AFProdejkaPlatba extends AFEntity {
  static EntityPath: string = 'prodejka-platba'
  static EntityName: string = 'Úhrada'
  static EntityType: string = 'PRODEJKA_PLATBA'

  // ID (db: IdFormaUhrady) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big | null
  // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
  kurzMnozstvi?: Big | null
  // Částka (db: Castka) - Částka)
  castka?: Big | null
  // Částka [měna] (db: CastkaMen) - Částka [měna])
  castkaMen?: Big | null
  // Množství cenin (db: MnozCenin) - Množství cenin)
  mnozCenin?: number | null
  // Částka ceniny (db: CastkaCenin) - Částka ceniny)
  castkaCenin?: Big | null
  // Strojové parametry úhrady (db: StrojParamUhr) - Strojové parametry úhrady)
  strojParamUhr?: string | null
  // Číslo karty (db: CisloKarty) - Číslo karty)
  cisloKarty?: string | null
  // Vrátit (db: Vratit) - Vrátit)
  vratit?: Big | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady | null
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: any | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null



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
    kurz : {
      key: 'kurz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    kurzMnozstvi : {
      key: 'kurzMnozstvi',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    castka : {
      key: 'castka',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    castkaMen : {
      key: 'castkaMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    mnozCenin : {
      key: 'mnozCenin',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    castkaCenin : {
      key: 'castkaCenin',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    strojParamUhr : {
      key: 'strojParamUhr',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cisloKarty : {
      key: 'cisloKarty',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    vratit : {
      key: 'vratit',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    formaUhradyCis : {
      key: 'formaUhradyCis',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaUhrady',
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },


  }
}