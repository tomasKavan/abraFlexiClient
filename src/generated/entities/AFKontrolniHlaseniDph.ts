import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFCleneniKontrolniHlaseni } from './AFCleneniKontrolniHlaseni.js'
import { AFCleneniDph } from './AFCleneniDph.js'
import { AFPreneseniDph } from './AFPreneseniDph.js'
import { AFMernaJednotka } from './AFMernaJednotka.js'
import { AFStat } from './AFStat.js'


import { TypSzbDph } from '../AFEntityEnums.js'

export class AFKontrolniHlaseniDph extends AFEntity {
  static EntityPath: string = 'kontrolni-hlaseni-dph'
  static EntityName: string = 'Kontrolní hlášení DPH'
  static EntityType: string = 'KONTROLNI_HLASENI_DPH'

  // ID výkazu (db: ) - ID výkazu)
  idKonVykDph?: number | null
  // Evidenční číslo daňového dokladu (db: ) - Evidenční číslo daňového dokladu)
  declare kod?: string | null
  // Interní číslo (db: ) - Interní číslo)
  kodDokl?: string | null
  // Pořadové číslo původní faktury (db: ) - Pořadové číslo původní faktury)
  kodPuv?: string | null
  // Uplatnit zdaň. plnění (db: ) - Uplatnit zdaň. plnění)
  duzpUcto?: Date | null
  // Datum zdaň. plnění (db: ) - Datum zdaň. plnění)
  duzpPuv?: Date | null
  // DIČ (db: ) - DIČ)
  dic?: string | null
  // Základ [Kč] (db: ) - Základ [Kč])
  sumZkl?: Big | null
  // Základ daně původní faktury [Kč] (db: ) - Základ daně původní faktury [Kč])
  sumZklPuv?: Big | null
  // DPH [Kč] (db: ) - DPH [Kč])
  sumDph?: Big | null
  // Suma daně původní faktury [Kč] (db: ) - Suma daně původní faktury [Kč])
  sumDphPuv?: Big | null
  // Výška odpočítané daně [Kč] (db: ) - Výška odpočítané daně [Kč])
  sumOdpocDph?: Big | null
  // DPH [%] (db: ) - DPH [%])
  szbDph?: Big | null
  // Sazba DPH (db: ) - Sazba DPH)
  typSzbDphK?: TypSzbDph | null
  // Řádek kontrolního hlášení DPH (db: ) - Řádek kontrolního hlášení DPH)
  clenKonVykDph?: AFCleneniKontrolniHlaseni | null
  // Řádek kon. hl. (výsl.) (db: ) - Řádek kon. hl. (výsl.))
  clenKonVykDphVysledny?: string | null
  // Skupina (db: ) - Skupina)
  skupina?: string | null
  // Řádek DPH (db: ) - Řádek DPH)
  clenDph?: AFCleneniDph | null
  // Kód přenesení DPH (db: ) - Kód přenesení DPH)
  dphPren?: AFPreneseniDph | null
  // MJ (db: ) - MJ)
  mj?: AFMernaJednotka | null
  // Druh zboží (db: ) - Druh zboží)
  druhZbozi?: string | null
  // Číselný kód zboží (db: ) - Číselný kód zboží)
  ciselnyKodZbozi?: string | null
  // Suma množství zboží (db: ) - Suma množství zboží)
  sumMnozMj?: Big | null
  // Suma množství zboží původní faktury (db: ) - Suma množství zboží původní faktury)
  sumMnozMjPuv?: Big | null
  // Modul (db: ) - Modul)
  modul?: string | null
  // Suma B3 (db: ) - Suma B3)
  sumSkB3?: Big | null
  // Datum narození (db: ) - Datum narození)
  datNaroz?: Date | null
  // Název (db: ) - Název)
  nazev?: string | null
  // Ulice (db: ) - Ulice)
  ulice?: string | null
  // PSČ (db: ) - PSČ)
  psc?: string | null
  // Město (db: ) - Město)
  mesto?: string | null
  // Stát (db: ) - Stát)
  stat?: AFStat | null
  // ID dokladu (db: ) - ID dokladu)
  idDokl?: number | null



  static propAnnotations: Record<string, TypeAnnotation> = {
    idKonVykDph : {
      key: 'idKonVykDph',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    kodDokl : {
      key: 'kodDokl',
      type: PropertyType.String,
      isArray: false,
      
    },
    kodPuv : {
      key: 'kodPuv',
      type: PropertyType.String,
      isArray: false,
      
    },
    duzpUcto : {
      key: 'duzpUcto',
      type: PropertyType.Date,
      isArray: false,
      
    },
    duzpPuv : {
      key: 'duzpPuv',
      type: PropertyType.Date,
      isArray: false,
      
    },
    dic : {
      key: 'dic',
      type: PropertyType.String,
      isArray: false,
      maxLength: 20,
      
    },
    sumZkl : {
      key: 'sumZkl',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumZklPuv : {
      key: 'sumZklPuv',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDph : {
      key: 'sumDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumDphPuv : {
      key: 'sumDphPuv',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    sumOdpocDph : {
      key: 'sumOdpocDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    szbDph : {
      key: 'szbDph',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    typSzbDphK : {
      key: 'typSzbDphK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypSzbDph',
      enum: TypSzbDph,
      
    },
    clenKonVykDph : {
      key: 'clenKonVykDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniKontrolniHlaseni',
      
    },
    clenKonVykDphVysledny : {
      key: 'clenKonVykDphVysledny',
      type: PropertyType.String,
      isArray: false,
      
    },
    skupina : {
      key: 'skupina',
      type: PropertyType.String,
      isArray: false,
      
    },
    clenDph : {
      key: 'clenDph',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCleneniDph',
      
    },
    dphPren : {
      key: 'dphPren',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFPreneseniDph',
      
    },
    mj : {
      key: 'mj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    druhZbozi : {
      key: 'druhZbozi',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    ciselnyKodZbozi : {
      key: 'ciselnyKodZbozi',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    sumMnozMj : {
      key: 'sumMnozMj',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    sumMnozMjPuv : {
      key: 'sumMnozMjPuv',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    modul : {
      key: 'modul',
      type: PropertyType.String,
      isArray: false,
      
    },
    sumSkB3 : {
      key: 'sumSkB3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 15,
      
    },
    datNaroz : {
      key: 'datNaroz',
      type: PropertyType.Date,
      isArray: false,
      
    },
    nazev : {
      key: 'nazev',
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
    psc : {
      key: 'psc',
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
    stat : {
      key: 'stat',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStat',
      maxLength: 3,
      
    },
    idDokl : {
      key: 'idDokl',
      type: PropertyType.Integer,
      isArray: false,
      
    },


  }
}