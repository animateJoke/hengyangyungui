require(["config"], function() {
	require(["jquery"], function($) {
		$(function() {
            var rank = JSON.parse(sessionStorage.getItem("user")||"[]")[0].u_rank;
            var index=0;
			/*$.ajax({
				url: "http://101.200.60.236:9090/mng/mng",
				type: "get",
				dataType: "json"
			}).then(function(res) {
				console.log(res)

				for(var i = 0; i < res.length; i++) {
					obj = res[i];
					var str = '<tr data-info="' + res[i].id + '"><td><span>' + res[i].title + '</span></td><td>' + res[i].neditor + '</td><td><p>' + res[i].message + '</p></td><td>' + res[i].time + '</td><td>' + res[i].ntype + '</td><td><a href="#">删除</a></td></tr>';
					$("#tab").append(str)
				}
				$("#tab tr td a").on("click", function() {
					$.ajax({
						url: "http://101.200.60.236:9090/mng/del",
						type: "post",
						dataType: "json",
						data: {
							id: $(this).parents("tr").data("info")
						}
					}).then(function(res) {
						console.log(res);
					});
					$(this).parents("tr").remove()
				})
			});*/

            //获取总数的方法
            function getcount(){
                $.ajax({
                    url:"http://101.200.60.236:9090/mng/count",
                    type:"get",
                    dataType:"json"
                }).then(function(res){
                    $(".pagination li").not($(".pagination li").first()).not($(".pagination li").last()).remove();
                    var count=Math.ceil(res["count(*)"]/12);
                    for(var i=0; i<count; i++){
                        if(i==0){
                            var str='<li class="active"><a href="#">'+(i+1)+'<span class="sr-only">(current)</span></a></li>';
                        }else {
                            var str='<li><a href="#">'+(i+1)+'<span class="sr-only">(current)</span></a></li>';
                        }
                        $(str).insertBefore($(".pagination li:last-of-type"))
                    };
                    //下标点击翻页
                    $(".pagination li").not($(".pagination li").first()).not($(".pagination li").last()).on("click",function(){
                        if(!$(this).hasClass("active")){
                            index=$(this).index()-1;
                            get(index);
                            $(this).addClass("active").siblings().removeClass("active");
                            if($(this).index()==1){
                                $(this).prev().addClass("disabled")
                                $(this).parent().children().last().removeClass("disabled")
                            }else{
                                $(this).parent().children().first().removeClass("disabled");
                                if($(this).index()==$(this).parent().children().length-2){
                                    $(this).next().addClass("disabled")
                                }else {
                                    $(this).parent().children().last().removeClass("disabled")
                                }
                            }
                        }
                    })
                })
            }
            getcount();
            //获取数据的方法
            function get(index){
                $.ajax({
                    url:"http://101.200.60.236:9090/mng/mng",
                    type:"get",
                    dataType:"json",
                    data:{
                        index:index
                    }
                }).then(function(res){
                    $("#tab").html("")
                    for(var i=0; i<res.length; i++){
                        if(rank<=2){
                            var str = '<tr data-info="' + res[i].id + '"><td><span>' + res[i].title + '</span></td><td>' + res[i].neditor + '</td><td><p>' + res[i].message + '</p></td><td>' + res[i].time + '</td><td>' + res[i].ntype + '</td><td><a href="#" class="active">删除</a></td></tr>';
                        }else {
                            var str = '<tr data-info="' + res[i].id + '"><td><span>' + res[i].title + '</span></td><td>' + res[i].neditor + '</td><td><p>' + res[i].message + '</p></td><td>' + res[i].time + '</td><td>' + res[i].ntype + '</td><td><a href="#" class="disabled">删除</a></td></tr>';
                        }
                        $("#tab").append(str)
                    };
                    console.log($("#tab tr td a.active"));
                    $("#tab tr td a.active").on("click",function(){
                        $.ajax({
                            url:"http://101.200.60.236:9090/mng/del",
                            type:"post",
                            dataType:"json",
                            data:{
                                id:$(this).parents("tr").data("info")
                            }
                        }).then(function(res){
                            $(this).parents("tr").remove();
                            getcount();
                            get(index)
                        });

                    })
                })
            }
            get(0);


            //上一页
            $(".pagination li").first().on("click",function(){
                if(!$(this).hasClass("disabled")){
                    $(".pagination li").last().removeClass("disabled");
                    var index1=$(".pagination li.active").index();
                    $(".pagination li").eq(index1).removeClass("active");
                    $(".pagination li").eq(index1-1).addClass("active");
                    if(index1==2){
                        $(this).addClass("disabled")
                    }
                    index--;
                    get(index)
                }
            });
            //下一页
            $(".pagination li").last().on("click",function(){
                if(!$(this).hasClass("disabled")){
                    $(".pagination li").first().removeClass("disabled");
                    var index1=$(".pagination li.active").index();
                    $(".pagination li").eq(index1).removeClass("active");
                    $(".pagination li").eq(index1+1).addClass("active");
                    if(index1==$(".pagination li").length-3){
                        $(this).addClass("disabled")
                    }
                    index++;
                    get(index)
                }
            })
		});
	})
})

