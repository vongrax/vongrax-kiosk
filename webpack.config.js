const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const appRoot = require('app-root-path');

module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  mode: 'production',
  node: {
    __dirname: false,
    __filename: false,
  },
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(appRoot.path, '/package.json'), to: path.resolve(__dirname, 'electron') },
      ],
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'electron'),
  },
};
