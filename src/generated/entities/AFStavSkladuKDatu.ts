import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCenik } from './AFCenik.js'
import { AFMernaJednotka } from './AFMernaJednotka.js'
import { AFSkupinaZbozi } from './AFSkupinaZbozi.js'




export class AFStavSkladuKDatu extends AFEntity {
  static EntityPath: string = 'stav-skladu-k-datu'
  static EntityName: string = 'Stav skladu k datu'
  static EntityType: string = 'STAV_SKLADU_K_DATU'

  // Stav zásob v MJ (db: ) - Stav zásob v MJ)
  stavMJ?: Big | null
  // Stav zásob v MJ s požadavky (db: ) - Stav zásob v MJ s požadavky)
  stavMJPozad?: Big | null
  // Požadavky MJ (db: ) - Požadavky MJ)
  pozadavkyMJ?: Big | null
  // V tuz. měně (db: ) - Stav v tuzemské měně)
  tuz?: Big | null
  // Název (db: ) - Název)
  nazev?: string | null
  // EAN (db: ) - EAN)
  eanKod?: string | null
  // Prům. cena (db: ) - Průměrná cena)
  prumCena?: Big | null
  // Ceník (db: ) - Ceník)
  cenik?: AFCenik | null
  // MJ (db: ) - Měrná jednotka)
  mj1?: AFMernaJednotka | null
  // Skupina zboží (db: ) - Skupina zboží)
  skupZboz?: AFSkupinaZbozi | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    stavMJ : {
      key: 'stavMJ',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    stavMJPozad : {
      key: 'stavMJPozad',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    pozadavkyMJ : {
      key: 'pozadavkyMJ',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    tuz : {
      key: 'tuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    prumCena : {
      key: 'prumCena',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    mj1 : {
      key: 'mj1',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    skupZboz : {
      key: 'skupZboz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkupinaZbozi',
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },


  }
}