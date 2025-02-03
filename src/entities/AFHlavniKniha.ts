import { AFEntity } from '../AFEntity'
import { AFUcet } from './AFUcet'
import { AFMena } from './AFMena'
import { AFUcetniObdobi } from './AFUcetniObdobi'


export class AFHlavniKniha extends AFEntity {

    // ID (db: undefined) - ID)
    idObratovaPredvaha?: number

    // Účet (db: undefined) - Účet)
    ucet?: AFUcet

    // Měna (db: undefined) - Měna)
    mena?: AFMena

    // Účetní období (db: undefined) - Účetní období)
    ucetniObdobi?: AFUcetniObdobi

    // Název účtu (db: undefined) - Název účtu)
    nazevUctu?: string

    // Počátek vše (db: undefined) - Počátek vše)
    pocatek?: Big

    // Počátek MD za vybr. obd. (db: undefined) - Počátek MD za vybr. obd.)
    pocatekMd?: Big

    // Počátek DAL za vybr. obd. (db: undefined) - Počátek DAL za vybr. obd.)
    pocatekDal?: Big

    // Počátek za vybr. obd. (db: undefined) - Počátek za vybr. obd.)
    pocatekMesic?: Big

    // Zůstatek za vybr. obd. (db: undefined) - Zůstatek za vybr. obd.)
    zustatek?: Big

    // Zůstatek MD za vybr. obd. (db: undefined) - Zůstatek MD za vybr. obd.)
    zustatekMd?: Big

    // Zůstatek DAL za vybr. obd. (db: undefined) - Zůstatek DAL za vybr. obd.)
    zustatekDal?: Big

    // Obrat MD vše (db: undefined) - Obrat MD vše)
    obratMdVse?: Big

    // Obrat DAL vše (db: undefined) - Obrat DAL vše)
    obratDalVse?: Big

    // Obrat MD za vybr. obd. (db: undefined) - Obrat MD za vybrané období)
    obratMdVyb?: Big

    // Obrat DAL za vybr. obd. (db: undefined) - Obrat DAL za vybrané období)
    obratDalVyb?: Big


}