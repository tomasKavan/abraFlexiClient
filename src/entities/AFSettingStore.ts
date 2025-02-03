import { AFEntity } from '../AFEntity'


export class AFSettingStore extends AFEntity {

    // ID (db: IdSetting) - ID)
    id?: number

    // Klíč (db: Klic) - Klíč)
    klic?: string

    // Hodnota (db: Hodnota) - Hodnota)
    hodnota?: string

    // Uživatel (db: IdUzivatel) - Uživatel)
    uzivatelId?: number


}