import { AFEntity } from '../abra/AFEntity'

import { AFKontakt } from './entities/AFKontakt'
import { AFAdresar } from './entities/AFAdresar'
import { AFUdalost } from './entities/AFUdalost'
import { AFTypAktivity } from './entities/AFTypAktivity'
import { AFTypNakladu } from './entities/AFTypNakladu'
import { AFNaklad } from './entities/AFNaklad'
import { AFAdresarBankovniUcet } from './entities/AFAdresarBankovniUcet'
import { AFSkupinaFirem } from './entities/AFSkupinaFirem'
import { AFSmlouva } from './entities/AFSmlouva'
import { AFDodavatelskaSmlouva } from './entities/AFDodavatelskaSmlouva'
import { AFTypSmlouvy } from './entities/AFTypSmlouvy'
import { AFDodavatelskyTypSmlouvy } from './entities/AFDodavatelskyTypSmlouvy'
import { AFStavSmlouvy } from './entities/AFStavSmlouvy'
import { AFSmlouvaPolozka } from './entities/AFSmlouvaPolozka'
import { AFSmlouvaZurnal } from './entities/AFSmlouvaZurnal'
import { AFObjednavkaPrijata } from './entities/AFObjednavkaPrijata'
import { AFObjednavkaPrijataPolozka } from './entities/AFObjednavkaPrijataPolozka'
import { AFRadaObjednavkyPrijate } from './entities/AFRadaObjednavkyPrijate'
import { AFTypObjednavkyPrijate } from './entities/AFTypObjednavkyPrijate'
import { AFObjednavkaVydana } from './entities/AFObjednavkaVydana'
import { AFObjednavkaVydanaPolozka } from './entities/AFObjednavkaVydanaPolozka'
import { AFTypObjednavkyVydane } from './entities/AFTypObjednavkyVydane'
import { AFRadaObjednavkyVydane } from './entities/AFRadaObjednavkyVydane'
import { AFPoptavkaVydana } from './entities/AFPoptavkaVydana'
import { AFPoptavkaVydanaPolozka } from './entities/AFPoptavkaVydanaPolozka'
import { AFTypPoptavkyVydane } from './entities/AFTypPoptavkyVydane'
import { AFRadaPoptavkyVydane } from './entities/AFRadaPoptavkyVydane'
import { AFPoptavkaPrijata } from './entities/AFPoptavkaPrijata'
import { AFPoptavkaPrijataPolozka } from './entities/AFPoptavkaPrijataPolozka'
import { AFTypPoptavkyPrijate } from './entities/AFTypPoptavkyPrijate'
import { AFRadaPoptavkyPrijate } from './entities/AFRadaPoptavkyPrijate'
import { AFNabidkaVydana } from './entities/AFNabidkaVydana'
import { AFNabidkaVydanaPolozka } from './entities/AFNabidkaVydanaPolozka'
import { AFTypNabidkyVydane } from './entities/AFTypNabidkyVydane'
import { AFRadaNabidkyVydane } from './entities/AFRadaNabidkyVydane'
import { AFNabidkaPrijata } from './entities/AFNabidkaPrijata'
import { AFTypNabidkyPrijate } from './entities/AFTypNabidkyPrijate'
import { AFNabidkaPrijataPolozka } from './entities/AFNabidkaPrijataPolozka'
import { AFRadaNabidkyPrijate } from './entities/AFRadaNabidkyPrijate'
import { AFFakturaPrijata } from './entities/AFFakturaPrijata'
import { AFFakturaPrijataPolozka } from './entities/AFFakturaPrijataPolozka'
import { AFTypFakturyPrijate } from './entities/AFTypFakturyPrijate'
import { AFRadaFakturyPrijate } from './entities/AFRadaFakturyPrijate'
import { AFPredpisZauctovani } from './entities/AFPredpisZauctovani'
import { AFRada } from './entities/AFRada'
import { AFRocniRada } from './entities/AFRocniRada'
import { AFMistoUrceni } from './entities/AFMistoUrceni'
import { AFText } from './entities/AFText'
import { AFPokladniPohyb } from './entities/AFPokladniPohyb'
import { AFPokladniPohybPolozka } from './entities/AFPokladniPohybPolozka'
import { AFRadaPokladniPohyb } from './entities/AFRadaPokladniPohyb'
import { AFTypPokladniPohyb } from './entities/AFTypPokladniPohyb'
import { AFBanka } from './entities/AFBanka'
import { AFTypBanka } from './entities/AFTypBanka'
import { AFRadaBanka } from './entities/AFRadaBanka'
import { AFBankaPolozka } from './entities/AFBankaPolozka'
import { AFFormatElektronickehoBankovnictvi } from './entities/AFFormatElektronickehoBankovnictvi'
import { AFFormatElektronickehoPrikazu } from './entities/AFFormatElektronickehoPrikazu'
import { AFPohledavka } from './entities/AFPohledavka'
import { AFPohledavkaPolozka } from './entities/AFPohledavkaPolozka'
import { AFTypPohledavky } from './entities/AFTypPohledavky'
import { AFRadaPohledavky } from './entities/AFRadaPohledavky'
import { AFBankovniUcet } from './entities/AFBankovniUcet'
import { AFPokladna } from './entities/AFPokladna'
import { AFBankovniUcetPokladna } from './entities/AFBankovniUcetPokladna'
import { AFPrikazKUhrade } from './entities/AFPrikazKUhrade'
import { AFPrikazKUhradePolozka } from './entities/AFPrikazKUhradePolozka'
import { AFPrikazKInkasu } from './entities/AFPrikazKInkasu'
import { AFPrikazKInkasuPolozka } from './entities/AFPrikazKInkasuPolozka'
import { AFDokladKUhrade } from './entities/AFDokladKUhrade'
import { AFVzajemnyZapocet } from './entities/AFVzajemnyZapocet'
import { AFTypVzajemnychZapoctu } from './entities/AFTypVzajemnychZapoctu'
import { AFBankovniUcetSkladPokladna } from './entities/AFBankovniUcetSkladPokladna'
import { AFTypInternihoDokladu } from './entities/AFTypInternihoDokladu'
import { AFRadaInternihoDokladu } from './entities/AFRadaInternihoDokladu'
import { AFInterniDoklad } from './entities/AFInterniDoklad'
import { AFInterniDokladPolozka } from './entities/AFInterniDokladPolozka'
import { AFDoklad } from './entities/AFDoklad'
import { AFVazba } from './entities/AFVazba'
import { AFVazebniDoklad } from './entities/AFVazebniDoklad'
import { AFPriloha } from './entities/AFPriloha'
import { AFTypDokladu } from './entities/AFTypDokladu'
import { AFZalohaKOdpoctu } from './entities/AFZalohaKOdpoctu'
import { AFCastkyKOdpoctu } from './entities/AFCastkyKOdpoctu'
import { AFDoporuceni } from './entities/AFDoporuceni'
import { AFFakturaVydana } from './entities/AFFakturaVydana'
import { AFFakturaVydanaPolozka } from './entities/AFFakturaVydanaPolozka'
import { AFTypFakturyVydane } from './entities/AFTypFakturyVydane'
import { AFRadaFakturyVydane } from './entities/AFRadaFakturyVydane'
import { AFProdejka } from './entities/AFProdejka'
import { AFTypProdejky } from './entities/AFTypProdejky'
import { AFProdejkaPlatba } from './entities/AFProdejkaPlatba'
import { AFPravoViditelnosti } from './entities/AFPravoViditelnosti'
import { AFNastaveni } from './entities/AFNastaveni'
import { AFKurz } from './entities/AFKurz'
import { AFUcet } from './entities/AFUcet'
import { AFMena } from './entities/AFMena'
import { AFStat } from './entities/AFStat'
import { AFStatDph } from './entities/AFStatDph'
import { AFCinnost } from './entities/AFCinnost'
import { AFStredisko } from './entities/AFStredisko'
import { AFSazbaDph } from './entities/AFSazbaDph'
import { AFZakazka } from './entities/AFZakazka'
import { AFTypZakazky } from './entities/AFTypZakazky'
import { AFStavZakazky } from './entities/AFStavZakazky'
import { AFHodnoceniZakazky } from './entities/AFHodnoceniZakazky'
import { AFKonstSymbol } from './entities/AFKonstSymbol'
import { AFMernaJednotka } from './entities/AFMernaJednotka'
import { AFSkupinaPlneni } from './entities/AFSkupinaPlneni'
import { AFRegion } from './entities/AFRegion'
import { AFCleneniDph } from './entities/AFCleneniDph'
import { AFCleneniKontrolniHlaseni } from './entities/AFCleneniKontrolniHlaseni'
import { AFUcetniOsnova } from './entities/AFUcetniOsnova'
import { AFUcetniObdobi } from './entities/AFUcetniObdobi'
import { AFTypOrganizace } from './entities/AFTypOrganizace'
import { AFKurzProCenotvorbu } from './entities/AFKurzProCenotvorbu'
import { AFKurzProPreceneni } from './entities/AFKurzProPreceneni'
import { AFPenezniUstav } from './entities/AFPenezniUstav'
import { AFPsc } from './entities/AFPsc'
import { AFStitek } from './entities/AFStitek'
import { AFSkupinaStitku } from './entities/AFSkupinaStitku'
import { AFPreneseniDph } from './entities/AFPreneseniDph'
import { AFSablonaUpominky } from './entities/AFSablonaUpominky'
import { AFFormaUhrady } from './entities/AFFormaUhrady'
import { AFStavObchodnihoDokladu } from './entities/AFStavObchodnihoDokladu'
import { AFFormaUhradyZauctovani } from './entities/AFFormaUhradyZauctovani'
import { AFCertifikacniAutorita } from './entities/AFCertifikacniAutorita'
import { AFCertifikatFinbricks } from './entities/AFCertifikatFinbricks'
import { AFCertifikat } from './entities/AFCertifikat'
import { AFFormaDopravy } from './entities/AFFormaDopravy'
import { AFCisloBaliku } from './entities/AFCisloBaliku'
import { AFTypUzivatelskeVazby } from './entities/AFTypUzivatelskeVazby'
import { AFUzivatelskaVazba } from './entities/AFUzivatelskaVazba'
import { AFVztah } from './entities/AFVztah'
import { AFIntrastatKrajUrceni } from './entities/AFIntrastatKrajUrceni'
import { AFIntrastatZvlastniPohyb } from './entities/AFIntrastatZvlastniPohyb'
import { AFIntrastatObchodniTransakce } from './entities/AFIntrastatObchodniTransakce'
import { AFIntrastatDodaciPodminky } from './entities/AFIntrastatDodaciPodminky'
import { AFIntrastatDruhDopravy } from './entities/AFIntrastatDruhDopravy'
import { AFIntrastatKurz } from './entities/AFIntrastatKurz'
import { AFIntrastatMernaJednotka } from './entities/AFIntrastatMernaJednotka'
import { AFIntrastatKodNomenklatury } from './entities/AFIntrastatKodNomenklatury'
import { AFRezervace } from './entities/AFRezervace'
import { AFSkladovaKarta } from './entities/AFSkladovaKarta'
import { AFCenik } from './entities/AFCenik'
import { AFIndividualniCenik } from './entities/AFIndividualniCenik'
import { AFDodavatel } from './entities/AFDodavatel'
import { AFOdberatel } from './entities/AFOdberatel'
import { AFCenikTypSazbyDph } from './entities/AFCenikTypSazbyDph'
import { AFVyrobniCislo } from './entities/AFVyrobniCislo'
import { AFCenovaUroven } from './entities/AFCenovaUroven'
import { AFCenikovaSkupina } from './entities/AFCenikovaSkupina'
import { AFPoplatek } from './entities/AFPoplatek'
import { AFPodobneZbozi } from './entities/AFPodobneZbozi'
import { AFSadyAKomplety } from './entities/AFSadyAKomplety'
import { AFKusovnik } from './entities/AFKusovnik'
import { AFCenikObal } from './entities/AFCenikObal'
import { AFSkupinaZbozi } from './entities/AFSkupinaZbozi'
import { AFSkladovyPohyb } from './entities/AFSkladovyPohyb'
import { AFSkladovyPohybPolozka } from './entities/AFSkladovyPohybPolozka'
import { AFRadaSkladovyPohyb } from './entities/AFRadaSkladovyPohyb'
import { AFTypSkladovyPohyb } from './entities/AFTypSkladovyPohyb'
import { AFSklad } from './entities/AFSklad'
import { AFStrom } from './entities/AFStrom'
import { AFStromKoren } from './entities/AFStromKoren'
import { AFStromCenik } from './entities/AFStromCenik'
import { AFMapovaniSkladu } from './entities/AFMapovaniSkladu'
import { AFUmisteniVeSkladu } from './entities/AFUmisteniVeSkladu'
import { AFUmisteniVeSkladuRegal } from './entities/AFUmisteniVeSkladuRegal'
import { AFUmisteniVeSkladuPolice } from './entities/AFUmisteniVeSkladuPolice'
import { AFUmisteniVeSkladuMistnost } from './entities/AFUmisteniVeSkladuMistnost'
import { AFAtribut } from './entities/AFAtribut'
import { AFPrislustenstvi } from './entities/AFPrislustenstvi'
import { AFTypStavuCeniku } from './entities/AFTypStavuCeniku'
import { AFStavCeniku } from './entities/AFStavCeniku'
import { AFTypAtributu } from './entities/AFTypAtributu'
import { AFSkupinaAtributu } from './entities/AFSkupinaAtributu'
import { AFInventura } from './entities/AFInventura'
import { AFInventuraPolozka } from './entities/AFInventuraPolozka'
import { AFStavSkladuKDatu } from './entities/AFStavSkladuKDatu'
import { AFSarzeExpirace } from './entities/AFSarzeExpirace'
import { AFMajetek } from './entities/AFMajetek'
import { AFLeasing } from './entities/AFLeasing'
import { AFSplatkovyKalendar } from './entities/AFSplatkovyKalendar'
import { AFDanovyNaklad } from './entities/AFDanovyNaklad'
import { AFTypMajetku } from './entities/AFTypMajetku'
import { AFTypLeasingu } from './entities/AFTypLeasingu'
import { AFUmisteni } from './entities/AFUmisteni'
import { AFOdpisovaSkupina } from './entities/AFOdpisovaSkupina'
import { AFMajetekUdalost } from './entities/AFMajetekUdalost'
import { AFZapujcka } from './entities/AFZapujcka'
import { AFDanovyOdpis } from './entities/AFDanovyOdpis'
import { AFUcetniOdpis } from './entities/AFUcetniOdpis'
import { AFOsoba } from './entities/AFOsoba'
import { AFOsobaHlavicka } from './entities/AFOsobaHlavicka'
import { AFSkupinaOsob } from './entities/AFSkupinaOsob'
import { AFDite } from './entities/AFDite'
import { AFOsobaBlizka } from './entities/AFOsobaBlizka'
import { AFNepritomnost } from './entities/AFNepritomnost'
import { AFSrazka } from './entities/AFSrazka'
import { AFTypPracovnihoPomeru } from './entities/AFTypPracovnihoPomeru'
import { AFMzdyBankovniSpojeni } from './entities/AFMzdyBankovniSpojeni'
import { AFPracovniPomer } from './entities/AFPracovniPomer'
import { AFPracovniPomerHlavicka } from './entities/AFPracovniPomerHlavicka'
import { AFStalaMzdovaSlozka } from './entities/AFStalaMzdovaSlozka'
import { AFMzdovaSlozka } from './entities/AFMzdovaSlozka'
import { AFSmena } from './entities/AFSmena'
import { AFCiselnikMzdovychSlozek } from './entities/AFCiselnikMzdovychSlozek'
import { AFPrace } from './entities/AFPrace'
import { AFPraceMesic } from './entities/AFPraceMesic'
import { AFMzda } from './entities/AFMzda'
import { AFPrehledZamestnancu } from './entities/AFPrehledZamestnancu'
import { AFZavazek } from './entities/AFZavazek'
import { AFZavazekPolozka } from './entities/AFZavazekPolozka'
import { AFTypZavazku } from './entities/AFTypZavazku'
import { AFRadaZavazku } from './entities/AFRadaZavazku'
import { AFFiltr } from './entities/AFFiltr'
import { AFParametr } from './entities/AFParametr'
import { AFUzivatelskyDotaz } from './entities/AFUzivatelskyDotaz'
import { AFUzivatelskyDotazParametr } from './entities/AFUzivatelskyDotazParametr'
import { AFUzivatelskyDotazVlastnost } from './entities/AFUzivatelskyDotazVlastnost'
import { AFCustomButton } from './entities/AFCustomButton'
import { AFSettingStore } from './entities/AFSettingStore'
import { AFGlobalStore } from './entities/AFGlobalStore'
import { AFDashboardPanel } from './entities/AFDashboardPanel'
import { AFDashboardSharing } from './entities/AFDashboardSharing'
import { AFInsight } from './entities/AFInsight'
import { AFAutotisk } from './entities/AFAutotisk'
import { AFXslt } from './entities/AFXslt'
import { AFSablonaMail } from './entities/AFSablonaMail'
import { AFObrat } from './entities/AFObrat'
import { AFStavUctu } from './entities/AFStavUctu'
import { AFHlavniKniha } from './entities/AFHlavniKniha'
import { AFObratovaPredvaha } from './entities/AFObratovaPredvaha'
import { AFPodkladyDph } from './entities/AFPodkladyDph'
import { AFSouhrnneHlaseniDph } from './entities/AFSouhrnneHlaseniDph'
import { AFAnalyzaZakazky } from './entities/AFAnalyzaZakazky'
import { AFPohybNaUctech } from './entities/AFPohybNaUctech'
import { AFUcetniDenik } from './entities/AFUcetniDenik'
import { AFUmisteniUctu } from './entities/AFUmisteniUctu'
import { AFPricteniRozdilu } from './entities/AFPricteniRozdilu'
import { AFSaldo } from './entities/AFSaldo'
import { AFRozvahaPoUctech } from './entities/AFRozvahaPoUctech'
import { AFVysledovkaPoUctech } from './entities/AFVysledovkaPoUctech'
import { AFCenikovyPohybNakup } from './entities/AFCenikovyPohybNakup'
import { AFCenikovyPohybProdej } from './entities/AFCenikovyPohybProdej'
import { AFVykazHospodareni } from './entities/AFVykazHospodareni'
import { AFPoSplatnosti } from './entities/AFPoSplatnosti'
import { AFSaldoKDatu } from './entities/AFSaldoKDatu'
import { AFSestava } from './entities/AFSestava'
import { AFRadekSestavy } from './entities/AFRadekSestavy'
import { AFSumaceSestavy } from './entities/AFSumaceSestavy'
import { AFStandardniPredpis } from './entities/AFStandardniPredpis'
import { AFAnalyzaNakupu } from './entities/AFAnalyzaNakupu'
import { AFAnalyzaProdeje } from './entities/AFAnalyzaProdeje'
import { AFSubjekt } from './entities/AFSubjekt'
import { AFRadekPriznaniDph } from './entities/AFRadekPriznaniDph'
import { AFUlozenePriznaniDph } from './entities/AFUlozenePriznaniDph'
import { AFUlozenePriznaniKonVykDph } from './entities/AFUlozenePriznaniKonVykDph'
import { AFZurnal } from './entities/AFZurnal'


const AFEntityRegistry: Record<string, typeof AFEntity> = {
  AFEntity,
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
  return cls
}

export function EntityByPath(path: string): typeof AFEntity {
  const cls = Object.values(AFEntityRegistry).find(
    (EntityClass ) => EntityClass.EntityPath === path
  )
  if (!cls) throw new Error(`Unknown AFEntity class with path ${path}`)
  return cls
}