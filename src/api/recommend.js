import httpUtils from "@/assets/javascript/httpUtils.js";
import { commonParams } from './config'

export function getDiscList() {
    const url = '/getDiscList'
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
    return httpUtils.get(url, data).then(res => {
      return Promise.resolve(res.data)
    })
  }

  export function getSongList(disstid) {
    const url = '/getSongList'
  
    const data = Object.assign({}, commonParams, {
      disstid,
      type: 1,
      json: 1,
      utf8: 1,
      onlysong: 0,
      platform: 'yqq',
      hostUin: 0,
      needNewCode: 0
    })
  
    return httpUtils.get(url, data).then((res) => {
      return Promise.resolve(res.data)
    })
  }