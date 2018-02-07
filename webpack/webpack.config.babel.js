var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

let getBrandedWebPackConfiguration = (brandName) => {
  console.log('filename: ');
  console.log(`${brandName}/js/[name].[chunkhash:8].js`);
  console.log('path: ');
  console.log(path.join(__dirname, '../dist'));
  return {
  entry: {
    app: './src/client.js',
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: `${brandName}/js/[name].[chunkhash:8].js`,
    // chunkFilename: `${brandName}/js/[name].[chunkhash:8].js`,
    publicPath: '/dist/'
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
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            { 
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [
                    require("postcss-cssnext")({
                      features: {
                        customProperties: {
                          variables: require(path.join(__dirname, `../src/themes/${brandName}/theme.js`))
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
    new ExtractTextPlugin(`${brandName}/css/styles.css`)
    ]
}
}

module.exports = getBrandedWebPackConfiguration('dark');
  // getBrandedWebPackConfiguration('light'),
