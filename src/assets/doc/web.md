想看懂一个网站，但是发现所涉及到的知识点有点多，一两本书，学了某一方面的语法还是看不懂一个网站，就找了一些资料为自己扫扫盲，先了解下各个部分技术的联系，再深入各个部分学习语法，最后去看懂网站。
# HTML5
1.前端人员指责定位
策划:方案->美工:设计图->前端：静态网页->后台：获取数据（替换占位符）
2.web服务器（后台程序，监听着客户端服务）
* 主要web服务器产品：TOMCAT IIS APACHE（Httpd） 存储Web上内容信息，响应浏览器请求，安全功能等
* Apache:软件基金会，最常见的web服务器（商业）：Apache Httpd(可靠性高，速度快)
* 查看系统打开的端口号（一个ip地址的计算机下每个服务对应一个端口号，一台共拥有65535个端口）确定服务是否启动，默认服务器占用80端口号
```
net start Apache2.2
netstat -and (statistic)
```
* 使用浏览器访问httpd服务
```
http://127.0.0.1（为当前计算机ip）
```
*将网页放到web服务器可识别的路径
```
htdocs
```
默认首页:index.html
3.服务器端技术与客户端技术
服务器端技术（运行在服务器上）：JSP,PHP,ASPX
客户端技术（运行在浏览器上）：HTML,CSS,JS,SWF
# CSS
1.撰稿人——负责内容(content)
   排版人——负责表现(presentation)
样式：字体、前景色、背景色、背景图、间距、边框
HTML4.0将内容和表现混杂在一起，因此XHTML1.0废除了很多标签和属性，使用css来描述页面样式
过渡板：使用严格的xml语法，允许使用废弃的样式相关标签和属性
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0
Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
（定义了具体规则）
```
2.Cascade Style Sheet 级联样式单（单独写的纸，单子）
内联样式（inline)(只对当前元素有效)
```
 <div style=""></div>   
```
内部样式（inner）(对当前页面)
```
<head><style type="text/css"> </style></head>
```
外部样式（outer）:创建一个独立的css文件*（对所有引用它的页面都有效，可用于控制全站的风格）
```
<head>
      <link ref="stylesheet" type="text/css" href="x.css"/>
</head>
```
 css样式优先级
！important>内联样式>内部/外部样式>浏览器预定义样式
# javascript
* 前端三大基础知识
HTML:专门编写网页内容
CSS:专门设计网页样式
javascripy:专门设计网页交互
* javascript
专门设计网页交互的语言
运行在javascript解释器中
”解释“执行
互联网第一大语言
* 标准
W3C：专门制定通信标准 
 * 核心ECMAScript:JavaScript核心语法
 * 文档对象模型DOM(Document Object Model)标准：专门操作 HTML元素，CSS样式，事件的统一标准（一套代码，多个浏览器）
 * 浏览器对象模型BOM(Browser Object Model)：专门操作浏览器窗口的工具（没标准，由浏览器厂商自行实现）
JavaScript=ECMAScript+DOM+BOM
* 典型用途
1.客户端数据计算（在浏览器中进行，不用发给服务器）
2.客户端表单验证
3.动画
* 如何使用
 * 使用浏览器自带的js解释器：（区分大小写）
     F12->控制台 （shift+回车=换行）
 * 单独安装专门解释器软件：node.js （Chrome V8引擎做的）
win+r->cmd->node
退出：两次ctrl+c
执行：1）cd到.js文件所在路径
           2）node 文件名
.js专门保存js脚本文件
 * 随网页一同运行
浏览器包含两种工具：
排版引擎：专门加载HTML内容和CSS样式
解释引擎：专门运行js脚本
```
   <script>
     script 脚本块（js语法）
   </script>
```

 * 一次定义处处使用，一次修改处处生效
解决：凡是看到重复使用的代码块，都要封装成一个方法
方法：执行一个专门功能的一组代码的序列
```
<head>
    <meta charest="utf-8">
    <script>
         function cook()
        {
        }
    </script>
