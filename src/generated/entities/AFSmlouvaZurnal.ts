import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatel } from './AFUzivatel'


import { OperaceZurnalSmlouvy } from '../AFEntityEnums.js'

export class AFSmlouvaZurnal extends AFEntity {
  static EntityPath: string = 'smlouva-zurnal'
  static EntityName: string = 'Žurnál pro smlouvy'
  static EntityType: string = 'SMLOUVA_ZURNAL'

  // ID (db: IdZurnalSml) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Datum a čas (db: DatCas) - Datum a čas)
  datCas?: Date
  // Operace (db: TransakceK) - Operace)
  transakceK?: OperaceZurnalSmlouvy
  // Počet vygenerovaných faktur (db: PocetOk) - Počet vygenerovaných faktur)
  pocetOk?: number
  // Počet nevygenerovaných faktur (db: PocetErr) - Počet nevygenerovaných faktur)
  pocetErr?: number
  // Seznam chyb (db: Chyby) - Seznam chyb)
  chyby?: string
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: AFUzivatel



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
    datCas : {
      key: 'datCas',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    transakceK : {
      key: 'transakceK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'OperaceZurnalSmlouvy',
      enum: OperaceZurnalSmlouvy,
      
    },
    pocetOk : {
      key: 'pocetOk',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    pocetErr : {
      key: 'pocetErr',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    chyby : {
      key: 'chyby',
      type: PropertyType.String,
      isArray: false,
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },


  }
}