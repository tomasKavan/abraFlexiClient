import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFDashboardPanel } from './AFDashboardPanel.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'




export class AFDashboardSharing extends AFEntity {
  static EntityPath: string = 'dashboard-sharing'
  static EntityName: string = 'Sdílení přehledů'
  static EntityType: string = 'DASHBOARD_SHARING'

  // ID (db: Idwdashboardsharing) - ID)
  declare id?: number | null
  // Skrytý (db: Hidden) - Skrytý)
  hidden?: boolean | null
  // Pořadí (db: Priority) - Pořadí)
  priority?: number | null
  // Uživatel (db: Iduser) - Uživatel)
  user?: AFUzivatel | null
  // Dashboard panel (db: Iddashboardpanel) - Dashboard panel)
  dashboardpanel?: AFDashboardPanel | null

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
      afClass: 'AFUzivatel',
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