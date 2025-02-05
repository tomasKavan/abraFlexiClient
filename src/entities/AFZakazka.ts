import { TypeAnnotation, PropertyType } from '../AFTypes'
import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFStredisko } from './AFStredisko'
import { AFStavZakazky } from './AFStavZakazky'
import { AFTypZakazky } from './AFTypZakazky'
import { AFHodnoceniZakazky } from './AFHodnoceniZakazky'
import { AFKontakt } from './AFKontakt'
import { AFMena } from './AFMena'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFZakazka extends AFEntity {
  static EntityPath: string = 'zakazka'
  static EntityName: string = 'Zakázky'
  static EntityType: string = 'ZAKAZKA'

  // ID (db: IdZakazky) - ID)
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
  // Datum zahájení (db: DatZahaj) - Datum zahájení)
  datZahaj?: Date
  // Datum ukončení (db: DatKonec) - Datum ukončení)
  datKonec?: Date
  // Procento vyhodnocení (db: ProcVyh) - Procento vyhodnocení)
  procVyh?: Big
  // Termín realizace (db: Termin) - Termín realizace)
  termin?: Date
  // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
  splatDny?: number
  // Rozsah zakázky (db: Rozsah) - Rozsah zakázky)
  rozsah?: Big
  // Předpokl. náklady (db: NakladyPredpoklad) - Předpokl. náklady)
  nakladyPredpoklad?: Big
  // Předpokl. zisk (db: ZiskPredpoklad) - Předpokl. zisk)
  ziskPredpoklad?: Big
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Číslo objednávky (db: CisObj) - Číslo objednávky)
  cisObj?: string
  // Číslo smlouvy (db: CisSml) - Číslo smlouvy)
  cisSml?: string
  // Plánované zahájení (db: DatZahajPlan) - Plánované zahájení)
  datZahajPlan?: Date
  // Plánované předání (db: DatPredaniPlan) - Plánované předání)
  datPredaniPlan?: Date
  // Datum předání (db: DatPredani) - Datum předání)
  datPredani?: Date
  // Záruka (db: Zaruka) - Záruka)
  zaruka?: boolean
  // Datum záruky (db: DatZaruky) - Datum záruky)
  datZaruky?: Date
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar
  // Místo určení (db: IdMur) - Místo určení)
  mistUrc?: AFMistoUrceni
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Stav zakázky (db: IdStavZakazky) - Stav zakázky)
  stavZakazky?: AFStavZakazky
  // Typ zakázky (db: Idtypzakazky) - Typ zakázky)
  typZakazky?: AFTypZakazky
  // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
  zodpPrac?: any
  // Vyhodnocení zakázky (db: IdVyhZakazky) - Vyhodnocení zakázky)
  vyhZakazky?: AFHodnoceniZakazky
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt
  // Měna (db: IdMena) - Měna)
  mena?: AFMena

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
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
      maxLength: 30,
      
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
    datZahaj : {
      key: 'datZahaj',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datKonec : {
      key: 'datKonec',
      type: PropertyType.Date,
      isArray: false,
      
    },
    procVyh : {
      key: 'procVyh',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    termin : {
      key: 'termin',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    splatDny : {
      key: 'splatDny',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    rozsah : {
      key: 'rozsah',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    nakladyPredpoklad : {
      key: 'nakladyPredpoklad',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    ziskPredpoklad : {
      key: 'ziskPredpoklad',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    cisObj : {
      key: 'cisObj',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    cisSml : {
      key: 'cisSml',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    datZahajPlan : {
      key: 'datZahajPlan',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datPredaniPlan : {
      key: 'datPredaniPlan',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datPredani : {
      key: 'datPredani',
      type: PropertyType.Date,
      isArray: false,
      
    },
    zaruka : {
      key: 'zaruka',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datZaruky : {
      key: 'datZaruky',
      type: PropertyType.Date,
      isArray: false,
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      maxLength: 20,
      
    },
    mistUrc : {
      key: 'mistUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMistoUrceni,
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },
    stavZakazky : {
      key: 'stavZakazky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStavZakazky,
      maxLength: 20,
      
    },
    typZakazky : {
      key: 'typZakazky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypZakazky,
      maxLength: 20,
      
    },
    zodpPrac : {
      key: 'zodpPrac',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },
    vyhZakazky : {
      key: 'vyhZakazky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFHodnoceniZakazky,
      maxLength: 20,
      
    },
    kontaktOsoba : {
      key: 'kontaktOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFKontakt,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFMena,
      
    },

    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFPriloha
    },
    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUdalost
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}