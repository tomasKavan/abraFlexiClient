import { AFEntity } from '../AFEntity'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'

export enum AFOdpisovaSkupinaTypOdpK {
  rovn = 'typOdp.rovn', //Rovnoměrné
  zrych = 'typOdp.zrych', //Zrychlené
  mesic = 'typOdp.mesic', //Měsíční
}


export class AFOdpisovaSkupina extends AFEntity {

    // ID (db: IdSazby) - ID)
    id?: number

    // Poslední změna (db: lastUpdate) - Poslední změna)
    lastUpdate?: Date

    // Zkratka (db: Kod) - Zkratka)
    kod?: string

    // Název (db: Nazev) - Název)
    nazev?: string

    // Název EN (db: NazevA) - Název EN)
    nazevA?: string

    // Název DE (db: NazevB) - Název DE)
    nazevB?: string

    // Název FR (db: NazevC) - Název FR)
    nazevC?: string

    // Poznámka (db: Poznam) - Poznámka)
    poznam?: string

    // Popis (db: Popis) - Popis)
    popis?: string

    // Platí od (db: PlatiOd) - Platí od)
    platiOd?: number

    // Platí do (db: PlatiDo) - Platí do)
    platiDo?: number

    // Způsob odp. (db: TypOdpK) - Způsob odp.)
    typOdpK?: any

    // Doba (db: DobaOdp) - Doba odpisu)
    dobaOdp?: number

    // Min. doba odpisu (db: MinDobaOdp) - Min. doba odpisu)
    minDobaOdp?: number

    // 1.rok zrych. (db: KoefZrOdp1) - První rok)
    koefZrOdp1?: number

    // Další r.zrych. (db: KoefZrOdpDalsi) - Další roky)
    koefZrOdpDalsi?: number

    // Zvýšení zrych. (db: KoefZrOdpZvCeny) - Zvýšení vst. ceny)
    koefZrOdpZvCeny?: number

    // 1.rok rovn. (db: PrcRoOdp1) - První rok)
    prcRoOdp1?: Big

    // Další r.rovn. (db: PrcRoOdpDalsi) - Další roky)
    prcRoOdpDalsi?: Big

    // Zvýšení rovn. (db: PrcRoOdpZvCeny) - Zvýšení vst.ceny)
    prcRoOdpZvCeny?: Big

    // Zámek (db: Zamek) - Zámek)
    zamek?: boolean

    // Vytvořena už. (db: Zmena) - Vytvořena uživatelem)
    zmena?: boolean


    // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
    uzivatelskeVazby?: Promise<AFUzivatelskaVazba[]>

}