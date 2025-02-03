import { AFEntity } from '../AFEntity'
import { AFCleneniDph } from './AFCleneniDph'
import { AFAdresar } from './AFAdresar'
import { AFMena } from './AFMena'
import { AFUcet } from './AFUcet'
import { AFStatDph } from './AFStatDph'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFCinnost } from './AFCinnost'

export enum AFSaldoStavUhrK {
  castUhr = 'stavUhr.castUhr', //Částečně uhrazeno
  uhrazeno = 'stavUhr.uhrazeno', //Uhrazeno
  uhrazenoRucne = 'stavUhr.uhrazenoRucne', //Uhrazeno (ručně)
}

export enum AFSaldoStavUzivK {
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

export enum AFSaldoModulK {
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

export enum AFSaldoTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}


export class AFSaldo extends AFEntity {

    // Řádky DPH (db: undefined) - Řádky DPH)
    clenDph?: AFCleneniDph

    // Datum splatnosti (db: undefined) - Datum splatnosti)
    datSplat?: Date

    // Datum úhrady (db: undefined) - Datum úhrady)
    datUhr?: Date

    // Datum vyst. (db: undefined) - Vystaveno)
    datVyst?: Date

    // Int.čís.dokladu (db: undefined) - Interní číslo dokladu)
    doklad?: string

    // Uplatnit zdaň. plnění (db: undefined) - Uplatnit zdaň. plnění)
    duzpUcto?: Date

    // Datum zaúčt. (db: undefined) - Datum zaúčtování)
    datUcto?: Date

    // Zkratka firmy (db: undefined) - Zkratka firmy)
    firma?: AFAdresar

    // ID (db: undefined) - ID)
    idUcetniDenik?: number

    // Kurz (db: undefined) - Kurz)
    kurz?: Big

    // Kód měny (db: undefined) - Kód měny)
    mena?: AFMena

    // Modul (db: undefined) - Modul)
    modul?: string

    // Název firmy nebo jméno osoby (db: undefined) - Název firmy - jméno)
    nazFirmy?: string

    // Popis (db: undefined) - Popis)
    popis?: string

    // Protiúčet (db: undefined) - Protiúčet)
    protiUcet?: AFUcet

    // Stát DPH (db: undefined) - Stát DPH)
    statDph?: AFStatDph

    // Stav úhrady (db: undefined) - Stav úhrady)
    stavUhrK?: any

    // Uživatelský stav (db: undefined) - Uživatelský stav)
    stavUzivK?: any

    // Název modulu (db: undefined) - Název modulu)
    modulK?: any

    // Středisko (db: undefined) - Středisko)
    stredisko?: AFStredisko

    // DAL v měně (db: undefined) - Částka DAL v měně)
    sumMenDal?: Big

    // MD v měně (db: undefined) - Částka MD v měně)
    sumMenMd?: Big

    // DAL v Kč (db: undefined) - Částka DAL [Kč])
    sumTuzDal?: Big

    // MD v Kč (db: undefined) - Částka MD [Kč])
    sumTuzMd?: Big

    // DPH [%] (db: undefined) - DPH [%])
    szbDph?: Big

    // Sazba DPH (db: undefined) - Sazba DPH)
    typSzbDphK?: any

    // Účet (db: undefined) - Účet)
    ucet?: AFUcet

    // Variabilní symbol (db: undefined) - Variabilní symbol)
    varSym?: string

    // Zakázka (db: undefined) - Zakázka)
    zakazka?: AFZakazka

    // ID dokladu (db: undefined) - ID dokladu)
    idDokl?: number

    // Zaúčtováno (db: undefined) - Stav zaúčtování)
    zuctovano?: boolean

    // Párovací symbol (db: undefined) - Párovací symbol)
    parSymbol?: string

    // Činnost (db: undefined) - Činnost)
    cinnost?: AFCinnost

    // Název účtu (db: undefined) - Název účtu)
    nazevUctu?: string

    // Vynechat ze salda (db: undefined) - Vynechat ze salda)
    vyloucitSaldo?: boolean


}