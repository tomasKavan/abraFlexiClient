import { AFEntity } from '../abra/AFEntity.js'

import { AFKontakt } from './entities/AFKontakt.js'
import { AFAdresar } from './entities/AFAdresar.js'
import { AFUdalost } from './entities/AFUdalost.js'
import { AFTypAktivity } from './entities/AFTypAktivity.js'
import { AFTypNakladu } from './entities/AFTypNakladu.js'
import { AFNaklad } from './entities/AFNaklad.js'
import { AFAdresarBankovniUcet } from './entities/AFAdresarBankovniUcet.js'
import { AFSkupinaFirem } from './entities/AFSkupinaFirem.js'
import { AFSmlouva } from './entities/AFSmlouva.js'
import { AFDodavatelskaSmlouva } from './entities/AFDodavatelskaSmlouva.js'
import { AFTypSmlouvy } from './entities/AFTypSmlouvy.js'
import { AFDodavatelskyTypSmlouvy } from './entities/AFDodavatelskyTypSmlouvy.js'
import { AFStavSmlouvy } from './entities/AFStavSmlouvy.js'
import { AFSmlouvaPolozka } from './entities/AFSmlouvaPolozka.js'
import { AFSmlouvaZurnal } from './entities/AFSmlouvaZurnal.js'
import { AFObjednavkaPrijata } from './entities/AFObjednavkaPrijata.js'
import { AFObjednavkaPrijataPolozka } from './entities/AFObjednavkaPrijataPolozka.js'
import { AFRadaObjednavkyPrijate } from './entities/AFRadaObjednavkyPrijate.js'
import { AFTypObjednavkyPrijate } from './entities/AFTypObjednavkyPrijate.js'
import { AFObjednavkaVydana } from './entities/AFObjednavkaVydana.js'
import { AFObjednavkaVydanaPolozka } from './entities/AFObjednavkaVydanaPolozka.js'
import { AFTypObjednavkyVydane } from './entities/AFTypObjednavkyVydane.js'
import { AFRadaObjednavkyVydane } from './entities/AFRadaObjednavkyVydane.js'
import { AFPoptavkaVydana } from './entities/AFPoptavkaVydana.js'
import { AFPoptavkaVydanaPolozka } from './entities/AFPoptavkaVydanaPolozka.js'
import { AFTypPoptavkyVydane } from './entities/AFTypPoptavkyVydane.js'
import { AFRadaPoptavkyVydane } from './entities/AFRadaPoptavkyVydane.js'
import { AFPoptavkaPrijata } from './entities/AFPoptavkaPrijata.js'
import { AFPoptavkaPrijataPolozka } from './entities/AFPoptavkaPrijataPolozka.js'
import { AFTypPoptavkyPrijate } from './entities/AFTypPoptavkyPrijate.js'
import { AFRadaPoptavkyPrijate } from './entities/AFRadaPoptavkyPrijate.js'
import { AFNabidkaVydana } from './entities/AFNabidkaVydana.js'
import { AFNabidkaVydanaPolozka } from './entities/AFNabidkaVydanaPolozka.js'
import { AFTypNabidkyVydane } from './entities/AFTypNabidkyVydane.js'
import { AFRadaNabidkyVydane } from './entities/AFRadaNabidkyVydane.js'
import { AFNabidkaPrijata } from './entities/AFNabidkaPrijata.js'
import { AFTypNabidkyPrijate } from './entities/AFTypNabidkyPrijate.js'
import { AFNabidkaPrijataPolozka } from './entities/AFNabidkaPrijataPolozka.js'
import { AFRadaNabidkyPrijate } from './entities/AFRadaNabidkyPrijate.js'
import { AFFakturaPrijata } from './entities/AFFakturaPrijata.js'
import { AFFakturaPrijataPolozka } from './entities/AFFakturaPrijataPolozka.js'
import { AFTypFakturyPrijate } from './entities/AFTypFakturyPrijate.js'
import { AFRadaFakturyPrijate } from './entities/AFRadaFakturyPrijate.js'
import { AFPredpisZauctovani } from './entities/AFPredpisZauctovani.js'
import { AFDefStore } from './entities/AFDefStore.js'
import { AFRada } from './entities/AFRada.js'
import { AFRocniRada } from './entities/AFRocniRada.js'
import { AFMistoUrceni } from './entities/AFMistoUrceni.js'
import { AFText } from './entities/AFText.js'
import { AFNeuhrazenePoSplatnosti } from './entities/AFNeuhrazenePoSplatnosti.js'
import { AFNeuhrazenePoSplatnosti2 } from './entities/AFNeuhrazenePoSplatnosti2.js'
import { AFPokladniPohyb } from './entities/AFPokladniPohyb.js'
import { AFPokladniPohybPolozka } from './entities/AFPokladniPohybPolozka.js'
import { AFRadaPokladniPohyb } from './entities/AFRadaPokladniPohyb.js'
import { AFTypPokladniPohyb } from './entities/AFTypPokladniPohyb.js'
import { AFBanka } from './entities/AFBanka.js'
import { AFTypBanka } from './entities/AFTypBanka.js'
import { AFRadaBanka } from './entities/AFRadaBanka.js'
import { AFBankaPolozka } from './entities/AFBankaPolozka.js'
import { AFFormatElektronickehoBankovnictvi } from './entities/AFFormatElektronickehoBankovnictvi.js'
import { AFFormatElektronickehoPrikazu } from './entities/AFFormatElektronickehoPrikazu.js'
import { AFPohledavka } from './entities/AFPohledavka.js'
import { AFPohledavkaPolozka } from './entities/AFPohledavkaPolozka.js'
import { AFTypPohledavky } from './entities/AFTypPohledavky.js'
import { AFRadaPohledavky } from './entities/AFRadaPohledavky.js'
import { AFUplatneniDaneZavazku } from './entities/AFUplatneniDaneZavazku.js'
import { AFUplatneniDaneZavazkuPolozka } from './entities/AFUplatneniDaneZavazkuPolozka.js'
import { AFTypUplatneniDaneZavazku } from './entities/AFTypUplatneniDaneZavazku.js'
import { AFRadaUplatneniDaneZavazku } from './entities/AFRadaUplatneniDaneZavazku.js'
import { AFBankovniUcet } from './entities/AFBankovniUcet.js'
import { AFPokladna } from './entities/AFPokladna.js'
import { AFBankovniUcetPokladna } from './entities/AFBankovniUcetPokladna.js'
import { AFPrikazKUhrade } from './entities/AFPrikazKUhrade.js'
import { AFPrikazKUhradePolozka } from './entities/AFPrikazKUhradePolozka.js'
import { AFPrikazKInkasu } from './entities/AFPrikazKInkasu.js'
import { AFPrikazKInkasuPolozka } from './entities/AFPrikazKInkasuPolozka.js'
import { AFDokladKUhrade } from './entities/AFDokladKUhrade.js'
import { AFVzajemnyZapocet } from './entities/AFVzajemnyZapocet.js'
import { AFTypVzajemnychZapoctu } from './entities/AFTypVzajemnychZapoctu.js'
import { AFBankovniUcetSkladPokladna } from './entities/AFBankovniUcetSkladPokladna.js'
import { AFTypInternihoDokladu } from './entities/AFTypInternihoDokladu.js'
import { AFRadaInternihoDokladu } from './entities/AFRadaInternihoDokladu.js'
import { AFInterniDoklad } from './entities/AFInterniDoklad.js'
import { AFInterniDokladPolozka } from './entities/AFInterniDokladPolozka.js'
import { AFDoklad } from './entities/AFDoklad.js'
import { AFVazba } from './entities/AFVazba.js'
import { AFVazebniDoklad } from './entities/AFVazebniDoklad.js'
import { AFPriloha } from './entities/AFPriloha.js'
import { AFTypDokladu } from './entities/AFTypDokladu.js'
import { AFZalohaKOdpoctu } from './entities/AFZalohaKOdpoctu.js'
import { AFCastkyKOdpoctu } from './entities/AFCastkyKOdpoctu.js'
import { AFDoporuceni } from './entities/AFDoporuceni.js'
import { AFFakturaVydana } from './entities/AFFakturaVydana.js'
import { AFFakturaVydanaPolozka } from './entities/AFFakturaVydanaPolozka.js'
import { AFTypFakturyVydane } from './entities/AFTypFakturyVydane.js'
import { AFRadaFakturyVydane } from './entities/AFRadaFakturyVydane.js'
import { AFProdejka } from './entities/AFProdejka.js'
import { AFTypProdejky } from './entities/AFTypProdejky.js'
import { AFProdejkaPlatba } from './entities/AFProdejkaPlatba.js'
import { AFUzivatel } from './entities/AFUzivatel.js'
import { AFRole } from './entities/AFRole.js'
import { AFPravoViditelnosti } from './entities/AFPravoViditelnosti.js'
import { AFNastaveni } from './entities/AFNastaveni.js'
import { AFReport } from './entities/AFReport.js'
import { AFZamek } from './entities/AFZamek.js'
import { AFKurz } from './entities/AFKurz.js'
import { AFUcet } from './entities/AFUcet.js'
import { AFMena } from './entities/AFMena.js'
import { AFStat } from './entities/AFStat.js'
import { AFStatDph } from './entities/AFStatDph.js'
import { AFCinnost } from './entities/AFCinnost.js'
import { AFStredisko } from './entities/AFStredisko.js'
import { AFSazbaDph } from './entities/AFSazbaDph.js'
import { AFZakazka } from './entities/AFZakazka.js'
import { AFTypZakazky } from './entities/AFTypZakazky.js'
import { AFStavZakazky } from './entities/AFStavZakazky.js'
import { AFHodnoceniZakazky } from './entities/AFHodnoceniZakazky.js'
import { AFKonstSymbol } from './entities/AFKonstSymbol.js'
import { AFMernaJednotka } from './entities/AFMernaJednotka.js'
import { AFSkupinaPlneni } from './entities/AFSkupinaPlneni.js'
import { AFRegion } from './entities/AFRegion.js'
import { AFCleneniDph } from './entities/AFCleneniDph.js'
import { AFCleneniKontrolniHlaseni } from './entities/AFCleneniKontrolniHlaseni.js'
import { AFUcetniOsnova } from './entities/AFUcetniOsnova.js'
import { AFUcetniObdobi } from './entities/AFUcetniObdobi.js'
import { AFTypOrganizace } from './entities/AFTypOrganizace.js'
import { AFKurzProCenotvorbu } from './entities/AFKurzProCenotvorbu.js'
import { AFKurzProPreceneni } from './entities/AFKurzProPreceneni.js'
import { AFPenezniUstav } from './entities/AFPenezniUstav.js'
import { AFPsc } from './entities/AFPsc.js'
import { AFStitek } from './entities/AFStitek.js'
import { AFSkupinaStitku } from './entities/AFSkupinaStitku.js'
import { AFPreneseniDph } from './entities/AFPreneseniDph.js'
import { AFSablonaUpominky } from './entities/AFSablonaUpominky.js'
import { AFFormaUhrady } from './entities/AFFormaUhrady.js'
import { AFStavObchodnihoDokladu } from './entities/AFStavObchodnihoDokladu.js'
import { AFFormaUhradyZauctovani } from './entities/AFFormaUhradyZauctovani.js'
import { AFCertifikacniAutorita } from './entities/AFCertifikacniAutorita.js'
import { AFCertifikatFinbricks } from './entities/AFCertifikatFinbricks.js'
import { AFCertifikat } from './entities/AFCertifikat.js'
import { AFFormaDopravy } from './entities/AFFormaDopravy.js'
import { AFCisloBaliku } from './entities/AFCisloBaliku.js'
import { AFTypUzivatelskeVazby } from './entities/AFTypUzivatelskeVazby.js'
import { AFUzivatelskaVazba } from './entities/AFUzivatelskaVazba.js'
import { AFVztah } from './entities/AFVztah.js'
import { AFIntrastatKrajUrceni } from './entities/AFIntrastatKrajUrceni.js'
import { AFIntrastatZvlastniPohyb } from './entities/AFIntrastatZvlastniPohyb.js'
import { AFIntrastatObchodniTransakce } from './entities/AFIntrastatObchodniTransakce.js'
import { AFIntrastatDodaciPodminky } from './entities/AFIntrastatDodaciPodminky.js'
import { AFIntrastatDruhDopravy } from './entities/AFIntrastatDruhDopravy.js'
import { AFIntrastatKurz } from './entities/AFIntrastatKurz.js'
import { AFIntrastatMernaJednotka } from './entities/AFIntrastatMernaJednotka.js'
import { AFIntrastatKodNomenklatury } from './entities/AFIntrastatKodNomenklatury.js'
import { AFRezervace } from './entities/AFRezervace.js'
import { AFSkladovaKarta } from './entities/AFSkladovaKarta.js'
import { AFCenik } from './entities/AFCenik.js'
import { AFIndividualniCenik } from './entities/AFIndividualniCenik.js'
import { AFDodavatel } from './entities/AFDodavatel.js'
import { AFOdberatel } from './entities/AFOdberatel.js'
import { AFCenikTypSazbyDph } from './entities/AFCenikTypSazbyDph.js'
import { AFVyrobniCislo } from './entities/AFVyrobniCislo.js'
import { AFCenovaUroven } from './entities/AFCenovaUroven.js'
import { AFCenikovaSkupina } from './entities/AFCenikovaSkupina.js'
import { AFPoplatek } from './entities/AFPoplatek.js'
import { AFPodobneZbozi } from './entities/AFPodobneZbozi.js'
import { AFSadyAKomplety } from './entities/AFSadyAKomplety.js'
import { AFKusovnik } from './entities/AFKusovnik.js'
import { AFCenikObal } from './entities/AFCenikObal.js'
import { AFSkupinaZbozi } from './entities/AFSkupinaZbozi.js'
import { AFSkladovyPohyb } from './entities/AFSkladovyPohyb.js'
import { AFSkladovyPohybPolozka } from './entities/AFSkladovyPohybPolozka.js'
import { AFRadaSkladovyPohyb } from './entities/AFRadaSkladovyPohyb.js'
import { AFTypSkladovyPohyb } from './entities/AFTypSkladovyPohyb.js'
import { AFSklad } from './entities/AFSklad.js'
import { AFStrom } from './entities/AFStrom.js'
import { AFStromKoren } from './entities/AFStromKoren.js'
import { AFStromCenik } from './entities/AFStromCenik.js'
import { AFMapovaniSkladu } from './entities/AFMapovaniSkladu.js'
import { AFUmisteniVeSkladu } from './entities/AFUmisteniVeSkladu.js'
import { AFUmisteniVeSkladuRegal } from './entities/AFUmisteniVeSkladuRegal.js'
import { AFUmisteniVeSkladuPolice } from './entities/AFUmisteniVeSkladuPolice.js'
import { AFUmisteniVeSkladuMistnost } from './entities/AFUmisteniVeSkladuMistnost.js'
import { AFAtribut } from './entities/AFAtribut.js'
import { AFPrislustenstvi } from './entities/AFPrislustenstvi.js'
import { AFTypStavuCeniku } from './entities/AFTypStavuCeniku.js'
import { AFStavCeniku } from './entities/AFStavCeniku.js'
import { AFTypAtributu } from './entities/AFTypAtributu.js'
import { AFSkupinaAtributu } from './entities/AFSkupinaAtributu.js'
import { AFInventura } from './entities/AFInventura.js'
import { AFInventuraPolozka } from './entities/AFInventuraPolozka.js'
import { AFStavSkladuKDatu } from './entities/AFStavSkladuKDatu.js'
import { AFSarzeExpirace } from './entities/AFSarzeExpirace.js'
import { AFMajetek } from './entities/AFMajetek.js'
import { AFLeasing } from './entities/AFLeasing.js'
import { AFSplatkovyKalendar } from './entities/AFSplatkovyKalendar.js'
import { AFDanovyNaklad } from './entities/AFDanovyNaklad.js'
import { AFTypMajetku } from './entities/AFTypMajetku.js'
import { AFTypLeasingu } from './entities/AFTypLeasingu.js'
import { AFUmisteni } from './entities/AFUmisteni.js'
import { AFOdpisovaSkupina } from './entities/AFOdpisovaSkupina.js'
import { AFMajetekUdalost } from './entities/AFMajetekUdalost.js'
import { AFZapujcka } from './entities/AFZapujcka.js'
import { AFDanovyOdpis } from './entities/AFDanovyOdpis.js'
import { AFUcetniOdpis } from './entities/AFUcetniOdpis.js'
import { AFOsoba } from './entities/AFOsoba.js'
import { AFOsobaHlavicka } from './entities/AFOsobaHlavicka.js'
import { AFSkupinaOsob } from './entities/AFSkupinaOsob.js'
import { AFDite } from './entities/AFDite.js'
import { AFOsobaBlizka } from './entities/AFOsobaBlizka.js'
import { AFNepritomnost } from './entities/AFNepritomnost.js'
import { AFSrazka } from './entities/AFSrazka.js'
import { AFTypPracovnihoPomeru } from './entities/AFTypPracovnihoPomeru.js'
import { AFMzdyBankovniSpojeni } from './entities/AFMzdyBankovniSpojeni.js'
import { AFPracovniPomer } from './entities/AFPracovniPomer.js'
import { AFPracovniPomerHlavicka } from './entities/AFPracovniPomerHlavicka.js'
import { AFStalaMzdovaSlozka } from './entities/AFStalaMzdovaSlozka.js'
import { AFMzdovaSlozka } from './entities/AFMzdovaSlozka.js'
import { AFSmena } from './entities/AFSmena.js'
import { AFCiselnikMzdovychSlozek } from './entities/AFCiselnikMzdovychSlozek.js'
import { AFPrace } from './entities/AFPrace.js'
import { AFPraceMesic } from './entities/AFPraceMesic.js'
import { AFMzda } from './entities/AFMzda.js'
import { AFPrehledZamestnancu } from './entities/AFPrehledZamestnancu.js'
import { AFZavazek } from './entities/AFZavazek.js'
import { AFZavazekPolozka } from './entities/AFZavazekPolozka.js'
import { AFTypZavazku } from './entities/AFTypZavazku.js'
import { AFRadaZavazku } from './entities/AFRadaZavazku.js'
import { AFFiltr } from './entities/AFFiltr.js'
import { AFParametr } from './entities/AFParametr.js'
import { AFUzivatelskyDotaz } from './entities/AFUzivatelskyDotaz.js'
import { AFUzivatelskyDotazParametr } from './entities/AFUzivatelskyDotazParametr.js'
import { AFUzivatelskyDotazVlastnost } from './entities/AFUzivatelskyDotazVlastnost.js'
import { AFCustomButton } from './entities/AFCustomButton.js'
import { AFSettingStore } from './entities/AFSettingStore.js'
import { AFGlobalStore } from './entities/AFGlobalStore.js'
import { AFDashboardPanel } from './entities/AFDashboardPanel.js'
import { AFDashboardSharing } from './entities/AFDashboardSharing.js'
import { AFInsight } from './entities/AFInsight.js'
import { AFAutotisk } from './entities/AFAutotisk.js'
import { AFXslt } from './entities/AFXslt.js'
import { AFSablonaMail } from './entities/AFSablonaMail.js'
import { AFObrat } from './entities/AFObrat.js'
import { AFStavUctu } from './entities/AFStavUctu.js'
import { AFHlavniKniha } from './entities/AFHlavniKniha.js'
import { AFObratovaPredvaha } from './entities/AFObratovaPredvaha.js'
import { AFPodkladyDph } from './entities/AFPodkladyDph.js'
import { AFSouhrnneHlaseniDph } from './entities/AFSouhrnneHlaseniDph.js'
import { AFKontrolniHlaseniDph } from './entities/AFKontrolniHlaseniDph.js'
import { AFAnalyzaZakazky } from './entities/AFAnalyzaZakazky.js'
import { AFPohybNaUctech } from './entities/AFPohybNaUctech.js'
import { AFUcetniDenik } from './entities/AFUcetniDenik.js'
import { AFUmisteniUctu } from './entities/AFUmisteniUctu.js'
import { AFPricteniRozdilu } from './entities/AFPricteniRozdilu.js'
import { AFUcetniDenikZjednoduseny } from './entities/AFUcetniDenikZjednoduseny.js'
import { AFObratPolozky } from './entities/AFObratPolozky.js'
import { AFSaldo } from './entities/AFSaldo.js'
import { AFRozvahaPoUctech } from './entities/AFRozvahaPoUctech.js'
import { AFVysledovkaPoUctech } from './entities/AFVysledovkaPoUctech.js'
import { AFCenikovyPohybNakup } from './entities/AFCenikovyPohybNakup.js'
import { AFCenikovyPohybProdej } from './entities/AFCenikovyPohybProdej.js'
import { AFVykazHospodareni } from './entities/AFVykazHospodareni.js'
import { AFPoSplatnosti } from './entities/AFPoSplatnosti.js'
import { AFSaldoKDatu } from './entities/AFSaldoKDatu.js'
import { AFSestava } from './entities/AFSestava.js'
import { AFRadekSestavy } from './entities/AFRadekSestavy.js'
import { AFSumaceSestavy } from './entities/AFSumaceSestavy.js'
import { AFStandardniPredpis } from './entities/AFStandardniPredpis.js'
import { AFAnalyzaNakupu } from './entities/AFAnalyzaNakupu.js'
import { AFAnalyzaProdeje } from './entities/AFAnalyzaProdeje.js'
import { AFSubjekt } from './entities/AFSubjekt.js'
import { AFRadekPriznaniDph } from './entities/AFRadekPriznaniDph.js'
import { AFUlozenePriznaniDph } from './entities/AFUlozenePriznaniDph.js'
import { AFUlozenePriznaniKonVykDph } from './entities/AFUlozenePriznaniKonVykDph.js'
import { AFZurnal } from './entities/AFZurnal.js'


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
  AFDefStore,
  AFRada,
  AFRocniRada,
  AFMistoUrceni,
  AFText,
  AFNeuhrazenePoSplatnosti,
  AFNeuhrazenePoSplatnosti2,
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
  AFUplatneniDaneZavazku,
  AFUplatneniDaneZavazkuPolozka,
  AFTypUplatneniDaneZavazku,
  AFRadaUplatneniDaneZavazku,
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
  AFUzivatel,
  AFRole,
  AFPravoViditelnosti,
  AFNastaveni,
  AFReport,
  AFZamek,
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
  AFKontrolniHlaseniDph,
  AFAnalyzaZakazky,
  AFPohybNaUctech,
  AFUcetniDenik,
  AFUmisteniUctu,
  AFPricteniRozdilu,
  AFUcetniDenikZjednoduseny,
  AFObratPolozky,
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