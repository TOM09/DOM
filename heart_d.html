<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#box {
				width: 500px;
				height: 600px;
				border: 1px solid black;
				position: relative;
				margin: 50px auto 0;
			}
			
			#box div {
				position: absolute;
				font-size: 50px;
			}
		</style>
	</head>

	<body>
		<div id="box"> </div>
	</body>
	<script>
		var box = document.getElementById("box")
			//先封装一个随机颜色函数 并返回
		function color() {
			var arr = ['red', 'orange', 'blue', 'green', 'navy', 'yellow'];
			return arr[Math.floor(Math.random() * arr.length)]
		}
		box.onclick = function(ev) {
			duoge({
				x: ev.clientX,
				y: ev.clientY
			}, 10)
		}

		//创建多个星星的函数
		function duoge(obj, num) {
			for(var i = 0; i < num; i++) {
				star(obj);
			}
		}
		//先封装一个星星的函数吧
		function star(obj) {
			//新建一个节点
			var div = document.createElement("div");
			//用鼠标来确定它的位置
			var x2 = obj.x - box.offsetLeft - div.offsetWidth / 2;
			var y2 = obj.y - box.offsetTop - div.offsetHeight / 2;

			//左边和顶部位置
			div.style.left = x2 + "px";
			div.style.top = y2 + "px";

			//它的内容是心
			div.innerHTML = "丹❤宝";
			//它内容的颜色
			div.style.color = color();
			//把它加入到box里面
			box.appendChild(div);
			//取整一个一个正到负5的区间  用来做散开的横向距离 
			var x3 = Math.round(Math.random() * 10 - 5);
			//取整一个一个负10到负20的区间  用来做散开的纵向距离 
			var y3 = Math.round(Math.random() * 10 - 20);
			//开启一个定时器
			div.timer = setInterval(function() {
				//创建的div的左边将不停变化为  原左边加随机横向距离
				div.style.left = (x2 += x3) + "px";
				//创建的div的顶部将不停变化为  原顶部加随机负的(即向上)的纵向距离
				div.style.top = (y2 += y3++) + "px";

				//如果创建div的顶部距离和y++的值大于了盒子的高的时候 就清除定时器并且移除div
				if(y2 > box.offsetHeight) {
					clearInterval(div.timer);
					box.removeChild(div);
				}
			}, 20)

		}
	</script>

</html>