MVVM模型，Vue指令，组件，路由，Vue cil脚手架&webpack
# 概述
vue.js是UI层的渐进式框架
* 优势
 * 提高代码复用率
 * 降低模块之间耦合度（机器分为一个一个组件）
 * 提高开发速度
 * 提高代码质量
* 为什么使用
 * 收到Angular框架启发
 * 比Angular简单（只会简单的HTML、CSS、JS即可）
 * 性能高
 * 基于组件（web component）开发
# MV*模型
single page application(在一个DOM里来回写，网页退回数据还在),需要更新的交互模式
直接操作DOM模式（JQUERY，Zepto.JS不支持IE在手机使用）-MVC(REACT)-MVP-MVVM
* MVC
 * Module:用于存放数据（Data）
 * View: 用于更新DOM
 * Controller:调用Module给View渲染使用（规则）
不COPYPASTE代码，DATA固定，不同的View,不同的Controller（一个M,一个V，决定一个C），不允许改代码的情况下复用（开闭原则）
* MVP
 * Module
 * View
 * Presenter（多了和View的交互）
1.Module 改变，修改DOM
2.View响应用户交互时，通知Presenter,Presenter负责更新Module,以及修改DOM
* MVVM
 * Module
 * View
 * ViewModel：自动化调用的Presenter
# 开发环境
> 不用Dream,纯切图才会用
# VScode,HbuilderX(open in browser插件)
node.js:js的虚拟机（把V8引擎挪到浏览器之外的地方）
通过高权限
# vue
## 离线安装vue.js

## 开发文档
https://cn.vuejs.org/
 * 后端路由(创建数据地址)
在app.js中进行路由修改shop(将地址与js文件相连接)
```
var shopRouter = require('./routes/shop')

app.use('/shop',shopRouter);
```
在routes里创建shop.js，将数据拷入
 * 服务器返回JSON数据
```
res.json( productList);
```
* 启动
```
//同127.0.0.1
http://localhost:3000/
```
# Dom
* Document Objective Model文档对象模型
* 定义了访问HTML、XML文档的标准，中立于平台和语言的接口，允许程序和脚本动态地访问和更新文档的内容、结构、样式
* HTML DOM是关于如何获取、修改、添加或删除HTML元素的标准
* DOM将HTML文档表达为树结构
* 修改HTML DOM
 * 改变HTML内容
 * 改变CSS样式
 * 改变HTML属性
 * 创建新的HTML元素
 * 删除已有的HTML元素
 * 改变事件（处理程序）

https://cn.vuejs.org/v2/guide/installation.html
* vue安装
1.安装node.js
 https://nodejs.org/en/ (LTS:最新的稳定版)
2.安装git(设置PATH)
https://git-scm.com/download/win/
3.安装bower:(包安装管理)
```
移到文件夹
npm install bower -g bower -v//-g:安装到宏观位置
```
```
//安装国内镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
3.安装vue
```
bower install vue(用bower info vue查看版本)
```
安装其他也一样，例如安装jquery
```
bower install jquery
```


引包（在目录下生成vue等框架文件）
```
explorer vue
```
# 使用
* 在 head 里
```
<!-- 引入vue.js-->
<script src="./js/vue.js"></script>
<script>
    //Module(jason)
    var m={
        word:'Hello'
    };
    //ViewModel(control)
    var vm = new Vue({
            el: '#app',//挂载点（选择器寻找挂载点）
            data: m
    });
</script>
```

* body里
```
<!-- View -->
<div id="app">
    <h3>{{word}}</h3>
