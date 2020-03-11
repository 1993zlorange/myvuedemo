<template>
<!-- 
1.修改需要页面 

2.antuitest目录上添加页面及面向的路由 (上级结构的路径不重复，需要输出显示的和路由表path相对应，由routerview决定了上级路由和自由显示的页面关系)

3.更改router/index路由表
 3.1 import组件
 3.2 添加路由信息
-->
    <!-- <div style= "width:450px;height:220px;"> -->
        <el-container direction='vertical' > 
                <!-- 1.markdown and highlight -->
                <!-- 文档部分 -->
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
import markdownmd from '../../assets/doc/learncss.md'

export default {
    name: 'learncss',
    data() {
        return {
            list: []
        };
    },
    mounted: function(){

    },
    components:{
        //3.exportmarkdown
        markdownmd
    }
}
</script>

<style scoped>

</style>