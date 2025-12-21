import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFRole } from './AFRole.js'
import { AFStredisko } from './AFStredisko.js'
import { AFBankovniUcetSkladPokladna } from './AFBankovniUcetSkladPokladna.js'
import { AFTypDokladu } from './AFTypDokladu.js'
import { AFAdresar } from './AFAdresar.js'
import { AFSkupinaFirem } from './AFSkupinaFirem.js'
import { AFZakazka } from './AFZakazka.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFParametr extends AFEntity {
  static EntityPath: string = 'parametr'
  static EntityName: string = 'Pokročilá parametrizace pomocí parametrů'
  static EntityType: string = 'PARAM'

  // ID (db: IdParam) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Parametr (db: ParamK) - Parametr)
  paramK?: any | null
  // Hodnota (db: Hodnota) - Hodnota)
  hodnota?: string | null
  // Kód reportu (db: KodReportu) - Kód reportu)
  kodReportu?: string | null
  // Zapnutí pokročilých parametrů (db: Enabled) - Zapnutí pokročilých parametrů)
  enabled?: boolean | null
  // Uživatel (db: IdUzivatel) - Uživatel)
  uzivatel?: AFUzivatel | null
  // Role uživatele (db: IdRole) - Role uživatele)
  role?: AFRole | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Banka/pokladna/sklad (db: IdBsp) - Banka/pokladna/sklad)
  bsp?: AFBankovniUcetSkladPokladna | null
  // Typ dokladu (db: IdTypDokl) - Typ dokladu)
  typDokl?: AFTypDokladu | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Skupina (db: IdSkupFir) - Skupina)
  skupFir?: AFSkupinaFirem | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null

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
    enabled : {
      key: 'enabled',
      type: PropertyType.Logic,
      isArray: false,
      
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