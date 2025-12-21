import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFRadekSestavy } from './AFRadekSestavy.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFSumaceSestavy extends AFEntity {
  static EntityPath: string = 'sumace-sestavy'
  static EntityName: string = 'Sumace v sestavách'
  static EntityType: string = 'SUMACE_SESTAVY'

  // ID (db: IdSesSumace) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Převrátit znaménko (db: PrevratZnam) - Převrátit znaménko)
  prevratZnam?: boolean | null
  // Řádek (db: IdSesRadky) - Řádek)
  radek?: AFRadekSestavy | null
  // Přičíst řádek (db: IdSesRadkySum) - Přičíst řádek)
  radekSum?: AFRadekSestavy | null

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
    prevratZnam : {
      key: 'prevratZnam',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    radek : {
      key: 'radek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
      maxLength: 20,
      
    },
    radekSum : {
      key: 'radekSum',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
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