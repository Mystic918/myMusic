module.exports = {
    devServer: {
      disableHostCheck: true,
      proxy: {
        '/': {
          target: 'https://c.y.qq.com',
          ws: false,
          changeOrigin: true,
          pathRewrite: {
            '^/': '/'
          }
        }
      }
    }
  }