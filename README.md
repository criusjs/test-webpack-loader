# test-webpack-loader


Loader特性
loader 支持链式传递。能够对资源使用流水线(pipeline)。一组链式的 loader 将按照先后顺序进行编译。loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript。
loader 可以是同步的，也可以是异步的。
loader 运行在 Node.js 中，并且能够执行任何可能的操作。
loader 接收查询参数。用于对 loader 传递配置。
loader 也能够使用 options 对象进行配置。
除了使用 package.json 常见的 main 属性，还可以将普通的 npm 模块导出为 loader，做法是在 package.json 里定义一个 loader 字段。
插件(plugin)可以为 loader 带来更多特性。
loader 能够产生额外的任意文件。
当然，上面这些特性暂时看不明白也没关系，学会如何使用才是重点。所以重点看如何使用Loader

1、从做右到左执行  

#### 在文件中配置 
module: {
    rules: [{
        test: /\.css$/,
        use: [
            'style-loader',
            { loader: 'scss-loader' },
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }
        ]
    }]
}

#### 直接导入
可以在 import 语句或任何等效于 import 的方式中指定 loader。使用 ! 将资源中的 loader 分开。分开的每个部分都相对于当前目录解析。?后面可以传递参数，例如 ?key=value&foo=bar，或者一个 JSON 对象，例如 ?{"key":"value","foo":"bar"}

import Styles from 'style-loader!css-loader?modules!./styles.css';
!感叹号是分割符，表示两个工具都参与处理。

?问号，其实跟url的问号一样，就是后面要跟参数的意思。

而modules这个参数呢，就是将css打包成模块。跟js打包是一样的，你不必再担心不同模块具有相同类名时造成的问题了。



#### 通过CLI使用loader
示例：webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'

以上三种配置方式，第一种应该用的比较多，毕竟配置也比较方便...

