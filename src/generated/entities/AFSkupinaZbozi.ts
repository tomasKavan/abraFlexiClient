import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcet } from './AFUcet'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypCeny, TypCenyVychozi, TypVypCeny, ZaokrJak, ZaokrNa } from '../AFEntityEnums'

export class AFSkupinaZbozi extends AFEntity {
  static EntityPath: string = 'skupina-zbozi'
  static EntityName: string = 'Skupiny zboží a materiálu'
  static EntityType: string = 'SKUPINA_ZBOZI'

  // ID (db: IdSkupZboz) - ID)
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
  // Platí od roku (db: PlatiOd) - Platí od)
  platiOd?: number | null
  // Platí do roku (db: PlatiDo) - Platí do)
  platiDo?: number | null
  // Typ ceny (db: TypCenyDphK) - Typ ceny)
  typCenyDphK?: TypCeny | null
  // Výchozí cena (db: TypCenyVychoziK) - Výchozí cena)
  typCenyVychoziK?: TypCenyVychozi | null
  // Způsob výpočtu (db: TypVypCenyK) - Způsob výpočtu)
  typVypCenyK?: TypVypCeny | null
  // Marže / Přirážka / Rabat / Sleva [%] (db: ProcZakl) - Marže / Přirážka / Rabat / Sleva [%])
  procZakl?: Big | null
  // Výchozí cena pro množ. slevy (db: TypCenyVychozi25K) - Výchozí cena)
  typCenyVychozi25K?: TypCenyVychozi | null
  // Způsob výpočtu pro množ. slevy (db: TypVypCeny25K) - Způsob výpočtu)
  typVypCeny25K?: TypVypCeny | null
  // Limit MJ 2 (db: LimMnoz2) - Množ. limit 2)
  limMnoz2?: Big | null
  // Limit MJ 3 (db: LimMnoz3) - Množ. limit 3)
  limMnoz3?: Big | null
  // Limit MJ 4 (db: LimMnoz4) - Množ. limit 4)
  limMnoz4?: Big | null
  // Limit MJ 5 (db: LimMnoz5) - Množ. limit 5)
  limMnoz5?: Big | null
  // %2 (db: Procento2) - % 2)
  procento2?: Big | null
  // %3 (db: Procento3) - %3)
  procento3?: Big | null
  // %4 (db: Procento4) - %4)
  procento4?: Big | null
  // %5 (db: Procento5) - %5)
  procento5?: Big | null
  // Způsob zaokrouhlení - Cena (db: ZaokrJakK) - Způsob)
  zaokrJakK?: ZaokrJak | null
  // Řád zaokrouhlení - Cena (db: ZaokrNaK) - Řád)
  zaokrNaK?: ZaokrNa | null
  // Hlídat min. cen. rozdíl (db: HlidatMinMarzi) - Hlídat minimální cenový rozdíl)
  hlidatMinMarzi?: boolean | null
  // Minimální cenový rozdíl (db: MinMarze) - Minimální cenový rozdíl [%])
  minMarze?: Big | null
  // Typ min. cen. rozdílu (db: TypVypoctuHlidatMinK) - Typ hlídaného minimálního cenového rozdílu)
  typVypoctuHlidatMinK?: TypVypCeny | null
  // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
  workFlow?: boolean | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // účet přijaté faktury (db: IdProtiUcetPfa) - pro přijaté faktury / pokladna - výdej)
  ucetProtiPfa?: AFUcet | null
  // účet vydané f. (db: IdProtiUcetVfa) - pro vydané faktury / pokladna - příjem)
  ucetProtiVfa?: AFUcet | null
  // účet skl. - P (db: IdProtiUcetSklP) - pro příjem na sklad)
  ucetProtiSklp?: AFUcet | null
  // účet skl. - V k faktuře (db: IdProtiUcetSklV) - pro výdejku k faktuře)
  ucetProtiSklv?: AFUcet | null
  // účet skl. - holý V (db: IdProtiUcetSklHolyV) - pro holou výdejku)
  ucetProtiSklHolyv?: AFUcet | null
  // účet skl. - převodka V (db: IdProtiUcetSklPrevV) - pro převodku výdej)
  ucetProtiSklPrevv?: AFUcet | null
  // Typ organizace (db: IdTypOrg) - Typ organizace)
  typOrganizace?: AFTypOrganizace | null

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
    typVypoctuHlidatMinK : {
      key: 'typVypoctuHlidatMinK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypVypCeny',
      enum: TypVypCeny,
      
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