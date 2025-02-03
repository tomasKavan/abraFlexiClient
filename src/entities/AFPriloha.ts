import { AFEntity } from '../AFEntity'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFNastaveni } from './AFNastaveni'
import { AFCenik } from './AFCenik'
import { AFAdresar } from './AFAdresar'
import { AFKontakt } from './AFKontakt'
import { AFZakazka } from './AFZakazka'
import { AFSmlouva } from './AFSmlouva'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka'
import { AFStrom } from './AFStrom'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFPrilohaTypK {
  logo = 'typPrilohy.logo', //Logo
  podRaz = 'typPrilohy.podRaz', //Podpis a razítko
  obrazek = 'typPrilohy.obrazek', //Obrázková příloha
  odkaz = 'typPrilohy.odkaz', //URL odkaz na internet nebo soubor
  ostatni = 'typPrilohy.ostatni', //Blíže neurčený typ přílohy
}


export class AFPriloha extends AFEntity {

    // ID (db: IdPriloha) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Název souboru (db: NazSoub) - Název souboru)
    nazSoub?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Typ dat (db: ContentType) - Typ dat)
    contentType?: string

    // Typ přílohy (db: TypK) - Typ přílohy)
    typK?: any

    // Přiložit (db: Prilozit) - Přiložit)
    prilozit?: boolean

    // Poměr stran (db: PictureRate) - Poměr stran obrázku)
    pictureRate?: Big

    // Velikost (db: DataSize) - Velikost)
    dataSize?: number

    // Export na E-shop (db: ExportNaEshop) - Export na E-shop)
    exportNaEshop?: boolean

    // Odkaz (db: Link) - Odkaz)
    link?: string

    // Odkaz na obrázek (db: LinkPicture) - Odkaz na obrázek)
    linkPicture?: boolean

    // Hlavní příloha (db: MainAttachment) - Hlavní příloha)
    mainAttachment?: boolean

    // Otisk dat přílohy (MD5 součet) (db: DataHash) - Otisk dat přílohy (MD5 součet))
    dataHash?: string

    // Šířka obrázku (db: PictureWidth) - Šířka obrázku)
    pictureWidth?: number

    // Výška obrázku (db: PictureHeight) - Výška obrázku)
    pictureHeight?: number

    // Uživatel (db: IdUziv) - Uživatel)
    uzivatel?: any

    // Doklad faktury (db: IdDoklFak) - Doklad faktury)
    doklFak?: any

    // Interní doklad (db: IdDoklInt) - Interní doklad)
    doklInt?: any

    // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
    doklObch?: any

    // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
    doklSklad?: AFSkladovyPohyb

    // Nastavení (db: IdNastav) - Nastavení)
    nastaveni?: AFNastaveni

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Adresář (db: IdAdresar) - Adresář)
    adresar?: AFAdresar

    // Kontakt (db: IdKontakt) - Kontakt)
    kontakt?: AFKontakt

    // Konektor (db: IdKonektor) - Konektor)
    konektor?: any

    // Report (db: IdReport) - Report)
    report?: any

    // Zakázka (db: IdZakazky) - Zakázka)
    zakazka?: AFZakazka

    // Smlouva (db: IdSmlouvy) - Smlouva)
    smlouva?: AFSmlouva

    // Pol. smlouvy (db: IdPolSml) - Pol. smlouvy)
    polSmlouvy?: AFSmlouvaPolozka

    // Strom (db: IdUzel) - Strom)
    uzel?: AFStrom

    // Požadavek (db: IdPozadavek) - Požadavek)
    pozadavek?: any

    // Událost (db: IdAdrUdalost) - Událost)
    adrUdalost?: AFUdalost

    // Obsah (db: undefined) - Obsah)
    content?: Buffer


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}