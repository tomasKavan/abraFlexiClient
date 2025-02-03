import { AFEntity } from '../AFEntity'
import { AFOdpisovaSkupina } from './AFOdpisovaSkupina'
import { AFUmisteni } from './AFUmisteni'
import { AFTypMajetku } from './AFTypMajetku'
import { AFZakazka } from './AFZakazka'
import { AFStredisko } from './AFStredisko'
import { AFFakturaPrijata } from './AFFakturaPrijata'
import { AFAdresar } from './AFAdresar'
import { AFUcet } from './AFUcet'
import { AFDanovyOdpis } from './AFDanovyOdpis'
import { AFPriloha } from './AFPriloha'
import { AFUcetniOdpis } from './AFUcetniOdpis'
import { AFMajetekUdalost } from './AFMajetekUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFZapujcka } from './AFZapujcka'

export enum AFMajetekDruhK {
  hmDl = 'druhMaj.hmDl', //Hmotný dlouhodobý
  nehmDl = 'druhMaj.nehmDl', //Nehmotný dlouhodobý
  drobny = 'druhMaj.drobny', //Drobný
  neodepis = 'druhMaj.neodepis', //Neodpisovaný (pouhá evidence)
}

export enum AFMajetekMjZarukyK {
  rok = 'mjZaruky.rok', //rok
  mesic = 'mjZaruky.mesic', //měsíc
  den = 'mjZaruky.den', //den
}

export enum AFMajetekZpusOdpK {
  zar100 = 'zpusobOdp.zar100', //100 %
  zar5050 = 'zpusobOdp.zar5050', //50 % / 50 %
  rocne = 'zpusobOdp.rocne', //% Ročně
  rovn = 'typOdp.rovn', //Rovnoměrné
  zrych = 'typOdp.zrych', //Zrychlené
  mesic = 'typOdp.mesic', //Měsíční
}

export enum AFMajetekZvysZrychK {
  proc0 = 'zvysZrych.proc0', //0 %
  proc10 = 'zvysZrych.proc10', //10 %
  proc15 = 'zvysZrych.proc15', //15 %
  proc20 = 'zvysZrych.proc20', //20 %
}

export enum AFMajetekNahrUcetOdpK {
  ne = 'nahrUcet.ne', //Ne
  aPocMes = 'nahrUcet.aPocMes', //Ano
}

export enum AFMajetekZamekK {
  otevreno = 'zamek.otevreno', //Otevřeno
  prohlednuto = 'zamek.prohlednuto', //Prohlédnuto
  polozamceno = 'zamek.polozamceno', //Zamknuto mimo účetní
  zamceno = 'zamek.zamceno', //Zamknuto
}


export class AFMajetek extends AFEntity {

    // ID (db: IdMajetku) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Inv.čís. (db: Kod) - Inventární číslo)
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

    // Cena (db: Cena) - Cena při zařazení [Kč])
    cena?: Big

    // Kusů (db: KusySoubor) - Kusů v souboru)
    kusySoubor?: number

    // Druh (db: DruhK) - Druh)
    druhK?: any

    // Doklad (db: CidPoriz) - Doklad pořízení)
    cidPoriz?: string

    // Způs.poř. (db: ZpusPor) - Způsob pořízení)
    zpusPor?: string

    // Koupeno (db: DatKoupe) - Datum koupě)
    datKoupe?: Date

    // Vyrobeno (db: DatVyroby) - Datum výroby)
    datVyroby?: Date

    // Výrobní číslo (db: VyrCis) - Výrobní číslo)
    vyrCis?: string

    // MJ záruky (db: MjZarukyK) - MJ záruky)
    mjZarukyK?: any

    // Záruka (db: Zaruka) - Záruka)
    zaruka?: number

    // Zařazeno (db: DatZar) - Datum zařazení)
    datZar?: Date

    // Odepsáno měs. (db: StariPor) - Odepsáno při zař. [měsíce])
    stariPor?: number

    // Zůst.účet. (db: ZustUcet) - Zůstatek účetní [Kč])
    zustUcet?: Big

    // Zůst.daň. (db: ZustDan) - Zůstatek daňový [Kč])
    zustDan?: Big

    // Tech.zh. (db: TechZhod) - Před zařazením bylo tech. zhod.)
    techZhod?: boolean

    // Zač.daň.odp (db: DatZacDan) - Začátek daňových odpisů)
    datZacDan?: Date

    // Zač.uč.odp. (db: DatZacUcet) - Začátek účetních odpisů)
    datZacUcet?: Date

