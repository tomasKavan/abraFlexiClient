import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFRada } from './AFRada'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFRocniRada extends AFEntity {
  static EntityPath: string = 'rocni-rada'
  static EntityName: string = 'Roční položky dokladové řady'
  static EntityType: string = 'ROCNI_RADA'

  // ID (db: IdRadyRok) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Délka čísla (db: CisDelka) - Délka čísla)
  cisDelka?: number | null
  // Zobrazit nuly (db: ZobrazNuly) - Zobrazit nuly)
  zobrazNuly?: boolean | null
  // Akt.číslo (db: CisAkt) - Akt.číslo)
  cisAkt?: number | null
  // Počátek (db: CisPoc) - Počátek)
  cisPoc?: number | null
  // Prefix (db: Prefix) - Prefix)
  prefix?: string | null
  // Postfix (db: Postfix) - Postfix)
  postfix?: string | null
  // Čís. řada (db: IdRady) - Čís. řada)
  rada?: AFRada | null
  // Účetní období (db: IdUcetObdobi) - Účetní období)
  ucetObdobi?: AFUcetniObdobi | null

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
    cisDelka : {
      key: 'cisDelka',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    zobrazNuly : {
      key: 'zobrazNuly',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cisAkt : {
      key: 'cisAkt',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cisPoc : {
      key: 'cisPoc',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    prefix : {
      key: 'prefix',
      type: PropertyType.String,
      isArray: false,
      maxLength: 8,
      
    },
    postfix : {
      key: 'postfix',
      type: PropertyType.String,
      isArray: false,
      maxLength: 8,
      
    },
    rada : {
      key: 'rada',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRada',
      
    },
    ucetObdobi : {
      key: 'ucetObdobi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
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