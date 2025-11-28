export class AFFilter {
  private _vars: Record<string, any>
  protected _template: string

  constructor(tpl: string, vars?: Record<string, any>) {
    this._vars = vars || {}
    this._template = tpl
  }

  toString(): string {
    return this._template.replace(/:([\:]?)([\.\.\.]?)(\w+)/g, (_, code, spread, key) => {
      // Keep unchanged if key doesn't exist
      if (!(key in  this._vars)) return `:${code}${spread}${key}`; 
  
      const value = this._vars[key]
      const c = code ? 'code:' : ''
  
      if (spread && Array.isArray(value)) {
        return value.join(", ")
      }
  
      return c + String(value); // Convert to string for normal ':key'
    });
  }

  toUrlComponent(): string {
    return '/(' + this.toString() + ')'
  }
}

class AFID extends AFFilter {
  private _id: number

  constructor(id: number) {
    super('')
    this._id = id
  }

  toString(): string {
    return this._id.toString()
  }

  toUrlComponent(): string {
    return '/' + this.toString()
  }
}

class AFCODE extends AFFilter {

  constructor(code: string) {
    super(code)
  }

  toString(): string {
    return 'code:' + this._template
  }

  toUrlComponent(): string {
    return '/' + this.toString()
  }
}

class AFEXT extends AFFilter {
  constructor(ext: string) {
    super(ext)
  }

  toString(): string {
    return 'ext:' + this._template
  }

  toUrlComponent(): string {
    return '/' + this.toString()
  }
}

export const Filter = (tpl: string, vars?: Record<string, any>) => new AFFilter(tpl, vars)
export const ID = (id: number) => new AFID(id)
export const CODE = (code: string) => new AFCODE(code)
export const EXT = (ext: string) => new AFEXT(ext)