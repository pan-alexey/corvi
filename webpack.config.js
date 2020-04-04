const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    starter: path.resolve(__dirname, './src/index.ts'),
  },
  resolve: {
    alias: {
      '~' : path.resolve(__dirname, './src/'),
    },
    extensions: ['.ts'] 
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'MyLib',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
  ],
};


