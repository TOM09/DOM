//用jqurey调用ajax函数
//			$.ajax({
					//接口,数据格式,data接收传过来的数据
//					url:'https://api.douban.com//v2/movie/in_theaters?callback=?',
//					dataType:'jsonp',
					//data接收传过来的数据拼接字段到url后面,callback前面
					//q=search&start=num
					/*data:{
						q:val,
						start:num
					},*/
					//成功后的回调函数,
//					success:function(data){
						//调用template <script type="text/html"> 和data数据
//						let t = template('temp',data);
						//把t放到id为app的div中
//						$('.movieUlsOne').html(t);
//						console.log(data)
//					}
//				});


	function fn(className,link,search,num){
		$.ajax({
			url:link,
			dataType:'jsonp',
			data:{
				P:search,
				num:num
			},
			success:function(data){
						//调用template <script type="text/html"> 和data数据
						let t = template('temp',data);
						//把t放到id为app的div中
						$(className).html(t);
						console.log(data)
					}
		});
	};
//影院热映
fn('.movieUlsOne','https://api.douban.com/v2/movie/in_theaters?callback=?');
//影院热映更多
fn('.movieUlsOneMore','https://api.douban.com/v2/movie/in_theaters?callback=?');






//免费观影
fn('.movieUlsTwo','https://api.douban.com//v2/movie/in_theaters?callback=?');
//新片速递
fn('.movieUlsThree','https://api.douban.com/v2/movie/coming_soon?callback=?');

//最受关注图书  虚构类
fn('.bookUlsOne','https://api.douban.com/v2/movie/coming_soon?callback=?');

//最受关注图书  非虚构类
fn('.bookUlsTwo','https://api.douban.com/v2/movie/coming_soon?callback=?');

//豆瓣书店
fn('.bookUlsThree','https://api.douban.com/v2/movie/coming_soon?callback=?');
