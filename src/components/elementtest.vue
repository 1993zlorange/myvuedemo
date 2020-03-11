<template>
<!-- 修改route 的index.js 的component则可运行此界面 -->
<el-container style="border: 1px solid #eee,min-height: 200vh;" >
        <!-- 左侧菜单 -->

  <div class="left-con" >
      <!-- <el-menu :style="{backgroundImage:'url('+url1+')' }" class="el-menu-vertical-demo" :router="true"> -->
      <el-radio-group v-model="isCollapse" style="margin-bottom: 10px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu  class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose" :collapse="isCollapse"> 
        
      <el-menu-item v-for="(item, index) in routesArr" :index="index+''" :route="item" :key="index">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
      </el-menu-item>
      </el-menu>
  </div>

  <el-container style="background-color: rgb(238, 241, 246)" >
      <el-header height='40px' style="background: #fff; padding: 0" >
            我的vue学习实例
      </el-header>
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right"  >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>级联关系</el-breadcrumb-item>
        <el-breadcrumb-item>面包屑测试</el-breadcrumb-item>
      </el-breadcrumb>

      <!-- 再包裹一层为了有padding效果 -->
      <el-main >
          <!-- 右侧内容 -->
        <el-main style='background-color: rgb(255, 255, 255)'>
          <div class="center-con" >
              <!-- router-view 用于视图切换区域 -->
          <router-view />
          </div>  
        </el-main >
      </el-main>  
        <el-footer height='30px'>vue demo ©2020 Created by Doraengineer</el-footer>
      </el-container>
          <!-- </el-col>   -->
      <!-- <el-footer style='heitht:20'>朱凌 orange_working@163.com</el-footer> -->
</el-container>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
        url1:require("../assets/mainback.jpg"),
     routesArr: [
        { 
          name: "ajax后端请求数据",
          path: "/Deteail"
        },
        {
          name: "echart",
          path: "/echart"
        },
        {
          name: "vuextest",
          path: "/vuex"
        },
        {
          name: "axiostest",
          path: "/axios"
        },
        {
          name: "markdown",
          path: "/markdown"
        }

        
      ],
      isCollapse: true
    }
  },
  mounted () {
    //   打印一下看看路由
    console.log(this.$router.options.routes);
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);

        //  console.log(d.style.width);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
        // console.log(d.style.width);
      }
    }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 200px;
  }
  .el-header, .el-footer ,.el-breadcrumb{
    /* background-color: #B3C0D1;  */
    /* backgroundImage: 'url("+require("../../assets/mainback.jpg")+")'; */
     /* color: #333; */
    text-align: center;
    line-height: 30px; 

  }
  .el-footer{

    text-align: center;
  }
  .el-header{

 background-color: #B3C0D1; 
  }
    .el-aside {
    /* background-color: #D3DCE6;
    color: #333; */
    text-align: center;
    line-height: 40px;
    /* height:270px; */

  }
    .center-con {
    background-color: rgb(255, 255, 255) ;
    color: #333;  
    text-align: left;
    line-height: 15px;
    /* height:270px; */
    /* border: 5px; */
    /* margin：20px; */
  }
  /* .left-con{
    

  } */

</style>
