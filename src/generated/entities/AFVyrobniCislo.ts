import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFSkladovyPohybPolozka } from './AFSkladovyPohybPolozka'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'




export class AFVyrobniCislo extends AFEntity {
  static EntityPath: string = 'vyrobni-cislo'
  static EntityName: string = 'Výrobní čísla'
  static EntityType: string = 'VYROBNI_CISLA'

  // ID (db: Idvyrobnicislo) - ID)
  declare id?: number | null
  // Výrobní číslo (db: Kod) - Výrobní číslo)
  declare kod?: string | null
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik | null
  // Sklad (db: IdSkladu) - Sklad)
  sklad?: AFSklad | null
  // Položka příjemky (db: IdPolSkladPrijem) - Položka příjemky)
  idPolSkladPrijem?: AFSkladovyPohybPolozka | null
  // Položka výdejky (db: IdPolSkladVydej) - Položka výdejky)
  idPolSkladVydej?: AFSkladovyPohybPolozka | null
  // Položka přijaté faktury (db: IdPolFakPrijem) - Položka přijaté faktury)
  idPolFakPrijem?: any | null
  // Položka vydané faktury (db: IdPolFakVydej) - Položka vydané faktury)
  idPolFakVydej?: any | null
  // Pokladní položka přijímající (db: IdPolIntPrijem) - Pokladní položka přijímající)
  idPolIntPrijem?: any | null
  // Pokladní položka vydávající (db: IdPolIntVydej) - Pokladní položka vydávající)
  idPolIntVydej?: any | null
  // Hlavička výrobního čísla (db: IdVyrobniCisloHlav) - Hlavička výrobního čísla)
  vyrobniCisloHlav?: any | null
  // Přijato fakturou (db: ) - Přijato fakturou)
  doklFakPrijem?: any | null
  // Vydáno fakturou (db: ) - Vydáno fakturou)
  doklFakVydej?: any | null
  // Přijato pokl. dokladem (db: ) - Přijato pokl. dokladem)
  doklIntPrijem?: any | null
  // Vydáno pokl. dokladem (db: ) - Vydáno pokl. dokladem)
  doklIntVydej?: any | null
  // Naskladněno dokladem (db: ) - Naskladněno dokladem)
  doklSkladPrijem?: AFSkladovyPohyb | null
  // Vyskladněno dokladem (db: ) - Vyskladněno dokladem)
  doklSkladVydej?: AFSkladovyPohyb | null



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
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    idPolSkladPrijem : {
      key: 'idPolSkladPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovyPohybPolozka',
      
    },
    idPolSkladVydej : {
      key: 'idPolSkladVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovyPohybPolozka',
      
    },
    idPolFakPrijem : {
      key: 'idPolFakPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    idPolFakVydej : {
      key: 'idPolFakVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    idPolIntPrijem : {
      key: 'idPolIntPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    idPolIntVydej : {
      key: 'idPolIntVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    vyrobniCisloHlav : {
      key: 'vyrobniCisloHlav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 20,
      
    },
    doklFakPrijem : {
      key: 'doklFakPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklFakVydej : {
      key: 'doklFakVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklIntPrijem : {
      key: 'doklIntPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklIntVydej : {
      key: 'doklIntVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklSkladPrijem : {
      key: 'doklSkladPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovyPohyb',
      
    },
    doklSkladVydej : {
      key: 'doklSkladVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovyPohyb',
      
    },


  }
}