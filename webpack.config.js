/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',//'development',
  entry: {
    starter: [
      "@babel/polyfill",
      path.resolve(__dirname, './src/index.ts'),
    ],
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
        test: /\.ts$/,
        use: [
          // ts-loader
          //-------------------------//
          { 
            loader: 'babel-loader',
          },
          //-------------------------//
          { 
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.build.json',
              compilerOptions: {
                declaration: true,
                outDir: 'dist/types',
              },
            },
          },
          //-------------------------//
          {
            loader: 'eslint-loader',
          },
        ],
      },
    ],
  },
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
};


