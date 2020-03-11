<template>
    <!-- <div style= "width:450px;height:220px;"> -->
        <el-container direction='vertical' > 
            <el-main >
              <!-- 工具部分 -->
              <h2>{{ msg }}</h2>
              <p>父组件接手到的内容：{{ username }}</p>
              <input type="text" v-model="inputTxt">
              <button @click="setAuthor">传参</button>
              <son psMsg="父传子的内容:你好" @transfer="getUser"></son>
                <!-- </div> -->
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
//2.markdownimport
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import markdownmd from '../../assets/doc/vuexusing.md'

  import son from './vuextestson'
  export default {
    name: 'vuextestfather',
    data () {
      return {
        msg: '父组件',
        username:'',
        inputTxt:''
      }
    },
    components:{
      son,
      markdownmd},
    methods:{
      getUser(msg){
        this.username= msg
      },
      setAuthor:function () {
        this.$store.commit('newAuthor',this.inputTxt)
      }
    }
  }
  </script>