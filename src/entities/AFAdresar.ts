import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFSkupinaFirem } from './AFSkupinaFirem'
import { AFStredisko } from './AFStredisko'
import { AFCenikovaSkupina } from './AFCenikovaSkupina'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFOdberatel } from './AFOdberatel'
import { AFAtribut } from './AFAtribut'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFUdalost } from './AFUdalost'
import { AFPriloha } from './AFPriloha'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFSmlouva } from './AFSmlouva'
import { AFDodavatel } from './AFDodavatel'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFRezervace } from './AFRezervace'
import { AFKontakt } from './AFKontakt'


import { FormExport, TypVztahu, IsdocPrilohaMailu } from './AFEntityEnums'

export class AFAdresar extends AFEntity {
  static EntityPath: string = 'adresar'
  static EntityName: string = 'Adresy firem'
  static EntityType: string = 'ADRESAR'

  // ID (db: IdFirmy) - ID)
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
  // Upozornění (db: Poznam) - Upozornění)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Ulice (db: Ulice) - Ulice)
  ulice?: string
  // Město (db: Mesto) - Město)
  mesto?: string
  // PSČ (db: Psc) - PSČ)
  psc?: string
  // Telefon (db: Tel) - Telefon)
  tel?: string
  // Mobil (db: Mobil) - Mobil)
  mobil?: string
  // Fax (db: Fax) - Fax)
  fax?: string
  // E-mail (db: Email) - E-mail)
  email?: string
  // WWW (db: Www) - WWW)
  www?: string
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion
  // EAN (db: EanKod) - EAN)
  eanKod?: string
  // IČO (db: Ic) - IČO)
  ic?: string
  // DIČ (db: Dic) - DIČ)
  dic?: string
  // Poštovní adresa je shodná se sídlem (db: PostovniShodna) - Poštovní adresa je shodná se sídlem)
  postovniShodna?: boolean
  // Pošt. EAN (db: FaEanKod) - EAN)
  faEanKod?: string
  // Pošt. jméno firmy (db: FaJmenoFirmy) - Firma)
  faJmenoFirmy?: string
  // Pošt. ulice (db: FaUlice) - Ulice)
  faUlice?: string
  // Pošt. město (db: FaMesto) - Město)
  faMesto?: string
  // Pošt. PSČ (db: FaPsc) - PSČ)
  faPsc?: string
  // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
  splatDny?: number
  // Limit fakt. (db: LimitFak) - Limit fakturace)
  limitFak?: Big
  // Maximální počet dnů po splatnosti (db: LimitPoSplatDny) - Maximální počet dnů po splatnosti)
  limitPoSplatDny?: number
  // Zákaz prodeje po překročení splatnosti (db: LimitPoSplatZakaz) - Zákaz prodeje po překročení splatnosti)
  limitPoSplatZakaz?: boolean
  // Plátce DPH (db: PlatceDph) - Plátce DPH)
  platceDph?: boolean
  // Formát exportu (db: FormExportK) - Formát exportu)
  formExportK?: FormExport
  // Typ vztahu (db: TypVztahuK) - Typ vztahu)
  typVztahuK?: TypVztahu
  // Kód pro tisky (db: KodPojistovny) - Kód pro tisky)
  kodPojistovny?: string
  // Název pro tisky (db: NazevPojistovny) - Název pro tisky)
  nazevPojistovny?: string
  // Oslovení (db: Osloveni) - Oslovení)
  osloveni?: string
  // Sleva [%] (db: SlevaDokl) - Sleva [%])
  slevaDokl?: Big
  // Při částečné fakturaci objednávky označit za hotovou (db: ObpAutomHotovo) - Při částečné fakturaci objednávky označit za hotovou)
  obpAutomHotovo?: boolean
  // Název - druhá řádka (db: Nazev2) - Název - druhá řádka)
  nazev2?: string
  // Název - druhá řádka EN (db: Nazev2A) - Název - druhá řádka EN)
  nazev2A?: string
  // Název - druhá řádka DE (db: Nazev2B) - Název - druhá řádka DE)
  nazev2B?: string
  // Název - druhá řádka FR (db: Nazev2C) - Název - druhá řádka FR)
  nazev2C?: string
  // Nespolehlivý plátce (db: NespolehlivyPlatce) - Nespolehlivý plátce)
  nespolehlivyPlatce?: boolean
  // Revize (db: Revize) - Revize)
  revize?: number
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Katastrální území (db: KatastrUzemi) - Katastrální území)
  katastrUzemi?: string
  // Parcela (db: Parcela) - Parcela)
  parcela?: string
  // Datum narození (db: DatNaroz) - Datum narození)
  datNaroz?: Date
  // Rodné číslo (db: RodCis) - Rodné číslo)
  rodCis?: string
  // Datum založení (db: DatZaloz) - Datum založení)
  datZaloz?: Date
  // Zrušení (db: Canceled) - Zrušení)
  canceled?: boolean
  // ISDOC v e-mailu (db: IsdocPrilohaMailuK) - ISDOC v e-mailu)
  isdocPrilohaMailuK?: IsdocPrilohaMailu
  // Skupina (db: IdSkupFir) - Skupina)
  skupFir?: AFSkupinaFirem
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Pošt. stát (db: IdFaStatu) - Stát)
  faStat?: AFStat
  // Pošt. kraj (db: Idfaregion) - Kraj)
  faRegion?: AFRegion
  // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
  zodpOsoba?: any
  // Ceníková skupina (db: IdSkupCen) - Ceníková skupina)
  skupCen?: AFCenikovaSkupina
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady

  // Prodejní ceny (type: ODBERATEL) - odberatele)
  odberatele?: AFOdberatel[]
  // Atributy (type: ATRIBUT) - atributy)
  atributy?: AFAtribut[]
  // Bankovní spojení (type: ADR_BANKOVNI_UCET) - bankovniSpojeni)
  bankovniSpojeni?: AFAdresarBankovniUcet[]
  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  uzivatelskeVazby?: AFUzivatelskaVazba[]
  // Cenové úrovně (type: CENOVA_UROVEN) - cenHladiny)
  cenHladiny?: AFCenovaUroven[]
  // Smlouvy (type: SMLOUVA) - smlouvy)
  smlouvy?: AFSmlouva[]
  // Nákupní ceny (type: DODAVATEL) - dodavatele)
  dodavatele?: AFDodavatel[]
  // Místa určení (type: MISTO_URCENI) - mistaUrceni)
  mistaUrceni?: AFMistoUrceni[]
  // Rezervace (type: REZERVACE) - rezervace)
  rezervace?: AFRezervace[]
  // Kontakty (type: ADR_KONTAKT) - kontakty)
  kontakty?: AFKontakt[]


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
      
    },    ulice : {
      key: 'ulice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    psc : {
      key: 'psc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    tel : {
      key: 'tel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    mobil : {
      key: 'mobil',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    fax : {
      key: 'fax',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    email : {
      key: 'email',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    www : {
      key: 'www',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStat,
      maxLength: 3,
      
    },    region : {
      key: 'region',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRegion,
      
    },    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    ic : {
      key: 'ic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    dic : {
      key: 'dic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    postovniShodna : {
      key: 'postovniShodna',
      type: PropertyType.Logic,
      isArray: false,
      
    },    faEanKod : {
      key: 'faEanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    faJmenoFirmy : {
      key: 'faJmenoFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    faUlice : {
      key: 'faUlice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    faMesto : {
      key: 'faMesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    faPsc : {
      key: 'faPsc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    splatDny : {
      key: 'splatDny',
      type: PropertyType.Integer,
      isArray: false,
      
    },    limitFak : {
      key: 'limitFak',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 12,
      
    },    limitPoSplatDny : {
      key: 'limitPoSplatDny',
      type: PropertyType.Integer,
      isArray: false,
      
    },    limitPoSplatZakaz : {
      key: 'limitPoSplatZakaz',
      type: PropertyType.Logic,
      isArray: false,
      
    },    platceDph : {
      key: 'platceDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },    formExportK : {
      key: 'formExportK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'FormExport',
      enum: FormExport,
      
    },    typVztahuK : {
      key: 'typVztahuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVztahu',
      enum: TypVztahu,
      
    },    kodPojistovny : {
      key: 'kodPojistovny',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    nazevPojistovny : {
      key: 'nazevPojistovny',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    osloveni : {
      key: 'osloveni',
      type: PropertyType.String,
      isArray: false,
      
    },    slevaDokl : {
      key: 'slevaDokl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },    obpAutomHotovo : {
      key: 'obpAutomHotovo',
      type: PropertyType.Logic,
      isArray: false,
      
    },    nazev2 : {
      key: 'nazev2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazev2A : {
      key: 'nazev2A',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazev2B : {
      key: 'nazev2B',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazev2C : {
      key: 'nazev2C',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nespolehlivyPlatce : {
      key: 'nespolehlivyPlatce',
      type: PropertyType.Logic,
      isArray: false,
      
    },    revize : {
      key: 'revize',
      type: PropertyType.Integer,
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
      
    },    datNaroz : {
      key: 'datNaroz',
      type: PropertyType.Date,
      isArray: false,
      
    },    rodCis : {
      key: 'rodCis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },    datZaloz : {
      key: 'datZaloz',
      type: PropertyType.Date,
      isArray: false,
      
    },    canceled : {
      key: 'canceled',
      type: PropertyType.Logic,
      isArray: false,
      
    },    isdocPrilohaMailuK : {
      key: 'isdocPrilohaMailuK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'IsdocPrilohaMailu',
      enum: IsdocPrilohaMailu,
      
    },    skupFir : {
      key: 'skupFir',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFSkupinaFirem,
      
    },    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStredisko,
      maxLength: 20,
      
    },    faStat : {
      key: 'faStat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStat,
      maxLength: 3,
      
    },    faRegion : {
      key: 'faRegion',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRegion,
      
    },    zodpOsoba : {
      key: 'zodpOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFEntity,
      maxLength: 254,
      
    },    skupCen : {
      key: 'skupCen',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFCenikovaSkupina,
      
    },    formaUhradyCis : {
      key: 'formaUhradyCis',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFFormaUhrady,
      
    },
    odberatele : {
      key: 'odberatele',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFOdberatel
    },
    atributy : {
      key: 'atributy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFAtribut
    },
    bankovniSpojeni : {
      key: 'bankovniSpojeni',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFAdresarBankovniUcet
    },
    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUdalost
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
    cenHladiny : {
      key: 'cenHladiny',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFCenovaUroven
    },
    smlouvy : {
      key: 'smlouvy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFSmlouva
    },
    dodavatele : {
      key: 'dodavatele',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFDodavatel
    },
    mistaUrceni : {
      key: 'mistaUrceni',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFMistoUrceni
    },
    rezervace : {
      key: 'rezervace',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFRezervace
    },
    kontakty : {
      key: 'kontakty',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFKontakt
    },

  }
}