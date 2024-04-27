import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers (options: BuildOptions): ResolveOptions {
  const { paths }: BuildOptions = options
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index']
  }
}
