const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function override(config, mode) {
  if (mode !== 'development') {
    //fix js hash
    config.output.chunkFilename = 'static/js/[name].chunk.js';
    //fix css hash
    config.plugins = config.plugins.reduce((acc, item) => {
      if (item.constructor.name === 'MiniCssExtractPlugin') {
        acc.push(
          new MiniCssExtractPlugin({
            filename: 'static/css/[name].css',
            chunkFilename: 'static/css/[name].chunk.css',
          })
        );
      } else {
        acc.push(item);
      }
      return acc;
    }, [])
  }
  return config;
};
