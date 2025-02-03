import { AFEntity } from '../AFEntity'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFSkladovyPohybPolozka } from './AFSkladovyPohybPolozka'


export class AFVyrobniCislo extends AFEntity {

    // ID (db: Idvyrobnicislo) - ID)
    id?: number

    // Výrobní číslo (db: Kod) - Výrobní číslo)
    kod?: string

    // Ceník (db: IdCenik) - Ceník)
    cenik?: AFCenik

    // Sklad (db: IdSkladu) - Sklad)
    sklad?: AFSklad

    // Hlavička výrobního čísla (db: IdVyrobniCisloHlav) - Hlavička výrobního čísla)
    vyrobniCisloHlav?: any

    // Přijato fakturou (db: undefined) - Přijato fakturou)
    doklFakPrijem?: any

    // Vydáno fakturou (db: undefined) - Vydáno fakturou)
    doklFakVydej?: any

    // Přijato pokl. dokladem (db: undefined) - Přijato pokl. dokladem)
    doklIntPrijem?: any

    // Vydáno pokl. dokladem (db: undefined) - Vydáno pokl. dokladem)
    doklIntVydej?: any

    // Naskladněno dokladem (db: undefined) - Naskladněno dokladem)
    doklSkladPrijem?: AFSkladovyPohyb

    // Vyskladněno dokladem (db: undefined) - Vyskladněno dokladem)
    doklSkladVydej?: AFSkladovyPohyb

    // Položka přijaté faktury (db: IdPolFakPrijem) - Položka přijaté faktury)
    idPolFakPrijem?: any

    // Položka vydané faktury (db: IdPolFakVydej) - Položka vydané faktury)
    idPolFakVydej?: any

    // Pokladní položka přijímající (db: IdPolIntPrijem) - Pokladní položka přijímající)
    idPolIntPrijem?: any

    // Pokladní položka vydávající (db: IdPolIntVydej) - Pokladní položka vydávající)
    idPolIntVydej?: any

    // Položka příjemky (db: IdPolSkladPrijem) - Položka příjemky)
    idPolSkladPrijem?: AFSkladovyPohybPolozka

    // Položka výdejky (db: IdPolSkladVydej) - Položka výdejky)
    idPolSkladVydej?: AFSkladovyPohybPolozka


}