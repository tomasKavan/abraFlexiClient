import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek'
import { AFStredisko } from './AFStredisko'
import { AFZakazka } from './AFZakazka'
import { AFMzdyBankovniSpojeni } from './AFMzdyBankovniSpojeni'
import { AFTypZavazku } from './AFTypZavazku'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFStalaMzdovaSlozkaTypSlozkyK {
  kopie = 'typSlozky.kopie', //Položka vznikla kopií z jiného seznamu
  vstup = 'typSlozky.vstup', //Složku zadá uživatel
  vypocet = 'typSlozky.vypocet', //Složka je automaticky generována
  info = 'typSlozky.info', //Info
  dlouhodobNep = 'typSlozky.dlouhodobNep', //Dlouhodobá nepřítomnost
  inicializace = 'typSlozky.inicializace', //Inicializační složka
}

export enum AFStalaMzdovaSlozkaSkupSlozkyK {
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


export class AFStalaMzdovaSlozka extends AFEntity {

    // ID (db: IdStalaMzdSloz) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

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

    // Počáteční datum (db: DatumOd) - Počáteční datum)
    datumOd?: Date

    // Koncové datum (db: DatumDo) - Koncové datum)
    datumDo?: Date

    // Částka za hodinu (db: CastkaHod) - Částka za hodinu)
    castkaHod?: Big

    // Částka za den (db: CastkaDen) - Částka za den)
    castkaDen?: Big

    // Procento / konstanta (db: ProcMzd) - Procento / konstanta)
    procMzd?: Big

    // Základ mzdy (db: ZaklMzd) - Základ mzdy)
    zaklMzd?: Big

    // Částka (db: CastMzd) - Částka)
    castMzd?: Big

    // Dny kalendářní (db: DnyKal) - Dny kalendářní)
    dnyKal?: Big

    // Dny pracovní (db: DnyPrac) - Dny pracovní)
    dnyPrac?: Big

    // Dny ve svátek (db: DnySvatek) - Dny ve svátek)
    dnySvatek?: Big

    // Hodiny (db: Hodiny) - Hodiny)
    hodiny?: Big

    // Hodiny svátek (db: HodinySvatek) - Hodiny svátek)
    hodinySvatek?: Big

    // Denní průměr (db: PrumNaDenNem) - Denní průměr)
    prumNaDenNem?: Big

    // Hodinový průměr (db: PrumNaHodNem) - Hodinový průměr)
    prumNaHodNem?: Big

    // Základ je krácen úvazkem (db: ZaklJeKracen) - Základ je krácen úvazkem)
    zaklJeKracen?: boolean

    // Počet měsíců za které složka platí (db: PocetMes) - Počet měsíců za které složka platí)
    pocetMes?: number

    // Podíl složky v měsíci (db: Podil) - Podíl složky v měsíci)
    podil?: Big

    // Typ výpočtu podílu (db: TypPodilK) - Typ výpočtu podílu)
    typPodilK?: any

    // Štítky (db: undefined) - Štítky)
    stitky?: string

    // Osoba (db: IdOsoba) - Osoba)
    osoba?: AFOsobaHlavicka

    // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
    pracPom?: AFPracovniPomerHlavicka

    // Mzdová složka (db: IdCisMzdSloz) - Mzdová složka)
    cisMzdSloz?: AFCiselnikMzdovychSlozek

    // Středisko (db: IdStredisko) - Středisko)
    stredisko?: AFStredisko

    // Zakázka (db: IdZakazka) - Zakázka)
    zakazka?: AFZakazka

    // Bankovní účet (db: IdBanSpoj) - Bankovní účet)
    banSpoj?: AFMzdyBankovniSpojeni

    // Typ závazku (db: IdTypOstZav) - Typ závazku)
    typOstZav?: AFTypZavazku

    // Typ int. dokladu (db: IdTypIntDokl) - Typ int. dokladu)
    typIntDokl?: AFTypInternihoDokladu


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}