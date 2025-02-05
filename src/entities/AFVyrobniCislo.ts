import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFSkladovyPohybPolozka } from './AFSkladovyPohybPolozka'




export class AFVyrobniCislo extends AFEntity {
  static EntityPath: string = 'vyrobni-cislo'
  static EntityName: string = 'Výrobní čísla'
  static EntityType: string = 'VYROBNI_CISLA'

  // ID (db: Idvyrobnicislo) - ID)
  id?: number
  // Výrobní číslo (db: Kod) - Výrobní číslo)
  kod?: string
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik
  // Sklad (db: IdSkladu) - Sklad)
  sklad?: AFSklad
  // Hlavička výrobního čísla (db: IdVyrobniCisloHlav) - Hlavička výrobního čísla)
  vyrobniCisloHlav?: any
  // Přijato fakturou (db: ) - Přijato fakturou)
  doklFakPrijem?: any
  // Vydáno fakturou (db: ) - Vydáno fakturou)
  doklFakVydej?: any
  // Přijato pokl. dokladem (db: ) - Přijato pokl. dokladem)
  doklIntPrijem?: any
  // Vydáno pokl. dokladem (db: ) - Vydáno pokl. dokladem)
  doklIntVydej?: any
  // Naskladněno dokladem (db: ) - Naskladněno dokladem)
  doklSkladPrijem?: AFSkladovyPohyb
  // Vyskladněno dokladem (db: ) - Vyskladněno dokladem)
  doklSkladVydej?: AFSkladovyPohyb
  // Položka přijaté faktury (db: IdPolFakPrijem) - Položka přijaté faktury)
  idPolFakPrijem?: any
  // Položka vydané faktury (db: IdPolFakVydej) - Položka vydané faktury)
  idPolFakVydej?: any
  // Pokladní položka přijímající (db: IdPolIntPrijem) - Pokladní položka přijímající)
  idPolIntPrijem?: any
  // Pokladní položka vydávající (db: IdPolIntVydej) - Pokladní položka vydávající)
  idPolIntVydej?: any
  // Položka příjemky (db: IdPolSkladPrijem) - Položka příjemky)
  idPolSkladPrijem?: AFSkladovyPohybPolozka
  // Položka výdejky (db: IdPolSkladVydej) - Položka výdejky)
  idPolSkladVydej?: AFSkladovyPohybPolozka



  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenik,
      maxLength: 64,
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSklad,
      
    },
    vyrobniCisloHlav : {
      key: 'vyrobniCisloHlav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 20,
      
    },
    doklFakPrijem : {
      key: 'doklFakPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    doklFakVydej : {
      key: 'doklFakVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    doklIntPrijem : {
      key: 'doklIntPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    doklIntVydej : {
      key: 'doklIntVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    doklSkladPrijem : {
      key: 'doklSkladPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSkladovyPohyb,
      
    },
    doklSkladVydej : {
      key: 'doklSkladVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSkladovyPohyb,
      
    },
    idPolFakPrijem : {
      key: 'idPolFakPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    idPolFakVydej : {
      key: 'idPolFakVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    idPolIntPrijem : {
      key: 'idPolIntPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    idPolIntVydej : {
      key: 'idPolIntVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      
    },
    idPolSkladPrijem : {
      key: 'idPolSkladPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSkladovyPohybPolozka,
      
    },
    idPolSkladVydej : {
      key: 'idPolSkladVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSkladovyPohybPolozka,
      
    },


  }
}