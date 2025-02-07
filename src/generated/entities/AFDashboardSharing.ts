import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFDashboardPanel } from './AFDashboardPanel'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFDashboardSharing extends AFEntity {
  static EntityPath: string = 'dashboard-sharing'
  static EntityName: string = 'Sdílení přehledů'
  static EntityType: string = 'DASHBOARD_SHARING'

  // ID (db: Idwdashboardsharing) - ID)
  id?: number
  // Skrytý (db: Hidden) - Skrytý)
  hidden?: boolean
  // Pořadí (db: Priority) - Pořadí)
  priority?: number
  // Uživatel (db: Iduser) - Uživatel)
  user?: any
  // Dashboard panel (db: Iddashboardpanel) - Dashboard panel)
  dashboardpanel?: AFDashboardPanel

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    hidden : {
      key: 'hidden',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    priority : {
      key: 'priority',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    user : {
      key: 'user',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    dashboardpanel : {
      key: 'dashboardpanel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFDashboardPanel',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}