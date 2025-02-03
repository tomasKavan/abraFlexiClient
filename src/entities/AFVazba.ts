import { AFEntity } from '../AFEntity'

export enum AFVazbaTypVazbyK {
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


export class AFVazba extends AFEntity {

    // ID (db: IdVazby) - ID)
    id?: number

    // Typ vazby (db: TypVazbyK) - Typ vazby)
    typVazbyK?: any

    // Spárovaná částka (db: Castka) - Spárovaná částka)
    castka?: Big

    // Storno (db: Storno) - Storno)
    storno?: boolean


}