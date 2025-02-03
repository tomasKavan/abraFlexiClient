import fs from 'fs'
import path from 'path'
import yargs from 'yargs'
import { hideBin } from "yargs/helpers"

const EVIDENCE_LIST_FILE = 'evidence-list.json'
const PROPERTIES_FILE = 'properties.json'
const RELATIONS_FILE = 'relations.json'
const DEFAULT_DIR = './src/entities'

import { EvidenceDef, PropertyDef, PropertyType, RelationDef, ValueObj } from './types'

const argv = yargs(hideBin(process.argv))
.option('s', { alias: 'server', type: 'string', description: 'URL to ABRA Flexi server. With company path component, trailed by /.', demandOption: true})
.option('u', { alias: 'user', type: 'string', description: 'Username. Enables BASIC auth', demandOption: false})
.option('p', { alias: 'password', type: 'string', description: 'Password. Enables BASIC auth', demandOption: false})
.option('e', { alias: 'evidence', type: 'array', description: 'List of Evidences to generate. If not present all evidences are generated.', demandOption: false})
.option('c', { alias: 'clean', type: 'boolean', description: 'Clean output directory before generating classes.', demandOption: false, default: false})
.option('o', { alias: 'outdir', type: 'string', description: `Output directory of generated path. If not present it\'s generated to ${DEFAULT_DIR} directory`, demandOption: false})
.help().alias('h', 'help')
.parseSync()

const buildHeaders = () => {
  if (!argv.u || !argv.p) {
    return undefined
  }
  return {
    headers: {
      Authorization: `Basic ${Buffer.from(argv.u + ':' + argv.p).toString('base64')}` 
    }
  }
}

async function fetchJson(url: string): Promise<any> {
  const res = await fetch(url, buildHeaders())
  const json = res.json()
  return json
}

function parseEvidences(input: any, filter: (string | number)[] | undefined): EvidenceDef[] {
  const out: EvidenceDef[] = []
  if (!input || !input.evidences || !(input.evidences.evidence instanceof Array)) {
    throw new Error(`Wrong evidence-list.json file: ${JSON.stringify(input)}`)
  }

  if (filter) {
    filter = filter.map(f => f.toString())
  }

  for (const evIn of input.evidences.evidence) {
    const evOut = {
      evidenceName: evIn.evidenceName,
      evidenceType: evIn.evidenceType,
      evidencePath: evIn.evidencePath,
      formCode: evIn.formCode,
      beanKey: evIn.beanKey,
      className: evIn.className,
      extIdSupported: parseBool(evIn.extIdSupported),
      dbName: evIn.dbName,
      tsClassName: generateTsClassName(evIn.evidencePath)
    }
    if (filter && !filter.includes(evOut.evidencePath)) {
      continue
    }
    out.push(evOut)
  }
  return out
}

function parseProperties(input: any, evidences: EvidenceDef[]): PropertyDef[] {
  const out: PropertyDef[] = []
  if (!input || !input.properties) {
    throw new Error(`Wrong properties.json file: ${JSON.stringify(input)}`)
  }

  if (!input.properties.property) {
    return []
  }

  if (!(input.properties.property instanceof Array)) {
    input.properties.property = [input.properties.property]
  }

  for (const prIn of input.properties.property) {
    const prOut = {
      propertyName: prIn.propertyName,
      dbName: prIn.dbName,
      name: prIn.name,
      title: prIn.title,
      type: parsePropertyType(prIn.type),
    
      // Visibility
      isVisible: parseBool(prIn.isVisible),
      isSortable: parseBool(prIn.isSortable),
      isHighlight: parseBool(prIn.isHighlight),
      inId: parseBool(prIn.inId),
      inSummary: parseBool(prIn.inSummary),
      inDetail: parseBool(prIn.inDetail),
      inExpensive: parseBool(prIn.inExpensive),
    
      // Behavioar
      isMassUpdateable: parseBool(prIn.isMassUpdateable),
      mandatory: parseBool(prIn.mandatory),
      isWritable: parseBool(prIn.isWritable),
      isOverWritable: parseBool(prIn.isOverWritable),
      hasBusinessLogic: parseBool(prIn.hasBusinessLogic),
    
      // Other
      isUpperCase: parseBool(prIn.isUpperCase),
      isLowerCase: parseBool(prIn.isLowerCase),
      links: prIn.link as null | { link: string },
    
      // Values
      importableValues: parseValues(prIn.importableValues),
      values: parseValues(prIn.values),
      digits: parseIntOrUndef(prIn.digits),
      decimals: parseIntOrUndef(prIn.decimals),
      maxLength: parseIntOrUndef(prIn.maxLength),
    
      // to 1 relations
      fkName: prIn.fkName,
      fkEvidencePath: prIn.fkEvidencePath,
      fkEvidenceType: prIn.fkEvidenceType,
      url: prIn.url
    }
    out.push(bindRelationTypeToProperty(prOut, evidences))
  }
  return out
}

