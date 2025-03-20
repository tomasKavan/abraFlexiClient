import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import yargs from 'yargs'
import { hideBin } from "yargs/helpers"
import ejs from 'ejs'
import { FixProperties } from './fix.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const EVIDENCE_LIST_FILE = 'evidence-list.json'
const PROPERTIES_FILE = 'properties.json'
const RELATIONS_FILE = 'relations.json'
const DEFAULT_DIR = './src/generated'

const MAIN_TEMPLATE_CLASS_FILE = __dirname + '/templates/classFile.ejs'
const MAIN_TEMPLATE_ENUM_FILE = __dirname + '/templates/enumFile.ejs'
const MAIN_TEMPLATE_REGISTRY_FILE = __dirname + '/templates/registryFile.ejs'
const MAIN_TEMPLATE_INDEX_FILE = __dirname + '/templates/classIndexFile.ejs'

const CLASS_DIR_OUT = 'entities'
const ENUM_FILE_OUT = 'AFEntityEnums'
const REGISTRY_FILE_OUT = 'AFEntityRegistry'
const INDEX_FILE_OUT = 'index'

import { EnumDef, EvidenceDef, PropertyDef, PropertyType, RelationDef, ValueObj } from './types.js'

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
      enumFile: ENUM_FILE_OUT,
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
    input.getter = null
    input.relationName = input.url
    if (input.url.split('-').length > 1) {
      input.getter = input.url.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
      input.getter = input.getter.charAt(0).toLowerCase() + input.getter.slice(1)
    }
  } else {
    throw new Error(`Relation ${input.name} missing url.`)
  }

  return input as RelationDef
}

function generateTsClassName(input: string): string {
  return 'AF' + input.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

function getEnumKey<T extends Record<string, string>>(enumObj: T, value: string): string | undefined {
  return Object.keys(enumObj).find((key) => enumObj[key] === value);
}

async function generateEntityClass(
  evidence: EvidenceDef, 
  properties: PropertyDef[], 
  relations: RelationDef[],
  enumList: EnumDef[]
): Promise<string> {

  // Generate type
  properties.forEach(p => p.genType = generateType(p))
  properties.forEach(p => p.typeName = getEnumKey(PropertyType, p.type))

  const vars: any = {
    imports: [],
    importEnums: [],
    properties: properties,
    relations: relations,
    enumFile: ENUM_FILE_OUT,
    tsClassName: evidence.tsClassName,
    evidencePath: evidence.evidencePath,
    evidenceType: evidence.evidenceType,
    evidenceName: evidence.evidenceName
  }

  // Imports
  for (const p of properties) {
    if (
      p.tsClassName && 
      p.type === PropertyType.Relation && 
      p.tsClassName !== 'any' && 
      !vars.imports.includes(p.tsClassName) &&
      p.tsClassName !== evidence.tsClassName
    ) {
      vars.imports.push(p.tsClassName)
    }
  }
  for (const r of relations) {
    if (
      r.tsClassName && 
      r.tsClassName !== 'any' && 
      !vars.imports.includes(r.tsClassName) &&
      r.tsClassName !== evidence.tsClassName
    ) {
      vars.imports.push(r.tsClassName)
    }
  }

  // Enums
  for (const p of properties) {
    if (p.values && p.values.value && p.values.value.length) {
      let enumKey = p.values.value[0]['@key'].split('.')[0]
      enumKey = enumKey.charAt(0).toUpperCase() + enumKey.slice(1)
      p.enumName = enumKey
      p.genType = generateType(p)
      if (enumList.find(le => le.key === enumKey)) {
        // TODO check if options mateches
      } else {
        const uprop = p.propertyName.charAt(0).toUpperCase() + p.propertyName.slice(1)
        enumList.push({
          key: enumKey,
          file: ENUM_FILE_OUT,
          options: p.values.value.map(i => {
            let key = i['@key'].split('.')[1].replace(/-/g, "_")
            if (!(/^[a-zA-Z_]/.test(key))){
              key = '_' + key
            } 
            return {
              key: key,
              value: i['@key'],
              comment: i['$']
            }
          })
        })
      }
      if (!vars.importEnums.includes(enumKey)) vars.importEnums.push(enumKey)
    }
  }

  FixProperties(evidence, vars.properties)
  
  // Generate class
  const p = new Promise<string>((resolve, reject) => {
    ejs.renderFile(MAIN_TEMPLATE_CLASS_FILE, vars, (err, str) => {
      if (err) { reject(err) } else { resolve(str) }
    })
  })

  return p
}

function generateEnumModule(enumList: EnumDef[]): Promise<string> {
  // Generate enums
  const p = new Promise<string>((resolve, reject) => {
    ejs.renderFile(MAIN_TEMPLATE_ENUM_FILE, { enumList }, (err, str) => {
      if (err) { reject(err) } else { resolve(str) }
    })
  })
  return p
}

function generateRegistryModule(evidences: EvidenceDef[]): Promise<string> {
  // Generate enums
  const p = new Promise<string>((resolve, reject) => {
    ejs.renderFile(MAIN_TEMPLATE_REGISTRY_FILE, { evidences }, (err, str) => {
      if (err) { reject(err) } else { resolve(str) }
    })
  })
  return p
}

function generateClassIndex(evidences: EvidenceDef[]): Promise<string> {
  // Generate enums
  const p = new Promise<string>((resolve, reject) => {
    ejs.renderFile(MAIN_TEMPLATE_INDEX_FILE, { evidences }, (err, str) => {
      if (err) { reject(err) } else { resolve(str) }
    })
  })
  return p
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

  if (!fs.existsSync(path.join(outDir, CLASS_DIR_OUT))) {
    fs.mkdirSync(path.join(outDir, CLASS_DIR_OUT), { recursive: false })
  }

  const urlBase = argv.s.charAt(argv.s.length - 1) === '/' ? argv.s : argv.s + '/'

  const evListUrl = urlBase + EVIDENCE_LIST_FILE
  console.log(`Loading evidence definition json at: ${evListUrl} ...`)
  const evidencesIn = await fetchJson(evListUrl)
  console.log(`Parsing evidences definition`)
  const evidences = parseEvidences(evidencesIn, argv.e)

  const enumList: EnumDef[] = []

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
    const classCode = generateEntityClass(ev, props, refs, enumList)
    fs.writeFileSync(path.join(outDir, CLASS_DIR_OUT, ev.tsClassName + '.ts'), await classCode)
    console.log(`Generated: ${ev.tsClassName + '.ts'}`)
    console.log(` `)
  }

  console.log(`Generating Enum file ${ENUM_FILE_OUT}`)
  const enumCode = generateEnumModule(enumList)
  fs.writeFileSync(path.join(outDir, ENUM_FILE_OUT + '.ts'), await enumCode)
  console.log(`Enum file generated`)
  console.log(` `)

  console.log(`Generating Registry file ${REGISTRY_FILE_OUT}`)
  const registryCode = generateRegistryModule(evidences)
  fs.writeFileSync(path.join(outDir, REGISTRY_FILE_OUT + '.ts'), await registryCode)
  console.log(`Registry file generated`)
  console.log(` `)

  console.log(`Generating index file ${INDEX_FILE_OUT}`)
  const classIndex = generateClassIndex(evidences)
  fs.writeFileSync(path.join(outDir, CLASS_DIR_OUT, INDEX_FILE_OUT + '.ts'), await classIndex)
  console.log(`Index file generated`)
  console.log(` `)

  console.log(`Done`)
}
