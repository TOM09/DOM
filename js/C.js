//c层,控制器,把M层渲染到C层
//当点击的时候,定义输入框内容,和一个为0的num
//作为实参传到M层的函数中
//$('button').click(function(){
//	
//	let val = $('input').val();
//	let num = 0;
//	Model(val,num);
//
//});

/*
<div id="star_con" class="star-vote">
         <span id="add_star" class="add-star"></span>
         <span id="del_star" class="del-star"></span>
  </div>

// 星星
//subjects[i].rating.average  254  464
									317
var np = $("#title")
showStar()
console.log(np);
*/

$(function(){
	var movieUls = $(".movieUls");
	var bestMoveUls = $(".bestMoveUls");

	moveU(movieUls);
	moveU(bestMoveUls);     
	
	
		$('#search').click(function(){
			$(".is-active").fadeIn();
			$(".is-active").fadeIn("slow");
			$(".is-active").fadeIn(3000);
		});
		
		
		$('#close-open').click(function(){
//			$('.is-active').css({"display":"none","z-index":-1});
				  $(".is-active").fadeOut();
				  $(".is-active").fadeOut("slow");
				  $(".is-active").fadeOut(3000);
				});
		
	/*	$('#search').click(function(){
			console.log($('.is-active'))
			$('.is-active').css({"display":"block","z-index":999});
		})
		
		*/
		
		
//横向拖动封装函数
function moveU(obj) {
		obj.on('touchstart', function(ev) {
			lW = $(this).width() - screen.width;
			//定义按下的x的点
			this.x = ev.originalEvent.targetTouches[0].pageX;
			this.ulLeft = $(this).offset().left;
		})
	
		obj.on('touchmove', function(ev) {
				//移动时的x点
				var x2 = ev.originalEvent.targetTouches[0].pageX;
				var l = x2 + this.ulLeft - this.x
	
				if(l <= -lW) {
					l = -lW
				} else if(l >= 0) {
					l = 0;
				}
				$(this).css('left', l + "px");
			});
		}

//底部括号
})


		