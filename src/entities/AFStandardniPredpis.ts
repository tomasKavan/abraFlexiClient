import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFRadekSestavy } from './AFRadekSestavy'
import { AFUcetniOsnova } from './AFUcetniOsnova'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { DruhUctu, ZpusobVypo } from './AFEntityEnums'

export class AFStandardniPredpis extends AFEntity {
  static EntityPath: string = 'standardni-predpis'
  static EntityName: string = 'Standardní předpis sestavy'
  static EntityType: string = 'STD_PREDPIS_SESTAVY'

  // ID (db: IdSesStdPred) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Druh účtu (db: DruhUctuK) - Druh účtu)
  druhUctuK?: DruhUctu
  // Sloupec sestavy (db: CisSloup) - Sloupec sestavy)
  cisSloup?: number
  // Způsob výpočtu (db: ZpusobVypK) - Způsob výpočtu)
  zpusobVypK?: ZpusobVypo
  // Převrátit znaménko (db: PrevratZnam) - Převrátit znaménko)
  prevratZnam?: boolean
  // Uvažovat jen kladné hodnoty (db: JenKladne) - Uvažovat jen kladné hodnoty)
  jenKladne?: boolean
  // Řádek (db: IdSesRadky) - Řádek)
  radek?: AFRadekSestavy
  // Číslo účtu syntetické (db: IdStdUcet) - Číslo účtu syntetické)
  cisloUctuSyn?: AFUcetniOsnova

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
      
    },    druhUctuK : {
      key: 'druhUctuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhUctu',
      enum: DruhUctu,
      
    },    cisSloup : {
      key: 'cisSloup',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },    zpusobVypK : {
      key: 'zpusobVypK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZpusobVypo',
      enum: ZpusobVypo,
      
    },    prevratZnam : {
      key: 'prevratZnam',
      type: PropertyType.Logic,
      isArray: false,
      
    },    jenKladne : {
      key: 'jenKladne',
      type: PropertyType.Logic,
      isArray: false,
      
    },    radek : {
      key: 'radek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRadekSestavy,
      
    },    cisloUctuSyn : {
      key: 'cisloUctuSyn',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcetniOsnova,
      maxLength: 6,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}