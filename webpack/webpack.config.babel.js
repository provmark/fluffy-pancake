var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var themes = require('@provdig/circus.themes');

const getThemedWebPackConfiguration = (themeName) => {
  var activeTheme = themes.themeIndex.find((toMatch) => {
    return toMatch.name === themeName;
  });

  if (!activeTheme) {
    throw new Error(`No theme found that matches '${themeName}'.  The build should now abort.`);
  }

  // console.log('Theme:', JSON.stringify(activeTheme));

  return {
    entry: {
      app: './src/client.js',
    },

    output: {
      path: path.join(__dirname, `../build/client/${themeName}`),
      filename: '[name]-[chunkhash:8].js',
      publicPath: `/build/client/${themeName}/`
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
                  config: {
                    ctx: {
                      theme: activeTheme.styles
                    }
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

module.exports = getThemedWebPackConfiguration;
