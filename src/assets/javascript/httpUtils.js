import axios from 'axios'

let Axios = axios.create({
    timeout: 1000,
    headers: {referer: 'https://c.y.qq.com', host: 'c.y.qq.com' }
});

// Axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//             return response;
//         }, function (error) {
//             // 对响应错误做点什么
//             if (error.response.status === 401) { 
//             console.dir('error',"登录超时，请重新登录")
//             }
//             return Promise.reject(error);
//         }
// )

export default {
    get: function(){
        let url = arguments[0] || ''
        let params = arguments[1] || {}
        return new Promise(resolve=>{
            Axios({
                method:'get',
                url:url,
                params:params
            }).then(rs=>{
                resolve(rs)
            })
        })
    },
    post:function(){
        let url = arguments[0] || ''
        let params = arguments[1] || {}
        return new Promise(resolve=>{
            Axios({
                method:'post',
                url:url,
                data:params
            }).then(rs=>{
                resolve(rs)
            })
        })
    }
}