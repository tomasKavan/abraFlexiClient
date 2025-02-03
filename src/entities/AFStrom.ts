import { AFEntity } from '../AFEntity'
import { AFStromKoren } from './AFStromKoren'
import { AFStrom } from './AFStrom'
import { AFPriloha } from './AFPriloha'


export class AFStrom extends AFEntity {

    // ID (db: IdUzel) - ID)
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

    // Obrázek (db: Strobr) - Obrázek)
    strobr?: string

    // Hladina (db: Hladina) - Hladina)
    hladina?: number

    // Pořadí (db: Poradi) - Pořadí)
    poradi?: number

    // Cesta (db: Cesta) - Cesta)
    cesta?: string

    // Krátký popis (db: KratkyPopis) - Krátký popis)
    kratkyPopis?: string

    // Klíčová slova (db: KlicSlova) - Klíčová slova)
    klicSlova?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Text nad (db: TxtNad) - Text nad)
    txtNad?: string

    // Text pod (db: TxtPod) - Text pod)
    txtPod?: string

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Strom (db: Idstrom) - Strom)
    strom?: AFStromKoren

    // Nadřazený uzel (db: Idotec) - Nadřazený uzel)
    otec?: AFStrom


    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

}