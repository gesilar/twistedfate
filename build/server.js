var config = require("../config/webpack.config.js");
var webpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var compiler = webpack(config);

var server = new webpackDevServer(compiler,{
    hot: true,
    contentBase:"./dist"
})

server.listen(8080);