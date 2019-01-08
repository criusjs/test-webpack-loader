const path = require('path');
module.exports = {
  mode: 'development',
  entry: './index.js',
  resolve: {
    extensions: ['.js', '.lua', '.json'],
  },
  module: {

    rules: [{
      test: /\.lua$/,
      loader: path.resolve('./lua-loader')
    }]
  }
}