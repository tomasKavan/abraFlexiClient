import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStat } from './AFStat.js'
import { AFTypOrganizace } from './AFTypOrganizace.js'
import { AFMena } from './AFMena.js'
import { AFTypFakturyVydane } from './AFTypFakturyVydane.js'
import { AFTypFakturyPrijate } from './AFTypFakturyPrijate.js'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb.js'
import { AFTypNabidkyVydane } from './AFTypNabidkyVydane.js'
import { AFTypObjednavkyPrijate } from './AFTypObjednavkyPrijate.js'
import { AFTypPoptavkyVydane } from './AFTypPoptavkyVydane.js'
import { AFTypNabidkyPrijate } from './AFTypNabidkyPrijate.js'
import { AFTypObjednavkyVydane } from './AFTypObjednavkyVydane.js'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu.js'
import { AFTypPohledavky } from './AFTypPohledavky.js'
import { AFTypZavazku } from './AFTypZavazku.js'
import { AFTypPokladniPohyb } from './AFTypPokladniPohyb.js'
import { AFRegion } from './AFRegion.js'
import { AFUcet } from './AFUcet.js'
import { AFAdresar } from './AFAdresar.js'
import { AFTypBanka } from './AFTypBanka.js'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet.js'
import { AFPredpisZauctovani } from './AFPredpisZauctovani.js'
import { AFTypDokladu } from './AFTypDokladu.js'


import { TypUcJednotky, ZobrLogo, Jazyk, LogoPozice, RezimRezervaci, ZastupceTyp, TydenPracDoba, DenniKurz, RocniKurz, JakyTypDokl, PrepocetCen, FapDatProDuzpUctoK, AutoSendMailMod, ZobrazWebKompMod } from '../AFEntityEnums.js'

export class AFNastaveni extends AFEntity {
  static EntityPath: string = 'nastaveni'
  static EntityName: string = 'Nastavení'
  static EntityType: string = 'NASTAVENI'

