import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFCertifikatUcelCertK {
  osobni = 'ucelCertK.osobni', //Osobní certifikát
  eet = 'ucelCertK.eet', //Certifikát pro EET
  finbricks = 'ucelCertK.finbricks', //Privátní klíč pro Finbricks
}


export class AFCertifikat extends AFEntity {

    // ID (db: IdOsCert) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Poznámka (db: UzivNazev) - Poznámka)
    uzivNazev?: string

    // Název certifikátu (db: CertNazev) - Název certifikátu)
    certNazev?: string

    // Organizace certifikátu (db: CertOrgan) - Organizace certifikátu)
    certOrgan?: string

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: Date

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: Date

    // Uživatel (db: IdUzivatel) - Uživatel)
    uzivatel?: any

    // Účel certifikátu (db: UcelCertK) - Účel certifikátu)
    ucelCertK?: any


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}