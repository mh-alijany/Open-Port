const rules = require('./webpack.rules');
const webpack = require('webpack');
const babelConfig = require('./babel.config.js');

// const TerserPlugin = require('terser-webpack-plugin');

rules.push({
  test: /\.css|.scss$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
});

rules.push({
  test: /\.(js|jsx)$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: babelConfig
  }
})

rules.push({
  test: /\.(woff|woff2|ttf|otf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        // outputPath: '/assets/fonts',
        name: '[name].[ext]'
      }
    },
  ],
})

rules.push({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'url-loader'
    },
  ],
})

module.exports = {
  // mode: 'production',
  // devtool: false,
  module: {
    rules,
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ],
  // optimization: {
  //   mangleWasmImports: true,
  //   removeAvailableModules: true,
  //   mergeDuplicateChunks: true,
  //   usedExports: true,
  //   minimizer: [
  //     // new TerserPlugin() // needs babel es5
  //   ]
  // }
};
