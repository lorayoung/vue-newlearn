module.exports = {
    runtimeCompiler: true,
    devServer: {
        port: "8080",
        proxy: {
            '/': {
                target: 'http://172.16.4.200', // target host
                ws: false, // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    '^/': '' // rewrite path
                }
            },
        }
    }
}