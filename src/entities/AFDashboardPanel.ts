import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFDashboardPanelVisibilityK {
  hidden = 'dashboardPanelVisibility.hidden', //Nevidí nikdo
  private = 'dashboardPanelVisibility.private', //Vidí pouze autor
  shared = 'dashboardPanelVisibility.shared', //Je možné sdílet
  shared-all = 'dashboardPanelVisibility.shared-all', //Vidí všichni
}


export class AFDashboardPanel extends AFEntity {

    // ID (db: Idwdashboardpanel) - ID)
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

    // Popis (db: Popis) - Popis)
    popis?: string

    // Popis EN (db: PopisA) - Popis EN)
    popisA?: string

    // Popis DE (db: PopisB) - Popis DE)
    popisB?: string

    // Popis FR (db: PopisC) - Popis FR)
    popisC?: string

    // Definice (db: Definition) - Definice)
    definition?: string

    // Viditelnost (db: VisibilityK) - Viditelnost)
    visibilityK?: any

    // Pořadí (db: Priority) - Pořadí)
    priority?: number

    // Standardní přehled (db: Standard) - Standardní přehled)
    standard?: boolean

    // Vytvořil (db: Idauthor) - Vytvořil)
    author?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}