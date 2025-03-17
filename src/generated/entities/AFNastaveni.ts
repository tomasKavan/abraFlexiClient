import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFStat } from './AFStat'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFMena } from './AFMena'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFTypFakturyPrijate } from './AFTypFakturyPrijate'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFTypNabidkyVydane } from './AFTypNabidkyVydane'
import { AFTypObjednavkyPrijate } from './AFTypObjednavkyPrijate'
import { AFTypPoptavkyVydane } from './AFTypPoptavkyVydane'
import { AFTypNabidkyPrijate } from './AFTypNabidkyPrijate'
import { AFTypObjednavkyVydane } from './AFTypObjednavkyVydane'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFTypPohledavky } from './AFTypPohledavky'
import { AFTypZavazku } from './AFTypZavazku'
import { AFTypPokladniPohyb } from './AFTypPokladniPohyb'
import { AFRegion } from './AFRegion'
import { AFUcet } from './AFUcet'
import { AFAdresar } from './AFAdresar'
import { AFTypBanka } from './AFTypBanka'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFTypDokladu } from './AFTypDokladu'


import { TypUcJednotky, ZobrLogo, Jazyk, LogoPozice, RezimRezervaci, ZastupceTyp, TydenPracDoba, DenniKurz, RocniKurz, JakyTypDokl, PrepocetCen, FapDatProDuzpUctoK, AutoSendMailMod, ZobrazWebKompMod } from '../AFEntityEnums'

export class AFNastaveni extends AFEntity {
  static EntityPath: string = 'nastaveni'
  static EntityName: string = 'Nastavení'
  static EntityType: string = 'NASTAVENI'

