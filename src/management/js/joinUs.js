
    require(["config"],function(){
        require(["jquery"],function($){
            $(function(){


                $.ajax({
                    url:"http://localhost:9090/job/job",
                    type:"get",
                    dataType:"json"
                }).then(function(res){
                    for(var i=0; i<res.length; i++){
                        var str='<tr data-info="'+res[i].j_id+'"><td><input type="checkbox"/></td><td>'+res[i].j_position+'</td><td>'+res[i].j_class+'</td><td>'+res[i].j_address+'</td><td>'+res[i].j_num+'</td><td>'+res[i].j_time+'</td><td><a href="#">删除</a></td></tr>';
                        $("#tab").append(str)
                    }
                    $("#tab tr td a").on("click",function(){
                        $.ajax({
                            url:"http://localhost:9090/job/del",
                            type:"post",
                            dataType:"json",
                            data:{
                                id:$(this).parents("tr").data("info")
                            }
                        }).then(function(res){
                            console.log(res);
                        });
                        $(this).parents("tr").remove()
                    })

                });

                $("table thead tr th input").on("click",function(){
                    $("#tab input").prop("checked",$(this).prop("checked"))
                });



            });
        })
    })