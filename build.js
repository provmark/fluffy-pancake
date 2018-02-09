process.env.NODE_ENV = 'production';

var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var filesize = require('filesize');
var gzipSize = require('gzip-size').sync;
var rimrafSync = require('rimraf').sync;
var webpack = require('webpack');


var themes = require('@provdig/circus.themes');

// Remove all content but keep the directory so that
// if you're in it, you don't end up in Trash
rimrafSync('./build/client/*');

var webpackConfigs = [];

console.log(`Building configuration for ${themes.themeIndex.length} themes...`);
var generateClientConfig = require('./webpack/webpack.config.client');

// console.log(themes.themeIndex);
themes.themeIndex.map((activeTheme) => {

  var config = generateClientConfig(activeTheme.name);

  webpackConfigs.push(config);

});

// TODO: make the stats and error output pretty
webpack(webpackConfigs).run((err, stats) => {
  process.stdout.write(stats.toString() + "\n");
});