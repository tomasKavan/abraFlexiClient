import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { UcelCertK } from './AFEntityEnums'

export class AFCertifikat extends AFEntity {
  static EntityPath: string = 'certifikat'
  static EntityName: string = 'Certifikáty'
  static EntityType: string = 'CERTIFIKAT'

  // ID (db: IdOsCert) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Poznámka (db: UzivNazev) - Poznámka)
  uzivNazev?: string
  // Název certifikátu (db: CertNazev) - Název certifikátu)
  certNazev?: string
  // Organizace certifikátu (db: CertOrgan) - Organizace certifikátu)
  certOrgan?: string
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: Date
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: Date
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: any
  // Účel certifikátu (db: UcelCertK) - Účel certifikátu)
  ucelCertK?: UcelCertK

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
      
    },    uzivNazev : {
      key: 'uzivNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    certNazev : {
      key: 'certNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    certOrgan : {
      key: 'certOrgan',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    platiOd : {
      key: 'platiOd',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    platiDo : {
      key: 'platiDo',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },    ucelCertK : {
      key: 'ucelCertK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'UcelCertK',
      enum: UcelCertK,
      
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}