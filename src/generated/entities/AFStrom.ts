import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFStromKoren } from './AFStromKoren.js'
import { AFPriloha } from './AFPriloha.js'




export class AFStrom extends AFEntity {
  static EntityPath: string = 'strom'
  static EntityName: string = 'Uzel stromu'
  static EntityType: string = 'STROM'

  // ID (db: IdUzel) - ID)
  declare id?: number | null
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date | null
  // Zkratka (db: Kod) - Zkratka)
  declare kod?: string | null
  // Název (db: Nazev) - Název)
  nazev?: string | null
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string | null
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string | null
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string | null
  // Obrázek (db: Strobr) - Obrázek)
  strobr?: string | null
  // Hladina (db: Hladina) - Hladina)
  hladina?: number | null
  // Pořadí (db: Poradi) - Pořadí)
  poradi?: number | null
  // Cesta (db: Cesta) - Cesta)
  cesta?: string | null
  // Krátký popis (db: KratkyPopis) - Krátký popis)
  kratkyPopis?: string | null
  // Klíčová slova (db: KlicSlova) - Klíčová slova)
  klicSlova?: string | null
  // Popis (db: Popis) - Popis)
  popis?: string | null
  // Text nad (db: TxtNad) - Text nad)
  txtNad?: string | null
  // Text pod (db: TxtPod) - Text pod)
  txtPod?: string | null
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number | null
  // Strom (db: Idstrom) - Strom)
  strom?: AFStromKoren | null
  // Nadřazený uzel (db: Idotec) - Nadřazený uzel)
  otec?: AFStrom | null

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]


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
    strobr : {
      key: 'strobr',
      type: PropertyType.String,
      isArray: false,
      
    },
    hladina : {
      key: 'hladina',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    poradi : {
      key: 'poradi',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    cesta : {
      key: 'cesta',
      type: PropertyType.String,
      isArray: false,
      
    },
    kratkyPopis : {
      key: 'kratkyPopis',
      type: PropertyType.String,
      isArray: false,
      
    },
    klicSlova : {
      key: 'klicSlova',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },
    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },
    txtNad : {
      key: 'txtNad',
      type: PropertyType.String,
      isArray: false,
      
    },
    txtPod : {
      key: 'txtPod',
      type: PropertyType.String,
      isArray: false,
      
    },
    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },
    strom : {
      key: 'strom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStromKoren',
      maxLength: 20,
      
    },
    otec : {
      key: 'otec',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFStrom',
      maxLength: 20,
      
    },

    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: 'AFPriloha'
    },

  }
}