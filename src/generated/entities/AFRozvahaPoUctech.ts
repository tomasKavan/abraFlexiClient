import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcet } from './AFUcet'
import { AFMena } from './AFMena'
import { AFUcetniObdobi } from './AFUcetniObdobi'




export class AFRozvahaPoUctech extends AFEntity {
  static EntityPath: string = 'rozvaha-po-uctech'
  static EntityName: string = 'Soupis aktiv a pasiv'
  static EntityType: string = 'ROZVAHA_PO_UCTECH'

  // Účet (db: ) - Účet)
  ucet?: AFUcet
  // Měna (db: ) - Měna)
  mena?: AFMena
  // Účetní období (db: ) - Účetní období)
  ucetniObdobi?: AFUcetniObdobi
  // Název účtu (db: ) - Název účtu)
  nazevUctu?: string
  // Počátek (db: ) - Počátek)
  pocatek?: Big
  // Počátek MD (db: ) - Počátek MD)
  pocatekMD?: Big
  // Počátek Dal (db: ) - Počátek Dal)
  pocatekDal?: Big
  // Zůstatek MD (db: ) - Zůstatek MD)
  zustatekMD?: Big
  // Zůstatek Dal (db: ) - Zůstatek Dal)
  zustatekDal?: Big
  // Obrat MD 01 (db: ) - Obrat MD 01)
  obratMd01?: Big
  // Obrat DAL 01 (db: ) - Obrat DAL 01)
  obratDal01?: Big
  // Stav MD 01 (db: ) - Stav MD 01)
  stavMd01?: Big
  // Stav DAL 01 (db: ) - Stav DAL 01)
  stavDal01?: Big
  // Stav 01 (db: ) - Stav 01)
  stav01?: Big
  // Obrat MD 02 (db: ) - Obrat MD 02)
  obratMd02?: Big
  // Obrat DAL 02 (db: ) - Obrat DAL 02)
  obratDal02?: Big
  // Stav MD 02 (db: ) - Stav MD 02)
  stavMd02?: Big
  // Stav DAL 02 (db: ) - Stav DAL 02)
  stavDal02?: Big
  // Stav 02 (db: ) - Stav 02)
  stav02?: Big
  // Obrat MD 03 (db: ) - Obrat MD 03)
  obratMd03?: Big
  // Obrat DAL 03 (db: ) - Obrat DAL 03)
  obratDal03?: Big
  // Stav MD 03 (db: ) - Stav MD 03)
  stavMd03?: Big
  // Stav DAL 03 (db: ) - Stav DAL 03)
  stavDal03?: Big
  // Stav 03 (db: ) - Stav 03)
  stav03?: Big
  // Obrat MD 04 (db: ) - Obrat MD 04)
  obratMd04?: Big
  // Obrat DAL 04 (db: ) - Obrat DAL 04)
  obratDal04?: Big
  // Stav MD 04 (db: ) - Stav MD 04)
  stavMd04?: Big
  // Stav DAL 04 (db: ) - Stav DAL 04)
  stavDal04?: Big
  // Stav 04 (db: ) - Stav 04)
  stav04?: Big
  // Obrat MD 05 (db: ) - Obrat MD 05)
  obratMd05?: Big
  // Obrat DAL 05 (db: ) - Obrat DAL 05)
  obratDal05?: Big
  // Stav MD 05 (db: ) - Stav MD 05)
  stavMd05?: Big
  // Stav DAL 05 (db: ) - Stav DAL 05)
  stavDal05?: Big
  // Stav 05 (db: ) - Stav 05)
  stav05?: Big
  // Obrat MD 06 (db: ) - Obrat MD 06)
  obratMd06?: Big
  // Obrat DAL 06 (db: ) - Obrat DAL 06)
  obratDal06?: Big
  // Stav MD 06 (db: ) - Stav MD 06)
  stavMd06?: Big
  // Stav DAL 06 (db: ) - Stav DAL 06)
  stavDal06?: Big
  // Stav 06 (db: ) - Stav 06)
  stav06?: Big
  // Obrat MD 07 (db: ) - Obrat MD 07)
  obratMd07?: Big
  // Obrat DAL 07 (db: ) - Obrat DAL 07)
  obratDal07?: Big
  // Stav MD 07 (db: ) - Stav MD 07)
  stavMd07?: Big
  // Stav DAL 07 (db: ) - Stav DAL 07)
  stavDal07?: Big
  // Stav 07 (db: ) - Stav 07)
  stav07?: Big
  // Obrat MD 08 (db: ) - Obrat MD 08)
  obratMd08?: Big
  // Obrat DAL 08 (db: ) - Obrat DAL 08)
  obratDal08?: Big
  // Stav MD 08 (db: ) - Stav MD 08)
  stavMd08?: Big
  // Stav DAL 08 (db: ) - Stav DAL 08)
  stavDal08?: Big
  // Stav 08 (db: ) - Stav 08)
  stav08?: Big
  // Obrat MD 09 (db: ) - Obrat MD 09)
  obratMd09?: Big
  // Obrat DAL 09 (db: ) - Obrat DAL 09)
  obratDal09?: Big
  // Stav MD 09 (db: ) - Stav MD 09)
  stavMd09?: Big
  // Stav DAL 09 (db: ) - Stav DAL 09)
  stavDal09?: Big
  // Stav 09 (db: ) - Stav 09)
  stav09?: Big
  // Obrat MD 10 (db: ) - Obrat MD 10)
  obratMd10?: Big
  // Obrat DAL 10 (db: ) - Obrat DAL 10)
  obratDal10?: Big
  // Stav MD 10 (db: ) - Stav MD 10)
  stavMd10?: Big
  // Stav DAL 10 (db: ) - Stav DAL 10)
  stavDal10?: Big
  // Stav 10 (db: ) - Stav 10)
  stav10?: Big
  // Obrat MD 11 (db: ) - Obrat MD 11)
  obratMd11?: Big
  // Obrat DAL 11 (db: ) - Obrat DAL 11)
  obratDal11?: Big
  // Stav MD 11 (db: ) - Stav MD 11)
  stavMd11?: Big
  // Stav DAL 11 (db: ) - Stav DAL 11)
  stavDal11?: Big
  // Stav 11 (db: ) - Stav 11)
  stav11?: Big
  // Obrat MD 12 (db: ) - Obrat MD 12)
  obratMd12?: Big
  // Obrat DAL 12 (db: ) - Obrat DAL 12)
  obratDal12?: Big
  // Stav MD 12 (db: ) - Stav MD 12)
  stavMd12?: Big
  // Stav DAL 12 (db: ) - Stav DAL 12)
  stavDal12?: Big
  // Stav 12 (db: ) - Stav 12)
  stav12?: Big
  // Obrat MD 13 (db: ) - Obrat MD 13)
  obratMd13?: Big
  // Obrat DAL 13 (db: ) - Obrat DAL 13)
  obratDal13?: Big
  // Stav MD 13 (db: ) - Stav MD 13)
  stavMd13?: Big
  // Stav DAL 13 (db: ) - Stav DAL 13)
  stavDal13?: Big
  // Stav 13 (db: ) - Stav 13)
  stav13?: Big
  // Obrat MD 14 (db: ) - Obrat MD 14)
  obratMd14?: Big
  // Obrat DAL 14 (db: ) - Obrat DAL 14)
  obratDal14?: Big
  // Stav MD 14 (db: ) - Stav MD 14)
  stavMd14?: Big
  // Stav DAL 14 (db: ) - Stav DAL 14)
  stavDal14?: Big
  // Stav 14 (db: ) - Stav 14)
  stav14?: Big
  // Obrat MD 15 (db: ) - Obrat MD 15)
  obratMd15?: Big
  // Obrat DAL 15 (db: ) - Obrat DAL 15)
  obratDal15?: Big
  // Stav MD 15 (db: ) - Stav MD 15)
  stavMd15?: Big
  // Stav DAL 15 (db: ) - Stav DAL 15)
  stavDal15?: Big
  // Stav 15 (db: ) - Stav 15)
  stav15?: Big
  // Obrat MD 16 (db: ) - Obrat MD 16)
  obratMd16?: Big
  // Obrat DAL 16 (db: ) - Obrat DAL 16)
  obratDal16?: Big
  // Stav MD 16 (db: ) - Stav MD 16)
  stavMd16?: Big
  // Stav DAL 16 (db: ) - Stav DAL 16)
  stavDal16?: Big
  // Stav 16 (db: ) - Stav 16)
  stav16?: Big
  // Obrat MD 17 (db: ) - Obrat MD 17)
  obratMd17?: Big
  // Obrat DAL 17 (db: ) - Obrat DAL 17)
  obratDal17?: Big
  // Stav MD 17 (db: ) - Stav MD 17)
  stavMd17?: Big
  // Stav DAL 17 (db: ) - Stav DAL 17)
  stavDal17?: Big
  // Stav 17 (db: ) - Stav 17)
  stav17?: Big
  // Obrat MD 18 (db: ) - Obrat MD 18)
  obratMd18?: Big
  // Obrat DAL 18 (db: ) - Obrat DAL 18)
  obratDal18?: Big
  // Stav MD 18 (db: ) - Stav MD 18)
  stavMd18?: Big
  // Stav DAL 18 (db: ) - Stav DAL 18)
  stavDal18?: Big
  // Stav 18 (db: ) - Stav 18)
  stav18?: Big
  // Obrat MD 19 (db: ) - Obrat MD 19)
  obratMd19?: Big
  // Obrat DAL 19 (db: ) - Obrat DAL 19)
  obratDal19?: Big
  // Stav MD 19 (db: ) - Stav MD 19)
  stavMd19?: Big
  // Stav DAL 19 (db: ) - Stav DAL 19)
  stavDal19?: Big
  // Stav 19 (db: ) - Stav 19)
  stav19?: Big
  // Obrat MD 20 (db: ) - Obrat MD 20)
  obratMd20?: Big
  // Obrat DAL 20 (db: ) - Obrat DAL 20)
  obratDal20?: Big
  // Stav MD 20 (db: ) - Stav MD 20)
  stavMd20?: Big
  // Stav DAL 20 (db: ) - Stav DAL 20)
  stavDal20?: Big
  // Stav 20 (db: ) - Stav 20)
  stav20?: Big
  // Obrat MD 21 (db: ) - Obrat MD 21)
  obratMd21?: Big
  // Obrat DAL 21 (db: ) - Obrat DAL 21)
  obratDal21?: Big
  // Stav MD 21 (db: ) - Stav MD 21)
  stavMd21?: Big
  // Stav DAL 21 (db: ) - Stav DAL 21)
  stavDal21?: Big
  // Stav 21 (db: ) - Stav 21)
  stav21?: Big
  // Obrat MD 22 (db: ) - Obrat MD 22)
  obratMd22?: Big
  // Obrat DAL 22 (db: ) - Obrat DAL 22)
  obratDal22?: Big
  // Stav MD 22 (db: ) - Stav MD 22)
  stavMd22?: Big
  // Stav DAL 22 (db: ) - Stav DAL 22)
  stavDal22?: Big
  // Stav 22 (db: ) - Stav 22)
  stav22?: Big
  // Obrat MD 23 (db: ) - Obrat MD 23)
  obratMd23?: Big
  // Obrat DAL 23 (db: ) - Obrat DAL 23)
  obratDal23?: Big
  // Stav MD 23 (db: ) - Stav MD 23)
  stavMd23?: Big
  // Stav DAL 23 (db: ) - Stav DAL 23)
  stavDal23?: Big
  // Stav 23 (db: ) - Stav 23)
  stav23?: Big



