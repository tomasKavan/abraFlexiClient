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
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Typ složky (db: TypSlozkyK) - Typ složky)
  typSlozkyK?: TypSlozky | null
  // Skupina složky (db: SkupSlozkyK) - Skupina složky)
  skupSlozkyK?: SkupinaSlozky | null
  // Počáteční datum (db: DatumOd) - Počáteční datum)
  datumOd?: Date | null
  // Koncové datum (db: DatumDo) - Koncové datum)
  datumDo?: Date | null
  // Částka za hodinu (db: CastkaHod) - Částka za hodinu)
  castkaHod?: Big | null
  // Částka za den (db: CastkaDen) - Částka za den)
  castkaDen?: Big | null
  // Procento / konstanta (db: ProcMzd) - Procento / konstanta)
  procMzd?: Big | null
  // Základ mzdy (db: ZaklMzd) - Základ mzdy)
  zaklMzd?: Big | null
  // Částka (db: CastMzd) - Částka)
  castMzd?: Big | null
  // Dny kalendářní (db: DnyKal) - Dny kalendářní)
  dnyKal?: Big | null
  // Dny pracovní (db: DnyPrac) - Dny pracovní)
  dnyPrac?: Big | null
  // Dny ve svátek (db: DnySvatek) - Dny ve svátek)
  dnySvatek?: Big | null
  // Hodiny (db: Hodiny) - Hodiny)
  hodiny?: Big | null
  // Hodiny svátek (db: HodinySvatek) - Hodiny svátek)
  hodinySvatek?: Big | null
  // Denní průměr (db: PrumNaDenNem) - Denní průměr)
  prumNaDenNem?: Big | null
  // Hodinový průměr (db: PrumNaHodNem) - Hodinový průměr)
  prumNaHodNem?: Big | null
  // Základ je krácen úvazkem (db: ZaklJeKracen) - Základ je krácen úvazkem)
  zaklJeKracen?: boolean | null
  // Počet měsíců za které složka platí (db: PocetMes) - Počet měsíců za které složka platí)
  pocetMes?: number | null
  // Podíl složky v měsíci (db: Podil) - Podíl složky v měsíci)
  podil?: Big | null
  // Typ výpočtu podílu (db: TypPodilK) - Typ výpočtu podílu)
  typPodilK?: any | null
  // Štítky (db: ) - Štítky)
  declare stitky?: string | null
  // Osoba (db: IdOsoba) - Osoba)
  osoba?: AFOsobaHlavicka | null
  // Pracovní poměr (db: IdPracPom) - Pracovní poměr)
  pracPom?: AFPracovniPomerHlavicka | null
  // Mzdová složka (db: IdCisMzdSloz) - Mzdová složka)
  cisMzdSloz?: AFCiselnikMzdovychSlozek | null
  // Středisko (db: IdStredisko) - Středisko)
  stredisko?: AFStredisko | null
  // Zakázka (db: IdZakazka) - Zakázka)
  zakazka?: AFZakazka | null
  // Bankovní účet (db: IdBanSpoj) - Bankovní účet)
  banSpoj?: AFMzdyBankovniSpojeni | null
  // Typ závazku (db: IdTypOstZav) - Typ závazku)
  typOstZav?: AFTypZavazku | null
  // Typ int. dokladu (db: IdTypIntDokl) - Typ int. dokladu)
  typIntDokl?: AFTypInternihoDokladu | null

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