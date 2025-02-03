import { AFEntity } from '../AFEntity'
import { AFUcet } from './AFUcet'
import { AFMena } from './AFMena'
import { AFUcetniObdobi } from './AFUcetniObdobi'


export class AFStavUctu extends AFEntity {

    // Účet (db: undefined) - Účet)
    ucet?: AFUcet

    // Měna (db: undefined) - Měna)
    mena?: AFMena

    // Účetní období (db: undefined) - Účetní období)
    ucetniObdobi?: AFUcetniObdobi

    // Název účtu (db: undefined) - Název účtu)
    nazevUctu?: string

    // Počátek (db: undefined) - Počátek)
    pocatek?: Big

    // Počátek MD (db: undefined) - Počátek MD)
    pocatekMD?: Big

    // Počátek Dal (db: undefined) - Počátek Dal)
    pocatekDal?: Big

    // Zůstatek MD (db: undefined) - Zůstatek MD)
    zustatekMD?: Big

    // Zůstatek Dal (db: undefined) - Zůstatek Dal)
    zustatekDal?: Big

    // Obrat MD 01 (db: undefined) - Obrat MD 01)
    obratMd01?: Big

    // Obrat DAL 01 (db: undefined) - Obrat DAL 01)
    obratDal01?: Big

    // Stav MD 01 (db: undefined) - Stav MD 01)
    stavMd01?: Big

    // Stav DAL 01 (db: undefined) - Stav DAL 01)
    stavDal01?: Big

    // Stav 01 (db: undefined) - Stav 01)
    stav01?: Big

    // Obrat MD 02 (db: undefined) - Obrat MD 02)
    obratMd02?: Big

    // Obrat DAL 02 (db: undefined) - Obrat DAL 02)
    obratDal02?: Big

    // Stav MD 02 (db: undefined) - Stav MD 02)
    stavMd02?: Big

    // Stav DAL 02 (db: undefined) - Stav DAL 02)
    stavDal02?: Big

    // Stav 02 (db: undefined) - Stav 02)
    stav02?: Big

    // Obrat MD 03 (db: undefined) - Obrat MD 03)
    obratMd03?: Big

    // Obrat DAL 03 (db: undefined) - Obrat DAL 03)
    obratDal03?: Big

    // Stav MD 03 (db: undefined) - Stav MD 03)
    stavMd03?: Big

    // Stav DAL 03 (db: undefined) - Stav DAL 03)
    stavDal03?: Big

    // Stav 03 (db: undefined) - Stav 03)
    stav03?: Big

    // Obrat MD 04 (db: undefined) - Obrat MD 04)
    obratMd04?: Big

    // Obrat DAL 04 (db: undefined) - Obrat DAL 04)
    obratDal04?: Big

    // Stav MD 04 (db: undefined) - Stav MD 04)
    stavMd04?: Big

    // Stav DAL 04 (db: undefined) - Stav DAL 04)
    stavDal04?: Big

    // Stav 04 (db: undefined) - Stav 04)
    stav04?: Big

    // Obrat MD 05 (db: undefined) - Obrat MD 05)
    obratMd05?: Big

    // Obrat DAL 05 (db: undefined) - Obrat DAL 05)
    obratDal05?: Big

    // Stav MD 05 (db: undefined) - Stav MD 05)
    stavMd05?: Big

    // Stav DAL 05 (db: undefined) - Stav DAL 05)
    stavDal05?: Big

    // Stav 05 (db: undefined) - Stav 05)
    stav05?: Big

    // Obrat MD 06 (db: undefined) - Obrat MD 06)
    obratMd06?: Big

    // Obrat DAL 06 (db: undefined) - Obrat DAL 06)
    obratDal06?: Big

    // Stav MD 06 (db: undefined) - Stav MD 06)
    stavMd06?: Big

    // Stav DAL 06 (db: undefined) - Stav DAL 06)
    stavDal06?: Big

    // Stav 06 (db: undefined) - Stav 06)
    stav06?: Big

    // Obrat MD 07 (db: undefined) - Obrat MD 07)
    obratMd07?: Big

