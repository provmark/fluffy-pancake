var startServer = require('universal-webpack/server')
var settings = require('../webpack/universal-webpack-settings')
// `configuration.context` and `configuration.output.path` are used
var getThemedWebPackConfiguration = require('../webpack/webpack.config.babel')

startServer(getThemedWebPackConfiguration(process.env.THEME_NAME), settings);