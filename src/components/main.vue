<template>
<el-container style="border: 1px solid #eee,min-height: 200vh;" >
        <!-- 左侧菜单 -->
   <!-- <div class="left-con" style="height:120px">       -->
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 10px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-aside width='250px'>
    <el-menu class="el-menu-vertical-demo" router="true" @open="handleOpen" @close="handleClose" :collapse="isCollapse" style>
      <label v-for="(item,index) in listNav" :key="index">
        <label v-for="(itemR,indexR) in item.extopts" :key="indexR">
          <label v-for="(iconitem2,iconIndex2) in (indexR).match(/(\S*)@@/)" :key="iconIndex2">
            <label v-if="iconIndex2 > 0">
              <el-menu-item :url="item.url" :index=iconitem2 v-if="item.items.length == 0">
                <label v-for="(iconitem1,iconIndex1) in (indexR).match(/@@(\S*)/)" :key="iconIndex1">
                  <label v-if="iconIndex1 > 0">
                    <i :class=iconitem1></i>
                  </label>
                </label>
                <!-- <span slot="title">{{ item.text}}{{iconitem2}}</span> -->
                <span slot="title">{{ item.text}}</span>
              </el-menu-item>
              <el-submenu :index=iconitem2 v-else>
  
                <template slot="title">
                  <label v-for="(iconitem3,iconIndex3) in (indexR).match(/@@(\S*)/)" :key="iconIndex3">
                    <label v-if="iconIndex3 > 0">
                      <i :class=iconitem3></i>
                    </label>
                    
                  </label>
                  <!-- <span slot="title" v-show="true">{{ item.text}}{{iconitem2}}</span> -->
                  <span slot="title" v-show="true">{{ item.text}}</span>
                </template>
               
                <label v-for="(item1,index1) in item.items" :key="index1">
                  <label v-for="(itemR1,indexR1) in item1.extopts" :key="indexR1">
                   
                    <!-- <el-menu-item :url="item1.url" :index=indexR1 v-if="item1.items.length == 0">{{item1.text}}{{indexR1}}</el-menu-item> -->
                    <el-menu-item :url="item1.url" :index=indexR1 v-if="item1.items.length == 0">{{item1.text}}</el-menu-item>
                    <el-submenu :index=indexR1 v-else>
                      <!-- <template slot="title">{{item1.text}}{{indexR1}}</template> -->
                      <template slot="title">{{item1.text}}</template>
                      <label v-for="(item2,index2) in item1.items" :key="index2">
                        <label v-for="(itemR2,indexR2) in item2.extopts" :key="indexR2">
                          <!-- <el-menu-item :url="item2.url" :index=indexR2>{{item2.text}}{{indexR2}}</el-menu-item> -->
                          <el-menu-item :url="item2.url" :index=indexR2>{{item2.text}}</el-menu-item>
                        </label>
                      </label>
                    </el-submenu>
                  </label>
                </label>
              </el-submenu>
            </label>
          </label>
        </label>
      </label>
    </el-menu>
  </el-aside>
  <!-- </div> -->
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
        <el-main id='mycontent' style='background-color: rgb(255, 255, 255)'>
          <div class="center-con" >
              <!-- router-view 用于视图切换区域 -->
          <router-view />
          </div>  
        </el-main >
      </el-main>  
        <el-footer height='30px'>vue demo ©2020 Created by Doraengineer</el-footer>
      </el-container>
</el-container>
</template>

<script>
// import mylistNav from "../../static/navdata.json";
  export default {
    name: 'antuitest',
    // components: {
    //   'sub-menu': SubMenu,
    // },
    data() {
      return {
        isCollapse:false,
        listNav: [
          {
            text: "说明",
            url: "http://10.156.121.38:9000/gwUap",
            extopts: { "/content/@@el-icon-search": "" },
            items: [
                {
                    text: "简介",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/content/information": "" },
                    items: [ ],
                    outter: false
        
                },
                {
                    text: "环境配置",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/content/environment": "" },
                    items: [ ],
                    outter: false
        
                },      
                {
                    text: "参考",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/content/reference": "" },
                    items: [ ],
                    outter: false
        
                }     
              ]
           },
            {
            text: "理论基础",
            url: "http://10.156.121.38:9000/gwUap",
            extopts: { "/theory/@@el-icon-search": "" },
            items: [
                {
                    text: "网页制作简介",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/theory/learnweb": "" },
                    items: [ ],
                    outter: false     
                },
               {
                    text: "网页制作流程",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/theory/team": "" },
                    items: [ ],
                    outter: false
        
                },
                {
                    text: "html",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/theory/learnhtml": "" },
                    items: [ ],
                    outter: false
        
                },
                {
                    text: "css",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/theory/learncss": "" },
                    items: [ ],
                    outter: false
        
                },
                 {
                    text: "jquery",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/theory/learnjquery": "" },
                    items: [ ],
                    outter: false
        
                },
                //  {
                //     text: "vue",
                //     url: "http://10.156.121.38:9000/gwUap",
                //     extopts: { "/theory/mylearnvue": "" },
                //     items: [ ],
                //     outter: false
        
                // },
            ]
           },
            {
            text: "引用资源",
            url: "http://10.156.121.38:9000/gwUap",
            extopts: { "/quote/@@el-icon-search": "" },
            items: [
                {
                    text: "导入js",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/quote/jsimport": "" },
                    items: [ ],
                    outter: false
        
                },
                {
                    text: "导入组件",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/quote/componentimport": "" },
                    items: [ ],
                    outter: false
        
                },      
              ]
           },
          {
            text: "数据请求",
            url: "http://10.156.121.38:9000/gwUap",
            extopts: { "/datarequest/@@el-icon-search": "" },
            items: [
                {
                    text: "ajax",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/datarequest/ajax": "" },
                    items: [ ],
                    outter: false
        
                },
                {
                    text: "axios",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/datarequest/axios": "" },
                    items: [ ],
                    outter: false
        
                },      
              ]
           },
        {
            text: "组件",
            extopts: { "/comp/t@@el-icon-location": "" },
              items: [
                {
                    text: "echart",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/comp/echart": "" },
                    items: [ ],
                    outter: false
        
                },
                {
                    text: "markdown",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/comp/markdown": "" },
                    items: [ ],
                    outter: false
        
                },
      
              ]
        },
      
             {
            text: "组件间通信",
            extopts: { "/compcontact/vuex@@el-icon-location": "" },
              items: [
                {
                    text: "vuex",
                    url: "http://10.156.121.38:9000/gwUap",
                    extopts: { "/compcontact/vuex": "" },
                    items: [ ],
                    outter: false
        
                },     
              ]},

        ]}
        },
    mounted:function(){


console.log(this.listNav.data);
console.log("sdf");

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
  };
</script>
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    /* width: 200px; */
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
    text-align: left;
    line-height: 40px;
    width:300px;
    height:660px;

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
  #mycontent{

    height:550px;
  }
  /* .left-con{
    

  } */

</style>