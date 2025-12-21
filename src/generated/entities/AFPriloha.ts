import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUzivatel } from './AFUzivatel.js'
import { AFSkladovyPohyb } from './AFSkladovyPohyb.js'
import { AFNastaveni } from './AFNastaveni.js'
import { AFCenik } from './AFCenik.js'
import { AFAdresar } from './AFAdresar.js'
import { AFKontakt } from './AFKontakt.js'
import { AFReport } from './AFReport.js'
import { AFZakazka } from './AFZakazka.js'
import { AFSmlouva } from './AFSmlouva.js'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka.js'
import { AFStrom } from './AFStrom.js'
import { AFUdalost } from './AFUdalost.js'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba.js'


import { TypPrilohy } from '../AFEntityEnums.js'

export class AFPriloha extends AFEntity {
  static EntityPath: string = 'priloha'
  static EntityName: string = 'Příloha'
  static EntityType: string = 'PRILOHA'

  // ID (db: IdPriloha) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Název souboru (db: NazSoub) - Název souboru)
  nazSoub?: string | null
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string | null
  // Typ dat (db: ContentType) - Typ dat)
  contentType?: string | null
  // Typ přílohy (db: TypK) - Typ přílohy)
  typK?: TypPrilohy | null
  // Přiložit (db: Prilozit) - Přiložit)
  prilozit?: boolean | null
  // Poměr stran (db: PictureRate) - Poměr stran obrázku)
  pictureRate?: Big | null
  // Velikost (db: DataSize) - Velikost)
  dataSize?: number | null
  // Export na E-shop (db: ExportNaEshop) - Export na E-shop)
  exportNaEshop?: boolean | null
  // Odkaz (db: Link) - Odkaz)
  link?: string | null
  // Odkaz na obrázek (db: LinkPicture) - Odkaz na obrázek)
  linkPicture?: boolean | null
  // Hlavní příloha (db: MainAttachment) - Hlavní příloha)
  mainAttachment?: boolean | null
  // Otisk dat přílohy (MD5 součet) (db: DataHash) - Otisk dat přílohy (MD5 součet))
  dataHash?: string | null
  // Šířka obrázku (db: PictureWidth) - Šířka obrázku)
  pictureWidth?: number | null
  // Výška obrázku (db: PictureHeight) - Výška obrázku)
  pictureHeight?: number | null
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: AFUzivatel | null
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: any | null
  // Interní doklad (db: IdDoklInt) - Interní doklad)
  doklInt?: any | null
  // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
  doklObch?: any | null
  // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
  doklSklad?: AFSkladovyPohyb | null
  // Nastavení (db: IdNastav) - Nastavení)
  nastaveni?: AFNastaveni | null
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik | null
  // Adresář (db: IdAdresar) - Adresář)
  adresar?: AFAdresar | null
  // Kontakt (db: IdKontakt) - Kontakt)
  kontakt?: AFKontakt | null
  // Report (db: IdReport) - Report)
  report?: AFReport | null
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka | null
  // Smlouva (db: IdSmlouvy) - Smlouva)
  smlouva?: AFSmlouva | null
  // Pol. smlouvy (db: IdPolSml) - Pol. smlouvy)
  polSmlouvy?: AFSmlouvaPolozka | null
  // Strom (db: IdUzel) - Strom)
  uzel?: AFStrom | null
  // Událost (db: IdAdrUdalost) - Událost)
  adrUdalost?: AFUdalost | null
  // Obsah (db: ) - Obsah)
  content?: Buffer | null

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
    nazSoub : {
      key: 'nazSoub',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    poznam : {
      key: 'poznam',
      type: PropertyType.String,
      isArray: false,
      
    },
    contentType : {
      key: 'contentType',
      type: PropertyType.String,
      isArray: false,
      maxLength: 127,
      
    },
    typK : {
      key: 'typK',
      type: PropertyType.Select,
      isArray: false,
      maxLength: 50,
      enumName: 'TypPrilohy',
      enum: TypPrilohy,
      
    },
    prilozit : {
      key: 'prilozit',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    pictureRate : {
      key: 'pictureRate',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 6,
      
    },
    dataSize : {
      key: 'dataSize',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    exportNaEshop : {
      key: 'exportNaEshop',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    link : {
      key: 'link',
      type: PropertyType.String,
      isArray: false,
      
    },
    linkPicture : {
      key: 'linkPicture',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    mainAttachment : {
      key: 'mainAttachment',
      type: PropertyType.Logic,
      isArray: false,
      
    },
    dataHash : {
      key: 'dataHash',
      type: PropertyType.String,
      isArray: false,
      maxLength: 50,
      
    },
    pictureWidth : {
      key: 'pictureWidth',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    pictureHeight : {
      key: 'pictureHeight',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    uzivatel : {
      key: 'uzivatel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUzivatel',
      maxLength: 254,
      
    },
    doklFak : {
      key: 'doklFak',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklInt : {
      key: 'doklInt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklObch : {
      key: 'doklObch',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
    },
    doklSklad : {
      key: 'doklSklad',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovyPohyb',
      
    },
    nastaveni : {
      key: 'nastaveni',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFNastaveni',
      
    },
    cenik : {
      key: 'cenik',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFCenik',
      maxLength: 64,
      
    },
    adresar : {
      key: 'adresar',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFAdresar',
      
    },
    kontakt : {
      key: 'kontakt',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFKontakt',
      
    },
    report : {
      key: 'report',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFReport',
      
    },
    zakazka : {
      key: 'zakazka',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFZakazka',
      maxLength: 30,
      
    },
    smlouva : {
      key: 'smlouva',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSmlouva',
      maxLength: 20,
      
    },
    polSmlouvy : {
      key: 'polSmlouvy',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSmlouvaPolozka',
      maxLength: 64,
      
    },
    uzel : {
      key: 'uzel',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStrom',
      
    },
    adrUdalost : {
      key: 'adrUdalost',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUdalost',
      
    },
    content : {
      key: 'content',
      type: PropertyType.Blob,
      isArray: false,
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}