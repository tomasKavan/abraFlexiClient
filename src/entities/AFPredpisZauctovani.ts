import { AFEntity } from '../AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFUcet } from './AFUcet'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFPredpisZauctovaniKodPlneniK {
  bezVlivu = 'kodPlneni.bezVlivu', //Bez vlivu na DPH
  zbozi = 'kodPlneni.zbozi', //Dodání zboží
  doprProstr = 'kodPlneni.doprProstr', //Dopravní prostředek
  majetek = 'kodPlneni.majetek', //Obchodní majetek
  tristran = 'kodPlneni.tristran', //Třístranný obchod
  sluzby = 'kodPlneni.sluzby', //Dodání služby
  osv = 'kodPlneni.osv', //Osvobozeno
  prenDanPov = 'kodPlneni.prenDanPov', //Přenesená daňová povinnost
  prenDanPovOprava = 'kodPlneni.prenDanPovOprava', //Přenesená daňová povinnost - volba uživatele
  ostatni = 'kodPlneni.ostatni', //Ostatní
  nespec = 'kodPlneni.nespec', //Nespecifikováno
  sluzbyMOSS = 'kodPlneni.sluzbyMOSS', //Zvláštní režim jednoho správního místa (Mini One Stop Shop)
  sluzbyOSS = 'kodPlneni.sluzbyOSS', //OSS - EU služby
  zboziOSS = 'kodPlneni.zboziOSS', //OSS - EU zboží
  mimoEuOSS = 'kodPlneni.mimoEuOSS', //OSS - mimo EU
  dovozOSS = 'kodPlneni.dovozOSS', //OSS - dovozní režim
  oprava = 'kodPlneni.oprava', //Oprava plnění
  knihy = 'kodPlneni.knihy', //Dodání knih a obdobné služby
}


export class AFPredpisZauctovani extends AFEntity {

    // ID (db: IdTypUcOp) - ID)
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

    // Platí od (db: IdUcetObdobiOd) - Platí od)
    ucetObdobiOd?: AFUcetniObdobi

    // Platí do (db: IdUcetObdobiDo) - Platí do)
    ucetObdobiDo?: AFUcetniObdobi

    // Faktury vydané (db: ModulFav) - vydané)
    modulFav?: boolean

    // Faktury přijaté (db: ModulFap) - přijaté)
    modulFap?: boolean

    // Ost. pohledávky (db: ModulPhl) - pohledávky)
    modulPhl?: boolean

    // Ost. závazky (db: ModulZav) - závazky)
    modulZav?: boolean

    // Banka - příjem (db: ModulBanP) - příjem)
    modulBanP?: boolean

    // Banka - výdej (db: ModulBanV) - výdej)
    modulBanV?: boolean

    // Pokladna - příjem (db: ModulPokP) - příjem)
    modulPokP?: boolean

    // Pokladna - výdej (db: ModulPokV) - výdej)
    modulPokV?: boolean

    // Sklad - příjem (db: ModulSklP) - příjem)
    modulSklP?: boolean

    // Sklad - výdej (db: ModulSklV) - výdej)
    modulSklV?: boolean

    // Interní doklady (db: ModulInt) - Interní doklady)
    modulInt?: boolean

    // Kód plnění pro DPH (db: KodPlneniK) - Kód plnění pro DPH)
    kodPlneniK?: any

    // Účet pro příjem [DAL] (db: IdProtiUcetP) - Účet pro příjem [DAL])
    protiUcetPrijem?: AFUcet

    // Účet pro výdej [MD] (db: IdProtiUcetV) - Účet pro výdej [MD])
    protiUcetVydej?: AFUcet

    // Účet DPH sníž. (db: IdDphSnizUcet) - DPH snížená)
    dphSnizUcet?: AFUcet

    // Účet DPH 2. sníž. (db: IdDphSniz2Ucet) - DPH 2. snížená)
    dphSniz2Ucet?: AFUcet

    // Účet DPH zákl. (db: IdDphZaklUcet) - DPH základní)
    dphZaklUcet?: AFUcet


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}