### React 项目管理

#### 1、资源下载 

- 1、下载react-0.13.3；
- 2、

#### 2、项目构建

- 参考：https://github.com/petehunt/webpack-howto
- 全局安装webpack和webpack-dev-server；```npm install webpack -g; npm install webpack-dev-server -g;```
- 初始化项目：```npm init```
- 使用webpack：```npm install webpack --save-dev```
- 配置webpack.config.js，详细说明参考3.1;
    - 如3.1基础配置中执行 webpack 命令等同于 webpack main.js bundle.js 命令；
    - webpack -p 生成min.js文件；
    - webpack --watch 增量build；
    - webpack -d 包含source map；

#### 3、配置

- 3.1 webpack.config.js 配置说明：

    - 基础配置：
    ```
    module.exports = {
        entry: './main.js',
        output: {
            filename: 'bundle.js'    
        }
    };
    ```
    - 插件支持：loader
    ```
    loaders: [
        { test: /\.coffee$/, loader: 'coffee-loader' },
        { test: /\.js$/, loader: 'babel-loader' }
    ]
    ```
    - 扩展支持：
    ```
    resolve: {
        extensions: ['', '.js', '.json', '.coffee']    
    }
    ```
