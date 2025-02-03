import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFStavObchodnihoDokladuStavUzivK {
  nespec = 'stavDoklObch.nespec', //Nespecifikováno
  pripraveno = 'stavDoklObch.pripraveno', //Připraveno
  schvaleno = 'stavDoklObch.schvaleno', //Schváleno
  castecneNaCeste = 'stavDoklObch.castecneNaCeste', //Částečně na cestě
  naCeste = 'stavDoklObch.naCeste', //Na cestě
  castVydano = 'stavDoklObch.castVydano', //Částečně vydáno/přijato
  vydano = 'stavDoklObch.vydano', //Vydáno/přijato
  castHotovo = 'stavDoklObch.castHotovo', //Částečně hotovo
  hotovo = 'stavDoklObch.hotovo', //Hotovo
  storno = 'stavDoklObch.storno', //Storno
}


export class AFStavObchodnihoDokladu extends AFEntity {

    // ID (db: IdStavDoklObchCis) - ID)
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

    // Stav dokladu (db: StavUzivK) - Stav dokladu)
    stavUzivK?: any

    // Standard (db: Standard) - Standard)
    standard?: boolean

    // Pořadí (db: Poradi) - Pořadí)
    poradi?: number

    // Poptávky přijaté (db: ModulPpp) - Poptávky přijaté)
    modulPpp?: boolean

    // Poptávky vydané (db: ModulPpv) - Poptávky vydané)
    modulPpv?: boolean

    // Nabídky přijaté (db: ModulNap) - Nabídky přijaté)
    modulNap?: boolean

    // Nabídky vydané (db: ModulNav) - Nabídky vydané)
    modulNav?: boolean

    // Objednávky přijaté (db: ModulObp) - Objednávky přijaté)
    modulObp?: boolean

    // Objednávky vydané (db: ModulObv) - Objednávky vydané)
    modulObv?: boolean


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}