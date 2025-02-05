import { AFEntity } from '../AFEntity'

import { AFKontakt } from './AFKontakt'
import { AFAdresar } from './AFAdresar'
import { AFUdalost } from './AFUdalost'
import { AFTypAktivity } from './AFTypAktivity'
import { AFTypNakladu } from './AFTypNakladu'
import { AFNaklad } from './AFNaklad'
import { AFAdresarBankovniUcet } from './AFAdresarBankovniUcet'
import { AFSkupinaFirem } from './AFSkupinaFirem'
import { AFSmlouva } from './AFSmlouva'
import { AFDodavatelskaSmlouva } from './AFDodavatelskaSmlouva'
import { AFTypSmlouvy } from './AFTypSmlouvy'
import { AFDodavatelskyTypSmlouvy } from './AFDodavatelskyTypSmlouvy'
import { AFStavSmlouvy } from './AFStavSmlouvy'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka'
import { AFSmlouvaZurnal } from './AFSmlouvaZurnal'
import { AFObjednavkaPrijata } from './AFObjednavkaPrijata'
import { AFObjednavkaPrijataPolozka } from './AFObjednavkaPrijataPolozka'
import { AFRadaObjednavkyPrijate } from './AFRadaObjednavkyPrijate'
import { AFTypObjednavkyPrijate } from './AFTypObjednavkyPrijate'
import { AFObjednavkaVydana } from './AFObjednavkaVydana'
import { AFObjednavkaVydanaPolozka } from './AFObjednavkaVydanaPolozka'
import { AFTypObjednavkyVydane } from './AFTypObjednavkyVydane'
import { AFRadaObjednavkyVydane } from './AFRadaObjednavkyVydane'
import { AFPoptavkaVydana } from './AFPoptavkaVydana'
import { AFPoptavkaVydanaPolozka } from './AFPoptavkaVydanaPolozka'
import { AFTypPoptavkyVydane } from './AFTypPoptavkyVydane'
import { AFRadaPoptavkyVydane } from './AFRadaPoptavkyVydane'
import { AFPoptavkaPrijata } from './AFPoptavkaPrijata'
import { AFPoptavkaPrijataPolozka } from './AFPoptavkaPrijataPolozka'
import { AFTypPoptavkyPrijate } from './AFTypPoptavkyPrijate'
import { AFRadaPoptavkyPrijate } from './AFRadaPoptavkyPrijate'
import { AFNabidkaVydana } from './AFNabidkaVydana'
import { AFNabidkaVydanaPolozka } from './AFNabidkaVydanaPolozka'
import { AFTypNabidkyVydane } from './AFTypNabidkyVydane'
import { AFRadaNabidkyVydane } from './AFRadaNabidkyVydane'
import { AFNabidkaPrijata } from './AFNabidkaPrijata'
import { AFTypNabidkyPrijate } from './AFTypNabidkyPrijate'
import { AFNabidkaPrijataPolozka } from './AFNabidkaPrijataPolozka'
import { AFRadaNabidkyPrijate } from './AFRadaNabidkyPrijate'
import { AFFakturaPrijata } from './AFFakturaPrijata'
import { AFFakturaPrijataPolozka } from './AFFakturaPrijataPolozka'
import { AFTypFakturyPrijate } from './AFTypFakturyPrijate'
import { AFRadaFakturyPrijate } from './AFRadaFakturyPrijate'
import { AFPredpisZauctovani } from './AFPredpisZauctovani'
import { AFRada } from './AFRada'
import { AFRocniRada } from './AFRocniRada'
import { AFMistoUrceni } from './AFMistoUrceni'
import { AFText } from './AFText'
import { AFPokladniPohyb } from './AFPokladniPohyb'
import { AFPokladniPohybPolozka } from './AFPokladniPohybPolozka'
import { AFRadaPokladniPohyb } from './AFRadaPokladniPohyb'
import { AFTypPokladniPohyb } from './AFTypPokladniPohyb'
import { AFBanka } from './AFBanka'
import { AFTypBanka } from './AFTypBanka'
import { AFRadaBanka } from './AFRadaBanka'
import { AFBankaPolozka } from './AFBankaPolozka'
import { AFFormatElektronickehoBankovnictvi } from './AFFormatElektronickehoBankovnictvi'
import { AFFormatElektronickehoPrikazu } from './AFFormatElektronickehoPrikazu'
import { AFPohledavka } from './AFPohledavka'
import { AFPohledavkaPolozka } from './AFPohledavkaPolozka'
import { AFTypPohledavky } from './AFTypPohledavky'
import { AFRadaPohledavky } from './AFRadaPohledavky'
import { AFBankovniUcet } from './AFBankovniUcet'
import { AFPokladna } from './AFPokladna'
import { AFBankovniUcetPokladna } from './AFBankovniUcetPokladna'
import { AFPrikazKUhrade } from './AFPrikazKUhrade'
import { AFPrikazKUhradePolozka } from './AFPrikazKUhradePolozka'
import { AFPrikazKInkasu } from './AFPrikazKInkasu'
import { AFPrikazKInkasuPolozka } from './AFPrikazKInkasuPolozka'
import { AFDokladKUhrade } from './AFDokladKUhrade'
import { AFVzajemnyZapocet } from './AFVzajemnyZapocet'
import { AFTypVzajemnychZapoctu } from './AFTypVzajemnychZapoctu'
import { AFBankovniUcetSkladPokladna } from './AFBankovniUcetSkladPokladna'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu'
import { AFRadaInternihoDokladu } from './AFRadaInternihoDokladu'
import { AFInterniDoklad } from './AFInterniDoklad'
import { AFInterniDokladPolozka } from './AFInterniDokladPolozka'
import { AFDoklad } from './AFDoklad'
import { AFVazba } from './AFVazba'
import { AFVazebniDoklad } from './AFVazebniDoklad'
import { AFPriloha } from './AFPriloha'
import { AFTypDokladu } from './AFTypDokladu'
import { AFZalohaKOdpoctu } from './AFZalohaKOdpoctu'
import { AFCastkyKOdpoctu } from './AFCastkyKOdpoctu'
import { AFDoporuceni } from './AFDoporuceni'
import { AFFakturaVydana } from './AFFakturaVydana'
import { AFFakturaVydanaPolozka } from './AFFakturaVydanaPolozka'
import { AFTypFakturyVydane } from './AFTypFakturyVydane'
import { AFRadaFakturyVydane } from './AFRadaFakturyVydane'
import { AFProdejka } from './AFProdejka'
import { AFTypProdejky } from './AFTypProdejky'
import { AFProdejkaPlatba } from './AFProdejkaPlatba'
import { AFPravoViditelnosti } from './AFPravoViditelnosti'
import { AFNastaveni } from './AFNastaveni'
import { AFKurz } from './AFKurz'
import { AFUcet } from './AFUcet'
import { AFMena } from './AFMena'
import { AFStat } from './AFStat'
import { AFStatDph } from './AFStatDph'
import { AFCinnost } from './AFCinnost'
import { AFStredisko } from './AFStredisko'
import { AFSazbaDph } from './AFSazbaDph'
import { AFZakazka } from './AFZakazka'
import { AFTypZakazky } from './AFTypZakazky'
import { AFStavZakazky } from './AFStavZakazky'
import { AFHodnoceniZakazky } from './AFHodnoceniZakazky'
import { AFKonstSymbol } from './AFKonstSymbol'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFSkupinaPlneni } from './AFSkupinaPlneni'
import { AFRegion } from './AFRegion'
import { AFCleneniDph } from './AFCleneniDph'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni'
import { AFUcetniOsnova } from './AFUcetniOsnova'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFTypOrganizace } from './AFTypOrganizace'
import { AFKurzProCenotvorbu } from './AFKurzProCenotvorbu'
import { AFKurzProPreceneni } from './AFKurzProPreceneni'
import { AFPenezniUstav } from './AFPenezniUstav'
import { AFPsc } from './AFPsc'
import { AFStitek } from './AFStitek'
import { AFSkupinaStitku } from './AFSkupinaStitku'
import { AFPreneseniDph } from './AFPreneseniDph'
import { AFSablonaUpominky } from './AFSablonaUpominky'
import { AFFormaUhrady } from './AFFormaUhrady'
import { AFStavObchodnihoDokladu } from './AFStavObchodnihoDokladu'
import { AFFormaUhradyZauctovani } from './AFFormaUhradyZauctovani'
import { AFCertifikacniAutorita } from './AFCertifikacniAutorita'
import { AFCertifikatFinbricks } from './AFCertifikatFinbricks'
import { AFCertifikat } from './AFCertifikat'
import { AFFormaDopravy } from './AFFormaDopravy'
import { AFCisloBaliku } from './AFCisloBaliku'
import { AFTypUzivatelskeVazby } from './AFTypUzivatelskeVazby'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFVztah } from './AFVztah'
import { AFIntrastatKrajUrceni } from './AFIntrastatKrajUrceni'
import { AFIntrastatZvlastniPohyb } from './AFIntrastatZvlastniPohyb'
import { AFIntrastatObchodniTransakce } from './AFIntrastatObchodniTransakce'
import { AFIntrastatDodaciPodminky } from './AFIntrastatDodaciPodminky'
import { AFIntrastatDruhDopravy } from './AFIntrastatDruhDopravy'
import { AFIntrastatKurz } from './AFIntrastatKurz'
import { AFIntrastatMernaJednotka } from './AFIntrastatMernaJednotka'
import { AFIntrastatKodNomenklatury } from './AFIntrastatKodNomenklatury'
import { AFRezervace } from './AFRezervace'
import { AFSkladovaKarta } from './AFSkladovaKarta'
import { AFCenik } from './AFCenik'
import { AFIndividualniCenik } from './AFIndividualniCenik'
import { AFDodavatel } from './AFDodavatel'
import { AFOdberatel } from './AFOdberatel'
import { AFCenikTypSazbyDph } from './AFCenikTypSazbyDph'
import { AFVyrobniCislo } from './AFVyrobniCislo'
import { AFCenovaUroven } from './AFCenovaUroven'
import { AFCenikovaSkupina } from './AFCenikovaSkupina'
import { AFPoplatek } from './AFPoplatek'
import { AFPodobneZbozi } from './AFPodobneZbozi'
import { AFSadyAKomplety } from './AFSadyAKomplety'
import { AFKusovnik } from './AFKusovnik'
import { AFCenikObal } from './AFCenikObal'
import { AFSkupinaZbozi } from './AFSkupinaZbozi'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFSkladovyPohybPolozka } from './AFSkladovyPohybPolozka'
import { AFRadaSkladovyPohyb } from './AFRadaSkladovyPohyb'
import { AFTypSkladovyPohyb } from './AFTypSkladovyPohyb'
import { AFSklad } from './AFSklad'
import { AFStrom } from './AFStrom'
import { AFStromKoren } from './AFStromKoren'
import { AFStromCenik } from './AFStromCenik'
import { AFMapovaniSkladu } from './AFMapovaniSkladu'
import { AFUmisteniVeSkladu } from './AFUmisteniVeSkladu'
import { AFUmisteniVeSkladuRegal } from './AFUmisteniVeSkladuRegal'
import { AFUmisteniVeSkladuPolice } from './AFUmisteniVeSkladuPolice'
import { AFUmisteniVeSkladuMistnost } from './AFUmisteniVeSkladuMistnost'
import { AFAtribut } from './AFAtribut'
import { AFPrislustenstvi } from './AFPrislustenstvi'
import { AFTypStavuCeniku } from './AFTypStavuCeniku'
import { AFStavCeniku } from './AFStavCeniku'
import { AFTypAtributu } from './AFTypAtributu'
import { AFSkupinaAtributu } from './AFSkupinaAtributu'
import { AFInventura } from './AFInventura'
import { AFInventuraPolozka } from './AFInventuraPolozka'
import { AFStavSkladuKDatu } from './AFStavSkladuKDatu'
import { AFSarzeExpirace } from './AFSarzeExpirace'
import { AFMajetek } from './AFMajetek'
import { AFLeasing } from './AFLeasing'
import { AFSplatkovyKalendar } from './AFSplatkovyKalendar'
import { AFDanovyNaklad } from './AFDanovyNaklad'
import { AFTypMajetku } from './AFTypMajetku'
import { AFTypLeasingu } from './AFTypLeasingu'
import { AFUmisteni } from './AFUmisteni'
import { AFOdpisovaSkupina } from './AFOdpisovaSkupina'
import { AFMajetekUdalost } from './AFMajetekUdalost'
import { AFZapujcka } from './AFZapujcka'
import { AFDanovyOdpis } from './AFDanovyOdpis'
import { AFUcetniOdpis } from './AFUcetniOdpis'
import { AFOsoba } from './AFOsoba'
import { AFOsobaHlavicka } from './AFOsobaHlavicka'
import { AFSkupinaOsob } from './AFSkupinaOsob'
import { AFDite } from './AFDite'
import { AFOsobaBlizka } from './AFOsobaBlizka'
import { AFNepritomnost } from './AFNepritomnost'
import { AFSrazka } from './AFSrazka'
import { AFTypPracovnihoPomeru } from './AFTypPracovnihoPomeru'
import { AFMzdyBankovniSpojeni } from './AFMzdyBankovniSpojeni'
import { AFPracovniPomer } from './AFPracovniPomer'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka'
import { AFStalaMzdovaSlozka } from './AFStalaMzdovaSlozka'
import { AFMzdovaSlozka } from './AFMzdovaSlozka'
import { AFSmena } from './AFSmena'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek'
import { AFPrace } from './AFPrace'
import { AFPraceMesic } from './AFPraceMesic'
import { AFMzda } from './AFMzda'
import { AFPrehledZamestnancu } from './AFPrehledZamestnancu'
import { AFZavazek } from './AFZavazek'
import { AFZavazekPolozka } from './AFZavazekPolozka'
import { AFTypZavazku } from './AFTypZavazku'
import { AFRadaZavazku } from './AFRadaZavazku'
import { AFFiltr } from './AFFiltr'
import { AFParametr } from './AFParametr'
import { AFUzivatelskyDotaz } from './AFUzivatelskyDotaz'
import { AFUzivatelskyDotazParametr } from './AFUzivatelskyDotazParametr'
import { AFUzivatelskyDotazVlastnost } from './AFUzivatelskyDotazVlastnost'
import { AFCustomButton } from './AFCustomButton'
import { AFSettingStore } from './AFSettingStore'
import { AFGlobalStore } from './AFGlobalStore'
import { AFDashboardPanel } from './AFDashboardPanel'
import { AFDashboardSharing } from './AFDashboardSharing'
import { AFInsight } from './AFInsight'
import { AFAutotisk } from './AFAutotisk'
import { AFXslt } from './AFXslt'
import { AFSablonaMail } from './AFSablonaMail'
import { AFObrat } from './AFObrat'
import { AFStavUctu } from './AFStavUctu'
import { AFHlavniKniha } from './AFHlavniKniha'
import { AFObratovaPredvaha } from './AFObratovaPredvaha'
import { AFPodkladyDph } from './AFPodkladyDph'
import { AFSouhrnneHlaseniDph } from './AFSouhrnneHlaseniDph'
import { AFAnalyzaZakazky } from './AFAnalyzaZakazky'
import { AFPohybNaUctech } from './AFPohybNaUctech'
import { AFUcetniDenik } from './AFUcetniDenik'
import { AFUmisteniUctu } from './AFUmisteniUctu'
import { AFPricteniRozdilu } from './AFPricteniRozdilu'
import { AFSaldo } from './AFSaldo'
import { AFRozvahaPoUctech } from './AFRozvahaPoUctech'
import { AFVysledovkaPoUctech } from './AFVysledovkaPoUctech'
import { AFCenikovyPohybNakup } from './AFCenikovyPohybNakup'
import { AFCenikovyPohybProdej } from './AFCenikovyPohybProdej'
import { AFVykazHospodareni } from './AFVykazHospodareni'
import { AFPoSplatnosti } from './AFPoSplatnosti'
import { AFSaldoKDatu } from './AFSaldoKDatu'
import { AFSestava } from './AFSestava'
import { AFRadekSestavy } from './AFRadekSestavy'
import { AFSumaceSestavy } from './AFSumaceSestavy'
import { AFStandardniPredpis } from './AFStandardniPredpis'
import { AFAnalyzaNakupu } from './AFAnalyzaNakupu'
import { AFAnalyzaProdeje } from './AFAnalyzaProdeje'
import { AFSubjekt } from './AFSubjekt'
import { AFRadekPriznaniDph } from './AFRadekPriznaniDph'
import { AFUlozenePriznaniDph } from './AFUlozenePriznaniDph'
import { AFUlozenePriznaniKonVykDph } from './AFUlozenePriznaniKonVykDph'
import { AFZurnal } from './AFZurnal'


