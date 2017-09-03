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

//电影图书首页模板
let View = `<%for(var i=0;i<subjects.length;i++){%>
					<li class="movieList">
							<img src="<%=subjects[i].images.medium%>" class="content2Img">
					    	<div class="movieName"><%=subjects[i].title%></div>
					    	<p class="movieStar">
									<span>★</span>
									<span>★</span>
									<span>★</span>
									<span>★</span>
									<span>★</span>
					      		<span class="moviePoint">
					      			<%=subjects[i].rating.average%>
					      		</span>
					     	 </p>
				    </li>
				    <%}%>
				`
$('#temp').html(View);

let View2 = `<%for(var i=0;i<subject_collection_items.length;i++){%>
					<li class="movieList">
							<img src="<%=subject_collection_items[i].cover.url%>" class="content2Img">
					    	<div class="movieName"><%=subject_collection_items[i].title%></div>
					    	<p class="movieStar">
									<span>★</span>
									<span>★</span>
									<span>★</span>
									<span>★</span>
									<span>★</span>
					      		<span class="moviePoint">
					      			<%=subject_collection_items[i].rating.value%>
					      		</span>
					     	 </p>
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