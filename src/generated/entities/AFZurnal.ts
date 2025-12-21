import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'




export class AFZurnal extends AFEntity {
  static EntityPath: string = 'zurnal'
  static EntityName: string = 'Žurnál'
  static EntityType: string = 'ZURNAL'

  // ID (db: IdZurnal) - ID)
  declare id?: number | null
  // Tabulka (db: Tabulka) - Tabulka)
  tabulka?: string | null
  // ID řádky (db: IdZaznamu) - ID řádky)
  idZaznamu?: number | null
  // Sloupec (db: Sloupec) - Sloupec)
  sloupec?: string | null
  // Nová hodnota (db: NovaHod) - Nová hodnota)
  novaHod?: string | null
  // Původní hodnota (db: StaraHod) - Původní hodnota)
  staraHod?: string | null
  // Operace (db: Op) - Operace)
  op?: string | null
  // Transakce (db: TransakceK) - Transakce)
  transakceK?: any | null
  // Uživatel (db: Uziv) - Uživatel)
  uziv?: string | null
  // Čas změny (db: DatCas) - Čas změny)
  datCas?: Date | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    tabulka : {
      key: 'tabulka',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    idZaznamu : {
      key: 'idZaznamu',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    sloupec : {
      key: 'sloupec',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    novaHod : {
      key: 'novaHod',
      type: PropertyType.String,
      isArray: false,
      
    },
    staraHod : {
      key: 'staraHod',
      type: PropertyType.String,
      isArray: false,
      
    },
    op : {
      key: 'op',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    transakceK : {
      key: 'transakceK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    uziv : {
      key: 'uziv',
      type: PropertyType.String,
      isArray: false,
      maxLength: 63,
      
    },
    datCas : {
      key: 'datCas',
      type: PropertyType.DateTime,
      isArray: false,
      
    },


  }
}