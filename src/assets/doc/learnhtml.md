# 基本结构
>HyperText Markup Language 超文本标记语言 
超文本：通过建立链接，使访问者简洁从一页面跳到另一页面
标记：对文本进行注释
```
<html>
    <head>    //有关这个页面的一些信息
        <title> This is the Title of the Page </title>
    </head>
    <body>
        <h1> This is the Body of the Page </h1>
        <p>    Anything within the body of a web page is displayed in the main broser window </p>
    </body>
```



# 文本
 >结构化标签：描述标题和段落
 语义化标签：表达特定含义（强调，引用，缩写词）

* 结构化标记

标题 
```   
<h1> This is a MainHeading </h1>
<h2>  This is Level 2 heading </h2>
```
段落
```
<p>    </p>
```
 粗体，斜体，上标，下标
```
粗体：<b> </b>
斜体：<i> </i>
上标：4<sup>th</sup>
下标：co<sub>2</sub>
```
空白
> 当浏览器遇到两个或两个以上连续空格，或遇一次换行时，会将其看作一个空格（白色空间折叠）

换行符，水平线
> 空元素只含有一个标签
```
换行符 <br />
水平线 <hr />
```
* 语义化标记

强调
```
加强和强调:<strong> </strong>
斜体强调：<em> </em>
```
引用(对引用内容进行缩进)
```
<blockquote cite="    ">
    <p>    hello     </p>
</ blockquote>
```
缩写词和首字母缩写词
```
<abbr title="Professor">    Prof    </abbr>
```
引用和定义
```
引用： <cite>    </cite>
定义：<dfn>    </dfn>
```
设计者详细信息（内容显示斜体）
```
<address>
    <p><a href="    ">homer@example </ a></p>
</address>
```
内容的修改
```
<p>    It was the <del>worst</del>    <ins>best</ins>
idea she had ever had    </ p>
```
不准确却又不予以删除
```
<s>    </s>
```
# 列表
有序列表 
```
<ol>    //创建有序列表
    <li>    </li>
    <li>    </li>
    <li>    </li>
</ ol>
```
无序列表
```
<ul>
    <li>    </li>
    <li>    </li>
</ul>
```
定义列表
```
<dl>    //创建定义列表
    <dt>    </ dt>//定义
    <dd>    </ dd>//具体解释
</ dl>
```
嵌套列表
```
<ul>
    <li>    </li>
    <li>
        <ul>
            <li>    </ li>
         </ ul>
      </ li>
</ ul>
```
# 链接
指向其他网站
```
<a href="http://www.empire.com"> Empire </ a>
// href:链接起始标签， Empire:用户单击文本
```
指向同一网站中其他页面链接
```
<a href="index.html">home</ a>
//"index.html":相对URL
```
EMAIL链接
```
<a href="mailto:join@example">Email</a>
//href特性中的mailto特性值
```
在新窗口中打开链接
```
//target="_blank"
<a href="http:..."    target="_blank"> Internet </a >
```
链接到当前页面的某个特定位置
```
<a href="#arc_shot">Arcshot </a >
<h2 id="arc_shot">Arcshot</a>
```
链接到其他页面的某个特定位置
```
<a href="http:/ www.hello.com /# bottom">
```
# 图像
添加图像
```
<img src=" " alt=" " title=" ">
//src:图像源 alt:图像描述 title:图像附加信息
```
图像的宽度和高度
```
<img src=" " alt=" " width="600" height="200" />
```
图形和图形说明
```
<figure>
    <img src=" " alt=" ">
    <br />
    <figcaption>    </ figcaption>
</ figure>
```
# 表格
基本表格结构
```
<table>//创建表格，内容逐行编写
    <tr>//起始标签(table row)行的开始
        <td>    </td>//每个单元格
    </tr>
</ table>
```
表格的标题
```
<th scope="col">Saturday</th>
//scope="col"：表示列标题
  scope="row"：表示行标题
```
跨列
```
<td colspan="2">hello</td>
//colspan="2":某个单元格跨越多列
```
跨行
```
<td rowspan="2">hello</td>
```
长表格
```
//<thead>   </ thead> 标题
//<tbody>   </ tbody>主体
//<tfoot>    </ tfoot>脚注
```

# 表单

表单结构
```
<form action="    " method="get">
</ form>
//action：特性值 URL用来在用户提交表单时接收表单中的信息
//method：get:表单中的值被附加在由action特性所指定的URL末尾
                post:表单中的值被放在HTTP头信息中进行发送（允许用户上传文件、非常长、数据库操作、敏感信息）
```
单行文本框
```
<form action="    ">
<p>    Username:
    <input    type="text"    name="username" size="15"    maxlength="30" />
</ p>
</ form>
//name: 控件名称 
```
密码框
```
<input type="password" name="password" size="15" maxlength="30" / >
```
文本域
```
<textarea name="    " col="    " rows="    ">    Enter your comments    </ textarea>
```
单选按钮
```
<input type=" radio" name="    " value="rock"     checked="checked" / >    Rock
```
复选框
```
<input type="checkbox"    name="service"    value="itunes"    checked="checked" / >iTunes
```
下拉列表框
```
<select name="    ">
    <option    value="ipod">     ipod </option>
    <option    value="radio">    Radio </option>
</ select>
```
多选框
```
<select name="    "    size="3"    multiple="multiple">
```
文件上传域
```
<input type ="file"    name="    "/ >
```
提交按钮
```
<input     type="submit"     name="    "     value= "subcribe "     / >
//value:按钮上显示的文本
```
图像按钮
```
<input    type="image"    src="    " width="100"    height="    " / >
```
按钮
```
<button><img Src="images/add.gif"    alt="add"    width="10"    height="10"    / >Add</ button>
//允许文本和图像出现在button中
```
标签表单控件
```
<input id="male"    type="radio"    name="gender"    value="m">
<label for="male">    Male    </label>
//声明标签控件标注的是哪个表单控件，与id特性相匹配，id特性值对某个元素进行唯一标识
```
组合表单控件
```
<fieldset>
    <legend>    Contact details    </ legend>//组合表单标题
</ fieldset>
```

# 其他标记
样式
```
<h1 style="color:#20b2aa;">这个书苑不太冷</h1>
```
注释
```
<!--    -->
```
id特性
```
<p    id="    ">
//用来从页面上的其他元素中对一个元素进行唯一标识(CSS可以为ID单独定义样式)
```
class特性
```
<p    class="    ">
//css 针对这一元素的规则
```
块级元素
> 显示时总是另起一行
```
<h1>    <p>    <ul>    <li>
```
内联元素
> 显示时总是与他邻近元素出现在同一行内
```
<a>    <b>    <em>    <img>
```
将文本和元素集中在一个块级元素中

> 若div元素使用id或class特性，则可创建CSS，指定<div>元素占空间，或改变其内部所有元素外观（class标识一系列元素,id是唯一的）

```
<div id="    ">    </div>
```
将文本和元素集中在一个内联元素中

> 若包含若干内联元素，可利用CSS控制元素中内容外观

```
<span class="    ">    </span>
```
内联框架 （inline frame）(分割小窗口看到另一个网页)
```
<iframe    width="    "    height="    "    src="    ">    </iframe>
```
页面信息
```
<head>
    <meta name="    "    content="    " / >//空元素
</head>
```