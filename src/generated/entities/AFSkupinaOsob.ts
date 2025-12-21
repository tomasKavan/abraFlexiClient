import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu.js'
import { AFTypDokladu } from './AFTypDokladu.js'
import { AFPredpisZauctovani } from './AFPredpisZauctovani.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TydenPracDoba } from '../AFEntityEnums.js'

export class AFSkupinaOsob extends AFEntity {
  static EntityPath: string = 'skupina-osob'
  static EntityName: string = 'Skupiny osob'
  static EntityType: string = 'SKUPINA_OSOB'

  // ID (db: IdSkupOsob) - ID)
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
  // Platí od data (db: PlatiOd) - Platí od)
  platiOd?: Date | null
  // Platí do data (db: PlatiDo) - Platí do)
  platiDo?: Date | null
  // Tydenní pracovní doba (db: TydenPracDobaK) - Tydenní pracovní doba)
  tydenPracDobaK?: TydenPracDoba | null
  // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
  workFlow?: boolean | null
  // Typ hrubé mzdy (db: IdTdIntHruba) - Typ hrubé mzdy)
  tdIntHruba?: AFTypInternihoDokladu | null
  // Typ náhrady mzdy (db: IdTdIntNahrad) - Typ náhrady mzdy)
  tdIntNahrad?: AFTypInternihoDokladu | null
  // Typ pro cestovné do limitu (db: IdTdIntCestDoLim) - do limitu)
  tdIntCestDoLim?: AFTypInternihoDokladu | null
  // Typ pro cestovné nad limit (db: IdTdIntCestNadLim) - nad limit)
  tdIntCestNadLim?: AFTypDokladu | null
  // Typ pro strav. paušál do limitu (db: IdTdIntStravPausDoLim) - do limitu)
  tdIntStravPausDoLim?: AFTypInternihoDokladu | null
  // Typ pro strav. paušál nad limit (db: IdTdIntStravPausNadLim) - nad limit)
  tdIntStravPausNadLim?: AFTypDokladu | null
  // Typ pro homeoffice do limitu (db: IdTdIntHomeofficeDoLim) - do limitu)
  tdIntHomeofficeDoLim?: AFTypDokladu | null
  // Typ pro homeoffice nad limit (db: IdTdIntHomeofficeNadLim) - nad limit)
  tdIntHomeofficeNadLim?: AFTypDokladu | null
  // Př. zaúč. soc. zaměst. (db: IdTuoZavSocZam) - Předpis zaúčtování zaměstnanec)
  tuoZavSocZam?: AFPredpisZauctovani | null
  // Př. zaúč. soc. firma (db: IdTuoZavSocFir) - Předpis zaúčtování zaměstnavatel)
  tuoZavSocFir?: AFPredpisZauctovani | null
  // Př. zaúč. zdr. zaměst. (db: IdTuoZavZdrZam) - Předpis zaúčtování - zaměstnanec)
  tuoZavZdrZam?: AFPredpisZauctovani | null
  // Př. zaúč. zdr. firma (db: IdTuoZavZdrFir) - Předpis zaúčtování - zaměstnavatel)
  tuoZavZdrFir?: AFPredpisZauctovani | null
  // Předpis zaúčtování daň (db: IdTuoZavDan) - Předpis zaúčtování daň)
  tuoZavDan?: AFPredpisZauctovani | null
  // Typ pro srážku stravenek (db: IdTdSrazkaStrav) - Typ pro srážku stravenek)
  tdSrazkaStrav?: AFTypDokladu | null
  // Typ int. dokl. příspěvků (db: IdTdIntPrispevky) - Typ int. dokl. příspěvků)
  tdIntPrispevky?: AFTypDokladu | null
  // Typ závazku příspěvků (db: IdTdZavPrispevky) - Typ závazku příspěvků)
  tdZavPrispevky?: AFTypDokladu | null

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
    tydenPracDobaK : {
      key: 'tydenPracDobaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TydenPracDoba',
      enum: TydenPracDoba,
      
    },
    workFlow : {
      key: 'workFlow',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    tdIntHruba : {
      key: 'tdIntHruba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },
    tdIntNahrad : {
      key: 'tdIntNahrad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },
    tdIntCestDoLim : {
      key: 'tdIntCestDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },
    tdIntCestNadLim : {
      key: 'tdIntCestNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    tdIntStravPausDoLim : {
      key: 'tdIntStravPausDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },
    tdIntStravPausNadLim : {
      key: 'tdIntStravPausNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    tdIntHomeofficeDoLim : {
      key: 'tdIntHomeofficeDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    tdIntHomeofficeNadLim : {
      key: 'tdIntHomeofficeNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    tuoZavSocZam : {
      key: 'tuoZavSocZam',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    tuoZavSocFir : {
      key: 'tuoZavSocFir',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    tuoZavZdrZam : {
      key: 'tuoZavZdrZam',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    tuoZavZdrFir : {
      key: 'tuoZavZdrFir',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    tuoZavDan : {
      key: 'tuoZavDan',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    tdSrazkaStrav : {
      key: 'tdSrazkaStrav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    tdIntPrispevky : {
      key: 'tdIntPrispevky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    tdZavPrispevky : {
      key: 'tdZavPrispevky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}