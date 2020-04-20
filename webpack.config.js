const webpack = require('webpack')

module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/xrk':{
                target:'https://br.xinhua-news.cn/',
                changeOrigin:true
            }
        }
    },
    plugins:[ new webpack.ProvidePlugin({ $: 'jquery', jQuery:'jquery' }) ]
}