</head>
```
使用
```
<button onclick="cook()">
alert
</button>
```
脚本块中的错误，仅影响当前脚本块中出错位置之后的脚本执行，不影响脚本块外的元素加载或脚本块执行
* 页面内部脚本块问题：仅当前页面可用
解决：外部.js文件
```
<script src="1_index.js"></script> (属性带了src，内部代码自动失效)
```
* 注释（注释也占网页流量，生产环境必须去掉）
HTML:<!---->
CSS:/* */
JS:// 单行  /*多行注释*/
* 语句，脚本块，程序
语句：让程序可以做一件事的一行命令
脚本块：多行语句的序列
程序：让计算机模拟人类的想法
# dom 编程
* DHTML
DHTML=HTML+CSS+JavaScript
DHTML就是将已经存在的三项技术整合起来进行组合应用，使JavaScript来“增删改查“HTML元素和CSS样式，最终使得页面呈现一个更友好的交互效果
* DHTML对象
 * BOM（用来访问和操纵浏览器窗口）：window,history,location,document,screen,event,navigator
用于javascript脚本与浏览器进行交互
 * DOM（用来操作文档）:
HTML页面中的每个元素都被JavaScript理解为一个DOM对象
用于javascript脚本与当前显示HTML文档进行交互
*DOM概述
文档中所有节点组成了一个文档树（或节点树），document对象是一棵文档树的根
* 例子
```
<script>
    var node0=document;
    var node1=document.firstchild;
</script>
```
# 服务器开发
HTML/CSS/JS/Flash/AS3/GIF/JPG存储于服务器，供客户端申请下载，但服务器看来这些数据只是普通的字符、字节文件而已
有些服务器自己没有图形界面，仅仅提供服务
* 服务器技术：
存储于服务器，供客户端进行请求，但在返回客户端之前，其中代码会在会在服务器端获得执行，执行后的结果是纯的客户端技术（静态）数据，发送给客户端
* 服务器：网络环境中的高性能计算机
 * 静态Web服务器：只能提供静态资源，读取数据发送
 * 动态Web服务器：即能提供静态资源，也能提供动态资源，可以对资源进行处理
有时候会搭两个服务器，一个静态一个动态，静态较快
* 动态服务器技术
JSP/PHP/ASPX,ASP.NET
* PHP
 * 服务器端搭建PHP运行环境（Personal Home Page->Hypertext Preprocess）
 * 特点：开源，简单，跨平台，占用资源少，适合中小型应用，学习可以使用官方手册（LAMP架构Linux+Apache+MySQL+PHP）
 * PHP解释器一般嵌入在某种WEB服务器中（Httpd,IIS）
 * 搭建PHP服务器环境：
1）下载安装一款静态Web服务器，如HTTPD,IIS
2)  下载安装PHP引擎
3）在静态服务器配置，声明PHP引擎的存在
注：上述三步可以使用PHP服务器套件完成（例如XMPP）
例：
```
//由客户端（浏览器）执行
<script>
    for (var i=0;i<50;i++){
    document.write('*');
    document.write('<hr/>');
    }
</script>
```
```
//通过.PHP启动PHP引擎(提示需要服务器端调用动态资源)，服务器端执行完后直接将结果给客户端
<?php
    for($i=0; $i<50;i++){
    echo '*';
    }
    echo '<hr/>';
