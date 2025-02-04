export class AFFilter {
  constructor(tpl: string, vars: any) {

  }

  toString(): string {
    return ''
  }

  toUrlComponent(): string {
    return '/(' + this.toString() + ')'
  }
}