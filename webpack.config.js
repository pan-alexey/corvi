/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    starter: path.resolve(__dirname, './src/index.ts'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'corvi',
    globalObject: 'this',
  },
  node: {
    process: false,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.build.json',
          compilerOptions: {
            declaration: true,
            outDir: 'dist/types',
          },
        },
      },
    ],
  },
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
};


