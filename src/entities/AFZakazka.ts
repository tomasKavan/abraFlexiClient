import { AFEntity } from '../AFEntity'
import { AFAdresar } from './AFAdresar'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFStredisko } from './AFStredisko'
import { AFStavZakazky } from './AFStavZakazky'
import { AFTypZakazky } from './AFTypZakazky'
import { AFHodnoceniZakazky } from './AFHodnoceniZakazky'
import { AFKontakt } from './AFKontakt'
import { AFMena } from './AFMena'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFZakazka extends AFEntity {

    // ID (db: IdZakazky) - ID)
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

    // Datum zahájení (db: DatZahaj) - Datum zahájení)
    datZahaj?: Date

    // Datum ukončení (db: DatKonec) - Datum ukončení)
    datKonec?: Date

    // Procento vyhodnocení (db: ProcVyh) - Procento vyhodnocení)
    procVyh?: Big

    // Termín realizace (db: Termin) - Termín realizace)
    termin?: Date

    // Splatnost [dny] (db: SplatDny) - Splatnost [dny])
    splatDny?: number

    // Rozsah zakázky (db: Rozsah) - Rozsah zakázky)
    rozsah?: Big

    // Předpokl. náklady (db: NakladyPredpoklad) - Předpokl. náklady)
    nakladyPredpoklad?: Big

    // Předpokl. zisk (db: ZiskPredpoklad) - Předpokl. zisk)
    ziskPredpoklad?: Big

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Variabilní symbol (db: VarSym) - Variabilní symbol)
    varSym?: string

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Číslo objednávky (db: CisObj) - Číslo objednávky)
    cisObj?: string

    // Číslo smlouvy (db: CisSml) - Číslo smlouvy)
    cisSml?: string

    // Plánované zahájení (db: DatZahajPlan) - Plánované zahájení)
    datZahajPlan?: Date

    // Plánované předání (db: DatPredaniPlan) - Plánované předání)
    datPredaniPlan?: Date

    // Datum předání (db: DatPredani) - Datum předání)
    datPredani?: Date

    // Záruka (db: Zaruka) - Záruka)
    zaruka?: boolean

    // Datum záruky (db: DatZaruky) - Datum záruky)
    datZaruky?: Date

    // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
    firma?: AFAdresar

    // Místo určení (db: IdMur) - Místo určení)
    mistUrc?: AFMistoUrceni

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Stav zakázky (db: IdStavZakazky) - Stav zakázky)
    stavZakazky?: AFStavZakazky

    // Typ zakázky (db: Idtypzakazky) - Typ zakázky)
    typZakazky?: AFTypZakazky

    // Zodpovědný pracovník (db: IdUzivatel) - Zodpovědný pracovník)
    zodpPrac?: any

    // Vyhodnocení zakázky (db: IdVyhZakazky) - Vyhodnocení zakázky)
    vyhZakazky?: AFHodnoceniZakazky

    // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
    kontaktOsoba?: AFKontakt

    // Měna (db: IdMena) - Měna)
    mena?: AFMena


    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Události (type: ADR_UDALOST) - udalosti)
    udalosti?: Promise<AFUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}