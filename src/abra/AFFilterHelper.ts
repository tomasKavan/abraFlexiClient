import { AFEntity } from "./AFEntity"
import { AFError, AFErrorCode } from "./AFError"

export type Raw = { __raw: string }

export const raw = (expr: string): Raw => ({ __raw: expr })

type Scalar = string | number | boolean | Date
type Value = Scalar | Raw | AFEntity

export type ParamValue = Value | Value[] | undefined
export type Params = Record<string, ParamValue>

/**
 * Resolve a "foo.bar.baz" style path inside params.
 * Returns {found: false} if any segment is missing or hits null/undefined.
 */
export function resolveParamPath(
  params: Params,
  path: string
): { value: any; found: boolean } {
  const [root, ...segments] = path.split('.')

  if (!(root in params)) {
    return { value: undefined, found: false }
  }

  let value: any = (params as any)[root]

  for (const seg of segments) {
    if (value == null) {
      return { value: undefined, found: false }
    }

    // support array indexing like users.0.name (if you ever want that)
    if (Array.isArray(value) && /^\d+$/.test(seg)) {
      const idx = Number(seg)
      value = value[idx]
    } else {
      value = (value as any)[seg]
    }
  }

  return { value, found: true }
}

/**
 * Normalize raw value(s) to something safe for formatValue:
 * - AFEntity → id, or Raw("code:kod"), or undefined if neither id/kod present
 * - arrays are handled element-wise
 *
 * Also returns a flag whether any AFEntity was seen along the path.
 */
export function normalizeParamForFilter(
  input: any
): { value: ParamValue; isEntityPath: boolean } {
  const rec = (val: any): { value: ParamValue; isEntityPath: boolean } => {
    if (val == null) {
      return { value: undefined, isEntityPath: false }
    }

    if (Array.isArray(val)) {
      const out: Value[] = []
      let hasEntity = false

      for (const item of val) {
        const { value: childVal, isEntityPath: childEnt } = rec(item)
        if (Array.isArray(childVal)) {
          // flatten nested arrays defensively
          for (const v2 of childVal) out.push(v2)
        } else if (childVal !== undefined) {
          out.push(childVal as Value)
        }
        if (childEnt) hasEntity = true
      }

      if (!out.length) {
        return { value: undefined, isEntityPath: hasEntity }
      }

      return { value: out, isEntityPath: hasEntity }
    }

    if (val instanceof AFEntity) {
      // Entity path for sure
      if (val.id != null) {
        return { value: val.id, isEntityPath: true }
      }
      if (val.kod != null) {
        return { value: raw(`code:${val.kod}`), isEntityPath: true }
      }
      // No id, no kod → treat as missing
      return { value: undefined, isEntityPath: true }
    }

    // Primitive / Raw → just pass through
    return { value: val as Value, isEntityPath: false }
  }

  return rec(input)
}

/**
 * For ::placeholders on non-entity paths, prefix with code:
 * - scalars → Raw("code:value")
 * - arrays → element-wise
 * - Raw values are left as-is
 */
export function applyCodePrefix(
  val: ParamValue
): ParamValue {
  if (val == null) return undefined

  const toCode = (v: Value): Value | undefined => {
    if (v == null) return undefined

    if (typeof v === 'object' && v && '__raw' in v) {
      // already Raw, keep as-is
      return v
    }

    if (v instanceof AFEntity) {
      // defensive; normally we call this only for non-entity paths
      if (v.id != null) return v.id as any
      if (v.kod != null) return raw(`"code:${v.kod}"`)
      return undefined
    }

    return raw(`"code:${String(v)}"`)
  }

  if (Array.isArray(val)) {
    const mapped: Value[] = []
    for (const item of val) {
      const converted = toCode(item as Value)
      if (converted !== undefined) mapped.push(converted)
    }
    return mapped.length ? mapped : undefined
  }

  return toCode(val as Value)
}

// Format a single scalar for Flexi filter
export function formatScalar (val?: Value): string {
  if (typeof val === 'undefined') return ''
  
  if (typeof val === 'object' && val && '__raw' in val) {
    // raw(), e.g. now(), me(), currentYear()
    return val.__raw
  }

  if (val instanceof Date) {
    const pad = (n: number) => String(n).padStart(2, '0')
    const y = val.getFullYear()
    const m = pad(val.getMonth() + 1)
    const d = pad(val.getDate())
    return `"${y}-${m}-${d}"`
  }

  if (typeof val === 'string') {
    const escaped = val.replace(/"/g, '\\"')
    return `"${escaped}"`
  }

  if (typeof val === 'boolean') {
    return val ? 'true' : 'false'
  }

  // number
  return String(val)
}

export function formatValue(val: ParamValue): string {
  if (Array.isArray(val)) {
    if (!val.length) {
      // or return "" if you want to allow empty IN ()
      throw new Error('Empty array is not allowed in filter parameters')
    }
    return val.map(formatScalar).join(', ')
  }
  return formatScalar(val)
}