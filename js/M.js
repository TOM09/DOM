$(function(){

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


	function fn(className,t,temp,link){
		$.ajax({
			url:link,
			dataType:'jsonp',
			success:function(data){
				
				console.log(data)
				
				let t = template(temp,data);
				$(className).html(t);
				
				var obj = data.subject_collection_items;
			//循环obj的长度,得到评分,定义为 n.
//			    var starVote=document.getElementsByClassName("star-vote");//.offsetWidth;
				var delStar = document.getElementsByClassName("del-star");//20个
				var nSpan = document.getElementsByClassName("moviePoint")
				

			
				for (var i= 0; i < obj.length; i++){
				//获取数据1的classname,和数据2的classname
//				console.log(starVote[i])
//					var sW = starVote[i].offsetWidth;
					var n = nSpan[i].innerHTML;
						showStar(n,delStar[i],100)
				}
			},
	//ajax
		});
	};

	
fn('.bookUlsOne',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?callback=?');

console.log($('.moveUl').children())


//影院热映
fn('.movieUlsOne',"t1","temp1",'https://api.douban.com/v2/movie/in_theaters?callback=?');
//影院热映更多
fn('.movieUlsOneMore',"t1","temp1",'https://api.douban.com/v2/movie/in_theaters?callback=?');

//排名250电影  /v2/movie/top250
fn('.movieTop250',"t1","temp1",'https://api.douban.com/v2/movie/top250?callback=?');
//免费在线观看影片
fn('.movieUlsTwo',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?callback=?');
fn('.movieUlsTwoMore',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?callback=?');

//新片速递
fn('.movieUlsThree',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?callback=?');
fn('.movieUlsThreeMore',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?callback=?');

//最受关注图书  虚构类
fn('.bookUlsOne',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?callback=?');
fn('.bookUlsTwoMore',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?callback=?');
//最受关注图书  非虚构类
fn('.bookUlsTwo',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?callback=?');
fn('.bookUlsThreeMore',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?callback=?');
//豆瓣书店
fn('.bookUlsThree',"t3","temp3",'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?callback=?');
fn('.bookUlsOneMore',"t3","temp3",'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?callback=?');
//美剧
fn('.usaMovie',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_tv_american_hot/items?callback=?');

//主页内容
fn('.bigBox',"t4","temp4",'https://m.douban.com/rexxar/api/v2/recommend_feed?callback=?');

//电影界面最下方链接
//经典
fn('.classicalMovie',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_movie_classic_hot/items?callback=?');
//冷门佳片
fn('.smallMovie',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_movie_unpopular_hot/items?os=ios&for_mobile=1&callback=?');
//经典电影和动作电影
fn('.goodMovie',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_movie_score_hot/items?os=ios&for_mobile=1&callback=?');
fn('.pkMovie',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_movie_action_hot/items?os=ios&for_mobile=1&callback=?');
//小说和爱情
fn('.storyBook',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_book_fiction_hot/items?os=ios&for_mobile=1&callback=?');
fn('.loveBook',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_book_love_hot/items?os=ios&for_mobile=1&callback=?');
//历史
fn('.historyBook',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_book_history_hot/items?os=ios&for_mobile=1&callback=?');
fn('.wgBook',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_book_foreign_hot/items?os=ios&for_mobile=1&callback=?');

//广播
fn('.comment-list',"t4","temp4",'https://m.douban.com/rexxar/api/v2/status/anonymous_timeline?callback=?'); 

//科幻启示录
fn('.scienceMove',"t2","temp2",'https://m.douban.com/rexxar/api/v2/subject_collection/filter_movie_unpopular_hot/items?os=ios&for_mobile=1&callback=?');





//函数封装

//星星
function showStar(n,obj1,obj2){
            var dM=(n*obj2)/20;
            obj1.style.backgroundPosition = -dM+"px 0px";
            obj1.style.left= dM +"px";
}
		






})