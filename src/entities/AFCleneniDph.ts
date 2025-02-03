import { AFEntity } from '../AFEntity'
import { AFStat } from './AFStat'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFCleneniDphTypPlneniK {
  prijata = 'typPlneni.prijata', //Přijatá
  uskutecnena = 'typPlneni.uskutecnena', //Uskutečněná
  prijataRCH = 'typPlneni.prijataRCH', //Přijatá RCH (Reverse charge)
  uskutecnenaRCH = 'typPlneni.uskutecnenaRCH', //Uskutečněná RCH (Reverse charge)
  obojiRCH = 'typPlneni.obojiRCH', //Obojí RCH (Reverse charge)
}

export enum AFCleneniDphTypObchoduK {
  tuzem = 'typObchodu.tuzem', //Tuzemsko
  EUplatce = 'typObchodu.EUplatce', //EU plátce DPH
  EUneplat = 'typObchodu.EUneplat', //EU neplátce DPH
  cizina = 'typObchodu.cizina', //Mimo EU
}

export enum AFCleneniDphKodPlneniK {
  zbozi = 'kodPlneni.zbozi', //Dodání zboží
  doprProstr = 'kodPlneni.doprProstr', //Dopravní prostředek
  majetek = 'kodPlneni.majetek', //Obchodní majetek
  tristran = 'kodPlneni.tristran', //Třístranný obchod
  sluzby = 'kodPlneni.sluzby', //Dodání služby
  osv = 'kodPlneni.osv', //Osvobozeno
  prenDanPov = 'kodPlneni.prenDanPov', //Přenesená daňová povinnost
  prenDanPovOprava = 'kodPlneni.prenDanPovOprava', //Přenesená daňová povinnost - volba uživatele
  sluzbyMOSS = 'kodPlneni.sluzbyMOSS', //Zvláštní režim jednoho správního místa (Mini One Stop Shop)
  sluzbyOSS = 'kodPlneni.sluzbyOSS', //OSS - EU služby
  zboziOSS = 'kodPlneni.zboziOSS', //OSS - EU zboží
  mimoEuOSS = 'kodPlneni.mimoEuOSS', //OSS - mimo EU
  dovozOSS = 'kodPlneni.dovozOSS', //OSS - dovozní režim
  oprava = 'kodPlneni.oprava', //Oprava plnění
  knihy = 'kodPlneni.knihy', //Dodání knih a obdobné služby
}


export class AFCleneniDph extends AFEntity {

    // ID (db: IdClenDPH) - ID)
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

    // Typ plnění (db: TypPlneniK) - Typ plnění)
    typPlneniK?: any

    // Typ obchodu (db: TypObchoduK) - Typ obchodu)
    typObchoduK?: any

    // Kód plnění (db: KodPlneniK) - Kód plnění)
    kodPlneniK?: any

    // Je DPH (db: JeDph) - Je DPH)
    jeDph?: boolean

    // Pořadí (db: Poradi) - Pořadí)
    poradi?: number

    // Kód plnění pro souhrnné hlášení (db: KodPlneniSH) - Kód plnění pro souhrnné hlášení)
    kodPlneniSH?: string

    // Typ plnění EET (db: TypPlneniEetK) - Typ plnění EET)
    typPlneniEetK?: any

    // Stát (db: IdStatu) - Stát)
    stat?: AFStat


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}