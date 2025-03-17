import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatel } from './AFUzivatel'
import { AFRole } from './AFRole'
import { AFStredisko } from './AFStredisko'
import { AFBankovniUcetSkladPokladna } from './AFBankovniUcetSkladPokladna'
import { AFTypDokladu } from './AFTypDokladu'
import { AFAdresar } from './AFAdresar'
import { AFSkupinaFirem } from './AFSkupinaFirem'
import { AFZakazka } from './AFZakazka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFParametr extends AFEntity {
  static EntityPath: string = 'parametr'
  static EntityName: string = 'Pokročilá parametrizace pomocí parametrů'
  static EntityType: string = 'PARAM'

  // ID (db: IdParam) - ID)
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Parametr (db: ParamK) - Parametr)
  paramK?: any
  // Hodnota (db: Hodnota) - Hodnota)
  hodnota?: string
  // Kód reportu (db: KodReportu) - Kód reportu)
  kodReportu?: string
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: AFUzivatel
  // Role uživatele (db: IdRole) - Role uživatele)
  role?: AFRole
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Banka/pokladna/sklad (db: IdBsp) - Banka/pokladna/sklad)
  bsp?: AFBankovniUcetSkladPokladna
  // Typ dokladu (db: IdTypDokl) - Typ dokladu)
  typDokl?: AFTypDokladu
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar
  // Skupina (db: IdSkupFir) - Skupina)
  skupFir?: AFSkupinaFirem
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka

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
    paramK : {
      key: 'paramK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    hodnota : {
      key: 'hodnota',
      type: PropertyType.String,
      isArray: false,
      
    },
    kodReportu : {
      key: 'kodReportu',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    role : {
      key: 'role',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRole',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    bsp : {
      key: 'bsp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFBankovniUcetSkladPokladna',
      
    },
    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    skupFir : {
      key: 'skupFir',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaFirem',
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}