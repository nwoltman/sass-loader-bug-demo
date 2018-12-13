/**
 * Copyright (c) 2018-present, Arendil Inc. All rights reserved.
 */
'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    main: './js/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
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
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [ path.join(__dirname, 'css') ],
            },
          },
        ],
      },
    ],
  },
  devtool: false,
};
