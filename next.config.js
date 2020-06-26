const webpack = require('webpack');
require('dotenv').config();
const withTM = require('next-transpile-modules')(['next-vis-timeline']); // pass the modules you would like to see transpiled

module.exports = withTM({
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  }
});
