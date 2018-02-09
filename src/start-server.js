var startServer = require('universal-webpack/server')
var settings = require('../webpack/universal-webpack-settings')
// `configuration.context` and `configuration.output.path` are used
var configuration = require('../webpack/webpack.config.babel')

startServer(configuration(process.env.THEME_NAME, settings));