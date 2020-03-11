element.ui http://element-cn.eleme.io/#/zh-CN
elementui
```
// 使用 npm 方式安装 element 可以更好地和 webpack 打包工具配合使用
npm install element-ui -S 
// or
cnpm  i element-ui --save
```
```
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';    // （1）
import 'element-ui/lib/theme-chalk/index.css';    // （2）

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })  
// （3）在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)  // （4）
})
```
