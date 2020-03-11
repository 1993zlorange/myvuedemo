# 部署
* 声明
```
<script type="text/javascript" src="js/jquery.js"></script>
```
* CDN
Content Ddistribute Network内容分发网络
主要网页放在主服务器上，其他资源放在CDN服务器上，从最近的服务器拉取资源
JS作为资源文件可以部署在CDN服务器上
```
<script type="text/javascript" src="http://libs.baidu.com/jqueryui/1.8.22/juqery-ui.min.js"></script>
```
* 使用
```
<script type="text/javascript">
console.log($('body'))
</script>
```
* 调用dom的区别
```
//JS
//方式1
var btn=document.getElementById('button1');
//方式2
//var btns=document.getElementByName('button1');
//var btn=btns[0];
//方式3
//var btn=document.querySelecctor('#button1')
btn.onclick=function(e){
//为兼容性
    if(e!=null){
        alter(e.target);
    }
    e=e || window.event;
    var target=e.target || e.srcElement;
    alert(target.value);
//jQuery
}
```
* 形式
 * jQuery('XXX'),或者$(‘XXX’)//工厂函数（设计模式design pattern）
 * 创造新函数不用new，调用它拿到jQuery类型的原型对象
 * 使用jQuery或是$工厂函数查询id为button1的按钮，封装在jQuery对象里（工厂函数返回jQuery对象，jQuery是封装了DOM对象的类数组），并可以查看jQuery对象的结构
```
var $btn =$('#button1');
console.log($btn);
```
 * 使用jQuery的简化版API，为$btn绑定单击事件：把事件相关的兼容性问题全部包装在jQuery的极简化API中
```
$btn.click（function(e)）{//e（时间）在调用的时候已经初始化好了
    alert(e);
    if(e!null){
        alert(e.target);
    }
//将dom对象直接封装到jQuery对象中
    var $btn=$(e.target);//将原生DOM对象封装成jQuery对象
    console.log($btn);
});
```
```
var $btn=$(‘#button1’)；d
$btn.on('click',function(e)){
    var $btn=$(this);
    console.log($btn);
})
```
# jQuery选择器（将获得的DOM元素直接封装）
* \#id
```
$('#div1').css('background-color','#0F0');
```
* .class
```
$('.cls1').css('background-color','#0F0');
```
* tag
```
$('div').css('background-color','#0F0');
```
* 选择多个(逗号分隔并列的多个选择器，表示并集，可以理解成满足解释器1或者满足解释器2)
```
$('div,input').css('background-color','#0F0');
```
* 无分隔的多个选择器（不能有空格），表示交集
```
$('div.cls1').css('background-color','#0F0');//不同类型
```
* DOM Element
```
$('#div1').click(function){
    var $this =$(this)//this是外面jQuery的参数也就是DOM的element接进来放到jQuery对象进行操作
    $this.css('background-color','#0F0');
})；
```
## 三个特点
###类数组的自动遍历
jQuery是封装了DOM Element的类数组（对这些数组挨个做操作）

