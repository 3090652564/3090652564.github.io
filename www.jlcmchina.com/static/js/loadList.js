// ajax列表加载更多内容
$(function(){ 
    var loadConfig = {
        //请求地址
        url_api:'/plus/list.php',
        //0就是首页调用数据  列表:typeid:{dede:field name="typeid"/}
        typeid: 11,  
        page: 2, //开始页码
        pagesize: 12, //需要渲染的数据条数
        loading : 0,//加载状态,默认为未加载
    }

    $(".more_lld a").click(function(){
  		loadMoreApply();
  	});

    function  loadMoreApply(){
        if(loadConfig.loading == 0){
            var typeid = loadConfig.typeid;
            var page = loadConfig.page;
            var pagesize = loadConfig.pagesize;
            var url = loadConfig.url_api,data={
                ajax:'pullload',
                typeid:typeid,
                page:page,
                pagesize:pagesize
            };
            function ajax(url, data) {
                $.ajax({
                    url: url,
                    data:data,
                    async: false,
                    type: 'GET',
                    dataType: 'json',
                    success: function(data) {
                    	if(data.statu == 0 )
                    	{
                    		$(".more_lld a").html('数据已经加载完');
			                $(".more_lld p").remove();
			                loadConfig.loading=1; 
			                return false;
                    	}
                        addContent(data);
                    }
                });
            }

            ajax(url,data);
        }
    }
    function addContent (rs){
        if(rs.statu== 1){
            var data = rs.list;
            var total = rs.total;
            var arr=[];
            var len = data.length;

            var html = '';

            for(var i=0;i<len;i++){
             	html += '<li class="real_time_list">';
             		html += '<a href="'+data[i].arcurl+'">';
             			html += '<div class="list_box">';
             				html += '<p>'+data[i].day+'</p>';
             				html += '<p>'+data[i].month+'&nbsp;&nbsp;'+data[i].year+'</p>';
             			html += '</div>';
             			html += '<div class="list_rightbox">';
             				html += '<p class="text1_over"><span>•</span>'+data[i].title+'</p>';
             				html += '<p>'+data[i].info+'</p>';
             			html += '</div>';
             		html += '</a>';
             	html += '</li>';
            }
            arr.push(html);

            $('.real_time_news').append(html); 

            loadConfig.load_num = rs.load_num;

            if( total < loadConfig.page * loadConfig.pagesize || loadConfig.page > loadConfig.load_num ){
 
                 loadConfig.loading=1; 
                 $(".more_lld a").html('没有数据了');
                 $(".more_lld p").remove();
                 return false;
            }
            loadConfig.page++;
            loadConfig.loading = 0;
        }
    }

  	

});