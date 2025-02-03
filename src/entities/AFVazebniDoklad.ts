import { AFEntity } from '../AFEntity'
import { AFTypDokladu } from './AFTypDokladu'
import { AFMena } from './AFMena'

export enum AFVazebniDokladTypVazbyK {
  uhrada = 'typVazbyDokl.uhrada', //Úhrada
  uhradaKR = 'typVazbyDokl.uhradaKR', //Úhrada kurzového rozdílu
  KR = 'typVazbyDokl.KR', //Kurzový rozdíl
  ZB = 'typVazbyDokl.ZB', //Zbytek
  PP = 'typVazbyDokl.PP', //Přeplatek
  preceneni = 'typVazbyDokl.preceneni', //Přecenění
  hlavaSkl = 'typVazbyDokl.hlavaSkl', //Skladový doklad
  polozkaSkl = 'typVazbyDokl.polozkaSkl', //Skladová položka
  polozkaSklSada = 'typVazbyDokl.polozkaSklSada', //Skladová položka (rozpad sady)
  hlavaSklKus = 'typVazbyDokl.hlavaSklKus', //Skladový doklad (rozpad kusovníku)
  polozkaSklKus = 'typVazbyDokl.polozkaSklKus', //Skladová položka (rozpad kusovníku)
  hlavaSklPrevod = 'typVazbyDokl.hlavaSklPrevod', //Skladový doklad (převodka)
  polozkaSklPrevod = 'typVazbyDokl.polozkaSklPrevod', //Skladová položka (převodka)
  odpocetZALOHY = 'typVazbyDokl.odpocetZALOHY', //Odpočet zálohy
  odpocetZDD = 'typVazbyDokl.odpocetZDD', //Odpočet ZDD
  vazbaZDD = 'typVazbyDokl.vazbaZDD', //Vazba ZDD
  uhradaZALOHY = 'typVazbyDokl.uhradaZALOHY', //Úhrada zálohy
  odpocetPolZALOHY = 'typVazbyDokl.odpocetPolZALOHY', //Odpočet zálohové položky
  obchod_obchod_hla = 'typVazbyDokl.obchod_obchod_hla', //Obchodní vazba
  obchod_obchod_pol = 'typVazbyDokl.obchod_obchod_pol', //Obchodní vazba položky
  obchod_faktura_hla = 'typVazbyDokl.obchod_faktura_hla', //Faktura vytvořená z objednávky
  obchod_faktura_pol = 'typVazbyDokl.obchod_faktura_pol', //Položka faktury vytvořená z objednávky
  obchod_zaloha_hla = 'typVazbyDokl.obchod_zaloha_hla', //Záloha vytvořená z objednávky
  obchod_zaloha_pol = 'typVazbyDokl.obchod_zaloha_pol', //Položka zálohy vytvořená z objednávky
  obchod_sklad_hla = 'typVazbyDokl.obchod_sklad_hla', //Skladový doklad vytvořený z objednávky
  obchod_sklad_pol = 'typVazbyDokl.obchod_sklad_pol', //Položka skladového dokladu vytvořená z objednávky
  zaucProdejky = 'typVazbyDokl.zaucProdejky', //Zaúčtování prodejky
  nakladVynos = 'typVazbyDokl.nakladVynos', //Rozložení nákladů a výnosů
  hlavaDobropis = 'typVazbyDokl.hlavaDobropis', //Dobropis
  polozkaDobropis = 'typVazbyDokl.polozkaDobropis', //Položka dobropisu
  uhrazovanaFaktura = 'typVazbyDokl.uhrazovanaFaktura', //Uhrazovaná faktura
  uhrazujiciDoklad = 'typVazbyDokl.uhrazujiciDoklad', //Uhrazující doklad
  odpocitavanaFaktura = 'typVazbyDokl.odpocitavanaFaktura', //Odpočítávaná faktura
}

export enum AFVazebniDokladModulK {
  FAP = 'modulUcetni.FAP', //Faktury přijaté
  FAV = 'modulUcetni.FAV', //Faktury vydané
  BAN = 'modulUcetni.BAN', //Banka
  POK = 'modulUcetni.POK', //Pokladna
  SKL = 'modulUcetni.SKL', //Sklad
  INT = 'modulUcetni.INT', //Interní doklady
  PHL = 'modulUcetni.PHL', //Pohledávky
  ZAV = 'modulUcetni.ZAV', //Závazky
  MAJ = 'modulUcetni.MAJ', //Majetek
  LEA = 'modulUcetni.LEA', //Leasing
}


export class AFVazebniDoklad extends AFEntity {

    // ID (db: undefined) - ID)
    idVazebniDoklad?: number

    // ID vazby (db: undefined) - ID vazby)
    idVazby?: number

    // Typ vazby (db: undefined) - Typ vazby)
    typVazbyK?: any

    // Storno (db: undefined) - Storno)
    storno?: boolean

    // ID dokladu (db: undefined) - ID dokladu)
    idDokl?: number

    // Modul (db: undefined) - Modul)
    modul?: string

    // Název modulu (db: undefined) - Název modulu)
    modulK?: any

    // Interní číslo (db: undefined) - Interní číslo)
    kod?: string

    // Variabilní symbol (db: undefined) - Variabilní symbol)
    varSym?: string

    // Datum vyst. (db: undefined) - Vystaveno)
    datVyst?: Date

    // Datum zaúčt. (db: undefined) - Datum zaúčtování)
    datUcto?: Date

    // Celkem [Kč] (db: undefined) - Celkem [Kč])
    sumCelkem?: Big

    // Celkem [měna] (db: undefined) - Celkem [měna])
    sumCelkemMen?: Big

    // Popis (db: undefined) - Popis)
    popis?: string

    // Poznámka (db: undefined) - Poznámka)
    poznam?: string

    // Vzdálenost (db: undefined) - Vzdálenost)
    uroven?: number

    // Stav dokladu (db: undefined) - Stav dokladu)
    stavK?: any

    // Typ dokladu (db: undefined) - Typ dokladu)
    typDokl?: AFTypDokladu

    // Měna (db: undefined) - Měna)
    mena?: AFMena

    // Uživatel (db: undefined) - Uživatel)
    uzivatel?: any

    // Název firmy nebo jméno osoby (db: undefined) - Název firmy - jméno)
    nazFirmy?: string

    // Město (db: undefined) - Město)
    mesto?: string

    // Již uhrazeno [Kč] (db: undefined) - Již uhrazeno [Kč])
    juhSum?: Big

    // Již uhrazeno [měna] (db: undefined) - Již uhrazeno [měna])
    juhSumMen?: Big

    // Zbývá uhradit [Kč] (db: undefined) - Zbývá uhradit [Kč])
    zbyvaUhradit?: Big

    // Zbývá uhradit [měna] (db: undefined) - Zbývá uhradit [měna])
    zbyvaUhraditMen?: Big


}