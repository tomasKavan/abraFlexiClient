import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFTypPracovnihoPomeru } from './AFTypPracovnihoPomeru'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFTypDokladu } from './AFTypDokladu'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { PracRozvrh, PlneniOdprDoby, TypMzdy, DuvodSlevaSpFirma, TydenPracDoba, CsszDuvodUkonceni, CsszDuvodNeposkytnuti } from '../AFEntityEnums'

export class AFPracovniPomer extends AFEntity {
  static EntityPath: string = 'pracovni-pomer'
  static EntityName: string = 'Pracovní poměr'
  static EntityType: string = 'PRACOVNI_POMER'

  // ID (db: IdPracPom) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: Date
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Aktivní od (db: AktivniOd) - Aktivní od)
  aktivniOd?: Date
  // Aktivní do (db: AktivniDo) - Aktivní do)
  aktivniDo?: Date
  // Hlavní (db: Hlavni) - Hlavní)
  hlavni?: boolean
  // Pracovní rozvrh (db: PracRozvrhK) - Pracovní rozvrh)
  pracRozvrhK?: PracRozvrh
  // Plnění odpracované doby (db: PlneniOdprDobyK) - Plnění odpracované doby)
  plneniOdprDobyK?: PlneniOdprDoby
  // Typ mzdy (db: TypMzdyK) - Typ mzdy)
  typMzdyK?: TypMzdy
  // Měsíční mzda (db: MesicniMzda) - Měsíční mzda)
  mesicniMzda?: Big
  // Hodinová mzda (db: HodinovaMzda) - Hodinová mzda)
  hodinovaMzda?: Big
  // Začátek poměru (db: Zacatek) - Začátek poměru)
  zacatek?: Date
  // Skutečný nástup (db: SkutecnyNastup) - Skutečný nástup)
  skutecnyNastup?: Date
  // Nástupu do práce (db: Nastup) - Nástupu do práce)
  nastup?: Date
  // Tarifní třída (db: TarifTrida) - Tarifní třída)
  tarifTrida?: string
  // Úvazek hodin [Týdně] (db: UvazHodTydne) - Úvazek hodin [Týdně])
  uvazHodTydne?: Big
  // Úvazek hodin [Denně] (db: UvazHodDenne) - Úvazek hodin [Denně])
  uvazHodDenne?: Big
  // Úvazek dnů [Týdně] (db: UvazDnuTydne) - Úvazek dnů [Týdně])
  uvazDnuTydne?: number
  // Začátek pracovní doby (db: ZacPracDoby) - Začátek pracovní doby)
  zacPracDoby?: Big
  // Výpočet náhrady za svátky z průměru (db: SvatkyPrumer) - Výpočet náhrady za svátky z průměru)
  svatkyPrumer?: boolean
  // Procento z minimální mzdy (db: ProcMinMzd) - Procento z minimální mzdy)
  procMinMzd?: number
  // Pracovněprávní průměr [Kč/hod] (db: PredHrubPrijem) - Pracovněprávní průměr [Kč/hod])
  predHrubPrijem?: Big
  // Zaměstnání malého rozsahu (db: MalyRozsah) - Zaměstnání malého rozsahu)
  malyRozsah?: boolean
  // Prominutí SP za firmu (db: ProminutiSPFirma) - Prominutí SP za firmu)
  prominutiSPFirma?: boolean
  // Sleva SP za firmu (db: SlevaSPFirma) - Sleva SP za firmu)
  slevaSPFirma?: boolean
  // Důvod slevy SP za firmu (db: DuvodSlevaSPFirmaK) - Důvod slevy SP za firmu)
  duvodSlevaSPFirmaK?: DuvodSlevaSpFirma
  // OZUSPOJ sleva od (db: SlevaSpFirmaOd) - OZUSPOJ sleva od)
  slevaSpFirmaOd?: Date
  // OZUSPOJ sleva do (db: SlevaSpFirmaDo) - OZUSPOJ sleva do)
  slevaSpFirmaDo?: Date
  // Konec poměru (db: KonecPomeru) - Konec poměru)
  konecPomeru?: Date
  // Konec zkušební doby (db: KonecZkusDoby) - Konec zkušební doby)
  konecZkusDoby?: Date
  // Konec určité doby (db: KonecUrciteDoby) - Konec určité doby)
  konecUrciteDoby?: Date
  // Sdělení organizace (db: ZlistSdeleni) - Sdělení organizace)
  zlistSdeleni?: string
  // Způsob ukončení (db: ZlistUkonceni) - Způsob ukončení)
  zlistUkonceni?: string
  // Důvod ukončení (db: ZlistDuvod) - Důvod ukončení)
  zlistDuvod?: string
  // Kód ELDP (db: KodELDP) - Kód ELDP)
  kodELDP?: string
  // Kód PP pro ČSSZ (db: KodCsszPP) - Kód PP pro ČSSZ)
  kodCsszPP?: string
  // Dní dovolené ročně (db: DovoleneRocne) - Dní dovolené ročně)
  dovoleneRocne?: Big
  // Hodin dovolené ročně (db: DovoleneRocneHod) - Hodin dovolené ročně)
  dovoleneRocneHod?: Big
  // Tydenní pracovní doba (db: TydenPracDobaK) - Tydenní pracovní doba)
  tydenPracDobaK?: TydenPracDoba
  // Pondělí (db: UvazPo) - Pondělí)
  uvazPo?: boolean
  // Úterý (db: UvazUt) - Úterý)
  uvazUt?: boolean
  // Středa (db: UvazSt) - Středa)
  uvazSt?: boolean
  // Čtvrtek (db: UvazCt) - Čtvrtek)
  uvazCt?: boolean
  // Pátek (db: UvazPa) - Pátek)
  uvazPa?: boolean
  // Sobota (db: UvazSo) - Sobota)
  uvazSo?: boolean
  // Neděle (db: UvazNe) - Neděle)
  uvazNe?: boolean
  // Nárok na odstupné (db: NarokOdstupne) - Nárok na odstupné)
  narokOdstupne?: boolean
  // Odstupné vyplaceno v plné výši (db: OdstupnePlnaVyse) - Odstupné vyplaceno v plné výši)
  odstupnePlnaVyse?: boolean
  // Odstupné - násobek (db: OdstupneNasobek) - Odstupné - násobek)
  odstupneNasobek?: number
  // Důvod ukončení prac. poměru (db: DuvodUkonceniCsszK) - Důvod ukončení prac. poměru)
  duvodUkonceniCsszK?: CsszDuvodUkonceni
  // Důvod neposkytnutí podkladů (db: DuvodNeposkytnutiCsszK) - Důvod neposkytnutí podkladů)
  duvodNeposkytnutiCsszK?: CsszDuvodNeposkytnuti
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Hlavička pracovního poměru (db: IdPracPomHlav) - Hlavička pracovního poměru)
  pracPomHlav?: AFPracovniPomerHlavicka
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka
  // Typ pracovního poměru (db: IdTypPracPom) - Typ pracovního poměru)
  typPracPom?: AFTypPracovnihoPomeru
  // Typ interního dokladu pro hrubou mzdy (db: IdTdIntHruba) - Typ interního dokladu pro hrubou mzdy)
  tdIntHruba?: AFTypInternihoDokladu
  // Typ interního dokladu náhrady mzdy za prac.neschopnost (db: IdTdIntNahrad) - Typ interního dokladu náhrady mzdy za prac.neschopnost)
  tdIntNahrad?: AFTypInternihoDokladu
  // Typ interního dokladu pro cestovné do limitu (db: IdTdIntCestDoLim) - do limitu)
  tdIntCestDoLim?: AFTypInternihoDokladu
  // Typ interního dokladu pro cestovné nad limit (db: IdTdIntCestNadLim) - nad limit)
  tdIntCestNadLim?: AFTypDokladu
  // Typ interního dokladu pro strav. paušál do limitu (db: IdTdIntStravPausDoLim) - do limitu)
  tdIntStravPausDoLim?: AFTypInternihoDokladu
  // Typ interního dokladu pro strav. paušál nad limit (db: IdTdIntStravPausNadLim) - nad limit)
  tdIntStravPausNadLim?: AFTypDokladu
  // Typ interního dokladu pro homeoffice do limitu (db: IdTdIntHomeofficeDoLim) - do limitu)
  tdIntHomeofficeDoLim?: AFTypDokladu
  // Typ interního dokladu pro homeoffice nad limit (db: IdTdIntHomeofficeNadLim) - nad limit)
  tdIntHomeofficeNadLim?: AFTypDokladu
  // Předpis zaúčtování soc. zaměstnanec (db: IdTuoZavSocZam) - Sociální pojištění zaměstnanec)
  tuoZavSocZam?: AFPredpisZauctovani
  // Předpis zaúčtování soc. firma (db: IdTuoZavSocFir) - Sociální pojištění zaměstnavatel)
  tuoZavSocFir?: AFPredpisZauctovani
  // Předpis zaúčtování zdr. zaměstnanec (db: IdTuoZavZdrZam) - Zdravotní pojištění zaměstnanec)
  tuoZavZdrZam?: AFPredpisZauctovani
  // Předpis zaúčtování zdr. firma (db: IdTuoZavZdrFir) - Zdravotní pojištění zaměstnavatel)
  tuoZavZdrFir?: AFPredpisZauctovani
  // Předpis zaúčtování daň (db: IdTuoZavDan) - Předpis zaúčtování daň)
  tuoZavDan?: AFPredpisZauctovani
  // Typ dokladu pro srážku stravenek (db: IdTdSrazkaStrav) - Typ dokladu pro srážku stravenek)
  tdSrazkaStrav?: AFTypDokladu

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
    platiOd : {
      key: 'platiOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Date,
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
    aktivniOd : {
      key: 'aktivniOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    aktivniDo : {
      key: 'aktivniDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    hlavni : {
      key: 'hlavni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    pracRozvrhK : {
      key: 'pracRozvrhK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'PracRozvrh',
      enum: PracRozvrh,
      
    },
    plneniOdprDobyK : {
      key: 'plneniOdprDobyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'PlneniOdprDoby',
      enum: PlneniOdprDoby,
      
    },
    typMzdyK : {
      key: 'typMzdyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypMzdy',
      enum: TypMzdy,
      
    },
    mesicniMzda : {
      key: 'mesicniMzda',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hodinovaMzda : {
      key: 'hodinovaMzda',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zacatek : {
      key: 'zacatek',
      type: PropertyType.Date,
      isArray: false,
      
    },
    skutecnyNastup : {
      key: 'skutecnyNastup',
      type: PropertyType.Date,
      isArray: false,
      
    },
    nastup : {
      key: 'nastup',
      type: PropertyType.Date,
      isArray: false,
      
    },
    tarifTrida : {
      key: 'tarifTrida',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    uvazHodTydne : {
      key: 'uvazHodTydne',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    uvazHodDenne : {
      key: 'uvazHodDenne',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    uvazDnuTydne : {
      key: 'uvazDnuTydne',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    zacPracDoby : {
      key: 'zacPracDoby',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    svatkyPrumer : {
      key: 'svatkyPrumer',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    procMinMzd : {
      key: 'procMinMzd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    predHrubPrijem : {
      key: 'predHrubPrijem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    malyRozsah : {
      key: 'malyRozsah',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    prominutiSPFirma : {
      key: 'prominutiSPFirma',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    slevaSPFirma : {
      key: 'slevaSPFirma',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    duvodSlevaSPFirmaK : {
      key: 'duvodSlevaSPFirmaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DuvodSlevaSpFirma',
      enum: DuvodSlevaSpFirma,
      
    },
    slevaSpFirmaOd : {
      key: 'slevaSpFirmaOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    slevaSpFirmaDo : {
      key: 'slevaSpFirmaDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    konecPomeru : {
      key: 'konecPomeru',
      type: PropertyType.Date,
      isArray: false,
      
    },
    konecZkusDoby : {
      key: 'konecZkusDoby',
      type: PropertyType.Date,
      isArray: false,
      
    },
    konecUrciteDoby : {
      key: 'konecUrciteDoby',
      type: PropertyType.Date,
      isArray: false,
      
    },
    zlistSdeleni : {
      key: 'zlistSdeleni',
      type: PropertyType.String,
      isArray: false,
      
    },
    zlistUkonceni : {
      key: 'zlistUkonceni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zlistDuvod : {
      key: 'zlistDuvod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    kodELDP : {
      key: 'kodELDP',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    kodCsszPP : {
      key: 'kodCsszPP',
      type: PropertyType.String,
      isArray: false,
      maxLength: 10,
      
    },
    dovoleneRocne : {
      key: 'dovoleneRocne',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    dovoleneRocneHod : {
      key: 'dovoleneRocneHod',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    tydenPracDobaK : {
      key: 'tydenPracDobaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TydenPracDoba',
      enum: TydenPracDoba,
      
    },
    uvazPo : {
      key: 'uvazPo',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uvazUt : {
      key: 'uvazUt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uvazSt : {
      key: 'uvazSt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uvazCt : {
      key: 'uvazCt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uvazPa : {
      key: 'uvazPa',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uvazSo : {
      key: 'uvazSo',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    uvazNe : {
      key: 'uvazNe',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    narokOdstupne : {
      key: 'narokOdstupne',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odstupnePlnaVyse : {
      key: 'odstupnePlnaVyse',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odstupneNasobek : {
      key: 'odstupneNasobek',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    duvodUkonceniCsszK : {
      key: 'duvodUkonceniCsszK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'CsszDuvodUkonceni',
      enum: CsszDuvodUkonceni,
      
    },
    duvodNeposkytnutiCsszK : {
      key: 'duvodNeposkytnutiCsszK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'CsszDuvodNeposkytnuti',
      enum: CsszDuvodNeposkytnuti,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    pracPomHlav : {
      key: 'pracPomHlav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPracovniPomerHlavicka,
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFOsobaHlavicka,
      
    },
    typPracPom : {
      key: 'typPracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypPracovnihoPomeru,
      
    },
    tdIntHruba : {
      key: 'tdIntHruba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypInternihoDokladu,
      
    },
    tdIntNahrad : {
      key: 'tdIntNahrad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypInternihoDokladu,
      
    },
    tdIntCestDoLim : {
      key: 'tdIntCestDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypInternihoDokladu,
      
    },
    tdIntCestNadLim : {
      key: 'tdIntCestNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypDokladu,
      
    },
    tdIntStravPausDoLim : {
      key: 'tdIntStravPausDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypInternihoDokladu,
      
    },
    tdIntStravPausNadLim : {
      key: 'tdIntStravPausNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypDokladu,
      
    },
    tdIntHomeofficeDoLim : {
      key: 'tdIntHomeofficeDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypDokladu,
      
    },
    tdIntHomeofficeNadLim : {
      key: 'tdIntHomeofficeNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypDokladu,
      
    },
    tuoZavSocZam : {
      key: 'tuoZavSocZam',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPredpisZauctovani,
      
    },
    tuoZavSocFir : {
      key: 'tuoZavSocFir',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPredpisZauctovani,
      
    },
    tuoZavZdrZam : {
      key: 'tuoZavZdrZam',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPredpisZauctovani,
      
    },
    tuoZavZdrFir : {
      key: 'tuoZavZdrFir',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPredpisZauctovani,
      
    },
    tuoZavDan : {
      key: 'tuoZavDan',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFPredpisZauctovani,
      
    },
    tdSrazkaStrav : {
      key: 'tdSrazkaStrav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFTypDokladu,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFUzivatelskaVazba
    },

  }
}