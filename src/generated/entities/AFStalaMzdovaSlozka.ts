import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFOsobaHlavicka } from './AFOsobaHlavicka.js'
import { AFPracovniPomerHlavicka } from './AFPracovniPomerHlavicka.js'
import { AFCiselnikMzdovychSlozek } from './AFCiselnikMzdovychSlozek.js'
import { AFStredisko } from './AFStredisko.js'
import { AFZakazka } from './AFZakazka.js'
import { AFMzdyBankovniSpojeni } from './AFMzdyBankovniSpojeni.js'
import { AFTypZavazku } from './AFTypZavazku.js'
import { AFTypInternihoDokladu } from './AFTypInternihoDokladu.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypSlozky, SkupinaSlozky } from '../AFEntityEnums.js'

export class AFStalaMzdovaSlozka extends AFEntity {
  static EntityPath: string = 'stala-mzdova-slozka'
  static EntityName: string = 'Stálá mzdová složka'
  static EntityType: string = 'STALA_MZDOVA_SLOZKA'

  // ID (db: IdStalaMzdSloz) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Typ složky (db: TypSlozkyK) - Typ složky)
  typSlozkyK?: TypSlozky
  // Skupina složky (db: SkupSlozkyK) - Skupina složky)
  skupSlozkyK?: SkupinaSlozky
  // Počáteční datum (db: DatumOd) - Počáteční datum)
  datumOd?: Date
  // Koncové datum (db: DatumDo) - Koncové datum)
  datumDo?: Date
  // Částka za hodinu (db: CastkaHod) - Částka za hodinu)
  castkaHod?: Big
  // Částka za den (db: CastkaDen) - Částka za den)
  castkaDen?: Big
  // Procento / konstanta (db: ProcMzd) - Procento / konstanta)
  procMzd?: Big
  // Základ mzdy (db: ZaklMzd) - Základ mzdy)
  zaklMzd?: Big
  // Částka (db: CastMzd) - Částka)
  castMzd?: Big
  // Dny kalendářní (db: DnyKal) - Dny kalendářní)
  dnyKal?: Big
  // Dny pracovní (db: DnyPrac) - Dny pracovní)
  dnyPrac?: Big
  // Dny ve svátek (db: DnySvatek) - Dny ve svátek)
  dnySvatek?: Big
  // Hodiny (db: Hodiny) - Hodiny)
  hodiny?: Big
  // Hodiny svátek (db: HodinySvatek) - Hodiny svátek)
  hodinySvatek?: Big
  // Denní průměr (db: PrumNaDenNem) - Denní průměr)
  prumNaDenNem?: Big
  // Hodinový průměr (db: PrumNaHodNem) - Hodinový průměr)
  prumNaHodNem?: Big
  // Základ je krácen úvazkem (db: ZaklJeKracen) - Základ je krácen úvazkem)
  zaklJeKracen?: boolean
  // Počet měsíců za které složka platí (db: PocetMes) - Počet měsíců za které složka platí)
  pocetMes?: number
  // Podíl složky v měsíci (db: Podil) - Podíl složky v měsíci)
  podil?: Big
  // Typ výpočtu podílu (db: TypPodilK) - Typ výpočtu podílu)
  typPodilK?: any
  // Štítky (db: ) - Štítky)
  stitky?: string
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka
  // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
  pracPom?: AFPracovniPomerHlavicka
  // Mzdová složka (db: IdCisMzdSloz) - Mzdová složka)
  cisMzdSloz?: AFCiselnikMzdovychSlozek
  // Středisko (db: IdStredisko) - Středisko)
  stredisko?: AFStredisko
  // Zakázka (db: IdZakazka) - Zakázka)
  zakazka?: AFZakazka
  // Bankovní účet (db: IdBanSpoj) - Bankovní účet)
  banSpoj?: AFMzdyBankovniSpojeni
  // Typ závazku (db: IdTypOstZav) - Typ závazku)
  typOstZav?: AFTypZavazku
  // Typ int. dokladu (db: IdTypIntDokl) - Typ int. dokladu)
  typIntDokl?: AFTypInternihoDokladu

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}


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
      maxLength: 30,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    typSlozkyK : {
      key: 'typSlozkyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSlozky',
      enum: TypSlozky,
      
    },
    skupSlozkyK : {
      key: 'skupSlozkyK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'SkupinaSlozky',
      enum: SkupinaSlozky,
      
    },
    datumOd : {
      key: 'datumOd',
      type: PropertyType.Date,
      isArray: false,
      
    },
    datumDo : {
      key: 'datumDo',
      type: PropertyType.Date,
      isArray: false,
      
    },
    castkaHod : {
      key: 'castkaHod',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    castkaDen : {
      key: 'castkaDen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    procMzd : {
      key: 'procMzd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zaklMzd : {
      key: 'zaklMzd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    castMzd : {
      key: 'castMzd',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    dnyKal : {
      key: 'dnyKal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    dnyPrac : {
      key: 'dnyPrac',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    dnySvatek : {
      key: 'dnySvatek',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hodiny : {
      key: 'hodiny',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    hodinySvatek : {
      key: 'hodinySvatek',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    prumNaDenNem : {
      key: 'prumNaDenNem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    prumNaHodNem : {
      key: 'prumNaHodNem',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    zaklJeKracen : {
      key: 'zaklJeKracen',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    pocetMes : {
      key: 'pocetMes',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    podil : {
      key: 'podil',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    typPodilK : {
      key: 'typPodilK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      
    },
    stitky : {
      key: 'stitky',
      type: PropertyType.String,
      isArray: false,
      
    },
    osoba : {
      key: 'osoba',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFOsobaHlavicka',
      
    },
    pracPom : {
      key: 'pracPom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPracovniPomerHlavicka',
      
    },
    cisMzdSloz : {
      key: 'cisMzdSloz',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCiselnikMzdovychSlozek',
      
    },
    stredisko : {
      key: 'stredisko',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStredisko',
      maxLength: 20,
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    banSpoj : {
      key: 'banSpoj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMzdyBankovniSpojeni',
      
    },
    typOstZav : {
      key: 'typOstZav',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypZavazku',
      
    },
    typIntDokl : {
      key: 'typIntDokl',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFTypInternihoDokladu',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}