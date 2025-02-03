import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFCleneniKontrolniHlaseniTypPohybuK {
  prijem = 'typPohybu.prijem', //Příjem
  vydej = 'typPohybu.vydej', //Výdej
}


export class AFCleneniKontrolniHlaseni extends AFEntity {

    // ID (db: IdClenKonVykDPH) - ID)
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

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // Vyplňovat číselný kód zboží (db: VyplnCisKod) - Vyplňovat číselný kód zboží)
    vyplnCisKod?: boolean

    // Vyplňovat druh zboží (db: VyplnDruh) - Vyplňovat druh zboží)
    vyplnDruh?: boolean

    // Zkratka XML transakce (db: KodTransakce) - Zkratka XML transakce)
    kodTransakce?: string

    // Typ pohybu (db: TypPohybuK) - Typ pohybu)
    typPohybuK?: any

    // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
    uuid?: string

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}