?>
```
* JSP
 * java分为三个版本
    JavaME    MicroEdirtion    用于嵌入式应用（已经没有了，原来塞班可以运行java小游戏）
    JavaSE    StandardEdition    用于桌面应用（word,qq）
    JavaEE    EnterpriseEdition    用于企业级应用
 * 特点：跨平台、功能丰富、开发社区和第三方框架/插件繁多，适合中大型企业级应用（开发周期长，经费多，团队型）搭建平台复杂   
(Linux+Tomcat+MySQL+Java 免费)
(Unix+Websphere+Orcle/DB2+java 收费，提供技术支持)
 * 服务器端搭建JSP运行环境
1)下载并安装JDK(JavaDevelopmentKit)(Java版本就是JDK版本)=编译器+虚拟机+类库
2)配置操作系统的环境变量PATH（需要运行可执行程序）
3)加载并安装一款JSP服务器，如Apache Tomcat,JBoss,Websphere,Weblogic
4)启动JSP服务器即可，在特定的目录下放置jsp网页
 * 例JSP动态网页
tomcat不能直接放在根目录下，JSP网页保存在TOMCAT_HOME/webapps
```
//主体仍然是HTML标签
<%@ page language="java" contentType="text/html" pageEncoding="UTF-8" %>//JSP加入简单声明
<% 
out.print("hello"); //类似console.log()向客户端输出
%>//动态代码
```
* c#
c#语言的编译和运行需要.NET Framework（先编译成虚拟机即.net框架中的中间件，再在cpu运行）来完成，限于微软的战略，目前只能运行于windos系统（中大型一般不用windos），最纯的面向对象的语言，可用于企业级应用、桌面应用、Web应用
 * 服务器端搭建ASP.NET运行环境
1)启用操作系统中的IIS Web 服务器（windos自带）
2)安装.NET Framework——c#语言编译和运行环境
3）启动IIS服务器（外围网发布服务），编写的网页默认放在C:\inetpub\wwwroot下（保证80端口未被占用）
4）网站->新添网站
 * 例：
```
//另存为.aspx（本质是HTML网页）
<%@ page language="C#" contentType="text/html" pageEncoding="gbk" %>//JSP加入简单声明
<% 
Response.Write("8888"); //嵌入的C#语法的语句
%>//动态代码
```
# Jquery
* 对javascript进行进一步的封装（js库）
可以模拟Jquery的常用操作，对自己的JS库进行封装
* Jquery
 * 选择器的封装（选取希望应用效果的元素）
 * 操作方法（对属性或者样式或者其他进行操作）
 * 动画（简单动画，复杂得自己写，利用现有库）
* Jquery插件
为提高效率，使用现有插件进行调用（例如ztree树形插件，zqgreed操作表格）
# ajax
* 提升用户体验（打开网站速度，重复填写注册信息）
* Asynchronous JavaScript and Xml (异步的JavaScript和Xml)
 * 同步：做多件事只能一件一件做（要么与客户端交互要么与服务器交互，服务器返回完整html页面代码）
 *异步：同一时间段可以做多件事情，服务器返回部分数据，而不是一个完整的页面（html代码），以页面无刷新的效果更改页面中的局部内容
 * 实质是使用异步地Javascript对象XMLHttpRequest对象异步地向服务器发送请求
 * 例如验证用户名是否存在，如果同步，服务器返回完整页面，若用户名已存在，之前填的其他信息也都失效，需要重新填写
 * 回调函数（事件处理函数）判断响应的信息处于什么状态，放到什么函数处理(用的也是XMLHttpReques)
* 适用对象,判断用户使用的浏览器类型编写代码调用XMLHttpRequest
 * IE 5及以下不支持XMLHttpReques
 * IE 5.5 ,6：ActiveXObject("Microsoft.XMLHttp") 
 * IE7,8,9..Chrome,FireFox:  new XMLHttpRequest()
```
if(window.XMLHttpRequest){
//该浏览器支持XMLHttpRequest可以直接new XMLHttpRequest()
}else{
//创建ActiveXObject("Microsoft.XMLHttp") 
}
```
# Bootstrap
* 框架：开发过程中的半成品（例如考试时候在填空题里填答案即可），程序中重复工作可省去，提高开发效率
* IDE:可视化集成集成开发环境(测试集成运行一体)，不同公司不同行业
* GIT:分布式（多服务器，客户端借助一台服务器做交换，但服务器是谁无所谓）版本控制工具（集中式管理：cvs,svn,vss），防止所写代码丢失，通过服务器集中管理
* 推荐:Editplus,Aptana,WebMetric
常见：Dreamweaver,WebStorm,MyEclipse,Visual Studio
编码格式： ISO-8859-1,utf-8
* Bootstrap（Github热门开源项目）
简洁直观强悍的前端开发框架，所有主流浏览器都支持Bootstrap（好的帮助文档Bootstrap3中文文档（v3.3.4））,移动设备优先，由动态CSS语言Less写成
HTML+CSS+JS脚本，搭好组件，插件可以调用，也可以定制
* 需要先加载完Jquery
* 使用
 * 解压bootstrap到根目录（css,font,js）(预编译版本，已编译好执行速度较快)
 * 加入语句调用 
```
 <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
 <link rel="stylesheet" href="styles/site.css">//若与用户自定义样式冲突或重复定义则由下面覆盖
```

