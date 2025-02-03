import { AFEntity } from '../AFEntity'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFMena } from './AFMena'


export class AFProdejkaPlatba extends AFEntity {

    // ID (db: IdFormaUhrady) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Kurz (db: Kurz) - Kurz)
    kurz?: Big

    // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
    kurzMnozstvi?: Big

    // Částka (db: Castka) - Částka)
    castka?: Big

    // Částka v měně (db: CastkaMen) - Částka v měně)
    castkaMen?: Big

    // Množství cenin (db: MnozCenin) - Množství cenin)
    mnozCenin?: number

    // Částka ceniny (db: CastkaCenin) - Částka ceniny)
    castkaCenin?: Big

    // Strojové parametry úhrady (db: StrojParamUhr) - Strojové parametry úhrady)
    strojParamUhr?: string

    // Číslo karty (db: CisloKarty) - Číslo karty)
    cisloKarty?: string

    // Vrátit (db: Vratit) - Vrátit)
    vratit?: Big

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
    formaUhradyCis?: AFFormaUhrady

    // Doklad faktury (db: IdDoklFak) - Doklad faktury)
    doklFak?: any

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena


}