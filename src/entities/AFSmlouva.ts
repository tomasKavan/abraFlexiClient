import { AFEntity } from '../AFEntity'
import { AFTypSmlouvy } from './AFTypSmlouvy'
import { AFAdresar } from './AFAdresar'
import { AFZakazka } from './AFZakazka'
import { AFStredisko } from './AFStredisko'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFStavSmlouvy } from './AFStavSmlouvy'
import { AFCinnost } from './AFCinnost'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFKontakt } from './AFKontakt'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSmlouvaZpusFaktK {
  dopredu = 'zpusobFakt.dopredu', //Fakturovat dopředu
  zpetne = 'zpusobFakt.zpetne', //Fakturovat zpětně
}


export class AFSmlouva extends AFEntity {

    // ID (db: IdSmlouvy) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Číslo smlouvy (db: Kod) - Číslo smlouvy)
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

    // Šablona (db: Sablona) - Šablona)
    sablona?: boolean

    // Platnost od (db: SmlouvaOd) - Platnost od)
    smlouvaOd?: Date

    // Platnost do (db: SmlouvaDo) - Platnost do)
    smlouvaDo?: Date

    // Datum podepsání (db: DatumPodepsani) - Datum podepsání)
    datumPodepsani?: Date

    // Datum účinnosti (db: DatumUcinnosti) - Datum účinnosti)
    datumUcinnosti?: Date

    // Frekvence fakturace (db: FrekFakt) - Frekvence fakturace (měsíců))
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

    // Číslo došlé (db: CisDosle) - Číslo došlé)
    cisDosle?: string

    // Číslo smlouvy protistrany (db: CisSmlProti) - Číslo smlouvy protistrany)
    cisSmlProti?: string

    // Automaticky generovat (db: AutoGen) - Automaticky generovat)
    autoGen?: boolean

    // Automaticky posílat e-mailem klientovi (db: AutoMail) - Automaticky posílat e-mailem klientovi)
    autoMail?: boolean

    // Automaticky prodlužovat (db: AutoProdl) - Automaticky prodlužovat)
    autoProdl?: boolean

    // Automatická prolongace (db: AutoProlong) - Automatická prolongace)
    autoProlong?: number

    // Automaticky vytvářet zakázky (db: AutoZakazka) - Automaticky vytvářet zakázky)
    autoZakazka?: boolean

    // Dat.vyst. z DUZP (db: DatVystZDuzp) - Dat.vyst. z DUZP)
    datVystZDuzp?: boolean

    // Generovat i nulové faktury (db: GenerovatNuloveFaktury) - Generovat i nulové faktury)
    generovatNuloveFaktury?: boolean

    // Ignorovat nastavení typu smlouvy (db: IgnorovatTypSml) - Ignorovat nastavení typu smlouvy)
    ignorovatTypSml?: boolean

    // Řešit přeplatky (db: Preplatky) - Řešit přeplatky)
    preplatky?: boolean

    // Variabilní symbol z faktury (db: VarSymFakt) - Variabilní symbol je generován z čísla faktury)
    varSymFakt?: boolean

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Katastrální území (db: KatastrUzemi) - Katastrální území)
    katastrUzemi?: string

    // Parcela (db: Parcela) - Parcela)
    parcela?: string

    // Výpovědní lhůta [měsíc] (db: VypovedniLhuta) - Výpovědní lhůta [měsíc])
    vypovedniLhuta?: number

    // Datum založení (db: DatZaloz) - Datum založení)
    datZaloz?: Date

    // Datum vypovězení (db: DatVypoz) - Datum vypovězení)
    datVypoz?: Date

    // Typ faktury - Splatnost ve dnech (db: undefined) - Typ faktury - Splatnost ve dnech)
    typDoklFakSplatDny?: number

    // Datum splatnosti nejstarší neuhrazené faktury u smlouvy (db: undefined) - Datum splatnosti nejstarší neuhrazené faktury u smlouvy)
    poslDatSplat?: Date

    // Název firmy (db: undefined) - Název firmy)
    firma_nazev?: string

    // Typ smlouvy (db: IdTypSml) - Typ smlouvy)
    typSml?: AFTypSmlouvy

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Fakturovat firmě (db: IdFirmyFakt) - Fakturovat firmě)
    firmaFakt?: AFAdresar

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Typ faktury (db: IdTypDokl) - Typ faktury)
    typDoklFak?: AFTypFakturyVydane

    // Konstantní symbol (db: IdKonSym) - Konstantní symbol)
    konSym?: AFKonstSymbol

    // Stav smlouvy (db: IdStavSml) - Stav smlouvy)
    stavSml?: AFStavSmlouvy

    // Typ faktury - Středisko (db: undefined) - Typ faktury - Středisko)
    typDoklFakStredisko?: AFStredisko

    // Typ faktury - Činnost (db: undefined) - Typ faktury - Činnost)
    typDoklFakCinnost?: AFCinnost

    // Typ faktury - Bankovní účet (db: undefined) - Typ faktury - Bankovní účet)
    typDoklFakBspBan?: AFBankovniUcet

    // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
    zodpOsoba?: any

    // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
    kontaktOsoba?: AFKontakt


    // Standardní položky smluv (type: SMLOUVA_POLOZKA) - polozkySmlouvy)
    polozkySmlouvy?: Promise<AFSmlouvaPolozka[]>

    // Externí položky smluv (type: SMLOUVA_POLOZKA) - polozkySmlouvyExt)
    polozkySmlouvyExt?: Promise<AFSmlouvaPolozka[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}