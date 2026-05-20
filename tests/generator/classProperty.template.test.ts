/**
 * Generator smoke test — classProperty.ejs
 *
 * Verifies that the EJS template renders correctly for the four key cases:
 *  G.1  id property → skipped entirely (no output)
 *  G.2  kod property → uses `declare` keyword
 *  G.3  stitky property → uses `declare` keyword
 *  G.4  ordinary property → plain declaration, no `declare`
 */

import { describe, test, expect } from '@jest/globals'
import * as ejs from 'ejs'
import * as path from 'path'
import * as fs from 'fs'

const TEMPLATE_PATH = path.resolve(
  __dirname,
  '../../generator/templates/classProperty.ejs'
)

function render(propertyName: string, extras: Record<string, string> = {}): string {
  const src = fs.readFileSync(TEMPLATE_PATH, 'utf8')
  return ejs.render(src, {
    propertyName,
    name: propertyName,
    dbName: propertyName,
    title: propertyName,
    genType: 'string',
    ...extras,
  })
}

describe('classProperty.ejs', () => {
  test('G.1 id property — produces no output (getter in base class)', () => {
    const out = render('id')
    expect(out.trim()).toBe('')
  })

  test('G.2 kod property — uses declare keyword', () => {
    const out = render('kod')
    expect(out).toContain('declare')
    expect(out).toContain('kod?:')
  })

  test('G.3 stitky property — uses declare keyword', () => {
    const out = render('stitky')
    expect(out).toContain('declare')
    expect(out).toContain('stitky?:')
  })

  test('G.4 ordinary property — no declare keyword, property declared normally', () => {
    const out = render('nazev')
    expect(out).not.toContain('declare')
    expect(out).toContain('nazev?:')
  })
})
