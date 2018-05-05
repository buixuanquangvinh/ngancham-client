var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: [
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'desktop.bundle.js'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    //new webpack.DefinePlugin({ // <-- key to reducing React's size
    //  'process.env': {
    //    'NODE_ENV': JSON.stringify('production')
    //  }
    //}),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|zh-tw)$/),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
	  alias: {
	    request: path.resolve(APP_DIR, 'request/'),
      ulti: path.resolve(APP_DIR, 'ulti.desktop/'),
      features: path.resolve(APP_DIR, 'features/'),
      components: path.resolve(APP_DIR, 'components/'),
      views: path.resolve(APP_DIR, 'views/')
	  }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ["transform-class-properties"]
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader' }
    ]
  },
  target: 'electron-main'
}

module.exports = config;