var path=require('path');
var webpack = require("webpack");
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const config={
    entry:{
        search:["webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server",path.resolve(".")+"/src/search.js"]
    },
    output:{
        path:path.resolve(".")+"/dist",
        filename:"search.js"
    },
    devtool:"sourcemap",
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
        new webpack.HotModuleReplacementPlugin() ,
        new ExtractTextWebpackPlugin('all.css')
    ]
}
console.log(config.entry);

module.exports=config;