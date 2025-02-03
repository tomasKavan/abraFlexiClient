import { AFEntity } from '../AFEntity'

export enum AFDoporuceniDoporuceniCilK {
  uhrazeno = 'doporuceniCil.uhrazeno', //Uhrazeno
  zaokrouhleno = 'doporuceniCil.zaokrouhleno', //Zaokrouhleno
}


export class AFDoporuceni extends AFEntity {

    // Aktuální hodnota (db: undefined) - Aktuální hodnota)
    aktualniHodnota?: string

    // Doporučená hodnota (db: undefined) - Doporučená hodnota)
    doporucenaHodnota?: string

    // Typ hodnoty (db: undefined) - Typ hodnoty)
    typHodnoty?: string

    // Název vlastnosti (db: undefined) - Název vlastnosti)
    vlastnost?: string

    // Automaticky (db: undefined) - Automaticky)
    automaticky?: boolean

    // Popis (db: undefined) - Popis)
    popis?: string

    // Cíl doporučení (db: undefined) - Cíl doporučení)
    doporuceniCilK?: any

    // Doklad (db: undefined) - Doklad)
    doklad?: any


}