<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style type="text/css">
	li{
		list-style: none;
		cursor: pointer;	
	}
	ul{
		margin: 0;
		padding: 0;
	}
	#box{
		border: 5px solid #E7E7E7;
		height:400px;
		width: 800px;
		overflow: hidden;
		margin: 0 auto;
	}
	#box>ul{
		width:100px;
		height: 100%;
		float: left;
	}
	#box>ul li{
		line-height: 99px;
		text-align: center;
		background-color: #000;
		border-bottom: 1px solid #E7E7E7;
		color:white;
	}
	#box>ul .active{
		background-color: red;
		color:black;
	}
	#box div{
		float: left;
		width: 700px;
		height: 100%;
		position: relative;
		display: none;
	}
	#box img{
		width: 100%;
		height: 100%;
	}
	#box div ul{
		position: absolute;
		bottom: 0;
		left: 0;
	}
	#box div li{
		float: left;
		border-right: 1px solid white;
		background-color: black;
		opacity: .7;
		line-height: 30px;
		margin-right: -1px;
		color:white;
		text-align: center;
	}
	#box div .active{
		background-color: #EF3163;
	}
</style>
</head>

<body>
	<div id="box">
		<!--<ul>
			<li>暖色调</li>
			<li>金色夕阳</li>
			<li>灰色格调</li>
			<li>baby</li>
		</ul>
		<div>
			<img src="" alt="" />
			<ul>
				<li style="width:px;">
					街边夕阳
				</li>
				<li style="width:px;">
					金色稻草
				</li>
			</ul>
		</div>-->
	</div>
</body>
</html>
<script type="text/javascript">
	var data = [
		{
			title:'暖色调',
			info:[
				['img/img1.gif','暖1'],
				['img/img2.gif','暖2'],
				['img/img3.gif','暖3'],
				['img/img4.gif','暖4']
			]
		},
		{
			title:'暖色调',
			info:[
				['img/img1.gif','暖1'],
				['img/img2.gif','暖2'],
				['img/img3.gif','暖3'],
				['img/img4.gif','暖4']
			]
		},
		{
			title:'暖色调',
			info:[
				['img/img1.gif','暖1'],
				['img/img2.gif','暖2'],
				['img/img3.gif','暖3'],
				['img/img4.gif','暖4']
			]
		},
		{
			title:'金色夕阳',
			info:[
				['img/img5.gif','金1'],
				['img/img6.gif','金2']	
			]
		},
		{
			title:'灰色格调',
			info:[
				['img/img7.gif','灰1'],
				['img/img8.gif','灰2'],
				['img/img9.gif','灰3'],
				['img/img10.gif','灰4']
			]
		},
		{
			title:'baby',
			info:[
				['img/img11.gif','b1'],
				['img/img12.gif','b2']
			]
		}
	];
	var box = document.getElementById('box');
	var str = '';
	str = '<ul>';
	for(var i=0;i<data.length;i++){
		str +='<li>'+data[i].title+'</li>';
	}
	str += '</ul>';
	
	for(var i=0;i<data.length;i++){
		str += '<div>'+
			'<img src="'+data[i].info[0][0]+'" alt="" />'+
			'<ul>';
		for(var j=0;j<data[i].info.length;j++){
			str += '<li style="width:'+700/data[i].info.length+'px;">'+data[i].info[j][1]+'</li>';
		}
		str += '</ul></div>';
	}
	box.innerHTML = str;
	
	
	
	var leftLis = box.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var divs = box.getElementsByTagName('div');
	console.log(divs)
	leftLis[0].className = 'active';
	divs[0].style.display = 'block';
	var num1 = 0;
	var num2 = 0;
	var timer = null;
	
	
	for(var i=0;i<leftLis.length;i++){
		leftLis[i].index = i;
		leftLis[i].onclick = function(){
			num1 = this.index;
			num2 = 0;
			leftTab();
			rightTab();
		}
		fn(i);
	}
	
	function fn(n){
		var lis = divs[n].getElementsByTagName('li');
		var img = divs[n].getElementsByTagName('img')[0];
		lis[0].className = 'active';
		for(var i=0;i<lis.length;i++){
			lis[i].index = i;
			//当点击div下面的li时
			lis[i].onclick = function(){
				num2 = this.index;
				rightTab();
			}
		}
	}
	
	
	function leftTab(){
		for(var i=0;i<leftLis.length;i++){
			leftLis[i].className = '';
			divs[i].style.display = '';
		}
		leftLis[num1].className = 'active';
		divs[num1].style.display = 'block';
	}
	
	
	function rightTab(){
		var lis = divs[num1].getElementsByTagName('li');
		var img = divs[num1].getElementsByTagName('img')[0];
		for(var i=0;i<lis.length;i++){
			lis[i].className = '';
		}
		lis[num2].className = 'active';
		img.src = data[num1].info[num2][0];
	}
	
	
	function autoPlay(){
		num2++;
		var len = data[num1].info.length;
		if(num2==len){
			num1++;
			if(num1>data.length-1){
				num1 = 0;
			}
			num2 = 0;
			leftTab();
		}
		rightTab();
	}
	
	timer = setInterval(autoPlay,1000);
	
	
	
	box.onmouseout = function(){
		timer = setInterval(autoPlay,1000);
	}
</script>