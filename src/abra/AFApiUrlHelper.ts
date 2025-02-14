import { EntityByName, EntityByPath } from "../generated/AFEntityRegistry.js"
import { AFEntity, GetPropertyTypeAnnotation } from "./AFEntity.js"
import { AFError, AFErrorCode } from "./AFError.js"
import { AFQueryDetail, NestedDetail } from "./AFTypes.js"

export function composeDetail(
  level: NestedDetail | AFQueryDetail
): string | null{
  if (level === AFQueryDetail.FULL) return 'full'
  if (level === AFQueryDetail.ID) return 'id'
  if (level === AFQueryDetail.SUMMARY) return null
  
  const levProc = (inp: NestedDetail): string => {
    let out = ''
    for (const ndi of inp) {
      if (out.length) out += ','
      if (typeof ndi === 'string') {
        out += ndi
      } else if (ndi instanceof Array) {
        out += ndi[0] as string + '(' + levProc(ndi[1] as NestedDetail) + ')'
      }
    }
    return out
  }
  
  const out = 'custom:' + levProc(level)
  return out
}

export function composeIncludes(
  level: NestedDetail | AFQueryDetail, 
  entityPath: string
): string | null {
  if (level === AFQueryDetail.FULL) return null
  if (level === AFQueryDetail.ID) return null
  if (level === AFQueryDetail.SUMMARY) return null

  const includes: string[] = []
  const cls = EntityByPath(entityPath)

  const levProc = (inp: NestedDetail, base:string, entity: typeof AFEntity) => {
    for (const ndi of inp) {
      if (typeof ndi === 'string') continue
      if (ndi instanceof Array) {
        const key = ndi[0] as string
        const list = ndi[1] as NestedDetail
        const annot = GetPropertyTypeAnnotation(entity, key)
        if (!annot || !annot.afClass) throw new AFError(AFErrorCode.QUERY_DETAIL_UNKNOWN_KEY, `[AFError].QUERY_DETAIL_UNKNOWN_KEY: Requested unknown key ${key} on entity ${(typeof entity)}. Or it has't type annotation set.`)
        const relEnt = EntityByName(annot.afClass)
        const thisIncl = base + '/' + key + '/' + relEnt.EntityPath
        includes.push(thisIncl)
        levProc(list, thisIncl, relEnt)
      }
    }
  }
  levProc(level, cls.EntityPath, cls)

  return includes.join(',')
}

export function composeRelations(
  level: NestedDetail | AFQueryDetail
): string | null {
  if (level === AFQueryDetail.FULL) return null
  if (level === AFQueryDetail.ID) return null
  if (level === AFQueryDetail.SUMMARY) return null

  const relations: string[] = []

  const levProc = (inp: NestedDetail) => {
    for (const ndi of inp) {
      if (typeof ndi === 'string') continue
      const key = ndi[0] as string
      const list = ndi[1]
      if (!relations.includes(key)) relations.push(key)
      levProc(list)
    }
  }
  levProc(level)

  return relations.length ? relations.join(',') : null
}