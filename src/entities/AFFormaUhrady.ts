import { AFEntity } from '../AFEntity'
import { AFMena } from './AFMena'
import { AFFormaUhradyZauctovani } from './AFFormaUhradyZauctovani'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFFormaUhradyFormaUhrK {
  prevod = 'formaUhr.prevod', //převodem
  hotove = 'formaUhr.hotove', //hotově
  slozenka = 'formaUhr.slozenka', //složenkou
  dobirka = 'formaUhr.dobirka', //dobírkou
  platKart = 'formaUhr.platKart', //platební kartou
  zapocet = 'formaUhr.zapocet', //zápočtem
  jina = 'formaUhr.jina', //jinou formou
  sek = 'formaUhr.sek', //šekem
  cenina = 'formaUhr.cenina', //ceninou
}

export enum AFFormaUhradyMetodaZaokrDoklK {
  zklDph = 'metodaZaokr.zklDph', //do základu a DPH
  0sazba = 'metodaZaokr.0sazba', //do 0 sazby
  individ = 'metodaZaokr.individ', //individuálně
}

export enum AFFormaUhradyZaokrNaSumK {
  zadne = 'zaokrNa.zadne', //nezaokrouhlovat
  tisiciny = 'zaokrNa.tisiciny', //0.001
  setiny = 'zaokrNa.setiny', //0.01
  5setiny = 'zaokrNa.5setiny', //0.05
  desetiny = 'zaokrNa.desetiny', //0.1
  5desetiny = 'zaokrNa.5desetiny', //0.5
  jednotky = 'zaokrNa.jednotky', //1
  5jednotky = 'zaokrNa.5jednotky', //5
  desitky = 'zaokrNa.desitky', //10
  stovky = 'zaokrNa.stovky', //100
  tisice = 'zaokrNa.tisice', //1000
}


export class AFFormaUhrady extends AFEntity {

    // ID (db: IdFormaUhradyCis) - ID)
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

    // Forma úhrady (db: FormaUhrK) - Forma úhrady)
    formaUhrK?: any

    // Kurz (db: Kurz) - Kurz)
    kurz?: Big

    // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
    kurzMnozstvi?: Big

    // Limit vrácení (db: LimitVratky) - Limit vrácení)
    limitVratky?: Big

    // Nabízet na fakturách (db: VsbFak) - Nabízet na fakturách)
    vsbFak?: boolean

    // Nabízet na pokladně (db: VsbPok) - Nabízet na pokladně)
    vsbPok?: boolean

    // Nabízet na kase (db: VsbKasa) - Nabízet na kase)
    vsbKasa?: boolean

    // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
    metodaZaokrDoklK?: any

    // Řád zaokr. Celkem (db: ZaokrNaSumK) - Celkem (řády))
    zaokrNaSumK?: any

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena


    // Zaúčtování (type: FORMA_UHRADY_ZAUCTOVANI) - zauctovani)
    zauctovani?: Promise<AFFormaUhradyZauctovani[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}