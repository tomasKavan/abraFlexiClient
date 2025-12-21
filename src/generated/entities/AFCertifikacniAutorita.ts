import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFCertifikacniAutorita extends AFEntity {
  static EntityPath: string = 'certifikacni-autorita'
  static EntityName: string = 'Certifikační autority'
  static EntityType: string = 'CERTIFIKACNI_AUTORITA'

  // ID (db: IdAutCert) - ID)
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
      type: PropertyType.Date,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Date,
      isArray: false,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}