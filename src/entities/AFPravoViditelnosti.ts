import { AFEntity } from '../AFEntity'


export class AFPravoViditelnosti extends AFEntity {

    // ID (db: IdDataPrava) - ID)
    id?: number

    // uživatel (db: IdUzivatel) - uživatel)
    idUzivatel?: number

    // typ dat (db: TypDatK) - typ dat)
    typDatK?: any

    // modul (db: ModulK) - modul)
    modulK?: any

    // objekt (db: IdObjektu) - objekt)
    idObjektu?: number

    // editovat (db: Editovat) - editovat)
    editovat?: boolean


}