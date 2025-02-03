import { AFEntity } from '../AFEntity'
import { AFRadekSestavy } from './AFRadekSestavy'
import { AFUcetniOsnova } from './AFUcetniOsnova'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFStandardniPredpisDruhUctuK {
  aktivni = 'druhUctu.aktivni', //aktivní
  pasivni = 'druhUctu.pasivni', //pasivní
  naklady = 'druhUctu.naklady', //náklady
  vynosy = 'druhUctu.vynosy', //výnosy
  aktpasvy = 'druhUctu.aktpasvy', //aktivní/pasivní (dle výsledku)
  aktpasvo = 'druhUctu.aktpasvo', //aktivní+pasivní (volba)
}

export enum AFStandardniPredpisZpusobVypK {
  stavPoc = 'zpusobVypo.stavPoc', //stav účtu na počátku období
  stavKon = 'zpusobVypo.stavKon', //stav účtu na konci období
  obrat = 'zpusobVypo.obrat', //obrat za období
  obratMd = 'zpusobVypo.obratMd', //obrat MD za období
  obratDal = 'zpusobVypo.obratDal', //obrat D za období
}


export class AFStandardniPredpis extends AFEntity {

    // ID (db: IdSesStdPred) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Druh účtu (db: DruhUctuK) - Druh účtu)
    druhUctuK?: any

    // Sloupec sestavy (db: CisSloup) - Sloupec sestavy)
    cisSloup?: number

    // Způsob výpočtu (db: ZpusobVypK) - Způsob výpočtu)
    zpusobVypK?: any

    // Převrátit znaménko (db: PrevratZnam) - Převrátit znaménko)
    prevratZnam?: boolean

    // Uvažovat jen kladné hodnoty (db: JenKladne) - Uvažovat jen kladné hodnoty)
    jenKladne?: boolean

    // Řádek (db: IdSesRadky) - Řádek)
    radek?: AFRadekSestavy

    // Číslo účtu syntetické (db: IdStdUcet) - Číslo účtu syntetické)
    cisloUctuSyn?: AFUcetniOsnova


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}