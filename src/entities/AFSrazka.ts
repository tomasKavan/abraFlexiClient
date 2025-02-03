import { AFEntity } from '../AFEntity'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek'
import { AFMzdyBankovniSpojeni } from './AFMzdyBankovniSpojeni'
import { AFTypZavazku } from './AFTypZavazku'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSrazkaTypSlozkyK {
  kopie = 'typSlozky.kopie', //Položka vznikla kopií z jiného seznamu
  vstup = 'typSlozky.vstup', //Složku zadá uživatel
  vypocet = 'typSlozky.vypocet', //Složka je automaticky generována
  info = 'typSlozky.info', //Info
  dlouhodobNep = 'typSlozky.dlouhodobNep', //Dlouhodobá nepřítomnost
  inicializace = 'typSlozky.inicializace', //Inicializační složka
}

export enum AFSrazkaSkupSlozkyK {
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

export enum AFSrazkaZpusobPlatbyK {
  ucet = 'zpusobPlatby.ucet', //Na účet
  adresa = 'zpusobPlatby.adresa', //Na adresu
  pokladna = 'zpusobPlatby.pokladna', //Pokladnou
}


export class AFSrazka extends AFEntity {

    // ID (db: IdSrazka) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Přednostní srážka (db: Prednostni) - Přednostní srážka)
    prednostni?: boolean

    // Pořadí srážky (db: Poradi) - Pořadí srážky)
    poradi?: number

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

    // Srážet od (db: SrazkaOd) - Srážet od)
    srazkaOd?: Date

    // Srážet do (db: SrazkaDo) - Srážet do)
    srazkaDo?: Date

    // Deponovat do (db: DeponovatDo) - Deponovat do)
    deponovatDo?: Date

    // Procento / konstanta (db: ProcMzd) - Procento / konstanta)
    procMzd?: Big

    // Způsob platby (db: ZpusobPlatbyK) - Způsob platby)
    zpusobPlatbyK?: any

    // Částka (db: Castka) - Částka)
    castka?: Big

    // Počáteční stav (db: Pocatek) - Počáteční stav)
    pocatek?: Big

    // Celkem (db: Celkem) - Celkem)
    celkem?: Big

    // Zbývá (db: Zbyva) - Zbývá)
    zbyva?: Big

    // K datu (db: Kdatu) - K datu)
    kdatu?: Date

    // Den splatnosti (db: Splatnost) - Den splatnosti)
    splatnost?: number

    // Osoba (db: IdOsoba) - Osoba)
    osoba?: AFOsobaHlavicka

    // Druh srážky (db: IdCisMzdSloz) - Druh srážky)
    cisMzdSloz?: AFCiselnikMzdovychSlozek

    // Bankovní spojení (db: IdBanSpoj) - Bankovní spojení)
    banSpoj?: AFMzdyBankovniSpojeni

    // Typ závazku (db: IdTypOstZav) - Typ závazku)
    typOstZav?: AFTypZavazku

    // Typ interního dokladu (db: IdTypIntDokl) - Typ interního dokladu)
    typIntDokl?: AFTypInternihoDokladu


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}