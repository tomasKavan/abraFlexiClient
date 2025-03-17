import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'


import { TypVazbyDokl } from '../AFEntityEnums'

export class AFVazba extends AFEntity {
  static EntityPath: string = 'vazba'
  static EntityName: string = 'Vazby dokladu'
  static EntityType: string = 'VAZBA_MEZI_DOKLADY'

  // ID (db: IdVazby) - ID)
  declare id?: number
  // Typ vazby (db: TypVazbyK) - Typ vazby)
  typVazbyK?: TypVazbyDokl
  // Spárovaná částka (db: Castka) - Spárovaná částka)
  castka?: Big
  // Storno (db: Storno) - Storno)
  storno?: boolean



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    typVazbyK : {
      key: 'typVazbyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVazbyDokl',
      enum: TypVazbyDokl,
      
    },
    castka : {
      key: 'castka',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    storno : {
      key: 'storno',
      type: PropertyType.Logic,
      isArray: false,
      
    },


  }
}