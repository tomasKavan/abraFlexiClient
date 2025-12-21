import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFRadekSestavy } from './AFRadekSestavy.js'
import { AFUcetniOsnova } from './AFUcetniOsnova.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { DruhUctu, ZpusobVypo } from '../AFEntityEnums.js'

export class AFStandardniPredpis extends AFEntity {
  static EntityPath: string = 'standardni-predpis'
  static EntityName: string = 'Standardní předpis sestavy'
  static EntityType: string = 'STD_PREDPIS_SESTAVY'

  // ID (db: IdSesStdPred) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Druh účtu (db: DruhUctuK) - Druh účtu)
  druhUctuK?: DruhUctu | null
  // Sloupec sestavy (db: CisSloup) - Sloupec sestavy)
  cisSloup?: number | null
  // Způsob výpočtu (db: ZpusobVypK) - Způsob výpočtu)
  zpusobVypK?: ZpusobVypo | null
  // Převrátit znaménko (db: PrevratZnam) - Převrátit znaménko)
  prevratZnam?: boolean | null
  // Uvažovat jen kladné hodnoty (db: JenKladne) - Uvažovat jen kladné hodnoty)
  jenKladne?: boolean | null
  // Řádek (db: IdSesRadky) - Řádek)
  radek?: AFRadekSestavy | null
  // Číslo účtu syntetické (db: IdStdUcet) - Číslo účtu syntetické)
  cisloUctuSyn?: AFUcetniOsnova | null

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
    druhUctuK : {
      key: 'druhUctuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhUctu',
      enum: DruhUctu,
      
    },
    cisSloup : {
      key: 'cisSloup',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },
    zpusobVypK : {
      key: 'zpusobVypK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZpusobVypo',
      enum: ZpusobVypo,
      
    },
    prevratZnam : {
      key: 'prevratZnam',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    jenKladne : {
      key: 'jenKladne',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    radek : {
      key: 'radek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
      
    },
    cisloUctuSyn : {
      key: 'cisloUctuSyn',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniOsnova',
      maxLength: 6,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}