<template>
<div style= "width:450px;height:220px;">
<div
                  id="idChart"
                  :style="{width: '100%', height: '100%'}"
                  style="margin:10px auto;display:block;"
                ></div>
                <!-- 声明一个id="idChart"的div ,设宽高 -->
                </div>
</template>

<script>
export default {
// 定义路由的名字（挂载点）
    name:'myechart',
//model
    data(){
return{
xAxisData :[],
data1 :[],
data2 :[]
}
},
//当挂载的时候运行（this指针是指向vue类的，可以选中vue的model和函数）
//临时变量需要在mounted里定义，否则找不到
//只能用this来访问method里的函数，其他函数都访问不到（后端去处理），所以method里的函数尽量不要嵌套，否侧需要在mounted里传参
  mounted: function() {
//绑定数据，这里可以调用函数来处理数据
for (var i = 0; i < 100; i++) {
    this.xAxisData.push('类目' + i);
    this.data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    this.data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}
  //一开始加载数据，或者是取后台返回来的数据
    this.drawWorld(this.xAxisData,this.data1,this.data2);
  },
//定义函数
 methods:{
    drawWorld(xAxisData,data1,data2) {
      // 基于准备好的dom，初始化echarts实例
      let myChart= this.$echarts.init(
        document.getElementById("idChart")
      );
//这里赋值echart的option
     myChart.setOption({

    title: {
        text: '柱状图动画延迟'
    },
    legend: {
        data: ['bar', 'bar2']
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }

     },
//在这里面需要设置数据data:myData
    );
     }
  }
}
</script>