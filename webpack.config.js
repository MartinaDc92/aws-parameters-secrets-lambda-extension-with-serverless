const path = require('path');
const  slsWebpack =  require('serverless-webpack');

module.exports = {
  devtool: 'source-map',
  entry: slsWebpack.lib.entries,
  mode: 'development',
  externals: {
      'aws-sdk': 'aws-sdk'
  },
  resolve: {
    extensions: ['.json', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'ts-loader',
        options: {}
      },
    ],
  }
};