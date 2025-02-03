import { AFEntity } from '../AFEntity'
import { AFSestava } from './AFSestava'
import { AFStandardniPredpis } from './AFStandardniPredpis'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFSumaceSestavy } from './AFSumaceSestavy'


export class AFRadekSestavy extends AFEntity {

    // ID (db: IdSesRadky) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Číslo řádku (db: CisRad) - Číslo řádku)
    cisRad?: number

    // Kód řádku (db: KodRad) - Kód řádku)
    kodRad?: string

    // Číslo řádku pro XML (db: CisRadXml) - Číslo řádku pro XML)
    cisRadXml?: number

    // Označení (db: Oznaceni) - Označení)
    oznaceni?: string

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

    // Hodnota 1 (db: Hod1) - Hodnota 1)
    hod1?: Big

    // Hodnota 2 (db: Hod2) - Hodnota 2)
    hod2?: Big

    // Hodnota 3 (db: Hod3) - Hodnota 3)
    hod3?: Big

    // Hodnota 4 (db: Hod4) - Hodnota 4)
    hod4?: Big

    // Hodnota 5 (db: Hod5) - Hodnota 5)
    hod5?: Big

    // Hodnota 6 (db: Hod6) - Hodnota 6)
    hod6?: Big

    // Účetní sestava (db: IdSestavy) - Účetní sestava)
    ucetniSestava?: AFSestava


    // Standardní předpis sestavy (type: STD_PREDPIS_SESTAVY) - stdPredpisy)
    stdPredpisy?: Promise<AFStandardniPredpis[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Sumace v sestavách (type: SUMACE_SESTAVY) - sumace)
    sumace?: Promise<AFSumaceSestavy[]>

}