    // Obrat DAL 07 (db: undefined) - Obrat DAL 07)
    obratDal07?: Big

    // Stav MD 07 (db: undefined) - Stav MD 07)
    stavMd07?: Big

    // Stav DAL 07 (db: undefined) - Stav DAL 07)
    stavDal07?: Big

    // Stav 07 (db: undefined) - Stav 07)
    stav07?: Big

    // Obrat MD 08 (db: undefined) - Obrat MD 08)
    obratMd08?: Big

    // Obrat DAL 08 (db: undefined) - Obrat DAL 08)
    obratDal08?: Big

    // Stav MD 08 (db: undefined) - Stav MD 08)
    stavMd08?: Big

    // Stav DAL 08 (db: undefined) - Stav DAL 08)
    stavDal08?: Big

    // Stav 08 (db: undefined) - Stav 08)
    stav08?: Big

    // Obrat MD 09 (db: undefined) - Obrat MD 09)
    obratMd09?: Big

    // Obrat DAL 09 (db: undefined) - Obrat DAL 09)
    obratDal09?: Big

    // Stav MD 09 (db: undefined) - Stav MD 09)
    stavMd09?: Big

    // Stav DAL 09 (db: undefined) - Stav DAL 09)
    stavDal09?: Big

    // Stav 09 (db: undefined) - Stav 09)
    stav09?: Big

    // Obrat MD 10 (db: undefined) - Obrat MD 10)
    obratMd10?: Big

    // Obrat DAL 10 (db: undefined) - Obrat DAL 10)
    obratDal10?: Big

    // Stav MD 10 (db: undefined) - Stav MD 10)
    stavMd10?: Big

    // Stav DAL 10 (db: undefined) - Stav DAL 10)
    stavDal10?: Big

    // Stav 10 (db: undefined) - Stav 10)
    stav10?: Big

    // Obrat MD 11 (db: undefined) - Obrat MD 11)
    obratMd11?: Big

    // Obrat DAL 11 (db: undefined) - Obrat DAL 11)
    obratDal11?: Big

    // Stav MD 11 (db: undefined) - Stav MD 11)
    stavMd11?: Big

    // Stav DAL 11 (db: undefined) - Stav DAL 11)
    stavDal11?: Big

    // Stav 11 (db: undefined) - Stav 11)
    stav11?: Big

    // Obrat MD 12 (db: undefined) - Obrat MD 12)
    obratMd12?: Big

    // Obrat DAL 12 (db: undefined) - Obrat DAL 12)
    obratDal12?: Big

    // Stav MD 12 (db: undefined) - Stav MD 12)
    stavMd12?: Big

    // Stav DAL 12 (db: undefined) - Stav DAL 12)
    stavDal12?: Big

    // Stav 12 (db: undefined) - Stav 12)
    stav12?: Big

    // Obrat MD 13 (db: undefined) - Obrat MD 13)
    obratMd13?: Big

    // Obrat DAL 13 (db: undefined) - Obrat DAL 13)
    obratDal13?: Big

    // Stav MD 13 (db: undefined) - Stav MD 13)
    stavMd13?: Big

    // Stav DAL 13 (db: undefined) - Stav DAL 13)
    stavDal13?: Big

    // Stav 13 (db: undefined) - Stav 13)
    stav13?: Big

    // Obrat MD 14 (db: undefined) - Obrat MD 14)
    obratMd14?: Big

    // Obrat DAL 14 (db: undefined) - Obrat DAL 14)
    obratDal14?: Big

    // Stav MD 14 (db: undefined) - Stav MD 14)
    stavMd14?: Big

    // Stav DAL 14 (db: undefined) - Stav DAL 14)
    stavDal14?: Big

    // Stav 14 (db: undefined) - Stav 14)
    stav14?: Big

    // Obrat MD 15 (db: undefined) - Obrat MD 15)
    obratMd15?: Big

    // Obrat DAL 15 (db: undefined) - Obrat DAL 15)
    obratDal15?: Big

    // Stav MD 15 (db: undefined) - Stav MD 15)
    stavMd15?: Big

