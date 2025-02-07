import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFMena } from './AFMena'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFUcet } from './AFUcet'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFStatDph } from './AFStatDph'
import { AFCleneniDph } from './AFCleneniDph'
import { AFStredisko } from './AFStredisko'
import { AFCinnost } from './AFCinnost'
import { AFZakazka } from './AFZakazka'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni'
import { AFKontakt } from './AFKontakt'
import { AFRadaFakturyVydane } from './AFRadaFakturyVydane'
import { AFSmlouva } from './AFSmlouva'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFFakturaVydanaPolozka } from './AFFakturaVydanaPolozka'
import { AFZalohaKOdpoctu } from './AFZalohaKOdpoctu'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'
import { AFCastkyKOdpoctu } from './AFCastkyKOdpoctu'


import { Zamek, StavUziv, ZaokrJak, ZaokrNa, MetodaZaokr, Ekokom, StavUhr, StavOdp, StavMail } from '../AFEntityEnums'

export class AFFakturaVydana extends AFEntity {
  static EntityPath: string = 'faktura-vydana'
  static EntityName: string = 'Vydané faktury'
  static EntityType: string = 'FAKTURA_OUT'

  // ID (db: IdDoklFak) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Interní číslo (db: Kod) - Interní číslo)
  kod?: string
  // Zámek (db: ZamekK) - Zámek)
  zamekK?: Zamek
  // Číslo došlé (db: CisDosle) - Číslo došlé)
  cisDosle?: string
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string
  // Číslo smlouvy (db: CisSml) - Číslo smlouvy)
  cisSml?: string
  // Číslo objednávky (db: CisObj) - Číslo objednávky)
  cisObj?: string
  // Objednáno (db: DatObj) - Objednáno)
  datObj?: Date
  // Dodací list (db: CisDodak) - Dodací list)
  cisDodak?: string
  // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
  doprava?: string
  // Vystaveno (db: DatVyst) - Vystaveno)
  datVyst?: Date
  // Datum zdaň. plnění (db: DuzpPuv) - Datum zdaň. plnění)
  duzpPuv?: Date
  // Uplatnit zdaň. plnění (db: DuzpUcto) - Uplatnit zdaň. plnění)
  duzpUcto?: Date
  // Splatnost (db: DatSplat) - Splatnost)
  datSplat?: Date
  // Datum úhrady (db: DatUhr) - Datum úhrady)
  datUhr?: Date
  // Termín (db: DatTermin) - Termín)
  datTermin?: Date
  // Realizace (db: DatReal) - Realizace)
  datReal?: Date
  // Datum sazeb DPH (db: DatSazbyDph) - Datum sazeb DPH)
  datSazbyDph?: Date
  // Popis (db: Popis) - Popis)
  popis?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Úvodní text (tiskne se před položkami) (db: UvodTxt) - Úvodní text (tiskne se před položkami))
  uvodTxt?: string
  // Závěrečný text (tiskne se za položkami) (db: ZavTxt) - Závěrečný text (tiskne se za položkami))
  zavTxt?: string
  // Osvob., bez DPH [Kč] (db: SumOsv) - 0 %)
  sumOsv?: Big
  // Základ DPH sníž. [Kč] (db: SumZklSniz) - Základ DPH sníž. [Kč])
  sumZklSniz?: Big
  // Základ DPH 2. sníž. [Kč] (db: SumZklSniz2) - Základ DPH 2. sníž. [Kč])
  sumZklSniz2?: Big
  // Základ DPH zákl. [Kč] (db: SumZklZakl) - Základ DPH zákl. [Kč])
  sumZklZakl?: Big
  // Základ celkem [Kč] (db: sumOsv + sumZklSniz + sumZklSniz2 + sumZklZakl) - Základ)
  sumZklCelkem?: Big
  // DPH snížená [Kč] (db: SumDphSniz) - DPH snížená)
  sumDphSniz?: Big
  // DPH 2. snížená [Kč] (db: SumDphSniz2) - DPH 2. snížená)
  sumDphSniz2?: Big
  // DPH základní [Kč] (db: SumDphZakl) - DPH základní)
  sumDphZakl?: Big
  // DPH celkem [Kč] (db: sumDphSniz + sumDphSniz2 + sumDphZakl) - DPH)
  sumDphCelkem?: Big
  // Celkem vč. DPH - sníž. [Kč] (db: sumZklSniz + sumDphSniz) - Celkem vč. DPH - sníž. [Kč])
  sumCelkSniz?: Big
  // Celkem vč. DPH - 2. sníž. [Kč] (db: sumZklSniz2 + sumDphSniz2) - Celkem vč. DPH - 2. sníž. [Kč])
  sumCelkSniz2?: Big
  // Celkem vč. DPH - zákl. [Kč] (db: sumZklZakl + sumDphZakl) - Celkem vč. DPH - zákl. [Kč])
  sumCelkZakl?: Big
  // Celkem [Kč] (db: SumCelkem) - Celkem)
  sumCelkem?: Big
  // Osvob., bez DPH [měna] (db: SumOsvMen) - 0 %)
  sumOsvMen?: Big
  // Základ DPH sníž. [měna] (db: SumZklSnizMen) - Základ DPH sníž. [měna])
  sumZklSnizMen?: Big
  // Základ DPH 2. sníž. [měna] (db: SumZklSniz2Men) - Základ DPH 2. sníž. [měna])
  sumZklSniz2Men?: Big
  // Základ DPH zákl. [měna] (db: SumZklZaklMen) - Základ DPH zákl. [měna])
  sumZklZaklMen?: Big
  // Základ celkem [měna] (db: sumOsvMen + sumZklSnizMen + sumZklSniz2Men + sumZklZaklMen) - Základ)
  sumZklCelkemMen?: Big
  // DPH základní [měna] (db: SumDphZaklMen) - DPH základní)
  sumDphZaklMen?: Big
  // DPH snížená [měna] (db: SumDphSnizMen) - DPH snížená)
  sumDphSnizMen?: Big
  // DPH 2. snížená [měna] (db: SumDphSniz2Men) - DPH 2. snížená)
  sumDphSniz2Men?: Big
  // DPH celkem [měna] (db: sumDphSnizMen + sumDphSniz2Men + sumDphZaklMen) - DPH)
  sumDphCelkemMen?: Big
  // Celkem vč. DPH - sníž. [měna] (db: sumZklSnizMen + sumDphSnizMen) - Celkem vč. DPH - sníž. [měna])
  sumCelkSnizMen?: Big
  // Celkem vč. DPH - 2. sníž. [měna] (db: sumZklSniz2Men + sumDphSniz2Men) - Celkem vč. DPH - 2. sníž. [měna])
  sumCelkSniz2Men?: Big
  // Celkem vč. DPH - zákl. [měna] (db: sumZklZaklMen + sumDphZaklMen) - Celkem vč. DPH - zákl. [měna])
  sumCelkZaklMen?: Big
  // Celkem [měna] (db: SumCelkemMen) - Celkem)
  sumCelkemMen?: Big
  // Náklady (db: SumNaklady) - Sumace nákladů)
  sumNaklady?: Big
  // Sleva [%] (db: SlevaDokl) - Sleva [%])
  slevaDokl?: Big
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big
  // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
  kurzMnozstvi?: Big
  // V příkazu ? (db: StavUzivK) - V příkazu ?)
  stavUzivK?: StavUziv
  // Název firmy nebo jméno osoby (db: NazFirmy) - Název firmy - jméno)
  nazFirmy?: string
  // Ulice (db: Ulice) - Ulice)
  ulice?: string
  // Město (db: Mesto) - Město)
  mesto?: string
  // PSČ (db: Psc) - PSČ)
  psc?: string
  // EAN (db: EanKod) - EAN)
  eanKod?: string
  // IČO (db: Ic) - IČO)
  ic?: string
  // DIČ (db: Dic) - DIČ)
  dic?: string
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Poštovní adresa je shodná se sídlem (db: PostovniShodna) - Poštovní adresa je shodná se sídlem)
  postovniShodna?: boolean
  // Pošt. jméno firmy (db: FaNazev) - Firma)
  faNazev?: string
  // Název firmy - druhá řádka (db: ) - Název firmy - druhá řádka)
  faNazev2?: string
  // Pošt. ulice (db: FaUlice) - Ulice)
  faUlice?: string
  // Pošt. město (db: FaMesto) - Město)
  faMesto?: string
  // Pošt. PSČ (db: FaPsc) - PSČ)
  faPsc?: string
  // Pošt. EAN (db: FaEanKod) - EAN)
  faEanKod?: string
  // Číslo bank. účtu (db: Buc) - Číslo účtu)
  buc?: string
  // IBAN (db: Iban) - IBAN)
  iban?: string
  // BIC (db: Bic) - BIC)
  bic?: string
  // Specifický symbol (db: SpecSym) - Specifický symbol)
  specSym?: string
  // Bezpol. dokl. (db: BezPolozek) - bezpoložkový doklad)
  bezPolozek?: boolean
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean
  // Snížená sazba DPH (db: SzbDphSniz) - Snížená)
  szbDphSniz?: Big
  // 2. snížená sazba DPH (db: SzbDphSniz2) - 2. snížená)
  szbDphSniz2?: Big
  // Základní sazba DPH (db: SzbDphZakl) - Základní)
  szbDphZakl?: Big
  // Místo plnění tuzemsko (db: UzpTuzemsko) - Místo plnění tuzemsko)
  uzpTuzemsko?: boolean
  // Zaúčtováno (db: Zuctovano) - Stav zaúčtování)
  zuctovano?: boolean
  // Datum zaúčt. (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date
  // Vynechat ze salda (db: VyloucitSaldo) - Vynechat ze salda)
  vyloucitSaldo?: boolean
  // Storno (db: Storno) - Storno)
  storno?: boolean
  // Způsob zaokr. Celkem (db: ZaokrJakSumK) - Celkem (způsob))
  zaokrJakSumK?: ZaokrJak
  // Řád zaokr. Celkem (db: ZaokrNaSumK) - Celkem (řády))
  zaokrNaSumK?: ZaokrNa
  // Způsob zaokr. DPH (db: ZaokrJakDphK) - DPH (způsob))
  zaokrJakDphK?: ZaokrJak
  // Řád zaokr. DPH (db: ZaokrNaDphK) - DPH (řády))
  zaokrNaDphK?: ZaokrNa
  // Metoda zaokrouhlení (db: MetodaZaokrDoklK) - Metoda zaokrouhlení)
  metodaZaokrDoklK?: MetodaZaokr
  // Korekce DPH (db: VytvaretKorPol) - Korekce DPH)
  vytvaretKorPol?: boolean
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Typ faktury (db: IdTypDokl) - Typ faktury)
  typDokl?: AFTypFakturyVydane
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena
  // Konst. sym. (db: IdKonSym) - Kon. sym.)
  konSym?: AFKonstSymbol
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat
  // Pošt. stát (db: IdFaStatu) - Stát)
  faStat?: AFStat
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion
  // Pošt. kraj (db: Idfaregion) - Kraj)
  faRegion?: AFRegion
  // Místo určení (db: IdMur) - Místo určení)
  mistUrc?: AFMistoUrceni
  // Účet odběratele (db: IdBanSpojDod) - Účet odběratele)
  banSpojDod?: AFAdresarBankovniUcet
  // Bankovní účet (db: IdBspBan) - Bankovní účet)
  bankovniUcet?: AFBankovniUcet
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani
  // Účet MD (db: IdPrimUcet) - Účet MD)
  primUcet?: AFUcet
  // Účet DAL (db: IdProtiUcet) - Účet DAL)
  protiUcet?: AFUcet
  // Účet DPH zákl. (db: IdDphZaklUcet) - DPH základní)
  dphZaklUcet?: AFUcet
  // Účet DPH sníž. (db: IdDphSnizUcet) - DPH snížená)
  dphSnizUcet?: AFUcet
  // Účet DPH 2. sníž. (db: IdDphSniz2Ucet) - DPH 2. snížená)
  dphSniz2Ucet?: AFUcet
  // Směr.kód (db: IdSmerKod) - Směr.kód)
  smerKod?: AFPenezniUstav
  // Stát DPH (db: IdStatDph) - Stát DPH)
  statDph?: AFStatDph
  // Řádky DPH (db: IdClenDph) - Řádky DPH)
  clenDph?: AFCleneniDph
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Stát odesl. (db: IdStatOdesl) - Stát odesl.)
  statOdesl?: AFStat
  // Stát určení (db: IdStatUrc) - Stát určení)
  statUrc?: AFStat
  // Stát původu (db: IdStatPuvod) - Stát původu)
  statPuvod?: AFStat
  // Podmínky dodání (db: IdDodPodm) - Podmínky dodání)
  dodPodm?: AFIntrastatDodaciPodminky
  // Transakce (db: IdObchTrans) - Transakce)
  obchTrans?: AFIntrastatObchodniTransakce
  // Druh dopravy (db: IdDruhDopr) - Druh dopravy)
  druhDopr?: AFIntrastatDruhDopravy
  // Zvláštní pohyby (db: IdZvlPoh) - Zvláštní pohyby)
  zvlPoh?: AFIntrastatZvlastniPohyb
  // Kraj odesílatele (db: IdKrajUrc) - Kraj odesílatele)
  krajUrc?: AFIntrastatKrajUrceni
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: any
  // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
  zodpOsoba?: any
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt
  // Kontaktní jméno (db: KontaktJmeno) - Jméno)
  kontaktJmeno?: string
  // Kontaktní email (db: KontaktEmail) - Email)
  kontaktEmail?: string
  // Kontaktní telefon (db: KontaktTel) - Telefon)
  kontaktTel?: string
  // Čís. řada (db: IdRady) - Čís. řada)
  rada?: AFRadaFakturyVydane
  // Smlouva (db: IdSmlouvy) - Smlouva)
  smlouva?: AFSmlouva
  // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
  formaDopravy?: AFFormaDopravy
  // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
  uuid?: string
  // Zdroj (db: Source) - Zdroj)
  source?: string
  // Výkaz EkoKom (db: EkokomK) - Výkaz EkoKom)
  ekokomK?: Ekokom
  // Počet balíků (db: BalikPocet) - balíků)
  balikPocet?: number
  // ID výdejního místa (db: BranchId) - ID výdejního místa)
  branchId?: string
  // Přiřazeny balíky (db: BalikZacislovan) - Přiřazeny balíky)
  balikZacislovan?: boolean
  // Balíky vyexportovány (db: BalikVytvXml) - Balíky vyexportovány)
  balikVytvXml?: boolean
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni
  // Datum upomínky 1 (db: DatUp1) - Datum upomínky 1)
  datUp1?: Date
  // Datum upomínky 2 (db: DatUp2) - Datum upomínky 2)
  datUp2?: Date
  // Datum smíru (db: DatSmir) - Datum smíru)
  datSmir?: Date
  // Datum penalizace (db: DatPenale) - Datum penalizace)
  datPenale?: Date
  // Podpis příkazu (db: PodpisPrik) - Vyžadovat podpis před vystavením příkazu k úhradě)
  podpisPrik?: boolean
  // Příkazy [Kč] (db: PrikazSum) - Odeslané příkazy [Kč])
  prikazSum?: Big
  // Příkazy [měna] (db: PrikazSumMen) - Odeslané příkazy [měna])
  prikazSumMen?: Big
  // Již uhrazeno [Kč] (db: JuhSum) - Již uhrazeno [Kč])
  juhSum?: Big
  // Již uhrazeno [měna] (db: JuhSumMen) - Již uhrazeno [měna])
  juhSumMen?: Big
  // Uhr. k datu [Kč] (db: JuhDat) - Uhr. k datu [Kč])
  juhDat?: Big
  // Uhr. k datu [měna] (db: JuhDatMen) - Uhr. k datu [měna])
  juhDatMen?: Big
  // Zbývá uhradit [Kč] (db: sumCelkem - juhSum) - Zbývá uhradit [Kč])
  zbyvaUhradit?: Big
  // Zbývá uhradit [měna] (db: sumCelkemMen - juhSumMen) - Zbývá uhradit [měna])
  zbyvaUhraditMen?: Big
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady
  // Stav úhrady dokladu (db: StavUhrK) - Stav úhrady dokladu)
  stavUhrK?: StavUhr
  // Již uhrazeno přeplatky [Kč] (db: JuhSumPp) - Již uhrazeno přeplatky [Kč])
  juhSumPp?: Big
  // Již uhrazeno přeplatky [měna] (db: JuhSumPpMen) - Již uhrazeno přeplatky [měna])
  juhSumPpMen?: Big
  // Přeplaceno [Kč] (db: SumPrepl) - Přeplaceno [Kč])
  sumPrepl?: Big
  // Přeplaceno [měna] (db: SumPreplMen) - Přeplaceno [měna])
  sumPreplMen?: Big
  // Zálohy (db: SumZalohy) - Zálohy)
  sumZalohy?: Big
  // Zálohy [měna] (db: SumZalohyMen) - Zálohy [měna])
  sumZalohyMen?: Big
  // Odpočet zál. (db: StavOdpocetK) - Odpočet zál.)
  stavOdpocetK?: StavOdp
  // Generovat sklad. doklady (db: GenerovatSkl) - Generovat sklad. doklady)
  generovatSkl?: boolean
  // Zaokrouhlit po odpočtu (db: ZaokrouhlitPoOdpoctu) - Zaokrouhlit po odpočtu)
  zaokrouhlitPoOdpoctu?: boolean
  // Hrom. fakturace (db: HromFakt) - Hrom. fakturace)
  hromFakt?: boolean
  // Zdroj pro sklad. doklady (db: ZdrojProSkl) - Zdroj pro sklad. doklady)
  zdrojProSkl?: boolean
  // Prodejka (db: Prodejka) - Prodejka)
  prodejka?: boolean
  // Stav mailu (db: StavMailK) - Stav mailu)
  stavMailK?: StavMail
  // Dobropisováno (db: Dobropisovano) - Dobropisováno)
  dobropisovano?: boolean
  // Celkem bez záloh [Kč] (db: sumCelkem + sumZalohy) - Celkem bez záloh)
  sumCelkemBezZaloh?: Big
  // Celkem bez záloh [měna] (db: sumCelkemMen + sumZalohyMen) - Celkem bez záloh)
  sumCelkemBezZalohMen?: Big
  // Automaticky odpočítávat (db: OdpocAuto) - Automaticky odpočítávat)
  odpocAuto?: boolean
  // Typ skladového dokladu (db: IdTypDoklSkl) - Typ skladového dokladu)
  typDoklSkl?: AFTypSkladovyPohyb

  // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
  'vazebni-doklady'?: AFVazebniDoklad[]
  get vazebniDoklady(): AFVazebniDoklad[] | undefined { return this['vazebni-doklady']}
  // Položky faktur (type: FAKTURA_OUT_POLOZKA) - polozkyDokladu)
  polozkyDokladu?: AFFakturaVydanaPolozka[]
  // Záloha k odpočtu (type: ZALOHA_K_ODPOCTU) - zalohy-k-odpoctu)
  'zalohy-k-odpoctu'?: AFZalohaKOdpoctu[]
  get zalohyKOdpoctu(): AFZalohaKOdpoctu[] | undefined { return this['zalohy-k-odpoctu']}
  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]
  // Události (type: ADR_UDALOST) - udalosti)
  udalosti?: AFUdalost[]
  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Vazby mezi doklady (type: VAZBA_MEZI_DOKLADY) - vazby)
  vazby?: AFVazba[]
  // Částky k odpočtu (type: CASTKY_K_ODPOCTU) - castky-k-odpoctu)
  'castky-k-odpoctu'?: AFCastkyKOdpoctu[]
  get castkyKOdpoctu(): AFCastkyKOdpoctu[] | undefined { return this['castky-k-odpoctu']}


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    zamekK : {
      key: 'zamekK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Zamek',
      enum: Zamek,
      
    },
    cisDosle : {
      key: 'cisDosle',
      type: PropertyType.String,
      isArray: false,
      maxLength: 40,
      
    },
    varSym : {
      key: 'varSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    cisSml : {
      key: 'cisSml',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    cisObj : {
      key: 'cisObj',
      type: PropertyType.String,
      isArray: false,
      maxLength: 2000,
      
    },
    datObj : {
      key: 'datObj',
      type: PropertyType.Date,
      isArray: false,
      
    },
    cisDodak : {
      key: 'cisDodak',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },
    doprava : {
      key: 'doprava',
      type: PropertyType.String,
      isArray: false,
      
    },
    datVyst : {
      key: 'datVyst',
      type: PropertyType.Date,
      isArray: false,
      
    },
    duzpPuv : {
      key: 'duzpPuv',
      type: PropertyType.Date,
      isArray: false,
      
    },
    duzpUcto : {
      key: 'duzpUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datSplat : {
      key: 'datSplat',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datUhr : {
      key: 'datUhr',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datTermin : {
      key: 'datTermin',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datReal : {
      key: 'datReal',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datSazbyDph : {
      key: 'datSazbyDph',
      type: PropertyType.Date,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    uvodTxt : {
      key: 'uvodTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    zavTxt : {
      key: 'zavTxt',
      type: PropertyType.String,
      isArray: false,
      
    },
    sumOsv : {
      key: 'sumOsv',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklSniz : {
      key: 'sumZklSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklSniz2 : {
      key: 'sumZklSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklZakl : {
      key: 'sumZklZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklCelkem : {
      key: 'sumZklCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphSniz : {
      key: 'sumDphSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphSniz2 : {
      key: 'sumDphSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphZakl : {
      key: 'sumDphZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphCelkem : {
      key: 'sumDphCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSniz : {
      key: 'sumCelkSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSniz2 : {
      key: 'sumCelkSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkZakl : {
      key: 'sumCelkZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkem : {
      key: 'sumCelkem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumOsvMen : {
      key: 'sumOsvMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    sumZklSnizMen : {
      key: 'sumZklSnizMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklSniz2Men : {
      key: 'sumZklSniz2Men',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklZaklMen : {
      key: 'sumZklZaklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklCelkemMen : {
      key: 'sumZklCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphZaklMen : {
      key: 'sumDphZaklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphSnizMen : {
      key: 'sumDphSnizMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphSniz2Men : {
      key: 'sumDphSniz2Men',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphCelkemMen : {
      key: 'sumDphCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSnizMen : {
      key: 'sumCelkSnizMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkSniz2Men : {
      key: 'sumCelkSniz2Men',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkZaklMen : {
      key: 'sumCelkZaklMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkemMen : {
      key: 'sumCelkemMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumNaklady : {
      key: 'sumNaklady',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    slevaDokl : {
      key: 'slevaDokl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    kurz : {
      key: 'kurz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    kurzMnozstvi : {
      key: 'kurzMnozstvi',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    stavUzivK : {
      key: 'stavUzivK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavUziv',
      enum: StavUziv,
      
    },
    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    ulice : {
      key: 'ulice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mesto : {
      key: 'mesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    psc : {
      key: 'psc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    ic : {
      key: 'ic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    dic : {
      key: 'dic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    postovniShodna : {
      key: 'postovniShodna',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    faNazev : {
      key: 'faNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faNazev2 : {
      key: 'faNazev2',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faUlice : {
      key: 'faUlice',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faMesto : {
      key: 'faMesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faPsc : {
      key: 'faPsc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faEanKod : {
      key: 'faEanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    buc : {
      key: 'buc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    iban : {
      key: 'iban',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    bic : {
      key: 'bic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    specSym : {
      key: 'specSym',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    bezPolozek : {
      key: 'bezPolozek',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ucetni : {
      key: 'ucetni',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    szbDphSniz : {
      key: 'szbDphSniz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    szbDphSniz2 : {
      key: 'szbDphSniz2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    szbDphZakl : {
      key: 'szbDphZakl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    uzpTuzemsko : {
      key: 'uzpTuzemsko',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zuctovano : {
      key: 'zuctovano',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datUcto : {
      key: 'datUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    vyloucitSaldo : {
      key: 'vyloucitSaldo',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    storno : {
      key: 'storno',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zaokrJakSumK : {
      key: 'zaokrJakSumK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },
    zaokrNaSumK : {
      key: 'zaokrNaSumK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    zaokrJakDphK : {
      key: 'zaokrJakDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrJak',
      enum: ZaokrJak,
      
    },
    zaokrNaDphK : {
      key: 'zaokrNaDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZaokrNa',
      enum: ZaokrNa,
      
    },
    metodaZaokrDoklK : {
      key: 'metodaZaokrDoklK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'MetodaZaokr',
      enum: MetodaZaokr,
      
    },
    vytvaretKorPol : {
      key: 'vytvaretKorPol',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyVydane',
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    konSym : {
      key: 'konSym',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKonstSymbol',
      
    },
    firma : {
      key: 'firma',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      maxLength: 20,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    faStat : {
      key: 'faStat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    region : {
      key: 'region',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
    },
    faRegion : {
      key: 'faRegion',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
    },
    mistUrc : {
      key: 'mistUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMistoUrceni',
      
    },
    banSpojDod : {
      key: 'banSpojDod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresarBankovniUcet',
      
    },
    bankovniUcet : {
      key: 'bankovniUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFBankovniUcet',
      
    },
    typUcOp : {
      key: 'typUcOp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    primUcet : {
      key: 'primUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    protiUcet : {
      key: 'protiUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphZaklUcet : {
      key: 'dphZaklUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphSnizUcet : {
      key: 'dphSnizUcet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    dphSniz2Ucet : {
      key: 'dphSniz2Ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    smerKod : {
      key: 'smerKod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPenezniUstav',
      maxLength: 20,
      
    },
    statDph : {
      key: 'statDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStatDph',
      maxLength: 3,
      
    },
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCinnost',
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    statOdesl : {
      key: 'statOdesl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statUrc : {
      key: 'statUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statPuvod : {
      key: 'statPuvod',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    dodPodm : {
      key: 'dodPodm',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatDodaciPodminky',
      
    },
    obchTrans : {
      key: 'obchTrans',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatObchodniTransakce',
      
    },
    druhDopr : {
      key: 'druhDopr',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatDruhDopravy',
      
    },
    zvlPoh : {
      key: 'zvlPoh',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatZvlastniPohyb',
      
    },
    krajUrc : {
      key: 'krajUrc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFIntrastatKrajUrceni',
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    zodpOsoba : {
      key: 'zodpOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    kontaktOsoba : {
      key: 'kontaktOsoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKontakt',
      
    },
    kontaktJmeno : {
      key: 'kontaktJmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    kontaktEmail : {
      key: 'kontaktEmail',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    kontaktTel : {
      key: 'kontaktTel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    rada : {
      key: 'rada',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadaFakturyVydane',
      
    },
    smlouva : {
      key: 'smlouva',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSmlouva',
      maxLength: 20,
      
    },
    formaDopravy : {
      key: 'formaDopravy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaDopravy',
      
    },
    uuid : {
      key: 'uuid',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    source : {
      key: 'source',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    ekokomK : {
      key: 'ekokomK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'Ekokom',
      enum: Ekokom,
      
    },
    balikPocet : {
      key: 'balikPocet',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    branchId : {
      key: 'branchId',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    balikZacislovan : {
      key: 'balikZacislovan',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    balikVytvXml : {
      key: 'balikVytvXml',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    clenKonVykDph : {
      key: 'clenKonVykDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniKontrolniHlaseni',
      
    },
    datUp1 : {
      key: 'datUp1',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datUp2 : {
      key: 'datUp2',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datSmir : {
      key: 'datSmir',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datPenale : {
      key: 'datPenale',
      type: PropertyType.Date,
      isArray: false,
      
    },
    podpisPrik : {
      key: 'podpisPrik',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    prikazSum : {
      key: 'prikazSum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    prikazSumMen : {
      key: 'prikazSumMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    juhSum : {
      key: 'juhSum',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    juhSumMen : {
      key: 'juhSumMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    juhDat : {
      key: 'juhDat',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    juhDatMen : {
      key: 'juhDatMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zbyvaUhradit : {
      key: 'zbyvaUhradit',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    zbyvaUhraditMen : {
      key: 'zbyvaUhraditMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    formaUhradyCis : {
      key: 'formaUhradyCis',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFFormaUhrady',
      
    },
    stavUhrK : {
      key: 'stavUhrK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'StavUhr',
      enum: StavUhr,
      
    },
    juhSumPp : {
      key: 'juhSumPp',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    juhSumPpMen : {
      key: 'juhSumPpMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    sumPrepl : {
      key: 'sumPrepl',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    sumPreplMen : {
      key: 'sumPreplMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    sumZalohy : {
      key: 'sumZalohy',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    sumZalohyMen : {
      key: 'sumZalohyMen',
      type: PropertyType.Numeric,
      isArray: false,
      
    },
    stavOdpocetK : {
      key: 'stavOdpocetK',
      type: PropertyType.Select,
      isArray: false,
      enumName: 'StavOdp',
      enum: StavOdp,
      
    },
    generovatSkl : {
      key: 'generovatSkl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zaokrouhlitPoOdpoctu : {
      key: 'zaokrouhlitPoOdpoctu',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    hromFakt : {
      key: 'hromFakt',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zdrojProSkl : {
      key: 'zdrojProSkl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    prodejka : {
      key: 'prodejka',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    stavMailK : {
      key: 'stavMailK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'StavMail',
      enum: StavMail,
      
    },
    dobropisovano : {
      key: 'dobropisovano',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sumCelkemBezZaloh : {
      key: 'sumCelkemBezZaloh',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumCelkemBezZalohMen : {
      key: 'sumCelkemBezZalohMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    odpocAuto : {
      key: 'odpocAuto',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    typDoklSkl : {
      key: 'typDoklSkl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      
    },

    'vazebni-doklady' : {
      key: 'vazebni-doklady',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFVazebniDoklad'
    },
    polozkyDokladu : {
      key: 'polozkyDokladu',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFFakturaVydanaPolozka'
    },
    'zalohy-k-odpoctu' : {
      key: 'zalohy-k-odpoctu',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFZalohaKOdpoctu'
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },
    udalosti : {
      key: 'udalosti',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUdalost'
    },
    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    vazby : {
      key: 'vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFVazba'
    },
    'castky-k-odpoctu' : {
      key: 'castky-k-odpoctu',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFCastkyKOdpoctu'
    },

  }
}