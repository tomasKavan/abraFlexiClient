import { EvidenceDef, PropertyDef } from "./types.js";

export function FixProperties(ev: EvidenceDef, inp: PropertyDef[]) {
  if (ev.tsClassName === 'AFCenik') {
    // Stavy is twice on Adresar entity.
    inp.splice(inp.findIndex(p => p.propertyName === 'stavy'), 1)
  }
}