</div>
```
先引库，拿到script，发现挂载点，试图挂在script,(看到通常标签交给dom，看到script标签交给script引擎，自己挂起，向后运行，若script引擎速度慢于dom，则挂载点无法识别就进入了下一阶段代码)
```
将<script>部分放在body内容的紧底部
```
源内容先加载，View的部分再启动将源部分替换掉
不操作dom，通过修改数据,或者修改view(时间)，相应做出变化

# 部署
生成dist目录

* 生产版本的编译
```
ng build//普通编译
ng build -- prod//到生产版本（distribution），编译后更小，少了源码的东西（混码）
```
将dist目录下的文件copy到云服务器的指定目录下
> chunk:lazy loding 代替webpack
部署到服务器后台
* 简单的部署（没用到数据库）
  * 可直接部署到github
  * ng build --prod --base-href /folder_name/
* 运行环境的难点 
 * 数据库问题，本地与云两个概念
 * 云域名备案、数据库安装
# PM2
避免小黑框关闭，就无法提供服务
PM2是Node.js 进程管理工具，自动重启（PM2），通过npm安装
```
sudo npm --registry=https://registry.npm.taobao.org install pm2 -g
```
* 使用
```
pm2 start node.js
```
# NGINX配置
NGINX:端口反向代理（外网访问80,端口代理,端口映射）
* 安装（下载解压完放在一个地方）
http://nginx.org
* nginx配置
修改配置文件：{path}\conf\nginx.conf   
在http{}里添加：
```
server (
    listen 80
    server_name 127.0.0.1 localhost;//127.0.0.1就是localhost

    location/{
        root X:/apps/path;
        index index.html;
        try_files $uri $uri/ /index.html;
                }
    }
```
* 重启
```
sudo /usr/local/nginx/sbin/nginx -s reload
```
* 浏览器可以正常访问
# 指令
> 实现JS与HTML分离，原来写在后台的代码可以通过指令放在前端
mvvm例子：
```
   <!-- View -->
    <div id="app">
        <input type="button" value="按钮1" v-on:click="show"/>
        <input type="button" value="按钮2" @click="show()"/>
        <!-- 1. 用 @ 来代替 v-on -->
        <!-- 2. 不传递参数时，可以省略括号 -->
        <h3>{{word}}</h3>
    </div>
    <script>
        // Module
        var m = {
            word: 'Hello, World! I am Vue'
        };

        // ViewModel
        var vm = new Vue({
            el: '#app', // 挂载点。
            data: m, // 数据
            // 方法
            methods: {
                // show(x){
                show: function(){
                    console.log('Hello, I am here!');

                    this.word = 'Changed by XXX';
                }
            }
        });
    </script>
```
## 条件渲染
* v-if
根据表达式的true/false来删除或添加元素
```
<p v-ifi="num>5" hello</p>
```
* v-show
根据表达式的true/false来显示或隐藏元素（与v-if不同的是不会从dom上删除元素）
true:display:block
false:display:none
* v-else
指令必须跟一个v-if或v-show元素后否则不能被识别
## 列表渲染
* v-for
代替<li></li>等
渲染数组
```
array=['1','2','3']
```
```
<li v-for="val in array">{{val}}<li>
```
```
<li v-for="(val,index) in array">val={{val}};index={{index}}</li>
```
渲染json
```
json:{
first:'1',
second:'2'
}
```
```
<li v-for="val in json">{{val}}</li>
```
```
<li v-for="(val,key) in json">val={{val}},key={{key}}</li>
```
## 表单与v_model
数据绑定方式
* view触发一个事件，事件调用函数，用函数来改data
* 控件与model直接绑定
input与model控件双向绑定(控件和后台可以同时修改)
```
<input type="text"  vmodel="myValue">
```
## 用指令实现一个留言板
vue配合bootstrap框架，jquery
首先写静态页，再绑定数据
```
    <script src="./bower_components/vue/dist/vue.js"></script>
    <link rel="stylesheet" href="./bower_components/bootstrap/dist/css/bootstrap.min.css">
    <script src="./bower_components/jquery/dist/jquery.js"></script>
    <script src="./bower_components/bootstrap/dist/js/bootstrap.js"></script>
```
表格
```
<table>
# 表头
    <thead>
        <tr>
            <th></th>
           <th></th>
        </tr>
    <.thead>
    <tbody>
        <tr>
            <td></td>
           <td></td>
        </tr>

    </tbody>
</table>
```
空间绑定动态数据例子
```
<table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th class="text-center">ID</th>
                    <th class="text-center">用户名</th>
                    <th class="text-center">备注</th>
                    <th class="text-center">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-show="usersList.length==0">
                    <td colspan="4" class="text-center text-danger">
                        暂时没有数据。。。
                    </td>
                </tr>
                <tr class="text-center" v-for="(item, index) in usersList">
                    <td>{{index+1}}</td>
                    <td>{{item.username}}</td>
                    <td>{{item.comment}}</td>
                    <td>
                        <input type="button" class="btn btn-warning btn-sm" value="删除">
                    </td>
                </tr>
            </tbody>
        </table>

