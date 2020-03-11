<template>
    <!-- <div style= "width:450px;height:220px;"> -->
        <el-container direction='vertical' > 
            <el-main >
                <!-- 工具部分 -->
                <h4>向后端发送ajax请求并接收数据，在view里把数据放在控件或者在mounted里写加载数据到图表</h4>
                    <ul>
                        <!-- 此处的key适用于提高VDOM比较差异时的性能的。 -->
                        <li v-for="(item, index) in list" :key="index">{{item.name}}</li>            
                    </ul>
           </el-main>
            <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
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
import markdownmd from '../../assets/doc/ajax.md'
export default {
    name: 'Detail',
    data() {
        return {
            list: [],

        };
    },
    mounted: function(){
        // 发送ajax请求
        var url = 'http://localhost:5000/';
        this.$http.get(url).then(function(data){
            console.log(data.body);
            this.list = data.body;
        })
    },
    components:{
    //3.exportmarkdown
    markdownmd
    }
}
</script>

<style scoped>

</style>