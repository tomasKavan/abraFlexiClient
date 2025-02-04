import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFDodavatelskyTypSmlouvy } from './AFDodavatelskyTypSmlouvy'
import { AFAdresar } from './AFAdresar'
import { AFZakazka } from './AFZakazka'
import { AFStredisko } from './AFStredisko'
import { AFTypFakturyPrijate } from './AFTypFakturyPrijate'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFStavSmlouvy } from './AFStavSmlouvy'
import { AFCinnost } from './AFCinnost'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFKontakt } from './AFKontakt'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { ZpusobFakt } from './AFEntityEnums'

export class AFDodavatelskaSmlouva extends AFEntity {
  static EntityPath: string = 'dodavatelska-smlouva'
  static EntityName: string = 'Dodavatelské smlouvy'
  static EntityType: string = 'DODAVATELSKA_SMLOUVA'

  // ID (db: IdSmlouvy) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Číslo smlouvy (db: Kod) - Číslo smlouvy)
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
  // Šablona (db: Sablona) - Šablona)
  sablona?: boolean
  // Platnost od (db: SmlouvaOd) - Platnost od)
  smlouvaOd?: Date
  // Platnost do (db: SmlouvaDo) - Platnost do)
  smlouvaDo?: Date
  // Datum podepsání (db: DatumPodepsani) - Datum podepsání)
  datumPodepsani?: Date
  // Datum účinnosti (db: DatumUcinnosti) - Datum účinnosti)
  datumUcinnosti?: Date
  // Frekvence fakturace (db: FrekFakt) - Frekvence fakturace (měsíců))
  frekFakt?: number
  // Obrátkový den (db: Den) - Obrátkový den)
  den?: number
  // Obrátkový měsíc (db: Mesic) - Obrátkový měsíc)
  mesic?: number
  // Způsob fakturace (db: ZpusFaktK) - Způsob fakturace)
  zpusFaktK?: ZpusobFakt
  // Fakturovat dní předem/po (db: DnyFakt) - Fakturovat dní předem/po)
  dnyFakt?: number
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string
  // Číslo došlé (db: CisDosle) - Číslo došlé)
  cisDosle?: string
  // Číslo smlouvy protistrany (db: CisSmlProti) - Číslo smlouvy protistrany)
  cisSmlProti?: string
  // Automaticky generovat (db: AutoGen) - Automaticky generovat)
  autoGen?: boolean
  // Automatická prolongace (db: AutoProlong) - Automatická prolongace)
  autoProlong?: number
  // Dat.vyst. z DUZP (db: DatVystZDuzp) - Dat.vyst. z DUZP)
  datVystZDuzp?: boolean
  // Generovat i nulové faktury (db: GenerovatNuloveFaktury) - Generovat i nulové faktury)
  generovatNuloveFaktury?: boolean
  // Ignorovat nastavení typu smlouvy (db: IgnorovatTypSml) - Ignorovat nastavení typu smlouvy)
  ignorovatTypSml?: boolean
  // Řešit přeplatky (db: Preplatky) - Řešit přeplatky)
  preplatky?: boolean
  // Variabilní symbol z faktury (db: VarSymFakt) - Variabilní symbol je generován z čísla faktury)
  varSymFakt?: boolean
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Katastrální území (db: KatastrUzemi) - Katastrální území)
  katastrUzemi?: string
  // Parcela (db: Parcela) - Parcela)
  parcela?: string
  // Výpovědní lhůta [měsíc] (db: VypovedniLhuta) - Výpovědní lhůta [měsíc])
  vypovedniLhuta?: number
  // Datum založení (db: DatZaloz) - Datum založení)
  datZaloz?: Date
  // Datum vypovězení (db: DatVypoz) - Datum vypovězení)
  datVypoz?: Date
  // Typ faktury - Splatnost ve dnech (db: ) - Typ faktury - Splatnost ve dnech)
  typDoklFakSplatDny?: number
  // Datum splatnosti nejstarší neuhrazené faktury u smlouvy (db: ) - Datum splatnosti nejstarší neuhrazené faktury u smlouvy)
  poslDatSplat?: Date
  // Název firmy (db: ) - Název firmy)
  firma_nazev?: string
  // Typ smlouvy (db: IdTypSml) - Typ smlouvy)
  typSml?: AFDodavatelskyTypSmlouvy
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar
  // Fakturovat firmě (db: IdFirmyFakt) - Fakturovat firmě)
  firmaFakt?: AFAdresar
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Typ faktury (db: IdTypDokl) - Typ faktury)
  typDoklFak?: AFTypFakturyPrijate
  // Konstantní symbol (db: IdKonSym) - Konstantní symbol)
  konSym?: AFKonstSymbol
  // Stav smlouvy (db: IdStavSml) - Stav smlouvy)
  stavSml?: AFStavSmlouvy
  // Typ faktury - Středisko (db: ) - Typ faktury - Středisko)
  typDoklFakStredisko?: AFStredisko
  // Typ faktury - Činnost (db: ) - Typ faktury - Činnost)
  typDoklFakCinnost?: AFCinnost
  // Typ faktury - Bankovní účet (db: ) - Typ faktury - Bankovní účet)
  typDoklFakBspBan?: AFBankovniUcet
  // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
  zodpOsoba?: any
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt

  // Standardní položky smluv (type: SMLOUVA_POLOZKA) - polozkySmlouvy)
  polozkySmlouvy?: AFSmlouvaPolozka[]
  // Externí položky smluv (type: SMLOUVA_POLOZKA) - polozkySmlouvyExt)
  polozkySmlouvyExt?: AFSmlouvaPolozka[]
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]


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
      
    },    sablona : {
      key: 'sablona',
      type: PropertyType.Logic,
      isArray: false,
      
    },    smlouvaOd : {
      key: 'smlouvaOd',
      type: PropertyType.Date,
      isArray: false,
      
    },    smlouvaDo : {
      key: 'smlouvaDo',
      type: PropertyType.Date,
      isArray: false,
      
    },    datumPodepsani : {
      key: 'datumPodepsani',
      type: PropertyType.Date,
      isArray: false,
      
    },    datumUcinnosti : {
      key: 'datumUcinnosti',
      type: PropertyType.Date,
      isArray: false,
      
    },    frekFakt : {
      key: 'frekFakt',
      type: PropertyType.Integer,
      isArray: false,
      
    },    den : {
      key: 'den',
      type: PropertyType.Integer,
      isArray: false,
      
    },    mesic : {
      key: 'mesic',
      type: PropertyType.Integer,
      isArray: false,
      
    },    zpusFaktK : {
      key: 'zpusFaktK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZpusobFakt',
      enum: ZpusobFakt,
      
    },    dnyFakt : {
      key: 'dnyFakt',
      type: PropertyType.Integer,
      isArray: false,
      
    },    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },    cisDosle : {
      key: 'cisDosle',
      type: PropertyType.String,
      isArray: false,
      maxLength: 40,
      
    },    cisSmlProti : {
      key: 'cisSmlProti',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },    autoGen : {
      key: 'autoGen',
      type: PropertyType.Logic,
      isArray: false,
      
    },    autoProlong : {
      key: 'autoProlong',
      type: PropertyType.Integer,
      isArray: false,
      
    },    datVystZDuzp : {
      key: 'datVystZDuzp',
      type: PropertyType.Logic,
      isArray: false,
      
    },    generovatNuloveFaktury : {
      key: 'generovatNuloveFaktury',
      type: PropertyType.Logic,
      isArray: false,
      
    },    ignorovatTypSml : {
      key: 'ignorovatTypSml',
      type: PropertyType.Logic,
      isArray: false,
      
    },    preplatky : {
      key: 'preplatky',
      type: PropertyType.Logic,
      isArray: false,
      
    },    varSymFakt : {
      key: 'varSymFakt',
      type: PropertyType.Logic,
      isArray: false,
      
    },    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },    katastrUzemi : {
      key: 'katastrUzemi',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    parcela : {
      key: 'parcela',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    vypovedniLhuta : {
      key: 'vypovedniLhuta',
      type: PropertyType.Integer,
      isArray: false,
      
    },    datZaloz : {
      key: 'datZaloz',
      type: PropertyType.Date,
      isArray: false,
      
    },    datVypoz : {
      key: 'datVypoz',
      type: PropertyType.Date,
      isArray: false,
      
    },    typDoklFakSplatDny : {
      key: 'typDoklFakSplatDny',
      type: PropertyType.Integer,
      isArray: false,
      
    },    poslDatSplat : {
      key: 'poslDatSplat',
      type: PropertyType.Date,
      isArray: false,
      
    },    firma_nazev : {
      key: 'firma_nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    typSml : {
      key: 'typSml',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFDodavatelskyTypSmlouvy,
      
    },    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      
    },    firmaFakt : {
      key: 'firmaFakt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFAdresar,
      
    },    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFZakazka,
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      
    },    typDoklFak : {
      key: 'typDoklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypFakturyPrijate,
      
    },    konSym : {
      key: 'konSym',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFKonstSymbol,
      
    },    stavSml : {
      key: 'stavSml',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStavSmlouvy,
      
    },    typDoklFakStredisko : {
      key: 'typDoklFakStredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      
    },    typDoklFakCinnost : {
      key: 'typDoklFakCinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCinnost,
      
    },    typDoklFakBspBan : {
      key: 'typDoklFakBspBan',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFBankovniUcet,
      
    },    zodpOsoba : {
      key: 'zodpOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },    kontaktOsoba : {
      key: 'kontaktOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFKontakt,
      
    },
    polozkySmlouvy : {
      key: 'polozkySmlouvy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFSmlouvaPolozka
    },
    polozkySmlouvyExt : {
      key: 'polozkySmlouvyExt',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFSmlouvaPolozka
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
    uzivatelskeVazby : {
      key: 'uzivatelskeVazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}