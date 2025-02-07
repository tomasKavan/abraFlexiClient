import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcetniObdobi } from './AFUcetniObdobi'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFUmisteniVeSkladu } from './AFUmisteniVeSkladu'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'
import { AFSkladovyPohybPolozka } from './AFSkladovyPohybPolozka'




export class AFSkladovaKarta extends AFEntity {
  static EntityPath: string = 'skladova-karta'
  static EntityName: string = 'Skladové karty'
  static EntityType: string = 'SKLADOVA_KARTA'

  // ID (db: IdKarty) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Průměrná cena [Kč] (db: PrumCenaTuz) - Průměrná cena [Kč])
  prumCenaTuz?: Big
  // Průměrná cena [měna] (db: PrumCenaMen) - Průměrná cena [měna])
  prumCenaMen?: Big
  // Stav zásob v MJ (db: StavMJ) - Stav zásob v MJ)
  stavMJ?: Big
  // Stav zásob [Kč] (db: StavTuz) - Stav zásob [Kč])
  stavTuz?: Big
  // Stav zásob [měna] (db: StavMen) - Stav zásob [měna])
  stavMen?: Big
  // Datum posl. pohybu (db: DatPosl) - Datum posl. pohybu)
  datPosl?: Date
  // Počátek MJ (db: PocatMJ) - Počátek MJ)
  pocatMJ?: Big
  // Počátek [Kč] (db: PocatTuz) - Počátek [Kč])
  pocatTuz?: Big
  // Počátek [měna] (db: PocatMen) - Počátek [měna])
  pocatMen?: Big
  // Min. zásoba MJ (db: MinMJ) - Min. zásoba MJ)
  minMJ?: Big
  // Maximum (db: MaxMJ) - Max. zásoba MJ)
  maxMJ?: Big
  // Rezervováno MJ (db: RezervMJ) - Rezervováno MJ)
  rezervMJ?: Big
  // Stav k datu MJ (db: DatStavMJ) - Stav k datu MJ)
  datStavMJ?: Big
  // Stav k datu [Kč] (db: DatStavTuz) - Stav k datu [Kč])
  datStavTuz?: Big
  // Stav k datu [měna] (db: DatStavMen) - Stav k datu [měna])
  datStavMen?: Big
  // Poslední cena [Kč] (db: PoslCenaTuz) - Poslední cena [Kč])
  poslCenaTuz?: Big
  // Poslední cena [měna] (db: PoslCenaMen) - Poslední cena [měna])
  poslCenaMen?: Big
  // Výdej dle expirace (db: VydExpir) - Výdej dle expirace)
  vydExpir?: boolean
  // Popis (db: Popis) - Popis)
  popis?: string
  // Popis EN (db: PopisA) - Popis EN)
  popisA?: string
  // Popis DE (db: PopisB) - Popis DE)
  popisB?: string
  // Popis FR (db: PopisC) - Popis FR)
  popisC?: string
  // Poznámka (db: PoznamVelka) - Poznámka)
  poznamVelka?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Ceník - popis (db: CenPopis) - Ceník - popis)
  cenPopis?: string
  // Ceník - popis EN (db: CenPopisA) - Ceník - popis EN)
  cenPopisA?: string
  // Ceník - popis DE (db: CenPopisB) - Ceník - popis DE)
  cenPopisB?: string
  // Ceník - popis FR (db: CenPopisC) - Ceník - popis FR)
  cenPopisC?: string
  // Ceník - poznámka (db: CenPoznam) - Ceník - poznámka)
  cenPoznam?: string
  // Požadavky MJ (db: PozadavkyMj) - Požadavky MJ)
  pozadavkyMj?: Big
  // Stav zásob v MJ s požadavky (db: StavMjSPozadavky) - Stav zásob v MJ s požadavky)
  stavMjSPozadavky?: Big
  // Dostupné množství (db: stavMjSPozadavky - rezervMJ) - Dostupné množství)
  dostupMj?: Big
  // Účetní období (db: IdUcetObdobi) - Účetní období)
  ucetObdobi?: AFUcetniObdobi
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik
  // Sklad (db: IdSkladu) - Sklad)
  sklad?: AFSklad
  // Místnost (db: IdMistnost) - Místnost)
  mistnost?: AFUmisteniVeSkladu
  // Regál (db: IdRegal) - Regál)
  regal?: AFUmisteniVeSkladu
  // Police (db: IdPolice) - Police)
  police?: AFUmisteniVeSkladu

  // Uživatelské vazby (type: VAZBA) - uzivatelske-vazby)
  'uzivatelske-vazby'?: AFUzivatelskaVazba[]
  get uzivatelskeVazby(): AFUzivatelskaVazba[] | undefined { return this['uzivatelske-vazby']}
  // Položky příjemky/výdejky (type: SKLADOVY_POHYB_POLOZKA) - skladovy-pohyb-polozky)
  'skladovy-pohyb-polozky'?: AFSkladovyPohybPolozka[]
  get skladovyPohybPolozky(): AFSkladovyPohybPolozka[] | undefined { return this['skladovy-pohyb-polozky']}


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
    prumCenaTuz : {
      key: 'prumCenaTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    prumCenaMen : {
      key: 'prumCenaMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    stavMJ : {
      key: 'stavMJ',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    stavTuz : {
      key: 'stavTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    stavMen : {
      key: 'stavMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    datPosl : {
      key: 'datPosl',
      type: PropertyType.Date,
      isArray: false,
      
    },
    pocatMJ : {
      key: 'pocatMJ',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    pocatTuz : {
      key: 'pocatTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    pocatMen : {
      key: 'pocatMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    minMJ : {
      key: 'minMJ',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    maxMJ : {
      key: 'maxMJ',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    rezervMJ : {
      key: 'rezervMJ',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    datStavMJ : {
      key: 'datStavMJ',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    datStavTuz : {
      key: 'datStavTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    datStavMen : {
      key: 'datStavMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    poslCenaTuz : {
      key: 'poslCenaTuz',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    poslCenaMen : {
      key: 'poslCenaMen',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    vydExpir : {
      key: 'vydExpir',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisA : {
      key: 'popisA',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisB : {
      key: 'popisB',
      type: PropertyType.String,
      isArray: false,
      
    },
    popisC : {
      key: 'popisC',
      type: PropertyType.String,
      isArray: false,
      
    },
    poznamVelka : {
      key: 'poznamVelka',
      type: PropertyType.String,
      isArray: false,
      
    },
    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      
    },
    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    cenPopis : {
      key: 'cenPopis',
      type: PropertyType.String,
      isArray: false,
      
    },
    cenPopisA : {
      key: 'cenPopisA',
      type: PropertyType.String,
      isArray: false,
      
    },
    cenPopisB : {
      key: 'cenPopisB',
      type: PropertyType.String,
      isArray: false,
      
    },
    cenPopisC : {
      key: 'cenPopisC',
      type: PropertyType.String,
      isArray: false,
      
    },
    cenPoznam : {
      key: 'cenPoznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    pozadavkyMj : {
      key: 'pozadavkyMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    stavMjSPozadavky : {
      key: 'stavMjSPozadavky',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    dostupMj : {
      key: 'dostupMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    ucetObdobi : {
      key: 'ucetObdobi',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcetniObdobi',
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      
    },
    sklad : {
      key: 'sklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSklad',
      
    },
    mistnost : {
      key: 'mistnost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUmisteniVeSkladu',
      
    },
    regal : {
      key: 'regal',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUmisteniVeSkladu',
      
    },
    police : {
      key: 'police',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUmisteniVeSkladu',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },
    'skladovy-pohyb-polozky' : {
      key: 'skladovy-pohyb-polozky',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFSkladovyPohybPolozka'
    },

  }
}