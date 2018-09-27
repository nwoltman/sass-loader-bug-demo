/**
 * Copyright (c) 2018-present, Arendil Inc. All rights reserved.
 */
'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {main: './js/main.js'},
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]--[local]',
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['css'],
              outputStyle: 'expanded',
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devtool: false,
};
