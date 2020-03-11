# 简介
axios 是可以替代ajax向后端发送请求的工具
# 安装
```
$ npm install axios -S
```
在项目中新建api/index.js文件，用以配置axios
```
import axios from "axios";
let http = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  transformRequest: [function (data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    response(err);
  })
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}
```
# 使用
在需要的vue页面的method中引入
```
        var url = 'http://localhost:5000/';
        this.$api.get(url, {
        }, response => {
            if (response.status >= 200 && response.status < 300) {
                // 请求成功，response为成功信息参数
                 this.list = response.data;
                console.log(response.data);
            } else {
                //请求失败，response为失败信息
                console.log(response.message);
            }
        });
```
