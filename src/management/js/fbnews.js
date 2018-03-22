require(["config"],function(){
    require(["jquery","validate"],function($){
        $(function(){
            $("#myform").validate({
                rules: {
                    title: {
                        required: true
                    },
                    
                    ntype: {
                        required: true
                    },
                    
                    message: {
                        required: true
                    }
                },
                messages: {
                    title: {
                        required: "*标题不能为空"
                    },
                    
                    ntype: {
                        required: "*类别不能为空"
                    },
                   
                    message: {
                        required: "*描述不能为空"
                    }
                },
                submitHandler:function(form){
            $("#news_h").val(sessionStorage.getItem("news"));
            sessionStorage.removeItem("news");
            
                    $.ajax({
                        url:"http://localhost:9090/mng/mng",
                        type:"post",
                        dataType:"json",
                        data:$("#myform").serialize()
                    }).then(function(res){
                        console.log(res);
                    });
                    return false
                }
                
            })
        });
      
    })
})
