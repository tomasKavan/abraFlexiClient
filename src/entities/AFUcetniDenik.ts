import { AFEntity } from '../AFEntity'
import { AFCleneniDph } from './AFCleneniDph'
import { AFAdresar } from './AFAdresar'
import { AFMena } from './AFMena'
import { AFStredisko } from './AFStredisko'
import { AFUcet } from './AFUcet'
import { AFZakazka } from './AFZakazka'
import { AFCinnost } from './AFCinnost'

export enum AFUcetniDenikModulK {
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

export enum AFUcetniDenikTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}

export enum AFUcetniDenikStavUzivK {
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


export class AFUcetniDenik extends AFEntity {

    // ID (db: undefined) - ID)
    idUcetniDenik?: number

    // Řádky DPH (db: undefined) - Řádky DPH)
    clenDph?: AFCleneniDph

    // Datum splatnosti (db: undefined) - Datum splatnosti)
    datSplat?: Date

    // Datum úhrady (db: undefined) - Datum úhrady)
    datUhr?: Date

    // Dat. vyst. dokladu (db: undefined) - Datum vystavení dokladu)
    datVyst?: Date

    // Datum zaúčt. (db: undefined) - Datum zaúčtování)
    datUcto?: Date

    // Int.čís.dokladu (db: undefined) - Interní číslo dokladu)
    doklad?: string

    // Datum zdan. plnění (db: undefined) - Datum zdan. plnění)
    duzpUcto?: Date

    // Zkratka firmy (db: undefined) - Zkratka firmy)
    firma?: AFAdresar

    // Kurz (db: undefined) - Kurz)
    kurz?: Big

    // Měna (db: undefined) - Měna)
    mena?: AFMena

    // Modul (db: undefined) - Modul)
    modul?: string

    // Název modulu (db: undefined) - Název modulu)
    modulK?: any

    // Název firmy (db: undefined) - Název firmy)
    nazFirmy?: string

    // Popis (db: undefined) - Popis)
    popis?: string

    // Variabilní symbol (db: undefined) - Variabilní symbol)
    varSym?: string

    // Sazba DPH (db: undefined) - Sazba DPH)
    typSzbDphK?: any

    // Hodnota DPH (db: undefined) - Hodnota DPH)
    szbDph?: Big

    // Částka v Kč (db: undefined) - Částka v Kč)
    sumTuz?: Big

    // Částka v měně (db: undefined) - Částka v měně)
    sumMen?: Big

    // Stav dokladu (db: undefined) - Stav dokladu)
    stavUzivK?: any

    // Středisko (db: undefined) - Středisko)
    stredisko?: AFStredisko

    // Účet MD (db: undefined) - Účet MD)
    mdUcet?: AFUcet

    // Účet DAL (db: undefined) - Účet DAL)
    dalUcet?: AFUcet

    // ID dokladu (db: undefined) - ID dokladu)
    idDokl?: number

    // Zaúčtováno (db: undefined) - Stav zaúčtování)
    zuctovano?: boolean

    // Zakázka (db: undefined) - Zakázka)
    zakazka?: AFZakazka

    // Párovací symbol (db: undefined) - Párovací symbol)
    parSymbol?: string

    // Činnost (db: undefined) - Činnost)
    cinnost?: AFCinnost

    // Seznam ID položek (db: undefined) - Seznam ID položek)
    idPolozek?: any

    // Bezpol. dokl. (db: undefined) - bezpoložkový doklad)
    bezPolozek?: boolean


}