```
```
# 数据由vue的js来提供,
    <script>
        // 1. 需要用户名，备注，缓存的数组。
        // 2. username，comment绑定到input控件
        // 3. 通过v-show来控制“暂时没有数据”的显示
        // 4. 将usersList的内容用v-for循环显示
        var m = {
            username: '',
            comment: '',
            // usersList: []
            usersList: [
                {
                    username: '隔壁王校长',
                    comment: '我要学Vue.js'
                },
                {
                    username: '隔壁李校长',
                    comment: '我要学React'
                }
            ]
        };

        var vm = new Vue({
            el: '.container',
            data: m,
            methods: {

            }
        });
    </script>
```
事件响应
```
<input type="button" value="添加" class="btn btn-primary" @click="adduser">
```
```
        var vm = new Vue({
            el: '.container',
            data: m,
            methods: {
                adduser:funtion(){
                    if(this.username !=' '){
                        this.userList.push({
                            username: this.username,
                            comment:this.comment
                          })
                        this.username=' ';
                        this.username=' ';
                    }
                }
            }
        });
```
## v-bind
连接属性
src
```
<img v-bind:src="imgurl">
<img :src="imgurl"># 可简写
```
class
```
<div :class="divClassStr"></div>
```
```
#js 是弱类型，通过变量本身无法判断什么类型
# 当作字符串控制
divClassStr='red';
if(this.divClassStr.indexof('hasBorder')<0){
    this.divClassStr =this.divClassStr+' hasBorder';
}
# 当作数组控制
divClassArray=['red'];
if(this.divClassArray.indexof('hasBorder')<0){
    this.divClassArray =this.divClassArray+' hasBorder';
}
# 当作json控制
//view视图
   <div :class="{red:isred,hasBorder:hasBorder}"></div>
//model数据
 var m={
    isRed:true,
    hasBorder:false
};
//vm控制函数
func:function(){
  this.hasBorder =true;}

```
style
字符串
```
//view
<div class="red" :style=borderStylestr"></div>
//model
borderStylestr=' '
//vm
this.borderStylestr='5px solid #000 '
```
json
```
//view(负责将json转化成字符串)
<div class="red" :style={borderWidth:borderWidthStr,borderStyle:borderStyle}"></div>//v-bind定义了将json绑定style，写的是object，不允许出现-，用小驼峰代替自动转换
//model
var m={
borderWidth=' ',
borderStyle=' '
};
```
## 事件
v-on:事件=“ 函数”
v-on:事件=“ 函数”（$event）
> 事件并不一定在哪触发就在哪处理
event绑得越多程序就臃肿
将事件放在顶层，获取下级js事件对其进行操作

* 冒泡（运行下级事件对应函数）
```
        <div @click="func($event)">
            <input type="button" value="按钮1">
            <input type="button" value="按钮2">
            <input type="button" value="按钮3">
        </div> 
