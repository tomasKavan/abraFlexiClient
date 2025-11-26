import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFSkladovaKarta } from './AFSkladovaKarta'
import { AFCenik } from './AFCenik'
import { AFSklad } from './AFSklad'
import { AFInventura } from './AFInventura'
import { AFMernaJednotka } from './AFMernaJednotka'
import { AFUzivatelskaVazba } from './AFUzivatelskaVazba'




export class AFInventuraPolozka extends AFEntity {
  static EntityPath: string = 'inventura-polozka'
  static EntityName: string = 'Položky inventur'
  static EntityType: string = 'INVENTURA_POLOZKA'

  // ID (db: IdPolInventura) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Reálný stav (db: MnozMjReal) - Reálný stav)
  mnozMjReal?: Big | null
  // Programový stav (db: MnozMjKarta) - Programový stav)
  mnozMjKarta?: Big | null
  // Reálný stav č. 2 (db: MnozMjReal2) - Reálný stav č. 2)
  mnozMjReal2?: Big | null
  // Reálný stav č. 3 (db: MnozMjReal3) - Reálný stav č. 3)
  mnozMjReal3?: Big | null
  // Reálný stav ve 2. vlně (db: MnozMjRealVlna2) - Reálný stav ve 2. vlně)
  mnozMjRealVlna2?: Big | null
  // Reálný stav č. 2 ve 2. vlně (db: MnozMjReal2Vlna2) - Reálný stav č. 2 ve 2. vlně)
  mnozMjReal2Vlna2?: Big | null
  // Reálný stav č. 3 ve 2. vlně (db: MnozMjReal3Vlna2) - Reálný stav č. 3 ve 2. vlně)
  mnozMjReal3Vlna2?: Big | null
  // Reálný stav ve 3. vlně (db: MnozMjRealVlna3) - Reálný stav ve 3. vlně)
  mnozMjRealVlna3?: Big | null
  // Reálný stav č. 2 ve 3. vlně (db: MnozMjReal2Vlna3) - Reálný stav č. 2 ve 3. vlně)
  mnozMjReal2Vlna3?: Big | null
  // Reálný stav č. 3 ve 3. vlně (db: MnozMjReal3Vlna3) - Reálný stav č. 3 ve 3. vlně)
  mnozMjReal3Vlna3?: Big | null
  // Reálný stav ve 4. vlně (db: MnozMjRealVlna4) - Reálný stav ve 4. vlně)
  mnozMjRealVlna4?: Big | null
  // Reálný stav č. 2 ve 4. vlně (db: MnozMjReal2Vlna4) - Reálný stav č. 2 ve 4. vlně)
  mnozMjReal2Vlna4?: Big | null
  // Reálný stav č. 3 ve 4. vlně (db: MnozMjReal3Vlna4) - Reálný stav č. 3 ve 4. vlně)
  mnozMjReal3Vlna4?: Big | null
  // Šarže (db: Sarze) - Šarže)
  sarze?: string | null
  // Expirace (db: Expirace) - Expirace)
  expirace?: Date | null
  // Skladová karta (db: IdKarty) - Skladová karta)
  skladKarta?: AFSkladovaKarta | null
  // Ceník (db: IdCenik) - Ceník)
  cenik?: AFCenik | null
  // Sklad (db: IdSklad) - Sklad)
  sklad?: AFSklad | null
  // Hlavička inventury (db: IdInventury) - Hlavička inventury)
  inventura?: AFInventura | null
  // MJ (db: IdMj) - MJ)
  mj?: AFMernaJednotka | null
  // MJ č. 2 (db: IdMj2) - MJ č. 2)
  mj2?: AFMernaJednotka | null
  // MJ č. 3 (db: IdMj3) - MJ č. 3)
  mj3?: AFMernaJednotka | null

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
    mnozMjReal : {
      key: 'mnozMjReal',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjKarta : {
      key: 'mnozMjKarta',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal2 : {
      key: 'mnozMjReal2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal3 : {
      key: 'mnozMjReal3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjRealVlna2 : {
      key: 'mnozMjRealVlna2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal2Vlna2 : {
      key: 'mnozMjReal2Vlna2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal3Vlna2 : {
      key: 'mnozMjReal3Vlna2',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjRealVlna3 : {
      key: 'mnozMjRealVlna3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal2Vlna3 : {
      key: 'mnozMjReal2Vlna3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal3Vlna3 : {
      key: 'mnozMjReal3Vlna3',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjRealVlna4 : {
      key: 'mnozMjRealVlna4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal2Vlna4 : {
      key: 'mnozMjReal2Vlna4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    mnozMjReal3Vlna4 : {
      key: 'mnozMjReal3Vlna4',
      type: PropertyType.Numeric,
      isArray: false,
      digits: 19,
      
    },
    sarze : {
      key: 'sarze',
      type: PropertyType.String,
      isArray: false,
      maxLength: 100,
      
    },
    expirace : {
      key: 'expirace',
      type: PropertyType.Date,
      isArray: false,
      
    },
    skladKarta : {
      key: 'skladKarta',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFSkladovaKarta',
      
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
    inventura : {
      key: 'inventura',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFInventura',
      
    },
    mj : {
      key: 'mj',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    mj2 : {
      key: 'mj2',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },
    mj3 : {
      key: 'mj3',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFMernaJednotka',
      
    },

    'uzivatelske-vazby' : {
      key: 'uzivatelske-vazby',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFUzivatelskaVazba'
    },

  }
}