function parseRelations(input: any, evidences: EvidenceDef[]): RelationDef[] {
  const out: RelationDef[] = []
  if (!input || (input.relations !== null && !input.relations)) {
    throw new Error(`Wrong relations.json file: ${input}`)  
  } 
  if (input.relations === null || !input.relations.relation) {
    return []
  }

  if (!(input.relations.relation instanceof Array)) {
    input.relations.relation = [input.relations.relation]
  }

  for (const rIn of input.relations.relation) {
    const rOut = {
      url: rIn.url,
      evidenceType: rIn.evidenceType,
      name: rIn.name,
    }
    out.push(bindRelationTypeToRelation(rOut, evidences))
  }
  return out
}

function parseBool(input: string): boolean {
  return input === 'true'
}

function parsePropertyType(input:string): PropertyType {
  if (!Object.values(PropertyType).includes(input as PropertyType)) {
    throw new Error(`Unknown property type ${input}`)
  }
  return input as PropertyType
}

function parseValues(input: any): undefined | ValueObj {
  if (!input || !input.value) return undefined
  return input as ValueObj
}

function parseIntOrUndef(input: any): undefined | number {
  const int = parseInt(input)
  if (isNaN(int)) return undefined
  return int
}

function bindRelationTypeToProperty(input: Partial<PropertyDef>, evidences: EvidenceDef[]) : PropertyDef{
  if (typeof input.fkEvidenceType === 'string') {
    const ev = evidences.find(e => e.evidenceType === input.fkEvidenceType)
    if (ev) {
      input.tsClassName = ev.tsClassName
      return input as PropertyDef
    }
  }
  input.tsClassName = 'any'
  return input as PropertyDef
}

function bindRelationTypeToRelation(input: Partial<RelationDef>, evidences: EvidenceDef[]): RelationDef {
  input.tsClassName = 'any'
  if (typeof input.evidenceType === 'string') {
    const ev = evidences.find(e => e.evidenceType === input.evidenceType)
    if (ev) {
      input.tsClassName = ev.tsClassName
    }
  }

  if (input.url) {
    input.relationName = input.url.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
    input.relationName = input.relationName.charAt(0).toLowerCase() + input.relationName.slice(1)
  } else {
    throw new Error(`Relation ${input.name} missing url.`)
  }

  return input as RelationDef
}

