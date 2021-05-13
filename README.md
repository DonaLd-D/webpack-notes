### 从零开始用webpack配置vue项目的实践思路

* 新建任意文件夹
* ```npm init -y```初始化项目
* 安装项目的依赖
    > - vue:vue框架代码
    > - vue-loader:用于解析.vue文件
    > - vue-template-compiler:用于将vue2.0模版预编译为渲染函数，由于它是从vue源码中抽离出来的，因此必须与vue的版本一致
    > - css-loader:解析css样式
    > - style-loader:用于生成style标签将解析后的样式放入head中
    > - webpack:webpack打包工具的代码
    > - webpack-cli:webpack4.0以上需要安装
    > - webpack-dev-server:用于创建本地服务器，查看项目渲染效果，并支持热更新等功能
    > - html-webpack-plugin:用于解析html文件
* 初始化项目结构
    > - 根目录新建src文件夹，src文件夹下创建App.vue文件，作为根组件
    > - 在src文件夹下创建index.js作为入口文件
    > - 在根目录下创建index.html作为html文件模板
* 在根目录下创建webpack配置文件webpack.config.js
* 启动项目
    > - 在package.json中的script中添加脚本
    ```
    "dev": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config webpack.config.js --port 3000 --open"
    ```
    > - 一个简单的webpack+vue搭建的项目就完成了
* 优化
    ```
    "dev": "webpack-dev-server --config webpack.config.js --port 3000 --open"
    ```
* 在webpack.config.js中，使用devServer选项来配置热启动项目时的参数
    ```
        devServer: {    

            port: 9000,    

            host: 'localhost',    

            hot: true,    

            open: true  

        },

    ```
* 简化
    ```
    "dev": "webpack-dev-server --config webpack.config.js" 
    ```