
    require(["config"],function(){
        require(["jquery"],function($){
            $(function(){
                $.ajax({
                    url:"http://localhost:9090/job/job",
                    type:"get",
                    dataType:"json"
                }).then(function(res){
                    for(var i=0; i<res.length; i++){
                        var str='<tr><td><input type="checkbox"/></td><td>'+res[i].j_position+'</td><td>'+res[i].j_class+'</td><td>'+res[i].j_address+'</td><td>'+res[i].j_num+'</td><td>'+res[i].j_time+'</td><td><a href="#">删除</a><a href="#">修改</a></td></tr>';
                        $("#tab").append(str)
                    }
                });
                $("table thead tr th input").on("click",function(){
                    $("#tab input").prop("checked",$(this).prop("checked"))
                })
            });
        })
    })