    // Způs.odp. (db: ZpusOdpK) - Způsob odpisování)
    zpusOdpK?: any

    // Zvýš.1.rok (db: ZvysZrychK) - Zvýšení odpisu v 1. roce)
    zvysZrychK?: any

    // Účetní odp.? (db: NahrUcetOdpK) - Vytvářet úč. odpisy)
    nahrUcetOdpK?: any

    // Doba úč.odp. (db: PredpisUcetOdp) - Počet měsíců odpisování)
    predpisUcetOdp?: Big

    // EAN (db: EanKod) - EAN)
    eanKod?: string

    // Účtovat zařazení (db: undefined) - Účtovat zařazení)
    uctovatZar?: boolean

    // Stáří tech.zh. (db: StariTechZhod) - Stáří tech. zhod. [měsíce])
    stariTechZhod?: number

    // Zařazeno (db: DatUdalZar) - Datum události zařazení)
    datUdalZar?: Date

    // Vyřazeno (db: DatUdalVyr) - Datum události vyřazení)
    datUdalVyr?: Date

    // Zámek (db: ZamekK) - Zámek)
    zamekK?: any

    // SKP (db: Skp) - Standardní klasifikace produkce)
    skp?: string

    // Přílohy (db: PocetPriloh) - Přílohy)
    pocetPriloh?: number

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Katastrální území (db: KatastrUzemi) - Katastrální území)
    katastrUzemi?: string

    // Parcela (db: Parcela) - Parcela)
    parcela?: string

    // Číslo (db: VozCislo) - Číslo)
    vozCislo?: string

    // SPZ (db: VozSpz) - SPZ)
    vozSpz?: string

    // Značka (db: VozZnacka) - Značka)
    vozZnacka?: string

    // Model (db: VozModel) - Model)
    vozModel?: string

    // Typ vozidla (db: VozTyp) - Typ vozidla)
    vozTyp?: string

    // Objem (db: VozObjem) - Objem)
    vozObjem?: Big

    // Havarijní pojištění (db: VozHavar) - Havarijní pojištění)
    vozHavar?: string

    // Výše havarijního pojištění (db: VozHavarVyse) - Výše havarijního pojištění)
    vozHavarVyse?: Big

    // Výbava (db: VozVybava) - Výbava)
    vozVybava?: string

    // Odp.skup. (db: IdSazby) - Odpisová skupina)
    sazba?: AFOdpisovaSkupina

    // Místnost (db: IdUmisMist) - Místnost)
    mistnost?: AFUmisteni

    // Sekce (db: IdUmisSekce) - Sekce)
    sekce?: AFUmisteni

    // Objekt (db: IdUmisObj) - Objekt)
    objekt?: AFUmisteni

    // Typ (db: IdTypMaj) - Typ)
    typMajetku?: AFTypMajetku

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Doklad faktury (db: IdDoklFak) - Doklad faktury)
    doklFak?: AFFakturaPrijata

    // Dodavatel (db: IdFirmyDod) - Dodavatel)
    dodavatel?: AFAdresar

    // Výrobce (db: IdFirmyVyr) - Výrobce)
    vyrobce?: AFAdresar

    // Prim.účet (db: IdPrimUcet) - Primární účet)
    primarniUcet?: AFUcet

    // Protiúč.zař. (db: IdProtiUcetZar) - Protiúčet zařazení)
    protiUcetZarazeni?: AFUcet

    // Účet opr. (db: IdOpravUcet) - Účet oprávek)
    opravnyUcet?: AFUcet

    // Účet odp. (db: IdOdpUcet) - Účet odpisu)
    odpisovyUcet?: AFUcet

    // Účet zůstatku vyřazení (db: IdZustVyrazUcet) - Účet zůstatku vyřazení)
    zustVyrazUcet?: AFUcet

    // Uživatel (db: IdUziv) - Uživatel)
    uzivatel?: any


    // Daňové odpisy (type: DANOVY_ODPIS) - danove-odpisy)
    danoveOdpisy?: Promise<AFDanovyOdpis[]>

    // Přílohy (type: PRILOHA) - prilohy)
    prilohy?: Promise<AFPriloha[]>

    // Účetní odpisy (type: UCETNI_ODPIS) - ucetni-odpisy)
    ucetniOdpisy?: Promise<AFUcetniOdpis[]>

    // Události (type: MAJETEK_UDALOST) - majetek-udalosti)
    majetekUdalosti?: Promise<AFMajetekUdalost[]>

    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

    // Zápůjčky/odpovědná osoba (type: ZAPUJCKA) - zapujcky)
    zapujcky?: Promise<AFZapujcka[]>

}