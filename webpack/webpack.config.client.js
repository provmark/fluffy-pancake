// import { client } from 'universal-webpack/config'
// import settings from './universal-webpack-settings'
// import getBrandedWebPackConfiguration from './webpack.config.babel'

var universalConfig = require('universal-webpack/config');
var universalSettings = require('./universal-webpack-settings');
var getThemedWebPackConfiguration = require('./webpack.config.babel');

// console.log('Theme Name: ', process.env.THEME_NAME);

// var clientConfig = universalConfig.client(getBrandedWebPackConfiguration(process.env.THEME_NAME), universalSettings);

// console.log('Client Config: ', clientConfig);
const getClientConfiguration = (themeName) => {
  console.log('Generate client theme: ', themeName);
  var webpackConfig = getThemedWebPackConfiguration(themeName);

  return universalConfig.client(webpackConfig, universalSettings);
};

module.exports = getClientConfiguration;
