import { AFEntity } from '../AFEntity'
import { AFSmlouva } from './AFSmlouva'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFZakazka } from './AFZakazka'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFAdresar } from './AFAdresar'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSmlouvaPolozkaZpusFaktK {
  dopredu = 'zpusobFakt.dopredu', //Fakturovat dopředu
  zpetne = 'zpusobFakt.zpetne', //Fakturovat zpětně
}

export enum AFSmlouvaPolozkaTypCenyDphK {
  bezDph = 'typCeny.bezDph', //bez DPH
  sDph = 'typCeny.sDph', //včetně DPH
}

export enum AFSmlouvaPolozkaTypSzbDphK {
  dphOsv = 'typSzbDph.dphOsv', //osvobozeno
  dphSniz = 'typSzbDph.dphSniz', //snížená
  dphSniz2 = 'typSzbDph.dphSniz2', //2. snížená
  dphZakl = 'typSzbDph.dphZakl', //základní
}


export class AFSmlouvaPolozka extends AFEntity {

    // ID (db: IdPolSml) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Označení (db: Kod) - Označení)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Pořadí (db: CisRad) - Pořadí)
    cisRad?: number

    // Platnost od (db: PlatiOdData) - Platnost od)
    platiOdData?: Date

    // Platnost do (db: PlatiDoData) - Platnost do)
    platiDoData?: Date

    // Frekvence fakturace (db: FrekFakt) - Frekvence fakturace)
    frekFakt?: number

    // Obrátkový den (db: Den) - Obrátkový den)
    den?: number

    // Obrátkový měsíc (db: Mesic) - Obrátkový měsíc)
    mesic?: number

    // Způsob fakturace (db: ZpusFaktK) - Způsob fakturace)
    zpusFaktK?: any

    // Fakturovat dní předem/po (db: DnyFakt) - Fakturovat dní předem/po)
    dnyFakt?: number

    // Variabilní symbol (db: VarSym) - Variabilní symbol)
    varSym?: string

    // Cena ručně (db: CenaRucne) - Cena ručně)
    cenaRucne?: boolean

    // Cena za MJ (db: CenaMj) - Cena za MJ)
    cenaMj?: Big

    // Množství (db: MnozMj) - Množství)
    mnozMj?: Big

    // Cena celkem (db: CenaCelkem) - Cena celkem)
    cenaCelkem?: Big

    // DPH ručně (db: DphRucne) - DPH ručně)
    dphRucne?: boolean

    // Typ ceny (db: TypCenyDphK) - Typ ceny)
    typCenyDphK?: any

    // Sazba DPH (db: TypSzbDphK) - Sazba DPH)
    typSzbDphK?: any

    // Sleva (db: Sleva) - Sleva)
    sleva?: Big

    // Ext. gener. (db: ExtGener) - Ext. gener.)
    extGener?: boolean

    // Konec posl. fakt. období (db: DatPoslFaktObd) - Konec posl. fakt. období)
    datPoslFaktObd?: Date

    // Generovat položku faktury (db: AutoGen) - Generovat položku faktury)
    autoGen?: boolean

    // Valorizovat (db: Valorizovat) - Valorizovat)
    valorizovat?: boolean

    // Valorizovat k měsíci (db: ValorizovatMesic) - Valorizovat k měsíci)
    valorizovatMesic?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Číslo došlé (db: CisDosle) - Číslo došlé)
    cisDosle?: string

    // Smlouva (db: IdSmlouvy) - Smlouva)
    smlouva?: AFSmlouva

    // Kód z ceníku (db: IdCenik) - Kód z ceníku)
    cenik?: AFCenik

    // Sklad (db: IdBspSkl) - Sklad)
    sklad?: AFSklad

    // Místo (db: IdMisto) - Místo)
    misto?: AFMistoUrceni

    // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
    typUcOp?: AFPredpisZauctovani

    // Typ faktury (db: IdTypDokl) - Typ faktury)
    typDoklFak?: AFTypFakturyVydane

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Číslo účtu (db: IdBanSpoj) - Číslo účtu)
    banSpoj?: AFAdresarBankovniUcet

    // Fakturovat firmě (db: IdFirmyFakt) - Fakturovat firmě)
    firmaFakt?: AFAdresar

    // Valorizační položka (db: IdValorPolSml) - Valorizační položka)
    valorPolSml?: AFSmlouvaPolozka


    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}