var path=require('path');
var webpack = require("webpack");
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin =require('uglify-js-plugin');
const config={
    entry:{
        dist:["webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server",path.resolve(".")+"/src/index.js"]
    },
    output:{
        path:path.resolve(".")+"/dist",
        filename:"dist.js"
    },
    devtool:"source-map",
    resolve: {
        extensions: ['','.coffee','.js']
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:"/node_modules/",
                query:{
                    presets: ["react","es2015"]
                }
            },
            {
                test:/.css$/,
                loader:ExtractTextWebpackPlugin.extract('style-loader','css-loader')
            },
            {
                test:/.less$/,
                loader:"style!css!less"
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports=config;