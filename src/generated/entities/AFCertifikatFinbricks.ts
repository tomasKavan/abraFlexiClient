import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatel } from './AFUzivatel'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { UcelCertK } from '../AFEntityEnums'

export class AFCertifikatFinbricks extends AFEntity {
  static EntityPath: string = 'certifikat-finbricks'
  static EntityName: string = 'Klíče Finbricks'
  static EntityType: string = 'CERTIFIKAT_FINBRICKS'

  // ID (db: IdOsCert) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Poznámka (db: UzivNazev) - Poznámka)
  uzivNazev?: string | null
  // Název certifikátu (db: CertNazev) - Název certifikátu)
  certNazev?: string | null
  // Organizace certifikátu (db: CertOrgan) - Organizace certifikátu)
  certOrgan?: string | null
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: Date | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: Date | null
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: AFUzivatel | null
  // Účel certifikátu (db: UcelCertK) - Účel certifikátu)
  ucelCertK?: UcelCertK | null

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
    uzivNazev : {
      key: 'uzivNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    certNazev : {
      key: 'certNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    certOrgan : {
      key: 'certOrgan',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
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
    ucelCertK : {
      key: 'ucelCertK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'UcelCertK',
      enum: UcelCertK,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}