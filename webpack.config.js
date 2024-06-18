const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules|\.test\.js$/,
        enforce: 'post',
        use: {
        //   loader: 'istanbul-instrumenter-loader',
          loader: '@jsdevtools/coverage-istanbul-loader',
          options: { esModules: true }
        }
      }
    ]
  },
  devtool: 'inline-source-map'
};