```
```
 func: function(event){
console.log(event, event.target);
console.log('冒泡中。。。');
```
* 冒泡停止（避免一层层向上冒泡）
```
<div @click="func2">
            <div @click.stop="func($event)">
                <input type="button" value="按钮1">
                <input type="button" value="按钮2">
                <input type="button" value="按钮3">
 </div> -->
```
* prevent
让缺省的行为不实施
```
 <a href="http://www.baidu.com" @click.prevent="func3">百度</a>

func3: function(){
 alert('去百度啦，不想让他去！');
}
```
* stop
* 13,enter
```
<input type="text" @keyup.enter="func" />
```
按下回车才相应
* left,right,middle(vue2.2.0以上)
鼠标按哪个键
* once
只触发一次
* ctrl,shift,alt
有ctrl,shift,alt才会触发
##v-model
* v-model.lazy
只有在回车或者onblur时改动（结束或者失去角点时再递交给dom,不想频繁骚扰）
* v-model.numer
只能输入数据
* v-model.trim
去除前后空格
## 自定义指令
vue封装不用触碰dom，自定义的话需要碰dom
第一次调用的是binding,后面调用的是update
```
<h1 v-gebilaowang="count"></h1>
```
```
#v-后面的自定义名称
hook钩子类似于event
directives:{
    change：{
            bind:function(el,bindings){//绑定好后可以操作element
# 指令实现
                        if(bindings.value > 0){
                            el.setAttribute('style', 'display: block');
                        }else{
                            el.setAttribute('style', 'display: none');
                        }

            },
            update:function(el,bindings){
                        if(bindings.value > 0){
                            el.setAttribute('style', 'display: block');
                        }else{
                            el.setAttribute('style', 'display: none');

            },
            unbind:funtion()
        }
}
```
# 组件
网页先渲染html，再通过vue找dom
让html的占位符不被显示出来
```
    <style>
        [v-cloak] {
            display: none;
        }
    </style>
<div id="app" v-cloak>
</div>
```
过滤器filter格式化输出（泛化的函数）
```
<h4>{{price | myCurrency('$')}}</h4>
           filters: {
                myCurrency: function(myInput, arg){//输入两个参数，返回格式化的值
                    console.log(myInput, arg);
                    var priceTmp = myInput / 100.0;
                    return arg + ' ' + priceTmp;
                },
            }
```
组件封装
基础元素构建更复杂的且可复用的代码单元
html标记不区分大小写
自己定义标签
```
        <my-component></my-component>
```
```

        Vue.component('my-component',{
# templat是一个object
            template: `
            <div>
                <div>
                    <h1>第一个组件</h1>
                    <h2>另一个组件</h2>
                </div>
                <div>
                    <h3>另一个组件</h3>
                </div>
            </div>`
        });
```
vue组件里也能按MVVM写法
```
Vue.component('my-component', {
            template: `
                <div>
                    <input type="button" @click="handleClick" value="ç‚¹å‡»" />
                    <h4>Hello {{count}}</h4>
                </div>
            `,
            data: function(){
                return {
                    count: 0
                }
            },
            methods: {
                handleClick: function(){
                    this.count++;
                }
            },
```
## 监听
data变化，view相应变化是通过监听watch来实现
监控变量
```
            watch: {
                myValue1: function(){
                    console.log('myValue1 is updated as ' + this.myValue1);
                },

                myValue2: function(){
                    console.log('myValue2 is updated as ' + this.myValue2);
                }

```
## 组件之间的通信
> 配置参数，外界传参数
```
<parent></parent>
```
```
       Vue.component('child', {
            template: `
                <div>
                    <p :id="p1">{{str}}</p>
                </div>
            `,
### 通过prop对象传参
            props: ['p1', 'str'],
            methods: {

            },
            mounted: function(){
                console.log(this.p1, this.str);
            }
        });

        Vue.component('parent', {
            template: `
                <div>
                    <child :p1="prtP1" :str="prtStr"></child>
                </div>
            `,
            data: function(){
                return {
                    prtP1: 'p456',
                    prtStr: 'abc' 
                }
            }
        });
```
### 子组件向父组件传递响应数据
 * 父组件建立相应函数
 * 父组件模板中绑定事件，事件调用事件响应函数
 * 在子组件中，触发事件
```
        // 子组件
        Vue.component('child', {
            template: `
                <div>
                    <input type="button" @click="sendData" value="点我发送信息">
                </div>
            `,
            methods: {
                sendData: function(){
                    this.$emit('myEvent', 'Hello World! I am Vue!');//触发事件
                }
            }
        });

        // 父组件
        Vue.component('parent',{
            template: `
                <div>
                    <child @myEvent="getData"></child>//绑定事件，事件调用响应函数
                    <hr />
                    <h4>现在的msg：{{msg}}</h4>
                </div>
            `,
            methods: {
                getData: function(msg){//建立响应函数
                    console.log('收到了来自子组件的信息：' + msg);
                    this.msg = msg;
                }
            },
            data: function(){
                return {
                    msg: ''
                };
            }
        });
```
### 通道
父组件访问子组件的数据（互相访问）
```
子到父
this.$parent,parentStr//带$符号不能随便定义，是有特殊意义的
```
```
父到子
```
        Vue.component('parent', {
            template: `
                <div>
                    <child ref="mySon"></child>
                    <input type="button" value="获得子组件信息" @click="getData">
                </div>
            `,
            data: function(){
                return {
                    parentStr: 'I am your father!'
                }
            },
            methods: {
                getData: function(){
                    console.log('获得子组件信息：' + this.$refs.mySon.childStr);
                }
            }
```
兄弟组件之间通信
通过建立公共的vue实例
接收方触发事件，发送方触发事件
任何函数在被调用以前会初始化this指向
```
var bridge = new Vue();
```
```
            methods: {
                sendData: function(){
                    bridge.$emit('OneToTwoEvent', 'Hello 2, I am 1');
                }
            },
            mounted: function(){
                var that = this;
                bridge.$on('TwoToOneEvent', function(msg){
                    console.log('收到来自2的：' + msg);
                    that.msg = msg;
                })
            }
```
```
            methods: {
                sendData: function(){
                    bridge.$emit('TwoToOneEvent', 'Hello 1, I am 2');
                }
            },
            mounted: function(){
                // 1. mounted被调用时，只是定义了回调函数，但是并没有运行
                // 2. 当child-1来触发事件时，引擎来调用回到函数，此时初始化回调函数中的this指向
                //    注意：此时this并不只想child-2对象，所以，this.msg找不到的
                // 3. 用闭包。
                var that = this;
                bridge.$on('OneToTwoEvent', function(msg){
                    console.log('收到来自1的：' + msg);
                    that.msg = msg;
                })
            }
```
# 路由
路由是设定URL和返回页面或者视图的对应关系，每个URL对应一个页面或者视图。
```
安装vue-router
```
以文件路径形式访问，ajax无法生效，需要http服务器调试ajax
```
安装live server//
```
```
npm install http-server -g
http-server <路径> -p <端口>
```
##  组件间路由跳转
```
    <script src="./bower_components/vue/dist/vue.js"></script>
    <script src="./bower_components/vue-router/dist/vue-router.js"></script>
```
根据路由响应来替代挂载点处的原router组件
```
<router-view></router-view>
```
配置路由字典
```
        const myRoutes = [
            {path: '', component: login},
            {path: '/login', component: login},
            {path: '/reg', component: reg},
        ];

        const myRouter = new VueRouter({
            routes: myRoutes
        });

        new Vue({
            el: '#app',
            router: myRouter
        });
```
不同组件间跳转（vue实现类似a标签）
```
        var login = Vue.component('login', {
            template: `
                <div class="base">
                    <h4>登陆的页面</h4>
                    <input type="button" value="去reg by button" @click="gotoReg" />
                    <router-link to="/reg">去reg</router-link>//类似a标签
                </div>
            `,
            methods: {
                gotoReg: function(){
                    this.$router.push('/reg');
                }
            }
        });
```
# 路由过程中参数传递
参数接收
```
       var myMain = Vue.component('my-main', {
            template: `
                <div class="base">
                    <h1>用户名：{{userName}}</h1>
                </div>
            `,
            data: function(){
                return {
                    userName: ''
                };
            },
            methods: {

            },
            mounted: function(){
                console.log(this.$route.params);
                this.userName = this.$route.params.userName;
            } 

        });

```
参数发送
```
var myLogin = Vue.component('my-login', {
            template: `
                <div class="base">
                    <input type="text" v-model="userName" />
                    <router-link :to="'/main/' + userName">去Main</router-link>
                </div>
            `,
            data: function(){
                return {
                    userName: ''
                };
            }
        });
```
配置vue中route表
```
        const myRoutes = [
            {path: '', component: myLogin},
            {path: '/login', component: myLogin},
            {path: '/main/:userName', component: myMain},
        ];
```
## 别名
```
{path: '/login', component: myLogin, alias: '/logon'}
```
## 重定向
```
{path: '/mylogin', redirect: '/login'}
```
## 异常
异常页
```
        var notFound = Vue.component('not-found', {
            template: `
                <div class="base">
                    <h4> 404 page Not Found </h4>
                    <router-link to="login">返回登录页</router-link>
                </div>
            `
        });
```
抛出异常页
```
{path: '*', component: notFound}
```
## 嵌套路由
component
```
        var myMain = Vue.component('my-main', {
            template: `
                <div class="base">
                    <h1>主页</h1>
                    <router-link to="/sub1">sub1</router-link>
                    <router-link to="/sub2">sub2</router-link>
                    <router-view></router-view>
                </div>
            `
        });
```
router
```
            {path: '/main', component: myMain,
                children: [
                    {path: '/sub1', component: mySub1},
                    {path: '/sub2', component: mySub2},
                ]
            },
```
# ajax
安装
```
vue-resource
```
引入
```
 src="./bower_components/vue-resource/dist/vue-resource.js"
```
在vue挂载的时候运行ajax，将得到的数据赋到列表中
```
            mounted: function(){
                // 发送ajax请求
                var url = 'http://127.0.0.1:5500/006/1.json';
                this.$http.get(url).then(function(data){
                    console.log(data.body);
                    this.list = data.body;
                })
```




