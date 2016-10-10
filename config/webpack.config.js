var path=require('path');
var webpack = require("webpack");
const config={
    entry:{
        app:["webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server",path.resolve(".")+"/src/index.js"]
    },
    output:{
        path:path.resolve(".")+"/dist",
        filename:"app.js"
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
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin() 
    ]
}
console.log(config.entry);

module.exports=config;