const AFEntityRegistry: Record<string, new () => AFEntity> = {
  AFKontakt,
  AFAdresar,
  AFUdalost,
  AFTypAktivity,
  AFTypNakladu,
  AFNaklad,
  AFAdresarBankovniUcet,
  AFSkupinaFirem,
  AFSmlouva,
  AFDodavatelskaSmlouva,
  AFTypSmlouvy,
  AFDodavatelskyTypSmlouvy,
  AFStavSmlouvy,
  AFSmlouvaPolozka,
  AFSmlouvaZurnal,
  AFObjednavkaPrijata,
  AFObjednavkaPrijataPolozka,
  AFRadaObjednavkyPrijate,
  AFTypObjednavkyPrijate,
  AFObjednavkaVydana,
  AFObjednavkaVydanaPolozka,
  AFTypObjednavkyVydane,
  AFRadaObjednavkyVydane,
  AFPoptavkaVydana,
  AFPoptavkaVydanaPolozka,
  AFTypPoptavkyVydane,
  AFRadaPoptavkyVydane,
  AFPoptavkaPrijata,
  AFPoptavkaPrijataPolozka,
  AFTypPoptavkyPrijate,
  AFRadaPoptavkyPrijate,
  AFNabidkaVydana,
  AFNabidkaVydanaPolozka,
  AFTypNabidkyVydane,
  AFRadaNabidkyVydane,
  AFNabidkaPrijata,
  AFTypNabidkyPrijate,
  AFNabidkaPrijataPolozka,
  AFRadaNabidkyPrijate,
  AFFakturaPrijata,
  AFFakturaPrijataPolozka,
  AFTypFakturyPrijate,
  AFRadaFakturyPrijate,
  AFPredpisZauctovani,
  AFRada,
  AFRocniRada,
  AFMistoUrceni,
  AFText,
  AFPokladniPohyb,
  AFPokladniPohybPolozka,
  AFRadaPokladniPohyb,
  AFTypPokladniPohyb,
  AFBanka,
  AFTypBanka,
  AFRadaBanka,
  AFBankaPolozka,
  AFFormatElektronickehoBankovnictvi,
  AFFormatElektronickehoPrikazu,
  AFPohledavka,
  AFPohledavkaPolozka,
  AFTypPohledavky,
  AFRadaPohledavky,
  AFBankovniUcet,
  AFPokladna,
  AFBankovniUcetPokladna,
  AFPrikazKUhrade,
  AFPrikazKUhradePolozka,
  AFPrikazKInkasu,
  AFPrikazKInkasuPolozka,
  AFDokladKUhrade,
  AFVzajemnyZapocet,
  AFTypVzajemnychZapoctu,
  AFBankovniUcetSkladPokladna,
  AFTypInternihoDokladu,
  AFRadaInternihoDokladu,
  AFInterniDoklad,
  AFInterniDokladPolozka,
  AFDoklad,
  AFVazba,
  AFVazebniDoklad,
  AFPriloha,
  AFTypDokladu,
  AFZalohaKOdpoctu,
  AFCastkyKOdpoctu,
  AFDoporuceni,
  AFFakturaVydana,
  AFFakturaVydanaPolozka,
  AFTypFakturyVydane,
  AFRadaFakturyVydane,
  AFProdejka,
  AFTypProdejky,
  AFProdejkaPlatba,
  AFPravoViditelnosti,
  AFNastaveni,
  AFKurz,
  AFUcet,
  AFMena,
  AFStat,
  AFStatDph,
  AFCinnost,
  AFStredisko,
  AFSazbaDph,
  AFZakazka,
  AFTypZakazky,
  AFStavZakazky,
  AFHodnoceniZakazky,
  AFKonstSymbol,
  AFMernaJednotka,
  AFSkupinaPlneni,
  AFRegion,
  AFCleneniDph,
  AFCleneniKontrolniHlaseni,
  AFUcetniOsnova,
  AFUcetniObdobi,
  AFTypOrganizace,
  AFKurzProCenotvorbu,
  AFKurzProPreceneni,
  AFPenezniUstav,
  AFPsc,
  AFStitek,
  AFSkupinaStitku,
  AFPreneseniDph,
  AFSablonaUpominky,
  AFFormaUhrady,
  AFStavObchodnihoDokladu,
  AFFormaUhradyZauctovani,
  AFCertifikacniAutorita,
  AFCertifikatFinbricks,
  AFCertifikat,
  AFFormaDopravy,
  AFCisloBaliku,
  AFTypUzivatelskeVazby,
  AFUzivatelskaVazba,
  AFVztah,
  AFIntrastatKrajUrceni,
  AFIntrastatZvlastniPohyb,
  AFIntrastatObchodniTransakce,
  AFIntrastatDodaciPodminky,
  AFIntrastatDruhDopravy,
  AFIntrastatKurz,
  AFIntrastatMernaJednotka,
  AFIntrastatKodNomenklatury,
  AFRezervace,
  AFSkladovaKarta,
  AFCenik,
  AFIndividualniCenik,
  AFDodavatel,
  AFOdberatel,
  AFCenikTypSazbyDph,
  AFVyrobniCislo,
  AFCenovaUroven,
  AFCenikovaSkupina,
  AFPoplatek,
  AFPodobneZbozi,
  AFSadyAKomplety,
  AFKusovnik,
  AFCenikObal,
  AFSkupinaZbozi,
  AFSkladovyPohyb,
  AFSkladovyPohybPolozka,
  AFRadaSkladovyPohyb,
  AFTypSkladovyPohyb,
  AFSklad,
  AFStrom,
  AFStromKoren,
  AFStromCenik,
  AFMapovaniSkladu,
  AFUmisteniVeSkladu,
  AFUmisteniVeSkladuRegal,
  AFUmisteniVeSkladuPolice,
  AFUmisteniVeSkladuMistnost,
  AFAtribut,
  AFPrislustenstvi,
  AFTypStavuCeniku,
  AFStavCeniku,
  AFTypAtributu,
  AFSkupinaAtributu,
  AFInventura,
  AFInventuraPolozka,
  AFStavSkladuKDatu,
  AFSarzeExpirace,
  AFMajetek,
  AFLeasing,
  AFSplatkovyKalendar,
  AFDanovyNaklad,
  AFTypMajetku,
  AFTypLeasingu,
  AFUmisteni,
  AFOdpisovaSkupina,
  AFMajetekUdalost,
  AFZapujcka,
  AFDanovyOdpis,
  AFUcetniOdpis,
  AFOsoba,
  AFOsobaHlavicka,
  AFSkupinaOsob,
  AFDite,
  AFOsobaBlizka,
  AFNepritomnost,
  AFSrazka,
  AFTypPracovnihoPomeru,
  AFMzdyBankovniSpojeni,
  AFPracovniPomer,
  AFPracovniPomerHlavicka,
  AFStalaMzdovaSlozka,
  AFMzdovaSlozka,
  AFSmena,
  AFCiselnikMzdovychSlozek,
  AFPrace,
  AFPraceMesic,
  AFMzda,
  AFPrehledZamestnancu,
  AFZavazek,
  AFZavazekPolozka,
  AFTypZavazku,
  AFRadaZavazku,
  AFFiltr,
  AFParametr,
  AFUzivatelskyDotaz,
  AFUzivatelskyDotazParametr,
  AFUzivatelskyDotazVlastnost,
  AFCustomButton,
  AFSettingStore,
  AFGlobalStore,
  AFDashboardPanel,
  AFDashboardSharing,
  AFInsight,
  AFAutotisk,
  AFXslt,
  AFSablonaMail,
  AFObrat,
  AFStavUctu,
  AFHlavniKniha,
  AFObratovaPredvaha,
  AFPodkladyDph,
  AFSouhrnneHlaseniDph,
  AFAnalyzaZakazky,
  AFPohybNaUctech,
  AFUcetniDenik,
  AFUmisteniUctu,
  AFPricteniRozdilu,
  AFSaldo,
  AFRozvahaPoUctech,
  AFVysledovkaPoUctech,
  AFCenikovyPohybNakup,
  AFCenikovyPohybProdej,
  AFVykazHospodareni,
  AFPoSplatnosti,
  AFSaldoKDatu,
  AFSestava,
  AFRadekSestavy,
  AFSumaceSestavy,
  AFStandardniPredpis,
  AFAnalyzaNakupu,
  AFAnalyzaProdeje,
  AFSubjekt,
  AFRadekPriznaniDph,
  AFUlozenePriznaniDph,
  AFUlozenePriznaniKonVykDph,
  AFZurnal,
}

export function EntityByName(name: string): typeof AFEntity {
  const cls = AFEntityRegistry[name]
  if (!cls) throw new Error(`Unknown AFEntity class ${name}`)
  return cls as typeof AFEntity
}