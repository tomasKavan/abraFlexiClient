import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUcet } from './AFUcet'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypCeny, TypCenyVychozi, TypVypCeny, ZaokrJak, ZaokrNa } from '../AFEntityEnums.js'

export class AFSkupinaZbozi extends AFEntity {
  static EntityPath: string = 'skupina-zbozi'
  static EntityName: string = 'Skupiny zboží a materiálu'
  static EntityType: string = 'SKUPINA_ZBOZI'

  // ID (db: IdSkupZboz) - ID)
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
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Platí od (db: PlatiOd) - Platí od)
  platiOd?: number
  // Platí do (db: PlatiDo) - Platí do)
  platiDo?: number
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny
  // Výchozí cena (db: TypCenyVychoziK) - Výchozí cena)
  typCenyVychoziK?: TypCenyVychozi
  // Způsob výpočtu (db: TypVypCenyK) - Způsob výpočtu)
  typVypCenyK?: TypVypCeny
  // Marže / Rabat / Sleva [%] (db: ProcZakl) - Marže / Rabat / Sleva [%])
  procZakl?: Big
  // Výchozí cena pro množ. slevy (db: TypCenyVychozi25K) - Výchozí cena)
  typCenyVychozi25K?: TypCenyVychozi
  // Způsob výpočtu pro množ. slevy (db: TypVypCeny25K) - Způsob výpočtu)
  typVypCeny25K?: TypVypCeny
  // Limit MJ 2 (db: LimMnoz2) - Množ. limit 2)
  limMnoz2?: Big
  // Limit MJ 3 (db: LimMnoz3) - Množ. limit 3)
  limMnoz3?: Big
  // Limit MJ 4 (db: LimMnoz4) - Množ. limit 4)
  limMnoz4?: Big
  // Limit MJ 5 (db: LimMnoz5) - Množ. limit 5)
  limMnoz5?: Big
  // %2 (db: Procento2) - % 2)
  procento2?: Big
  // %3 (db: Procento3) - %3)
  procento3?: Big
  // %4 (db: Procento4) - %4)
  procento4?: Big
  // %5 (db: Procento5) - %5)
  procento5?: Big
  // Způsob zaokr. ceny (db: ZaokrJakK) - Způsob)
  zaokrJakK?: ZaokrJak
  // Řád zaokr. ceny (db: ZaokrNaK) - Řád)
  zaokrNaK?: ZaokrNa
  // Hlídat minimální marži (db: HlidatMinMarzi) - Min. marže [%])
  hlidatMinMarzi?: boolean
  // Minimální marže (db: MinMarze) - Minimální marže)
  minMarze?: Big
  // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
  workFlow?: boolean
  // Štítky (db: ) - Štítky)
  stitky?: string
  // účet přijaté f. (db: IdProtiUcetPfa) - pro přijaté faktury / pokladna - výdej)
  ucetProtiPfa?: AFUcet
  // účet vydané f. (db: IdProtiUcetVfa) - pro vydané faktury / pokladna - příjem)
  ucetProtiVfa?: AFUcet
  // účet skl. - P (db: IdProtiUcetSklP) - pro příjem na sklad)
  ucetProtiSklp?: AFUcet
  // účet skl. - V k faktuře (db: IdProtiUcetSklV) - pro výdejku k faktuře)
  ucetProtiSklv?: AFUcet
  // účet skl. - holý V (db: IdProtiUcetSklHolyV) - pro holou výdejku)
  ucetProtiSklHolyv?: AFUcet
  // účet skl. - převodka V (db: IdProtiUcetSklPrevV) - pro převodku výdej)
  ucetProtiSklPrevv?: AFUcet
  // Typ organizace (db: IdTypOrg) - Typ organizace)
  typOrganizace?: AFTypOrganizace

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
    typCenyDphK : {
      key: 'typCenyDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCeny',
      enum: TypCeny,
      
    },
    typCenyVychoziK : {
      key: 'typCenyVychoziK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCenyVychozi',
      enum: TypCenyVychozi,
      
    },
    typVypCenyK : {
      key: 'typVypCenyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
    },
    procZakl : {
      key: 'procZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    typCenyVychozi25K : {
      key: 'typCenyVychozi25K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypCenyVychozi',
      enum: TypCenyVychozi,
      
    },
    typVypCeny25K : {
      key: 'typVypCeny25K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
    },
    limMnoz2 : {
      key: 'limMnoz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz3 : {
      key: 'limMnoz3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz4 : {
      key: 'limMnoz4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    limMnoz5 : {
      key: 'limMnoz5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    procento2 : {
      key: 'procento2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    procento3 : {
      key: 'procento3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    procento4 : {
      key: 'procento4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    procento5 : {
      key: 'procento5',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    zaokrJakK : {
      key: 'zaokrJakK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },
    zaokrNaK : {
      key: 'zaokrNaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    hlidatMinMarzi : {
      key: 'hlidatMinMarzi',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    minMarze : {
      key: 'minMarze',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    workFlow : {
      key: 'workFlow',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    ucetProtiPfa : {
      key: 'ucetProtiPfa',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    ucetProtiVfa : {
      key: 'ucetProtiVfa',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    ucetProtiSklp : {
      key: 'ucetProtiSklp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    ucetProtiSklv : {
      key: 'ucetProtiSklv',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    ucetProtiSklHolyv : {
      key: 'ucetProtiSklHolyv',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    ucetProtiSklPrevv : {
      key: 'ucetProtiSklPrevv',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    typOrganizace : {
      key: 'typOrganizace',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypOrganizace',
      maxLength: 20,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}