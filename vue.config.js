module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/2019ncov': {
                target: "https://br.xinhua-news.cn", // 转发到的服务器的域名/IP
                changeOrigin: true  // 配置请求头
            }
        }
    }
}