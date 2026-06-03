import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFDoplnek } from './AFDoplnek.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFObjektDoplnku extends AFEntity {
  static EntityPath: string = 'objekt-doplnku'
  static EntityName: string = 'Objekt doplňku'
  static EntityType: string = 'OBJEKT_DOPLNKU'

  // ID objektu (db: Objektid) - ID objektu)
  objektId?: number | null
  // Zdrojová tabulka (db: Beanresourcekey) - Zdrojová tabulka)
  beanResourceKey?: string | null
  // Je vlastníkem (db: Isowner) - Je vlastníkem)
  isOwner?: boolean | null
  // Doplněk (db: Idaddon) - Doplněk)
  doplnek?: AFDoplnek | null

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    objektId : {
      key: 'objektId',
      type: PropertyType.Integer,
      isArray: false,
      maxLength: 20,
      
    },
    beanResourceKey : {
      key: 'beanResourceKey',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    isOwner : {
      key: 'isOwner',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    doplnek : {
      key: 'doplnek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFDoplnek',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}