import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFMena } from './AFMena'




export class AFProdejkaPlatba extends AFEntity {
  static EntityPath: string = 'prodejka-platba'
  static EntityName: string = 'Úhrada'
  static EntityType: string = 'PRODEJKA_PLATBA'

  // ID (db: IdFormaUhrady) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big
  // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
  kurzMnozstvi?: Big
  // Částka (db: Castka) - Částka)
  castka?: Big
  // Částka v měně (db: CastkaMen) - Částka v měně)
  castkaMen?: Big
  // Množství cenin (db: MnozCenin) - Množství cenin)
  mnozCenin?: number
  // Částka ceniny (db: CastkaCenin) - Částka ceniny)
  castkaCenin?: Big
  // Strojové parametry úhrady (db: StrojParamUhr) - Strojové parametry úhrady)
  strojParamUhr?: string
  // Číslo karty (db: CisloKarty) - Číslo karty)
  cisloKarty?: string
  // Vrátit (db: Vratit) - Vrátit)
  vratit?: Big
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: any
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena



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
      afClass: AFFormaUhrady,
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },


  }
}