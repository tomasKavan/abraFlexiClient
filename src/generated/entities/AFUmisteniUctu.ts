import { TypeAnnotation, PropertyType } from '../../abra/AFTypes'
import { AFEntity } from '../../abra/AFEntity'
import { AFUcet } from './AFUcet'
import { AFRadekSestavy } from './AFRadekSestavy'




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
      afClass: AFUcet,
      
    },
    vybranyRadek : {
      key: 'vybranyRadek',
      type: PropertyType.Relation,
      isArray: false,
      afClass: AFRadekSestavy,
      
    },


  }
}