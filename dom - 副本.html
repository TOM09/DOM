<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
	td{
		text-align: center;
	}
	a{
		padding: 0 5px;
	}
	/* tbody tr:nth-child(even){
		background-color: red;
	}
	tbody tr:nth-child(2n+1){
		background-color: pink;
	} */
	</style>
	<script type="text/javascript">
	var datas = [
            {
                id: 1,
                username: '刘伟',
                age: 36,
                sex: '男'
            },
            {
                id: 2,
                username: '多多',
                age: 17,
                sex: '男'
            },
            {
                id: 3,
                username: '隔壁老王',
                age: 17,
                sex: '男'
            },
            {
                id: 4,
                username: '莫莫',
                age: 26,
                sex: '男'
            }
        ];
	</script>
</head>
<body>
	 姓名:<input type="text" />
    年龄:<input type="text" />
    性别:<input type="text" />
    <button>提交</button>
    <br>
    <br>

	排序：
	<select name="" id="">
		<option value="编号">编号</option>
		<option value="年龄">年龄</option>
	</select>
	<select name="" id="">
		<option value="降序">降序</option>
		<option value="升序">升序</option>
	</select>
	<button>提交</button>
    <br><br>

    搜索：
    <input type="text">
    <button>提交</button>
    <br>
    <br>
	<input type="button" id="btn" value="反选">
	<input type="button" value="批量删除" id="remove">
    <table width="100%" border="1" id="tab">
        <thead>
            <tr>
                <th><input type="checkbox" id="checkAll">全选</th>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
	<script type="text/javascript">
	var tbody = document.getElementById('tab').tBodies[0];
    var checkAll = document.getElementById('checkAll');
    var checkboxs = tbody.getElementsByTagName('input');
    var btn = document.getElementById('btn');
    var tr = tbody.rows;
    var remove = document.getElementById('remove');
    //批量删除；
    remove.onclick = function(){
        for(var i=0;i<checkboxs.length;i++){
            //如果是选中的就删掉。
            if(checkboxs[i].checked){
                tbody.removeChild(tr[i]);
                i--;
            }
        }
    };
    //反选
    btn.onclick = function(){
        //如果是选中的就取消选中，否则就选中。
        for(var i=0;i<checkboxs.length;i++){    
            if(checkboxs[i].checked){
                checkboxs[i].checked = false;
                tr[i].style.background = tr[i].color;
            }else{
                checkboxs[i].checked = true;
                tr[i].style.background = 'yellow';
            }
        }
        //判断是否全选。
        checkAll.checked = isCheckAll();
    };
    //全选
    checkAll.onchange = function(){
        for(var i=0;i<checkboxs.length;i++){
            checkboxs[i].checked = this.checked;
            //根据状态改变颜色
            if(this.checked){
                tr[i].style.background = 'yellow';
            }else{
                tr[i].style.background = tr[i].color;
            }
        }
    };
    //遍历数据，生成内容
    datas.forEach(function(ele,index){
        //生成行
        var row = document.createElement('tr');
        var td = document.createElement('td');
       
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        //多选
        checkbox.onchange = function(){
            //如果是真的，就是选中，选中就加上颜色。
            if(this.checked){
                row.style.background = 'yellow';
            }else{
                row.style.background = row.color;
            }
            checkAll.checked = isCheckAll();
        };
        td.appendChild(checkbox);
        row.appendChild(td);
        //遍历每一条数据，生成内容
        for(var attr in ele){
            td = document.createElement('td');
            td.innerHTML = ele[attr];
            row.appendChild(td);
        }
        //操作对应的单元格
        td = document.createElement('td');

        var up = document.createElement('a');
        up.innerHTML = '上移';
        var down = document.createElement('a');
        down.innerHTML = '下移';
        var remove = document.createElement('a');
        remove.innerHTML = '删除';
        //操作部分的功能
        //上移操作
        up.onclick = function(){
        
            //找到当前按钮所在的tr上一个tr
            var prev = row.previousElementSibling;
            //判断是否有上一行
            if(prev){
                tbody.insertBefore(row,prev);
            }else{
                alert('上边没有了');
            }
        };
        //下移操作
        down.onclick = function(){
            
            //找到当前按钮所在的tr上一个tr
            var next = row.nextElementSibling;
            //判断是否有上一行
            if(next){
                tbody.insertBefore(next,row);
            }else{
                alert('下边没有了');
            }
        };
        //删除操作
        remove.onclick = function(){
             //找到当前按钮所在tr
          
            tbody.removeChild(row);
        };
        up.href = down.href = remove.href = 'javascript:;';
        td.appendChild(up);
        td.appendChild(down);
        td.appendChild(remove);
        row.appendChild(td);

        //添加隔行变色

        if(index%2==0){
            row.color = '#ccc';
           
        }else{
            row.color = 'pink';
            
        }
        row.style.background =  row.color;
        tbody.appendChild(row);
    });
    //判断是否全选
    function isCheckAll(){
        for(var i=0;i<checkboxs.length;i++){    
            if(!checkboxs[i].checked){
                return false;
            }
        }
        return true;
    }
	</script>
</body>
</html>