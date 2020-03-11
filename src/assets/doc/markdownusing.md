>在网页中嵌入markdown
# 第一种方法
```
npm install html-loader markdown-loader -S
```
webpack.base.conf.js 中添加 rules 规则
```
{ test: /\.md$/, use: [ { loader: 'html-loader' }, { loader: 'markdown-loader', options: {} } ] }
```
```
  data() {
        return {
            htmlMD: []
        };
    },
    mounted:function(){
this.htmlMD = require('../../assets/doc/echart.md');
     }

```
# 第二种方法
## 下载
markdown插件
```
npm i vue-markdown-loader@0 -D

```
markdown样式表
```
npm install --save github-markdown-css 

```
代码高亮及行号的依赖
```
npm install --save highlightjs-line-numbers.js

```
## 配置
在 webpack.base.config.js 文件里添加：
```
{
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          preprocess: function (MarkdownIt, Source) {
            MarkdownIt.renderer.rules.table_open = function () {
              return '<div class="table-container"><table class="table">';
            };
            MarkdownIt.renderer.rules.table_close = function () {
              return '</table></div>';
            };
            return Source;
          }
        }
 }

```
## 引用页面
* app.vue页面中
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
把之前的 id = "app" 改成 class = "markdown-body" 以匹配样式表
* index.html中添加样式
```
 <script src="//cdn.bootcss.com/highlight.js/9.11.0/highlight.min.js"></script>
 <script>hljs.initHighlightingOnLoad();</script>
 <script src="//cdn.bootcss.com/highlightjs-line-numbers.js/1.1.0/highlightjs-line-numbers.min.js"></script>
 <script>hljs.initLineNumbersOnLoad();</script>
 //行内数学公式
 <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML" type="text/javascript"></script>
```
* 在需要的vue页面中引入
js中引入
```
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import markdownmd from '../../assets/doc/echart.md'//

```
export中添加component
```
    components:{
        markdownmd
    }
```
在template中引入(通过js文件定义了markdownmd模块的样式)
```
<markdownmd ></markdownmd>
```

# 高亮的另一个方法(不用远程调用js)
在main.js中加入（自定义highlight指令）
```
import VueHighlightJS from 'highlight.js';
Vue.use(VueHighlightJS)
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    VueHighlightJS.highlightBlock(block)
  })
})
```
* 在引用的vue页面
script中
```
import markdownmd from '../../assets/doc/echart.md'
```
template中在markdown模块引用指令（markdown模块还是需要方法二中的vue-markdown-loader）
```
<markdownmd v-highlight></markdownmd>
```