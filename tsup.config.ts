import { defineConfig } from 'tsup';
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';

export default await defineConfig({
  format: ['esm'],
  entry: ['**/*.ts', "!tsup.config.ts", "!node_modules/**"],
  outDir: './dist',
  bundle: true,
  esbuildPlugins: [esbuildPluginFilePathExtensions()]
});