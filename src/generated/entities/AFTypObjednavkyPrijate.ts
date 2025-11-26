import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFRadaObjednavkyPrijate } from './AFRadaObjednavkyPrijate'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFMena } from './AFMena'
import { AFStatDph } from './AFStatDph'
import { AFSklad } from './AFSklad'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { ZaokrJak, ZaokrNa, MetodaZaokr, RazeniProTisk } from '../AFEntityEnums'

export class AFTypObjednavkyPrijate extends AFEntity {
  static EntityPath: string = 'typ-objednavky-prijate'
  static EntityName: string = 'Typy přijatých objednávek'
  static EntityType: string = 'OBJEDNAVKA_IN_TYP'

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
  // Sleva [%] (db: SlevaDokl) - Sleva [%])
  slevaDokl?: Big | null
  // Způsob zaokrouhlení - Celkem (db: ZaokrJakSumK) - Celkem (způsob))
  zaokrJakSumK?: ZaokrJak | null
  // Řád zaokrouhlení - Celkem (db: ZaokrNaSumK) - Celkem (řády))
  zaokrNaSumK?: ZaokrNa | null
  // Způsob zaokrouhlení - DPH (db: ZaokrJakDphK) - DPH (způsob))
  zaokrJakDphK?: ZaokrJak | null
  // Řád zaokrouhlení - DPH (db: ZaokrNaDphK) - DPH (řády))
  zaokrNaDphK?: ZaokrNa | null
  // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
  metodaZaokrDoklK?: MetodaZaokr | null
  // Korekce DPH (db: VytvaretKorPol) - Korekce DPH)
  vytvaretKorPol?: boolean | null
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady | null
  // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
  doprava?: string | null
  // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
  popisDoklad?: string | null
  // Úvodní text (tiskne se před položkami) (db: UvodTxt) - Úvodní text (tiskne se před položkami))
  uvodTxt?: string | null
  // Závěrečný text (tiskne se za položkami) (db: ZavTxt) - Závěrečný text (tiskne se za položkami))
  zavTxt?: string | null
  // Dokladová řada (db: IdRadyPrijem) - Dokladová řada)
  radaPrijem?: AFRadaObjednavkyPrijate | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Bankovní účet (db: IdBspBan) - Bankovní účet)
  bspBan?: AFBankovniUcet | null
  // Typ výdejky (db: IdTypProtiDokladuVydej) - Typ výdejky)
  typProtiDokladuVydej?: AFTypSkladovyPohyb | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Stát DPH (db: IdStatDph) - Stát DPH)
  statDph?: AFStatDph | null
  // Aut. tisk (db: TiskAutomat) - Automaticky tisknout při vytvoření nového dokladu)
  tiskAutomat?: boolean | null
  // Řazení položek pro tisk (db: RazeniProTiskK) - Řazení položek pro tisk)
  razeniProTiskK?: RazeniProTisk | null
  // Primární typ dokladu (db: Primarni) - Primární typ dokladu)
  primarni?: boolean | null
  // Fakturovat souhrnně (db: FaktSouhrn) - Fakturovat souhrnně)
  faktSouhrn?: boolean | null
  // Fakturovat automaticky (db: FaktAuto) - Fakturovat automaticky)
  faktAuto?: boolean | null
  // Sklad (db: IdBspSkl) - Sklad)
  bspSkl?: AFSklad | null
  // Typ vydané faktury (db: IdTypDoklFak) - Typ vydané faktury)
  typDoklFak?: AFTypFakturyVydane | null
  // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
  formaDopravy?: AFFormaDopravy | null
  // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
  emailTxt?: string | null
  // Šablona e-mail (db: IdSablonaMail) - Šablona e-mail)
  sablonaMail?: AFSablonaMail | null
  // Vytvářet recyklační poplatky (db: GenerovatRecyklacniPoplatky) - Vytvářet recyklační poplatky)
  generovatRecyklacniPoplatky?: boolean | null
  // Preferovat na dokladech (db: StatDphTd) - Preferovat na dokladech)
  statDphTd?: boolean | null

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
    slevaDokl : {
      key: 'slevaDokl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    zaokrJakSumK : {
      key: 'zaokrJakSumK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },
    zaokrNaSumK : {
      key: 'zaokrNaSumK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    zaokrJakDphK : {
      key: 'zaokrJakDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },
    zaokrNaDphK : {
      key: 'zaokrNaDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    metodaZaokrDoklK : {
      key: 'metodaZaokrDoklK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MetodaZaokr',
      enum: MetodaZaokr,
      
    },
    vytvaretKorPol : {
      key: 'vytvaretKorPol',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    formaUhradyCis : {
      key: 'formaUhradyCis',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaUhrady',
      
    },
    doprava : {
      key: 'doprava',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisDoklad : {
      key: 'popisDoklad',
      type: PropertyType.String,
      isArray: false,
      
    },
    uvodTxt : {
      key: 'uvodTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    zavTxt : {
      key: 'zavTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    radaPrijem : {
      key: 'radaPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadaObjednavkyPrijate',
      
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
    bspBan : {
      key: 'bspBan',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFBankovniUcet',
      
    },
    typProtiDokladuVydej : {
      key: 'typProtiDokladuVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
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
    faktSouhrn : {
      key: 'faktSouhrn',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    faktAuto : {
      key: 'faktAuto',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    bspSkl : {
      key: 'bspSkl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    typDoklFak : {
      key: 'typDoklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyVydane',
      
    },
    formaDopravy : {
      key: 'formaDopravy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaDopravy',
      
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
    generovatRecyklacniPoplatky : {
      key: 'generovatRecyklacniPoplatky',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    statDphTd : {
      key: 'statDphTd',
      type: PropertyType.Logic,
      isArray: false,
      
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