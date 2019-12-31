import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

//设置axios参数
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.baseUrl = '/api'
axios.defaults.timeout = 5000
axios.defaults.transformRequest = [function(data){
  let ret =''
  for(let it in data){
    ret += encodeURIComponent(it)+"="+encodeURIComponent(data[it])+"&"
  }
  return ret
}]

Vue.prototype.axios = axios
Vue.prototype.qs = qs

function fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params}).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

function fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

const baseUrl = 'http://39.107.247.46:8079/'
// const baseUrl = '/api'

export default {
    fetchGet,
    fetchPost,
    baseUrl
}