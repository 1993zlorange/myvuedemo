// 1.添加包
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import axiostest from '@/components/datainteract/axiostest'
import Detail from '@/components/datainteract/datarequest'
import layout from '@/components/elementtest'
import echarttest from '@/components/echart/echarttest'
import vuextestfather from '@/components/vuex/vuextestfather'
import main from '@/components/main'
import markdown from '@/components/outassets/markdownusing'
import learnhtml from '@/components/knowledge/learnhtml'
import learncss from '@/components/knowledge/learncss'
import learnweb from '@/components/knowledge/learnweb'
import team from '@/components/knowledge/team'
import mylearnvue from '@/components/knowledge/mylearnvue'
import learnjquery from '@/components/knowledge/learnjquery'
import environment from '@/components/info/environment'
import information from '@/components/info/information'
import jsimport from '@/components/knowledge/jsimport'
import componentimport from '@/components/knowledge/componentimport'
import reference from '@/components/info/reference'





Vue.use(Router)
Vue.use(VueResource)
// 2.添加路由
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Collect',
    //   component: Collect
    // },

    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    {
      path: '/',
      name: 'antuitest',
      component: main
    },
    {
      path: '/datarequest',
      component: main, // 布局
      redirect: '/datarequest/ajax', // 重定向
      children: [{
        path: 'ajax',
        component: Detail, 
        name: 'ajax后端请求数据',
        
      }]
    },
    {
      path: '/datarequest',
      component: main, // 布局
      redirect: '/datarequest/axios', // 重定向
      children: [{
        path: 'axios',
        component: axiostest, 
        name: 'axiostest',
        
      }],
    },
    {
      path: '/comp',
      component: main, // 布局
      redirect: '/comp/echart', // 重定向
      children: [{
        path: 'echart',
        component: echarttest, 
        name: 'echart',
        
      }]
    },
    {
      path: '/comp',
      component: main, // 布局
      redirect: '/comp/markdown', // 重定向
      children: [{
        path: 'markdown',
        component: markdown, 
        name: 'markdown',
        
      }]
    },
    {
      path: '/theory',
      component: main, // 布局
      redirect: '/theory/learnhtml', // 重定向
      children: [{
        path: 'team',
        component: team, 
        name: 'team',
        
    }]
    },
      {
        path: '/theory',
        component: main, // 布局
        redirect: '/theory/learnhtml', // 重定向
        children: [{
          path: 'learnhtml',
          component: learnhtml, 
          name: 'learnhtml',
          
      }]
      },
      {
        path: '/theory',
        component: main, // 布局
        redirect: '/theory/learnhtml', // 重定向
        children: [{
          path: 'learncss',
          component: learncss, 
          name: 'learncss',
          
      }]
      },
      {
        path: '/theory',
        component: main, // 布局
        redirect: '/theory/learnhtml', // 重定向
        children: [{
          path: 'learnjquery',
          component: learnjquery, 
          name: 'learnjquery',
          
      }]
      },
      {
        path: '/theory',
        component: main, // 布局
        redirect: '/theory/learnhtml', // 重定向
        children: [{
          path: 'mylearnvue',
          component: mylearnvue, 
          name: 'mylearnvue',
          
      }]
      },
      {
        path: '/theory',
        component: main, // 布局
        redirect: '/theory/learnhtml', // 重定向
        children: [{
          path: 'learnweb',
          component: learnweb, 
          name: 'learnweb',
          
      }]
      },
      {
        path: '/content',
        component: main, // 布局
        redirect: '/content/environment', // 重定向
        children: [{
          path: 'environment',
          component: environment, 
          name: 'environment',
          
      }]
      },
      {
        path: '/content',
        component: main, // 布局
        redirect: '/content/environment', // 重定向
        children: [{
          path: 'information',
          component: information, 
          name: 'information',
          
      }]
      },
      {
        path: '/content',
        component: main, // 布局
        redirect: '/content/reference', // 重定向
        children: [{
          path: 'reference',
          component: reference, 
          name: 'reference',
          
        }]
      },
      {
        path: '/compcontact',
        component: main, // 布局
        redirect: '/compcontact/vuex', // 重定向
        children: [{
          path: 'vuex',
          component: vuextestfather, 
          name: 'vuextest',
          
        }]
      },
      {
        path: '/quote',
        component: main, // 布局
        redirect: '/quote/jsimport', // 重定向
        children: [{
          path: 'jsimport',
          component: jsimport, 
          name: 'jsimport',
          
        }]
      },
      {
        path: '/quote',
        component: main, // 布局
        redirect: '/quote/componentimport', // 重定向
        children: [{
          path: 'componentimport',
          component: componentimport, 
          name: 'componentimport',
          
        }]
      },
      
  ]
})
