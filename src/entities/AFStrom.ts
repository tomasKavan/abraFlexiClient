import { AFEntity, TypeAnnotation, PropertyType } from '../AFEntity'
import { AFStromKoren } from './AFStromKoren'
import { AFPriloha } from './AFPriloha'




export class AFStrom extends AFEntity {
  static EntityPath: string = 'strom'
  static EntityName: string = 'Uzel stromu'
  static EntityType: string = 'STROM'

  // ID (db: IdUzel) - ID)
  id?: number
  // Poslední změna (db: lastUpdate) - Poslední změna)
  lastUpdate?: Date
  // Zkratka (db: Kod) - Zkratka)
  kod?: string
  // Název (db: Nazev) - Název)
  nazev?: string
  // Název EN (db: NazevA) - Název EN)
  nazevA?: string
  // Název DE (db: NazevB) - Název DE)
  nazevB?: string
  // Název FR (db: NazevC) - Název FR)
  nazevC?: string
  // Obrázek (db: Strobr) - Obrázek)
  strobr?: string
  // Hladina (db: Hladina) - Hladina)
  hladina?: number
  // Pořadí (db: Poradi) - Pořadí)
  poradi?: number
  // Cesta (db: Cesta) - Cesta)
  cesta?: string
  // Krátký popis (db: KratkyPopis) - Krátký popis)
  kratkyPopis?: string
  // Klíčová slova (db: KlicSlova) - Klíčová slova)
  klicSlova?: string
  // Popis (db: Popis) - Popis)
  popis?: string
  // Text nad (db: TxtNad) - Text nad)
  txtNad?: string
  // Text pod (db: TxtPod) - Text pod)
  txtPod?: string
  // Přílohy (db: PocetPriloh) - Přílohy)
  pocetPriloh?: number
  // Strom (db: Idstrom) - Strom)
  strom?: AFStromKoren
  // Nadřazený uzel (db: Idotec) - Nadřazený uzel)
  otec?: AFStrom

  // Přílohy (type: PRILOHA) - prilohy)
  prilohy?: AFPriloha[]


  static propAnnotations: Record<string, TypeAnnotation> = {
    id : {
      key: 'id',
      type: PropertyType.Integer,
      isArray: false,
      
    },    lastUpdate : {
      key: 'lastUpdate',
      type: PropertyType.DateTime,
      isArray: false,
      
    },    kod : {
      key: 'kod',
      type: PropertyType.String,
      isArray: false,
      maxLength: 30,
      
    },    nazev : {
      key: 'nazev',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevA : {
      key: 'nazevA',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevB : {
      key: 'nazevB',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    nazevC : {
      key: 'nazevC',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    strobr : {
      key: 'strobr',
      type: PropertyType.String,
      isArray: false,
      
    },    hladina : {
      key: 'hladina',
      type: PropertyType.Integer,
      isArray: false,
      
    },    poradi : {
      key: 'poradi',
      type: PropertyType.Integer,
      isArray: false,
      
    },    cesta : {
      key: 'cesta',
      type: PropertyType.String,
      isArray: false,
      
    },    kratkyPopis : {
      key: 'kratkyPopis',
      type: PropertyType.String,
      isArray: false,
      
    },    klicSlova : {
      key: 'klicSlova',
      type: PropertyType.String,
      isArray: false,
      maxLength: 255,
      
    },    popis : {
      key: 'popis',
      type: PropertyType.String,
      isArray: false,
      
    },    txtNad : {
      key: 'txtNad',
      type: PropertyType.String,
      isArray: false,
      
    },    txtPod : {
      key: 'txtPod',
      type: PropertyType.String,
      isArray: false,
      
    },    pocetPriloh : {
      key: 'pocetPriloh',
      type: PropertyType.Integer,
      isArray: false,
      
    },    strom : {
      key: 'strom',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStromKoren,
      maxLength: 20,
      
    },    otec : {
      key: 'otec',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFStrom,
      maxLength: 20,
      
    },
    prilohy : {
      key: 'prilohy',
      type: PropertyType.Relation,
      isArray: true,
      afClass: AFPriloha
    },

  }
}