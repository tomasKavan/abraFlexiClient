import { AFEntity } from '../AFEntity'


export class AFCastkyKOdpoctu extends AFEntity {

    // Záloha (db: undefined) - Záloha)
    zaloha?: any

    // Účetní (db: undefined) - Účetní)
    ucetni?: boolean

    // Osvob., bez DPH [Kč] (db: undefined) - 0 %)
    sumOsv?: Big

    // Základ DPH zákl. [Kč] (db: undefined) - Základ DPH zákl. [Kč])
    sumZklZakl?: Big

    // Základ DPH sníž. [Kč] (db: undefined) - Základ DPH sníž. [Kč])
    sumZklSniz?: Big

    // Základ DPH 2. sníž. [Kč] (db: undefined) - Základ DPH 2. sníž. [Kč])
    sumZklSniz2?: Big

    // DPH základní [Kč] (db: undefined) - DPH základní)
    sumDphZakl?: Big

    // DPH snížená [Kč] (db: undefined) - DPH snížená)
    sumDphSniz?: Big

    // DPH 2. snížená [Kč] (db: undefined) - DPH 2. snížená)
    sumDphSniz2?: Big

    // Celkem vč. DPH - zákl. [Kč] (db: undefined) - Celkem vč. DPH - zákl. [Kč])
    sumCelkZakl?: Big

    // Celkem vč. DPH - sníž. [Kč] (db: undefined) - Celkem vč. DPH - sníž. [Kč])
    sumCelkSniz?: Big

    // Celkem vč. DPH - 2. sníž. [Kč] (db: undefined) - Celkem vč. DPH - 2. sníž. [Kč])
    sumCelkSniz2?: Big


}