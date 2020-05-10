/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',//'development',
  devtool: 'source-map',
  entry: {
    main: [
      path.resolve(__dirname, './src/index.ts'),
    ],
  },
  externals:{
    http: 'http',
    https: 'https',
    // url: 'url',
  },
  resolve: {
    extensions: ['.ts', '.js'],
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
        exclude: /node_modules/,
        use: [
          //------- babel ----------//
          // { 
          //   loader: 'babel-loader',
          // },
          //----- typescript --------//
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
          //-------------------------//
        ],
      },
    ],
  },
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
};


