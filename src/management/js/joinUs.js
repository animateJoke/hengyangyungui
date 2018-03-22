
    require(["config"],function(){
        require(["jquery"],function($){
            $(function(){


                $.ajax({
                    url:"http://localhost:9090/job/job",
                    type:"get",
                    dataType:"json"
                }).then(function(res){
                    sessionStorage.setItem("joinUs",JSON.stringify(res));
                    var num =res.length>=7?7:res.length;
                    for(var i=0; i<num; i++){
                        var str='<tr data-info="'+res[i].j_id+'"><td><input type="checkbox"/></td><td>'+res[i].j_position+'</td><td>'+res[i].j_class+'</td><td>'+res[i].j_address+'</td><td>'+res[i].j_num+'</td><td>'+res[i].j_time+'</td><td><a href="#">删除</a></td></tr>';
                        $("#tab").append(str)
                    }
                    for(var i=0; i<Math.ceil(res.length/7); i++){
                        if(i==0){
                            var str='<li class="active"><a href="#">'+(i+1)+'<span class="sr-only">(current)</span></a></li>';
                        }else {
                            var str='<li><a href="#">'+(i+1)+'<span class="sr-only">(current)</span></a></li>';
                        }
                        $(str).insertBefore($(".pagination li:last-of-type"))
                    }

                    //下标点击事件
                    $(".pagination li").not($(".pagination li").first()).not($(".pagination li").last()).on("click",function(){
                        if(!$(this).hasClass("active")){
                            $(this).addClass("active").siblings().removeClass("active");
                            if($(this).index()==1){
                                $(this).prev().addClass("disabled")
                            }else{
                                $(this).parent().children().first().removeClass("disabled");
                                if($(this).index()==$(this).parent().parent().children().length-2){
                                    $(this).next().addClass("disabled")
                                }else {
                                    $(this).parent().children().last().removeClass("disabled")
                                }
                            }
                        }
                        var arr=JSON.parse(sessionStorage.getItem("joinUs"));
                        var index=parseInt($(this).find("a").text())-1;
                        var num=7*index+7>arr.length?arr.length:7*index+7;
                        $("#tab").html("");
                        for(var i=7*index; i<num; i++){
                            var str='<tr data-info="'+res[i].j_id+'"><td><input type="checkbox"/></td><td>'+res[i].j_position+'</td><td>'+res[i].j_class+'</td><td>'+res[i].j_address+'</td><td>'+res[i].j_num+'</td><td>'+res[i].j_time+'</td><td><a href="#">删除</a></td></tr>';
                            $("#tab").append(str)
                        }

                        //删除事件
                        $("#tab tr td a").on("click",function(){
                            $.ajax({
                                url:"http://localhost:9090/job/del",
                                type:"post",
                                dataType:"json",
                                data:{
                                    id:$(this).parents("tr").data("info")
                                }
                            }).then(function(res){
                            });

                            var arr=JSON.parse(sessionStorage.getItem("joinUs"));
                            for(var i=0; i<arr.length; i++){
                                if(arr[i].j_id==$(this).parents("tr").data("info")){
                                    arr.splice(i,1);
                                    break;
                                }
                            }
                            sessionStorage.setItem("joinUs",JSON.stringify(arr));
                            $(this).parents("tr").remove();
                        })
                    });

                    //删除事件
                    $("#tab tr td a").on("click",function(){
                        $.ajax({
                            url:"http://localhost:9090/job/del",
                            type:"post",
                            dataType:"json",
                            data:{
                                id:$(this).parents("tr").data("info")
                            }
                        }).then(function(res){
                        });
                        var arr=JSON.parse(sessionStorage.getItem("joinUs"));
                        for(var i=0; i<arr.length; i++){
                            if(arr[i].j_id==$(this).parents("tr").data("info")){
                                arr.splice(i,1);
                                break;
                            }
                        }
                        sessionStorage.setItem("joinUs",JSON.stringify(arr));
                        $(this).parents("tr").remove();
                    })

                });

                $("table thead tr th input").on("click",function(){
                    $("#tab input").prop("checked",$(this).prop("checked"))
                });

                $(".pagination li").first().on("click",function(){
                    if(!$(this).hasClass("disabled")){
                        $(".pagination li").last().removeClass("disabled");
                        var index=$(".pagination li.active").index();
                        $(".pagination li").eq(index).removeClass("active");
                        $(".pagination li").eq(index-1).addClass("active");
                        if(index==2){
                            $(this).addClass("disabled")
                        }
                    }
                });
                $(".pagination li").last().on("click",function(){
                    if(!$(this).hasClass("disabled")){
                        $(".pagination li").first().removeClass("disabled");
                        var index=$(".pagination li.active").index();
                        $(".pagination li").eq(index).removeClass("active");
                        $(".pagination li").eq(index+1).addClass("active");
                        if(index==$(".pagination li").length-3){
                            $(this).addClass("disabled")
                        }

                    }
                })

            });
        })
    })