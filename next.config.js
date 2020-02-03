const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
// const plugins = [];
// module.exports = withPlugins(plugins, {});
module.exports = withSass(withCSS())