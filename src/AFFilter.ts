export class AFFilter {
  private _vars: Record<string, any>
  private _template: string

  constructor(tpl: string, vars?: Record<string, any>) {
    this._vars = vars || {}
    this._template = tpl
  }

  toString(): string {
    return this._template.replace(/:([\.\.\.]?)(\w+)/g, (_, spread, key) => {
      // Keep unchanged if key doesn't exist
      if (!(key in  this._vars)) return `:${spread}${key}`; 
  
      const value = this._vars[key]
  
      if (spread && Array.isArray(value)) {
        return value.join(", ")
      }
  
      return String(value); // Convert to string for normal ':key'
    });
  }

  toUrlComponent(): string {
    return '/(' + this.toString() + ')'
  }
}