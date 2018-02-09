var universalConfig = require('universal-webpack/config');
var universalSettings = require('./universal-webpack-settings');
var getThemedWebPackConfiguration = require('./webpack.config.babel');

const getConfiguration = (themeName) => {
  console.log('Generate client theme: ', process.env.THEME_NAME);
  var webpackConfig = getThemedWebPackConfiguration(process.env.THEME_NAME);

  return universalConfig.server(webpackConfig, universalSettings);
};

module.exports = getConfiguration();