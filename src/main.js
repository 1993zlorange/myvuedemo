// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入echart
import echarts from 'echarts'
// 引入echarts字符云
import 'echarts-wordcloud/dist/echarts-wordcloud'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'
//引入elementui
import ElementUI from 'element-ui';    // （1）
import 'element-ui/lib/theme-chalk/index.css';    // （2）
import store from "./store";
//axios
import Api from './api/index.js';
// 引入antui

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

//highlight
import VueHighlightJS from 'highlight.js';
Vue.use(VueHighlightJS)
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    VueHighlightJS.highlightBlock(block)
  })
})

Vue.config.productionTip = false
//axios
Vue.prototype.$api = Api;
//echart
Vue.prototype.$echarts = echarts
//element
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })  
// （3）在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）
//antui

//antui
Vue.use(Antd);
/* eslint-disable no-new */


new Vue({
  el: '#app',
  store,
  router,
  components: { App},
  template: '<App/>',
//element
  render: h => h(App)  // （4）
})
