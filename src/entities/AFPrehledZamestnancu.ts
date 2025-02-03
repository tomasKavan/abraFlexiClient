import { AFEntity } from '../AFEntity'
import { AFOsoba } from './AFOsoba'
import { AFPracovniPomer } from './AFPracovniPomer'
import { AFTypPracovnihoPomeru } from './AFTypPracovnihoPomeru'


export class AFPrehledZamestnancu extends AFEntity {

    // ID (db: undefined) - ID)
    idPrehledZamestnancu?: number

    // Rok (db: undefined) - Rok)
    rok?: number

    // Osobní číslo (db: undefined) - Osobní číslo)
    osbCis?: string

    // Příjmení a jméno (db: undefined) - Příjmení a jméno)
    jmeno?: string

    // Funkce (db: undefined) - Funkce)
    funkce?: string

    // Datum narození (db: undefined) - Datum narození)
    datNaroz?: Date

    // Odpočet dětí (db: undefined) - Odpočet dětí)
    odpocetDeti?: number

    // Počátek prac.poměru (db: undefined) - Počátek prac.poměru)
    zacatek?: Date

    // Konec prac.poměru (db: undefined) - Konec prac.poměru)
    konecPomeru?: Date

    // Konec zkušební doby (db: undefined) - Konec zkušební doby)
    konecZkusDoby?: Date

    // Konec určité doby (db: undefined) - Konec určité doby)
    konecUrciteDoby?: Date

    // Úvazek hodin/týden (db: undefined) - Úvazek hodin/týden)
    uvazHodTydne?: Big

    // Úvazek koeficient (db: undefined) - Úvazek koeficient)
    uvazKoef?: Big

    // Dovolená počátek (hod) (db: undefined) - Dovolená počátek (hod))
    dovolPocatek?: Big

    // Čerpaná dovolená od počátku roku (hod) (db: undefined) - Čerpaná dovolená od počátku roku (hod))
    dovolVybrano?: Big

    // Dovolená zbývá (hod) (db: undefined) - Dovolená zbývá (hod))
    dovolZbyva?: Big

    // Prac.právní průměr (db: undefined) - Prac.právní průměr)
    pracPravPrum?: Big

    // Odpracovaná doba (db: undefined) - Odpracovaná doba)
    dobaOdpr?: Big

    // Osoba (db: undefined) - Osoba)
    osoba?: AFOsoba

    // Pracovní poměr (db: undefined) - Pracovní poměr)
    pracPom?: AFPracovniPomer

    // Typ pracovního poměru (db: undefined) - Typ pracovního poměru)
    typPracPom?: AFTypPracovnihoPomeru


}