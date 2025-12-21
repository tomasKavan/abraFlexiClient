import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFAdresar } from './AFAdresar.js'
import { AFMistoUrceni } from './AFMistoUrceni.js'
import { AFStredisko } from './AFStredisko.js'
import { AFStavZakazky } from './AFStavZakazky.js'
import { AFTypZakazky } from './AFTypZakazky.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFHodnoceniZakazky } from './AFHodnoceniZakazky.js'
import { AFKontakt } from './AFKontakt.js'
import { AFMena } from './AFMena.js'
import { AFPriloha } from './AFPriloha.js'
import { AFUdalost } from './AFUdalost.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFZakazka extends AFEntity {
  static EntityPath: string = 'zakazka'
  static EntityName: string = 'Zakázky'
  static EntityType: string = 'ZAKAZKA'

  // ID (db: IdZakazky) - ID)
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
  // Datum zahájení (db: DatZahaj) - Datum zahájení)
  datZahaj?: Date | null
  // Datum ukončení (db: DatKonec) - Datum ukončení)
  datKonec?: Date | null
  // Procento vyhodnocení (db: ProcVyh) - Procento vyhodnocení)
  procVyh?: Big | null
  // Termín realizace (db: Termin) - Termín realizace)
  termin?: Date | null
  // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
  splatDny?: number | null
  // Rozsah zakázky (db: Rozsah) - Rozsah zakázky)
  rozsah?: Big | null
  // Předpokl. náklady (db: NakladyPredpoklad) - Předpokl. náklady)
  nakladyPredpoklad?: Big | null
  // Předpokl. zisk (db: ZiskPredpoklad) - Předpokl. zisk)
  ziskPredpoklad?: Big | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Číslo objednávky (db: CisObj) - Číslo objednávky)
  cisObj?: string | null
  // Číslo smlouvy (db: CisSml) - Číslo smlouvy)
  cisSml?: string | null
  // Plánované zahájení (db: DatZahajPlan) - Plánované zahájení)
  datZahajPlan?: Date | null
  // Plánované předání (db: DatPredaniPlan) - Plánované předání)
  datPredaniPlan?: Date | null
  // Datum předání (db: DatPredani) - Datum předání)
  datPredani?: Date | null
  // Záruka (db: Zaruka) - Záruka)
  zaruka?: boolean | null
  // Datum záruky (db: DatZaruky) - Datum záruky)
  datZaruky?: Date | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Místo určení (db: IdMur) - Místo určení)
  mistUrc?: AFMistoUrceni | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Stav zakázky (db: IdStavZakazky) - Stav zakázky)
  stavZakazky?: AFStavZakazky | null
  // Typ zakázky (db: Idtypzakazky) - Typ zakázky)
  typZakazky?: AFTypZakazky | null
  // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
  zodpPrac?: AFUzivatel | null
  // Vyhodnocení zakázky (db: IdVyhZakazky) - Vyhodnocení zakázky)
  vyhZakazky?: AFHodnoceniZakazky | null
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt | null
  // Měna (db: IdMena) - Měna)
  mena?: AFMena | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: AFUzivatel | null
  // Vytvořil (db: IdCreatedBy) - Vytvořil)
  createdBy?: AFUzivatel | null

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
    createdDate : {
      key: 'createdDate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    mistUrc : {
      key: 'mistUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMistoUrceni',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    stavZakazky : {
      key: 'stavZakazky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStavZakazky',
      maxLength: 20,
      
    },
    typZakazky : {
      key: 'typZakazky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZakazky',
      maxLength: 20,
      
    },
    zodpPrac : {
      key: 'zodpPrac',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    vyhZakazky : {
      key: 'vyhZakazky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFHodnoceniZakazky',
      maxLength: 20,
      
    },
    kontaktOsoba : {
      key: 'kontaktOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKontakt',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },

    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUdalost'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}