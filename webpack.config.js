const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const configOut = {
    mode: 'none',
    entry: [
      '@babel/polyfill',  // See: https://github.com/babel/babel/issues/8829
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
              options: {modules: true, camelCase: true}
            }
          ],
        },
        {
          test: /\.js$/,
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
