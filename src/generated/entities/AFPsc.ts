import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStat } from './AFStat.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFPsc extends AFEntity {
  static EntityPath: string = 'psc'
  static EntityName: string = 'Poštovní směrovací čísla'
  static EntityType: string = 'PSC'

  // ID (db: IdPsc) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Pošta (db: Nazev) - Pošta)
  nazev?: string
  // Pošta EN (db: NazevA) - Pošta EN)
  nazevA?: string
  // Pošta DE (db: NazevB) - Pošta DE)
  nazevB?: string
  // Pošta FR (db: NazevC) - Pošta FR)
  nazevC?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Zobrazovat (db: Show) - Zobrazovat)
  visible?: boolean
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Část obce (db: CastObce) - Část obce)
  castObce?: string
  // Kód okresu (db: KodOkresu) - Kód okresu)
  kodOkresu?: string
  // Okres (db: Okres) - Okres)
  okres?: string
  // Obec (db: Obec) - Obec)
  obec?: string
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    visible : {
      key: 'visible',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    castObce : {
      key: 'castObce',
      type: PropertyType.String,
      isArray: false,
      
    },
    kodOkresu : {
      key: 'kodOkresu',
      type: PropertyType.String,
      isArray: false,
      
    },
    okres : {
      key: 'okres',
      type: PropertyType.String,
      isArray: false,
      
    },
    obec : {
      key: 'obec',
      type: PropertyType.String,
      isArray: false,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 20,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}