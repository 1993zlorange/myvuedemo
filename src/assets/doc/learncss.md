# 使用
* 使用外部CSS
```
<link href="css/styles.css"     type="text/css"    rel="stylesheet"    / >//stylesheet是引用的风格描述
type: 页面所链接文档的类型
rel:HTML页面与被链接文件的关系
```
* 使用内部CSS
```
<style    type="text/css">
body{
    front-family:arial;
    background-color:rgb(185,179,175);}
h1{
    color:rgb(255,255,255);}
```
* 只应用一个元素
```
<p    style="color:red;">
```
# CSS选择器
```
通用选择器：*{    }
类型选择器：h1,h2,h3{    }
类选择器：.note{    }//应用于所有class特性值为note元素
                p.note{    }//只应用于class特性值为note的<p>元素
ID选择器：#introduction{    }
子元素选择器（直接子元素）li>a{    }//所有父元素为<li>的<a>元素
后代选择器(无论有没有嵌套其他元素)p a{    }
相邻兄弟选择器    h1+p{    }应用于h1元素之后的第一个<p>元素
普通兄弟选择器（不论元素是不是与它的兄弟元素相邻）h1~p{    }
```
# CSS规则级联
* 就近原则
如两个选择器完全相同，则后出现的选择器优先级较高
* 具体性原则
如果一个选择器比其他选择器更加具体，那么具体的选择器优于一般选择器
```
h1比*具体，p b比p具体
```
* 重要性
在任何属性值后添加！important
```
p b{    color:    blue    !important; }
p b:选择器
color:属性
blue:值
color:    blue ：声明
```
# 继承
如果在<body>元素上指定了front-family属性或color属性，那么它们将应用于<body>元素的大多子元素上
```
body{
    front-family:    Arial,Verdanna,Sans-serif;
    color:    #665544;
    padding:    10px;
}
```
* 将属性值设为inherit来强制大多元素从它的父元素中继承属性值
# 颜色
前景色
```
RGB值：P{color:    rgb(100,100,90); }
十六进制编码： h2{color:    #ee3e80}
颜色名称    h1{color:    DarkCyan}
```
背景色
```
body{background-color:    rgb(200,200,200); }
```
透明度
```
opacity:0.5;
或
background-color:rgb(0,0,0,0.5);
```
HSL颜色
```
background-color:hsl(0,0%,78%);
色调：0度-360度之间的一个角度表示（色环）
饱和度：0-100度
明度：0% 表示黑色，100%表示白色
```
# 文本
字体选用
```
font-family:Georgia,Times,Serif;
```
字体大小
```
font-size:12px;
font-size:200%;(系统默认16px,则75%=12px,200%=32px)
font-size:1.3em;(1em=1个字母m的宽度)
```
选用更多字体
```
@font-face{
    font-family:'ChunkFiveRegular';
    Src:    url('fonts/chunkfive.eot');}
//开源字体网站
www.fontsquirrel.com
www.fontex.org
www.openfontlibrary.org
```
粗体，斜体，大写和小写
```
粗体：.credits{font-weight:    bold;}
斜体：.credits{font-style:    italics;}
大写和小写：h1{text-transform:uppercase;}
                     h2{text-transform:lowercase;}
                    .credits{text-transform:capitalize;}
//.credits:class的特性值
    text-transform:属性
    capitalize:首字母大写
```
下划线和删除线
```
.credits{text-decoration:underline;}//下划线
a{text-decoration:none;}//装饰线删除
overline:顶部实线
line-through:实线穿过文字
```
行间距
```
p{line-height:    1.4em;}
```
字母间距和单词间距
```
h1,h2{
text-transform:uppercase;
letter-spacing:0.2em;//字母间距
}
.credits{
     font-weight:bold;
    world-spacing:1em;}//单词间距
```
对齐方式
text-align
```
属性值
left
right
center
justify:两端对齐（宽度上占满文本所在容器）
```
垂直对齐
 vertical-align
