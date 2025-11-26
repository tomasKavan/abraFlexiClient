import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFMena } from './AFMena'
import { AFAdresar } from './AFAdresar'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFStatDph extends AFEntity {
  static EntityPath: string = 'stat-dph'
  static EntityName: string = 'Státy DPH'
  static EntityType: string = 'STAT_DPH'

  // ID (db: IdStatu) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Kód (ISO 3166-1) (db: Kod) - alpha-2)
  declare kod?: string | null
  // Název státu (db: Nazev) - Název státu)
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
  // Kód (DPH) (db: KodDph) - Kód (DPH))
  kodDph?: string | null
  // Kód (ISO 3166-1 - číselný) (db: KodNum) - numeric)
  kodNum?: string | null
  // Kód (ISO 3166-1 - alpha-3) (db: KodAlpha3) - alpha-3)
  kodAlpha3?: string | null
  // Název státu zkrácený (db: NazZemeC25) - Název státu zkrácený)
  nazZemeC25?: string | null
  // Člen EU (db: ClenEu) - Člen EU)
  clenEu?: boolean | null
  // Mezinárodní tel. předvolba (db: TelPredvolba) - Mezinárodní tel. předvolba)
  telPredvolba?: string | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Krajský finanční úřad (db: Idfukraj) - Krajský finanční úřad)
  fuKraj?: AFAdresar | null
  // Územní pracoviště (db: Idfuuzprac) - Územní pracoviště)
  fuUzPrac?: AFAdresar | null

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
      maxLength: 3,
      
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
    kodDph : {
      key: 'kodDph',
      type: PropertyType.String,
      isArray: false,
      maxLength: 3,
      
    },
    kodNum : {
      key: 'kodNum',
      type: PropertyType.String,
      isArray: false,
      maxLength: 3,
      
    },
    kodAlpha3 : {
      key: 'kodAlpha3',
      type: PropertyType.String,
      isArray: false,
      maxLength: 3,
      
    },
    nazZemeC25 : {
      key: 'nazZemeC25',
      type: PropertyType.String,
      isArray: false,
      maxLength: 25,
      
    },
    clenEu : {
      key: 'clenEu',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    telPredvolba : {
      key: 'telPredvolba',
      type: PropertyType.String,
      isArray: false,
      maxLength: 10,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    fuKraj : {
      key: 'fuKraj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    fuUzPrac : {
      key: 'fuUzPrac',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}