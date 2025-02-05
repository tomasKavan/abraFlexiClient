import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'




export class AFZurnal extends AFEntity {
  static EntityPath: string = 'zurnal'
  static EntityName: string = 'Žurnál'
  static EntityType: string = 'ZURNAL'

  // ID (db: IdZurnal) - ID)
  id?: number
  // Tabulka (db: Tabulka) - Tabulka)
  tabulka?: string
  // ID řádky (db: IdZaznamu) - ID řádky)
  idZaznamu?: number
  // Sloupec (db: Sloupec) - Sloupec)
  sloupec?: string
  // Nová hodnota (db: NovaHod) - Nová hodnota)
  novaHod?: string
  // Původní hodnota (db: StaraHod) - Původní hodnota)
  staraHod?: string
  // Operace (db: Op) - Operace)
  op?: string
  // Transakce (db: TransakceK) - Transakce)
  transakceK?: any
  // Uživatel (db: Uziv) - Uživatel)
  uziv?: string
  // Čas změny (db: DatCas) - Čas změny)
  datCas?: Date



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    tabulka : {
      key: 'tabulka',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    idZaznamu : {
      key: 'idZaznamu',
      type: PropertyType.Integer,
      isArray: false,
      
    },    sloupec : {
      key: 'sloupec',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    novaHod : {
      key: 'novaHod',
      type: PropertyType.String,
      isArray: false,
      
    },    staraHod : {
      key: 'staraHod',
      type: PropertyType.String,
      isArray: false,
      
    },    op : {
      key: 'op',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },    transakceK : {
      key: 'transakceK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },    uziv : {
      key: 'uziv',
      type: PropertyType.String,
      isArray: false,
      maxLength: 63,
      
    },    datCas : {
      key: 'datCas',
      type: PropertyType.DateTime,
      isArray: false,
      
    },

  }
}