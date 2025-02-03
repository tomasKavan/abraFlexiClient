import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFKurz } from './AFKurz'

export enum AFMenaZpusobStahKurzK {
  nikdy = 'zpusobStahKurz.nikdy', //Nestahovat
  denne = 'zpusobStahKurz.denne', //Denně
  mesicne = 'zpusobStahKurz.mesicne', //Měsíčně
  rocne = 'zpusobStahKurz.rocne', //Ročně
}


export class AFMena extends AFEntity {

    // ID (db: IdMeny) - ID)
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

    // Symbol (db: Symbol) - Symbol)
    symbol?: string

    // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
    kurzMnozstvi?: Big

    // Způsob stahování kurzu (db: ZpusobStahKurzK) - Způsob stahování kurzu)
    zpusobStahKurzK?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Kurzy (type: KURZ) - kurzy)
    kurzy?: Promise<AFKurz[]>

}