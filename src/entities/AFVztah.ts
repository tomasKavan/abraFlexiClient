import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFVztahCsszRodVztahKodK {
  PL = 'csszRodVztahKod.PL', //Příbuzný v linii přímé (otec, matka, syn, dcera, prarodič, vnuk, vnučka)
  MA = 'csszRodVztahKod.MA', //Manžel/ka pojištěnce
  RP = 'csszRodVztahKod.RP', //Registrovaný/á partner/partnerka
  SDO = 'csszRodVztahKod.SDO', //Jiné fyzické osoby ve společné domácnosti
  SO = 'csszRodVztahKod.SO', //Sourozenec pojištěnce (bratr, sestra)
  TCH = 'csszRodVztahKod.TCH', //Rodič manžela/manželky nebo registrovaného partnera/partnerky (tchán, tchýně)
  JIN = 'csszRodVztahKod.JIN', //Jiný vztah
}

export enum AFVztahCsszVztahKodK {
  1 = 'csszVztahKod.1', //manžel/ka, registrovaný partner/ka
  2 = 'csszVztahKod.2', //otec/matka
  3 = 'csszVztahKod.3', //syn/dcera
  4 = 'csszVztahKod.4', //bratr/sestra
  5 = 'csszVztahKod.5', //manžel/ka, registrovaný partner/ka bratra/sestry
  6 = 'csszVztahKod.6', //druh/družka bratra/sestry
  7 = 'csszVztahKod.7', //prarodič
  8 = 'csszVztahKod.8', //vnuk/vnučka
  9 = 'csszVztahKod.9', //tchán/tchyně
  10 = 'csszVztahKod.10', //#csszVztahKod.10
  11 = 'csszVztahKod.11', //#csszVztahKod.11
  12 = 'csszVztahKod.12', //#csszVztahKod.12
  13 = 'csszVztahKod.13', //#csszVztahKod.13
  14 = 'csszVztahKod.14', //#csszVztahKod.14
  15 = 'csszVztahKod.15', //#csszVztahKod.15
  16 = 'csszVztahKod.16', //#csszVztahKod.16
  17 = 'csszVztahKod.17', //#csszVztahKod.17
  18 = 'csszVztahKod.18', //#csszVztahKod.18
  19 = 'csszVztahKod.19', //#csszVztahKod.19
  20 = 'csszVztahKod.20', //#csszVztahKod.20
  21 = 'csszVztahKod.21', //druh/družka syna/dcery
  22 = 'csszVztahKod.22', //druh/družka prarodiče
  23 = 'csszVztahKod.23', //druh/družka vnuka/vnučky
  24 = 'csszVztahKod.24', //druh/družka tchána/tchýně
  25 = 'csszVztahKod.25', //druh/družka synovce/neteře
  26 = 'csszVztahKod.26', //druh/družka strýce/tety
  27 = 'csszVztahKod.27', //druh/družka ošetřované osoby
  28 = 'csszVztahKod.28', //jiná fyzická osoba žijící s ošetřovanou osobou v domácnosti
  29 = 'csszVztahKod.29', //jiný vztah
}


export class AFVztah extends AFEntity {

    // ID (db: Idvztah) - ID)
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

    // Zobrazovat (db: Show) - Zobrazovat)
    visible?: boolean

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: Date

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: Date

    // Rodinný vztah - kód (db: CsszRodVztahKodK) - Rodinný vztah - kód)
    csszRodVztahKodK?: any

    // Vztah - kód (db: CsszVztahKodK) - Vztah - kód)
    csszVztahKodK?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}