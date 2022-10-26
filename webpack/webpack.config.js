const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const isDev = process.env.NODE_ENV === 'development';

const envConfig = require(`./webpack.${isDev ? 'dev' : 'prod'}.js`);
const config = merge(commonConfig, envConfig);

module.exports = config;
