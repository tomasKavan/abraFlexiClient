import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFTypFakturyVydane } from './AFTypFakturyVydane.js'
import { AFTypDokladu } from './AFTypDokladu.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { ZpusobFakt, TypPohybu } from '../AFEntityEnums.js'

export class AFTypSmlouvy extends AFEntity {
  static EntityPath: string = 'typ-smlouvy'
  static EntityName: string = 'Typy odběratelských smluv'
  static EntityType: string = 'TYP_SMLOUVY'

  // ID (db: IdTypSml) - ID)
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
  // Automaticky prodlužovat (db: AutoProdl) - Automaticky prodlužovat)
  autoProdl?: boolean
  // Automaticky vytvářet zakázky (db: AutoZakazka) - Automaticky vytvářet zakázky)
  autoZakazka?: boolean
  // Automaticky generovat (db: AutoGen) - Automaticky generovat)
  autoGen?: boolean
  // Obrátkový den (db: Den) - Obrátkový den)
  den?: number
  // Obrátkový měsíc (db: Mesic) - Obrátkový měsíc)
  mesic?: number
  // Generovat penále (db: GenPenale) - Generovat penále)
  genPenale?: boolean
  // Procento penále (db: ProcPenale) - Procento penále)
  procPenale?: Big
  // Řešit přeplatky (db: Preplatky) - Řešit přeplatky)
  preplatky?: boolean
  // Způsob fakturace (db: ZpusFaktK) - Způsob fakturace)
  zpusFaktK?: ZpusobFakt
  // Fakturovat dní předem/po (db: DnyFakt) - Fakturovat dní předem/po)
  dnyFakt?: number
  // Automaticky posílat e-mailem klientovi (db: AutoMail) - Automaticky posílat e-mailem klientovi)
  autoMail?: boolean
  // Variabilní symbol z faktury (db: VarSymFakt) - Variabilní symbol je generován z čísla faktury)
  varSymFakt?: boolean
  // Dat.vyst. z DUZP (db: DatVystZDuzp) - Dat.vyst. z DUZP)
  datVystZDuzp?: boolean
  // Generovat i nulové faktury (db: GenerovatNuloveFaktury) - Generovat i nulové faktury)
  generovatNuloveFaktury?: boolean
  // Zahájit workflow při založení dokladu (db: WorkFlow) - Zahájit workflow při založení dokladu)
  workFlow?: boolean
  // Typ pohybu (db: TypPohybuK) - Typ pohybu)
  typPohybuK?: TypPohybu
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Typ faktury (db: IdTypDokl) - Typ faktury)
  typDoklFak?: AFTypFakturyVydane
  // Typ penalizační faktury (db: IdTypDoklPenale) - Typ penalizační faktury)
  typDoklFakPenale?: AFTypDokladu

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
    autoProdl : {
      key: 'autoProdl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    autoZakazka : {
      key: 'autoZakazka',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    autoGen : {
      key: 'autoGen',
      type: PropertyType.Logic,
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
    genPenale : {
      key: 'genPenale',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    procPenale : {
      key: 'procPenale',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    preplatky : {
      key: 'preplatky',
      type: PropertyType.Logic,
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
    autoMail : {
      key: 'autoMail',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    varSymFakt : {
      key: 'varSymFakt',
      type: PropertyType.Logic,
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
    workFlow : {
      key: 'workFlow',
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
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    typDoklFak : {
      key: 'typDoklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyVydane',
      
    },
    typDoklFakPenale : {
      key: 'typDoklFakPenale',
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