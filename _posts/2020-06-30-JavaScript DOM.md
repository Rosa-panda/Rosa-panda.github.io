---
title: JavaScript DOM
tags: JavaScript
---

## JavaScript DOM

### 文档:D
__document__:如果没有document,那么DOM就无从谈起.

### 对象:O
__object__:对象是一种自足的数据集合,与某个特定对象相关联的变量称为这个对象的属性,只能通过某个特定对象调用的函数被称为这个对象的方法.

### 模型:M
__mode__:可以比做模型,但是也可以看作一个树(数学意义上的概念),DOM中html是根树.

## 节点
在DOM中一切都是由节点组成,节点之中包涵节点.

### 获取元素
* getElementById()方法(返回一个对象)  
这个方法将返回一个与那个有着给定id属性的值的元素节点对应的对象.  
getElementById是document对象特有的函数,例:
```javascript
document.getElementById("purchases");
```

* getElementsByTagName()方法(返回一个数组)  
这个函数的参数是标签的名字,例如:
```javascript
document.getElementsByTagName("li");
```
* getElementsByClassName()方法(返回一个数组)  
参数是类名,返回值是所有名字中带有参数的类的数组.例:
```javascript
document.getElementsByClassName("sale");
```

## 获取和设置属性

* getAttribute
getAttribute是一个函数,它只有一个参数,就是打算查询的属性的名字.但是getAttribute方法不属于document对象,
所以不能通过document对象来调用,它只能通过元素节点对象来调用.例如,可以与getElementSByTagName方法合用,获取
每个<p>元素的title属性,如下所示:
```javascript
var paras = document.getElementsByTagName("p")
for (var i = 0; i < paras.length; i++)
{
    alert(paras[i].getAttribute("title"));
}
```
* setAttribute
setAttribute方法可以用于,对属性节点的值进行修改,例如:
```javascript
var shopping = document.getElementById("purchases");
shopping.setAttribute("title","a list of goods");
```

## 附
Dom试玩.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Shopping list</title>
    <script type="text/javascript" src="js/test1.js"></script>
</head>
<body>
<h1>What to buy</h1>
<p title="a gentle reminder">Don't forget to buy this stuff.</p>
<p>test</p>
<ul id="purchases">
    <li>A tin of beans</li>
    <li class="sale">Cheese</li>
    <li class="sale important">Milk</li>
</ul>
</body>
</html>
```
test1.js
```javascript
alert(typeof document.getElementById("purchases"));     //getElementById
alert(document.getElementsByTagName("li").length);   //getElementsByTagName
var items = document.getElementsByTagName("li").length;
for (var i=0; i < items; i++)
{
    alert(typeof document.getElementsByTagName("li")[i]);
}
var shopping = document.getElementById("purchases");
var sales = shopping.getElementsByClassName("sale");        //getElementsByClassName
alert (sales.length);
var parars = document.getElementsByTagName("p");
for (var i = 0; i < parars.length; i++)
{
    var title_text = alert(parars[i].getAttribute("title"));
    if (title_text != null)
    {
        alert(title_text);
    }
    if (parars[i].getAttribute("title"))
    {
        alert(parars[i].getAttribute("title"));             //getAttribute
    }
}
var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++){
    var title_text = paras[i].getAttribute("title");
    if (title_text)
    {
        paras[i].setAttribute("title","12345");        //setAttribute
        alert(paras[i].getAttribute("title"));
    }
}
```