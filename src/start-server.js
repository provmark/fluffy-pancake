var startServer = require('universal-webpack/server')
var settings = require('../webpack/universal-webpack-settings-dark')
// `configuration.context` and `configuration.output.path` are used
var configuration = require('../webpack/webpack.config.babel')

startServer(configuration[0], settings)