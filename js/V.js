//渲染层,接收到M层的数据,并且渲染出来.
//在M层中,data已经放入到script中,现在模板要调用数据了

//首先定义一个模板,包含h5,ul和li格式
//把data数据中的各项拼接到模板中

//h5中是data.title 和data.totale
//循环data的json数据的长度

//在li中放入img和p标签
//在img中设src  src从data中去找
//在p中放入单个json的title
//在p中放入data数据中的评分

//把变量放到temp  (script标签)中

//title 是网站数据转对象的样子.在network中的preview中的title上 
//data数据的title\             <%=title%></1>


$(function(){


//电影图书首页模板
let View1 = `<%for(var i=0;i<subjects.length;i++){%>
					<li class="movieList">
							<img src="<%=subjects[i].images.medium%>" class="content2Img">
					    	<div class="movieName"><%=subjects[i].title%></div>
					    	<div class="movieStar">
									<div id="star_con" class="star-vote">
           								<span id="add_star" class="add-star"></span>
             							<span id="del_star" class="del-star"></span>
     								
					      		<span class="moviePoint">
					      			<%=subjects[i].rating.average%>
					      			 </div>
					      		</span>
					     	 </div>
				    </li>
				    <%}%>
				`
$('#temp1').html(View1);

let View2 = `<%for(var i=0;i<subject_collection_items.length;i++){%>
					<li class="movieList">
							<img src="<%=subject_collection_items[i].cover.url%>" class="content2Img">
					    	<div class="movieName"><%=subject_collection_items[i].title%></div>
					    	<div class="movieStar">
									<div id="star_con" class="star-vote">
           								<span id="add_star" class="add-star"></span>
             							<span id="del_star" class="del-star"></span>
							      		<span class="moviePoint">
							      			<%=subject_collection_items[i].rating.value%>
							      		</span>
		     						</div>
					      		
					     	 </div>
				    </li>
				    <%}%>
				`
$('#temp2').html(View2);



let View3 = `<%for(var i=0;i<subject_collection_items.length;i++){%>
					<li class="movieList">
							<img src="<%=subject_collection_items[i].cover.url%>" class="content2Img">
					    	<div class="movieName"><%=subject_collection_items[i].title%></div>
					    	<p class="movieStar movieStarbook">
					      		<span class="moviePoint">
					      			¥<%=subject_collection_items[i].price%>
					      		</span>
					     	 </p>
				    </li>
				    <%}%>
				`
$('#temp3').html(View3);

let View4 = `<%for(var i=0;i<recommend_feeds.length;i++){%>
				<div id="content">
					<div id="contentOne">
						<div id="contentOnebox">
							<div id="contentOneleft">
								<h3><%=recommend_feeds[i].title%></h3>
								<p><%=recommend_feeds[i].target.desc%></p>
							</div>
							
							
							<div id="contentOneright">
							<img src="<%=recommend_feeds[i].target.author.cover_url%>" class="indexImg">
								
							</div>
						</div>
						<div id="contentOnebottom">
							<span>by <%=recommend_feeds[i].target.author.name%></span>
							<span><%=recommend_feeds[i].source_cn%></span>
						</div>
					</div>
				</div>
			<%}%>
			`
$('#temp4').html(View4);

/*let View5 = `<%for(var i=0;i<items.length;i++){%>
						<li>
							<div>
								<div class="desc">
									<a href=""><img src="<%=items[i].status.author.avatar%>" class="asdasdfasdf"></a>
									<div class="user-info">
										<strong>
											<span><%=items[i].status.activity%></span>
										</strong>
										<div class="timestamp"><%=items[i].status.create_time%></div>
									</div>
								</div>
									<div class="content">
										<div></div>
									</div>
							</div>
							<div class="feed-card">
									<div class="title"><%=items[i].status.card.title%></div>
									<div class="detail ">
										<div class="text"><%=items[i].status.card.subtitle%></div>
									</div>
							</div>
							<div class="info">
								<div class="ic-btn ic-btn-like left"><span class="text"><%=items[i].status.like_count%></span></div>
								<div class="ic-btn ic-btn-comment left"><span class="text"><%=items[i].status.resharers_count%></span></div>
								<div class="ic-btn ic-btn-retweet left"><span class="text"><%=items[i].status.reshares_count%></span></div>
								<div class="ic-btn ic-btn-more right"></div>
							</div>
						</li>
				    <%}%>
				`
$('#temp5').html(View5);*/







})