import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFRadekSestavy } from './AFRadekSestavy'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFPricteniRozdilu } from './AFPricteniRozdilu'
import { AFUmisteniUctu } from './AFUmisteniUctu'


import { TypSestavy, TypVypSestavy } from '../AFEntityEnums.js'

export class AFSestava extends AFEntity {
  static EntityPath: string = 'sestava'
  static EntityName: string = 'Seznam sestav'
  static EntityType: string = 'SESTAVA'

  // ID (db: IdSestavy) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Typ sestavy (db: TypSesK) - Typ sestavy)
  typSesK?: TypSestavy
  // Standardní sestava (db: Standard) - Standardní sestava)
  standard?: boolean
  // Počítat minulé období (db: VypMinObd) - Počítat minulé období)
  vypMinObd?: boolean
  // Název sloupce 1 (db: NazevSloup1) - Název sloupce 1)
  nazevSloup1?: string
  // Název sloupce 1 EN (db: NazevSloupA1) - Název sloupce 1 EN)
  nazevSloupA1?: string
  // Název sloupce 1 DE (db: NazevSloupB1) - Název sloupce 1 DE)
  nazevSloupB1?: string
  // Název sloupce 1 FR (db: NazevSloupC1) - Název sloupce 1 FR)
  nazevSloupC1?: string
  // Zobrazit sloupec 1 (db: Zobrazit1) - Zobrazit)
  zobrazit1?: boolean
  // Název sloupce 2 (db: NazevSloup2) - Název sloupce 2)
  nazevSloup2?: string
  // Název sloupce 2 EN (db: NazevSloupA2) - Název sloupce 2 EN)
  nazevSloupA2?: string
  // Název sloupce 2 DE (db: NazevSloupB2) - Název sloupce 2 DE)
  nazevSloupB2?: string
  // Název sloupce 2 FR (db: NazevSloupC2) - Název sloupce 2 FR)
  nazevSloupC2?: string
  // Zobrazit sloupec 2 (db: Zobrazit2) - Zobrazit)
  zobrazit2?: boolean
  // Název sloupce 3 (db: NazevSloup3) - Název sloupce 3)
  nazevSloup3?: string
  // Název sloupce 3 EN (db: NazevSloupA3) - Název sloupce 3 EN)
  nazevSloupA3?: string
  // Název sloupce 3 DE (db: NazevSloupB3) - Název sloupce 3 DE)
  nazevSloupB3?: string
  // Název sloupce 3 FR (db: NazevSloupC3) - Název sloupce 3 FR)
  nazevSloupC3?: string
  // Zobrazit sloupec 3 (db: Zobrazit3) - Zobrazit)
  zobrazit3?: boolean
  // Název sloupce 4 (db: NazevSloup4) - Název sloupce 4)
  nazevSloup4?: string
  // Název sloupce 4 EN (db: NazevSloupA4) - Název sloupce 4 EN)
  nazevSloupA4?: string
  // Název sloupce 4 DE (db: NazevSloupB4) - Název sloupce 4 DE)
  nazevSloupB4?: string
  // Název sloupce 4 FR (db: NazevSloupC4) - Název sloupce 4 FR)
  nazevSloupC4?: string
  // Zobrazit sloupec 4 (db: Zobrazit4) - Zobrazit)
  zobrazit4?: boolean
  // Název sloupce 5 (db: NazevSloup5) - Název sloupce 5)
  nazevSloup5?: string
  // Název sloupce 5 EN (db: NazevSloupA5) - Název sloupce 5 EN)
  nazevSloupA5?: string
  // Název sloupce 5 DE (db: NazevSloupB5) - Název sloupce 5 DE)
  nazevSloupB5?: string
  // Název sloupce 5 FR (db: NazevSloupC5) - Název sloupce 5 FR)
  nazevSloupC5?: string
  // Zobrazit sloupec 5 (db: Zobrazit5) - Zobrazit)
  zobrazit5?: boolean
  // Název sloupce 6 (db: NazevSloup6) - Název sloupce 6)
  nazevSloup6?: string
  // Název sloupce 6 EN (db: NazevSloupA6) - Název sloupce 6 EN)
  nazevSloupA6?: string
  // Název sloupce 6 DE (db: NazevSloupB6) - Název sloupce 6 DE)
  nazevSloupB6?: string
  // Název sloupce 6 FR (db: NazevSloupC6) - Název sloupce 6 FR)
  nazevSloupC6?: string
  // Zobrazit sloupec 6 (db: Zobrazit6) - Zobrazit)
  zobrazit6?: boolean
  // Sloupec 3 je součtem sloupce 1 a 2 (db: Sloupec3Sum12) - Sloupec 3 je součtem sloupce 1 a 2)
  sloupec3Sum12?: boolean
  // Sloupec 6 je součtem sloupce 4 a 5 (db: Sloupec6Sum45) - Sloupec 6 je součtem sloupce 4 a 5)
  sloupec6Sum45?: boolean
  // Rok od (db: RokOd) - Rok od)
  rokOd?: number
  // Rok do (db: RokDo) - Rok do)
  rokDo?: number
  // Měsíc od (db: MesicOd) - Měsíc od)
  mesicOd?: number
  // Měsíc do (db: MesicDo) - Měsíc do)
  mesicDo?: number
  // Před. rok od (db: PredRokOd) - Před. rok od)
  predRokOd?: number
  // Před. rok do (db: PredRokDo) - Před. rok do)
  predRokDo?: number
  // Před. měsíc od (db: PredMesicOd) - Před. měsíc od)
  predMesicOd?: number
  // Před. měsíc do (db: PredMesicDo) - Před. měsíc do)
  predMesicDo?: number
  // Datum výpočtu (db: DatVypocet) - Datum výpočtu)
  datVypocet?: Date
  // Typ výpočtu sestavy (db: TypVypSestavyK) - Typ výpočtu sestavy)
  typVypSestavyK?: TypVypSestavy
  // Mikro účetní jednotka (db: TypJednotkyMikro) - Mikro účetní jednotka)
  typJednotkyMikro?: boolean
  // Typ organizace (db: IdTypOrg) - Typ organizace)
  typOrganizace?: AFTypOrganizace
  // Cílová řádka (db: IdRadCil) - Cílová řádka)
  radkaCil?: AFRadekSestavy
  // Zdrojová sestava (db: IdSesZdroj) - Zdrojová sestava)
  sestavaZdroj?: AFSestava
  // Zdrojová řádka (db: IdRadZdroj) - Zdrojová řádka)
  radkaZdroj?: AFRadekSestavy
  // Řádka rozdílu 1 (db: IdRadRozdil1) - Řádka rozdílu 1)
  radkaRozdil1?: AFRadekSestavy
  // Řádka rozdílu 2 (db: IdRadRozdil2) - Řádka rozdílu 2)
  radkaRozdil2?: AFRadekSestavy
  // Kontrola zaokrouhlení 1 (db: IdRadZaokr1) - Kontrola zaokrouhlení 1)
  radkaZaokr1?: AFRadekSestavy
  // Kontrola zaokrouhlení 2 (db: IdRadZaokr2) - Kontrola zaokrouhlení 2)
  radkaZaokr2?: AFRadekSestavy

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Řádky pro přičtení rozdílu (type: PRICTENI_ROZDILU) - pricteni-rozdilu)
  'pricteni-rozdilu'?: AFPricteniRozdilu[]
  get pricteniRozdilu(): AFPricteniRozdilu[] | undefined { return this['pricteni-rozdilu']}
  // Upřesnění umístění účtu (type: UMISTENI_UCTU) - umisteni-uctu)
  'umisteni-uctu'?: AFUmisteniUctu[]
  get umisteniUctu(): AFUmisteniUctu[] | undefined { return this['umisteni-uctu']}
  // Řádky sestavy (type: RADEK_SESTAVY) - radkySestavy)
  radkySestavy?: AFRadekSestavy[]


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
    typSesK : {
      key: 'typSesK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSestavy',
      enum: TypSestavy,
      
    },
    standard : {
      key: 'standard',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    vypMinObd : {
      key: 'vypMinObd',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nazevSloup1 : {
      key: 'nazevSloup1',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupA1 : {
      key: 'nazevSloupA1',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupB1 : {
      key: 'nazevSloupB1',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupC1 : {
      key: 'nazevSloupC1',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zobrazit1 : {
      key: 'zobrazit1',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nazevSloup2 : {
      key: 'nazevSloup2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupA2 : {
      key: 'nazevSloupA2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupB2 : {
      key: 'nazevSloupB2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupC2 : {
      key: 'nazevSloupC2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zobrazit2 : {
      key: 'zobrazit2',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nazevSloup3 : {
      key: 'nazevSloup3',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupA3 : {
      key: 'nazevSloupA3',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupB3 : {
      key: 'nazevSloupB3',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupC3 : {
      key: 'nazevSloupC3',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zobrazit3 : {
      key: 'zobrazit3',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nazevSloup4 : {
      key: 'nazevSloup4',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupA4 : {
      key: 'nazevSloupA4',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupB4 : {
      key: 'nazevSloupB4',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupC4 : {
      key: 'nazevSloupC4',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zobrazit4 : {
      key: 'zobrazit4',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nazevSloup5 : {
      key: 'nazevSloup5',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupA5 : {
      key: 'nazevSloupA5',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupB5 : {
      key: 'nazevSloupB5',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupC5 : {
      key: 'nazevSloupC5',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zobrazit5 : {
      key: 'zobrazit5',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nazevSloup6 : {
      key: 'nazevSloup6',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupA6 : {
      key: 'nazevSloupA6',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupB6 : {
      key: 'nazevSloupB6',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevSloupC6 : {
      key: 'nazevSloupC6',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zobrazit6 : {
      key: 'zobrazit6',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sloupec3Sum12 : {
      key: 'sloupec3Sum12',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sloupec6Sum45 : {
      key: 'sloupec6Sum45',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    rokOd : {
      key: 'rokOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    rokDo : {
      key: 'rokDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesicOd : {
      key: 'mesicOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesicDo : {
      key: 'mesicDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    predRokOd : {
      key: 'predRokOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    predRokDo : {
      key: 'predRokDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    predMesicOd : {
      key: 'predMesicOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    predMesicDo : {
      key: 'predMesicDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    datVypocet : {
      key: 'datVypocet',
      type: PropertyType.Date,
      isArray: false,
      
    },
    typVypSestavyK : {
      key: 'typVypSestavyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypSestavy',
      enum: TypVypSestavy,
      
    },
    typJednotkyMikro : {
      key: 'typJednotkyMikro',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    typOrganizace : {
      key: 'typOrganizace',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypOrganizace',
      maxLength: 6,
      
    },
    radkaCil : {
      key: 'radkaCil',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
      
    },
    sestavaZdroj : {
      key: 'sestavaZdroj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSestava',
      
    },
    radkaZdroj : {
      key: 'radkaZdroj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
      
    },
    radkaRozdil1 : {
      key: 'radkaRozdil1',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
      
    },
    radkaRozdil2 : {
      key: 'radkaRozdil2',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
      
    },
    radkaZaokr1 : {
      key: 'radkaZaokr1',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
      
    },
    radkaZaokr2 : {
      key: 'radkaZaokr2',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    'pricteni-rozdilu' : {
      key: 'pricteni-rozdilu',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPricteniRozdilu'
    },
    'umisteni-uctu' : {
      key: 'umisteni-uctu',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUmisteniUctu'
    },
    radkySestavy : {
      key: 'radkySestavy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFRadekSestavy'
    },

  }
}