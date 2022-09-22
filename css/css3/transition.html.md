```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- <style>
        img {
            height: 100px;
            transition: 1s height;
        }
        img:hover {
            height: 150px;
        }
        div {
            text-align: center;
        }
    </style> -->

<style type="text/css">

    /* 为 DIV 加阴影 */
    .out {
    position:relative;
    background:bbb;
    margin:10px auto;
    width:240px;
    }
    .in {
    background:fff;
    border:1px solid 555;
    padding:10px 5px;
    position:relative;
    top:-5px;
    left:-5px;
    }
    
    /* 为 图片 加阴影 */
    .imgShadow {
    position:relative;
    background:bbb;
    margin:10px auto;
    width:220px;
    }
    
    .imgContainer {
    position:relative;
    top:-5px;
    left:-5px;
    background:fff;
    border:1px solid 555;
    padding:0;
    }
    
    .imgContainer img {
    display:block;
    }

    div:hover {
        box-shadow: 0 0 20px #e0e3de;
        /* transform: translateY(-5px); */
        transform:rotate(9deg);
        transition: all .2s ease-in-out;
        -webkit-transform:rotate(9deg); /* Safari 和 Chrome */
    }
    
    </style> 
</head>
<body>
    <div>
        <img src="Z:/10.jpg" alt="pickage">
    </div>
    <h4>为 DIV 加阴影:</h4>
<div class="out">
<div class="in" >
<img src="Z:/10.jpg" alt="" />
</div>
</div>

<h4>为 图片 加阴影:</h4>
<div class="imgShadow">
<div class="imgContainer" >
<img src="Z:/10.jpg" alt="" />
</div>
</div>
</body>
</html>
<!-- 例子2 -->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title>
<style> 
div
{
	width:100px;
	height:100px;
	background:red;
	transition:width 2s;
	-webkit-transition:width 2s; /* Safari */
}

div:hover
{
	transform: translateY(-5px);
	width:300px;
	transition: all .9s;
	box-shadow: 0px 0px 20px #111111;
}
</style>
</head>
<body>
<p><b>注意：</b>该实例无法在 Internet Explorer 9 及更早 IE 版本上工作。</p>

<div></div>

<p>鼠标移动到 div 元素上，查看过渡效果。</p>

</body>
```