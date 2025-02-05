import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFUcet } from './AFUcet'
import { AFMena } from './AFMena'
import { AFUcetniObdobi } from './AFUcetniObdobi'




export class AFHlavniKniha extends AFEntity {
  static EntityPath: string = 'hlavni-kniha'
  static EntityName: string = 'Hlavní kniha'
  static EntityType: string = 'HLAVNI_KNIHA'

  // ID (db: ) - ID)
  idObratovaPredvaha?: number
  // Účet (db: ) - Účet)
  ucet?: AFUcet
  // Měna (db: ) - Měna)
  mena?: AFMena
  // Účetní období (db: ) - Účetní období)
  ucetniObdobi?: AFUcetniObdobi
  // Název účtu (db: ) - Název účtu)
  nazevUctu?: string
  // Počátek vše (db: ) - Počátek vše)
  pocatek?: Big
  // Počátek MD za vybr. obd. (db: ) - Počátek MD za vybr. obd.)
  pocatekMd?: Big
  // Počátek DAL za vybr. obd. (db: ) - Počátek DAL za vybr. obd.)
  pocatekDal?: Big
  // Počátek za vybr. obd. (db: ) - Počátek za vybr. obd.)
  pocatekMesic?: Big
  // Zůstatek za vybr. obd. (db: ) - Zůstatek za vybr. obd.)
  zustatek?: Big
  // Zůstatek MD za vybr. obd. (db: ) - Zůstatek MD za vybr. obd.)
  zustatekMd?: Big
  // Zůstatek DAL za vybr. obd. (db: ) - Zůstatek DAL za vybr. obd.)
  zustatekDal?: Big
  // Obrat MD vše (db: ) - Obrat MD vše)
  obratMdVse?: Big
  // Obrat DAL vše (db: ) - Obrat DAL vše)
  obratDalVse?: Big
  // Obrat MD za vybr. obd. (db: ) - Obrat MD za vybrané období)
  obratMdVyb?: Big
  // Obrat DAL za vybr. obd. (db: ) - Obrat DAL za vybrané období)
  obratDalVyb?: Big



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
      afClass: AFUcet,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },
    ucetniObdobi : {
      key: 'ucetniObdobi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcetniObdobi,
      
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