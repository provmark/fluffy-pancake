var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

let getBrandedWebPackConfiguration = (brandName) => {
  return {
    entry: {
      app: './src/client.js',
    },

    output: {
      path: path.join(__dirname, `../build/${brandName}`),
      filename: '[name]-[chunkhash:8].js',
      publicPath: `/build/${brandName}/`
    },

    resolve: {
      extensions: ['.js'],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  importLoaders: 1,
                  sourceMap: true,
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: function () {
                    return [
                      require("postcss-cssnext")({
                        features: {
                          customProperties: {
                            variables: require(path.join(__dirname, `../config/themes/${brandName}/theme.js`))
                          }
                        }
                      })
                    ]
                  }
                }
              }
            ],
          }),
        }
      ],
    },

    plugins: [
      new ExtractTextPlugin(`[name]-[chunkhash:8].css`)
    ]
  }
}

module.exports = function (theme) {
  return getBrandedWebPackConfiguration(theme);
}