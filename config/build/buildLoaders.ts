import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const babelLoader = buildBabelLoader(options)

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const imgLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const cssLoader = buildCssLoader(isDev)

  return [
    imgLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    cssLoader,
  ]
}