  static propAnnotations: Record<string, TypeAnnotation> = {
    ucet : {
      key: 'ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    ucetniObdobi : {
      key: 'ucetniObdobi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    nazevUctu : {
      key: 'nazevUctu',
      type: PropertyType.String,
      isArray: false,
      
    },
    pocatek : {
      key: 'pocatek',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    pocatekMD : {
      key: 'pocatekMD',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    pocatekDal : {
      key: 'pocatekDal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zustatekMD : {
      key: 'zustatekMD',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zustatekDal : {
      key: 'zustatekDal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd01 : {
      key: 'obratMd01',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal01 : {
      key: 'obratDal01',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd01 : {
      key: 'stavMd01',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal01 : {
      key: 'stavDal01',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav01 : {
      key: 'stav01',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd02 : {
      key: 'obratMd02',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal02 : {
      key: 'obratDal02',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd02 : {
      key: 'stavMd02',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal02 : {
      key: 'stavDal02',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav02 : {
      key: 'stav02',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd03 : {
      key: 'obratMd03',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal03 : {
      key: 'obratDal03',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd03 : {
      key: 'stavMd03',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal03 : {
      key: 'stavDal03',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav03 : {
      key: 'stav03',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd04 : {
      key: 'obratMd04',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal04 : {
      key: 'obratDal04',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd04 : {
      key: 'stavMd04',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal04 : {
      key: 'stavDal04',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav04 : {
      key: 'stav04',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd05 : {
      key: 'obratMd05',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal05 : {
      key: 'obratDal05',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd05 : {
      key: 'stavMd05',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal05 : {
      key: 'stavDal05',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav05 : {
      key: 'stav05',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd06 : {
      key: 'obratMd06',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal06 : {
      key: 'obratDal06',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd06 : {
      key: 'stavMd06',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal06 : {
      key: 'stavDal06',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav06 : {
      key: 'stav06',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd07 : {
      key: 'obratMd07',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal07 : {
      key: 'obratDal07',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd07 : {
      key: 'stavMd07',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal07 : {
      key: 'stavDal07',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav07 : {
      key: 'stav07',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd08 : {
      key: 'obratMd08',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal08 : {
      key: 'obratDal08',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd08 : {
      key: 'stavMd08',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal08 : {
      key: 'stavDal08',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav08 : {
      key: 'stav08',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd09 : {
      key: 'obratMd09',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal09 : {
      key: 'obratDal09',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd09 : {
      key: 'stavMd09',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal09 : {
      key: 'stavDal09',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav09 : {
      key: 'stav09',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd10 : {
      key: 'obratMd10',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal10 : {
      key: 'obratDal10',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd10 : {
      key: 'stavMd10',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal10 : {
      key: 'stavDal10',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav10 : {
      key: 'stav10',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd11 : {
      key: 'obratMd11',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal11 : {
      key: 'obratDal11',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd11 : {
      key: 'stavMd11',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal11 : {
      key: 'stavDal11',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav11 : {
      key: 'stav11',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd12 : {
      key: 'obratMd12',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal12 : {
      key: 'obratDal12',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd12 : {
      key: 'stavMd12',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal12 : {
      key: 'stavDal12',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav12 : {
      key: 'stav12',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd13 : {
      key: 'obratMd13',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal13 : {
      key: 'obratDal13',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd13 : {
      key: 'stavMd13',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal13 : {
      key: 'stavDal13',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav13 : {
      key: 'stav13',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd14 : {
      key: 'obratMd14',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal14 : {
      key: 'obratDal14',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd14 : {
      key: 'stavMd14',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal14 : {
      key: 'stavDal14',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav14 : {
      key: 'stav14',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd15 : {
      key: 'obratMd15',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal15 : {
      key: 'obratDal15',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd15 : {
      key: 'stavMd15',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal15 : {
      key: 'stavDal15',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav15 : {
      key: 'stav15',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd16 : {
      key: 'obratMd16',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal16 : {
      key: 'obratDal16',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd16 : {
      key: 'stavMd16',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal16 : {
      key: 'stavDal16',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav16 : {
      key: 'stav16',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd17 : {
      key: 'obratMd17',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal17 : {
      key: 'obratDal17',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd17 : {
      key: 'stavMd17',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal17 : {
      key: 'stavDal17',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav17 : {
      key: 'stav17',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd18 : {
      key: 'obratMd18',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal18 : {
      key: 'obratDal18',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd18 : {
      key: 'stavMd18',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal18 : {
      key: 'stavDal18',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav18 : {
      key: 'stav18',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd19 : {
      key: 'obratMd19',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal19 : {
      key: 'obratDal19',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd19 : {
      key: 'stavMd19',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal19 : {
      key: 'stavDal19',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav19 : {
      key: 'stav19',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd20 : {
      key: 'obratMd20',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal20 : {
      key: 'obratDal20',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd20 : {
      key: 'stavMd20',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal20 : {
      key: 'stavDal20',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav20 : {
      key: 'stav20',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd21 : {
      key: 'obratMd21',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal21 : {
      key: 'obratDal21',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd21 : {
      key: 'stavMd21',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal21 : {
      key: 'stavDal21',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav21 : {
      key: 'stav21',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd22 : {
      key: 'obratMd22',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal22 : {
      key: 'obratDal22',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd22 : {
      key: 'stavMd22',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal22 : {
      key: 'stavDal22',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav22 : {
      key: 'stav22',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratMd23 : {
      key: 'obratMd23',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    obratDal23 : {
      key: 'obratDal23',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMd23 : {
      key: 'stavMd23',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavDal23 : {
      key: 'stavDal23',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stav23 : {
      key: 'stav23',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },


  }
}