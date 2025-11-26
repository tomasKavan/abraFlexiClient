import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'


import { OperaceZurnalSmlouvy } from '../AFEntityEnums'

export class AFSmlouvaZurnal extends AFEntity {
  static EntityPath: string = 'smlouva-zurnal'
  static EntityName: string = 'Žurnál pro smlouvy'
  static EntityType: string = 'SMLOUVA_ZURNAL'

  // ID (db: IdZurnalSml) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Datum a čas (db: DatCas) - Datum a čas)
  datCas?: Date | null
  // Operace (db: TransakceK) - Operace)
  transakceK?: OperaceZurnalSmlouvy | null
  // Počet vygenerovaných faktur (db: PocetOk) - Počet vygenerovaných faktur)
  pocetOk?: number | null
  // Počet nevygenerovaných faktur (db: PocetErr) - Počet nevygenerovaných faktur)
  pocetErr?: number | null
  // Seznam chyb (db: Chyby) - Seznam chyb)
  chyby?: string | null
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: any | null



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
      afClass: 'AFEntity',
      maxLength: 254,
      
    },


  }
}