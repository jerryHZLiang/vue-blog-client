import axios from 'axios'
import {Message} from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
//全局的 axios 默认值
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'
// axios 请求默认是不带 cookies 的，这时需要前端与后端同时做一些调整
axios.defaults.withCredentials = true;

export default function request(url,type='GET',data={}){
  return new Promise((resolve,reject)=>{

    // 根据axios的get/post请求API进行封装
    const option={
      url,
      method:type
    }
    if(type.toLocaleLowerCase()==='get'){
      // get的请求方式
      // `params` 是即将与请求一起发送的 URL 参数
      option.params=data
    }else{
      // post的方式
      option.data=data
    }
    axios(option).then(res=>{
      if(res.data.status==='ok'){
        resolve(res.data)
        // Message.success(res.data.msg)
      }else{
        // ele提示框
        Message.error(res.data.msg)
        reject(res.data)
      }
    })
  })
}
