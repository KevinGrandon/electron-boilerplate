var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {
  entry: {
  app: ['webpack/hot/dev-server', './src/components/index.js'],
},

output: {
  path: './public/built',
  filename: 'bundle.js',
  publicPath: 'http://localhost:8080/built/'
},

devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8080/built/'
},

module: {
 loaders: [
   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
   { test: /\.css$/, loader: 'style-loader!css-loader' },
   { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
 ]
},

 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
}

config.target = webpackTargetElectronRenderer(config)

module.exports = config
