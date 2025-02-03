import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek'
import { AFZakazka } from './AFZakazka'
import { AFStalaMzdovaSlozka } from './AFStalaMzdovaSlozka'
import { AFSrazka } from './AFSrazka'
import { AFNepritomnost } from './AFNepritomnost'
import { AFMzdovaSlozka } from './AFMzdovaSlozka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFMzdovaSlozkaTypSlozkyK {
  kopie = 'typSlozky.kopie', //Položka vznikla kopií z jiného seznamu
  vstup = 'typSlozky.vstup', //Složku zadá uživatel
  vypocet = 'typSlozky.vypocet', //Složka je automaticky generována
  info = 'typSlozky.info', //Info
  dlouhodobNep = 'typSlozky.dlouhodobNep', //Dlouhodobá nepřítomnost
  inicializace = 'typSlozky.inicializace', //Inicializační složka
}

export enum AFMzdovaSlozkaSkupSlozkyK {
  doba = 'skupinaSlozky.doba', //Fond pracovní doby
  nepritomnost = 'skupinaSlozky.nepritomnost', //Nepřítomnost
  nepritNemoc = 'skupinaSlozky.nepritNemoc', //Nepřítomnost - nemoc
  nepritKaran = 'skupinaSlozky.nepritKaran', //Nepřítomnost - karanténa
  nepritNeplac = 'skupinaSlozky.nepritNeplac', //Nepřítomnost - neplacená
  nepritVolnoPlac = 'skupinaSlozky.nepritVolnoPlac', //Nepřítomnost - volno placené
  dovolena = 'skupinaSlozky.dovolena', //Dovolená
  zakladMzda = 'skupinaSlozky.zakladMzda', //Základní mzda
  odmeny = 'skupinaSlozky.odmeny', //Odměny
  priplatky = 'skupinaSlozky.priplatky', //Příplatky
  ostatNahrad = 'skupinaSlozky.ostatNahrad', //Ostatní náhrady
  benefity = 'skupinaSlozky.benefity', //Benefity
  prispevky = 'skupinaSlozky.prispevky', //Příspěvky
  hrubaMzda = 'skupinaSlozky.hrubaMzda', //Hrubá mzda
  socPoj = 'skupinaSlozky.socPoj', //Sociální pojištění
  zdravPoj = 'skupinaSlozky.zdravPoj', //Zdravotní pojištění
  dan = 'skupinaSlozky.dan', //Daň
  danSleva = 'skupinaSlozky.danSleva', //Daň - sleva
  nemocNahrad = 'skupinaSlozky.nemocNahrad', //Náhrady nemoc
  srazky = 'skupinaSlozky.srazky', //Srážky
  zaloha = 'skupinaSlozky.zaloha', //Záloha
  vyplata = 'skupinaSlozky.vyplata', //Výplata
  duchod = 'skupinaSlozky.duchod', //Důchod
  vyneti = 'skupinaSlozky.vyneti', //Vynětí
  ispvFirma = 'skupinaSlozky.ispvFirma', //ISPV - firma
  ispvZamestnanec = 'skupinaSlozky.ispvZamestnanec', //ISPV - zaměstnanec
}


export class AFMzdovaSlozka extends AFEntity {

    // ID (db: IdMzdSloz) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Pořadí (db: CisRad) - Pořadí)
    cisRad?: number

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Typ složky (db: TypSlozkyK) - Typ složky)
    typSlozkyK?: any

    // Skupina složky (db: SkupSlozkyK) - Skupina složky)
    skupSlozkyK?: any

    // Rok (db: Rok) - Rok)
    rok?: number

    // Měsíc (db: Mesic) - Měsíc)
    mesic?: number

    // Počáteční datum (db: DatumOd) - Počáteční datum)
    datumOd?: Date

    // Koncové datum (db: DatumDo) - Koncové datum)
    datumDo?: Date

    // Dny pracovní (db: DnyPrac) - Dny pracovní)
    dnyPrac?: Big

    // Dny kalendářní (db: DnyKal) - Dny kalendářní)
    dnyKal?: Big

    // Dny kalendářní skutečné (db: DnyKalReal) - Dny kalendářní skutečné)
    dnyKalReal?: Big

    // Dny ve svátek (db: DnySvatek) - Dny ve svátek)
    dnySvatek?: Big

    // Hodiny (db: Hodiny) - Hodiny)
    hodiny?: Big

    // Hodiny svátek (db: HodinySvatek) - Hodiny svátek)
    hodinySvatek?: Big

    // Částka za hodinu (db: CastkaHod) - Částka za hodinu)
    castkaHod?: Big

    // Částka za den (db: CastkaDen) - Částka za den)
    castkaDen?: Big

    // Procento / konstanta (db: ProcMzd) - Procento / konstanta)
    procMzd?: Big

    // Základ (db: ZaklMzd) - Základ)
    zaklMzd?: Big

    // Základ je krácen úvazkem (db: ZaklJeKracen) - Základ je krácen úvazkem)
    zaklJeKracen?: boolean

    // Částka (db: CastMzd) - Částka)
    castMzd?: Big

    // Uživatelská změna částky (db: ZmenaCastMzd) - Uživatelská změna částky)
    zmenaCastMzd?: boolean

    // Uživatelská změna času (db: ZmenaCasu) - Uživatelská změna času)
    zmenaCasu?: boolean

    // Odměna / prémie je za [měsíce] (db: PocetMes) - Odměna / prémie je za [měsíce])
    pocetMes?: number

    // Číslo dokladu (pro nemoc) (db: CisDoklNem) - Číslo dokladu (pro nemoc))
    cisDoklNem?: number

    // Denní průměr (db: PrumNaDenNem) - Denní průměr)
    prumNaDenNem?: Big

    // Hodinový průměr (db: PrumNaHodNem) - Hodinový průměr)
    prumNaHodNem?: Big

    // Doplatek do zdravotního pojištění (db: DoplatZdravK) - Doplatek do zdravotního pojištění)
    doplatZdravK?: any

    // Pracovní (db: Pracovni) - Pracovní)
    pracovni?: boolean

    // Datum dodání dokladu (db: DatumDoklad) - Datum dodání dokladu)
    datumDoklad?: Date

    // Rok platby (db: RokPlatba) - Rok platby)
    rokPlatba?: number

    // Měsíc platby (db: MesicPlatba) - Měsíc platby)
    mesicPlatba?: number

    // Částka přesně (db: DoubleX) - Částka přesně)
    doubleX?: Big

    // Osoba (db: IdOsoba) - Osoba)
    osoba?: AFOsobaHlavicka

    // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
    pracPom?: AFPracovniPomerHlavicka

    // Mzdová složka (db: IdCisMzdSloz) - Mzdová složka)
    cisMzdSloz?: AFCiselnikMzdovychSlozek

    // Zakázka (db: IdZakazka) - Zakázka)
    zakazka?: AFZakazka

    // Stálá mzdová složka (db: IdStalaMzdSloz) - Stálá mzdová složka)
    stalaMzdSloz?: AFStalaMzdovaSlozka

    // Srážka (db: IdSrazka) - Srážka)
    srazka?: AFSrazka

    // Nepřítomnost (db: IdNepritomnost) - Nepřítomnost)
    nepritomnost?: AFNepritomnost

    // Odměna (db: IdOdmena) - Odměna)
    odmena?: AFMzdovaSlozka


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}