import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'




export class AFCastkyKOdpoctu extends AFEntity {
  static EntityPath: string = 'castky-k-odpoctu'
  static EntityName: string = 'Částky k odpočtu'
  static EntityType: string = 'CASTKY_K_ODPOCTU'

  // Záloha (db: ) - Záloha)
  zaloha?: any
  // Účetní (db: ) - Účetní)
  ucetni?: boolean
  // Osvob., bez DPH [Kč] (db: ) - 0 %)
  sumOsv?: Big
  // Základ DPH zákl. [Kč] (db: ) - Základ DPH zákl. [Kč])
  sumZklZakl?: Big
  // Základ DPH sníž. [Kč] (db: ) - Základ DPH sníž. [Kč])
  sumZklSniz?: Big
  // Základ DPH 2. sníž. [Kč] (db: ) - Základ DPH 2. sníž. [Kč])
  sumZklSniz2?: Big
  // DPH základní [Kč] (db: ) - DPH základní)
  sumDphZakl?: Big
  // DPH snížená [Kč] (db: ) - DPH snížená)
  sumDphSniz?: Big
  // DPH 2. snížená [Kč] (db: ) - DPH 2. snížená)
  sumDphSniz2?: Big
  // Celkem vč. DPH - zákl. [Kč] (db: ) - Celkem vč. DPH - zákl. [Kč])
  sumCelkZakl?: Big
  // Celkem vč. DPH - sníž. [Kč] (db: ) - Celkem vč. DPH - sníž. [Kč])
  sumCelkSniz?: Big
  // Celkem vč. DPH - 2. sníž. [Kč] (db: ) - Celkem vč. DPH - 2. sníž. [Kč])
  sumCelkSniz2?: Big



  static propAnnotations: Record<string, TypeAnnotation> = {
    zaloha : {
      key: 'zaloha',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },    sumOsv : {
      key: 'sumOsv',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklZakl : {
      key: 'sumZklZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklSniz : {
      key: 'sumZklSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumZklSniz2 : {
      key: 'sumZklSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphZakl : {
      key: 'sumDphZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphSniz : {
      key: 'sumDphSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumDphSniz2 : {
      key: 'sumDphSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkZakl : {
      key: 'sumCelkZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkSniz : {
      key: 'sumCelkSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    sumCelkSniz2 : {
      key: 'sumCelkSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },

  }
}