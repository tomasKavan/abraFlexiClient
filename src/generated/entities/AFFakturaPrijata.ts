import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFTypFakturyPrijate } from './AFTypFakturyPrijate'
import { AFMena } from './AFMena'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFAdresar } from './AFAdresar'
import { AFStat } from './AFStat'
import { AFRegion } from './AFRegion'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
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
import { AFRadaFakturyPrijate } from './AFRadaFakturyPrijate'
import { AFSazbaDph } from './AFSazbaDph'
import { AFDodavatelskaSmlouva } from './AFDodavatelskaSmlouva'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFFakturaPrijataPolozka } from './AFFakturaPrijataPolozka'
import { AFZalohaKOdpoctu } from './AFZalohaKOdpoctu'
import { AFPriloha } from './AFPriloha'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVazba } from './AFVazba'
import { AFCastkyKOdpoctu } from './AFCastkyKOdpoctu'


import { Zamek, StavUziv, Ekokom, StavUhr, StavOdp } from '../AFEntityEnums'

export class AFFakturaPrijata extends AFEntity {
  static EntityPath: string = 'faktura-prijata'
  static EntityName: string = 'Přijaté faktury'
  static EntityType: string = 'FAKTURA_IN'

  // ID (db: IdDoklFak) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Upravil (db: IdUpdatedBy) - Upravil)
  updatedBy?: any | null
  // Vytvořil (db: idUziv) - Vytvořil)
  createdBy?: any | null
  // Datum vytvoření (db: CreatedDate) - Datum vytvoření)
  createdDate?: Date | null
  // Interní číslo (db: Kod) - Interní číslo)
  declare kod?: string | null
  // Zámek (db: ZamekK) - Zámek)
  zamekK?: Zamek | null
  // Číslo došlé (db: CisDosle) - Číslo došlé)
  cisDosle?: string | null
  // Variabilní symbol (db: VarSym) - Variabilní symbol)
  varSym?: string | null
  // Číslo smlouvy (db: CisSml) - Číslo smlouvy)
  cisSml?: string | null
  // Číslo objednávky (db: CisObj) - Číslo objednávky)
  cisObj?: string | null
  // Objednáno (db: DatObj) - Objednáno)
  datObj?: Date | null
  // Dodací list (db: CisDodak) - Dodací list)
  cisDodak?: string | null
  // Doprava a vyskladnění (db: Doprava) - Doprava a vyskladnění)
  doprava?: string | null
  // Datum přijetí (db: DatVyst) - Přijato)
  datVyst?: Date | null
  // Datum zdaň. plnění (db: DuzpPuv) - Datum zdaň. plnění)
  duzpPuv?: Date | null
  // Uplatnit zdaň. plnění (db: DuzpUcto) - Uplatnit zdaň. plnění)
  duzpUcto?: Date | null
  // Splatnost (db: DatSplat) - Splatnost)
  datSplat?: Date | null
  // Datum úhrady (db: DatUhr) - Datum úhrady)
  datUhr?: Date | null
  // Termín (db: DatTermin) - Termín)
  datTermin?: Date | null
  // Realizace (db: DatReal) - Realizace)
  datReal?: Date | null
  // Datum sazeb DPH (db: DatSazbyDph) - Datum sazeb DPH)
  datSazbyDph?: Date | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Osvob., bez DPH [Kč] (db: SumOsv) - 0 %)
  sumOsv?: Big | null
  // Základ DPH sníž. [Kč] (db: SumZklSniz) - Základ DPH sníž. [Kč])
  sumZklSniz?: Big | null
  // Základ DPH 2. sníž. [Kč] (db: SumZklSniz2) - Základ DPH 2. sníž. [Kč])
  sumZklSniz2?: Big | null
  // Základ DPH zákl. [Kč] (db: SumZklZakl) - Základ DPH zákl. [Kč])
  sumZklZakl?: Big | null
  // Základ celkem [Kč] (db: sumOsv + sumZklSniz + sumZklSniz2 + sumZklZakl) - Základ)
  sumZklCelkem?: Big | null
  // DPH snížená [Kč] (db: SumDphSniz) - DPH snížená)
  sumDphSniz?: Big | null
  // DPH 2. snížená [Kč] (db: SumDphSniz2) - DPH 2. snížená)
  sumDphSniz2?: Big | null
  // DPH základní [Kč] (db: SumDphZakl) - DPH základní)
  sumDphZakl?: Big | null
  // DPH celkem [Kč] (db: sumDphSniz + sumDphSniz2 + sumDphZakl) - DPH)
  sumDphCelkem?: Big | null
  // Celkem vč. DPH - sníž. [Kč] (db: sumZklSniz + sumDphSniz) - Celkem vč. DPH - sníž. [Kč])
  sumCelkSniz?: Big | null
  // Celkem vč. DPH - 2. sníž. [Kč] (db: sumZklSniz2 + sumDphSniz2) - Celkem vč. DPH - 2. sníž. [Kč])
  sumCelkSniz2?: Big | null
  // Celkem vč. DPH - zákl. [Kč] (db: sumZklZakl + sumDphZakl) - Celkem vč. DPH - zákl. [Kč])
  sumCelkZakl?: Big | null
  // Celkem [Kč] (db: SumCelkem) - Celkem)
  sumCelkem?: Big | null
  // Osvob., bez DPH [měna] (db: SumOsvMen) - 0 %)
  sumOsvMen?: Big | null
  // Základ DPH sníž. [měna] (db: SumZklSnizMen) - Základ DPH sníž. [měna])
  sumZklSnizMen?: Big | null
  // Základ DPH 2. sníž. [měna] (db: SumZklSniz2Men) - Základ DPH 2. sníž. [měna])
  sumZklSniz2Men?: Big | null
  // Základ DPH zákl. [měna] (db: SumZklZaklMen) - Základ DPH zákl. [měna])
  sumZklZaklMen?: Big | null
  // Základ celkem [měna] (db: sumOsvMen + sumZklSnizMen + sumZklSniz2Men + sumZklZaklMen) - Základ)
  sumZklCelkemMen?: Big | null
  // DPH základní [měna] (db: SumDphZaklMen) - DPH základní)
  sumDphZaklMen?: Big | null
  // DPH snížená [měna] (db: SumDphSnizMen) - DPH snížená)
  sumDphSnizMen?: Big | null
  // DPH 2. snížená [měna] (db: SumDphSniz2Men) - DPH 2. snížená)
  sumDphSniz2Men?: Big | null
  // DPH celkem [měna] (db: sumDphSnizMen + sumDphSniz2Men + sumDphZaklMen) - DPH)
  sumDphCelkemMen?: Big | null
  // Celkem vč. DPH - sníž. [měna] (db: sumZklSnizMen + sumDphSnizMen) - Celkem vč. DPH - sníž. [měna])
  sumCelkSnizMen?: Big | null
  // Celkem vč. DPH - 2. sníž. [měna] (db: sumZklSniz2Men + sumDphSniz2Men) - Celkem vč. DPH - 2. sníž. [měna])
  sumCelkSniz2Men?: Big | null
  // Celkem vč. DPH - zákl. [měna] (db: sumZklZaklMen + sumDphZaklMen) - Celkem vč. DPH - zákl. [měna])
  sumCelkZaklMen?: Big | null
  // Celkem [měna] (db: SumCelkemMen) - Celkem)
  sumCelkemMen?: Big | null
  // Sleva [%] (db: SlevaDokl) - Sleva [%])
  slevaDokl?: Big | null
  // Kurz (db: Kurz) - Kurz)
  kurz?: Big | null
  // Kurz. množství (db: KurzMnozstvi) - Kurz. množství)
  kurzMnozstvi?: Big | null
  // V příkazu ? (db: StavUzivK) - V příkazu ?)
  stavUzivK?: StavUziv | null
  // Název firmy nebo jméno osoby (db: NazFirmy) - Název firmy - jméno)
  nazFirmy?: string | null
  // Ulice (db: Ulice) - Ulice)
  ulice?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
  // EAN (db: EanKod) - EAN)
  eanKod?: string | null
  // IČO (db: Ic) - IČO)
  ic?: string | null
  // DIČ (db: Dic) - DIČ)
  dic?: string | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Číslo bank. účtu (db: Buc) - Číslo účtu)
  buc?: string | null
  // IBAN (db: Iban) - IBAN)
  iban?: string | null
  // BIC (db: Bic) - BIC)
  bic?: string | null
  // Specifický symbol (db: SpecSym) - Specifický symbol)
  specSym?: string | null
  // Bezpoložkový doklad (db: BezPolozek) - bezpoložkový doklad)
  bezPolozek?: boolean | null
  // Je účetní (db: Ucetni) - Doklad je účetní)
  ucetni?: boolean | null
  // Snížená sazba DPH (db: SzbDphSniz) - Snížená)
  szbDphSniz?: Big | null
  // 2. snížená sazba DPH (db: SzbDphSniz2) - 2. snížená)
  szbDphSniz2?: Big | null
  // Základní sazba DPH (db: SzbDphZakl) - Základní)
  szbDphZakl?: Big | null
  // Místo plnění tuzemsko (db: UzpTuzemsko) - Místo plnění tuzemsko)
  uzpTuzemsko?: boolean | null
  // Zaúčtováno (db: Zuctovano) - Stav zaúčtování)
  zuctovano?: boolean | null
  // Datum zaúčtování (db: DatUcto) - Datum zaúčtování)
  datUcto?: Date | null
  // Vynechat ze salda (db: VyloucitSaldo) - Vynechat ze salda)
  vyloucitSaldo?: boolean | null
  // Storno (db: Storno) - Storno)
  storno?: boolean | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Typ faktury (db: IdTypDokl) - Typ faktury)
  typDokl?: AFTypFakturyPrijate | null
  // Měna (db: IdMeny) - Měna)
  mena?: AFMena | null
  // Konst. sym. (db: IdKonSym) - Kon. sym.)
  konSym?: AFKonstSymbol | null
  // Zkratka firmy (db: IdFirmy) - Zkratka firmy)
  firma?: AFAdresar | null
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat | null
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion | null
  // Účet dodavatele (db: IdBanSpojDod) - Účet dodavatele)
  banSpojDod?: AFAdresarBankovniUcet | null
  // Bankovní účet (db: IdBspBan) - Bankovní účet)
  bankovniUcet?: AFBankovniUcet | null
  // Typ skladového dokladu (db: IdTypDoklSkl) - Typ skladového dokladu)
  typDoklSkl?: AFTypSkladovyPohyb | null
  // Předpis zaúčtování (db: IdTypUcOp) - Předpis zaúčtování)
  typUcOp?: AFPredpisZauctovani | null
  // Účet DAL (db: IdPrimUcet) - Účet DAL)
  primUcet?: AFUcet | null
  // Účet MD (db: IdProtiUcet) - Účet MD)
  protiUcet?: AFUcet | null
  // Účet DPH základní sazba (db: IdDphZaklUcet) - DPH základní)
  dphZaklUcet?: AFUcet | null
  // Účet DPH snížená sazba (db: IdDphSnizUcet) - DPH snížená)
  dphSnizUcet?: AFUcet | null
  // Účet DPH 2. snížená sazba (db: IdDphSniz2Ucet) - DPH 2. snížená)
  dphSniz2Ucet?: AFUcet | null
  // Směr.kód (db: IdSmerKod) - Směr.kód)
  smerKod?: AFPenezniUstav | null
  // Stát DPH (db: IdStatDph) - Stát DPH)
  statDph?: AFStatDph | null
  // Řádky DPH (db: IdClenDph) - Řádky DPH)
  clenDph?: AFCleneniDph | null
  // Středisko (db: IdStred) - Středisko)
  stredisko?: AFStredisko | null
  // Činnost (db: IdCinnost) - Činnost)
  cinnost?: AFCinnost | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Stát odesl. (db: IdStatOdesl) - Stát odesl.)
  statOdesl?: AFStat | null
  // Stát určení (db: IdStatUrc) - Stát určení)
  statUrc?: AFStat | null
  // Stát původu (db: IdStatPuvod) - Stát původu)
  statPuvod?: AFStat | null
  // Podmínky dodání (db: IdDodPodm) - Podmínky dodání)
  dodPodm?: AFIntrastatDodaciPodminky | null
  // Transakce (db: IdObchTrans) - Transakce)
  obchTrans?: AFIntrastatObchodniTransakce | null
  // Druh dopravy (db: IdDruhDopr) - Druh dopravy)
  druhDopr?: AFIntrastatDruhDopravy | null
  // Zvláštní pohyby (db: IdZvlPoh) - Zvláštní pohyby)
  zvlPoh?: AFIntrastatZvlastniPohyb | null
  // Kraj určení (db: IdKrajUrc) - Kraj určení)
  krajUrc?: AFIntrastatKrajUrceni | null
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: any | null
  // Zodpovědná osoba (db: IdZodpOsoba) - Zodpovědná osoba)
  zodpOsoba?: any | null
  // Kontaktní osoba (db: IdKontaktOsoba) - Kontaktní osoba)
  kontaktOsoba?: AFKontakt | null
  // Kontaktní jméno (db: KontaktJmeno) - Jméno)
  kontaktJmeno?: string | null
  // Kontaktní e-mail (db: KontaktEmail) - E-mail)
  kontaktEmail?: string | null
  // Kontaktní telefon (db: KontaktTel) - Telefon)
  kontaktTel?: string | null
  // Čís. řada (db: IdRady) - Čís. řada)
  rada?: AFRadaFakturyPrijate | null
  // Osvobozená sazba DPH (db: IdSazbyDphOsv) - Osvobozená sazba DPH)
  sazbaDphOsv?: AFSazbaDph | null
  // Snížená sazba DPH (db: IdSazbyDphSniz) - Snížená sazba DPH)
  sazbaDphSniz?: AFSazbaDph | null
  // 2. snížená sazba DPH (db: IdSazbyDphSniz2) - 2. snížená sazba DPH)
  sazbaDphSniz2?: AFSazbaDph | null
  // Základní sazba DPH (db: IdSazbyDphZakl) - Základní sazba DPH)
  sazbaDphZakl?: AFSazbaDph | null
  // Smlouva (db: IdSmlouvy) - Smlouva)
  smlouva?: AFDodavatelskaSmlouva | null
  // Forma dopravy (db: IdFormaDopravy) - Forma dopravy)
  formaDopravy?: AFFormaDopravy | null
  // Uuid (db: Uuid) - Univerzální unikátní identifikátor)
  uuid?: string | null
  // Zdroj (db: Source) - Zdroj)
  source?: string | null
  // Výkaz EkoKom (db: EkokomK) - Výkaz EkoKom)
  ekokomK?: Ekokom | null
  // Dodat na adresu (db: IdDodatNa) - Dodat na adresu)
  dodatNa?: AFAdresar | null
  // Řádek kontrolního hlášení DPH (db: IdClenKonVykDph) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni | null
  // Datum upomínky 1 (db: DatUp1) - Datum upomínky 1)
  datUp1?: Date | null
  // Datum upomínky 2 (db: DatUp2) - Datum upomínky 2)
  datUp2?: Date | null
  // Datum smíru (db: DatSmir) - Datum smíru)
  datSmir?: Date | null
  // Datum penalizace (db: DatPenale) - Datum penalizace)
  datPenale?: Date | null
  // Podpis příkazu (db: PodpisPrik) - Vyžadovat podpis před vystavením příkazu k úhradě)
  podpisPrik?: boolean | null
  // Příkazy [Kč] (db: PrikazSum) - Odeslané příkazy [Kč])
  prikazSum?: Big | null
  // Příkazy [měna] (db: PrikazSumMen) - Odeslané příkazy [měna])
  prikazSumMen?: Big | null
  // Již uhrazeno [Kč] (db: JuhSum) - Již uhrazeno [Kč])
  juhSum?: Big | null
  // Již uhrazeno [měna] (db: JuhSumMen) - Již uhrazeno [měna])
  juhSumMen?: Big | null
  // Uhr. k datu [Kč] (db: JuhDat) - Uhr. k datu [Kč])
  juhDat?: Big | null
  // Uhr. k datu [měna] (db: JuhDatMen) - Uhr. k datu [měna])
  juhDatMen?: Big | null
  // Zbývá uhradit [Kč] (db: sumCelkem - juhSum) - Zbývá uhradit [Kč])
  zbyvaUhradit?: Big | null
  // Zbývá uhradit [měna] (db: sumCelkemMen - juhSumMen) - Zbývá uhradit [měna])
  zbyvaUhraditMen?: Big | null
  // Forma úhrady (db: IdFormaUhradyCis) - Forma úhrady)
  formaUhradyCis?: AFFormaUhrady | null
  // Stav úhrady dokladu (db: StavUhrK) - Stav úhrady dokladu)
  stavUhrK?: StavUhr | null
  // Již uhrazeno přeplatky [Kč] (db: JuhSumPp) - Již uhrazeno přeplatky [Kč])
  juhSumPp?: Big | null
  // Již uhrazeno přeplatky [měna] (db: JuhSumPpMen) - Již uhrazeno přeplatky [měna])
  juhSumPpMen?: Big | null
  // Přeplaceno [Kč] (db: SumPrepl) - Přeplaceno [Kč])
  sumPrepl?: Big | null
  // Přeplaceno [měna] (db: SumPreplMen) - Přeplaceno [měna])
  sumPreplMen?: Big | null
  // Zálohy (db: SumZalohy) - Zálohy)
  sumZalohy?: Big | null
  // Zálohy [měna] (db: SumZalohyMen) - Zálohy [měna])
  sumZalohyMen?: Big | null
  // Odpočet zál. (db: StavOdpocetK) - Odpočet zál.)
  stavOdpocetK?: StavOdp | null
  // Generovat sklad. doklady (db: GenerovatSkl) - Generovat sklad. doklady)
  generovatSkl?: boolean | null
  // Hrom. fakturace (db: HromFakt) - Hrom. fakturace)
  hromFakt?: boolean | null
  // Zdroj pro sklad. doklady (db: ZdrojProSkl) - Zdroj pro sklad. doklady)
  zdrojProSkl?: boolean | null
  // Zákaz proplacení (db: ZakazPlatba) - Zákaz proplacení)
  zakazPlatba?: boolean | null
  // Dobropisováno (db: Dobropisovano) - Dobropisováno)
  dobropisovano?: boolean | null
  // Celkem bez záloh [Kč] (db: sumCelkem + sumZalohy) - Celkem bez záloh)
  sumCelkemBezZaloh?: Big | null
  // Celkem bez záloh [měna] (db: sumCelkemMen + sumZalohyMen) - Celkem bez záloh)
  sumCelkemBezZalohMen?: Big | null

  // Navázané doklady (type: VAZEBNI_DOKLAD) - vazebni-doklady)
  'vazebni-doklady'?: AFVazebniDoklad[]
  get vazebniDoklady(): AFVazebniDoklad[] | undefined { return this['vazebni-doklady']}
  // Položky faktur (type: FAKTURA_IN_POLOZKA) - polozkyDokladu)
  polozkyDokladu?: AFFakturaPrijataPolozka[]
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
    updatedBy : {
      key: 'updatedBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    createdBy : {
      key: 'createdBy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      maxLength: 254,
      
    },
    createdDate : {
      key: 'createdDate',
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
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    typDokl : {
      key: 'typDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyPrijate',
      
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
    region : {
      key: 'region',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
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
    typDoklSkl : {
      key: 'typDoklSkl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      
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
      afClass: 'AFRadaFakturyPrijate',
      
    },
    sazbaDphOsv : {
      key: 'sazbaDphOsv',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    sazbaDphSniz : {
      key: 'sazbaDphSniz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    sazbaDphSniz2 : {
      key: 'sazbaDphSniz2',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    sazbaDphZakl : {
      key: 'sazbaDphZakl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSazbaDph',
      
    },
    smlouva : {
      key: 'smlouva',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFDodavatelskaSmlouva',
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
    dodatNa : {
      key: 'dodatNa',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
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
    zakazPlatba : {
      key: 'zakazPlatba',
      type: PropertyType.Logic,
      isArray: false,
      
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
      afClass: 'AFFakturaPrijataPolozka'
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