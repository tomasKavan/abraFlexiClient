import * as AbraFlexi from 'abra-flexi'
import { AFEntity } from 'abra-flexi'

// PropertyType is an internal enum not re-exported by the library.
// Mirror the string values it uses so we don't need the import.
const PT_RELATION = 'relation'
const PT_BLOB     = 'blob'
const PT_ARRAY    = 'array'

export interface EntityDescriptor {
  name: string         // class name e.g. 'AFAdresar'
  entityName: string   // display name e.g. 'Adresy firem'
  entityPath: string   // URL path e.g. 'adresar'
  cls: typeof AFEntity
}

// Build registry from all exports that are AFEntity subclasses
let _registry: EntityDescriptor[] | null = null

export function getEntityRegistry(): EntityDescriptor[] {
  if (_registry) return _registry

  _registry = []
  for (const [name, value] of Object.entries(AbraFlexi)) {
    if (
      typeof value === 'function' &&
      value !== AFEntity &&
      value.prototype instanceof AFEntity
    ) {
      const cls = value as typeof AFEntity
      if (cls.EntityPath) {
        _registry.push({
          name,
          entityName: cls.EntityName || name,
          entityPath: cls.EntityPath,
          cls,
        })
      }
    }
  }

  _registry.sort((a, b) => a.entityName.localeCompare(b.entityName, 'cs'))
  return _registry
}

export interface ColumnMeta {
  key: string
  label: string
  type: string
  isArray: boolean
  isRelation: boolean
  isBlob: boolean
  /** Target entity class for relation fields (may be undefined if not annotated). */
  relCls?: typeof AFEntity
}

/** Returns the list of columns for a given entity class, skipping blobs. */
export function getEntityColumns(cls: typeof AFEntity): ColumnMeta[] {
  const annotations: Record<string, any> = (cls as any).propAnnotations ?? {}
  return Object.entries(annotations)
    .filter(([, ann]) => ann.type !== PT_BLOB)
    .map(([key, ann]) => ({
      key,
      label: key,
      type: ann.type as string,
      isArray: !!ann.isArray,
      isRelation: ann.type === PT_RELATION,
      isBlob: ann.type === PT_BLOB,
      relCls: ann.type === PT_RELATION ? (ann.cls ?? ann.entityCls ?? undefined) : undefined,
    }))
}

/** Resolve a column's relation target to an EntityDescriptor (if possible). */
export function resolveRelationEntity(col: ColumnMeta): EntityDescriptor | null {
  if (!col.isRelation) return null
  const registry = getEntityRegistry()
  if (col.relCls) {
    const found = registry.find(e => e.cls === col.relCls)
    if (found) return found
  }
  // Fallback: match registry entry whose entityPath or name matches the field key
  const lkey = col.key.toLowerCase()
  return registry.find(e =>
    e.entityPath.toLowerCase() === lkey ||
    e.name.toLowerCase() === `af${lkey}`
  ) ?? null
}

/** Simple columns: exclude relation-arrays and blobs. */
export function getSimpleColumns(cls: typeof AFEntity): ColumnMeta[] {
  return getEntityColumns(cls).filter(c => !(c.isRelation && c.isArray) && !c.isBlob)
}

/** Default columns — scalars only, priority-sorted, capped for readability. */
export function getDefaultColumns(cls: typeof AFEntity, max = 8): string[] {
  const cols = getEntityColumns(cls)
    .filter(c => !c.isRelation && !c.isBlob && !c.isArray)
    .map(c => c.key)

  const priority = ['id', 'kod', 'nazev', 'popis']
  const sorted = [
    ...priority.filter(k => cols.includes(k)),
    ...cols.filter(k => !priority.includes(k)),
  ]
  return sorted.slice(0, max)
}

/** Format a raw property value for display in a table cell. */
export function formatCellValue(value: unknown, col: ColumnMeta): string {
  if (value === null || value === undefined) return ''
  if (col.isRelation) {
    if (Array.isArray(value)) return `(${value.length})`
    if (typeof value === 'object') {
      const v = value as any
      return v.kod ?? (v.id != null ? String(v.id) : '[Object]')
    }
  }
  if (value instanceof Date) return value.toLocaleDateString('cs')
  if (typeof value === 'boolean') return value ? 'Ano' : 'Ne'
  return String(value)
}
