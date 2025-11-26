import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFRadaBanka } from './AFRadaBanka'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFUcet } from './AFUcet'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFStatDph } from './AFStatDph'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPohybu, TypBanUctu, RazeniProTisk } from '../AFEntityEnums'

export class AFTypVzajemnychZapoctu extends AFEntity {
  static EntityPath: string = 'typ-vzajemnych-zapoctu'
  static EntityName: string = 'Typy zápočtů'
  static EntityType: string = 'VZAJEMNY_ZAPOCET_TYP'

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
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean | null
  // Typ pohybu (db: TypPohybuK) - Typ pohybu)
  typPohybuK?: TypPohybu | null
  // Druh (db: TypDoklK) - Druh)
  typDoklK?: TypBanUctu | null
  // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
  splatDny?: number | null
  // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
  popisDoklad?: string | null
  // Řada pro příjem (db: IdRadyPrijem) - Řada pro příjem)
  radaPrijem?: AFRadaBanka | null
  // Řada pro výdej (db: IdRadyVydej) - Řada pro výdej)
  radaVydej?: AFRadaBanka | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Bank.účet (db: IdBsp) - Bank.účet)
  bsp?: AFBankovniUcet | null
  // Účet banky (db: IdPrimUcet) - Účet banky)
  primUcet?: AFUcet | null
  // Předpis zaúčtování - příjem [DAL] (db: IdTypUcOpP) - pro příjem [DAL])
  typUcOpPrijem?: AFPredpisZauctovani | null
  // Předpis zaúčtování - výdej [MD] (db: IdTypUcOpV) - pro výdej [MD])
  typUcOpVydej?: AFPredpisZauctovani | null
  // Stát DPH (db: IdStatDph) - Stát DPH)
  statDph?: AFStatDph | null
  // Aut. tisk (db: TiskAutomat) - Automaticky tisknout při vytvoření nového dokladu)
  tiskAutomat?: boolean | null
  // Řazení položek pro tisk (db: RazeniProTiskK) - Řazení položek pro tisk)
  razeniProTiskK?: RazeniProTisk | null
  // Primární typ dokladu (db: Primarni) - Primární typ dokladu)
  primarni?: boolean | null
  // Zápočet (db: Zapocet) - Zápočet)
  zapocet?: boolean | null
  // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
  emailTxt?: string | null
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni | null
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
    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    typPohybuK : {
      key: 'typPohybuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPohybu',
      enum: TypPohybu,
      
    },
    typDoklK : {
      key: 'typDoklK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypBanUctu',
      enum: TypBanUctu,
      
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
    radaPrijem : {
      key: 'radaPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadaBanka',
      
    },
    radaVydej : {
      key: 'radaVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadaBanka',
      
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
    bsp : {
      key: 'bsp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFBankovniUcet',
      
    },
    primUcet : {
      key: 'primUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    typUcOpPrijem : {
      key: 'typUcOpPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    typUcOpVydej : {
      key: 'typUcOpVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    statDph : {
      key: 'statDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStatDph',
      maxLength: 3,
      
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
    zapocet : {
      key: 'zapocet',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    emailTxt : {
      key: 'emailTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    clenKonVykDph : {
      key: 'clenKonVykDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniKontrolniHlaseni',
      
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