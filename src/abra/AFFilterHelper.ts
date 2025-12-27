import { AFEntity } from "./AFEntity"
import { AFError, AFErrorCode } from "./AFError"

export type Raw = { __raw: string }

export const raw = (expr: string): Raw => ({ __raw: expr })

type Scalar = string | number | boolean | Date
type Value = Scalar | Raw | AFEntity

type ParamValue = Value | Value[] | undefined
export type Params = Record<string, ParamValue>

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

  if (val instanceof AFEntity) {
    if (val.id) return String(val.id)
    if (val.kod) return 'code:' + val.kod
    throw new AFError(AFErrorCode.MISSING_ID, `Can't use AFEntity in filter when it's missing any identification.`)
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