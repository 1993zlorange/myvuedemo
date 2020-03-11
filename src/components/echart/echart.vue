<template>
 <div
                  id="worldChart1"
                  :style="{width: '95%', height: '100%'}"
                  style="margin:10px auto;display:block;"
                ></div>    
</template>
<script>
export default {
    name:'myechart',
    data(){
return{
worldData1:[],
}
},
  mounted: function() {
 this.worldData1=[
        {
          name: "Sam S Club",
          value: 10000,
          textStyle: {            //这里必须用textStyle，词云图才有多颜色，echarts升级版本后词云图不支持了
            normal: {
              color: "black"
            }
          }
        },
        {
          name: "Macys",
          value: 6181,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Amy Schumer",
          value: 4386,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Jurassic World",
          value: 4055,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Charter Communications",
          value: 2467,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Chick Fil A",
          value: 2244,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Planet Fitness",
          value: 1898,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Pitch Perfect",
          value: 1484,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Express",
          value: 1112,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Home",
          value: 965,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Johnny Depp",
          value: 847,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Lena Dunham",
          value: 582,
          textStyle: this.createRandomItemStyle()
        },
        {
          name: "Lewis Hamilton",
          value: 555,
          textStyle: this.createRandomItemStyle()
        }]
  //一开始加载数据，或者是取后台返回来的数据
    this.drawWorld(this.worldData1);
  },
methods:{
    createRandomItemStyle() {      //随机颜色函数
      return {
        normal: {
          color:
            "rgb(" +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(",") +
            ")"
        }
      };
    },
    drawWorld(worldData1) {
      // 基于准备好的dom，初始化echarts实例
      let worldChart1 = this.$echarts.init(
        document.getElementById("worldChart1")
      );

      worldChart1.setOption({
        title: {
          text: "标题词符云"
          // link: "http://www.google.com/trends/hottrends"
        },
        tooltip: {
          show: true
        },
        series: [
          {
            name: "标题词符云",
            type: "wordCloud",
            size: ["80%", "80%"],
            textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14
            },
            data: worldData1
          }
        ]
      });
      }
}

}
</script>