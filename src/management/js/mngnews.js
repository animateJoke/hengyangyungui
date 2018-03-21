
    require(["config"],function(){
        require(["jquery"],function($){
            $(function(){
                $.ajax({
                    url:"http://localhost:9090/mng/mng",
                    type:"get",
                    dataType:"json"
                }).then(function(res){
                    console.log(res)
                    for(var i=0; i<res.length; i++){
                    	
               		var str='<tr><td><span>'+res[i].title+'</span></td><td>'+res[i].neditor+'</td><td><p>'+res[i].message+'</p></td><td>'+res[i].time+'</td><td>'+res[i].ntype+'</td><td><a onclick="del()">删除</a><a href="#">编辑</a></td></tr>';
                        $("#tab").append(str)
                    }
                });
               
            });
        })
    })
    

