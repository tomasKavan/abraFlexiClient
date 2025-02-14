import { TypeAnnotation, PropertyType } from '../../abra/AFTypes.js'
import { AFEntity } from '../../abra/AFEntity.js'
import { AFUcet } from './AFUcet.js'
import { AFRadekSestavy } from './AFRadekSestavy.js'




export class AFUmisteniUctu extends AFEntity {
  static EntityPath: string = 'umisteni-uctu'
  static EntityName: string = 'Upřesnění umístění účtu'
  static EntityType: string = 'UMISTENI_UCTU'

  // Účet (db: ) - Účet)
  ucet?: AFUcet
  // Vybraný řádek (db: ) - Vybraný řádek)
  vybranyRadek?: AFRadekSestavy



  static propAnnotations: Record<string, TypeAnnotation> = {
    ucet : {
      key: 'ucet',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFUcet',
      
    },
    vybranyRadek : {
      key: 'vybranyRadek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: 'AFRadekSestavy',
      
    },


  }
}