function generateTsClassName(input: string): string {
  return 'AF' + input.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

function generateEntityClass(
  evidence: EvidenceDef, 
  properties: PropertyDef[], 
  relations: RelationDef[]
): string {

  // Imports
  const imported: string[] = []
  const importBase = `import { AFEntity } from '../AFEntity'\n`
  let importPorps = properties.map(p => {
    if (!p.tsClassName) return ''
    if (p.type === PropertyType.Relation && p.tsClassName !== 'any' && !imported.includes(p.tsClassName)) {
      imported.push(p.tsClassName)
      return `import { ${p.tsClassName} } from './${p.tsClassName}'\n`
    }
    return ''
  }).join('')
  importPorps += relations.map(r => {
    if (r.tsClassName !== 'any' && !imported.includes(r.tsClassName)) {
      imported.push(r.tsClassName)
      return `import { ${r.tsClassName} } from './${r.tsClassName}'\n`
    }
    return ''
  }).join('')

  // Enums 
  const enums = properties.map(p => {
    if (p.values && p.values.value && p.values.value.length) {
      const en = generateEnum(evidence, p)
      if (en) return en + '\n\n'
    }
    return ''
  }).join('')

  const header = `export class ${evidence.tsClassName} extends AFEntity {\n`
  const footer = `\n}`

  const props = properties.map(pr => {
    return `
    // ${pr.name} (db: ${pr.dbName}) - ${pr.title})
    ${pr.propertyName}?: ${generateType(pr)}\n`
  }).join('')

  const rels = relations.map(re => {
    return `
    // ${re.name} (type: ${re.evidenceType}) - ${re.url})
    ${re.relationName}?: Promise<${re.tsClassName}[]>\n`
  }).join('')

  return importBase + importPorps + '\n' + enums + '\n' + header + props + '\n' + rels + footer
}

function generateEnum(ev: EvidenceDef, pDef: PropertyDef): string | undefined {
  if (pDef.type !== PropertyType.Select || !pDef.values || !pDef.values.value || !pDef.values.value.length) {
    return undefined
  }
  const uprop = pDef.propertyName.charAt(0).toUpperCase() + pDef.propertyName.slice(1)
  
  const header = `export enum ${ev.tsClassName}${uprop} {\n`
  const options = pDef.values.value.map(i => `  ${i['@key'].split('.')[1]} = '${i['@key']}', //${i['$']}\n`).join('')
  const footer = `}`

  return header + options + footer
}

function generateType(def: PropertyDef): string {
  switch (def.type) {
    case PropertyType.String: return 'string'
    case PropertyType.Integer: return 'number'
    case PropertyType.Numeric: return 'Big'
    case PropertyType.Logic: return 'boolean'
    case PropertyType.Date: return 'Date'
    case PropertyType.DateTime: return 'Date'
    case PropertyType.Blob: return 'Buffer'
    case PropertyType.Relation: return def.tsClassName || 'any'
    case PropertyType.Select: return def.enumName || 'any'
    case PropertyType.Array: return (def.itemType || 'any') + []
  }
  return 'any'
}

function clearDir(dPath: string) {
  fs.readdirSync(dPath).forEach(file => {
    const filePath = path.join(dPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(filePath);
    }
  });

  console.log(`Cleared contents of ${dPath}`);
}

export async function main() {
  const outDir = argv.o || DEFAULT_DIR

  if (!fs.existsSync(outDir)) {
    throw new Error(`Output directory ${outDir} doesnt exists`)
  }
  if (argv.c) {
    clearDir(outDir)
  }

  const urlBase = argv.s.charAt(argv.s.length - 1) === '/' ? argv.s : argv.s + '/'

  const evListUrl = urlBase + EVIDENCE_LIST_FILE
  console.log(`Loading evidence definition json at: ${evListUrl} ...`)
  const evidencesIn = await fetchJson(evListUrl)
  console.log(`Parsing evidences definition`)
  const evidences = parseEvidences(evidencesIn, argv.e)

  for (const ev of evidences) {
    console.log(`Processing evidence: ${ev.evidenceName} ...`)
    
    console.log(`- Fetchin properties ...`)
    const propsIn = await fetchJson(urlBase + ev.evidencePath + '/' + PROPERTIES_FILE)
    console.log(`- Fetchin relations ...`)
    const relsIn = await fetchJson(urlBase + ev.evidencePath + '/' + RELATIONS_FILE)

    console.log(`- Parsing properties ...`)
    const props = parseProperties(propsIn, evidences)
    console.log(`- Parsing relations ...`)
    const refs = parseRelations(relsIn, evidences)

    console.log(`- Generating class ...`)
    const classCode = generateEntityClass(ev, props, refs)
    fs.writeFileSync(path.join(outDir, ev.tsClassName + '.ts'), classCode)
    console.log(`Generated: ${ev.tsClassName + '.ts'}`)
    console.log(` `)
  }
  console.log(`Done`)
}
