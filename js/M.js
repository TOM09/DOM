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


	function fn(className,link){
		$.ajax({
			url:link,
			dataType:'jsonp',
			success:function(data){
						//调用template <script type="text/html"> 和data数据
						let t = template("temp",data);
						//把t放到id为app的div中
						$(className).html(t);
						console.log(data)
					}
		});
	};
	
//获得更多电影类
	function movie(className,link){
		$.ajax({
			url:link,
			dataType:'jsonp',
			success:function(data){
						//调用template <script type="text/html"> 和data数据
						let t2 = template("temp2",data);
						//把t放到id为app的div中
						$(className).html(t2);
						console.log(data)
					}
		});
	};
	
//有单价的另外来一个
function money(className,link){
		$.ajax({
			url:link,
			dataType:'jsonp',
			success:function(data){
						//调用template <script type="text/html"> 和data数据
						let t3 = template("temp3",data);
						//把t放到id为app的div中
						$(className).html(t3);
						console.log(data)
					}
		});
	};

//图书样式
function book(className,link){
		$.ajax({
			url:link,
			dataType:'jsonp',
			success:function(data){
						//调用template <script type="text/html"> 和data数据
						let t4 = template("temp4",data);
						//把t放到id为app的div中
						$(className).html(t4);
						console.log(data)
					}
		});
	};
//影院热映
fn('.movieUlsOne','https://api.douban.com/v2/movie/in_theaters?callback=?');
//影院热映更多
fn('.movieUlsOneMore','https://api.douban.com/v2/movie/in_theaters?callback=?');


//免费在线观看影片
movie('.movieUlsTwo','https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?callback=?');
movie('.movieUlsTwoMore','https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?callback=?');

//新片速递
movie('.movieUlsThree','https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?callback=?');
movie('.movieUlsThreeMore','https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?callback=?');

//最受关注图书  虚构类
//https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&for_mobile=1&callback=fn

movie('.bookUlsOne','https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?callback=?');
movie('.bookUlsTwoMore','https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?callback=?');
//
////最受关注图书  非虚构类
movie('.bookUlsTwo','https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?callback=?');
movie('.bookUlsThreeMore','https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?callback=?');
////豆瓣书店
money('.bookUlsThree','https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?callback=?');
money('.bookUlsOneMore','https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?callback=?');
//
////https://m.douban.com/rexxar/api/v2/group/26926?callback=fn

//电视
//https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?callback=?

/*

				`*/