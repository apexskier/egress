var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.tsx',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-actions'
    ]
  },

  output: {
    filename: './dist/bundle.js',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.ts',
      '.tsx',
      '.js'
    ]
  },

  module: {
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/,
        loader: 'source-map-loader',
      }
    ],

    loaders: [
      {
        test: /\.tsx?$/,
        loaders: [
           'babel-loader?presets[]=es2015',
           'ts-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', './dist/vendor.bundle.js'),
  ]
};
