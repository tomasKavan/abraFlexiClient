import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFCertifikacniAutorita extends AFEntity {

    // ID (db: IdAutCert) - ID)
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


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}