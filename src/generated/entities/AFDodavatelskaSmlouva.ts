import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFDodavatelskyTypSmlouvy } from './AFDodavatelskyTypSmlouvy'
import { AFAdresar } from './AFAdresar'
import { AFZakazka } from './AFZakazka'
import { AFStredisko } from './AFStredisko'
import { AFTypFakturyPrijate } from './AFTypFakturyPrijate'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFStavSmlouvy } from './AFStavSmlouvy'
import { AFCinnost } from './AFCinnost'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFUzivatel } from './AFUzivatel'
import { AFKontakt } from './AFKontakt'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { ZpusobFakt } from '../AFEntityEnums'

export class AFDodavatelskaSmlouva extends AFEntity {
  static EntityPath: string = 'dodavatelska-smlouva'
  static EntityName: string = 'Dodavatelské smlouvy'
  static EntityType: string = 'DODAVATELSKA_SMLOUVA'

  // ID (db: IdSmlouvy) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Číslo smlouvy (db: Kod) - Číslo smlouvy)
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
  // Šablona (db: Sablona) - Šablona)
  sablona?: boolean | null
  // Platnost od (db: SmlouvaOd) - Platnost od)
  smlouvaOd?: Date | null
  // Platnost do (db: SmlouvaDo) - Platnost do)
  smlouvaDo?: Date | null
  // Datum podepsání (db: DatumPodepsani) - Datum podepsání)
  datumPodepsani?: Date | null
  // Datum účinnosti (db: DatumUcinnosti) - Datum účinnosti)
  datumUcinnosti?: Date | null
  // Frekvence fakturace (db: FrekFakt) - Frekvence fakturace (měsíců))
  frekFakt?: number | null
  // Obrátkový den (db: Den) - Obrátkový den)
  den?: number | null
  // Obrátkový měsíc (db: Mesic) - Obrátkový měsíc)
  mesic?: number | null
  // Způsob fakturace (db: ZpusFaktK) - Způsob fakturace)
  zpusFaktK?: ZpusobFakt | null
  // Fakturovat dní předem/po (db: DnyFakt) - Fakturovat dní předem/po)
  dnyFakt?: number | null
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string | null
  // Číslo došlé (db: CisDosle) - Číslo došlé)
  cisDosle?: string | null
  // Číslo smlouvy protistrany (db: CisSmlProti) - Číslo smlouvy protistrany)
  cisSmlProti?: string | null
  // Automaticky generovat (db: AutoGen) - Automaticky generovat)
  autoGen?: boolean | null
  // Automatická prolongace (db: AutoProlong) - Automatická prolongace)
  autoProlong?: number | null
  // Dat.vyst. z DUZP (db: DatVystZDuzp) - Dat.vyst. z DUZP)
  datVystZDuzp?: boolean | null
  // Generovat i nulové faktury (db: GenerovatNuloveFaktury) - Generovat i nulové faktury)
  generovatNuloveFaktury?: boolean | null
  // Ignorovat nastavení typu smlouvy (db: IgnorovatTypSml) - Ignorovat nastavení typu smlouvy)
  ignorovatTypSml?: boolean | null
  // Řešit přeplatky (db: Preplatky) - Řešit přeplatky)
  preplatky?: boolean | null
  // Variabilní symbol z faktury (db: VarSymFakt) - Variabilní symbol je generován z čísla faktury)
  varSymFakt?: boolean | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Katastrální území (db: KatastrUzemi) - Katastrální území)
  katastrUzemi?: string | null
  // Parcela (db: Parcela) - Parcela)
  parcela?: string | null
  // Výpovědní lhůta [měsíc] (db: VypovedniLhuta) - Výpovědní lhůta [měsíc])
  vypovedniLhuta?: number | null
  // Datum založení (db: DatZaloz) - Datum založení)
  datZaloz?: Date | null
  // Datum vypovězení (db: DatVypoz) - Datum vypovězení)
  datVypoz?: Date | null
  // Typ faktury - Splatnost ve dnech (db: ) - Typ faktury - Splatnost ve dnech)
  typDoklFakSplatDny?: number | null
  // Datum splatnosti nejstarší neuhrazené faktury u smlouvy (db: ) - Datum splatnosti nejstarší neuhrazené faktury u smlouvy)
  poslDatSplat?: Date | null
  // Název firmy (db: ) - Název firmy)
  firma_nazev?: string | null
  // Typ smlouvy (db: IdTypSml) - Typ smlouvy)
  typSml?: AFDodavatelskyTypSmlouvy | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Fakturovat firmě (db: IdFirmyFakt) - Fakturovat firmě)
  firmaFakt?: AFAdresar | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Typ faktury (db: IdTypDokl) - Typ faktury)
  typDoklFak?: AFTypFakturyPrijate | null
  // Konstantní symbol (db: IdKonSym) - Konstantní symbol)
  konSym?: AFKonstSymbol | null
  // Stav smlouvy (db: IdStavSml) - Stav smlouvy)
  stavSml?: AFStavSmlouvy | null
  // Typ faktury - Středisko (db: ) - Typ faktury - Středisko)
  typDoklFakStredisko?: AFStredisko | null
  // Typ faktury - Činnost (db: ) - Typ faktury - Činnost)
  typDoklFakCinnost?: AFCinnost | null
  // Typ faktury - Bankovní účet (db: ) - Typ faktury - Bankovní účet)
  typDoklFakBspBan?: AFBankovniUcet | null
  // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
  zodpOsoba?: AFUzivatel | null
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt | null

  // Standardní položky smluv (type: SMLOUVA_POLOZKA) - polozkySmlouvy)
  polozkySmlouvy?: AFSmlouvaPolozka[]
  // Externí položky smluv (type: SMLOUVA_POLOZKA) - polozkySmlouvyExt)
  polozkySmlouvyExt?: AFSmlouvaPolozka[]
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
    sablona : {
      key: 'sablona',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    smlouvaOd : {
      key: 'smlouvaOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    smlouvaDo : {
      key: 'smlouvaDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datumPodepsani : {
      key: 'datumPodepsani',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datumUcinnosti : {
      key: 'datumUcinnosti',
      type: PropertyType.Date,
      isArray: false,
      
    },
    frekFakt : {
      key: 'frekFakt',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    den : {
      key: 'den',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mesic : {
      key: 'mesic',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    zpusFaktK : {
      key: 'zpusFaktK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZpusobFakt',
      enum: ZpusobFakt,
      
    },
    dnyFakt : {
      key: 'dnyFakt',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    cisDosle : {
      key: 'cisDosle',
      type: PropertyType.String,
      isArray: false,
      maxLength: 40,
      
    },
    cisSmlProti : {
      key: 'cisSmlProti',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    autoGen : {
      key: 'autoGen',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    autoProlong : {
      key: 'autoProlong',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    datVystZDuzp : {
      key: 'datVystZDuzp',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    generovatNuloveFaktury : {
      key: 'generovatNuloveFaktury',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ignorovatTypSml : {
      key: 'ignorovatTypSml',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    preplatky : {
      key: 'preplatky',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    varSymFakt : {
      key: 'varSymFakt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    katastrUzemi : {
      key: 'katastrUzemi',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    parcela : {
      key: 'parcela',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    vypovedniLhuta : {
      key: 'vypovedniLhuta',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    datZaloz : {
      key: 'datZaloz',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datVypoz : {
      key: 'datVypoz',
      type: PropertyType.Date,
      isArray: false,
      
    },
    typDoklFakSplatDny : {
      key: 'typDoklFakSplatDny',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    poslDatSplat : {
      key: 'poslDatSplat',
      type: PropertyType.Date,
      isArray: false,
      
    },
    firma_nazev : {
      key: 'firma_nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    typSml : {
      key: 'typSml',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFDodavatelskyTypSmlouvy',
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    firmaFakt : {
      key: 'firmaFakt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      
    },
    typDoklFak : {
      key: 'typDoklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyPrijate',
      
    },
    konSym : {
      key: 'konSym',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKonstSymbol',
      
    },
    stavSml : {
      key: 'stavSml',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStavSmlouvy',
      
    },
    typDoklFakStredisko : {
      key: 'typDoklFakStredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      
    },
    typDoklFakCinnost : {
      key: 'typDoklFakCinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    typDoklFakBspBan : {
      key: 'typDoklFakBspBan',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFBankovniUcet',
      
    },
    zodpOsoba : {
      key: 'zodpOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    kontaktOsoba : {
      key: 'kontaktOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKontakt',
      
    },

    polozkySmlouvy : {
      key: 'polozkySmlouvy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFSmlouvaPolozka'
    },
    polozkySmlouvyExt : {
      key: 'polozkySmlouvyExt',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFSmlouvaPolozka'
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