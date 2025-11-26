import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { MjHmot, TypObalu, TypVzniku, TypPouziti, Material, Surovina, BarvaMaterialu, LitterObal } from '../AFEntityEnums'

export class AFCenikObal extends AFEntity {
  static EntityPath: string = 'cenik-obal'
  static EntityName: string = 'Evidence obalů EkoKom'
  static EntityType: string = 'CENIK_OBAL'

  // ID (db: IdEkoKom) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: number | null
  // Hmotnost (db: Hmotnost) - Hmotnost)
  hmotnost?: Big | null
  // MJ hmotnosti (db: MjHmotK) - MJ hmotnosti)
  mjHmotK?: MjHmot | null
  // Typ obalu (db: TypObaluK) - Typ obalu)
  typObaluK?: TypObalu | null
  // Typ vzniku (db: TypVznikuK) - Typ vzniku)
  typVznikuK?: TypVzniku | null
  // Typ použití (db: TypPouzitiK) - Typ použití)
  typPouzitiK?: TypPouziti | null
  // Materiál (db: MaterialK) - Materiál)
  materialK?: Material | null
  // Surovina (db: SurovinaK) - Surovina)
  surovinaK?: Surovina | null
  // Barva (db: BarvaMaterialuK) - Barva)
  barvaMaterialuK?: BarvaMaterialu | null
  // Obsahuje nápoje (db: ObsahujeNapoje) - Obsahuje nápoje)
  obsahujeNapoje?: boolean | null
  // Typ litteringového obalu (db: LitterObalK) - Typ)
  litterObalK?: LitterObal | null
  // Hmotnost plastu (db: LitterObalHmotnostPlast) - Hmotnost plastu)
  litterObalHmotnostPlast?: Big | null
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik | null

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
    hmotnost : {
      key: 'hmotnost',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mjHmotK : {
      key: 'mjHmotK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'MjHmot',
      enum: MjHmot,
      
    },
    typObaluK : {
      key: 'typObaluK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'TypObalu',
      enum: TypObalu,
      
    },
    typVznikuK : {
      key: 'typVznikuK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'TypVzniku',
      enum: TypVzniku,
      
    },
    typPouzitiK : {
      key: 'typPouzitiK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'TypPouziti',
      enum: TypPouziti,
      
    },
    materialK : {
      key: 'materialK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'Material',
      enum: Material,
      
    },
    surovinaK : {
      key: 'surovinaK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'Surovina',
      enum: Surovina,
      
    },
    barvaMaterialuK : {
      key: 'barvaMaterialuK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'BarvaMaterialu',
      enum: BarvaMaterialu,
      
    },
    obsahujeNapoje : {
      key: 'obsahujeNapoje',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    litterObalK : {
      key: 'litterObalK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'LitterObal',
      enum: LitterObal,
      
    },
    litterObalHmotnostPlast : {
      key: 'litterObalHmotnostPlast',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}