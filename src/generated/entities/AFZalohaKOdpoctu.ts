import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFDoporuceni } from './AFDoporuceni'




export class AFZalohaKOdpoctu extends AFEntity {
  static EntityPath: string = 'zaloha-k-odpoctu'
  static EntityName: string = 'Zálohy k odpočtu'
  static EntityType: string = 'ZALOHA_K_ODPOCTU'

  // Záloha (db: ) - Záloha)
  zaloha?: any | null
  // Účetní (db: ) - Účetní)
  ucetni?: boolean | null
  // Osvob., bez DPH [Kč] (db: ) - 0 %)
  sumOsv?: Big | null
  // Základ DPH zákl. [Kč] (db: ) - Základ DPH zákl. [Kč])
  sumZklZakl?: Big | null
  // Základ DPH sníž. [Kč] (db: ) - Základ DPH sníž. [Kč])
  sumZklSniz?: Big | null
  // Základ DPH 2. sníž. [Kč] (db: ) - Základ DPH 2. sníž. [Kč])
  sumZklSniz2?: Big | null
  // DPH základní [Kč] (db: ) - DPH základní)
  sumDphZakl?: Big | null
  // DPH snížená [Kč] (db: ) - DPH snížená)
  sumDphSniz?: Big | null
  // DPH 2. snížená [Kč] (db: ) - DPH 2. snížená)
  sumDphSniz2?: Big | null
  // Celkem vč. DPH - zákl. [Kč] (db: ) - Celkem vč. DPH - zákl. [Kč])
  sumCelkZakl?: Big | null
  // Celkem vč. DPH - sníž. [Kč] (db: ) - Celkem vč. DPH - sníž. [Kč])
  sumCelkSniz?: Big | null
  // Celkem vč. DPH - 2. sníž. [Kč] (db: ) - Celkem vč. DPH - 2. sníž. [Kč])
  sumCelkSniz2?: Big | null

  // Doporučení (type: DOPORUCENI) - doporuceni)
  doporuceni?: AFDoporuceni[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    zaloha : {
      key: 'zaloha',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sumOsv : {
      key: 'sumOsv',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklZakl : {
      key: 'sumZklZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklSniz : {
      key: 'sumZklSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklSniz2 : {
      key: 'sumZklSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphZakl : {
      key: 'sumDphZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphSniz : {
      key: 'sumDphSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphSniz2 : {
      key: 'sumDphSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkZakl : {
      key: 'sumCelkZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSniz : {
      key: 'sumCelkSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSniz2 : {
      key: 'sumCelkSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },

    doporuceni : {
      key: 'doporuceni',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFDoporuceni'
    },

  }
}