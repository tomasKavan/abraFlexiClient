import { AFEntity } from '../AFEntity'
import { AFMena } from './AFMena'
import { AFUcet } from './AFUcet'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFUcetniObdobi } from './AFUcetniObdobi'


export class AFObrat extends AFEntity {

    // ID (db: IdObrat) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Měsíc (db: Obdobi) - Měsíc)
    obdobi?: number

    // Rok (db: Rok) - Rok)
    rok?: number

    // Obrat DAL (db: ObrDal) - Obrat DAL)
    obrDal?: Big

    // Obrat MD (db: ObrMd) - Obrat MD)
    obrMd?: Big

    // Obrat DAL - původní (db: ObrDalBck) - Obrat DAL - původní)
    obrDalBck?: Big

    // Obrat MD - původní (db: ObrMdBck) - Obrat MD - původní)
    obrMdBck?: Big

    // Uživatelská hodnota (db: UzivNastav) - Uživatelská hodnota)
    uzivNastav?: boolean

    // Kalendářní měsíc (db: date_trunc('month',to_date(rok || '-' || to_char(obdobi, '00'), 'YYYY-MM'))) - Kalendářní měsíc)
    rokMesic?: Date

    // Měna (db: IdMeny) - Měna)
    mena?: AFMena

    // Účet (db: IdUcet) - Účet)
    ucet?: AFUcet

    // Středisko (db: IdStred) - Středisko)
    stredisko?: AFStredisko

    // Činnost (db: IdCinnost) - Činnost)
    cinnost?: AFCinnost

    // Účetní období (db: IdUcetObdobi) - Účetní období)
    ucetniObdobi?: AFUcetniObdobi


}