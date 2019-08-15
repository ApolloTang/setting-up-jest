const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const configOut = {
    mode: 'none',
    devServer: {
      host: '0.0.0.0',
      port: 9999,
      historyApiFallback: true,
      stats: 'minimal'
    },
    entry: [
      './src/main.js'
    ],
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,  // <---- very important
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ],
        },
        {
          test: /\.module\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader',
              options: {
                modules: true,
                // camelCase: true
                  // camel is deprecated:
                  //    https://github.com/webpack-contrib/css-loader/releases/tag/v3.0.0
                  // now specified camelCase in localsConvention:
                localsConvention: 'camelCase'
              }
            }
          ],
        },
        {
          test: /\.(j|t)sx?$/,
          use: [
            { loader: 'babel-loader' }
          ],
          exclude: /node_modules/  // <---- very important
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(
        {
          template: 'src/index.html'
        }
      )
    ]
  }

  return configOut
}
