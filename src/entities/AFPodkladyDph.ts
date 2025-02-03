import { AFEntity } from '../AFEntity'
import { AFCleneniDph } from './AFCleneniDph'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFAdresar } from './AFAdresar'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFStredisko } from './AFStredisko'
import { AFStatDph } from './AFStatDph'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'

export enum AFPodkladyDphModulK {
  FAP = 'modulUcetni.FAP', //Faktury přijaté
  FAV = 'modulUcetni.FAV', //Faktury vydané
  BAN = 'modulUcetni.BAN', //Banka
  POK = 'modulUcetni.POK', //Pokladna
  SKL = 'modulUcetni.SKL', //Sklad
  INT = 'modulUcetni.INT', //Interní doklady
  PHL = 'modulUcetni.PHL', //Pohledávky
  ZAV = 'modulUcetni.ZAV', //Závazky
  MAJ = 'modulUcetni.MAJ', //Majetek
  LEA = 'modulUcetni.LEA', //Leasing
}

export enum AFPodkladyDphTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}

export enum AFPodkladyDphStavUzivK {
  bezPrikazu = 'stavUziv.bezPrikazu', //Bez příkazu
  obsaPrikaz = 'stavUziv.obsaPrikaz', //Obsažen v příkazu
  castPrikaz = 'stavUziv.castPrikaz', //Odeslán částečný příkaz
  celPrikaz = 'stavUziv.celPrikaz', //Odeslán příkaz
  nactenoEl = 'stavUziv.nactenoEl', //Načteno elektronicky
  nactenoElPosledni = 'stavUziv.nactenoElPosledni', //Naposledy načteno elektronicky
  genKasa = 'stavUziv.genKasa', //Vygenerován z kasy
  zauctovano = 'stavUziv.zauctovano', //Zaúčtováno do pokladny
  zaucZmena = 'stavUziv.zaucZmena', //Změněno po zaúčtování
}

export enum AFPodkladyDphTypPlneniK {
  prijata = 'typPlneni.prijata', //Přijatá
  uskutecnena = 'typPlneni.uskutecnena', //Uskutečněná
  prijataRCH = 'typPlneni.prijataRCH', //Přijatá RCH (Reverse charge)
  uskutecnenaRCH = 'typPlneni.uskutecnenaRCH', //Uskutečněná RCH (Reverse charge)
  obojiRCH = 'typPlneni.obojiRCH', //Obojí RCH (Reverse charge)
}


export class AFPodkladyDph extends AFEntity {

    // Řádky DPH (db: undefined) - Řádky DPH)
    clenDph?: AFCleneniDph

    // Řádek kontrolního hlášení DPH (db: undefined) - Řádek kontrolního hlášení DPH)
    clenKonVykDph?: AFCleneniKontrolniHlaseni

    // Datum splatnosti (db: undefined) - Datum splatnosti)
    datSplat?: Date

    // Datum úhrady (db: undefined) - Datum úhrady)
    datUhr?: Date

    // Dat. vyst. dokladu (db: undefined) - Datum vystavení dokladu)
    datVyst?: Date

    // Datum zaúčt. (db: undefined) - Datum zaúčtování)
    datUcto?: Date

    // Int. čís. dokladu (db: undefined) - Interní číslo dokladu)
    doklad?: string

    // Datum zdaň. plnění (db: undefined) - Datum zdaň. plnění)
    duzpPuv?: Date

    // Uplatnit zdaň. plnění (db: undefined) - Uplatnit zdaň. plnění)
    duzpUcto?: Date

    // Zkratka firmy (db: undefined) - Zkratka firmy)
    firma?: AFAdresar

    // Je DPH (db: undefined) - Je DPH)
    jeDph?: boolean

    // Kurz (db: undefined) - Kurz)
    kurz?: Big

    // Modul (db: undefined) - Modul)
    modul?: string

    // Název modulu (db: undefined) - Název modulu)
    modulK?: any

    // Název firmy nebo jméno osoby (db: undefined) - Název firmy - jméno)
    nazFirmy?: string

    // Popis (db: undefined) - Popis)
    popis?: string

    // Variabilní symbol (db: undefined) - Variabilní symbol)
    varSym?: string

    // Sazba DPH (db: undefined) - Sazba DPH)
    typSzbDphK?: any

    // Hodnota DPH (db: undefined) - Hodnota DPH)
    szbDph?: Big

    // Základ [Kč] (db: undefined) - Základ [Kč])
    sumZklTuz?: Big

    // Základ [měna] (db: undefined) - Základ [měna])
    sumZklMen?: Big

    // DPH [Kč] (db: undefined) - DPH [Kč])
    sumDphTuz?: Big

    // DPH [měna] (db: undefined) - DPH [měna])
    sumDphMen?: Big

    // Stav dokladu (db: undefined) - Stav dokladu)
    stavUzivK?: any

    // Účet MD zákl. (db: undefined) - Má Dáti základu)
    zklMdUcet?: AFUcet

    // Účet Dal zákl. (db: undefined) - Dal základu)
    zklDalUcet?: AFUcet

    // Účet MD DPH (db: undefined) - Má dáti DPH)
    dphMdUcet?: AFUcet

    // Účet Dal DPH (db: undefined) - Dal DPH)
    dphDalUcet?: AFUcet

    // ID dokladu (db: undefined) - ID dokladu)
    idDokl?: number

    // Zaúčtováno (db: undefined) - Stav zaúčtování)
    zuctovano?: boolean

    // Zakázka (db: undefined) - Zakázka)
    zakazka?: AFZakazka

    // Středisko (db: undefined) - Středisko)
    stredisko?: AFStredisko

    // Typ plnění DPH (db: undefined) - Typ plnění DPH)
    typPlneniK?: any

    // Stát DPH (db: undefined) - Stát DPH)
    statDph?: AFStatDph

    // Měsíc zaúčtování (db: undefined) - Měsíc zaúčtování)
    mesicUcto?: number

    // Rok zaúčtování (db: undefined) - Rok zaúčtování)
    rokUcto?: number

    // Měsíc DUZP (db: undefined) - Měsíc DUZP)
    mesicDuzp?: number

    // Rok DUZP (db: undefined) - Rok DUZP)
    rokDuzp?: number

    // Předpis zaúčtování (db: undefined) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // DIČ (db: undefined) - DIČ)
    dic?: string

    // Vyp. rozdíl DPH [měna] (db: undefined) - Vyp. rozdíl DPH [měna])
    vypRozdilDphMen?: Big

    // Vyp. rozdíl DPH [Kč] (db: undefined) - Vyp. rozdíl DPH [Kč])
    vypRozdilDphTuz?: Big

    // Vyp. DPH [měna] (db: undefined) - Vyp. DPH [měna])
    vypSumDphMen?: Big

    // Vyp. DPH [Kč] (db: undefined) - Vyp. DPH [Kč])
    vypSumDphTuz?: Big

    // Vyp. sazba DPH (db: undefined) - Vyp. sazba DPH)
    vypSzbDph?: Big

    // Vyp. rozdíl sazby DPH (db: undefined) - Vyp. rozdíl sazby DPH)
    vypRozdilSzbDph?: Big


}