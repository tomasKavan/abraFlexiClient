import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUcet } from './AFUcet.js'
import { AFMena } from './AFMena.js'
import { AFUcetniObdobi } from './AFUcetniObdobi.js'




export class AFHlavniKniha extends AFEntity {
  static EntityPath: string = 'hlavni-kniha'
  static EntityName: string = 'Hlavní kniha'
  static EntityType: string = 'HLAVNI_KNIHA'

  // ID (db: ) - ID)
  idObratovaPredvaha?: number | null
  // Účet (db: ) - Účet)
  ucet?: AFUcet | null
  // Měna (db: ) - Měna)
  mena?: AFMena | null
  // Účetní období (db: ) - Účetní období)
  ucetniObdobi?: AFUcetniObdobi | null
  // Název účtu (db: ) - Název účtu)
  nazevUctu?: string | null
  // Počátek vše (db: ) - Počátek vše)
  pocatek?: Big | null
  // Počátek MD za vybr. obd. (db: ) - Počátek MD za vybr. obd.)
  pocatekMd?: Big | null
  // Počátek DAL za vybr. obd. (db: ) - Počátek DAL za vybr. obd.)
  pocatekDal?: Big | null
  // Počátek za vybr. obd. (db: ) - Počátek za vybr. obd.)
  pocatekMesic?: Big | null
  // Zůstatek za vybr. obd. (db: ) - Zůstatek za vybr. obd.)
  zustatek?: Big | null
  // Zůstatek MD za vybr. obd. (db: ) - Zůstatek MD za vybr. obd.)
  zustatekMd?: Big | null
  // Zůstatek DAL za vybr. obd. (db: ) - Zůstatek DAL za vybr. obd.)
  zustatekDal?: Big | null
  // Obrat MD vše (db: ) - Obrat MD vše)
  obratMdVse?: Big | null
  // Obrat DAL vše (db: ) - Obrat DAL vše)
  obratDalVse?: Big | null
  // Obrat MD za vybr. obd. (db: ) - Obrat MD za vybrané období)
  obratMdVyb?: Big | null
  // Obrat DAL za vybr. obd. (db: ) - Obrat DAL za vybrané období)
  obratDalVyb?: Big | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    idObratovaPredvaha : {
      key: 'idObratovaPredvaha',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    ucet : {
      key: 'ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    ucetniObdobi : {
      key: 'ucetniObdobi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    nazevUctu : {
      key: 'nazevUctu',
      type: PropertyType.String,
      isArray: false,
      
    },
    pocatek : {
      key: 'pocatek',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    pocatekMd : {
      key: 'pocatekMd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    pocatekDal : {
      key: 'pocatekDal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    pocatekMesic : {
      key: 'pocatekMesic',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zustatek : {
      key: 'zustatek',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zustatekMd : {
      key: 'zustatekMd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zustatekDal : {
      key: 'zustatekDal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMdVse : {
      key: 'obratMdVse',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDalVse : {
      key: 'obratDalVse',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMdVyb : {
      key: 'obratMdVyb',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDalVyb : {
      key: 'obratDalVyb',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },


  }
}