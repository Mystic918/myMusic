import httpUtils from "@/assets/javascript/httpUtils.js";

export function getDiscList() {
    const url = '/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    const data = Object.assign({}, {
      g_tk: 5381,
      notice: 0,
      inCharset: 'utf8',
      outCharset: 'utf-8',
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      categoryId: 10000000,
      needNewCode: 0,
      rnd: Math.random(),
      format: 'json'
    })
    return httpUtils.get(url, data, { "content-type": "application/x-www-form-urlencoded", "referer": 'https://c.y.qq.com', "host": 'c.y.qq.com' }).then(res => {
        console.log(res)
      return Promise.resolve(res.data)
    })
  }