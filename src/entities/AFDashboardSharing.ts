import { AFEntity } from '../AFEntity'
import { AFDashboardPanel } from './AFDashboardPanel'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFDashboardSharing extends AFEntity {

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
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}