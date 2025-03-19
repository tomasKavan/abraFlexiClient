import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFCenik } from './AFCenik'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { FormaDopravy } from '../AFEntityEnums'

export class AFFormaDopravy extends AFEntity {
  static EntityPath: string = 'forma-dopravy'
  static EntityName: string = 'Formy dopravy'
  static EntityType: string = 'FORMA_DOPRAVY'

  // ID (db: IdFormaDopravy) - ID)
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
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Exportovat na E-Shop (db: ExportEshop) - Exportovat na E-Shop)
  exportEshop?: boolean
  // Vytvářet čísla balíků (db: CisBal) - Vytvářet čísla balíků)
  cisBal?: boolean
  // Čís.prefix (db: CisBalPrefix) - Tvar čísla - začátek)
  cisBalPrefix?: string
  // Čís.postfix (db: CisBalPostfix) - Ukončení)
  cisBalPostfix?: string
  // Číslic (db: CisBalCislic) - Číslic)
  cisBalCislic?: number
  // Čís. od (db: CisBalOd) - Vytvářet od)
  cisBalOd?: number
  // Čís. do (db: CisBalDo) - do)
  cisBalDo?: number
  // Aktuální číslo (db: CisBalAkt) - Aktuální číslo)
  cisBalAkt?: number
  // Čís.bud. od (db: CisBalOdBud) - Poté vytvářet od)
  cisBalOdBud?: number
  // Čís.bud. do (db: CisBalDoBud) - do)
  cisBalDoBud?: number
  // Kód zákazníka (db: CisBalKodZak) - Kód zákazníka)
  cisBalKodZak?: string
  // Depo zákazníka (db: CisBalDepo) - Depo zákazníka)
  cisBalDepo?: string
  // Formát exportu (db: FormaDopravyK) - Formát exportu)
  formaDopravyK?: FormaDopravy
  // Speciální služby (db: SpecialniSluzby) - Speciální služby)
  specialniSluzby?: string
  // ID/Typ zákazníka (db: CisBalIdZak) - ID/Typ zákazníka)
  cisBalIdZak?: string
  // Pořadové číslo souboru (db: PoradoveCislo) - Pořadové číslo souboru)
  poradoveCislo?: number
  // Kontrolní číslo (db: CisBalKonCis) - Kontrolní číslo)
  cisBalKonCis?: boolean
  // Štítky (db: ) - Štítky)
  declare stitky?: string
  // Dopravné (db: IdDopravne) - Dopravné)
  dopravne?: AFCenik

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
      type: PropertyType.Integer,
      isArray: false,
      
    },
    platiDo : {
      key: 'platiDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    exportEshop : {
      key: 'exportEshop',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cisBal : {
      key: 'cisBal',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cisBalPrefix : {
      key: 'cisBalPrefix',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    cisBalPostfix : {
      key: 'cisBalPostfix',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    cisBalCislic : {
      key: 'cisBalCislic',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cisBalOd : {
      key: 'cisBalOd',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cisBalDo : {
      key: 'cisBalDo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cisBalAkt : {
      key: 'cisBalAkt',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cisBalOdBud : {
      key: 'cisBalOdBud',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cisBalDoBud : {
      key: 'cisBalDoBud',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cisBalKodZak : {
      key: 'cisBalKodZak',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    cisBalDepo : {
      key: 'cisBalDepo',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    formaDopravyK : {
      key: 'formaDopravyK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'FormaDopravy',
      enum: FormaDopravy,
      
    },
    specialniSluzby : {
      key: 'specialniSluzby',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    cisBalIdZak : {
      key: 'cisBalIdZak',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    poradoveCislo : {
      key: 'poradoveCislo',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cisBalKonCis : {
      key: 'cisBalKonCis',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    dopravne : {
      key: 'dopravne',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}