  // ID (db: IdNastav) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Změny budou platné od data (db: PlatiOdData) - Změny budou platné od data)
  platiOdData?: Date | null
  // Jméno (db: NazFirmy) - Jméno)
  nazFirmy?: string | null
  // IČO, DIČ (db: Ic) - IČO, DIČ)
  ic?: string | null
  // DIČ (db: Dic) - DIČ)
  dic?: string | null
  // EAN (db: EanKod) - EAN)
  eanKod?: string | null
  // Ulice - Sídlo/Trv. bydliště (db: Ulice) - Ulice)
  uliceNazev?: string | null
  // Č. popisné - Sídlo/Trv. bydliště (db: CisPop) - Č.p.)
  cisPop?: string | null
  // Č. orientační - Sídlo/Trv. bydliště (db: CisOr) - Č.o.)
  cisOr?: string | null
  // Město (db: Mesto) - Město)
  mesto?: string | null
  // PSČ (db: Psc) - PSČ)
  psc?: string | null
  // WWW (db: Www) - WWW)
  www?: string | null
  // E-mail (db: Email) - E-mail)
  email?: string | null
  // Datová schránka - Sídlo/Trv. bydliště (db: DatovaSchranka) - Datová schránka)
  datovaSchranka?: string | null
  // Fax (db: Fax) - Fax)
  fax?: string | null
  // Mobil (db: Mobil) - Mobil)
  mobil?: string | null
  // Telefon (db: Tel) - Telefon)
  tel?: string | null
  // Poštovní adresa je shodná se sídlem (db: PostovniShodna) - Poštovní adresa je shodná se sídlem)
  postovniShodna?: boolean | null
  // Ulice - Fakturační adresa (db: FaUlice) - Ulice)
  faUliceNazev?: string | null
  // Č. popisné - Fakturační adresa (db: FaCisPop) - Č.p.)
  faCisPop?: string | null
  // Č. orientační - Fakturační adresa (db: FaCisOr) - Č.o.)
  faCisOr?: string | null
  // Pošt. město (db: FaMesto) - Město)
  faMesto?: string | null
  // Pošt. PSČ (db: FaPsc) - PSČ)
  faPsc?: string | null
  // Fakturační adresa je shodná se sídlem (db: FakturacniShodna) - Fakturační adresa je shodná se sídlem)
  fakturacniShodna?: boolean | null
  // Ulice - Poštovní adresa (db: PostUlice) - Ulice)
  postUliceNazev?: string | null
  // Č. popisné - Poštovní adresa (db: PostCisPop) - Č.p.)
  postCisPop?: string | null
  // Č. orientační - Poštovní adresa (db: PostCisOr) - Č.o.)
  postCisOr?: string | null
  // Město - Poštovní adresa (db: PostMesto) - Město)
  postMesto?: string | null
  // PSČ - Poštovní adresa (db: PostPsc) - PSČ)
  postPsc?: string | null
  // Spisová značka (db: SpisZnac) - Spisová značka)
  spisZnac?: string | null
  // Spisová značka EN (db: SpisZnacA) - Spisová značka EN)
  spisZnacA?: string | null
  // Spisová značka DE (db: SpisZnacB) - Spisová značka DE)
  spisZnacB?: string | null
  // Spisová značka FR (db: SpisZnacC) - Spisová značka FR)
  spisZnacC?: string | null
  // Plátce DPH (db: PlatceDph) - Plátce DPH)
  platceDph?: boolean | null
  // Typ účetní jednotky (db: TypUcJednotkyK) - Typ účetní jednotky)
  typUcJednotkyK?: TypUcJednotky | null
  // Zvláštní režim jednoho správního místa (MOSS, platné do 30.6.2021) (db: Moss) - Zvláštní režim jednoho správního místa (MOSS, platné do 30.6.2021))
  moss?: boolean | null
  // OSS - režim EU (db: OssEU) - OSS - režim EU)
  ossEU?: boolean | null
  // OSS - režim mimo EU (db: OssMimoEU) - OSS - režim mimo EU)
  ossMimoEU?: boolean | null
  // OSS - dovozní režim (db: OssDovoz) - OSS - dovozní režim)
  ossDovoz?: boolean | null
  // Omezuje výběr států pro DPH v dokladech (db: OmezovatVyberStatu) - Omezovat výběr států DPH)
  omezovatVyberStatu?: boolean | null
  // Převažující činnost (db: Cinnost) - Převažující činnost)
  cinnost?: string | null
  // Fyzická osoba (db: FyzOsoba) - Fyzická osoba)
  fyzOsoba?: boolean | null
  // Jméno (db: FyzOsJmeno) - Jméno)
  fyzOsJmeno?: string | null
  // Příjmení (db: FyzOsPrijmeni) - Příjmení)
  fyzOsPrijmeni?: string | null
  // Titul (db: FyzOsTitul) - Titul)
  fyzOsTitul?: string | null
  // Titul za jménem (db: FyzOsTitulZa) - Titul za jménem)
  fyzOsTitulZa?: string | null
  // Postavení oprávněné osoby (db: OprPostav) - Postavení)
  oprPostav?: string | null
  // Příjmení oprávněné osoby (db: OprPrijmeni) - Příjmení)
  oprPrijmeni?: string | null
  // Jméno (db: OprJmeno) - Jméno)
  oprJmeno?: string | null
  // Vyžadovat podpis před vystavením příkazu k úhradě (db: PodpisPrik) - Vyžadovat podpis před vystavením příkazu k úhradě)
  podpisPrik?: boolean | null
  // Účetnictví (db: PodvojUcto) - vést účetnictví)
  podvojUcto?: boolean | null
  // Vést Intrastat (db: Intrastat) - Vést Intrastat)
  intrastat?: boolean | null
  // Počet dnů splatnosti pro prodejní doklady (db: SplatDny) - Splatnost ve dnech)
  splatDny?: number | null
  // Výchozí splatnost [dny] (db: SplatDnyNakup) - Výchozí splatnost [dny])
  splatDnyNakup?: number | null
  // Právní forma účetní jednotky (db: PravFormaPodnik) - Právní forma účet. jednotky)
  pravFormaPodnik?: string | null
  // Způsob zobrazení (db: ZobrLogoK) - Způsob zobrazení)
  zobrLogoK?: ZobrLogo | null
  // Sklad nahrávat do účetnictví (db: SklUcto) - Sklad nahrávat do účetnictví)
  sklUcto?: boolean | null
  // Oceňování zásob metodou FIFO (db: SklFifo) - Sklad je FIFO)
  sklFifo?: boolean | null
  // Umožnit generování požadavků na výdej (db: SklGenerovatPozadavky) - Umožnit generování požadavků na výdej)
  sklGenerovatPozadavky?: boolean | null
  // Kontrolovat firmy a účty při vytváření dokladu (db: AdrKontrolovatFirmy) - Kontrolovat firmy a účty při vytváření dokladu)
  adrKontrolovatFirmy?: boolean | null
  // Při příjmu aktualizovat nákupní cenu v ceníku (db: SklAktualNakupCena) - Při příjmu aktualizovat nákupní cenu v ceníku)
  sklAktualNakupCena?: boolean | null
  // Automaticky generovat číslo zakázky shodné s objednávkou (db: AutoZakazka) - Automaticky generovat číslo zakázky shodné s objednávkou)
  autoZakazka?: boolean | null
  // Transakční kód (db: AvTranKod) - Transakční kód)
  avTranKod?: string | null
  // Směrový kód (db: AvSmerKod) - Směrový kód)
  avSmerKod?: string | null
  // ... export z ABRA Flexi (db: ElPokExport) - ... export z ABRA Flexi)
  elPokExport?: string | null
  // ... import do ABRA Flexi (db: ElPokImport) - ... import do ABRA Flexi)
  elPokImport?: string | null
  // ... INI soubor (db: ElPokIni) - ... INI soubor)
  elPokIni?: string | null
  // Kurz duální měny (db: KurzDualMena) - Kurz duální měny)
  kurzDualMena?: Big | null
  // Doplňující text na fakturu (db: DoplnText) - Doplňující text na fakturu)
  doplnText?: string | null
  // Jazyk 1 (db: Jazyk1K) - Jazyk 1)
  jazyk1K?: Jazyk | null
  // Jazyk 2 (db: Jazyk2K) - Jazyk 2)
  jazyk2K?: Jazyk | null
  // Jazyk 3 (db: Jazyk3K) - Jazyk 3)
  jazyk3K?: Jazyk | null
  // Jazyk 4 (db: Jazyk4K) - Jazyk 4)
  jazyk4K?: Jazyk | null
  // Pozice loga (db: LogoPoziceK) - Pozice loga)
  logoPoziceK?: LogoPozice | null
  // Nastavení režimu rezervací zboží (db: RezimRezervaciK) - Režim rezervací)
  rezimRezervaciK?: RezimRezervaci | null
  // Postmigrace (db: PostMigrace) - Postmigrace)
  postMigrace?: boolean | null
  // UUID Firmy (db: FirmaUUID) - UUID Firmy)
  firmaUUID?: string | null
  // Povolit rezervaci do záporu (db: RezervovatZapor) - Povolit rezervaci do záporu)
  rezervovatZapor?: boolean | null
  // Typ (zástupce) (db: ZastupceTypK) - Typ)
  zastupceTypK?: ZastupceTyp | null
  // Kód (zástupce) (db: ZastupceKod) - Kód)
  zastupceKod?: string | null
  // Název právnické osoby (zástupce) (db: ZastupceNazev) - Název právnické osoby)
  zastupceNazev?: string | null
  // IČO právnické osoby (zástupce) (db: ZastupceIc) - IČO právnické osoby (zástupce))
  zastupceIc?: string | null
  // Příjmení (zástupce) (db: ZastupcePrijmeni) - Příjmení)
  zastupcePrijmeni?: string | null
  // Jméno (zástupce) (db: ZastupceJmeno) - Jméno)
  zastupceJmeno?: string | null
  // Dat. nar. (zástupce) (db: ZastupceDatNar) - Dat. nar. (zástupce))
  zastupceDatNar?: Date | null
  // Evid. číslo (zástupce) (db: ZastupceEvCislo) - Evid. číslo (zástupce))
  zastupceEvCislo?: string | null
  // Počet dnů dovolené za den absence (do r. 2020) (db: MzdDnuDovolAbs) - Počet dnů dovolené za den absence (do r. 2020))
  mzdDnuDovolAbs?: Big | null
  // Krátit dovolenou za neomluvenou absenci (db: MzdKratitDovolAbs) - Krátit dovolenou za neomluvenou absenci)
  mzdKratitDovolAbs?: boolean | null
  // Příspěvek na penzijní připojištění (db: MzdPenzPrip) - Příspěvek na penzijní připojištění)
  mzdPenzPrip?: boolean | null
  // Procento příspěvku na penzijní připojištění (db: MzdPenzPripProc) - Procento příspěvku na penzijní připojištění)
  mzdPenzPripProc?: Big | null
  // Počet pracovních dnů v týdnu - úvazek (db: MzdSmenyDnuTydne) - Dnů v týdnu)
  mzdSmenyDnuTydne?: number | null
  // Počet hodin denně - úvazek (db: MzdSmenyHodinDenne) - Hodin denně)
  mzdSmenyHodinDenne?: Big | null
  // Začátek pracovní doby - úvazek (db: MzdSmenyPocPracDoby) - Začátek pracovní doby)
  mzdSmenyPocPracDoby?: Big | null
  // Výpočet náhrady za svátky z průměru - úvazek (db: MzdSmenySvatkyPrum) - Výpočet náhrady za svátky z průměru)
  mzdSmenySvatkyPrum?: boolean | null
  // Automaticky nastavovat období proplacení nemoci (db: MzdNemocProplatAuto) - Automaticky nastavovat období proplacení nemoci)
  mzdNemocProplatAuto?: boolean | null
  // Při výpočtu mezd upozornit na kontrolu období proplacení u nemocí (db: MzdNemocProplatVarov) - Při výpočtu mezd upozornit na kontrolu období proplacení u nemocí)
  mzdNemocProplatVarov?: boolean | null
  // Refundace 50% náhrady mzdy za nemoc (do r. 2013) (db: MzdRefundNahrNemoc) - Refundace 50% náhrady mzdy za nemoc (do r. 2013))
  mzdRefundNahrNemoc?: boolean | null
  // Promile pro výpočet povinného pojištění (db: MzdPromilePovPojisteni) - Promile pro výpočet povinného pojištění)
  mzdPromilePovPojisteni?: Big | null
  // Procento náhrady při kurzarbeitu (db: MzdProcentoKurzarbeit) - Procento náhrady při kurzarbeitu)
  mzdProcentoKurzarbeit?: Big | null
  // Počet dnů splatnosti pro sociální pojištění (db: MzdSplatSocPoj) - Sociální pojištění)
  mzdSplatSocPoj?: number | null
  // Počet dnů splatnosti pro zdravotní pojištění (db: MzdSplatZdravPoj) - Zdravotní pojištění)
  mzdSplatZdravPoj?: number | null
  // Počet dnů splatnosti pro zálohovou daň (db: MzdSplatDanZal) - Daň zálohová)
  mzdSplatDanZal?: number | null
  // Počet dnů splatnosti pro srážkovou daň (db: MzdSplatDanSra) - Daň srážková)
  mzdSplatDanSra?: number | null
  // Počet dnů splatnosti pro daň rezidentů (db: MzdSplatDanRez) - Daň rezident)
  mzdSplatDanRez?: number | null
  // Počet dnů splatnosti pro dobírku (db: MzdSplatDobirka) - Dobírka)
  mzdSplatDobirka?: number | null
  // Počet dnů splatnosti pro příspěvky (db: MzdSplatPrispevky) - Příspěvky)
  mzdSplatPrispevky?: number | null
  // Týdenní pracovní doba (db: MzdTydenPracDobaK) - Týdenní pracovní doba)
  mzdTydenPracDobaK?: TydenPracDoba | null
  // Denní kurz (db: DenniKurzK) - Denní kurz)
  denniKurzK?: DenniKurz | null
  // Měsíční/roční kurz (db: RocniKurzK) - Měsíční/roční kurz)
  rocniKurzK?: RocniKurz | null
  // Typ nově vytvářených dokladů pro faktury vydané (db: JakyTypFavK) - Faktury vydané)
  jakyTypFavK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro pohledávky (db: JakyTypPhlK) - Pohledávky)
  jakyTypPhlK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro faktury přijaté (db: JakyTypFapK) - Faktury přijaté)
  jakyTypFapK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro závazky (db: JakyTypZavK) - Závazky)
  jakyTypZavK?: JakyTypDokl | null
  // Typ nově vytvářených interních dokladů (db: JakyTypIntK) - Interní doklady)
  jakyTypIntK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro poptávky přijaté (db: JakyTypPppK) - Poptávky přijaté)
  jakyTypPppK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro nabídky vydané (db: JakyTypNavK) - Nabídky vydané)
  jakyTypNavK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro objednávky přijaté (db: JakyTypObpK) - Objednávky přijaté)
  jakyTypObpK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro poptávky vydané (db: JakyTypPpvK) - Poptávky vydané)
  jakyTypPpvK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro nabídky přijaté (db: JakyTypNapK) - Nabídky přijaté)
  jakyTypNapK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro objednávky vydané (db: JakyTypObvK) - Objednávky vydané)
  jakyTypObvK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro skladové příjemky a výdejky (db: JakyTypSklK) - Příjemky/výdejky)
  jakyTypSklK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro banky (db: JakyTypBanK) - Banka)
  jakyTypBanK?: JakyTypDokl | null
  // Typ nově vytvářených dokladů pro pokladny (db: JakyTypPokK) - Pokladna)
  jakyTypPokK?: JakyTypDokl | null
  // Při změně odběratele přepočítat ceny (db: PrepocetCenK) - Při změně odběratele přepočítat ceny)
  prepocetCenK?: PrepocetCen | null
  // Manuální přepis čísel dokladů (db: ManualCisDokl) - Umožnit manuální přepsání interních čísel dokladů)
  manualCisDokl?: boolean | null
  // Otočit typ pohybu a částku v modulu Banka při automatickém párování dobropisu (db: ParovaniOtoceniUhrady) - Otočit typ pohybu a částku v modulu Banka při automatickém párování dobropisu)
  parovaniOtoceniUhrady?: boolean | null
  // Automatické vyplnění střediska u dokladu podle střediska u firmy v adresáři (db: PrenFirStred) - Automatické vyplnění střediska u dokladu podle střediska u firmy v adresáři)
  prenFirStred?: boolean | null
  // Povolit odpočet neuhrazené vydané zálohy (db: OdpocNeuhrZalFav) - Povolit odpočet neuhrazené vydané zálohy)
  odpocNeuhrZalFav?: boolean | null
  // Povolit odpočet neuhrazené přijaté zálohy (db: OdpocNeuhrZalFap) - Povolit odpočet neuhrazené přijaté zálohy)
  odpocNeuhrZalFap?: boolean | null
  // Položky automatického zaokrouhlení dokladu nezahrnovat do DPH (individuální metoda zaokrouhlení) (db: ZaokrNulovaSazba) - Položky automatického zaokrouhlení dokladu nezahrnovat do DPH (individuální metoda zaokrouhlení))
  zaokrNulovaSazba?: boolean | null
  // Kód převažující činnosti dle klasifikace NACE (db: Nace) - Převažující činnost (kód NACE))
  nace?: string | null
  // Zvláštní režim DPH (db: OsobUpravaDph) - Zvláštní režim DPH)
  osobUpravaDph?: boolean | null
  // Datum pro plnění data Uplatnit zdaň. pl. (db: FapDatProDuzpUctoK) - Datum pro plnění data Uplatnit zdaň. pl.)
  fapDatProDuzpUctoK?: FapDatProDuzpUctoK | null
  // Automaticky odesílat doklady mailem (db: AutoSendMailModK) - Automaticky odesílat doklady mailem)
  autoSendMailModK?: AutoSendMailMod | null
  // Adresa skryté kopie (db: AutoSendMailBccEmail) - Adresa skryté kopie)
  autoSendMailBccEmail?: string | null
  // Způsob zobrazení (db: ZobrazWebModK) - Způsob zobrazení)
  zobrazWebModK?: ZobrazWebKompMod | null
  // Chránit výplatní pásky heslem (db: SifrovaniPdf) - Chránit výplatní pásky heslem)
  sifrovaniPdf?: boolean | null
  // Verze pro cachování (db: VersionForCaching) - Verze)
  versionForCaching?: number | null
  // Zpracování GDPR (db: ZpracovaniGdpr) - Zpracování GDPR)
  zpracovaniGdpr?: boolean | null
  // Zobrazovat obrázkové přílohy ceníku (db: PolozkyCenikObrazky) - Zobrazovat obrázkové přílohy ceníku v editaci položek dokladů a na ceníku)
  polozkyCenikObrazky?: boolean | null
  // Začátek užití novely ZDPH 2019 (db: DatZacNovelyZdph19) - Začátek užití novely ZDPH 2019)
  datZacNovelyZdph19?: Date | null
  // Stát legislativy (db: IdStatuLeg) - Stát legislativy)
  statLegislativa?: AFStat | null
  // Typ organizace (db: IdTypOrg) - Typ organizace)
  typOrganizace?: AFTypOrganizace | null
  // Domácí měna (db: IdMeny) - Domácí měna)
  mena?: AFMena | null
  // Typ dokladu vydaných faktur pro obchod (db: IdTdObFav) - Vydané faktury)
  tdObchodFav?: AFTypFakturyVydane | null
  // Typ dokladu vydaných záloh pro obchod (db: IdTdObFavZal) - Vydané zálohy)
  tdObchodFavZal?: AFTypFakturyVydane | null
  // Typ dokladu přijatých faktur pro obchod (db: IdTdObFap) - Přijaté faktury)
  tdObchodFap?: AFTypFakturyPrijate | null
  // Typ dokladu příjemek na sklad pro obchod (db: IdTdObSklPri) - Přijemky na sklad)
  tdObchodSklPri?: AFTypSkladovyPohyb | null
  // Typ dokladu výdejek ze skladu pro obchod (db: IdTdObSklVyd) - Výdejky ze skladu)
  tdObchodSklVyd?: AFTypSkladovyPohyb | null
  // Typ dokladu nabídek vydaných pro obchod (db: IdTdObNav) - Nabídky vydané)
  tdObchodNav?: AFTypNabidkyVydane | null
  // Typ dokladu objednávek přijatých pro obchod (db: IdTdObObp) - Objednávky přijaté)
  tdObchodObp?: AFTypObjednavkyPrijate | null
  // Typ dokladu objednávek přijatých z EDI pro obchod (db: IdTdObObpEdi) - Objednávka přijatá z EDI)
  tdObchodObpEdi?: AFTypObjednavkyPrijate | null
  // Typ dokladu poptávek vydaných pro obchod (db: IdTdObPpv) - Poptávky vydané)
  tdObchodPpv?: AFTypPoptavkyVydane | null
  // Typ dokladu nabídek přijatých pro obchod (db: IdTdObNap) - Nabídky přijaté)
  tdObchodNap?: AFTypNabidkyPrijate | null
  // Typ dokladu objednávek vydaných pro obchod (db: IdTdObObv) - Objednávky vydané)
  tdObchodObv?: AFTypObjednavkyVydane | null
  // Typ dokladu faktur vydaných pro ZDD (db: IdTdFavZdd) - Vydaný)
  tdFavZalohovyDanDokl?: AFTypFakturyVydane | null
  // Typ dokladu faktur přijatých pro ZDD (db: IdTdFapZdd) - Přijatý)
  tdFapZalohovyDanDokl?: AFTypFakturyPrijate | null
  // Typ dokladu přijaté faktury z EDI (db: IdTdFapEdi) - Přijaté faktury z EDI)
  tdFapEdi?: AFTypFakturyPrijate | null
  // Typ dokladu příjemky z EDI (db: IdTdSklEdi) - Typ příjemky z EDI)
  tdSklEdi?: AFTypSkladovyPohyb | null
  // Typ dokladu kurzových rozdílů - Náklad (db: IdTdKurzRozNaklad) - Náklad)
  tdKurzovyRozdilNaklad?: AFTypInternihoDokladu | null
  // Typ dokladu kurzových rozdílů - Výnos (db: IdTdKurzRozVynos) - Výnos)
  tdKurzovyRozdilVynos?: AFTypInternihoDokladu | null
  // Typ dokladu pro zbytkové rozdíly - Náklad (db: IdTdZbytekNaklad) - Náklad)
  tdZbytekNaklad?: AFTypInternihoDokladu | null
  // Typ dokladu pro zbytkové rozdíly - Výnos (db: IdTdZbytekVynos) - Výnos)
  tdZbytekVynos?: AFTypInternihoDokladu | null
  // Typ dokladu pro přeplatky pohledávek (db: IdTdPreplPhl) - Výnos)
  tdPreplatekPhl?: AFTypPohledavky | null
  // Typ dokladu pro přeplatky závazků (db: IdTdPreplZav) - Náklad)
  tdPreplatekZav?: AFTypZavazku | null
  // Typ dokladu pro pokladní doklady (db: IdTdEpPok) - ... pokladních dokladů)
  tdEpGeneracePokladnichDokl?: AFTypPokladniPohyb | null
  // Typ dokladu pro výdej ze skladu (db: IdTdEpSkl) - ... výdej ze skladu)
  tdEpGeneraceVydejekZeSkladu?: AFTypPokladniPohyb | null
  // Stát - Sídlo/Trv. bydliště (db: IdStatu) - Stát)
  stat?: AFStat | null
  // Stát - Fakturační adresa (db: IdFaStatu) - Stát)
  statFakturacniAdresy?: AFStat | null
  // Stát - Poštovní adresa (db: IdPostStatu) - Stát)
  statPostovniAdresy?: AFStat | null
  // Kraj (db: Idregion) - Kraj)
  region?: AFRegion | null
  // Kraj (db: IdFaRegion) - Kraj)
  regionFakturacniAdresy?: AFRegion | null
  // Kraj (db: IdPostRegion) - Kraj)
  regionPostovniAdresy?: AFRegion | null
  // Duální měna (db: IdMenyDual) - Duální měna)
  menaDual?: AFMena | null
  // Účet pro zaokrouhlovací rozdíl - Náklad (db: IdUcetZaokrNaklad) - Náklad)
  ucetZaokrNaklad?: AFUcet | null
  // Účet pro zaokrouhlovací rozdíl - Výnos (db: IdUcetZaokrVynos) - Výnos)
  ucetZaokrVynos?: AFUcet | null
  // Účet pro kurzový rozdíl odpočtu záloh - Náklad (db: IdUcetKrOdpoctuNaklad) - Náklad)
  ucetKrOdpoctuNaklad?: AFUcet | null
  // Účet pro kurzový rozdíl odpočtu záloh - Výnos (db: IdUcetKrOdpoctuVynos) - Výnos)
  ucetKrOdpoctuVynos?: AFUcet | null
  // Krajský finanční úřad (db: IdFuKraj) - Krajský finanční úřad)
  fuKraj?: AFAdresar | null
  // Územní pracoviště (db: IdFuUzemPrac) - Územní pracoviště)
  fuUzemPrac?: AFAdresar | null
  // Typ dokladu pro bankovní příjem (db: IdTdBanPrijem) - Bankovní příjem)
  tdBanPrijem?: AFTypBanka | null
  // Typ dokladu pro bankovní výdej (db: IdTdBanVydej) - Bankovní výdej)
  tdBanVydej?: AFTypBanka | null
  // Adresa a bankovní účet pro sociální pojištění (db: IdMzdAdrSocPoj) - Adresa a bankovní spojení)
  mzdAdrSocPoj?: AFAdresar | null
  // Adresa finančního úřadu (db: IdMzdAdrDan) - Adresa)
  mzdAdrDan?: AFAdresar | null
  // Bankovní účet pro platbu zálohové daně (db: IdMzdBanDanZal) - Bankovní spojení)
  mzdBanDanZal?: AFAdresarBankovniUcet | null
  // Bankovní účet pro platbu srážkové daně (db: IdMzdBanDanSra) - Bankovní spojení)
  mzdBanDanSra?: AFAdresarBankovniUcet | null
  // Bankovní účet pro platbu daně za rezidenty (db: IdMzdBanDanRez) - Bankovní spojení)
  mzdBanDanRez?: AFAdresarBankovniUcet | null
  // Typ dokladu závazku sociálního pojištění pro mzdy (db: IdMzdTdZavSoc) - Typ závazku)
  mzdTdZavSoc?: AFTypZavazku | null
  // Předpis zaúčtování sociálního pojištění za zaměstnance (db: IdMzdTuoZavSocZam) - Předpis zaúčtování - zaměstnanec)
  mzdTuoZavSocZam?: AFPredpisZauctovani | null
  // Předpis zaúčtování sociálního pojištění za zaměstnavatele (db: IdMzdTuoZavSocFir) - Předpis zaúčtování - zaměstnavatel)
  mzdTuoZavSocFir?: AFPredpisZauctovani | null
  // Typ dokladu závazku zdravotního pojištění pro mzdy (db: IdMzdTdZavZdrav) - Typ závazku)
  mzdTdZavZdrav?: AFTypZavazku | null
  // Předpis zaúčtování zdravotního pojištění za zaměstnance (db: IdMzdTuoZavZdrZam) - Předpis zaúčtování - zaměstnanec)
  mzdTuoZavZdrZam?: AFPredpisZauctovani | null
  // Předpis zaúčtování zdravotního pojištění za zaměstnavatele (db: IdMzdTuoZavZdrFir) - Předpis zaúčtování - zaměstnavatel)
  mzdTuoZavZdrFir?: AFPredpisZauctovani | null
  // Typ dokladu závazku daňové zálohy pro mzdy (db: IdMzdTdZavDanZal) - Typ závazku)
  mzdTdZavDanZal?: AFTypZavazku | null
  // Typ dokladu závazku daňové srážky pro mzdy (db: IdMzdTdZavDanSra) - Typ závazku)
  mzdTdZavDanSra?: AFTypZavazku | null
  // Typ dokladu závazku daňové rezervy pro mzdy (db: IdMzdTdZavDanRez) - Typ závazku)
  mzdTdZavDanRez?: AFTypZavazku | null
  // Typ dokladu závazku záloh pro mzdy (db: IdMzdTdZavZaloha) - Typ závazku záloh)
  mzdTdZavZaloha?: AFTypZavazku | null
  // Typ dokladu závazku srážek pro mzdy (db: IdMzdTdZavSrazka) - Typ závazku srážek)
  mzdTdZavSrazka?: AFTypZavazku | null
  // Typ dokladu závazku dobírky pro mzdy (db: IdMzdTdZavDobirka) - Typ závazku dobírek)
  mzdTdZavDobirka?: AFTypZavazku | null
  // Typ interního dokladu hrubé mzdy (db: IdMzdTdIntHruba) - Typ int.dokl. hrubé mzdy)
  mzdTdIntHruba?: AFTypInternihoDokladu | null
  // Typ interního dokladu náhrady mzdy (db: IdMzdTdIntNahrad) - Typ int.dokl. náhrady mzdy)
  mzdTdIntNahrad?: AFTypInternihoDokladu | null
  // Typ interního dokladu cestovné do limitu pro mzdy (db: IdMzdTdIntCestDoLim) - do limitu)
  mzdTdIntCestDoLim?: AFTypInternihoDokladu | null
  // Typ interního dokladu cestovné nad limit pro mzdy (db: IdMzdTdIntCestNadLim) - nad limit)
  mzdTdIntCestNadLim?: AFTypDokladu | null
  // Typ interního dokladu stravenkového paušálu do limitu pro mzdy (db: IdMzdTdIntStravPausDoLim) - do limitu)
  mzdTdIntStravPausDoLim?: AFTypInternihoDokladu | null
  // Typ interního dokladu stravenkového paušálu nad limit pro mzdy (db: IdMzdTdIntStravPausNadLim) - nad limit)
  mzdTdIntStravPausNadLim?: AFTypDokladu | null
  // Typ interního dokladu homeoffice do limitu pro mzdy (db: IdMzdTdIntHomeofficeDoLim) - do limitu)
  mzdTdIntHomeofficeDoLim?: AFTypDokladu | null
  // Typ interního dokladu homeoffice nad limitu pro mzdy (db: IdMzdTdIntHomeofficeNadLim) - nad limit)
  mzdTdIntHomeofficeNadLim?: AFTypDokladu | null
  // Typ dokl. srážky stravenek (db: IdMzdTdSrazkaStrav) - Typ dokl. srážky stravenek)
  mzdTdSrazkaStrav?: AFTypDokladu | null
  // Typ dokl. stravenky (db: IdMzdTdStravenka) - Typ dokl. stravenky)
  mzdTdStravenka?: AFTypDokladu | null
  // Předpis zaúčtování příspěvku na stravenky hrazený zaměstnancem (db: IdMzdTuoStravZam) - Předpis příspěvek zaměstnance)
  mzdTuoStravZam?: AFPredpisZauctovani | null
  // Předpis zaúčtování příspěvku firmy na stravenky hrazeného firmou do daňového limitu (db: IdMzdTuoStravFirDoLim) - Předpis příspěvek firmy do limitu)
  mzdTuoStravFirDoLim?: AFPredpisZauctovani | null
  // Předpis zaúčtování příspěvku na stravenky hrazeného firmou nad daňový limit (db: IdMzdTuoStravFirNadLim) - Předpis příspěvek firmy nad limit)
  mzdTuoStravFirNadLim?: AFPredpisZauctovani | null
  // Typ int. dokl. příspěvků (db: IdMzdTdIntPrispevky) - Typ int. dokl. příspěvků)
  mzdTdIntPrispevky?: AFTypDokladu | null
  // Typ závazku příspěvků (db: IdMzdTdZavPrispevky) - Typ závazku příspěvků)
  mzdTdZavPrispevky?: AFTypDokladu | null
  // Závazky - neuhrazené po splatnosti (db: IdTaxTdDanZav) - Závazky)
  taxTdDanZav?: AFTypDokladu | null



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
    taxTdDanZav : {
      key: 'taxTdDanZav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypDokladu',
      
    },


  }
}