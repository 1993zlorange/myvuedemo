# 安装配置
* 在package.json添加echarts，保存后运行npm install 或者其他方法添加

```
<script>
"dependencies": {
    "echarts": "^4.2.1", //添加echarts
  },
</script>
```

* 在main.js配置

```
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
```

# 使用
* 在需要使用的模块
```
<template>
<div
                  id="idChart"
                  :style="{width: '95%', height: '100%'}"
                  style="margin:10px auto;display:block;"
                ></div> 
<!-- 声明一个id="idChart"的div ,设宽高 -->
</template>
```

* model和controller写在js里

```
<script>
export default {
// 定义路由的名字（挂载点）
    name:'myechart',
//model
    data(){
return{
myData:[],
}
},
//当挂载的时候运行（this指针是指向vue类的，可以选中vue的model和函数）
//临时变量需要在mounted里定义，否则找不到
//只能用this来访问method里的函数，其他函数都访问不到（后端去处理），所以method里的函数尽量不要嵌套，否侧需要在mounted里传参
  mounted: function() {
//绑定数据，这里可以调用函数来处理数据
 this.myData=[ ]
  //一开始加载数据，或者是取后台返回来的数据
    this.drawWorld(this.myData);
  },
//定义函数
 methods:{
    drawWorld(myData) {
      // 基于准备好的dom，初始化echarts实例
      let myChart= this.$echarts.init(
        document.getElementById("idChart")
      );
//这里赋值echart的option
     myChart.setOption({},
//在这里面需要设置数据data:myData
    );
     }
  }
}
</script>
```

* 在router的index里引入'并更改路由

```
import myechart from '@/components/echart2'
```

```
    {
      path: '/order',
      name: 'myechart',
      component: myechart
    },

```

```
int f=4;
```
