import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'




export class AFPravoViditelnosti extends AFEntity {
  static EntityPath: string = 'pravo-viditelnosti'
  static EntityName: string = 'Práva viditelnosti dat'
  static EntityType: string = 'PRAVO_VIDITELNOSTI'

  // ID (db: IdDataPrava) - ID)
  declare id?: number | null
  // uživatel (db: IdUzivatel) - uživatel)
  idUzivatel?: number | null
  // typ dat (db: TypDatK) - typ dat)
  typDatK?: any | null
  // modul (db: ModulK) - modul)
  modulK?: any | null
  // objekt (db: IdObjektu) - objekt)
  idObjektu?: number | null
  // editovat (db: Editovat) - editovat)
  editovat?: boolean | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    idUzivatel : {
      key: 'idUzivatel',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typDatK : {
      key: 'typDatK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    modulK : {
      key: 'modulK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    idObjektu : {
      key: 'idObjektu',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    editovat : {
      key: 'editovat',
      type: PropertyType.Logic,
      isArray: false,
      
    },


  }
}