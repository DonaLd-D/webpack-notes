const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    module:{
        rules:[
          { test:/\.vue$/, use: 'vue-loader'}, 
          { test: /.css/, use:['style-loader', 'css-loader']}
        ],
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
              template: path.join(__dirname, './index.html'),      
              filename: 'index.html'
     })
    ],
    devServer: {    
        port: 9000,    
        host: 'localhost',    
        hot: true,    
        open: true  
    },
}
