import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFUzivatel } from './AFUzivatel'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFRezervace extends AFEntity {
  static EntityPath: string = 'rezervace'
  static EntityName: string = 'Rezervace'
  static EntityType: string = 'REZERVACE'

  // ID (db: IdRezervace) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Datum vzniku (db: DatumOd) - Datum vzniku)
  datumOd?: Date | null
  // Datum zániku (db: DatumDo) - Datum zániku)
  datumDo?: Date | null
  // Množství (db: Mnozstvi) - Množství)
  mnozstvi?: Big | null
  // Na skladě (db: SkladMj) - Na skladě)
  skladMj?: Big | null
  // Poznámka (db: Poznamka) - Poznámka)
  poznamka?: string | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik | null
  // Sklad (db: IdSklad) - Sklad)
  sklad?: AFSklad | null
  // Obchodní položka (db: IdPolObch) - Obchodní položka)
  polObch?: any | null
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: AFUzivatel | null

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
    datumOd : {
      key: 'datumOd',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    datumDo : {
      key: 'datumDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    mnozstvi : {
      key: 'mnozstvi',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    skladMj : {
      key: 'skladMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    poznamka : {
      key: 'poznamka',
      type: PropertyType.String,
      isArray: false,
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    polObch : {
      key: 'polObch',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}