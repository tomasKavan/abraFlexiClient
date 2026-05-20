/**
 * Generator smoke test — classPropertyAnnotation.ejs
 *
 * Verifies that the EJS template renders correctly, and in particular
 * that `id` is excluded from propAnnotations output (ISSUE-22 follow-up).
 *
 *  G.A.1  id property           → produces no output (skipped)
 *  G.A.2  ordinary scalar       → emits full annotation block
 *  G.A.3  relation property     → emits annotation block with afClass
 */

import { describe, test, expect } from '@jest/globals'
import * as ejs from 'ejs'
import * as path from 'path'
import * as fs from 'fs'

const TEMPLATE_PATH = path.resolve(
  __dirname,
  '../../generator/templates/classPropertyAnnotation.ejs'
)

function render(propertyName: string, extras: Record<string, unknown> = {}): string {
  const src = fs.readFileSync(TEMPLATE_PATH, 'utf8')
  return ejs.render(src, {
    propertyName,
    typeName: 'String',
    type: 'string',
    tsClassName: undefined,
    ...extras,
  })
}

describe('classPropertyAnnotation.ejs', () => {
  test('G.A.1 id property — produces no output (must not appear in propAnnotations)', () => {
    const out = render('id', { typeName: 'Integer', type: 'integer' })
    expect(out.trim()).toBe('')
  })

  test('G.A.2 ordinary scalar — emits annotation block with correct key and type', () => {
    const out = render('nazev', { typeName: 'String', type: 'string' })
    expect(out).toContain("key: 'nazev'")
    expect(out).toContain('PropertyType.String')
    expect(out).toContain('isArray: false')
  })

  test('G.A.3 relation property — emits annotation block with afClass', () => {
    const out = render('firma', {
      typeName: 'Relation',
      type: 'relation',
      tsClassName: 'AFAdresar',
    })
    expect(out).toContain("key: 'firma'")
    expect(out).toContain('PropertyType.Relation')
    expect(out).toContain("afClass: 'AFAdresar'")
  })
})
