import { defineConfig, Options } from 'tsup'

const commonConfig: Options = {
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: false,
  clean: true
}

export default defineConfig([
  {
    ...commonConfig,
    entry: ['src/index.ts'],
    outDir: 'dist'
  }
])
