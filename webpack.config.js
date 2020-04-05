const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
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
    library: 'corvi',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  node: {
    process: false
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
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
};


