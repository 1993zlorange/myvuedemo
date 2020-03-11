<template>
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
import markdownmd from '../../assets/doc/markdownusing.md'
export default {
    name: 'markdown',
    data() {
        return {

        };
    },
    mounted: function(){

    
    },
    components:{
    //3.exportmarkdown
    markdownmd,
    }
}
</script>

<style scoped>

</style>