  // ID (db: IdNastav) - ID)
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Změny budou platné od data (db: PlatiOdData) - Změny budou platné od data)
  platiOdData?: Date
  // Jméno (db: NazFirmy) - Jméno)
  nazFirmy?: string
  // IČO, DIČ (db: Ic) - IČO, DIČ)
  ic?: string
  // DIČ (db: Dic) - DIČ)
  dic?: string
  // EAN (db: EanKod) - EAN)
  eanKod?: string
  // Ulice (db: Ulice) - Ulice)
  uliceNazev?: string
  // Č. popisné (db: CisPop) - Č.p.)
  cisPop?: string
  // Č. orientační (db: CisOr) - Č.o.)
  cisOr?: string
  // Město (db: Mesto) - Město)
  mesto?: string
  // PSČ (db: Psc) - PSČ)
  psc?: string
  // WWW (db: Www) - WWW)
  www?: string
  // E-mail (db: Email) - E-mail)
  email?: string
  // Datová schránka (db: DatovaSchranka) - Datová schránka)
  datovaSchranka?: string
  // Fax (db: Fax) - Fax)
  fax?: string
  // Mobil (db: Mobil) - Mobil)
  mobil?: string
  // Telefon (db: Tel) - Telefon)
  tel?: string
  // Poštovní adresa je shodná se sídlem (db: PostovniShodna) - Poštovní adresa je shodná se sídlem)
  postovniShodna?: boolean
  // Pošt. ulice (db: FaUlice) - Ulice)
  faUliceNazev?: string
  // Č. popisné (db: FaCisPop) - Č.p.)
  faCisPop?: string
  // Č. orientační (db: FaCisOr) - Č.o.)
  faCisOr?: string
  // Pošt. město (db: FaMesto) - Město)
  faMesto?: string
  // Pošt. PSČ (db: FaPsc) - PSČ)
  faPsc?: string
  // Fakturační adresa je shodná se sídlem (db: FakturacniShodna) - Fakturační adresa je shodná se sídlem)
  fakturacniShodna?: boolean
  // Pošt. ulice (db: PostUlice) - Ulice)
  postUliceNazev?: string
  // Č. popisné (db: PostCisPop) - Č.p.)
  postCisPop?: string
  // Č. orientační (db: PostCisOr) - Č.o.)
  postCisOr?: string
  // Pošt. město (db: PostMesto) - Město)
  postMesto?: string
  // Pošt. PSČ (db: PostPsc) - PSČ)
  postPsc?: string
  // Spisová značka (db: SpisZnac) - Spisová značka)
  spisZnac?: string
  // Spisová značka EN (db: SpisZnacA) - Spisová značka EN)
  spisZnacA?: string
  // Spisová značka DE (db: SpisZnacB) - Spisová značka DE)
  spisZnacB?: string
  // Spisová značka FR (db: SpisZnacC) - Spisová značka FR)
  spisZnacC?: string
  // Plátce DPH (db: PlatceDph) - Plátce DPH)
  platceDph?: boolean
  // Typ účetní jednotky (db: TypUcJednotkyK) - Typ účetní jednotky)
  typUcJednotkyK?: TypUcJednotky
  // Zvláštní režim jednoho správního místa (MOSS, platné do 30.6.2021) (db: Moss) - Zvláštní režim jednoho správního místa (MOSS, platné do 30.6.2021))
  moss?: boolean
  // OSS - režim EU (db: OssEU) - OSS - režim EU)
  ossEU?: boolean
  // OSS - režim mimo EU (db: OssMimoEU) - OSS - režim mimo EU)
  ossMimoEU?: boolean
  // OSS - dovozní režim (db: OssDovoz) - OSS - dovozní režim)
  ossDovoz?: boolean
  // Omezovat výběr států DPH (db: OmezovatVyberStatu) - Omezovat výběr států DPH)
  omezovatVyberStatu?: boolean
  // Převažující činnost (db: Cinnost) - Převažující činnost)
  cinnost?: string
  // Fyzická osoba (db: FyzOsoba) - Fyzická osoba)
  fyzOsoba?: boolean
  // Jméno (db: FyzOsJmeno) - Jméno)
  fyzOsJmeno?: string
  // Příjmení (db: FyzOsPrijmeni) - Příjmení)
  fyzOsPrijmeni?: string
  // Titul (db: FyzOsTitul) - Titul)
  fyzOsTitul?: string
  // Titul za jménem (db: FyzOsTitulZa) - Titul za jménem)
  fyzOsTitulZa?: string
  // Postavení (db: OprPostav) - Postavení)
  oprPostav?: string
  // Příjmení (db: OprPrijmeni) - Příjmení)
  oprPrijmeni?: string
  // Jméno (db: OprJmeno) - Jméno)
  oprJmeno?: string
  // Vyžadovat podpis před vystavením příkazu k úhradě (db: PodpisPrik) - Vyžadovat podpis před vystavením příkazu k úhradě)
  podpisPrik?: boolean
  // Účetnictví (db: PodvojUcto) - vést účetnictví)
  podvojUcto?: boolean
  // Vést Intrastat (db: Intrastat) - Vést Intrastat)
  intrastat?: boolean
  // Splatnost ve dnech (db: SplatDny) - Splatnost ve dnech)
  splatDny?: number
  // Výchozí splatnost [dny] (db: SplatDnyNakup) - Výchozí splatnost [dny])
  splatDnyNakup?: number
  // Právní forma účet. jednotky (db: PravFormaPodnik) - Právní forma účet. jednotky)
  pravFormaPodnik?: string
  // Způsob zobrazení (db: ZobrLogoK) - Způsob zobrazení)
  zobrLogoK?: ZobrLogo
  // Sklad nahrávat do účetnictví (db: SklUcto) - Sklad nahrávat do účetnictví)
  sklUcto?: boolean
  // Sklad je FIFO (db: SklFifo) - Sklad je FIFO)
  sklFifo?: boolean
  // Umožnit generování požadavků na výdej (db: SklGenerovatPozadavky) - Umožnit generování požadavků na výdej)
  sklGenerovatPozadavky?: boolean
  // Kontrolovat firmy a účty při vytváření dokladu (db: AdrKontrolovatFirmy) - Kontrolovat firmy a účty při vytváření dokladu)
  adrKontrolovatFirmy?: boolean
  // Při příjmu aktualizovat nákupní cenu v ceníku (db: SklAktualNakupCena) - Při příjmu aktualizovat nákupní cenu v ceníku)
  sklAktualNakupCena?: boolean
  // Automaticky generovat číslo zakázky shodné s objednávkou (db: AutoZakazka) - Automaticky generovat číslo zakázky shodné s objednávkou)
  autoZakazka?: boolean
  // Transakční kód (db: AvTranKod) - Transakční kód)
  avTranKod?: string
  // Směrový kód (db: AvSmerKod) - Směrový kód)
  avSmerKod?: string
  // ... export z ABRA Flexi (db: ElPokExport) - ... export z ABRA Flexi)
  elPokExport?: string
  // ... import do ABRA Flexi (db: ElPokImport) - ... import do ABRA Flexi)
  elPokImport?: string
  // ... INI soubor (db: ElPokIni) - ... INI soubor)
  elPokIni?: string
  // Kurz duální měny (db: KurzDualMena) - Kurz duální měny)
  kurzDualMena?: Big
  // Doplňující text na fakturu (db: DoplnText) - Doplňující text na fakturu)
  doplnText?: string
  // Jazyk 1 (db: Jazyk1K) - Jazyk 1)
  jazyk1K?: Jazyk
  // Jazyk 2 (db: Jazyk2K) - Jazyk 2)
  jazyk2K?: Jazyk
  // Jazyk 3 (db: Jazyk3K) - Jazyk 3)
  jazyk3K?: Jazyk
  // Jazyk 4 (db: Jazyk4K) - Jazyk 4)
  jazyk4K?: Jazyk
  // Pozice loga (db: LogoPoziceK) - Pozice loga)
  logoPoziceK?: LogoPozice
  // Režim rezervací (db: RezimRezervaciK) - Režim rezervací)
  rezimRezervaciK?: RezimRezervaci
  // Postmigrace (db: PostMigrace) - Postmigrace)
  postMigrace?: boolean
  // UUID Firmy (db: FirmaUUID) - UUID Firmy)
  firmaUUID?: string
  // Povolit rezervaci do záporu (db: RezervovatZapor) - Povolit rezervaci do záporu)
  rezervovatZapor?: boolean
  // Typ (db: ZastupceTypK) - Typ)
  zastupceTypK?: ZastupceTyp
  // Kód (db: ZastupceKod) - Kód)
  zastupceKod?: string
  // Název právnické osoby (db: ZastupceNazev) - Název právnické osoby)
  zastupceNazev?: string
  // IČO právnické osoby (db: ZastupceIc) - IČO právnické osoby)
  zastupceIc?: string
  // Příjmení (db: ZastupcePrijmeni) - Příjmení)
  zastupcePrijmeni?: string
  // Jméno (db: ZastupceJmeno) - Jméno)
  zastupceJmeno?: string
  // Dat. nar. (db: ZastupceDatNar) - Dat. nar.)
  zastupceDatNar?: Date
  // Evid. číslo (db: ZastupceEvCislo) - Evid. číslo)
  zastupceEvCislo?: string
  // Počet dnů dovolené za den absence (do r. 2020) (db: MzdDnuDovolAbs) - Počet dnů dovolené za den absence (do r. 2020))
  mzdDnuDovolAbs?: Big
  // Krátit dovolenou za neomluvenou absenci (db: MzdKratitDovolAbs) - Krátit dovolenou za neomluvenou absenci)
  mzdKratitDovolAbs?: boolean
  // Příspěvek na penzijní připojištění (db: MzdPenzPrip) - Příspěvek na penzijní připojištění)
  mzdPenzPrip?: boolean
  // Procento příspěvku na penzijní připojištění (db: MzdPenzPripProc) - Procento příspěvku na penzijní připojištění)
  mzdPenzPripProc?: Big
  // Dnů v týdnu (db: MzdSmenyDnuTydne) - Dnů v týdnu)
  mzdSmenyDnuTydne?: number
  // Hodin denně (db: MzdSmenyHodinDenne) - Hodin denně)
  mzdSmenyHodinDenne?: Big
  // Začátek pracovní doby (db: MzdSmenyPocPracDoby) - Začátek pracovní doby)
  mzdSmenyPocPracDoby?: Big
  // Výpočet náhrady za svátky z průměru (db: MzdSmenySvatkyPrum) - Výpočet náhrady za svátky z průměru)
  mzdSmenySvatkyPrum?: boolean
  // Automaticky nastavovat období proplacení nemoci (db: MzdNemocProplatAuto) - Automaticky nastavovat období proplacení nemoci)
  mzdNemocProplatAuto?: boolean
  // Při výpočtu mezd upozornit na kontrolu období proplacení u nemocí (db: MzdNemocProplatVarov) - Při výpočtu mezd upozornit na kontrolu období proplacení u nemocí)
  mzdNemocProplatVarov?: boolean
  // Refundace 50% náhrady mzdy za nemoc (db: MzdRefundNahrNemoc) - Refundace 50% náhrady mzdy za nemoc)
  mzdRefundNahrNemoc?: boolean
  // Promile pro výpočet povinného pojištění (db: MzdPromilePovPojisteni) - Promile pro výpočet povinného pojištění)
  mzdPromilePovPojisteni?: Big
  // Procento náhrady při kurzarbeitu (db: MzdProcentoKurzarbeit) - Procento náhrady při kurzarbeitu)
  mzdProcentoKurzarbeit?: Big
  // Sociální pojištění (db: MzdSplatSocPoj) - Sociální pojištění)
  mzdSplatSocPoj?: number
  // Zdravotní pojištění (db: MzdSplatZdravPoj) - Zdravotní pojištění)
  mzdSplatZdravPoj?: number
  // Daň zálohová (db: MzdSplatDanZal) - Daň zálohová)
  mzdSplatDanZal?: number
  // Daň srážková (db: MzdSplatDanSra) - Daň srážková)
  mzdSplatDanSra?: number
  // Daň rezident (db: MzdSplatDanRez) - Daň rezident)
  mzdSplatDanRez?: number
  // Dobírka (db: MzdSplatDobirka) - Dobírka)
  mzdSplatDobirka?: number
  // Příspěvky (db: MzdSplatPrispevky) - Příspěvky)
  mzdSplatPrispevky?: number
  // Týdenní pracovní doba (db: MzdTydenPracDobaK) - Týdenní pracovní doba)
  mzdTydenPracDobaK?: TydenPracDoba
  // Denní kurz (db: DenniKurzK) - Denní kurz)
  denniKurzK?: DenniKurz
  // Měsíční/roční kurz (db: RocniKurzK) - Měsíční/roční kurz)
  rocniKurzK?: RocniKurz
  // Faktur vydaných (db: JakyTypFavK) - Faktur vydaných)
  jakyTypFavK?: JakyTypDokl
  // Pohledávek (db: JakyTypPhlK) - Pohledávek)
  jakyTypPhlK?: JakyTypDokl
  // Faktur přijatých (db: JakyTypFapK) - Faktur přijatých)
  jakyTypFapK?: JakyTypDokl
  // Závazků (db: JakyTypZavK) - Závazků)
  jakyTypZavK?: JakyTypDokl
  // Interních dokladů (db: JakyTypIntK) - Interních dokladů)
  jakyTypIntK?: JakyTypDokl
  // Poptávek přijatých (db: JakyTypPppK) - Poptávek přijatých)
  jakyTypPppK?: JakyTypDokl
  // Nabídek vydaných (db: JakyTypNavK) - Nabídek vydaných)
  jakyTypNavK?: JakyTypDokl
  // Objednávek přijatých (db: JakyTypObpK) - Objednávek přijatých)
  jakyTypObpK?: JakyTypDokl
  // Poptávek vydaných (db: JakyTypPpvK) - Poptávek vydaných)
  jakyTypPpvK?: JakyTypDokl
  // Nabídek přijatých (db: JakyTypNapK) - Nabídek přijatých)
  jakyTypNapK?: JakyTypDokl
  // Objednávek vydaných (db: JakyTypObvK) - Objednávek vydaných)
  jakyTypObvK?: JakyTypDokl
  // Příjemek/výdejek (db: JakyTypSklK) - Příjemek/výdejek)
  jakyTypSklK?: JakyTypDokl
  // Banky (db: JakyTypBanK) - Banky)
  jakyTypBanK?: JakyTypDokl
  // Pokladny (db: JakyTypPokK) - Pokladny)
  jakyTypPokK?: JakyTypDokl
  // Při změně odběratele přepočítat ceny (db: PrepocetCenK) - Při změně odběratele přepočítat ceny)
  prepocetCenK?: PrepocetCen
  // Manuální přepis čísel dokladů (db: ManualCisDokl) - Umožnit manuální přepsání interních čísel dokladů)
  manualCisDokl?: boolean
  // Otočit typ pohybu a částku v modulu Banka při automatickém párování dobropisu (db: ParovaniOtoceniUhrady) - Otočit typ pohybu a částku v modulu Banka při automatickém párování dobropisu)
  parovaniOtoceniUhrady?: boolean
  // Přenášení střediska z firmy (db: PrenFirStred) - Automatické vyplnění střediska u dokladu podle střediska u firmy v adresáři)
  prenFirStred?: boolean
  // Povolit odpočet neuhrazené vydané zálohy (db: OdpocNeuhrZalFav) - Povolit odpočet neuhrazené vydané zálohy)
  odpocNeuhrZalFav?: boolean
  // Povolit odpočet neuhrazené přijaté zálohy (db: OdpocNeuhrZalFap) - Povolit odpočet neuhrazené přijaté zálohy)
  odpocNeuhrZalFap?: boolean
  // Položky automatického zaokrouhlení dokladu nezahrnovat do DPH (individuální metoda zaokrouhlení) (db: ZaokrNulovaSazba) - Položky automatického zaokrouhlení dokladu nezahrnovat do DPH (individuální metoda zaokrouhlení))
  zaokrNulovaSazba?: boolean
  // Přev.činn.NACE (db: Nace) - Převažující činnost (kód NACE))
  nace?: string
  // Zvláštní režim DPH (db: OsobUpravaDph) - Zvláštní režim DPH)
  osobUpravaDph?: boolean
  // Datum pro plnění data Uplatnit zdaň. pl. (db: FapDatProDuzpUctoK) - Datum pro plnění data Uplatnit zdaň. pl.)
  fapDatProDuzpUctoK?: FapDatProDuzpUctoK
  // Automaticky odesílat doklady mailem (db: AutoSendMailModK) - Automaticky odesílat doklady mailem)
  autoSendMailModK?: AutoSendMailMod
  // Adresa skryté kopie (db: AutoSendMailBccEmail) - Adresa skryté kopie)
  autoSendMailBccEmail?: string
  // Způsob zobrazení (db: ZobrazWebModK) - Způsob zobrazení)
  zobrazWebModK?: ZobrazWebKompMod
  // Chránit výplatní pásky heslem (db: SifrovaniPdf) - Chránit výplatní pásky heslem)
  sifrovaniPdf?: boolean
  // Verze pro cachování (db: VersionForCaching) - Verze)
  versionForCaching?: number
  // Zpracování GDPR (db: ZpracovaniGdpr) - Zpracování GDPR)
  zpracovaniGdpr?: boolean
  // Zobrazovat obrázkové přílohy ceníku (db: PolozkyCenikObrazky) - Zobrazovat obrázkové přílohy ceníku v editaci položek dokladů a na ceníku)
  polozkyCenikObrazky?: boolean
  // Začátek užití novely ZDPH 2019 (db: DatZacNovelyZdph19) - Začátek užití novely ZDPH 2019)
  datZacNovelyZdph19?: Date
  // Stát legislativy (db: IdStatuLeg) - Stát legislativy)
  statLegislativa?: AFStat
  // Typ organizace (db: IdTypOrg) - Typ organizace)
  typOrganizace?: AFTypOrganizace
  // Domácí měna (db: IdMeny) - Domácí měna)
  mena?: AFMena
  // Typ dokladu vydaných faktur pro obchod (db: IdTdObFav) - Vydané faktury)
  tdObchodFav?: AFTypFakturyVydane
  // Typ dokladu vydaných záloh pro obchod (db: IdTdObFavZal) - Vydané zálohy)
  tdObchodFavZal?: AFTypFakturyVydane
  // Typ dokladu přijatých faktur pro obchod (db: IdTdObFap) - Přijaté faktury)
  tdObchodFap?: AFTypFakturyPrijate
  // Typ dokladu příjemek na sklad pro obchod (db: IdTdObSklPri) - Přijemky na sklad)
  tdObchodSklPri?: AFTypSkladovyPohyb
  // Typ dokladu výdejky ze skladu pro obchod (db: IdTdObSklVyd) - Výdejky ze skladu)
  tdObchodSklVyd?: AFTypSkladovyPohyb
  // Typ dokladu nabídek vydaných pro obchod (db: IdTdObNav) - Nabídky vydané)
  tdObchodNav?: AFTypNabidkyVydane
  // Typ dokladu objednávek přijatých pro obchod (db: IdTdObObp) - Objednávky přijaté)
  tdObchodObp?: AFTypObjednavkyPrijate
  // Typ dokladu objednávek přijatých z EDI pro obchod (db: IdTdObObpEdi) - Objednávka přijatá z EDI)
  tdObchodObpEdi?: AFTypObjednavkyPrijate
  // Typ dokladu poptávek vydaných pro obchod (db: IdTdObPpv) - Poptávky vydané)
  tdObchodPpv?: AFTypPoptavkyVydane
  // Typ dokladu nabídek přijatých pro obchod (db: IdTdObNap) - Nabídky přijaté)
  tdObchodNap?: AFTypNabidkyPrijate
  // Typ dokladu objednávek vydaných pro obchod (db: IdTdObObv) - Objednávky vydané)
  tdObchodObv?: AFTypObjednavkyVydane
  // Typ dokladu faktur vydaných pro ZDD (db: IdTdFavZdd) - Vydaný)
  tdFavZalohovyDanDokl?: AFTypFakturyVydane
  // Typ dokladu faktur přijatých pro ZDD (db: IdTdFapZdd) - Přijatý)
  tdFapZalohovyDanDokl?: AFTypFakturyPrijate
  // Typ dokladu přijaté faktury z EDI (db: IdTdFapEdi) - Přijaté faktury z EDI)
  tdFapEdi?: AFTypFakturyPrijate
  // Typ dokladu příjemky z EDI (db: IdTdSklEdi) - Typ příjemky z EDI)
  tdSklEdi?: AFTypSkladovyPohyb
  // Typ dokladu kurzových rozdílů - náklad (db: IdTdKurzRozNaklad) - Náklad)
  tdKurzovyRozdilNaklad?: AFTypInternihoDokladu
  // Typ dokladu kurzových rozdílů - výnos (db: IdTdKurzRozVynos) - Výnos)
  tdKurzovyRozdilVynos?: AFTypInternihoDokladu
  // Typ dokladu zbytek náklad (db: IdTdZbytekNaklad) - Náklad)
  tdZbytekNaklad?: AFTypInternihoDokladu
  // Typ dokladu zbytek výnos (db: IdTdZbytekVynos) - Výnos)
  tdZbytekVynos?: AFTypInternihoDokladu
  // Typ dokladu pro přeplatky pohledávek (db: IdTdPreplPhl) - Výnos)
  tdPreplatekPhl?: AFTypPohledavky
  // Typ dokladu pro přeplatky závazků (db: IdTdPreplZav) - Náklad)
  tdPreplatekZav?: AFTypZavazku
  // Typ dokladu pro pokladní doklady (db: IdTdEpPok) - ... pokladních dokladů)
  tdEpGeneracePokladnichDokl?: AFTypPokladniPohyb
  // Typ dokladu pro výdej ze skladu (db: IdTdEpSkl) - ... výdej ze skladu)
  tdEpGeneraceVydejekZeSkladu?: AFTypPokladniPohyb
  // Stát (db: IdStatu) - Stát)
  stat?: AFStat
  // Stát (db: IdFaStatu) - Stát)
  statFakturacniAdresy?: AFStat
  // Stát (db: IdPostStatu) - Stát)
  statPostovniAdresy?: AFStat
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion
  // Kraj (db: IdFaRegion) - Kraj)
  regionFakturacniAdresy?: AFRegion
  // Kraj (db: IdPostRegion) - Kraj)
  regionPostovniAdresy?: AFRegion
  // Duální měna (db: IdMenyDual) - Duální měna)
  menaDual?: AFMena
  // Náklad (db: IdUcetZaokrNaklad) - Náklad)
  ucetZaokrNaklad?: AFUcet
  // Výnos (db: IdUcetZaokrVynos) - Výnos)
  ucetZaokrVynos?: AFUcet
  // Náklad (db: IdUcetKrOdpoctuNaklad) - Náklad)
  ucetKrOdpoctuNaklad?: AFUcet
  // Výnos (db: IdUcetKrOdpoctuVynos) - Výnos)
  ucetKrOdpoctuVynos?: AFUcet
  // Krajský finanční úřad (db: IdFuKraj) - Krajský finanční úřad)
  fuKraj?: AFAdresar
  // Územní pracoviště (db: IdFuUzemPrac) - Územní pracoviště)
  fuUzemPrac?: AFAdresar
  // Typ dokladu pro bankovní příjem (db: IdTdBanPrijem) - Bankovní příjem)
  tdBanPrijem?: AFTypBanka
  // Typ dokladu pro bankovní výdej (db: IdTdBanVydej) - Bankovní výdej)
  tdBanVydej?: AFTypBanka
  // Adresa a bankovní spojení (db: IdMzdAdrSocPoj) - Adresa a bankovní spojení)
  mzdAdrSocPoj?: AFAdresar
  // Adresa (db: IdMzdAdrDan) - Adresa)
  mzdAdrDan?: AFAdresar
  // Bankovní spojení (db: IdMzdBanDanZal) - Bankovní spojení)
  mzdBanDanZal?: AFAdresarBankovniUcet
  // Bankovní spojení (db: IdMzdBanDanSra) - Bankovní spojení)
  mzdBanDanSra?: AFAdresarBankovniUcet
  // Bankovní spojení (db: IdMzdBanDanRez) - Bankovní spojení)
  mzdBanDanRez?: AFAdresarBankovniUcet
  // Typ dokladu závazku sociálního pojištění pro mzdy (db: IdMzdTdZavSoc) - Typ závazku)
  mzdTdZavSoc?: AFTypZavazku
  // Předpis zaúčtování - zaměstnanec (db: IdMzdTuoZavSocZam) - Předpis zaúčtování - zaměstnanec)
  mzdTuoZavSocZam?: AFPredpisZauctovani
  // Předpis zaúčtování - zaměstnavatel (db: IdMzdTuoZavSocFir) - Předpis zaúčtování - zaměstnavatel)
  mzdTuoZavSocFir?: AFPredpisZauctovani
  // Typ dokladu závazku zdravotního pojištění pro mzdy (db: IdMzdTdZavZdrav) - Typ závazku)
  mzdTdZavZdrav?: AFTypZavazku
  // Předpis zaúčtování - zaměstnanec (db: IdMzdTuoZavZdrZam) - Předpis zaúčtování - zaměstnanec)
  mzdTuoZavZdrZam?: AFPredpisZauctovani
  // Předpis zaúčtování - zaměstnavatel (db: IdMzdTuoZavZdrFir) - Předpis zaúčtování - zaměstnavatel)
  mzdTuoZavZdrFir?: AFPredpisZauctovani
  // Typ dokladu závazku daňové zálohy pro mzdy (db: IdMzdTdZavDanZal) - Typ závazku)
  mzdTdZavDanZal?: AFTypZavazku
  // Typ dokladu závazku daňové srážky pro mzdy (db: IdMzdTdZavDanSra) - Typ závazku)
  mzdTdZavDanSra?: AFTypZavazku
  // Typ dokladu závazku daňové rezervy pro mzdy (db: IdMzdTdZavDanRez) - Typ závazku)
  mzdTdZavDanRez?: AFTypZavazku
  // Typ dokladu závazku záloh pro mzdy (db: IdMzdTdZavZaloha) - Typ závazku záloh)
  mzdTdZavZaloha?: AFTypZavazku
  // Typ dokladu závazku srážek pro mzdy (db: IdMzdTdZavSrazka) - Typ závazku srážek)
  mzdTdZavSrazka?: AFTypZavazku
  // Typ dokladu závazku dobírky pro mzdy (db: IdMzdTdZavDobirka) - Typ závazku dobírek)
  mzdTdZavDobirka?: AFTypZavazku
  // Typ interního dokladu hrubé mzdy (db: IdMzdTdIntHruba) - Typ int.dokl. hrubé mzdy)
  mzdTdIntHruba?: AFTypInternihoDokladu
  // Typ interního dokladu náhrady mzdy (db: IdMzdTdIntNahrad) - Typ int.dokl. náhrady mzdy)
  mzdTdIntNahrad?: AFTypInternihoDokladu
  // Typ interního dokladu cestovné do limitu pro mzdy (db: IdMzdTdIntCestDoLim) - do limitu)
  mzdTdIntCestDoLim?: AFTypInternihoDokladu
  // Typ interního dokladu cestovné nad limit pro mzdy (db: IdMzdTdIntCestNadLim) - nad limit)
  mzdTdIntCestNadLim?: AFTypDokladu
  // Typ interního dokladu stravenkového paušálu do limitu pro mzdy (db: IdMzdTdIntStravPausDoLim) - do limitu)
  mzdTdIntStravPausDoLim?: AFTypInternihoDokladu
  // Typ interního dokladu stravenkového paušálu nad limit pro mzdy (db: IdMzdTdIntStravPausNadLim) - nad limit)
  mzdTdIntStravPausNadLim?: AFTypDokladu
  // Typ interního dokladu homeoffice do limitu pro mzdy (db: IdMzdTdIntHomeofficeDoLim) - do limitu)
  mzdTdIntHomeofficeDoLim?: AFTypDokladu
  // Typ interního dokladu homeoffice nad limitu pro mzdy (db: IdMzdTdIntHomeofficeNadLim) - nad limit)
  mzdTdIntHomeofficeNadLim?: AFTypDokladu
  // Typ dokl. srážky stravenek (db: IdMzdTdSrazkaStrav) - Typ dokl. srážky stravenek)
  mzdTdSrazkaStrav?: AFTypDokladu
  // Typ dokl. stravenky (db: IdMzdTdStravenka) - Typ dokl. stravenky)
  mzdTdStravenka?: AFTypDokladu
  // Předpis příspěvek zaměstnance (db: IdMzdTuoStravZam) - Předpis příspěvek zaměstnance)
  mzdTuoStravZam?: AFPredpisZauctovani
  // Předpis příspěvek firmy do limitu (db: IdMzdTuoStravFirDoLim) - Předpis příspěvek firmy do limitu)
  mzdTuoStravFirDoLim?: AFPredpisZauctovani
  // Předpis příspěvek firmy nad limit (db: IdMzdTuoStravFirNadLim) - Předpis příspěvek firmy nad limit)
  mzdTuoStravFirNadLim?: AFPredpisZauctovani
  // Typ int. dokl. příspěvků (db: IdMzdTdIntPrispevky) - Typ int. dokl. příspěvků)
  mzdTdIntPrispevky?: AFTypDokladu
  // Typ závazku příspěvků (db: IdMzdTdZavPrispevky) - Typ závazku příspěvků)
  mzdTdZavPrispevky?: AFTypDokladu



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
    platiOdData : {
      key: 'platiOdData',
      type: PropertyType.Date,
      isArray: false,
      
    },
    nazFirmy : {
      key: 'nazFirmy',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
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
    eanKod : {
      key: 'eanKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    uliceNazev : {
      key: 'uliceNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cisPop : {
      key: 'cisPop',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    cisOr : {
      key: 'cisOr',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
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
    www : {
      key: 'www',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    email : {
      key: 'email',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    datovaSchranka : {
      key: 'datovaSchranka',
      type: PropertyType.String,
      isArray: false,
      maxLength: 10,
      
    },
    fax : {
      key: 'fax',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mobil : {
      key: 'mobil',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    tel : {
      key: 'tel',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    postovniShodna : {
      key: 'postovniShodna',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    faUliceNazev : {
      key: 'faUliceNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    faCisPop : {
      key: 'faCisPop',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    faCisOr : {
      key: 'faCisOr',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
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
    fakturacniShodna : {
      key: 'fakturacniShodna',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    postUliceNazev : {
      key: 'postUliceNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    postCisPop : {
      key: 'postCisPop',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    postCisOr : {
      key: 'postCisOr',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    postMesto : {
      key: 'postMesto',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    postPsc : {
      key: 'postPsc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    spisZnac : {
      key: 'spisZnac',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    spisZnacA : {
      key: 'spisZnacA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    spisZnacB : {
      key: 'spisZnacB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    spisZnacC : {
      key: 'spisZnacC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    platceDph : {
      key: 'platceDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    typUcJednotkyK : {
      key: 'typUcJednotkyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypUcJednotky',
      enum: TypUcJednotky,
      
    },
    moss : {
      key: 'moss',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ossEU : {
      key: 'ossEU',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ossMimoEU : {
      key: 'ossMimoEU',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    ossDovoz : {
      key: 'ossDovoz',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    omezovatVyberStatu : {
      key: 'omezovatVyberStatu',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    cinnost : {
      key: 'cinnost',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    fyzOsoba : {
      key: 'fyzOsoba',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    fyzOsJmeno : {
      key: 'fyzOsJmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    fyzOsPrijmeni : {
      key: 'fyzOsPrijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    fyzOsTitul : {
      key: 'fyzOsTitul',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    fyzOsTitulZa : {
      key: 'fyzOsTitulZa',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    oprPostav : {
      key: 'oprPostav',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    oprPrijmeni : {
      key: 'oprPrijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    oprJmeno : {
      key: 'oprJmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    podpisPrik : {
      key: 'podpisPrik',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    podvojUcto : {
      key: 'podvojUcto',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    intrastat : {
      key: 'intrastat',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    splatDny : {
      key: 'splatDny',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    splatDnyNakup : {
      key: 'splatDnyNakup',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    pravFormaPodnik : {
      key: 'pravFormaPodnik',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zobrLogoK : {
      key: 'zobrLogoK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZobrLogo',
      enum: ZobrLogo,
      
    },
    sklUcto : {
      key: 'sklUcto',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sklFifo : {
      key: 'sklFifo',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sklGenerovatPozadavky : {
      key: 'sklGenerovatPozadavky',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    adrKontrolovatFirmy : {
      key: 'adrKontrolovatFirmy',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    sklAktualNakupCena : {
      key: 'sklAktualNakupCena',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    autoZakazka : {
      key: 'autoZakazka',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    avTranKod : {
      key: 'avTranKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    avSmerKod : {
      key: 'avSmerKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    elPokExport : {
      key: 'elPokExport',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    elPokImport : {
      key: 'elPokImport',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    elPokIni : {
      key: 'elPokIni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    kurzDualMena : {
      key: 'kurzDualMena',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    doplnText : {
      key: 'doplnText',
      type: PropertyType.String,
      isArray: false,
      
    },
    jazyk1K : {
      key: 'jazyk1K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Jazyk',
      enum: Jazyk,
      
    },
    jazyk2K : {
      key: 'jazyk2K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Jazyk',
      enum: Jazyk,
      
    },
    jazyk3K : {
      key: 'jazyk3K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Jazyk',
      enum: Jazyk,
      
    },
    jazyk4K : {
      key: 'jazyk4K',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'Jazyk',
      enum: Jazyk,
      
    },
    logoPoziceK : {
      key: 'logoPoziceK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'LogoPozice',
      enum: LogoPozice,
      
    },
    rezimRezervaciK : {
      key: 'rezimRezervaciK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'RezimRezervaci',
      enum: RezimRezervaci,
      
    },
    postMigrace : {
      key: 'postMigrace',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    firmaUUID : {
      key: 'firmaUUID',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    rezervovatZapor : {
      key: 'rezervovatZapor',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zastupceTypK : {
      key: 'zastupceTypK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZastupceTyp',
      enum: ZastupceTyp,
      
    },
    zastupceKod : {
      key: 'zastupceKod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zastupceNazev : {
      key: 'zastupceNazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zastupceIc : {
      key: 'zastupceIc',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zastupcePrijmeni : {
      key: 'zastupcePrijmeni',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zastupceJmeno : {
      key: 'zastupceJmeno',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zastupceDatNar : {
      key: 'zastupceDatNar',
      type: PropertyType.Date,
      isArray: false,
      
    },
    zastupceEvCislo : {
      key: 'zastupceEvCislo',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    mzdDnuDovolAbs : {
      key: 'mzdDnuDovolAbs',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 10,
      
    },
    mzdKratitDovolAbs : {
      key: 'mzdKratitDovolAbs',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    mzdPenzPrip : {
      key: 'mzdPenzPrip',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    mzdPenzPripProc : {
      key: 'mzdPenzPripProc',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 10,
      
    },
    mzdSmenyDnuTydne : {
      key: 'mzdSmenyDnuTydne',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mzdSmenyHodinDenne : {
      key: 'mzdSmenyHodinDenne',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    mzdSmenyPocPracDoby : {
      key: 'mzdSmenyPocPracDoby',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    mzdSmenySvatkyPrum : {
      key: 'mzdSmenySvatkyPrum',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    mzdNemocProplatAuto : {
      key: 'mzdNemocProplatAuto',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    mzdNemocProplatVarov : {
      key: 'mzdNemocProplatVarov',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    mzdRefundNahrNemoc : {
      key: 'mzdRefundNahrNemoc',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    mzdPromilePovPojisteni : {
      key: 'mzdPromilePovPojisteni',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    mzdProcentoKurzarbeit : {
      key: 'mzdProcentoKurzarbeit',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    mzdSplatSocPoj : {
      key: 'mzdSplatSocPoj',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mzdSplatZdravPoj : {
      key: 'mzdSplatZdravPoj',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mzdSplatDanZal : {
      key: 'mzdSplatDanZal',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mzdSplatDanSra : {
      key: 'mzdSplatDanSra',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mzdSplatDanRez : {
      key: 'mzdSplatDanRez',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mzdSplatDobirka : {
      key: 'mzdSplatDobirka',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mzdSplatPrispevky : {
      key: 'mzdSplatPrispevky',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    mzdTydenPracDobaK : {
      key: 'mzdTydenPracDobaK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TydenPracDoba',
      enum: TydenPracDoba,
      
    },
    denniKurzK : {
      key: 'denniKurzK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'DenniKurz',
      enum: DenniKurz,
      
    },
    rocniKurzK : {
      key: 'rocniKurzK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'RocniKurz',
      enum: RocniKurz,
      
    },
    jakyTypFavK : {
      key: 'jakyTypFavK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypPhlK : {
      key: 'jakyTypPhlK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypFapK : {
      key: 'jakyTypFapK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypZavK : {
      key: 'jakyTypZavK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypIntK : {
      key: 'jakyTypIntK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypPppK : {
      key: 'jakyTypPppK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypNavK : {
      key: 'jakyTypNavK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypObpK : {
      key: 'jakyTypObpK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypPpvK : {
      key: 'jakyTypPpvK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypNapK : {
      key: 'jakyTypNapK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypObvK : {
      key: 'jakyTypObvK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypSklK : {
      key: 'jakyTypSklK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypBanK : {
      key: 'jakyTypBanK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    jakyTypPokK : {
      key: 'jakyTypPokK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'JakyTypDokl',
      enum: JakyTypDokl,
      
    },
    prepocetCenK : {
      key: 'prepocetCenK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'PrepocetCen',
      enum: PrepocetCen,
      
    },
    manualCisDokl : {
      key: 'manualCisDokl',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    parovaniOtoceniUhrady : {
      key: 'parovaniOtoceniUhrady',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    prenFirStred : {
      key: 'prenFirStred',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odpocNeuhrZalFav : {
      key: 'odpocNeuhrZalFav',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    odpocNeuhrZalFap : {
      key: 'odpocNeuhrZalFap',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    zaokrNulovaSazba : {
      key: 'zaokrNulovaSazba',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    nace : {
      key: 'nace',
      type: PropertyType.String,
      isArray: false,
      maxLength: 10,
      
    },
    osobUpravaDph : {
      key: 'osobUpravaDph',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    fapDatProDuzpUctoK : {
      key: 'fapDatProDuzpUctoK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'FapDatProDuzpUctoK',
      enum: FapDatProDuzpUctoK,
      
    },
    autoSendMailModK : {
      key: 'autoSendMailModK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'AutoSendMailMod',
      enum: AutoSendMailMod,
      
    },
    autoSendMailBccEmail : {
      key: 'autoSendMailBccEmail',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    zobrazWebModK : {
      key: 'zobrazWebModK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'ZobrazWebKompMod',
      enum: ZobrazWebKompMod,
      
    },
    sifrovaniPdf : {
      key: 'sifrovaniPdf',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    versionForCaching : {
      key: 'versionForCaching',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    zpracovaniGdpr : {
      key: 'zpracovaniGdpr',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    polozkyCenikObrazky : {
      key: 'polozkyCenikObrazky',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    datZacNovelyZdph19 : {
      key: 'datZacNovelyZdph19',
      type: PropertyType.Date,
      isArray: false,
      
    },
    statLegislativa : {
      key: 'statLegislativa',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    typOrganizace : {
      key: 'typOrganizace',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypOrganizace',
      maxLength: 20,
      
    },
    mena : {
      key: 'mena',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    tdObchodFav : {
      key: 'tdObchodFav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyVydane',
      maxLength: 20,
      
    },
    tdObchodFavZal : {
      key: 'tdObchodFavZal',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyVydane',
      maxLength: 20,
      
    },
    tdObchodFap : {
      key: 'tdObchodFap',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyPrijate',
      maxLength: 20,
      
    },
    tdObchodSklPri : {
      key: 'tdObchodSklPri',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      maxLength: 20,
      
    },
    tdObchodSklVyd : {
      key: 'tdObchodSklVyd',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      maxLength: 20,
      
    },
    tdObchodNav : {
      key: 'tdObchodNav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypNabidkyVydane',
      maxLength: 20,
      
    },
    tdObchodObp : {
      key: 'tdObchodObp',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypObjednavkyPrijate',
      maxLength: 20,
      
    },
    tdObchodObpEdi : {
      key: 'tdObchodObpEdi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypObjednavkyPrijate',
      maxLength: 20,
      
    },
    tdObchodPpv : {
      key: 'tdObchodPpv',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypPoptavkyVydane',
      maxLength: 20,
      
    },
    tdObchodNap : {
      key: 'tdObchodNap',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypNabidkyPrijate',
      maxLength: 20,
      
    },
    tdObchodObv : {
      key: 'tdObchodObv',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypObjednavkyVydane',
      maxLength: 20,
      
    },
    tdFavZalohovyDanDokl : {
      key: 'tdFavZalohovyDanDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyVydane',
      maxLength: 20,
      
    },
    tdFapZalohovyDanDokl : {
      key: 'tdFapZalohovyDanDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyPrijate',
      maxLength: 20,
      
    },
    tdFapEdi : {
      key: 'tdFapEdi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypFakturyPrijate',
      maxLength: 20,
      
    },
    tdSklEdi : {
      key: 'tdSklEdi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypSkladovyPohyb',
      maxLength: 20,
      
    },
    tdKurzovyRozdilNaklad : {
      key: 'tdKurzovyRozdilNaklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      maxLength: 20,
      
    },
    tdKurzovyRozdilVynos : {
      key: 'tdKurzovyRozdilVynos',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      maxLength: 20,
      
    },
    tdZbytekNaklad : {
      key: 'tdZbytekNaklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      maxLength: 20,
      
    },
    tdZbytekVynos : {
      key: 'tdZbytekVynos',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      maxLength: 20,
      
    },
    tdPreplatekPhl : {
      key: 'tdPreplatekPhl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypPohledavky',
      maxLength: 20,
      
    },
    tdPreplatekZav : {
      key: 'tdPreplatekZav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      maxLength: 20,
      
    },
    tdEpGeneracePokladnichDokl : {
      key: 'tdEpGeneracePokladnichDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypPokladniPohyb',
      maxLength: 20,
      
    },
    tdEpGeneraceVydejekZeSkladu : {
      key: 'tdEpGeneraceVydejekZeSkladu',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypPokladniPohyb',
      maxLength: 20,
      
    },
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statFakturacniAdresy : {
      key: 'statFakturacniAdresy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    statPostovniAdresy : {
      key: 'statPostovniAdresy',
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
    regionFakturacniAdresy : {
      key: 'regionFakturacniAdresy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
    },
    regionPostovniAdresy : {
      key: 'regionPostovniAdresy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRegion',
      
    },
    menaDual : {
      key: 'menaDual',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMena',
      
    },
    ucetZaokrNaklad : {
      key: 'ucetZaokrNaklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    ucetZaokrVynos : {
      key: 'ucetZaokrVynos',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    ucetKrOdpoctuNaklad : {
      key: 'ucetKrOdpoctuNaklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    ucetKrOdpoctuVynos : {
      key: 'ucetKrOdpoctuVynos',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      maxLength: 6,
      
    },
    fuKraj : {
      key: 'fuKraj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    fuUzemPrac : {
      key: 'fuUzemPrac',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    tdBanPrijem : {
      key: 'tdBanPrijem',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypBanka',
      maxLength: 20,
      
    },
    tdBanVydej : {
      key: 'tdBanVydej',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypBanka',
      maxLength: 20,
      
    },
    mzdAdrSocPoj : {
      key: 'mzdAdrSocPoj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    mzdAdrDan : {
      key: 'mzdAdrDan',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    mzdBanDanZal : {
      key: 'mzdBanDanZal',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresarBankovniUcet',
      
    },
    mzdBanDanSra : {
      key: 'mzdBanDanSra',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresarBankovniUcet',
      
    },
    mzdBanDanRez : {
      key: 'mzdBanDanRez',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresarBankovniUcet',
      
    },
    mzdTdZavSoc : {
      key: 'mzdTdZavSoc',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    mzdTuoZavSocZam : {
      key: 'mzdTuoZavSocZam',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    mzdTuoZavSocFir : {
      key: 'mzdTuoZavSocFir',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    mzdTdZavZdrav : {
      key: 'mzdTdZavZdrav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    mzdTuoZavZdrZam : {
      key: 'mzdTuoZavZdrZam',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    mzdTuoZavZdrFir : {
      key: 'mzdTuoZavZdrFir',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    mzdTdZavDanZal : {
      key: 'mzdTdZavDanZal',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    mzdTdZavDanSra : {
      key: 'mzdTdZavDanSra',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    mzdTdZavDanRez : {
      key: 'mzdTdZavDanRez',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    mzdTdZavZaloha : {
      key: 'mzdTdZavZaloha',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    mzdTdZavSrazka : {
      key: 'mzdTdZavSrazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    mzdTdZavDobirka : {
      key: 'mzdTdZavDobirka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    mzdTdIntHruba : {
      key: 'mzdTdIntHruba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },
    mzdTdIntNahrad : {
      key: 'mzdTdIntNahrad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },
    mzdTdIntCestDoLim : {
      key: 'mzdTdIntCestDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },
    mzdTdIntCestNadLim : {
      key: 'mzdTdIntCestNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    mzdTdIntStravPausDoLim : {
      key: 'mzdTdIntStravPausDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },
    mzdTdIntStravPausNadLim : {
      key: 'mzdTdIntStravPausNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    mzdTdIntHomeofficeDoLim : {
      key: 'mzdTdIntHomeofficeDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    mzdTdIntHomeofficeNadLim : {
      key: 'mzdTdIntHomeofficeNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    mzdTdSrazkaStrav : {
      key: 'mzdTdSrazkaStrav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    mzdTdStravenka : {
      key: 'mzdTdStravenka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    mzdTuoStravZam : {
      key: 'mzdTuoStravZam',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    mzdTuoStravFirDoLim : {
      key: 'mzdTuoStravFirDoLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    mzdTuoStravFirNadLim : {
      key: 'mzdTuoStravFirNadLim',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPredpisZauctovani',
      
    },
    mzdTdIntPrispevky : {
      key: 'mzdTdIntPrispevky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },
    mzdTdZavPrispevky : {
      key: 'mzdTdZavPrispevky',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },


  }
}