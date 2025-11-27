import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFTypLeasingu } from './AFTypLeasingu'
import { AFMena } from './AFMena'
import { AFUcet } from './AFUcet'
import { AFAdresar } from './AFAdresar'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFUzivatel } from './AFUzivatel'
import { AFSplatkovyKalendar } from './AFSplatkovyKalendar'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFDanovyNaklad } from './AFDanovyNaklad'
import { AFZapujcka } from './AFZapujcka'


import { DruhLeas, MjZaruky, FrDanNakl } from '../AFEntityEnums'

export class AFLeasing extends AFEntity {
  static EntityPath: string = 'leasing'
  static EntityName: string = 'Leasing'
  static EntityType: string = 'LEASING'

  // ID (db: IdLeasing) - ID)
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
  // EAN kód (db: EanKod) - EAN kód)
  eanKod?: string | null
  // Druh (db: DruhK) - Druh)
  druhK?: DruhLeas | null
  // Cena [Kč] (db: Cena) - Cena [Kč])
  cena?: Big | null
  // Číslo smlouvy (db: CidPoriz) - Číslo smlouvy)
  cidPoriz?: string | null
  // Zahájení (db: DatKoupe) - Datum zahájení leasingu)
  datKoupe?: Date | null
  // Vyrobeno (db: DatVyroby) - Datum výroby)
  datVyroby?: Date | null
  // Výrobní číslo (db: VyrCis) - Výrobní číslo)
  vyrCis?: string | null
  // MJ záruky (db: MjZarukyK) - MJ záruky)
  mjZarukyK?: MjZaruky | null
  // Záruka (db: Zaruka) - Záruka)
  zaruka?: number | null
  // Zámek (db: Zamek) - Zámek)
  zamek?: boolean | null
  // ? splátek (db: PocetSplatek) - Počet splátek)
  pocetSplatek?: number | null
  // ? daň.nákl (db: PocetDanNakl) - Počet daňových nákladů [v měsících])
  pocetDanNakl?: number | null
  // Frekv.daň.nákl. (db: FrekDanNaklK) - Frekvence daňových nákladů)
  frekDanNaklK?: FrDanNakl | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Číslo (db: VozCislo) - Číslo)
  vozCislo?: string | null
  // SPZ (db: VozSpz) - SPZ)
  vozSpz?: string | null
  // Značka (db: VozZnacka) - Značka)
  vozZnacka?: string | null
  // Model (db: VozModel) - Model)
  vozModel?: string | null
  // Typ vozidla (db: VozTyp) - Typ vozidla)
  vozTyp?: string | null
  // Objem (db: VozObjem) - Objem)
  vozObjem?: Big | null
  // Havarijní pojištění (db: VozHavar) - Havarijní pojištění)
  vozHavar?: string | null
  // Výše havarijního pojištění (db: VozHavarVyse) - Výše havarijního pojištění)
  vozHavarVyse?: Big | null
  // Výbava (db: VozVybava) - Výbava)
  vozVybava?: string | null
  // Typ (db: IdTypLeas) - Typ)
  typLeasingu?: AFTypLeasingu | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Úč.čas.rozl. (db: IdCasUcet) - Účet časového rozlišení nákladů)
  casUcet?: AFUcet | null
  // Úč.závazku (db: IdZavazUcet) - Účet závazku)
  zavazUcet?: AFUcet | null
  // Úč.daň.nákl. (db: IdNaklUcet) - Účet daňových nákladů)
  naklUcet?: AFUcet | null
  // Úč.DPH sníž. (db: IdDphZaklUcet) - Účet DPH - základní sazba)
  dphZaklUcet?: AFUcet | null
  // Úč.DPH zákl. (db: IdDphSnizUcet) - Účet DPH - snížená sazba)
  dphSnizUcet?: AFUcet | null
  // Dodavatel (db: IdFirmyDod) - Dodavatel)
  dodavatel?: AFAdresar | null
  // Výrobce (db: IdFirmyVyr) - Výrobce)
  vyrobce?: AFAdresar | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: AFUzivatel | null

  // Splátkový kalendář (type: SPLATKOVY_KALENDAR) - splatkove-kalendare)
  'splatkove-kalendare'?: AFSplatkovyKalendar[]
  get splatkoveKalendare(): AFSplatkovyKalendar[] | undefined { return this['splatkove-kalendare']}
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Daňové náklady (type: DANOVY_NAKLAD) - danove-naklady)
  'danove-naklady'?: AFDanovyNaklad[]
  get danoveNaklady(): AFDanovyNaklad[] | undefined { return this['danove-naklady']}
  // Zápůjčky/odpovědná osoba (type: ZAPUJCKA) - zapujcky)
  zapujcky?: AFZapujcka[]


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
    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    druhK : {
      key: 'druhK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhLeas',
      enum: DruhLeas,
      
    },
    cena : {
      key: 'cena',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    cidPoriz : {
      key: 'cidPoriz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datKoupe : {
      key: 'datKoupe',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datVyroby : {
      key: 'datVyroby',
      type: PropertyType.Date,
      isArray: false,
      
    },
    vyrCis : {
      key: 'vyrCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mjZarukyK : {
      key: 'mjZarukyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MjZaruky',
      enum: MjZaruky,
      
    },
    zaruka : {
      key: 'zaruka',
      type: PropertyType.Integer,
      isArray: false,
      maxLength: 2,
      
    },
    zamek : {
      key: 'zamek',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    pocetSplatek : {
      key: 'pocetSplatek',
      type: PropertyType.Integer,
      isArray: false,
      maxLength: 2,
      
    },
    pocetDanNakl : {
      key: 'pocetDanNakl',
      type: PropertyType.Integer,
      isArray: false,
      maxLength: 2,
      
    },
    frekDanNaklK : {
      key: 'frekDanNaklK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'FrDanNakl',
      enum: FrDanNakl,
      
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
    vozCislo : {
      key: 'vozCislo',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozSpz : {
      key: 'vozSpz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozZnacka : {
      key: 'vozZnacka',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozModel : {
      key: 'vozModel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozTyp : {
      key: 'vozTyp',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozObjem : {
      key: 'vozObjem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vozHavar : {
      key: 'vozHavar',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vozHavarVyse : {
      key: 'vozHavarVyse',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    vozVybava : {
      key: 'vozVybava',
      type: PropertyType.String,
      isArray: false,
      
    },
    typLeasingu : {
      key: 'typLeasingu',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypLeasingu',
      maxLength: 20,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      maxLength: 20,
      
    },
    casUcet : {
      key: 'casUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    zavazUcet : {
      key: 'zavazUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    naklUcet : {
      key: 'naklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphZaklUcet : {
      key: 'dphZaklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphSnizUcet : {
      key: 'dphSnizUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dodavatel : {
      key: 'dodavatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    vyrobce : {
      key: 'vyrobce',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },

    'splatkove-kalendare' : {
      key: 'splatkove-kalendare',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFSplatkovyKalendar'
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
    'danove-naklady' : {
      key: 'danove-naklady',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFDanovyNaklad'
    },
    zapujcky : {
      key: 'zapujcky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFZapujcka'
    },

  }
}