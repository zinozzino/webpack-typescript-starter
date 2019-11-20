const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const resolve = p => path.resolve(__dirname, '..', p);

module.exports = {
  context: resolve('.'),
  entry: './src/index.ts',
  output: {
    path: resolve('dist'),
    filename: 'lib.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    plugins: [new TsconfigPathsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
            },
          },
        ],
      },
    ],
  },
};
