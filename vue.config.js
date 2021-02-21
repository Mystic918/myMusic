// require('./dev-server')  多端口
let axios = require('axios') //用同端口 ，可不用代理
module.exports = {
    devServer: {
        before: (app, serve) => {
          app.get("/api/getDiscList", (req, res) => {
            const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
                  axios.get(url, {
                      headers: {
                        referer: 'https://c.y.qq.com',
                        host: 'c.y.qq.com'
                      },
                      params: req.query
                    }).then(response => {
                        console.log(response)
                      res.json(response.data)
                    }).catch(error => {
                      console.log(error)
                    })  
                      
          });
          app.get('/api/getSongList', function (req, res) {
            var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
            axios.get(url, {
                headers: {
                    referer: 'https://c.y.qq.com/',
                    host: 'c.y.qq.com'
                },
                params: req.query
            }).then((response) => {
                var ret = response.data
                // 返回的是JSONP格式的话
                if (typeof ret === 'string') {
                    var reg = /^\w+\(({.+})\)$/
                    var matches = ret.match(reg)
                    if (matches) {
                        ret = JSON.parse(matches[1])
                    }
                }
                res.json(ret)
            }).catch((e)=> {
                console.log(e)
            })
          
          })
        },
      disableHostCheck: true,
      // proxy: {
        // '/api': {
        //   target: 'http://localhost:8089',
        //   ws: false,
        //   changeOrigin: true,
        //   pathRewrite: {
        //     '^/api': '/api'
        //   }
        // }
      // }
    }
  }