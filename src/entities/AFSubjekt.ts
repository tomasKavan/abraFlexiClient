import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSubjektTypVztahuK {
  spravce = 'gdprTypVztahu.spravce', //Správce
  spolSpravce = 'gdprTypVztahu.spolSpravce', //Společní správci
  zpracovatel = 'gdprTypVztahu.zpracovatel', //Zpracovatel
  subzpracovatel = 'gdprTypVztahu.subzpracovatel', //Subzpracovatel
  prijemce = 'gdprTypVztahu.prijemce', //Příjemce
  jedenZeZprac = 'gdprTypVztahu.jedenZeZprac', //Jeden ze zpracovatelů
  zastupce = 'gdprTypVztahu.zastupce', //Zástupce
}


export class AFSubjekt extends AFEntity {

    // ID (db: Idsubjekt) - ID)
    id?: number

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: Date

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: Date

    // Typ vztahu (db: TypVztahuK) - Typ vztahu)
    typVztahuK?: any

    // Definice (db: Definice) - Definice)
    definice?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Údaje jsou předávány do třetí země (db: TretiZeme) - Údaje jsou předávány do třetí země)
    tretiZeme?: boolean

    // Adresář (db: Idadresar) - Adresář)
    adresar?: AFAdresar

    // Definice účelu (db: Iddefiniceucelu) - Definice účelu)
    definiceUcel?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}