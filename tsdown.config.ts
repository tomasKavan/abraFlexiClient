import { defineConfig } from 'tsdown'

export default defineConfig({
  tsconfig: 'tsconfig.lib.json',
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'], 
  dts: true,               
  clean: true,
  exports: true
})
