import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFCenik } from './AFCenik'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFAdresar } from './AFAdresar'
import { AFTypAtributu } from './AFTypAtributu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFAtribut extends AFEntity {
  static EntityPath: string = 'atribut'
  static EntityName: string = 'Atributy'
  static EntityType: string = 'ATRIBUT'

  // ID (db: IdAtribut) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Logická hodnota (db: ValBoolean) - Logická hodnota)
  valBoolean?: boolean
  // Celé číslo (db: ValInteger) - Celé číslo)
  valInteger?: number
  // Desetinné číslo (db: ValNumeric) - Desetinné číslo)
  valNumeric?: Big
  // Řetězec (db: ValString) - Řetězec)
  valString?: string
  // Datum (db: ValDatCas) - Datum)
  valDatCas?: Date
  // Hodnota (db: Hodnota) - Hodnota)
  hodnota?: string
  // MJ (db: ) - MJ)
  mj?: string
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik
  // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
  doklObch?: any
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: any
  // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
  doklSklad?: AFSkladovyPohyb
  // Interní doklad (db: IdDoklInt) - Interní doklad)
  doklInt?: any
  // Adresář (db: IdAdresar) - Adresář)
  adresar?: AFAdresar
  // Typ atributu (db: IdTypAtribut) - Typ atributu)
  typAtributu?: AFTypAtributu

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
    valBoolean : {
      key: 'valBoolean',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    valInteger : {
      key: 'valInteger',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    valNumeric : {
      key: 'valNumeric',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    valString : {
      key: 'valString',
      type: PropertyType.String,
      isArray: false,
      
    },
    valDatCas : {
      key: 'valDatCas',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    hodnota : {
      key: 'hodnota',
      type: PropertyType.String,
      isArray: false,
      
    },
    mj : {
      key: 'mj',
      type: PropertyType.String,
      isArray: false,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    doklObch : {
      key: 'doklObch',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklSklad : {
      key: 'doklSklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovyPohyb',
      
    },
    doklInt : {
      key: 'doklInt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    adresar : {
      key: 'adresar',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    typAtributu : {
      key: 'typAtributu',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypAtributu',
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