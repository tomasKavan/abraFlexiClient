import { formatValue, Params, Raw } from "./AFFilterHelper";

export class AFFilter {
  
  constructor(protected readonly parts: string[] = []) {}

  static empty(): AFFilter {
    return new AFFilter()
  }

  private compileCondition(expr: string, params?: Params): string {
    if (!params) return expr

    let missingOrUndefined = false

    const replaced = expr.replace(
      /:([a-zA-Z_][a-zA-Z0-9_]*)/g,
      (_, name: string) => {
        if (!(name in params) || params[name] == null) {
          // any missing/undefined param ⇒ skip entire condition
          missingOrUndefined = true
          return ''
        }
        return formatValue(params[name]!)
      }
    )

    if (missingOrUndefined) return ''
    return replaced
  }

  // internal: create new builder with added condition - implicit clonning
  private withAdded(op: 'and' | 'or', cond: string): AFFilter {
    const trimmed = cond.trim()
    if (!trimmed) {
      // nothing to add, return same instance (no-op)
      return this
    }

    if (this.parts.length === 0) {
      return new AFFilter([trimmed])
    }

    return new AFFilter([...this.parts, `${op} ${trimmed}`])
  }

  /** AND condition; returns a NEW builder */
  and(expr: string, params?: Params): AFFilter {
    const cond = this.compileCondition(expr, params)
    return this.withAdded('and', cond)
  }

  /** OR condition; returns a NEW builder */
  or(expr: string, params?: Params): AFFilter {
    const cond = this.compileCondition(expr, params)
    return this.withAdded('or', cond)
  }

  /**
   * Use another FilterBuilder's expression, combined with AND/OR.
   * Example: base.use(other)  // AND by default
   */
  use(other: AFFilter, op: 'and' | 'or' = 'and'): AFFilter {
    const otherStr = other.toString().trim()
    if (!otherStr) return this
    return this.withAdded(op, otherStr)
  }

  /** Final Flexi filter string */
  toString(): string {
    if (!this.parts.length) return ''
    if (this.parts.length === 1) return `(${this.parts[0]})`
    return `(${this.parts.join(' ')})`
  }

  toUrlComponent(): string {
    return this.toString()
  }
}

class AFID extends AFFilter {
  private _id: number

  constructor(id: number) {
    super([])
    this._id = id
  }

  toString(): string {
    return this._id.toString()
  }

  toUrlComponent(): string {
    return this.toString()
  }
}

class AFCODE extends AFFilter {

  constructor(code: string) {
    super([code])
  }

  toString(): string {
    return 'code:' + this.parts[0]
  }

  toUrlComponent(): string {
    return this.toString()
  }
}

class AFEXT extends AFFilter {
  constructor(ext: string) {
    super([ext])
  }

  toString(): string {
    return 'ext:' + this.parts[0]
  }

  toUrlComponent(): string {
    return this.toString()
  }
}

export const Filter = (expr?: string, params?: Params): AFFilter => {
  let fb = AFFilter.empty()
  if (expr) {
    fb = fb.and(expr, params)
  }
  return fb
}
export const ID = (id: number) => new AFID(id)
export const CODE = (code: string) => new AFCODE(code)
export const EXT = (ext: string) => new AFEXT(ext)

/**
 * Brackets: build a grouped expression.
 */
export const Brkt = (cb: (f: AFFilter) => AFFilter): string => {
  let innerBuilder = AFFilter.empty()
  innerBuilder = cb(innerBuilder)
  const inner = innerBuilder.toString().trim()
  if (!inner) return ''
  return inner
}

/**
 * NotBrackets: negated group.
 */
export const NotBrkt = (cb: (f: AFFilter) => AFFilter): string => {
  let innerBuilder = AFFilter.empty()
  innerBuilder = cb(innerBuilder)
  const inner = innerBuilder.toString().trim()
  if (!inner) return ''
  return `(not ${inner})`
}

export const AFFilterFn: Record<string, Raw> = {
  Now: { __raw: 'now()' },
  CurrentYear: { __raw: 'currentYear()' },
  Me: { __raw: 'me()' },
}