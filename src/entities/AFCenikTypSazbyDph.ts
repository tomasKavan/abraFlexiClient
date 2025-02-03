import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFStatDph } from './AFStatDph'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFCenikTypSazbyDphTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}

export enum AFCenikTypSazbyDphKodPlneniK {
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


export class AFCenikTypSazbyDph extends AFEntity {

    // ID (db: IdTypSazbyDph) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Typ sazby DPH (db: TypSzbDphK) - Typ sazby DPH)
    typSzbDphK?: any

    // Kód plnění pro DPH (db: KodPlneniK) - Kód plnění pro DPH)
    kodPlneniK?: any

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: Date

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: Date

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Stát (db: IdStatu) - Stát)
    stat?: AFStatDph


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}