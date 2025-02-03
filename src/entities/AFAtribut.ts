import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFAdresar } from './AFAdresar'
import { AFTypAtributu } from './AFTypAtributu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


export class AFAtribut extends AFEntity {

    // ID (db: IdAtribut) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Logická hodnota (db: ValBoolean) - Logická hodnota)
    valBoolean?: boolean

    // Celé číslo (db: ValInteger) - Celé číslo)
    valInteger?: number

    // Desetinné číslo (db: ValNumeric) - Desetinné číslo)
    valNumeric?: Big

    // Řetězec (db: ValString) - Řetězec)
    valString?: string

    // Datum (db: ValDatCas) - Datum)
    valDatCas?: Date

    // Hodnota (db: Hodnota) - Hodnota)
    hodnota?: string

    // MJ (db: undefined) - MJ)
    mj?: string

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
    doklObch?: any

    // Doklad faktury (db: IdDoklFak) - Doklad faktury)
    doklFak?: any

    // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
    doklSklad?: AFSkladovyPohyb

    // Interní doklad (db: IdDoklInt) - Interní doklad)
    doklInt?: any

    // Adresář (db: IdAdresar) - Adresář)
    adresar?: AFAdresar

    // Typ atributu (db: IdTypAtribut) - Typ atributu)
    typAtributu?: AFTypAtributu


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}