var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {test: /\.(jsx|js)$/,
      include: [
        path.resolve(SRC_DIR)
      ],
      exclude: [
        /node_modules/
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
      }]
  }
};
