const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const configOut = {
    mode: 'none',
    entry: './src/main.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            { loader: 'babel-loader' }
          ]
        }
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