```
$('#div1').css('background-color','#0F0');
console.log($'#div1').css('_background-color');
```
### 读和写使用同名函数（有参数就是写，否则是读）
> DOM能改的东西:内容（innerHTML,textContent,value）、属性(标准属性、状态属性checked，disabled,selected)、样式:css
### 内容
* innerHTML(HTML标记)
```
$('#div1').html('<div>inner Div</div>');
```
* textContent
```
$('#div1').text('abcd');
```
* value
```
$('#btn').val('others!');
```
### 属性
* getAttribute,setAttribute
```
console.log($('#btn').attr('tpye'));
$('#btn').attr('tpye','text');
```
* checked,disabled,selected
```
console.log($('#chb').prop('checked'));
$('#chb').prop('checked',false);
```
### 链式调用
```
var $div1=$('#div1');
$div1.css('background-color','#0F0');
$div1.css('border','2px solid #000');

//等同于
var $div1=$('#div1')
.css('background-color','#0F0')//返回的this又能够调用
.css('border','2px solid #000');
//等同于
var $div1=$('#div1')
.css({
        'background-color':'#0F0'，
         'border':'2px solid #000'
        })；//将参数写成对象

```
# 层级
在没有id的情况下进行选择
* 空格分隔
存在某个祖先的>>后代节点<<（包括儿子孙子）
```
$('#div1 .cls1').css('background-color','#0F0');
```
* 大于号分隔
存在某个父亲的 >>儿子节点<<
通常用于在重复的结构中提取某些结构
```
$('#div1>.cls1').css('background-color','#0F0');
$('#div1>div>.cls1').css('background-color','#0F0');
```
* 加号分隔
存在某个临接的兄长节点的>>兄弟节点<<（后面一个）
```
$('.cls1+div').css('background-color','#0F0');
```
* 波浪线分隔
存在某个同辈年长节点的>>兄弟节点<<（后面所有）
通常用于表头和后续同级单元的处理
```
$('#div1~div').css('background-color','#0F0');
```
# 伪类
> 对于之前拿出来的元素再做一次过滤
* :first 所选出的一组元素中的第一个
```
$('div1:first').css('background-color','#0F0');
$('#div1 .cls1:first').css('background-color','#0F0');
```
* :first-child
该元素是其父亲的第一个孩子元素(可能有很多，各个辈的第一个孩子)
```
$('div1:first-child').css('background-color','#0F0');
```
* :last 所选出的一组元素中的第一个
```
$('div1:last').css('background-color','#0F0');
$('#div1 .cls1:last').css('background-color','#0F0');
```
* :not
selector1:not(selector2)
所有的匹配1且不匹配2的
```
$('div:not(.cls1)').css('background-color','#0F0');
``` 
* 等于，大于，小于
下标从0开始
```
:eq(index)//从0开始，第index个
:lt(index)//从0开始，比index小的
:gt(index)//从0开始，比index大的
```
```
$('div:eq(3)').css('background-color','#0F0');//从0开始的3（没有辈分关系，从前往后）
$('div:lt(2)').css('background-color','#0F0');//0和1
$('div:gt(2):lt(3)').css('background-color','#0F0');//所有的div,大于2以及小于5，着色（第一次操作完被过滤重新编号）
```
* 奇数，偶数
:even,第偶数个，从0开始（0包括在偶数）
:odd,第奇数个，从0开始
```
$('div:odd').css('background-color','#0F0');
```
# 选择器
* 属性
```
[attribute]//拥有属性
[attribute=value]//拥有属性，并且属性值等于value
[attribute!=value]//拥有属性但值不等于value,或者不拥有属性
[attribute^=value]//属性值以value开头
[attribute$=value]//属性值以value结尾
[attribute*=value]//属性值包含value
[attribute][attribute]//同时拥有多个属性值
```
* 子元素伪类
```
:first-child,:last-child//第一子元素\倒数第一子元素
:first-of-type,:last-of-type//所有子元素中该类型的第一个\倒数第一个
:nth-child(),:nth-last-child()//第n个子元素（从1开始）
:nth-type(),:nth-last-type()//所有子元素中该类型的第n个\倒数第n个
:only-child,:only-of-type//唯一的子元素\唯一的该类型子元素（如果是则选择）
```
* 内容伪类
```
:empty//不含有子元素或者文字的元素
:parent//含有子元素或者含有文字的元素(当父亲的元素)
:contains(text)//含有给定文本的元素
:has(selector)//含有选择器所匹配元素的元素
```
# DOM API
当选择器（一次选一组）选择高层节点后，从当前节点往上往下爬DOM tree时，无法用选择器时，调用其他API函数
```
.parent()//获得父亲节点
.children()//获得子节点集合
    .first() .last() .eq(i|-i)
.next()//后面一个兄弟节点
.nextall()//后面所有的兄弟节点
.prev()//前一个兄弟节点
.prevall()//前面所有的兄弟节点
.siblings()//除自己以外，所有的兄弟节点
```
# 事件（Agenda）
## 事件绑定
* onclick
在jQuery没有对应的实现，已经淘汰（后面的代码会覆盖前面的）
```
var btn = ducument.getElementById('btn');
btn.onclick=funtion(e){
console.log(1111);
}
```
* addEventListener(JS)
绑定事件不互相覆盖
.addEventListener
.removeEventListener
```
var btn = ducument.getElementById('btn');
btn.addEventListener('click',function(e){
    console.log(111);
});
```
```
//remove,fn必须是声明的
function f2(2){
    console.log(222)
}
btn.addEventListener('click',f2);
var btnr = document.getElementById('btnr');
btnr = document.addEventListener('click',function(e){
    btn.removeEventListener('click',f2)
})//删除事件
```
* bind(jQuery)
bind
unbind
```
$('#bind').bind('click',funtion(e){
    console.log(111);
})
```
```
//以另一个按钮删除事件
$('#btnr').bind('click',funtion(e)){
    $('#btn').unbind('click',f2);
})
```
```
//unbind('事件名'):解绑定所有的事件名中声明的事件
$('#btn').bind('mouseout',funtion(e){
    console.log(333);
})
```
```
//解除所有事件
$('#btn').unbind();
```
* one
只执行一次事件
```
$('#btn').one('click',funtion(e){
    console.log(111);
})
```
##冒泡
>事件不但在子对象中触发，还会在父元素以及父元素的父元素一路触发
```
//js
var div1=document.getElementById('div1');
div1.addEventListener('click',function(e){
   if(e.target.getAttribute('id') == 'btn')//点什么是什么 
        console.log(111);
});
```
* deligate
```
//父元素的jQuery对象.delegate('子元素选择器',‘事件名’,fn)
$('#div1').delegate('#btn','click',funtion(e){
    console.log(111);
})//事件绑在div上但是又能通过过滤精确选择
```
* undeligate
```
//方式1
undeligate('选择器','事件名',fn)
//方式2
undelegate('选择器','事件名')//删除所有函数
//方式3
undelegate('事件名');//删除所有带事件的
//方式4
$(div1).delegate('#btn','click.namespace1',f2);
$('#btnr').bind('click',funtion(e){
    $div1.undelegate('.namespace1');
});

```
> 插件为了复用，将反复出现的功能、函数以及CSS样式封装起来的程序
jquery向后台传递参数
```
<script>
$(document).ready(function(){//回调函数
var key_user,key_password
$("#submit").click(function(){//回调submit操作
var usr = $("#user").val();//回调选取页面的id值
var password = $("#password").val();
//post(url,post-value,callback)
$.post('url',{//传给后台url同时也要传给后台json
    key_user : user,
    key_password: passord
    },
    function(data){//回调函数
```
# 事件（页面元素进行交互）
事件是可以被javascript侦测到的行为（ACTION）
>onclick 事件句柄
* 事件类型
 * 鼠标事件
