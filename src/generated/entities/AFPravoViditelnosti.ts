import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'




export class AFPravoViditelnosti extends AFEntity {
  static EntityPath: string = 'pravo-viditelnosti'
  static EntityName: string = 'Práva viditelnosti dat'
  static EntityType: string = 'PRAVO_VIDITELNOSTI'

  // ID (db: IdDataPrava) - ID)
  declare id?: number
  // uživatel (db: IdUzivatel) - uživatel)
  idUzivatel?: number
  // typ dat (db: TypDatK) - typ dat)
  typDatK?: any
  // modul (db: ModulK) - modul)
  modulK?: any
  // objekt (db: IdObjektu) - objekt)
  idObjektu?: number
  // editovat (db: Editovat) - editovat)
  editovat?: boolean



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