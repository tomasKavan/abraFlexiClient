import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFTypLeasingu } from './AFTypLeasingu'
import { AFMena } from './AFMena'
import { AFUcet } from './AFUcet'
import { AFAdresar } from './AFAdresar'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFSplatkovyKalendar } from './AFSplatkovyKalendar'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFDanovyNaklad } from './AFDanovyNaklad'
import { AFZapujcka } from './AFZapujcka'


import { DruhLeas, MjZaruky, FrDanNakl } from './AFEntityEnums'

export class AFLeasing extends AFEntity {
  static EntityPath: string = 'leasing'
  static EntityName: string = 'Leasing'
  static EntityType: string = 'LEASING'

  // ID (db: IdLeasing) - ID)
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
  // EAN kód (db: EanKod) - EAN kód)
  eanKod?: string
  // Druh (db: DruhK) - Druh)
  druhK?: DruhLeas
  // Cena [Kč] (db: Cena) - Cena [Kč])
  cena?: Big
  // Číslo smlouvy (db: CidPoriz) - Číslo smlouvy)
  cidPoriz?: string
  // Zahájení (db: DatKoupe) - Datum zahájení leasingu)
  datKoupe?: Date
  // Vyrobeno (db: DatVyroby) - Datum výroby)
  datVyroby?: Date
  // Výrobní číslo (db: VyrCis) - Výrobní číslo)
  vyrCis?: string
  // MJ záruky (db: MjZarukyK) - MJ záruky)
  mjZarukyK?: MjZaruky
  // Záruka (db: Zaruka) - Záruka)
  zaruka?: number
  // Zámek (db: Zamek) - Zámek)
  zamek?: boolean
  // ? splátek (db: PocetSplatek) - Počet splátek)
  pocetSplatek?: number
  // ? daň.nákl (db: PocetDanNakl) - Počet daňových nákladů [v měsících])
  pocetDanNakl?: number
  // Frekv.daň.nákl. (db: FrekDanNaklK) - Frekvence daňových nákladů)
  frekDanNaklK?: FrDanNakl
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Číslo (db: VozCislo) - Číslo)
  vozCislo?: string
  // SPZ (db: VozSpz) - SPZ)
  vozSpz?: string
  // Značka (db: VozZnacka) - Značka)
  vozZnacka?: string
  // Model (db: VozModel) - Model)
  vozModel?: string
  // Typ vozidla (db: VozTyp) - Typ vozidla)
  vozTyp?: string
  // Objem (db: VozObjem) - Objem)
  vozObjem?: Big
  // Havarijní pojištění (db: VozHavar) - Havarijní pojištění)
  vozHavar?: string
  // Výše havarijního pojištění (db: VozHavarVyse) - Výše havarijního pojištění)
  vozHavarVyse?: Big
  // Výbava (db: VozVybava) - Výbava)
  vozVybava?: string
  // Typ (db: IdTypLeas) - Typ)
  typLeasingu?: AFTypLeasingu
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Úč.čas.rozl. (db: IdCasUcet) - Účet časového rozlišení nákladů)
  casUcet?: AFUcet
  // Úč.závazku (db: IdZavazUcet) - Účet závazku)
  zavazUcet?: AFUcet
  // Úč.daň.nákl. (db: IdNaklUcet) - Účet daňových nákladů)
  naklUcet?: AFUcet
  // Úč.DPH sníž. (db: IdDphZaklUcet) - Účet DPH - základní sazba)
  dphZaklUcet?: AFUcet
  // Úč.DPH zákl. (db: IdDphSnizUcet) - Účet DPH - snížená sazba)
  dphSnizUcet?: AFUcet
  // Dodavatel (db: IdFirmyDod) - Dodavatel)
  dodavatel?: AFAdresar
  // Výrobce (db: IdFirmyVyr) - Výrobce)
  vyrobce?: AFAdresar
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: any

  // Splátkový kalendář (type: SPLATKOVY_KALENDAR) - splatkove-kalendare)
  splatkoveKalendare?: AFSplatkovyKalendar[]
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]
  // Daňové náklady (type: DANOVY_NAKLAD) - danove-naklady)
  danoveNaklady?: AFDanovyNaklad[]
  // Zápůjčky/odpovědná osoba (type: ZAPUJCKA) - zapujcky)
  zapujcky?: AFZapujcka[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },    platiOd : {
      key: 'platiOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    druhK : {
      key: 'druhK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DruhLeas',
      enum: DruhLeas,
      
    },    cena : {
      key: 'cena',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    cidPoriz : {
      key: 'cidPoriz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    datKoupe : {
      key: 'datKoupe',
      type: PropertyType.Date,
      isArray: false,
      
    },    datVyroby : {
      key: 'datVyroby',
      type: PropertyType.Date,
      isArray: false,
      
    },    vyrCis : {
      key: 'vyrCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    mjZarukyK : {
      key: 'mjZarukyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MjZaruky',
      enum: MjZaruky,
      
    },    zaruka : {
      key: 'zaruka',
      type: PropertyType.Integer,
      isArray: false,
      maxLength: 2,
      
    },    zamek : {
      key: 'zamek',
      type: PropertyType.Logic,
      isArray: false,
      
    },    pocetSplatek : {
      key: 'pocetSplatek',
      type: PropertyType.Integer,
      isArray: false,
      maxLength: 2,
      
    },    pocetDanNakl : {
      key: 'pocetDanNakl',
      type: PropertyType.Integer,
      isArray: false,
      maxLength: 2,
      
    },    frekDanNaklK : {
      key: 'frekDanNaklK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'FrDanNakl',
      enum: FrDanNakl,
      
    },    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },    vozCislo : {
      key: 'vozCislo',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    vozSpz : {
      key: 'vozSpz',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    vozZnacka : {
      key: 'vozZnacka',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    vozModel : {
      key: 'vozModel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    vozTyp : {
      key: 'vozTyp',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    vozObjem : {
      key: 'vozObjem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    vozHavar : {
      key: 'vozHavar',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    vozHavarVyse : {
      key: 'vozHavarVyse',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },    vozVybava : {
      key: 'vozVybava',
      type: PropertyType.String,
      isArray: false,
      
    },    typLeasingu : {
      key: 'typLeasingu',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypLeasingu,
      maxLength: 20,
      
    },    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      maxLength: 20,
      
    },    casUcet : {
      key: 'casUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    zavazUcet : {
      key: 'zavazUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    naklUcet : {
      key: 'naklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    dphZaklUcet : {
      key: 'dphZaklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    dphSnizUcet : {
      key: 'dphSnizUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFUcet,
      maxLength: 6,
      
    },    dodavatel : {
      key: 'dodavatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      maxLength: 20,
      
    },    vyrobce : {
      key: 'vyrobce',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      maxLength: 20,
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      maxLength: 30,
      
    },    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },
    splatkoveKalendare : {
      key: 'splatkoveKalendare',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFSplatkovyKalendar
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFPriloha
    },
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },
    danoveNaklady : {
      key: 'danoveNaklady',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFDanovyNaklad
    },
    zapujcky : {
      key: 'zapujcky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFZapujcka
    },

  }
}