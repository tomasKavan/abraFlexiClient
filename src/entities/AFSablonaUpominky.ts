import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFSablonaUpominkyTypSablonyK {
  prvniUpominka = 'typSablony.prvniUpominka', //První upomínka
  druhaUpominka = 'typSablony.druhaUpominka', //Druhá upomínka
  pokusOSmir = 'typSablony.pokusOSmir', //Pokus o smír
  inventarizace = 'typSablony.inventarizace', //Inventarizace
}


export class AFSablonaUpominky extends AFEntity {

    // ID (db: IdSablony) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Datum (db: Datum) - Datum)
    datum?: string

    // Datum EN (db: Datuma) - Datum EN)
    datuma?: string

    // Datum DE (db: Datumb) - Datum DE)
    datumb?: string

    // Datum FR (db: Datumc) - Datum FR)
    datumc?: string

    // Hlavička dopisu (db: Hlavicka) - Hlavička dopisu)
    hlavicka?: string

    // Hlavička dopisu EN (db: Hlavickaa) - Hlavička dopisu EN)
    hlavickaa?: string

    // Hlavička dopisu DE (db: Hlavickab) - Hlavička dopisu DE)
    hlavickab?: string

    // Hlavička dopisu FR (db: Hlavickac) - Hlavička dopisu FR)
    hlavickac?: string

    // Odběratel (db: Odberatel) - Odběratel)
    odberatel?: string

    // Odběratel EN (db: Odberatela) - Odběratel EN)
    odberatela?: string

    // Odběratel DE (db: Odberatelb) - Odběratel DE)
    odberatelb?: string

    // Odběratel FR (db: Odberatelc) - Odběratel FR)
    odberatelc?: string

    // Úvodní text (db: Uvod) - Úvodní text)
    uvod?: string

    // Úvodní text EN (db: Uvoda) - Úvodní text EN)
    uvoda?: string

    // Úvodní text DE (db: Uvodb) - Úvodní text DE)
    uvodb?: string

    // Úvodní text FR (db: Uvodc) - Úvodní text FR)
    uvodc?: string

    // Text nad fakturami (db: TextNad) - Text nad fakturami)
    textNad?: string

    // Text nad fakturami EN (db: TextNada) - Text nad fakturami EN)
    textNada?: string

    // Text nad fakturami DE (db: TextNadb) - Text nad fakturami DE)
    textNadb?: string

    // Text nad fakturami FR (db: TextNadc) - Text nad fakturami FR)
    textNadc?: string

    // Text pod fakturami (db: TextPod) - Text pod fakturami)
    textPod?: string

    // Text pod fakturami EN (db: TextPoda) - Text pod fakturami EN)
    textPoda?: string

    // Text pod fakturami DE (db: TextPodb) - Text pod fakturami DE)
    textPodb?: string

    // Text pod fakturami FR (db: TextPodc) - Text pod fakturami FR)
    textPodc?: string

    // Konec dopisu (db: Zapati) - Konec dopisu)
    zapati?: string

    // Konec dopisu EN (db: Zapatia) - Konec dopisu EN)
    zapatia?: string

    // Konec dopisu DE (db: Zapatib) - Konec dopisu DE)
    zapatib?: string

    // Konec dopisu FR (db: Zapatic) - Konec dopisu FR)
    zapatic?: string

    // Typ šablony (db: TypSablonyK) - Typ šablony)
    typSablonyK?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}