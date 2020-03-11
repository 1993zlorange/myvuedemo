<template>
    <!-- <div style= "width:450px;height:220px;"> -->
        <el-container direction='vertical' > 
            <el-main >
                <!-- 工具部分 -->
                <h>向后端发送axios请求并接收数据，在view里把数据放在控件或者在mounted里写加载数据到图表，这里读取了后端5000端口传来的json数据</h>
                <ul>
                    <!-- 此处的key适用于提高VDOM比较差异时的性能的。 -->
                    <li v-for="(item, index) in list" :key="index">{{item.name}}</li>            
                </ul>
                <!-- </div> -->
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
import markdownmd from '../../assets/doc/axiosusing.md'

export default {
    name: 'axiostest',
    data() {
        return {
            list: []
        };
    },
    mounted: function(){
        var url = 'http://localhost:5000/';
        this.$api.get(url, {
        }, response => {
            if (response.status >= 200 && response.status < 300) {
                // 请求成功，response为成功信息参数
                 this.list = response.data;
                console.log(response.data);
            } else {
                //请求失败，response为失败信息
                console.log(response.message);
            }
        });
    },
    components:{
        //3.exportmarkdown
        markdownmd
    }
}
</script>

<style scoped>

</style>