    // Stav DAL 15 (db: undefined) - Stav DAL 15)
    stavDal15?: Big

    // Stav 15 (db: undefined) - Stav 15)
    stav15?: Big

    // Obrat MD 16 (db: undefined) - Obrat MD 16)
    obratMd16?: Big

    // Obrat DAL 16 (db: undefined) - Obrat DAL 16)
    obratDal16?: Big

    // Stav MD 16 (db: undefined) - Stav MD 16)
    stavMd16?: Big

    // Stav DAL 16 (db: undefined) - Stav DAL 16)
    stavDal16?: Big

    // Stav 16 (db: undefined) - Stav 16)
    stav16?: Big

    // Obrat MD 17 (db: undefined) - Obrat MD 17)
    obratMd17?: Big

    // Obrat DAL 17 (db: undefined) - Obrat DAL 17)
    obratDal17?: Big

    // Stav MD 17 (db: undefined) - Stav MD 17)
    stavMd17?: Big

    // Stav DAL 17 (db: undefined) - Stav DAL 17)
    stavDal17?: Big

    // Stav 17 (db: undefined) - Stav 17)
    stav17?: Big

    // Obrat MD 18 (db: undefined) - Obrat MD 18)
    obratMd18?: Big

    // Obrat DAL 18 (db: undefined) - Obrat DAL 18)
    obratDal18?: Big

    // Stav MD 18 (db: undefined) - Stav MD 18)
    stavMd18?: Big

    // Stav DAL 18 (db: undefined) - Stav DAL 18)
    stavDal18?: Big

    // Stav 18 (db: undefined) - Stav 18)
    stav18?: Big

    // Obrat MD 19 (db: undefined) - Obrat MD 19)
    obratMd19?: Big

    // Obrat DAL 19 (db: undefined) - Obrat DAL 19)
    obratDal19?: Big

    // Stav MD 19 (db: undefined) - Stav MD 19)
    stavMd19?: Big

    // Stav DAL 19 (db: undefined) - Stav DAL 19)
    stavDal19?: Big

    // Stav 19 (db: undefined) - Stav 19)
    stav19?: Big

    // Obrat MD 20 (db: undefined) - Obrat MD 20)
    obratMd20?: Big

    // Obrat DAL 20 (db: undefined) - Obrat DAL 20)
    obratDal20?: Big

    // Stav MD 20 (db: undefined) - Stav MD 20)
    stavMd20?: Big

    // Stav DAL 20 (db: undefined) - Stav DAL 20)
    stavDal20?: Big

    // Stav 20 (db: undefined) - Stav 20)
    stav20?: Big

    // Obrat MD 21 (db: undefined) - Obrat MD 21)
    obratMd21?: Big

    // Obrat DAL 21 (db: undefined) - Obrat DAL 21)
    obratDal21?: Big

    // Stav MD 21 (db: undefined) - Stav MD 21)
    stavMd21?: Big

    // Stav DAL 21 (db: undefined) - Stav DAL 21)
    stavDal21?: Big

    // Stav 21 (db: undefined) - Stav 21)
    stav21?: Big

    // Obrat MD 22 (db: undefined) - Obrat MD 22)
    obratMd22?: Big

    // Obrat DAL 22 (db: undefined) - Obrat DAL 22)
    obratDal22?: Big

    // Stav MD 22 (db: undefined) - Stav MD 22)
    stavMd22?: Big

    // Stav DAL 22 (db: undefined) - Stav DAL 22)
    stavDal22?: Big

    // Stav 22 (db: undefined) - Stav 22)
    stav22?: Big

    // Obrat MD 23 (db: undefined) - Obrat MD 23)
    obratMd23?: Big

    // Obrat DAL 23 (db: undefined) - Obrat DAL 23)
    obratDal23?: Big

    // Stav MD 23 (db: undefined) - Stav MD 23)
    stavMd23?: Big

    // Stav DAL 23 (db: undefined) - Stav DAL 23)
    stavDal23?: Big

    // Stav 23 (db: undefined) - Stav 23)
    stav23?: Big


}