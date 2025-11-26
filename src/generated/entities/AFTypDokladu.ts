import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFMena } from './AFMena'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { RazeniProTisk } from '../AFEntityEnums'

export class AFTypDokladu extends AFEntity {
  static EntityPath: string = 'typ-dokladu'
  static EntityName: string = 'Typy dokladů'
  static EntityType: string = 'TYP_DOKLADU'

  // ID (db: IdTypDokl) - ID)
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
  // Platí od (db: IdUcetObdobiOd) - Platí od)
  ucetObdobiOd?: AFUcetniObdobi | null
  // Platí do (db: IdUcetObdobiDo) - Platí do)
  ucetObdobiDo?: AFUcetniObdobi | null
  // Platí od roku (db: PlatiOd) - Platí od roku)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do roku)
  platiDo?: number | null
  // Modul (db: Modul) - Modul)
  modul?: string | null
  // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
  splatDny?: number | null
  // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
  popisDoklad?: string | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Aut. tisk (db: TiskAutomat) - Automaticky tisknout při vytvoření nového dokladu)
  tiskAutomat?: boolean | null
  // Řazení položek pro tisk (db: RazeniProTiskK) - Řazení položek pro tisk)
  razeniProTiskK?: RazeniProTisk | null
  // Primární typ dokladu (db: Primarni) - Primární typ dokladu)
  primarni?: boolean | null
  // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
  emailTxt?: string | null
  // Šablona e-mail (db: IdSablonaMail) - Šablona e-mail)
  sablonaMail?: AFSablonaMail | null

  // Automatický tisk (type: AUTOTISK) - autoTisky)
  autoTisky?: AFAutotisk[]
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
    ucetObdobiOd : {
      key: 'ucetObdobiOd',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    ucetObdobiDo : {
      key: 'ucetObdobiDo',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
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
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    splatDny : {
      key: 'splatDny',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    popisDoklad : {
      key: 'popisDoklad',
      type: PropertyType.String,
      isArray: false,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    tiskAutomat : {
      key: 'tiskAutomat',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    razeniProTiskK : {
      key: 'razeniProTiskK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'RazeniProTisk',
      enum: RazeniProTisk,
      
    },
    primarni : {
      key: 'primarni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    emailTxt : {
      key: 'emailTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    sablonaMail : {
      key: 'sablonaMail',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSablonaMail',
      
    },

    autoTisky : {
      key: 'autoTisky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFAutotisk'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}