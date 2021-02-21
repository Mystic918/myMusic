let axios = require('axios')
let express = require('express')
let app = express()
let apiRoutes = express.Router()
    apiRoutes.get('/getDiscList', function(req, res) {
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
      })
      app.use('/api', apiRoutes)
      server = app.listen(8089, ()=>{console.log("server start 8089")})