单击、选中、进入悬浮或退出
 * 键盘事件
按下或释放
 * HTML事件
body被加载、表单中选取输入框或改变输入框文本内容
 * 突变事件
文档底层元素发生改变
# 事件句柄
是事件发生要进行的操作，onload属性是所谓的事件句柄，也称为事件属性。
```
<标记 事件句柄='js代码'></标记>
```

|事件分类	|事件名称|	事件句柄	|事件|
|-|-|-|-|
|窗口事件	|load	|onLoad	|当文档载入时执行JS代码|

|窗口事件	|unload	|onUnload	|当文档卸载时执行JS代码|
|表单元素事件|	change	|onChange	|当元素改变时改变JS代码|

|表单元素事件|submit	|onSubmit	|当表单递交时改变JS代码|

|表单元素事件|reset	|onReset	|当表单被重置时执行JS代码|

|表单元素事件|select	|onSelect	|当元素被选取|

|表单元素事件|blur	|onBlur	|当元素失去焦点|

|表单元素事件|focus	|onFocus	|当元素获得焦点|

|表单元素事件|click	|OnClick	|当元素被单击时|

|表单元素事件|dblclick	|OnDblclick	|当元素被双击时|
|鼠标事件	|mousedown	|OnMousedown	|当鼠标按钮被按下时|

|鼠标事件	|mousemove	|OnMousemove	|当鼠标移动时|

|鼠标事件	|Mouseout	|OnMouseout	|当鼠标指针移除某元素时|

|鼠标事件	|Mouseover	|OnMouseover	|当鼠标悬停于某元素|

|鼠标事件	|mouseup	|OnMouseup	|当鼠标按钮被松开时|
|键盘事件	|keydown	|OnKeydown	|当键盘按钮被按下时|

|键盘事件	|keypress	|OnKeypress	|当键盘按钮按下又松开时|

|键盘事件	|keyup	|OnKeyup	|当键盘被松开时|
# 事件处理
当一个事件发生时，如果需要截获并处理该事件，只需定义该事件句柄所关联的事件处理代码。
* 静态指定
```
<HTML标记...事件句柄1=“事件处理程序”[事件句柄2=“事件处理程序”...]></HTML标记>
```
在head里写js函数
```
    <script type="text/javascript">
        function testInfo(message) {
            alert(message);
        }
    </script>
```
在body里给即将发生事件的控件写事件句柄
```
    <form method="post" action="">
        <input type="button" value="通过JS语句输出信息" onclick="alert('使用alert()输出信息')">
        <input type="button" value="通过函数输出信息" onclick="testInfo('调用testInfo()函数输出信息')">
    </form>
```
* 动态指定
```
<事件主角-对象>.<事件句柄>=<事件处理程序>
```
HTML里没写事件句柄，也没写处理函数
```
    <form name="myform" method="post" action="">
        <input id="input" type="button" name="mybutton" value="提交">
    </form>
```
动态实现在js脚本里（实现函数和document）
```
    <script type="text/javascript">
        //实现函数
        function clickHandler() {
            alert("即将提交表单！");
            return true;
        }
        //通过dom得到HTML属性并动态分配一个事件句柄
        document.getElementById("input").onclick = function () {//匿名函数
            return clickHandler();
        }
        // myform.mybutton.onclick();
    </script>
```
* 特定对象特定事件指定
```
<script type="text/javascript" for="对象" event="事件">
//事件处理程序代码
</script>
```
在js里指定对象，指定事件类型，实现事件处理
```
//给某个窗口
    <script type="text/javascript" for="window" event="onload">
        alert("网页读取完成，欢迎光临！");
    </script>
```
# 事件处理返回值
大部分事件没有返回值，浏览器会按默认方式进行处理
```
事件句柄="return 函数名(参数)；"
```
head里写实现函数，通过dom来调取body里的属性
```
<script language="javascript">
function showName() {
if (document.form1.name1.value == "") {
alert("没有输入内容！");
return false;
} else {
alert("欢迎你!" + document.form1.name1.value);
return true;
}
}
</script>
```
通过返回值判断是否用action跳转到下一个页面
```
<form name="form1" action="simple.html" onsubmit="return showName();">
姓名：<input type="text" name="name1" />
<input type="submit" value="提交" />
</form>
```
# 表单事件句柄

一个标签里可以有几个事件
```
//获得和失去焦点（是否有点击）
<br /><input type="button" name="button1" onfocus="getFocus()" value="获得/失去焦点触发事件" onblur="loseFocus()" />
