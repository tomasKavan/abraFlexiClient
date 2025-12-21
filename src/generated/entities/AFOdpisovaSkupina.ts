import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypOdp } from '../AFEntityEnums.js'

export class AFOdpisovaSkupina extends AFEntity {
  static EntityPath: string = 'odpisova-skupina'
  static EntityName: string = 'Odpisové skupiny'
  static EntityType: string = 'ODPISOVE_SKUPINY'

  // ID (db: IdSazby) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
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
  // Způsob odp. (db: TypOdpK) - Způsob odp.)
  typOdpK?: TypOdp | null
  // Doba (db: DobaOdp) - Doba odpisu)
  dobaOdp?: number | null
  // Min. doba odpisu (db: MinDobaOdp) - Min. doba odpisu)
  minDobaOdp?: number | null
  // 1.rok zrych. (db: KoefZrOdp1) - První rok)
  koefZrOdp1?: number | null
  // Další r.zrych. (db: KoefZrOdpDalsi) - Další roky)
  koefZrOdpDalsi?: number | null
  // Zvýšení zrych. (db: KoefZrOdpZvCeny) - Zvýšení vst. ceny)
  koefZrOdpZvCeny?: number | null
  // 1.rok rovn. (db: PrcRoOdp1) - První rok)
  prcRoOdp1?: Big | null
  // Další r.rovn. (db: PrcRoOdpDalsi) - Další roky)
  prcRoOdpDalsi?: Big | null
  // Zvýšení rovn. (db: PrcRoOdpZvCeny) - Zvýšení vst.ceny)
  prcRoOdpZvCeny?: Big | null
  // Zámek (db: Zamek) - Zámek)
  zamek?: boolean | null
  // Vytvořena už. (db: Zmena) - Vytvořena uživatelem)
  zmena?: boolean | null

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
    typOdpK : {
      key: 'typOdpK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypOdp',
      enum: TypOdp,
      
    },
    dobaOdp : {
      key: 'dobaOdp',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },
    minDobaOdp : {
      key: 'minDobaOdp',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },
    koefZrOdp1 : {
      key: 'koefZrOdp1',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },
    koefZrOdpDalsi : {
      key: 'koefZrOdpDalsi',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },
    koefZrOdpZvCeny : {
      key: 'koefZrOdpZvCeny',
      type: PropertyType.Integer,
      isArray: false,
      digits: 4,
      
    },
    prcRoOdp1 : {
      key: 'prcRoOdp1',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    prcRoOdpDalsi : {
      key: 'prcRoOdpDalsi',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    prcRoOdpZvCeny : {
      key: 'prcRoOdpZvCeny',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    zamek : {
      key: 'zamek',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zmena : {
      key: 'zmena',
      type: PropertyType.Logic,
      isArray: false,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}