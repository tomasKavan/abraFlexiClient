import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFRadaPokladniPohyb } from './AFRadaPokladniPohyb'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFPokladna } from './AFPokladna'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFStatDph } from './AFStatDph'
import { AFStat } from './AFStat'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFSablonaMail } from './AFSablonaMail'
import { AFAutotisk } from './AFAutotisk'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPohybu, ZaokrJak, ZaokrNa, MetodaZaokr, RazeniProTisk, Ekokom } from '../AFEntityEnums'

export class AFTypPokladniPohyb extends AFEntity {
  static EntityPath: string = 'typ-pokladni-pohyb'
  static EntityName: string = 'Typy pokladních dokladů'
  static EntityType: string = 'POKLADNI_POHYB_TYP'

  // ID (db: IdTypDokl) - ID)
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string
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
  // Platí od (db: IdUcetObdobiOd) - Platí od)
  ucetObdobiOd?: AFUcetniObdobi
  // Platí do (db: IdUcetObdobiDo) - Platí do)
  ucetObdobiDo?: AFUcetniObdobi
  // Platí od roku (db: PlatiOd) - Platí od roku)
  platiOd?: number
  // Platí do roku (db: PlatiDo) - Platí do roku)
  platiDo?: number
  // Modul (db: Modul) - Modul)
  modul?: string
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean
  // Typ pohybu (db: TypPohybuK) - Typ pohybu)
  typPohybuK?: TypPohybu
  // Sleva [%] (db: SlevaDokl) - Sleva [%])
  slevaDokl?: Big
  // Způsob zaokr. Celkem (db: ZaokrJakSumK) - Celkem (způsob))
  zaokrJakSumK?: ZaokrJak
  // Řád zaokr. Celkem (db: ZaokrNaSumK) - Celkem (řády))
  zaokrNaSumK?: ZaokrNa
  // Způsob zaokr. DPH (db: ZaokrJakDphK) - DPH (způsob))
  zaokrJakDphK?: ZaokrJak
  // Řád zaokr. DPH (db: ZaokrNaDphK) - DPH (řády))
  zaokrNaDphK?: ZaokrNa
  // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
  metodaZaokrDoklK?: MetodaZaokr
  // Korekce DPH (db: VytvaretKorPol) - Korekce DPH)
  vytvaretKorPol?: boolean
  // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
  splatDny?: number
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady
  // Popis pro doklad (db: PopisDoklad) - Popis pro doklad)
  popisDoklad?: string
  // Řada pro příjem (db: IdRadyPrijem) - Řada pro příjem)
  radaPrijem?: AFRadaPokladniPohyb
  // Řada pro výdej (db: IdRadyVydej) - Řada pro výdej)
  radaVydej?: AFRadaPokladniPohyb
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost
  // Pokladna (db: IdBsp) - Pokladna)
  bsp?: AFPokladna
  // Typ příjemky (db: IdTypProtiDokladuPrijem) - Typ příjemky)
  typProtiDokladuPrijem?: AFTypSkladovyPohyb
  // Typ výdejky (db: IdTypProtiDokladuVydej) - Typ výdejky)
  typProtiDokladuVydej?: AFTypSkladovyPohyb
  // Předpis zaúčtování - příjem [DAL] (db: IdTypUcOpP) - pro příjem [DAL])
  typUcOpPrijem?: AFPredpisZauctovani
  // Předpis zaúčtování - výdej [MD] (db: IdTypUcOpV) - pro výdej [MD])
  typUcOpVydej?: AFPredpisZauctovani
  // Stát DPH (db: IdStatDph) - Stát DPH)
  statDph?: AFStatDph
  // Aut. tisk (db: TiskAutomat) - Automaticky tisknout při vytvoření nového dokladu)
  tiskAutomat?: boolean
  // Stát odesl. (db: IdStatOdesl) - Stát odesl.)
  statOdesl?: AFStat
  // Stát určení (db: IdStatUrc) - Stát určení)
  statUrc?: AFStat
  // Stát původu (db: IdStatPuvod) - Stát původu)
  statPuvod?: AFStat
  // Podmínky dodání (db: IdDodPodm) - Podmínky dodání)
  dodPodm?: AFIntrastatDodaciPodminky
  // Zvláštní pohyby (db: IdZvlPoh) - Zvláštní pohyby)
  zvlPoh?: AFIntrastatZvlastniPohyb
  // Transakce (db: IdObchTrans) - Transakce)
  obchTrans?: AFIntrastatObchodniTransakce
  // Druh dopravy (db: IdDruhDopr) - Druh dopravy)
  druhDopr?: AFIntrastatDruhDopravy
  // Kraj odesílatele (db: IdKrajUrc) - Kraj odesílatele)
  krajUrc?: AFIntrastatKrajUrceni
  // Generovat sklad (db: GenerovatSkl) - Automaticky generovat skladové doklady a vyžadovat zadání výrobních čísel.)
  generovatSkl?: boolean
  // Řazení položek pro tisk (db: RazeniProTiskK) - Řazení položek pro tisk)
  razeniProTiskK?: RazeniProTisk
  // Primární typ dokladu (db: Primarni) - Primární typ dokladu)
  primarni?: boolean
  // Text pro odesílání dokladu e-mailem (db: EmailTxt) - Text pro odesílání dokladu e-mailem)
  emailTxt?: string
  // Výkaz EkoKom (db: EkokomK) - Výkaz EkoKom)
  ekokomK?: Ekokom
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni
  // Zahrnovat nekatalogové položky do analýzy nákupu / prodeje (db: NekatalPolDoAnalyzy) - Zahrnovat nekatalogové položky do analýzy nákupu / prodeje)
  nekatalPolDoAnalyzy?: boolean
  // Šablona e-mail (db: IdSablonaMail) - Šablona e-mail)
  sablonaMail?: AFSablonaMail
  // Vytvářet recyklační poplatky (db: GenerovatRecyklacniPoplatky) - Vytvářet recyklační poplatky)
  generovatRecyklacniPoplatky?: boolean

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
    splatDny : {
      key: 'splatDny',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    formaUhradyCis : {
      key: 'formaUhradyCis',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaUhrady',
      
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
      afClass: 'AFRadaPokladniPohyb',
      
    },
    radaVydej : {
      key: 'radaVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadaPokladniPohyb',
      
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
      afClass: 'AFPokladna',
      
    },
    typProtiDokladuPrijem : {
      key: 'typProtiDokladuPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      
    },
    typProtiDokladuVydej : {
      key: 'typProtiDokladuVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      
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
    statOdesl : {
      key: 'statOdesl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statUrc : {
      key: 'statUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statPuvod : {
      key: 'statPuvod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    dodPodm : {
      key: 'dodPodm',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatDodaciPodminky',
      
    },
    zvlPoh : {
      key: 'zvlPoh',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatZvlastniPohyb',
      
    },
    obchTrans : {
      key: 'obchTrans',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatObchodniTransakce',
      
    },
    druhDopr : {
      key: 'druhDopr',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatDruhDopravy',
      
    },
    krajUrc : {
      key: 'krajUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatKrajUrceni',
      
    },
    generovatSkl : {
      key: 'generovatSkl',
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
    emailTxt : {
      key: 'emailTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    ekokomK : {
      key: 'ekokomK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'Ekokom',
      enum: Ekokom,
      
    },
    clenKonVykDph : {
      key: 'clenKonVykDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniKontrolniHlaseni',
      
    },
    nekatalPolDoAnalyzy : {
      key: 'nekatalPolDoAnalyzy',
      type: PropertyType.Logic,
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