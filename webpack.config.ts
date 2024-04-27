import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildOptions } from './config/build/types/config'
import path from 'path'
import type webpack from 'webpack'

export default (env: BuildEnv): webpack.Configuration => {
  const PORT = env.port || 3000

  const options: BuildOptions = {
    mode: env.mode || 'development',
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src')
    },
    isDev: false,
    port: PORT
  }

  options.isDev = options.mode === 'development'

  return buildWebpackConfig(options)
}
