const webpack = require('webpack')

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    },
    plugins:[ new webpack.ProvidePlugin({ $: 'jquery', jQuery:'jquery' }) ]
}