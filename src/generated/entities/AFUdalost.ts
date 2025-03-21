import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFTypAktivity } from './AFTypAktivity'
import { AFUzivatel } from './AFUzivatel'
import { AFZakazka } from './AFZakazka'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFCenik } from './AFCenik'
import { AFKontakt } from './AFKontakt'
import { AFReport } from './AFReport'
import { AFSmlouva } from './AFSmlouva'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka'
import { AFMajetek } from './AFMajetek'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFNaklad } from './AFNaklad'


import { Priorita, StavUdal } from '../AFEntityEnums'

export class AFUdalost extends AFEntity {
  static EntityPath: string = 'udalost'
  static EntityName: string = 'Události, aktivity'
  static EntityType: string = 'ADR_UDALOST'

  // ID (db: IdUdalost) - ID)
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Popis (db: Popis) - Popis)
  popis?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Celodenní (db: Celodenni) - Celodenní)
  celodenni?: boolean
  // Čas dokončení (db: Dokonceni) - Čas dokončení)
  dokonceni?: Date
  // Předmět (db: Predmet) - Předmět)
  predmet?: string
  // Priorita (db: PrioritaK) - Priorita)
  prioritaK?: Priorita
  // Stav události (db: StavUdalK) - Stav události)
  stavUdalK?: StavUdal
  // Termín realizace (db: Termin) - Termín realizace)
  termin?: Date
  // Umístění (db: Umisteni) - Umístění)
  umisteni?: string
  // Volno (db: Volno) - Volno)
  volno?: boolean
  // Čas zahájení (db: Zahajeni) - Čas zahájení)
  zahajeni?: Date
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Štítky (db: ) - Štítky)
  declare stitky?: string
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar
  // Externí firma (db: IdFirmaExterni) - Externí firma)
  firmaExterni?: AFAdresar
  // Typ aktivity (db: IdTypAkt) - Typ aktivity)
  typAkt?: AFTypAktivity
  // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
  zodpPrac?: AFUzivatel
  // Uživatel (db: IdUzivatelVytvoril) - Uživatel)
  uzivatel?: AFUzivatel
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: any
  // Interní doklad (db: IdDoklInt) - Interní doklad)
  doklInt?: any
  // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
  doklObch?: any
  // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
  doklSklad?: AFSkladovyPohyb
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik
  // Kontakt (db: IdKontakt) - Kontakt)
  kontakt?: AFKontakt
  // Konektor (db: IdKonektor) - Konektor)
  konektor?: any
  // Report (db: IdReport) - Report)
  report?: AFReport
  // Smlouva (db: IdSmlouvy) - Smlouva)
  smlouva?: AFSmlouva
  // Pol. smlouvy (db: IdPolSml) - Pol. smlouvy)
  polSmlouvy?: AFSmlouvaPolozka
  // Majetek (db: IdMajetek) - Majetek)
  majetek?: AFMajetek

  // Uživatelé (type: UZIVATELE) - osoby)
  osoby?: AFUzivatel[]
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Náklady aktivity (type: NAKLAD) - naklady)
  naklady?: AFNaklad[]
  // Kontakty (type: ADR_KONTAKT) - kontakty)
  kontakty?: AFKontakt[]


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
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    celodenni : {
      key: 'celodenni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    dokonceni : {
      key: 'dokonceni',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    predmet : {
      key: 'predmet',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    prioritaK : {
      key: 'prioritaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Priorita',
      enum: Priorita,
      
    },
    stavUdalK : {
      key: 'stavUdalK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavUdal',
      enum: StavUdal,
      
    },
    termin : {
      key: 'termin',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    umisteni : {
      key: 'umisteni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    volno : {
      key: 'volno',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zahajeni : {
      key: 'zahajeni',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
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
    firmaExterni : {
      key: 'firmaExterni',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    typAkt : {
      key: 'typAkt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypAktivity',
      maxLength: 20,
      
    },
    zodpPrac : {
      key: 'zodpPrac',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklInt : {
      key: 'doklInt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklObch : {
      key: 'doklObch',
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
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    kontakt : {
      key: 'kontakt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKontakt',
      
    },
    konektor : {
      key: 'konektor',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    report : {
      key: 'report',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFReport',
      
    },
    smlouva : {
      key: 'smlouva',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSmlouva',
      maxLength: 20,
      
    },
    polSmlouvy : {
      key: 'polSmlouvy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSmlouvaPolozka',
      maxLength: 64,
      
    },
    majetek : {
      key: 'majetek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMajetek',
      maxLength: 20,
      
    },

    osoby : {
      key: 'osoby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatel'
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    naklady : {
      key: 'naklady',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFNaklad'
    },
    kontakty : {
      key: 'kontakty',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFKontakt'
    },

  }
}