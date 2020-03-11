<template>
    <!-- <div style= "width:450px;height:220px;"> -->
        <el-container direction='vertical' > 
            <el-main >
              <!-- 工具部分 -->
                <myechart></myechart>
           </el-main>
            <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
              <!-- 文档部分 -->
        <!-- 1.markdown and highlight -->
           <el-main>
                <div class="markdown-body" >
                    <markdownmd v-highlight></markdownmd>
                </div>
            </el-main>
         </el-container>
    <!-- </div> -->

</template>

<script>
import myechart from '@/components/echart/testechart';
//2.markdownimport
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import markdownmd from '../../assets/doc/vuexusing.md'

export default {
  name: 'echarttest',
   // 2、添加自定义组件
  data() {
        return {
            htmlMD: []
        };
    },
    mounted:function(){

     },
  components:{
    myechart,
    markdownmd
  }
}



</script>

<style>