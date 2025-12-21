import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStat } from './AFStat.js'
import { AFTypOrganizace } from './AFTypOrganizace.js'
import { AFPriloha } from './AFPriloha.js'
import { AFUdalost } from './AFUdalost.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { PredvybranyPocet } from '../AFEntityEnums.js'

export class AFReport extends AFEntity {
  static EntityPath: string = 'report'
  static EntityName: string = 'Uživatelské reporty'
  static EntityType: string = 'REPORT'

  // ID (db: IdReport) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Kód formuláře (db: FormInfoCode) - Kód formuláře)
  formInfoCode?: string | null
  // Název pro přílohy (db: NazevPrilohy) - Název pro přílohy)
  nazevPrilohy?: string | null
  // Rozšířená verze (db: Rozsiritelny) - Umožnit rozšířenou verzi)
  rozsiritelny?: boolean | null
  // Sumovaná verze (db: Sumovany) - Umožnit sumační řádky)
  sumovany?: boolean | null
  // Řazení (db: Ordering) - Řazení)
  ordering?: string | null
  // Přídavné jazyky (db: AddonLocales) - Přídavné jazyky)
  addonLocales?: string | null
  // Záznamy (db: PredvybranyPocetK) - Předvybraný počet záznamů)
  predvybranyPocetK?: PredvybranyPocet | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Verze pro cachování (db: VersionForCaching) - Verze)
  versionForCaching?: number | null
  // Konfigurovatelný (db: Configurable) - Konfigurovatelný)
  configurable?: boolean | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null
  // Typ organizace (db: IdTypOrg) - Typ organizace)
  typOrganizace?: AFTypOrganizace | null

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
      maxLength: 255,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    formInfoCode : {
      key: 'formInfoCode',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevPrilohy : {
      key: 'nazevPrilohy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    rozsiritelny : {
      key: 'rozsiritelny',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sumovany : {
      key: 'sumovany',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ordering : {
      key: 'ordering',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    addonLocales : {
      key: 'addonLocales',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    predvybranyPocetK : {
      key: 'predvybranyPocetK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'PredvybranyPocet',
      enum: PredvybranyPocet,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    versionForCaching : {
      key: 'versionForCaching',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    configurable : {
      key: 'configurable',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    typOrganizace : {
      key: 'typOrganizace',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypOrganizace',
      
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