```
属性值
baseline,sub,super,
top,text-top,middle,
bottom,text-bottom,
```
文本缩进
```
.credits{text-indent:20px;}
```
投影
```
p.one{
（背景色）backgtound-color:#eeeeee;
（字体色）color:#666666;
（投影）text-shadow:1px（阴影向上下延伸）2px（阴影向左右延伸） 0px（投影模糊程度）#000000(投影颜色值);}
```
首字母或首行文本
```
p.intro:first-letter{font-size:200%}
p.intro:first-line{font-weight:bold;}
```
> first-letter、first-line为伪元素（为首字母和首行文本添加了额外的元素，并在此元素上应用专门的样式）
链接样式
```
link ：伪类允许为尚未访问过的链接设置样式
visited:允许为哪些已单击过的链接设置样式
hover,active:用于光标在链接上悬停时以及用户单击链接时，改变链接的外观
hover:悬停    active:元素进行操作    focus:元素拥有焦点时生效
```
特征选择
```
existence(简单选择器)    p[class]
equality(精确选择器)    p[class="dog"]    特性具有特定值
space(部分选择器)    p[class="dog"]    特性值是以空格隔开的单词列表
prefix(开头选择器)    p[attr ^ "d"]    特性值以字母“d”开头
substring(包含选择器)    p[attr * "do"]    特性值含有“do”
suffix(结尾选择器)    p[attr $ "g"]    特性值以字母“g”结尾
```
# 盒子
盒子的大小
```
div.box{
height:300px
width:400px
background-color:#ee3e80;}
```
宽度限制（避免较大或较小的浏览器影响观看页面）
```
td.description{
min-width:450px;
max-width:650px;
text-aligh:left;
padding:5px;
margin:0px;}
```
内容溢出（超过盒子本身如何显示）
```
overflow:hidden;(溢出盒子内容隐藏)
overflow:scroll(溢出盒子内容通过滚动滑块查看)
```
边框、外边距、内边距(Borer,Margin,Padding)
```
border-width:2px;
border-width:thick;
botder-width: 1px 4px 12px 4px;
```
边距样式 border-style
```
solid:实线    dotted:一串方形点    dashed:一条虚线
double:两条实线    groove:雕入页面    ridge:页面上凸起
inset:嵌入页面    outset：凸出屏幕    hidden/none:不现实任何边框
//单独设置
border-top-style    border-left-style
border-right-style    border-bottom-style
```
边框颜色
```
border-color:#bbbaa    #111111;
//单独设置
border-top-color    border-left-color
border-right-color    border-bottom-color
```
内边距
```
padding:10px;
```
外边距（盒子之间空隙）
```
margin:20px;
//指定个方向上边距
margin-top    margin-right
margin-bottom    margin-left
```
内容居中
···
p{width:300px}
p.example{margin:10px auto 10px auto;}
···
内联元素与块级元素的转换
```
display：
inline:块级->内联
block:内联->块级
```
隐藏
```
display:none;//隐藏，不占原来空间
visibility:hidden;//隐藏，占原来空间
```
# 列表、表格、表单
项目符号样式：list-style-type
```
无序列表 
none disc circle square
有序列表 
1、2、3：decimal
01、02、03：decimal-leading-zero
a、b、c：lower-alpha   
A、B、C：upper-alpha
lower-roman
upper-roman
```
项目图像
```
list-style-image:url("images/star.png");
```
标记定位
```
list-style-position:outside/inside;
```
空单元格的边框
```
table.one{empty-cells:show/hide;}
```
单元格之间的空隙
```
border-spacing: 5px 15px;
避免边框宽度重合：
border-collapse:collapse;(separate:spacing 生效)
```
定义单行文本框样式
```
input # email{
background-image:url("images/email.png");}
```
表单控件对齐解决方案
```
title{
float:left;    text-align:right;
width:100px;    padding-right:10px;}
```

疑问：布局怎么随浏览器变化
 通过什么来分块，块的位置
# position
```
#navigation2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
}
```
相对位置
float：往一个地方挤（列表挤成横向）
```
#navigation {
    float: left;
    width: 200px;
}
```
图片？边框图片？