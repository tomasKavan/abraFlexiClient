import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUzivatel } from './AFUzivatel'
import { AFSkladovyPohyb } from './AFSkladovyPohyb'
import { AFNastaveni } from './AFNastaveni'
import { AFCenik } from './AFCenik'
import { AFAdresar } from './AFAdresar'
import { AFKontakt } from './AFKontakt'
import { AFReport } from './AFReport'
import { AFZakazka } from './AFZakazka'
import { AFSmlouva } from './AFSmlouva'
import { AFSmlouvaPolozka } from './AFSmlouvaPolozka'
import { AFStrom } from './AFStrom'
import { AFUdalost } from './AFUdalost'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'


import { TypPrilohy } from '../AFEntityEnums'

export class AFPriloha extends AFEntity {
  static EntityPath: string = 'priloha'
  static EntityName: string = 'Příloha'
  static EntityType: string = 'PRILOHA'

  // ID (db: IdPriloha) - ID)
  declare id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Název souboru (db: NazSoub) - Název souboru)
  nazSoub?: string
  // Poznámka (db: Poznam) - Poznámka)
  poznam?: string
  // Typ dat (db: ContentType) - Typ dat)
  contentType?: string
  // Typ přílohy (db: TypK) - Typ přílohy)
  typK?: TypPrilohy
  // Přiložit (db: Prilozit) - Přiložit)
  prilozit?: boolean
  // Poměr stran (db: PictureRate) - Poměr stran obrázku)
  pictureRate?: Big
  // Velikost (db: DataSize) - Velikost)
  dataSize?: number
  // Export na E-shop (db: ExportNaEshop) - Export na E-shop)
  exportNaEshop?: boolean
  // Odkaz (db: Link) - Odkaz)
  link?: string
  // Odkaz na obrázek (db: LinkPicture) - Odkaz na obrázek)
  linkPicture?: boolean
  // Hlavní příloha (db: MainAttachment) - Hlavní příloha)
  mainAttachment?: boolean
  // Otisk dat přílohy (MD5 součet) (db: DataHash) - Otisk dat přílohy (MD5 součet))
  dataHash?: string
  // Šířka obrázku (db: PictureWidth) - Šířka obrázku)
  pictureWidth?: number
  // Výška obrázku (db: PictureHeight) - Výška obrázku)
  pictureHeight?: number
  // Uživatel (db: IdUziv) - Uživatel)
  uzivatel?: AFUzivatel
  // Doklad faktury (db: IdDoklFak) - Doklad faktury)
  doklFak?: any
  // Interní doklad (db: IdDoklInt) - Interní doklad)
  doklInt?: any
  // Obchodní doklad (db: IdDoklObch) - Obchodní doklad)
  doklObch?: any
  // Příjemka/výdejka (db: IdDoklSklad) - Příjemka/výdejka)
  doklSklad?: AFSkladovyPohyb
  // Nastavení (db: IdNastav) - Nastavení)
  nastaveni?: AFNastaveni
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik
  // Adresář (db: IdAdresar) - Adresář)
  adresar?: AFAdresar
  // Kontakt (db: IdKontakt) - Kontakt)
  kontakt?: AFKontakt
  // Konektor (db: IdKonektor) - Konektor)
  konektor?: any
  // Report (db: IdReport) - Report)
  report?: AFReport
  // Zakázka (db: IdZakazky) - Zakázka)
  zakazka?: AFZakazka
  // Smlouva (db: IdSmlouvy) - Smlouva)
  smlouva?: AFSmlouva
  // Pol. smlouvy (db: IdPolSml) - Pol. smlouvy)
  polSmlouvy?: AFSmlouvaPolozka
  // Strom (db: IdUzel) - Strom)
  uzel?: AFStrom
  // Požadavek (db: IdPozadavek) - Požadavek)
  pozadavek?: any
  // Událost (db: IdAdrUdalost) - Událost)
  adrUdalost?: AFUdalost
  // Obsah (db: ) - Obsah)
  content?: Buffer

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
    konektor : {
      key: 'konektor',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
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
    pozadavek : {
      key: 'pozadavek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFEntity',
      
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