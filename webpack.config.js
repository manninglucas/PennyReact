// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/static/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        // match files based on pattern
        test: /\.jsx?$/,
        // ignore files matching pattern
        exclude: /node_modules/
      }
    ]
  }
};